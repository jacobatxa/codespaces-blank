#!/usr/bin/env python3
"""
AI News Aggregator — Data Generator
Fetches from RSS feeds + GitHub API, classifies articles, generates data.js
Balanced Chinese/English sources (target: ~50/50)
"""

import json
import re
import html
import os
import urllib.request
import urllib.error
from datetime import datetime, timezone

# ── Configuration ────────────────────────────────────────────────
MAX_ARTICLES = 200
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))

# ── RSS Sources ──────────────────────────────────────────────────
# Balanced: ~50% English, ~50% Chinese

SOURCES = [
    # ── English Sources (50%) ──
    {
        "name": "TechCrunch - AI",
        "lang": "en",
        "url": "https://techcrunch.com/category/artificial-intelligence/feed/",
        "max": 12
    },
    {
        "name": "Hugging Face Blog",
        "lang": "en",
        "url": "https://huggingface.co/blog/feed.xml",
        "max": 12
    },
    {
        "name": "ArsTechnica - AI",
        "lang": "en",
        "url": "https://feeds.arstechnica.com/arstechnica/index",
        "max": 12
    },
    {
        "name": "The Verge - AI",
        "lang": "en",
        "url": "https://www.theverge.com/rss/ai-artificial-intelligence/index.xml",
        "max": 10
    },
    {
        "name": "OpenAI Blog",
        "lang": "en",
        "url": "https://openai.com/news/rss.xml",
        "max": 8
    },
    {
        "name": "Wired - AI",
        "lang": "en",
        "url": "https://www.wired.com/feed/tag/ai/latest/rss",
        "max": 8,
        "filter_ai": True
    },
    {
        "name": "Simon Willison's Blog",
        "lang": "en",
        "url": "https://simonwillison.net/atom/everything/",
        "max": 12
    },
    {
        "name": "VentureBeat - AI",
        "lang": "en",
        "url": "https://feeds.feedburner.com/venturebeat/SZYF",
        "max": 8
    },
    {
        "name": "Google AI Blog",
        "lang": "en",
        "url": "https://blog.google/technology/ai/rss/",
        "max": 8
    },
    {
        "name": "MIT Technology Review - AI",
        "lang": "en",
        "url": "https://www.technologyreview.com/feed/",
        "max": 8,
        "filter_ai": True
    },
    # ── Chinese Sources (50%) ──
    {
        "name": "量子位",
        "lang": "zh",
        "url": "https://www.qbitai.com/feed",
        "max": 30
    },
    {
        "name": "APPSO",
        "lang": "zh",
        "url": "https://www.ifanr.com/feed",
        "max": 25,
        "filter_ai": True
    },
    {
        "name": "动点科技 - AI",
        "lang": "zh",
        "url": "https://cn.technode.com/feed/",
        "max": 20,
        "filter_ai": True
    },
    {
        "name": "少数派 - AI",
        "lang": "zh",
        "url": "https://sspai.com/feed",
        "max": 20,
        "filter_ai": True
    },
    {
        "name": "雷锋网 - AI",
        "lang": "zh",
        "url": "https://www.leiphone.com/feed",
        "max": 20,
        "filter_ai": True
    },
    {
        "name": "机器之心",
        "lang": "zh",
        "url": "https://www.jiqizhixin.com/rss",
        "max": 20,
        "filter_ai": True
    },
    {
        "name": "36氪 - AI",
        "lang": "zh",
        "url": "https://36kr.com/feed",
        "max": 20,
        "filter_ai": True
    },
]

# ── Category Classification ──────────────────────────────────────

CATEGORIES = [
    {
        "name": "大模型与基础架构",
        "icon": "🧠",
        "color": "#7c3aed",
        "keywords": ["llm", "model", "gpt", "gemini", "claude", "llama", "qwen",
                     "mistral", "deepseek", "transformer", "大模型", "开源模型",
                     "训练", "推理", "foundation model", "参数", "训练数据",
                     "granite|model", "kimi", "miMo", "minicpm", "yi-lightning"]
    },
    {
        "name": "AI Agent与智能体",
        "icon": "🤯",
        "color": "#d97706",
        "keywords": ["agent", "autonomous", "tool use", "mcp", "a2a", "function calling",
                     "智能体", "agentic", "copilot", "coding agent", "openhands",
                     "claude code", "cursor", "genflow", "langchain"]
    },
    {
        "name": "具身智能与机器人",
        "icon": "🤖",
        "color": "#059669",
        "keywords": ["robot", "embodied", "humanoid", "robotics", "灵巧手",
                     "具身", "机器人", "波士顿动力", "figure", "tesla bot",
                     "擎天柱", "四足"]
    },
    {
        "name": "多模态与AIGC",
        "icon": "🎨",
        "color": "#dc2626",
        "keywords": ["multimodal", "vision", "image", "video", "sora", "stable diffusion",
                     "midjourney", "dall-e", "aigc", "文生图", "图生视频",
                     "video generation", "text-to-video", "text-to-image",
                     "whisper", "tts", "voice", "audio", "speech"]
    },
    {
        "name": "AI硬件与芯片",
        "icon": "💾",
        "color": "#0891b2",
        "keywords": ["nvidia", "gpu", "芯片", "h100", "b200", "a100", "cuda",
                     "amd", "intel", "habana", "tpu", "asic", "能效",
                     "inference chip", "edge ai", "端侧推理"]
    },
    {
        "name": "开源与生态",
        "icon": "🌐",
        "color": "#2563eb",
        "keywords": ["open source", "hugging face", "开源", "生态", "社区",
                     "huggingface", "pytorch", "tensorflow", "jax",
                     "fine-tuning", "微调", "llama.cpp", "ollama"]
    },
    {
        "name": "AI商业与投融资",
        "icon": "💰",
        "color": "#ca8a04",
        "keywords": ["funding", "startup", "ipo", "acquisition", "revenue",
                     "融资", "投资", "商业化", "上市", "财报", "openai",
                     "anthropic", "估值", "独角兽", "market"]
    },
    {
        "name": "AI安全与对齐",
        "icon": "🛡️",
        "color": "#dc2626",
        "keywords": ["safety", "alignment", "bias", "hallucination", "jailbreak",
                     "安全", "对齐", "幻觉", "伦理", "deepfake", "detection",
                     "regulation", "监管", "政策", "治理"]
    },
    {
        "name": "其他AI资讯",
        "icon": "🔮",
        "color": "#6b7280",
        "keywords": []  # catch-all
    },
]


# ── RSS Fetcher ──────────────────────────────────────────────────

def fetch_rss(url, timeout=10):
    """Fetch and parse an RSS/Atom feed, return list of entries."""
    try:
        req = urllib.request.Request(
            url,
            headers={
                "User-Agent": "Mozilla/5.0 (compatible; AI-News-Aggregator/1.0)"
            }
        )
        with urllib.request.urlopen(req, timeout=timeout) as resp:
            raw = resp.read()
    except Exception as e:
        print(f"  ⚠️  Failed to fetch {url}: {e}")
        return []

    return parse_feed(raw)


def parse_feed(raw):
    """Simple RSS/Atom parser using regex (no external deps)."""
    text = raw.decode("utf-8", errors="replace")

    entries = []

    # Try to find items/entries
    item_pattern = re.compile(
        r'<(?:item|entry)(?:\s[^>]*)?>(.*?)</(?:item|entry)>',
        re.DOTALL | re.IGNORECASE
    )

    for item_match in item_pattern.finditer(text):
        item_text = item_match.group(1)

        def extract(tag):
            m = re.search(rf'<{tag}[^>]*>(.*?)</{tag}>', item_text, re.DOTALL | re.IGNORECASE)
            if m:
                return m.group(1).strip()
            # Try attribute-based patterns (like <link href="..."/>)
            if tag == "link":
                m = re.search(r'<link[^>]+href="([^"]+)"', item_text, re.IGNORECASE)
                if m:
                    return m.group(1).strip()
            return ""

        title = html.unescape(re.sub(r'<[^>]+>', '', extract("title")))
        if not title:
            # Fallback: try to get title directly with CDATA handling
            raw_title = extract("title")
            cdata_m = re.search(r'<!\[CDATA\[(.*?)\]\]>', raw_title, re.DOTALL)
            if cdata_m:
                title = html.unescape(cdata_m.group(1).strip())
            else:
                title = html.unescape(raw_title.strip())
        link = extract("link")
        summary_raw = extract("summary") or extract("description") or extract("content") or ""
        summary = html.unescape(re.sub(r'<[^>]+>', '', summary_raw)).strip()
        if not summary:
            cdata_m = re.search(r'<!\[CDATA\[(.*?)\]\]>', summary_raw, re.DOTALL)
            if cdata_m:
                summary = html.unescape(cdata_m.group(1).strip())
        date_str = extract("published") or extract("updated") or extract("pubDate") or ""

        # Clean up summary
        summary = re.sub(r'\s+', ' ', summary).strip()
        if len(summary) > 300:
            summary = summary[:297] + "..."

        if title and link:
            entries.append({
                "title": title,
                "url": link,
                "summary": summary,
                "date": date_str,
                "date_raw": date_str,
            })

    return entries


def parse_date(date_str):
    """Try to parse a date string, return ISO date or empty."""
    if not date_str:
        return ""
    
    # Already ISO-like
    m = re.match(r'^(\d{4}-\d{2}-\d{2})', date_str)
    if m:
        return m.group(1)
    
    # Try common RSS date formats
    patterns = [
        "%a, %d %b %Y %H:%M:%S %z",
        "%a, %d %b %Y %H:%M:%S %Z",
        "%Y-%m-%dT%H:%M:%S%z",
        "%Y-%m-%dT%H:%M:%S",
        "%Y-%m-%dT%H:%M:%S.%f%z",
        "%Y-%m-%dT%H:%M:%S.%f",
    ]
    for fmt in patterns:
        try:
            dt = datetime.strptime(date_str.strip(), fmt)
            return dt.strftime("%Y-%m-%d")
        except ValueError:
            continue
    
    return date_str[:10] if len(date_str) >= 10 else date_str


def classify_article(article):
    """Classify an article into a category based on title + summary keywords."""
    text = (article["title"] + " " + article["summary"]).lower()
    
    for cat in CATEGORIES:
        if cat["keywords"]:
            for kw in cat["keywords"]:
                if "|" in kw:
                    # compound match — all parts must match
                    parts = [p.strip() for p in kw.split("|")]
                    if all(p in text for p in parts):
                        return cat["name"]
                elif kw in text:
                    return cat["name"]
    
    return "其他AI资讯"


# ── GitHub Trending Fetcher ─────────────────────────────────────

# ── AI Project "What it does" blurbs for popular AI repos ──────
# When description is short or generic, we add context via a known-repo map.
# Keyed by full_name (lowercase). Falls back to truncated description.
AI_PROJECT_BLURBS = {
    "openai/whisper": "Speech recognition model — transcribes audio in 99+ languages, near-human accuracy.",
    "openai/gpt-4": "GPT-4 multimodal language model — advanced reasoning, vision understanding, long context.",
    "openai/gpt-3": "GPT-3 language model — text generation, translation, QA, and code completion.",
    "openai/clip": "Vision-language model — connects images and text for zero-shot classification.",
    "openai/dall-e": "Text-to-image generation — create detailed images from natural language prompts.",
    "deepseek-ai/deepseek-v4": "DeepSeek reasoning model — strong math/coding performance, cost-efficient inference.",
    "deepseek-ai/deepseek-r1": "Reasoning-focused LLM — chain-of-thought, math, code with reinforcement learning.",
    "deepseek-ai/deepseek-coder": "Code-specialized LLM — supports 87+ programming languages, trained on 2T tokens.",
    "deepseek-ai/deepseek-v3": "DeepSeek-V3 MoE language model — 671B total params, 37B activated per token.",
    "deepseek-ai/deepseek": "DeepSeek LLM — open-source chat model with strong multilingual performance.",
    "meta-llama/llama": "Meta's open-source LLM family — Llama 2/3, foundation for many fine-tuned models.",
    "meta-llama/llama-3": "Meta Llama 3 — open-source 8B/70B/405B models, strong benchmarks across tasks.",
    "mistralai/mistral": "Mistral AI — efficient open-weight LLMs with strong reasoning and code abilities.",
    "mistralai/mixtral": "Mixtral 8x22B MoE — sparse mixture-of-experts model, efficient inference.",
    "anthropics/claude": "Anthropic Claude — safety-aligned AI assistant, strong coding and analysis.",
    "anthropic/claude-code": "Claude Code — terminal-based AI coding agent with tool use and file editing.",
    "google/gemini": "Google Gemini — multimodal model family, text/image/audio/video understanding.",
    "google-deepmind/gemini": "Google DeepMind Gemini — multimodal AI with long context and agent capabilities.",
    "qwenlm/qwen": "Alibaba Qwen — open-source bilingual (CN/EN) LLM family with strong performance.",
    "qwenlm/qwen2": "Qwen2 — next-gen bilingual LLM, improved coding, math, and long-context handling.",
    "qwenlm/qwen2.5": "Qwen2.5 — upgraded bilingual LLM, stronger reasoning, larger vocabulary.",
    "01-ai/yi": "01.AI Yi — bilingual open-source LLM, competitive with LLaMA-class models.",
    "THUDM/chatglm": "ChatGLM — Tsinghua bilingual LLM, efficient Chinese-English dialogue.",
    "THUDM/glm": "GLM — Tsinghua general language model, foundation for ChatGLM series.",
    "timqian/chinese-independent-blogs": "Chinese independent blog aggregator — curated list of personal tech blogs.",
    "suno-ai/suno": "AI music generation — text-to-song with realistic vocals and instruments.",
    "RVC-Project/RVC": "Real-time voice conversion — clone any voice with minimal training data.",
    "hpcaitech/colossalai": "Distributed AI training framework — efficient parallel training for large models.",
    "langchain-ai/langchain": "LLM application framework — chaining, agents, RAG, and tool orchestration.",
    "langgenius/dify": "LLM application platform — visual workflow builder for AI apps and agents.",
    "n8n-io/n8n": "AI workflow automation — connect LLMs, APIs, and services with visual nodes.",
    "lobehub/lobe-chat": "Modern AI chat interface — multi-provider, plugin system, agent marketplace.",
    "open-webui/open-webui": "Self-hosted AI chat UI — Ollama/OpenAI compatible, document RAG, multi-user.",
    "ollama/ollama": "Local LLM runner — run Llama, Qwen, Mistral and hundreds of models locally.",
    "ggerganov/llama.cpp": "CPU-friendly LLM inference — run LLMs on consumer hardware efficiently.",
    "gradio-app/gradio": "ML demo UI framework — turn any Python model into a web interface.",
    "huggingface/transformers": "HuggingFace Transformers — universal API for 100k+ pretrained models.",
    "huggingface/diffusers": "Diffusion model library — Stable Diffusion, fine-tuning, image pipelines.",
    "comfyanonymous/comfyui": "Node-based Stable Diffusion UI — visual workflow for image generation.",
    "AUTOMATIC1111/stable-diffusion-webui": "Stable Diffusion web interface — image generation, inpainting, extensions.",
    "microsoft/autogen": "Multi-agent conversation framework — build LLM agent teams for complex tasks.",
    "microsoft/semantic-kernel": "AI orchestration SDK — integrate LLMs, plugins, and memory into apps.",
    "microsoft/generative-ai-for-beginners": "Microsoft AI curriculum — 18-lesson generative AI course for beginners.",
    "openai/openai-cookbook": "OpenAI API examples — code patterns, guides, and best practices collection.",
    "crewai": "Multi-agent AI orchestration — role-based agent teams for autonomous task execution.",
}


def fetch_repo_blurb(full_name, description, topics):
    """Generate a concise \"what this does\" blurb for a trending repo."""
    key = full_name.lower().strip()
    # Exact match first
    if key in AI_PROJECT_BLURBS:
        return AI_PROJECT_BLURBS[key]
    # Try partial key match
    for k, v in AI_PROJECT_BLURBS.items():
        if k in key or key in k:
            return v
    # Fallback: use description, or derive from name if empty
    desc = (description or "").strip()
    if desc and len(desc) > 15:
        return desc[:200]
    # Last resort: generate from repo name
    name = full_name.split("/")[-1] if "/" in full_name else full_name
    parts = re.sub(r'[-_]', ' ', name).split()
    if parts and parts[0][0].isupper():
        return f"{' '.join(parts)} — open-source AI/ML project."
    return f"AI/ML project on GitHub — {full_name}."


def fetch_github_trending():
    """Fetch top AI/ML repos from GitHub API, return list of repo objects with blurbs."""
    url = "https://api.github.com/search/repositories?q=ai+ml+llm&sort=stars&order=desc&per_page=15"
    print("  📡 GitHub Trending (AI repos) ...", end=" ", flush=True)
    try:
        req = urllib.request.Request(
            url,
            headers={
                "User-Agent": "AI-News-Aggregator/1.0",
                "Accept": "application/vnd.github.v3+json"
            }
        )
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = json.loads(resp.read().decode("utf-8"))
    except Exception as e:
        print(f"⚠️  Failed: {e}")
        return []

    items = data.get("items", [])
    repos = []
    for r in items[:15]:
        lang = r.get("language") or "Unknown"
        desc = (r.get("description") or "")[:200] if r.get("description") else ""
        blurb = fetch_repo_blurb(r["full_name"], desc, r.get("topics", []))
        repos.append({
            "name": r["full_name"],
            "url": r["html_url"],
            "description": desc,
            "blurb": blurb,  # <-- new: concise what-it-does summary
            "stars": r["stargazers_count"],
            "forks": r.get("forks_count", 0),
            "language": lang,
            "topics": r.get("topics", []),
        })
    print(f"{len(repos)} repos")
    return repos


# ── Source colors ────────────────────────────────────────────────

SOURCE_COLORS = {
    "Hugging Face Blog": "#6366f1",
    "Lil'Log (Lilian Weng)": "#7c3aed",
    "Simon Willison's Blog": "#0891b2",
    "MIT Technology Review - AI": "#059669",
    "TechCrunch - AI": "#dc2626",
    "ArsTechnica - AI": "#f97316",
    "The Verge - AI": "#8b5cf6",
    "VentureBeat - AI": "#14b8a6",
    "Google AI Blog": "#2563eb",
    "OpenAI Blog": "#059669",
    "Wired - AI": "#eab308",
    "量子位": "#eab308",
    "36氪 - AI": "#ec4899",
    "APPSO": "#f43f5e",
    "机器之心": "#0ea5e9",
    "动点科技 - AI": "#10b981",
    "少数派 - AI": "#f97316",
    "雷锋网 - AI": "#8b5cf6",
}

SOURCE_SHORT = {
    "Hugging Face Blog": "HF",
    "Lil'Log (Lilian Weng)": "Lil.Log",
    "Simon Willison's Blog": "S.Willison",
    "MIT Technology Review - AI": "MIT Rev.",
    "TechCrunch - AI": "TechCrunch",
    "ArsTechnica - AI": "ArsTech",
    "The Verge - AI": "The Verge",
    "VentureBeat - AI": "VB",
    "Google AI Blog": "Google AI",
    "OpenAI Blog": "OpenAI",
    "Wired - AI": "Wired",
    "量子位": "量子位",
    "36氪 - AI": "36氪",
    "APPSO": "APPSO",
    "机器之心": "机器之心",
    "动点科技 - AI": "动点",
    "少数派 - AI": "少数派",
    "雷锋网 - AI": "雷锋网",
}

SOURCE_TAGS = {
    "Hugging Face Blog": "专业",
    "Lil'Log (Lilian Weng)": "专业",
    "Simon Willison's Blog": "独立",
    "MIT Technology Review - AI": "媒体",
    "TechCrunch - AI": "媒体",
    "ArsTechnica - AI": "媒体",
    "The Verge - AI": "媒体",
    "VentureBeat - AI": "媒体",
    "Google AI Blog": "官方",
    "OpenAI Blog": "官方",
    "Wired - AI": "媒体",
    "量子位": "中文",
    "36氪 - AI": "中文",
    "APPSO": "中文",
    "机器之心": "中文",
    "动点科技 - AI": "中文",
    "少数派 - AI": "中文",
    "雷锋网 - AI": "中文",
}


# ── Main ─────────────────────────────────────────────────────────

def main():
    today = datetime.now(timezone.utc).strftime("%Y-%m-%d")
    fetched_at = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%S")
    
    all_articles = []
    source_counts = {}
    en_count = 0
    zh_count = 0
    
    print(f"🤖 AI News Aggregator — {today}")
    print(f"   Sources: {len(SOURCES)} ({sum(1 for s in SOURCES if s['lang']=='en')} EN, {sum(1 for s in SOURCES if s['lang']=='zh')} ZH)")
    print(f"   Target: ~{MAX_ARTICLES} articles\n")
    
    for source in SOURCES:
        print(f"  📡 {source['name']} ({source['lang']}) ...", end=" ", flush=True)
        entries = fetch_rss(source["url"])
        
        # Filter general feeds to AI-related content only
        ai_filter = source.get("filter_ai", False)
        if ai_filter:
            ai_keywords = ["ai", "artificial intelligence", "machine learning", "deep learning",
                          "llm", "gpt", "neural", "model", "robot", "automation",
                          "人工智能", "机器学习", "大模型", "gpu", "芯片",
                          "agent", "copilot", "openai", "anthropic", "gemini",
                          "claude", "llama", "mistral", "deepseek"]
            filtered = []
            for e in entries:
                text = (e["title"] + " " + e["summary"]).lower()
                if any(kw in text for kw in ai_keywords):
                    filtered.append(e)
            entries = filtered
        
        # Limit per source
        max_per_source = source.get("max", 20)
        entries = entries[:max_per_source]
        
        print(f"{len(entries)} entries")
        
        for entry in entries:
            entry["source"] = source["name"]
            entry["lang"] = source["lang"]
            entry["parsed_date"] = parse_date(entry.get("date", ""))
        
        all_articles.extend(entries)
        source_counts[source["name"]] = len(entries)
        if source["lang"] == "en":
            en_count += len(entries)
        else:
            zh_count += len(entries)
    
    print(f"\n  📊 Raw: {en_count} EN + {zh_count} ZH = {en_count + zh_count} total")
    
    # Sort by date (newest first), deduplicate by URL
    seen_urls = set()
    deduped = []
    for a in sorted(all_articles, key=lambda x: x.get("parsed_date", ""), reverse=True):
        if a["url"] not in seen_urls:
            seen_urls.add(a["url"])
            deduped.append(a)
    
    print(f"  📊 Deduped: {len(deduped)} articles")
    
    # Classify
    for a in deduped:
        a["category"] = classify_article(a)
    
    # Balance: ensure ~50/50 by taking top from each language
    en_articles = [a for a in deduped if a["lang"] == "en"]
    zh_articles = [a for a in deduped if a["lang"] == "zh"]
    
    target_per_lang = MAX_ARTICLES // 2
    selected_en = en_articles[:min(target_per_lang, len(en_articles))]
    selected_zh = zh_articles[:min(target_per_lang, len(zh_articles))]
    
    print(f"  📊 Balanced: {len(selected_en)} EN + {len(selected_zh)} ZH = {len(selected_en) + len(selected_zh)} total")
    
    # Combine and fill remaining slots from the side with more articles
    selected_urls = set()
    selected = []
    for a in selected_en + selected_zh:
        if a["url"] not in selected_urls:
            selected_urls.add(a["url"])
            selected.append(a)
    
    remaining = MAX_ARTICLES - len(selected)
    if remaining > 0:
        extra = [a for a in deduped if a["url"] not in selected_urls][:remaining]
        for a in extra:
            selected_urls.add(a["url"])
            selected.append(a)
    
    # Final balance stats
    final_en = sum(1 for a in selected if a["lang"] == "en")
    final_zh = sum(1 for a in selected if a["lang"] == "zh")
    print(f"  📊 Final: {final_en} EN + {final_zh} ZH = {len(selected)} total")
    
    # Mark new articles (within last 48 hours)
    cutoff = datetime.now(timezone.utc).timestamp() - 172800  # 48 hours
    for a in selected:
        try:
            d = a.get("parsed_date", "")
            if d:
                dt = datetime.strptime(d, "%Y-%m-%d")
                a["is_new"] = dt.timestamp() > cutoff
            else:
                a["is_new"] = False
        except:
            a["is_new"] = False
    
    # Group into sections
    sections = []
    seen_cats = set()
    for cat in CATEGORIES:
        cards = [{
            "title": a["title"],
            "url": a["url"],
            "source": a["source"],
            "date": a.get("parsed_date", "") or a.get("date", "")[:10],
            "summary": a.get("summary", ""),
            "is_new": a.get("is_new", False),
            "lang": a.get("lang", "en"),
        } for a in selected if a["category"] == cat["name"]]
        
        if cards:
            sections.append({
                "name": cat["name"],
                "icon": cat["icon"],
                "color": cat["color"],
                "count": len(cards),
                "cards": cards,
            })
            seen_cats.add(cat["name"])
    
    # Build tabs
    tabs = [{
        "name": s["name"],
        "icon": s["icon"],
        "color": s["color"],
        "count": s["count"],
    } for s in sections]
    
    # ── Fetch GitHub Trending ──
    print()
    trending = fetch_github_trending()
    
    # Build output data
    output = {
        "today": today,
        "fetched_at": fetched_at,
        "total": len(selected),
        "sources": {k: {"count": v, "color": SOURCE_COLORS.get(k, "#6b7280")} for k, v in source_counts.items() if v > 0},
        "shortNames": SOURCE_SHORT,
        "tabs": tabs,
        "sections": sections,
        "trending": trending,
    }
    
    # Sanitize for JavaScript
    def sanitize(v):
        if isinstance(v, str):
            v = v.replace("\\", "\\\\").replace("'", "\\'").replace("\n", " ").replace("\r", " ")
            return v
        return v
    
    def sanitize_value(v):
        if isinstance(v, dict):
            return {k: sanitize_value(val) for k, val in v.items()}
        elif isinstance(v, list):
            return [sanitize_value(item) for item in v]
        else:
            return sanitize(v)
    
    clean = sanitize_value(output)
    
    # Write data.js
    js = "const APP_DATA = " + json.dumps(clean, ensure_ascii=False, indent=1) + ";"
    output_path = os.path.join(SCRIPT_DIR, "data.js")
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(js)
    
    print(f"\n  ✅ data.js written with {len(selected)} articles")
    print(f"     EN: {final_en} | ZH: {final_zh}")
    print(f"     Sources: {len([s for s in source_counts.values() if s > 0])} active")
    print(f"     Trending repos: {len(trending)}")
    
    # Print source statistics
    print(f"\n  📋 Source breakdown:")
    for s in sorted(output["sources"].items(), key=lambda x: -x[1]["count"]):
        print(f"     {s[1]['count']:4d} | {s[0]}")
    
    print(f"\n  ✅ Done! Fetched at {fetched_at}")


if __name__ == "__main__":
    main()
