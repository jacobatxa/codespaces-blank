const APP_DATA = {
 "today": "2026-05-10",
 "fetched_at": "2026-05-10T00:00:25",
 "total": 143,
 "sources": {
  "TechCrunch - AI": {
   "count": 12,
   "color": "#dc2626"
  },
  "Hugging Face Blog": {
   "count": 12,
   "color": "#6366f1"
  },
  "ArsTechnica - AI": {
   "count": 12,
   "color": "#f97316"
  },
  "The Verge - AI": {
   "count": 10,
   "color": "#8b5cf6"
  },
  "OpenAI Blog": {
   "count": 8,
   "color": "#059669"
  },
  "Wired - AI": {
   "count": 8,
   "color": "#eab308"
  },
  "Simon Willison's Blog": {
   "count": 12,
   "color": "#0891b2"
  },
  "VentureBeat - AI": {
   "count": 7,
   "color": "#14b8a6"
  },
  "Google AI Blog": {
   "count": 8,
   "color": "#2563eb"
  },
  "MIT Technology Review - AI": {
   "count": 7,
   "color": "#059669"
  },
  "量子位": {
   "count": 10,
   "color": "#eab308"
  },
  "APPSO": {
   "count": 9,
   "color": "#f43f5e"
  },
  "动点科技 - AI": {
   "count": 2,
   "color": "#10b981"
  },
  "少数派 - AI": {
   "count": 1,
   "color": "#f97316"
  },
  "雷锋网 - AI": {
   "count": 14,
   "color": "#8b5cf6"
  },
  "36氪 - AI": {
   "count": 11,
   "color": "#ec4899"
  }
 },
 "shortNames": {
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
  "雷锋网 - AI": "雷锋网"
 },
 "tabs": [
  {
   "name": "大模型与基础架构",
   "icon": "🧠",
   "color": "#7c3aed",
   "count": 45
  },
  {
   "name": "AI Agent与智能体",
   "icon": "🤯",
   "color": "#d97706",
   "count": 11
  },
  {
   "name": "具身智能与机器人",
   "icon": "🤖",
   "color": "#059669",
   "count": 6
  },
  {
   "name": "多模态与AIGC",
   "icon": "🎨",
   "color": "#dc2626",
   "count": 5
  },
  {
   "name": "AI硬件与芯片",
   "icon": "💾",
   "color": "#0891b2",
   "count": 8
  },
  {
   "name": "开源与生态",
   "icon": "🌐",
   "color": "#2563eb",
   "count": 2
  },
  {
   "name": "AI商业与投融资",
   "icon": "💰",
   "color": "#ca8a04",
   "count": 13
  },
  {
   "name": "AI安全与对齐",
   "icon": "🛡️",
   "color": "#dc2626",
   "count": 1
  },
  {
   "name": "其他AI资讯",
   "icon": "🔮",
   "color": "#6b7280",
   "count": 52
  }
 ],
 "sections": [
  {
   "name": "大模型与基础架构",
   "icon": "🧠",
   "color": "#7c3aed",
   "count": 45,
   "cards": [
    {
     "title": "Chrome's 4GB AI model isn't new, but you're not wrong for being confused",
     "url": "https://arstechnica.com/google/2026/05/no-google-hasnt-changed-chromes-local-ai-features-its-just-as-confusing-as-ever/",
     "source": "ArsTechnica - AI",
     "date": "2026-05-08",
     "summary": "You can stop Chrome from taking up 4GB of storage for local AI, but that shouldn't be your problem.",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "Using Claude Code: The Unreasonable Effectiveness of HTML",
     "url": "https://simonwillison.net/2026/May/8/unreasonable-effectiveness-of-html/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-05-08",
     "summary": "Using Claude Code: The Unreasonable Effectiveness of HTML Thought-provoking piece by Thariq Shihipar (on the Claude Code team at Anthropic) advocating for HTML over Markdown as an output format to request from Claude. The article is crammed with interesting examples (collected on this site) and p...",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "OpenAI brings GPT-5-class reasoning to real-time voice — and it changes what voice agents can actually orchestrate",
     "url": "https://venturebeat.com/orchestration/openai-brings-gpt-5-class-reasoning-to-real-time-voice-and-it-changes-what-voice-agents-can-actually-orchestrate",
     "source": "VentureBeat - AI",
     "date": "2026-05-08",
     "summary": "Voice agents have been expensive to run and painful to orchestrate, not because the models can't handle conversation, but because context ceilings forced enterprises to build session resets, state compression, and reconstruction layers into every deployment. OpenAI's three new voice models are de...",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "Anthropic wants to own your agent's memory, evals, and orchestration — and that should make enterprises nervous",
     "url": "https://venturebeat.com/orchestration/anthropic-wants-to-own-your-agents-memory-evals-and-orchestration-and-that-should-make-enterprises-nervous",
     "source": "VentureBeat - AI",
     "date": "2026-05-08",
     "summary": "Just a few weeks after announcing Claude Managed Agents, Anthropic has updated the platform with three new capabilities that collapse infrastructure layers like memory, evaluation, and multi-agent orchestration, into a single runtime.This move could threaten the standalone tools that many enterpr...",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "OpenAI introduces new ‘Trusted Contact’ safeguard for cases of possible self-harm",
     "url": "https://techcrunch.com/2026/05/07/openai-introduces-new-trusted-contact-safeguard-for-cases-of-possible-self-harm/",
     "source": "TechCrunch - AI",
     "date": "2026-05-07",
     "summary": "The company is expanding its efforts to protect ChatGPT users in cases where conversations may turn to self-harm.",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "Mira Murati’s deposition pulled back the curtain on Sam Altman’s ouster",
     "url": "https://www.theverge.com/ai-artificial-intelligence/926383/mira-murati-sam-altman-musk-trial-ouster",
     "source": "The Verge - AI",
     "date": "2026-05-07",
     "summary": "The week leading up to Thanksgiving 2023 was the AI industry's biggest soap opera moment. OpenAI CEO Sam Altman was abruptly ousted from his role at the ChatGPT maker. The explanation? That Altman was \"not consistently candid in his communications with the board.\" Now, via witness testimony and t...",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "ChatGPT’s ‘Trusted Contact’ will alert loved ones of safety concerns",
     "url": "https://www.theverge.com/ai-artificial-intelligence/925874/chatgpt-trusted-contact-emergency-self-harm-notification",
     "source": "The Verge - AI",
     "date": "2026-05-07",
     "summary": "OpenAI is launching an optional safety feature for ChatGPT that allows adult users to assign an emergency contact for mental health and safety concerns. Friends, family members, or caregivers designated as a \"Trusted Contact\" will be notified if OpenAI detects that a person may have discussed top...",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "Live updates from Elon Musk and Sam Altman’s court battle over the future of OpenAI",
     "url": "https://www.theverge.com/tech/917225/sam-altman-elon-musk-openai-lawsuit",
     "source": "The Verge - AI",
     "date": "2026-05-07",
     "summary": "Sam Altman and Elon Musk are facing off in a high-stakes trial that could alter the future of OpenAI and its most well-known product, ChatGPT. In 2024, Musk filed a lawsuit accusing OpenAI of abandoning its founding mission of developing AI to benefit humanity and shifting focus to boosting profi...",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "Scaling Trusted Access for Cyber with GPT-5.5 and GPT-5.5-Cyber",
     "url": "https://openai.com/index/gpt-5-5-with-trusted-access-for-cyber",
     "source": "OpenAI Blog",
     "date": "2026-05-07",
     "summary": "OpenAI expands Trusted Access for Cyber with GPT-5.5 and GPT-5.5-Cyber, helping verified defenders accelerate vulnerability research and protect critical infrastructure.",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "Parloa builds service agents customers want to talk to",
     "url": "https://openai.com/index/parloa",
     "source": "OpenAI Blog",
     "date": "2026-05-07",
     "summary": "Parloa leverages OpenAI models to power scalable, voice-driven AI customer service agents, enabling enterprises to design, simulate, and deploy reliable, real-time interactions.",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "Advancing voice intelligence with new models in the API",
     "url": "https://openai.com/index/advancing-voice-intelligence-with-new-models-in-the-api",
     "source": "OpenAI Blog",
     "date": "2026-05-07",
     "summary": "Explore new realtime voice models in the OpenAI API that can reason, translate, and transcribe speech, enabling more natural and intelligent voice experiences.",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "Testing ads in ChatGPT",
     "url": "https://openai.com/index/testing-ads-in-chatgpt",
     "source": "OpenAI Blog",
     "date": "2026-05-07",
     "summary": "OpenAI begins testing ads in ChatGPT to support free access, with clear labeling, answer independence, strong privacy protections, and user control.",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "Introducing Trusted Contact in ChatGPT",
     "url": "https://openai.com/index/introducing-trusted-contact-in-chatgpt",
     "source": "OpenAI Blog",
     "date": "2026-05-07",
     "summary": "Introducing Trusted Contact in ChatGPT, an optional safety feature that notifies someone you trust if serious self-harm concerns are detected.",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "Simplex rethinks software development with Codex",
     "url": "https://openai.com/index/simplex",
     "source": "OpenAI Blog",
     "date": "2026-05-07",
     "summary": "Simplex boosts software development with ChatGPT Enterprise and Codex, reducing design, build, and testing time while scaling AI-driven workflows.",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "Trump Pivots on AI Regulation, Worker Ousted by DOGE Runs for Office, and Hantavirus Explained",
     "url": "https://www.wired.com/story/uncanny-valley-podcast-trump-pivots-ai-regulation-worker-ousted-by-doge-runs-for-office-hantavirus-explained/",
     "source": "Wired - AI",
     "date": "2026-05-07",
     "summary": "Today on Uncanny Valley, we’re diving into recent reports that the Trump administration is considering an executive order that would establish some sort of federal oversight over new AI models.",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "How to Disable Google's Gemini in Chrome",
     "url": "https://www.wired.com/story/you-can-disable-gemini-in-chrome-if-its-freaking-you-out/",
     "source": "Wired - AI",
     "date": "2026-05-07",
     "summary": "Chrome users were caught off guard by a 4-GB Google AI model baked into Chrome, sparking privacy concerns. The good news: You can easily uninstall it. The bad? You might not want to.",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "ChatGPT Has ‘Goblin’ Mania in the US. In China It Will ‘Catch You Steadily’",
     "url": "https://www.wired.com/story/chatgpt-chinese-catch-you-steadily-sycophancy/",
     "source": "Wired - AI",
     "date": "2026-05-07",
     "summary": "OpenAI’s chatbot has some weird linguistic tics in Chinese that are driving users crazy.",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "llm-gemini 0.31",
     "url": "https://simonwillison.net/2026/May/7/llm-gemini/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-05-07",
     "summary": "Release: llm-gemini 0.31 gemini-3.1-flash-lite is no longer a preview. Here's my write-up of the Gemini 3.1 Flash-Lite Preview model back in March. I don't believe this new non-preview model has changed since then. Tags: llm-release, gemini, llm, google, generative-ai, ai, llms",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "Behind the Scenes Hardening Firefox with Claude Mythos Preview",
     "url": "https://simonwillison.net/2026/May/7/firefox-claude-mythos/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-05-07",
     "summary": "Behind the Scenes Hardening Firefox with Claude Mythos Preview Fascinating, in-depth details on how Mozilla used their access to the Claude Mythos preview to locate and then fix hundreds of vulnerabilities in Firefox: Suddenly, the bugs are very good Just a few months ago, AI-generated security b...",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "Notes on the xAI/Anthropic data center deal",
     "url": "https://simonwillison.net/2026/May/7/xai-anthropic/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-05-07",
     "summary": "There weren't a lot of big new announcements from Anthropic at yesterday's Code w/ Claude event, but the biggest by far was the deal they've struck with SpaceX/xAI to use \"all of the capacity of their Colossus data center\". As I mentioned in my live blog of the keynote, that's the one with the pa...",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "vLLM V0 to V1: Correctness Before Corrections in RL",
     "url": "https://huggingface.co/blog/ServiceNow-AI/correctness-before-corrections",
     "source": "Hugging Face Blog",
     "date": "2026-05-06",
     "summary": "",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "How ChatGPT learns about the world while protecting privacy",
     "url": "https://openai.com/index/how-chatgpt-protects-privacy",
     "source": "OpenAI Blog",
     "date": "2026-05-06",
     "summary": "Learn how ChatGPT safeguards your privacy, reduces personal data in training, and gives you control over whether your conversations improve AI models.",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "Live blog: Code w/ Claude 2026",
     "url": "https://simonwillison.net/2026/May/6/code-w-claude-2026/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-05-06",
     "summary": "I'm at Anthropic's Code w/ Claude event today. Here's my live blog of the morning keynote sessions. Tags: ai, generative-ai, llms, anthropic, claude, claude-code, live-blog",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "datasette-llm 0.1a7",
     "url": "https://simonwillison.net/2026/May/5/datasette-llm/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-05-05",
     "summary": "Release: datasette-llm 0.1a7 Mechanism for configuring default options for specific models. Part of Datasette's evolving support mechanism for plugins that use LLMs. It's now possible to configure a model with default options, e.g. to say all enrichment operations should use a specific model with...",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "Reduce friction and latency for long-running jobs with Webhooks in Gemini API",
     "url": "https://blog.google/innovation-and-ai/technology/developers-tools/event-driven-webhooks/",
     "source": "Google AI Blog",
     "date": "2026-05-04",
     "summary": "Event-Driven Webhooks are a push-based notification system that eliminates the need for inefficient polling.",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "Granite 4.1 LLMs: How They’re Built",
     "url": "https://huggingface.co/blog/ibm-granite/granite-4-1",
     "source": "Hugging Face Blog",
     "date": "2026-04-29",
     "summary": "",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "DeepSeek-V4: a million-token context that agents can actually use",
     "url": "https://huggingface.co/blog/deepseekv4",
     "source": "Hugging Face Blog",
     "date": "2026-04-24",
     "summary": "",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "8 Gemini tips for organizing your space (and life)",
     "url": "https://blog.google/products-and-platforms/products/gemini/gemini-spring-cleaning-tips/",
     "source": "Google AI Blog",
     "date": "2026-04-24",
     "summary": "Organize your home and digital space with Gemini. Use AI-powered tips for cleaning schedules, inbox decluttering, seasonal chores.",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "How to Use Transformers.js in a Chrome Extension",
     "url": "https://huggingface.co/blog/transformersjs-chrome-extension",
     "source": "Hugging Face Blog",
     "date": "2026-04-23",
     "summary": "",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "QIMMA قِمّة ⛰: A Quality-First Arabic LLM Leaderboard",
     "url": "https://huggingface.co/blog/tiiuae/qimma-arabic-leaderboard",
     "source": "Hugging Face Blog",
     "date": "2026-04-21",
     "summary": "",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "不更新参数就能强化学习！OpenAI翁家翌提出新范式：决策只需AI手搓一个.py 文件",
     "url": "https://www.qbitai.com/2026/05/414827.html",
     "source": "量子位",
     "date": "2026-05-09",
     "summary": "实现过程开源可复现",
     "is_new": true,
     "lang": "zh"
    },
    {
     "title": "百度发布文心 5.1：搜索能力登顶国内，预训练成本仅为业界 6%",
     "url": "https://www.qbitai.com/2026/05/414496.html",
     "source": "量子位",
     "date": "2026-05-09",
     "summary": "搜索、知识、Agent 能力全面提升",
     "is_new": true,
     "lang": "zh"
    },
    {
     "title": "深度解析：DeepSeek不差钱，为什么还要融500亿？",
     "url": "https://www.leiphone.com/category/yanxishe/0XQEjmCNYEmRB8Rn.html",
     "source": "雷锋网 - AI",
     "date": "2026-05-09",
     "summary": "某位多次接近梁文锋的顶级投资人曾无奈向雷峰网表示：梁文锋最讨厌两件事：跟VC吃饭，对外解释DeepSeek的决策。这位幻方量化出身的程序员创业者，过去两年对所有找上门来的投资人说过同一句话——\"VC的钱是负担\"。腾讯来谈过，阿里来谈过，市面几乎每一家顶级风投都在他的闭门羹列表里。他觉得这些人都得帮LP赚钱，\"所以谈不到一块去\"。而梁文锋确实有说这句话的底气。一位与梁文锋有过多次接触的大厂前副总裁曾和雷峰网透露，梁文锋有一笔规模在20到30亿的基金，这基金不用来对外募资，是自己的钱。而在另一名顶级资本人的口中，梁文锋曾对外表示他有四五万张卡，40、50亿是拿得出来的，不需要外部机构掏钱。了...",
     "is_new": true,
     "lang": "zh"
    },
    {
     "title": "阶跃语音生成模型，拿下 AA 榜语音竞技场国产第一，全球第三",
     "url": "https://www.leiphone.com/category/industrynews/ZrhId0k9AjggOERD.html",
     "source": "雷锋网 - AI",
     "date": "2026-05-09",
     "summary": "5 月 9 日，全球权威 TTS 评测榜单 Artificial Analysis Speech Arena Leaderboard 更新，阶跃语音生成模型 StepAudio 2.5 TTS 跻身全球前三，成为当前榜单排名最高的中国大模型。不同于传统实验室指标，该榜单采用盲测 Elo 评分机制，由用户在不知道模型身份的情况下，直接对同一文本生成的两段语音进行听感判断，测试覆盖客户服务、知识分享、数字助手、娱乐等真实应用场景。这意味着，StepAudio 2.5 TTS 的领先并不只是参数或指标上的提升，而是在真实用户听感中展现出更自然、更接近真人表达的能力，在实际落地中具备更强竞争力。...",
     "is_new": true,
     "lang": "zh"
    },
    {
     "title": "9点1氪丨DeepSeek拟募资最高500亿；“全国销冠”被刑拘，泰康人寿回应；OPPO就母亲节文案致歉",
     "url": "<![CDATA[https://36kr.com/p/3801348046151428?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-05-09",
     "summary": "整理｜Kris 今日热点导览 香港拿下世界杯转播权，FIFA与央视谈判仍陷僵局 油价上调，加满一箱92号汽油将多花12.5元 钱江摩托否认“围剿张雪机车” 30条中日航线4月取消全部航班 SpaceX冲刺上市，资本开支飙升数百亿 TOP3大新闻 DeepSeek拟募资最高500亿元 据报道，DeepSeek拟募资最高500亿元，这将成为中国人工智能公司有史以来最大的一轮融资。(财联社) “全国销冠”任晓敏被刑拘，泰康人寿回应 5月7日，泰康人寿方面对记者表示，近日，泰康人寿青岛分公司个人代理人任某某被青岛市公安机关立案侦查，引发社会广泛关注。对此，公司高度重视，第一时间组织专项工作组派驻...",
     "is_new": true,
     "lang": "zh"
    },
    {
     "title": "Deepseek和阿里谈崩了？市场人士回应",
     "url": "<![CDATA[https://36kr.com/newsflashes/3801813920144901?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-05-09",
     "summary": "5月8日，有消息称，4月，DeepSeek（深度求索）罕见展开一场巨额融资计划，同时吸引了腾讯和阿里巴巴两家大厂。据该消息，近期，阿里巴巴和DeepSeek谈崩了。对此，市场人士透露，阿里应该没有进行谈判。（每经网）",
     "is_new": true,
     "lang": "zh"
    },
    {
     "title": "百度正式发布文心大模型5.1",
     "url": "<![CDATA[https://36kr.com/newsflashes/3801731549371905?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-05-09",
     "summary": "36氪获悉，百度正式发布新一代基础大模型文心大模型 5.1。据官方介绍，文心 5.1采用“多维弹性预训练”技术，仅以业界同规模模型约6%的预训练成本，达到基础效果领先水平，登上LMArena搜索榜国内第一。",
     "is_new": true,
     "lang": "zh"
    },
    {
     "title": "智源FlagSafe平台正式发布",
     "url": "<![CDATA[https://36kr.com/newsflashes/3801709226483208?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-05-09",
     "summary": "36氪获悉，近日，北京智源人工智能研究院联合北京大学、北京邮电大学、北京航空航天大学、上海交通大学、中国科学院信息工程研究所、中国科学院计算技术研究所等国内机构，正式发布FlagSafe大模型安全平台。平台首批汇聚多个前沿大模型安全研究项目，围绕红队演练、蓝队防御、白盒透视三个核心方向，共同打造覆盖风险发现、防御治理与机理解释的高标准安全平台。",
     "is_new": true,
     "lang": "zh"
    },
    {
     "title": "ChatGPT，别再「稳稳接住我」了｜附指南",
     "url": "https://www.ifanr.com/1665148?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-05-08",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh"
    },
    {
     "title": "终于能听 GPT-5 给我说人话了",
     "url": "https://www.ifanr.com/1665115?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-05-08",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh"
    },
    {
     "title": "火山引擎携手中国移动，首创机密模型服务新模式",
     "url": "https://www.leiphone.com/category/industrynews/qMyCzGke8pn9Ddrk.html",
     "source": "雷锋网 - AI",
     "date": "2026-05-08",
     "summary": "5月8日，在2026移动云大会上，中国移动与火山引擎正式发布“移动引擎机密模型服务”专区，为各行业提供兼具技术领先与安全可信的AI服务，包括豆包大模型MaaS服务、Agent开发平台和工具等。【中国移动与火山引擎发布“移动引擎机密模型服务”】通过在移动云上构建安全可信的机密执行环境，该服务让豆包大模型在推理过程中保持端到端加密，让整个推理过程可追溯可审计；同时实现零硬件投入，全托管免运维。后续还将集成HiAgent、Arkclaw 等智能体开发平台和工具，并逐步提供一系列开箱即用的行业智能体，打造先进技术、安全合规与成本可控的“更优解”。目前，该服务已上线豆包视频生成模型Seedance...",
     "is_new": false,
     "lang": "zh"
    },
    {
     "title": "百度搭子DuMate登顶PinchBench，超越Anthropic拿下全球龙虾执行争霸赛冠军",
     "url": "https://www.leiphone.com/category/industrynews/Oh9CnFrZHHOodA9n.html",
     "source": "雷锋网 - AI",
     "date": "2026-05-08",
     "summary": "5月8日凌晨，百度搭子DuMate登顶智能体评测基准PinchBench榜首，并在前5位中占据3席，超越Anthropic和OpenAI拿下全球龙虾执行争霸赛冠军。在另外一项DeepResearch深度研究榜单中，DuMate同样位列第一。PinchBench是OpenClaw赛道最能体现Agent真实工作能力的评测基准，重点考察Agent在23个真实工作场景下147个任务的多步推理、工具调用和任务闭环能力，并从成功率、速度、成本三个维度综合排名。榜单显示，DuMate以93.3%和93.2%的总成绩包揽前两名。作为对照，Anthropic和OpenAI的同款模型场景下的成绩分别为89....",
     "is_new": false,
     "lang": "zh"
    },
    {
     "title": "中国移动与火山引擎推出机密模型服务，为企业提供安全可信AI服务",
     "url": "https://www.leiphone.com/category/industrynews/aZWpqeMDsRB841I1.html",
     "source": "雷锋网 - AI",
     "date": "2026-05-08",
     "summary": "5月8日，在2026移动云大会上，中国移动与火山引擎正式发布“移动引擎机密模型服务”专区，为各行业提供兼具技术领先与安全可信的AI服务，包括豆包大模型MaaS服务、Agent开发平台和工具等。 【中国移动与火山引擎发布“移动引擎机密模型服务”】通过在移动云上构建安全可信的机密执行环境，该服务让豆包大模型在推理过程中保持端到端加密，让整个推理过程可追溯可审计；同时实现零硬件投入，全托管免运维。后续还将集成HiAgent、Arkclaw 等智能体开发平台和工具，并逐步提供一系列开箱即用的行业智能体，打造先进技术、安全合规与成本可控的“更优解”。目前，该服务已上线豆包视频生成模型Seedanc...",
     "is_new": false,
     "lang": "zh"
    },
    {
     "title": "早报｜DeepSeek首轮融资曝光，估值450亿美元/谷歌称Android不会推出「液态玻璃」/三星宣布在中国大陆停售所有家电产品",
     "url": "https://www.ifanr.com/1664941?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-05-07",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh"
    },
    {
     "title": "三星官宣家电业务退出中国大陆市场；曝DeepSeek投后估值或达450亿美元；中国航天员中心招募「卧床」志愿者：最高拿7万元，还能玩手机",
     "url": "https://www.leiphone.com/category/zaobao/hStD94lQmS7vzJG3.html",
     "source": "雷锋网 - AI",
     "date": "2026-05-07",
     "summary": "要闻提示1.三星宣布停止在中国大陆市场销售所有家电产品，手机业务不受影响2.估值近450亿美元？DeepSeek获国家大基金领投磋商3.中国航天员中心招募志愿者：最高拿7万元，还能玩手机4.月之暗面将完成20亿美元融资，投后估值超200亿美元5.丢失7年的手机突然发定位和照片，机主成功找回！魅族客服回应6.突发！陈天桥旗下 MiroMind AI 暂停中国服务7.OpenAI联合创始人法庭作证：2017年马斯克因控制权被拒“险些动手”8.马斯克：xAI将更名为SpaceXAI，不再作为独立公司存在今日头条三星宣布停止在中国大陆市场销售所有家电产品，手机业务不受影响5月6日消息，三星电子在...",
     "is_new": false,
     "lang": "zh"
    }
   ]
  },
  {
   "name": "AI Agent与智能体",
   "icon": "🤯",
   "color": "#d97706",
   "count": 11,
   "cards": [
    {
     "title": "\"OncoAgent: A Dual-Tier Multi-Agent Framework for Privacy-Preserving Oncology Clinical Decision Support\"",
     "url": "https://huggingface.co/blog/lablab-ai-amd-developer-hackathon/oncoagent-official-paper",
     "source": "Hugging Face Blog",
     "date": "2026-05-09",
     "summary": "",
     "is_new": true,
     "lang": "en"
    },
    {
     "title": "Intent-based chaos testing is designed for when AI behaves confidently — and wrongly",
     "url": "https://venturebeat.com/infrastructure/intent-based-chaos-testing-is-designed-for-when-ai-behaves-confidently-and-wrongly",
     "source": "VentureBeat - AI",
     "date": "2026-05-09",
     "summary": "Here is a scenario that should concern every enterprise architect shipping autonomous AI systems right now: An observability agent is running in production. Its job is to detect infrastructure anomalies and trigger the appropriate response. Late one night, it flags an elevated anomaly score acros...",
     "is_new": true,
     "lang": "en"
    },
    {
     "title": "Running Codex safely at OpenAI",
     "url": "https://openai.com/index/running-codex-safely",
     "source": "OpenAI Blog",
     "date": "2026-05-08",
     "summary": "How OpenAI runs Codex securely with sandboxing, approvals, network policies, and agent-native telemetry to support safe and compliant coding agent adoption.",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "An AI agent rewrote a Fortune 50 security policy. Here's how to govern AI agents before one does the same.",
     "url": "https://venturebeat.com/security/cisco-crowdstrike-rsac-2026-agent-identity-iam-gap-maturity-model",
     "source": "VentureBeat - AI",
     "date": "2026-05-08",
     "summary": "A CEO’s AI agent rewrote the company’s security policy. Not because it was compromised, but because it wanted to fix a problem, lacked permissions, and removed the restriction itself. Every identity check passed. CrowdStrike CEO George Kurtz disclosed the incident and a second one at his RSAC 202...",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "Perplexity’s Personal Computer is now available to everyone on Mac",
     "url": "https://techcrunch.com/2026/05/07/perplexitys-personal-computer-is-now-available-everyone-on-mac/",
     "source": "TechCrunch - AI",
     "date": "2026-05-07",
     "summary": "Perplexity's Personal Computer brings AI agents to your Mac, and is now open to everyone.",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "Vibe coding and agentic engineering are getting closer than I'd like",
     "url": "https://simonwillison.net/2026/May/6/vibe-coding-and-agentic-engineering/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-05-06",
     "summary": "I recently talked with Joseph Ruscio about AI coding tools for Heavybit's High Leverage podcast: Ep. #9, The AI Coding Paradigm Shift with Simon Willison. Here are some of my highlights, including my disturbing realization that vibe coding and agentic engineering have started to converge in my ow...",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "Introducing NVIDIA Nemotron 3 Nano Omni: Long-Context Multimodal Intelligence for Documents, Audio and Video Agents",
     "url": "https://huggingface.co/blog/nvidia/nemotron-3-nano-omni-multimodal-intelligence",
     "source": "Hugging Face Blog",
     "date": "2026-04-28",
     "summary": "",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "Join the new AI Agents Vibe Coding Course from Google and Kaggle",
     "url": "https://blog.google/innovation-and-ai/technology/developers-tools/kaggle-genai-intensive-course-vibe-coding-june-2026/",
     "source": "Google AI Blog",
     "date": "2026-04-27",
     "summary": "Google is bringing back its 5-Day AI Agents Intensive Course with Kaggle and registration is open.",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "美图RoboNeo全新升级：首创影像创作Agent Teams",
     "url": "https://www.qbitai.com/2026/05/415010.html",
     "source": "量子位",
     "date": "2026-05-09",
     "summary": "打造“赛博乙方天团”",
     "is_new": true,
     "lang": "zh"
    },
    {
     "title": "小红书四年AI 路：FOMO、犹豫，到突然加速",
     "url": "<![CDATA[https://36kr.com/p/3799028783439111?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-05-08",
     "summary": "作者 | 肖思佳 编辑 | 乔芊 杨轩 所有互联网大中厂都渴望在AI时代博得位置，在这场比赛中，小红书曾是克制的那个。 在一个搜索属性与社区属性并存，以真实经验分享为核心的产品中，活人感与AI、温情和算法，始终像天平的两端。 很长一段时间里，小红书既没有完全缺席技术探索，也没有像许多同行那样高调推进AI产品化。相反，这家公司始终在两股力量的拉锯和平衡中前行：一边持续投入模型能力，一边谨慎控制AI对社区生态的介入。 但2026年，随着Agent叙事的升温，小红书开始显露出某种急迫。 4月30日，小红书发送全员内部信，宣布成立AI一级部门Dots，“建立从模型研发、基础设施、工程到产品的完整...",
     "is_new": false,
     "lang": "zh"
    },
    {
     "title": "独家丨腾讯云成立云产品六部，王慧星担任负责人",
     "url": "https://www.leiphone.com/category/industrynews/YkSi35iAcrFzjzVJ.html",
     "source": "雷锋网 - AI",
     "date": "2026-05-06",
     "summary": "雷峰网消息，腾讯云发布一则内部信，将成立云产品六部，负责构建AI原生的代码（CodeBuddy）与泛生产力智能体（WorkBuddy），推进系列智能体产品的能力建设与商业化。腾讯副总裁、腾讯云CTO王慧星兼任云产品六部负责人，向CSIG总裁汤道生汇报；刘毅担任云产品六部助理总经理，向王慧星汇报。此前，腾讯云产研一共有五大产品部，产品一部主要负责IaaS相关产品，以及数据库、消息列队等部分PaaS；产品二部主要负责 PaaS以及大数据；产品三部则是负责智能体开发平台、AI SaaS、知识引擎、计算加速；产品四部负责中台业务，包括面向开发者的AI coding；产品五部负责CDN、音视频相关...",
     "is_new": false,
     "lang": "zh"
    }
   ]
  },
  {
   "name": "具身智能与机器人",
   "icon": "🤖",
   "color": "#059669",
   "count": 6,
   "cards": [
    {
     "title": "Hackable Robot Lawn Mower Unlocks a New Nightmare",
     "url": "https://www.wired.com/story/security-news-this-week-hackable-robot-lawnmower-unlocks-a-new-nightmare/",
     "source": "Wired - AI",
     "date": "2026-05-09",
     "summary": "Plus: Meta officially kills encrypted Instagram DMs, the Trump administration targets “violent left wing extremists,” leaked documents reveal Russia's school for elite hackers, and more.",
     "is_new": true,
     "lang": "en"
    },
    {
     "title": "Nanoleaf bets its future on robots, red light therapy, and AI",
     "url": "https://www.theverge.com/tech/926342/nanoleaf-smart-lighting-ai-robotics-red-light-wellness",
     "source": "The Verge - AI",
     "date": "2026-05-08",
     "summary": "Smart lighting company Nanoleaf has been unusually quiet recently. While competitors such as Govee and Philips Hue have been pumping out new products and innovative features at an impressive pace, Nanoleaf has launched just a handful of smart lighting products in the last two years. There's a rea...",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "The Download: inside the Musk v. Altman trial, and AI for democracy",
     "url": "https://www.technologyreview.com/2026/05/05/1136848/the-download-musk-openai-altman-trial-ai-democracy/",
     "source": "MIT Technology Review - AI",
     "date": "2026-05-05",
     "summary": "This is today’s edition of The Download, our weekday newsletter that provides a daily dose of what’s going on in the world of technology. Week one of the Musk v. Altman trial: what it was like in the room Two of the most powerful figures in AI—Sam Altman and Elon Musk—are in the middle of…",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "空间智能的“具身化”跃迁，高德ABot体系模型夺冠AGIBot全球挑战赛",
     "url": "https://www.qbitai.com/2026/05/414826.html",
     "source": "量子位",
     "date": "2026-05-09",
     "summary": "以0.829的总成绩荣登榜首",
     "is_new": true,
     "lang": "zh"
    },
    {
     "title": "VLA死了，遥操也死了！英伟达机器人一号位说的",
     "url": "https://www.qbitai.com/2026/05/414547.html",
     "source": "量子位",
     "date": "2026-05-09",
     "summary": "Jim Fan全新暴论出炉",
     "is_new": true,
     "lang": "zh"
    },
    {
     "title": "总部人均奖金610万，中国厂却一毛不拔！三星、SK海力士国内员工集体求涨薪；昆仑芯启动A股IPO；男子五一加班身亡！涉事公司：假期自愿",
     "url": "https://www.leiphone.com/category/zaobao/tqf2pEDQn63OH1d6.html",
     "source": "雷锋网 - AI",
     "date": "2026-05-08",
     "summary": "要闻提示1.总部人均奖金610万，中国厂却一毛不拔！三星、SK海力士国内员工集体求涨薪2.宇树G1人形机器人在韩国出家：法名「迦悲」，需遵守不过度充电等戒律3.61岁男子五一加班在车间身亡！涉事公司：假期自愿，正积极处理4.三星关停中国家电业务，员工获N+3或N+4补偿！京东宣布过保产品免费上门检测5.腾讯混元高级研究员于文豪加盟OpenAI6.新功能？微信未读语音消息由红变灰引热议！腾讯客户回应7.昆仑芯启动A股IPO！百度持股比例57.67%8.苹果首款AI可穿戴设备：内置摄像头的AirPods已进入DVT阶段，预计最快9月搭载新Siri亮相今日头条总部人均奖金610万，中国厂却一毛...",
     "is_new": false,
     "lang": "zh"
    }
   ]
  },
  {
   "name": "多模态与AIGC",
   "icon": "🎨",
   "color": "#dc2626",
   "count": 5,
   "cards": [
    {
     "title": "Quoting Luke Curley",
     "url": "https://simonwillison.net/2026/May/9/luke-curley/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-05-09",
     "summary": "WebRTC is designed to degrade and drop my prompt during poor network conditions. wtf my dude WebRTC aggressively drops audio packets to keep latency low. If you’ve ever heard distorted audio on a conference call, that’s WebRTC baybee. The idea is that conference calls depend on rapid back-and-for...",
     "is_new": true,
     "lang": "en"
    },
    {
     "title": "Everybody wants to rule the AI world",
     "url": "https://www.theverge.com/podcast/926707/openai-ceo-murati-musk-trial-vergecast",
     "source": "The Verge - AI",
     "date": "2026-05-08",
     "summary": "Sometimes, companies pick CEOs based on carefully laid succession plans designed to maximize investor confidence and future performance. Other times, apparently, companies pick CEOs based on a bunch of video calls while the current CEO is texting the former CEO about who the new CEO even is. Such...",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "5% GPU utilization: The $401 billion AI infrastructure problem enterprises can't keep ignoring",
     "url": "https://venturebeat.com/infrastructure/5-gpu-utilization-the-401-billion-ai-infrastructure-problem-enterprises-cant-keep-ignoring",
     "source": "VentureBeat - AI",
     "date": "2026-05-08",
     "summary": "For the last 24 months, one narrative justified every over-provisioned data center and bloated IT budget: the GPU scramble. Silicon was the new oil, and H100s traded like contraband. Reserve capacity now or your enterprise would be left behind.The bill is now due, and the CFO is paying attention....",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "OpenAI launches new voice intelligence features in its API",
     "url": "https://techcrunch.com/2026/05/07/openai-launches-new-voice-intelligence-features-in-its-api/",
     "source": "TechCrunch - AI",
     "date": "2026-05-07",
     "summary": "The new features could be handy for customer service systems, but OpenAI says they have applications that work across a variety of other fields, including education and creator platforms.",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "Google is partnering with XPRIZE and Range Media Partners on the $3.5 million Future Vision film competition.",
     "url": "https://blog.google/innovation-and-ai/technology/ai/future-vision-film-competition-xprize/",
     "source": "Google AI Blog",
     "date": "2026-05-05",
     "summary": "Google is partnering with XPRIZE and Range Media Partners on the $3.5 million Future Vision film competition.",
     "is_new": false,
     "lang": "en"
    }
   ]
  },
  {
   "name": "AI硬件与芯片",
   "icon": "💾",
   "color": "#0891b2",
   "count": 8,
   "cards": [
    {
     "title": "Nvidia has already committed $40B to equity AI deals this year",
     "url": "https://techcrunch.com/2026/05/09/nvidia-has-already-committed-40b-to-equity-ai-deals-this-year/",
     "source": "TechCrunch - AI",
     "date": "2026-05-09",
     "summary": "Nvidia continues to be a big investor in the AI ecosystem.",
     "is_new": true,
     "lang": "en"
    },
    {
     "title": "Intel’s comeback story is even wilder than it seems",
     "url": "https://techcrunch.com/2026/05/08/intels-comeback-story-is-even-wilder-than-it-seems/",
     "source": "TechCrunch - AI",
     "date": "2026-05-08",
     "summary": "Intel's stock has risen a stunning 490% over the past year, a bet by Wall Street that may be running well ahead of the company's actual turnaround.",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "There’s a Long-Shot Proposal to Protect California Workers From AI",
     "url": "https://www.wired.com/story/tom-steyer-proposes-jobs-guarantee-to-protect-california-workers-from-ai/",
     "source": "Wired - AI",
     "date": "2026-05-08",
     "summary": "California gubernatorial candidate Tom Steyer is proposing a new jobs guarantee for workers displaced by artificial intelligence.",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "早报｜小米增程SUV 曝光，但不叫YU9/苹果与英特尔达成初步芯片代工协议/Cloudflare用AI裁掉20%员工",
     "url": "https://www.ifanr.com/1665264?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-05-09",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": true,
     "lang": "zh"
    },
    {
     "title": "消息称苹果将重新采用英特尔制造的芯片",
     "url": "https://cn.technode.com/post/2026-05-09/apple-intel-chips/",
     "source": "动点科技 - AI",
     "date": "2026-05-09",
     "summary": "据《华尔街日报》报道，苹果和英特尔已达成 […]",
     "is_new": true,
     "lang": "zh"
    },
    {
     "title": "字节跳动据悉计划将AI基础设施支出增加25%",
     "url": "<![CDATA[https://36kr.com/newsflashes/3801787739282952?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-05-09",
     "summary": "据报道，随着内存芯片成本上涨以及字节跳动加速布局人工智能（AI），该公司已将今年的AI基础设施支出计划增加25%至2000亿元人民币。（财联社）",
     "is_new": true,
     "lang": "zh"
    },
    {
     "title": "36氪首发 | 清华系AI Infra厂商完成数亿元融资，以GPU为核心重构计算机系统架构",
     "url": "<![CDATA[https://36kr.com/p/3799984046333186?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-05-08",
     "summary": "作者 | 乔钰杰 编辑 | 袁斯来 硬氪获悉，北京容芯致远科技有限公司（以下简称“容芯致远”）近日完成天使轮数亿元融资。本轮由北京绿色能源和低碳产业基金与赛富投资基金领投，顺禧基金、富华资本、万利达集团、长江创新投、水木清华校友基金、梅花创投等跟投。云岫资本此前参与了公司种子轮投资，本轮继续跟投，并担任长期独家财务顾问。 AI浪潮下，算力需求激增，传统以CPU为中心的架构瓶颈愈发凸显：CPU成为数据调度与交互的核心限制，GPU之间通信效率不足，内存无法实现统一地址空间共享，整体算力利用率较低。 容芯致远创始人石旭毕业于清华大学电子工程系，在芯片设计与AI领域从业多年，接受硬氪采访时，石旭...",
     "is_new": false,
     "lang": "zh"
    },
    {
     "title": "Anthropic 2千亿豪赌，谷歌云成最大赢家？",
     "url": "https://www.leiphone.com/category/yanxishe/61V72k9RQozzfeX2.html",
     "source": "雷锋网 - AI",
     "date": "2026-05-07",
     "summary": "01Anthropic豪掷2千亿美元锁定谷歌云在硅谷，2千亿美元能买到什么？换算成现金，它能买下整整两个英特尔；换算成算力，人类历史上最昂贵的一份“芯片租赁合同”即将诞生。2026年5月5日，据The Information报道，AI初创公司Anthropic已承诺在未来五年内向Google Cloud支付约2千亿美元，用于获取5吉瓦的TPU算力和云服务。交易的结构分两层。第一层是Anthropic向Google Cloud购买5吉瓦的下一代TPU算力。这些芯片由Google与Broadcom联合开发，与NVIDIA GPU形成直接竞争。第二层是Alphabet的投资：Google计划向...",
     "is_new": false,
     "lang": "zh"
    }
   ]
  },
  {
   "name": "开源与生态",
   "icon": "🌐",
   "color": "#2563eb",
   "count": 2,
   "cards": [
    {
     "title": "DeepInfra on Hugging Face Inference Providers 🔥",
     "url": "https://huggingface.co/blog/inference-providers-deepinfra",
     "source": "Hugging Face Blog",
     "date": "2026-04-29",
     "summary": "",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "海信&Vidda“非电视”发布会：六大3C潮品齐发，RGB-Mini LED领衔技术下放",
     "url": "https://www.leiphone.com/category/weiwu/w3z7rUtQyVlcwUoc.html",
     "source": "雷锋网 - AI",
     "date": "2026-05-08",
     "summary": "5月8日，主题为“有态度 就登场”的海信&Vidda全场景新品发布会正式拉开帷幕。作为全球显示产业的领跑者，海信视像在这一次的发布会上，打破传统屏幕的物理界限，以显示技术为原点，向声音、智能感知与移动能源全面延伸。这并非一次简单的品类试水，而是海信以50余年深厚的全栈智能硬件研发底座和全链AI智造能力，向全场景3C生态发起的一次系统性技术赋能。本次发布会，海信以清晰的场景优先级，构建了一套完整的智慧生活拼图：从主打户外高画质观影体验的Vidda LightGo流光派三色激光投影，到重塑桌面专业级生产力的海信UX系列RGB-Mini LED显示器；从提供全屋沉浸陪伴的海信大白闺蜜机X8 U...",
     "is_new": false,
     "lang": "zh"
    }
   ]
  },
  {
   "name": "AI商业与投融资",
   "icon": "💰",
   "color": "#ca8a04",
   "count": 13,
   "cards": [
    {
     "title": "Cloudflare says AI made 1,100 jobs obsolete, even as revenue hit a record high",
     "url": "https://techcrunch.com/2026/05/08/cloudflare-says-ai-made-1100-jobs-obsolete-even-as-revenue-hit-a-record-high/",
     "source": "TechCrunch - AI",
     "date": "2026-05-08",
     "summary": "Cloudflare announced its first large-scale layoff. CEO Matthew Prince says because of AI efficiency gains, the company doesn't need as many support roles.",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "The “people’s airline” and the enterprise AI gold rush",
     "url": "https://techcrunch.com/podcast/the-peoples-airline-and-the-enterprise-ai-gold-rush/",
     "source": "TechCrunch - AI",
     "date": "2026-05-08",
     "summary": "Everyone wants a piece of the enterprise AI pie, and this week, we saw a string of companies making their moves. From Anthropic and OpenAI announcing new joint ventures targeting enterprise AI deployment to SAP dropping $1B on German AI startup Prior Labs, it’s becoming clear that if you’re a sta...",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "Sony says \"efficient\" AI tools will lead to even more games flooding the market",
     "url": "https://arstechnica.com/gaming/2026/05/sony-says-efficient-ai-tools-will-lead-to-even-more-games-flooding-the-market/",
     "source": "ArsTechnica - AI",
     "date": "2026-05-08",
     "summary": "But human artists still \"must remain at the center,\" PlayStation maker says.",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "Microsoft was worried OpenAI would run off to Amazon and ‘shit-talk’ Azure",
     "url": "https://www.theverge.com/report/926771/microsoft-openai-amazon-worries-shit-talk-azure",
     "source": "The Verge - AI",
     "date": "2026-05-08",
     "summary": "When OpenAI was busy experimenting with AI-powered gaming bots, Microsoft CEO Satya Nadella and OpenAI CEO Sam Altman were in the early days of forming an AI partnership. Court documents from the ongoing Musk v. Altman trial have provided a rare look at the communications between Microsoft's top ...",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "Musk v. Altman Evidence Shows What Microsoft Executives Thought of OpenAI",
     "url": "https://www.wired.com/story/microsoft-executives-discuss-openai-sam-altman-2018/",
     "source": "Wired - AI",
     "date": "2026-05-08",
     "summary": "Leaders at the tech giant were skeptical of OpenAI—but wary of pushing it into the arms of Amazon, according to emails dating back to 2018.",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "Anthropic says it hit a $30 billion revenue run rate after 'crazy' 80x growth",
     "url": "https://venturebeat.com/technology/anthropic-says-it-hit-a-30-billion-revenue-run-rate-after-crazy-80x-growth",
     "source": "VentureBeat - AI",
     "date": "2026-05-08",
     "summary": "Dario Amodei is not the kind of CEO who talks loosely about numbers. The Anthropic co-founder and chief executive, a former VP of research at OpenAI with a PhD in computational neuroscience from Princeton, has built a reputation for measured public statements — particularly around the financial p...",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "Musk v. Altman week 2: OpenAI fires back, and Shivon Zilis reveals that Musk tried to poach Sam Altman",
     "url": "https://www.technologyreview.com/2026/05/08/1137008/musk-v-altman-week-2-openai-fires-back-and-shivon-zilis-reveals-that-musk-tried-to-poach-sam-altman/",
     "source": "MIT Technology Review - AI",
     "date": "2026-05-08",
     "summary": "In the second week of the landmark trial between Elon Musk and OpenAI, Musk’s motivations for bringing the suit were under scrutiny. Last week, Musk took the stand, alleging that OpenAI CEO Sam Altman and president Greg Brockman had deceived him into donating $38 million to the company. He claime...",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "Voi founders’ new AI startup Pit has become the latest rising star out of Stockholm",
     "url": "https://techcrunch.com/2026/05/07/voi-founders-new-ai-startup-pit-has-become-the-latest-rising-star-out-of-stockholm/",
     "source": "TechCrunch - AI",
     "date": "2026-05-07",
     "summary": "AI startup Pit is led by the co-founders of European scooter giant Voi and backed by a16z, which is leading the startup’s $16 million seed round.",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "How to build scalable web apps with OpenAI's Privacy Filter",
     "url": "https://huggingface.co/blog/openai-privacy-filter-web-apps",
     "source": "Hugging Face Blog",
     "date": "2026-04-27",
     "summary": "",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "索尼 PlayStation：AI 是帮助制作游戏的“强大工具”",
     "url": "https://cn.technode.com/post/2026-05-09/sony-playstation-ai-powerful-tool-games/",
     "source": "动点科技 - AI",
     "date": "2026-05-09",
     "summary": "在当地时间周五的财报发布会上，索尼分享了 […]",
     "is_new": true,
     "lang": "zh"
    },
    {
     "title": "获高秉强、蓝驰领投数千万融资，浙大00后创业者从远景观测切入AI智能影像｜硬氪首发",
     "url": "<![CDATA[https://36kr.com/p/3797202414820359?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-05-09",
     "summary": "作者｜黄楠 编辑｜袁斯来 硬氪获悉，星识（宁波）科技有限公司（以下简称“星识科技”）近日连续完成天使+轮和天使++轮融资，累计金额达数千万元。两轮融资分别由高秉强教授旗下高锋耐心资本和蓝驰创投领投、松禾资本跟投，老股东清水湾二期基金及奇绩创坛持续加注。本轮资金将主要用于智能影像核心技术研发、新品矩阵打造和产品体验的迭代优化，以及生产体系与供应链能力建设。此前，公司已获得李泽湘教授旗下宁波智能技术研究院、清水湾二期基金及奇绩创坛的种子轮及天使轮投资。 星识科技是一家专注智能影像技术研发与硬件制造的企业，以远景观测场景为切点，曾推出融合AI功能的Vizta智能望远镜，已在Kickstarte...",
     "is_new": true,
     "lang": "zh"
    },
    {
     "title": "Plaud获头��大厂投资，目前估值达20亿美元｜硬氪独家",
     "url": "<![CDATA[https://36kr.com/p/3799129165863937?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-05-08",
     "summary": "作者｜黄楠 周鑫雨 编辑｜袁斯来 杨轩 硬氪独家获悉，AI卡片录音笔公司Plaud已于2025年年中拿下腾讯的融资，估值达10亿美元；目前，Plaud公司估值已涨至约20亿美元。同时，硬氪从相关人士处了解到，Plaud正在推进与腾讯会议之间的硬件合作。 有关上述信息，硬氪向Plaud及腾讯方面求证，双方均表示消息不实。 一名接近Plaud人士告诉硬氪，Plaud在2024年的总营收约5600万美金，利润率接近20%，“2025年营收差不多涨了3倍”。另有知情者透露，2025年Plaud全年收入达到了历年最高，大陆全线产品的出货量符合内部预期。 但Plaud出货量谈不上高，有一位行业人士告...",
     "is_new": false,
     "lang": "zh"
    },
    {
     "title": "无问芯穹再获超7亿融资：首发AI生产力公式，跻身Token经济枢纽",
     "url": "https://www.leiphone.com/category/yanxishe/eM6mjqZl27orl1gE.html",
     "source": "雷锋网 - AI",
     "date": "2026-05-07",
     "summary": "5 月 7 日，无问芯穹宣布此前已再获超 7 亿元融资，持续稳居中国 AI 原生基础设施公司融资规模之首。联合领投方为杭州高新金投集团和惠远资本，跟投方包括国兴资本、秦淮数据、广发乾和、力合清瞳、中保投资、AEF NextGen、腾瑞资本、卡莱特、中信建投资本和宽德智能学习实验室 (Will)，老股东君联资本、上海国投孚腾和元智未来追加投资。 据悉，本轮融资已于数月前完成，资金将重点投向三大方向：一是夯实无问芯穹多元异构技术的领先地位，扩大 Token （词元）经济时代，极致优化的可用算力规模；二是持续强化软硬协同的技术优势，加快从“电能到 Token”的生产效率跃升；三是构建具备自主进...",
     "is_new": false,
     "lang": "zh"
    }
   ]
  },
  {
   "name": "AI安全与对齐",
   "icon": "🛡️",
   "color": "#dc2626",
   "count": 1,
   "cards": [
    {
     "title": "两项AI政策发布，范式智能战略布局与产业方向高度契合",
     "url": "https://www.qbitai.com/2026/05/415019.html",
     "source": "量子位",
     "date": "2026-05-09",
     "summary": "围绕电力交易、能源调度、智能预测与决策等场景探索AI应用落地",
     "is_new": true,
     "lang": "zh"
    }
   ]
  },
  {
   "name": "其他AI资讯",
   "icon": "🔮",
   "color": "#6b7280",
   "count": 52,
   "cards": [
    {
     "title": "So you’ve heard these AI terms and nodded along; let’s fix that",
     "url": "https://techcrunch.com/2026/05/09/artificial-intelligence-definition-glossary-hallucinations-guide-to-common-ai-terms/",
     "source": "TechCrunch - AI",
     "date": "2026-05-09",
     "summary": "The rise of AI has brought an avalanche of new terms and slang. Here is a glossary with definitions of some of the most important words and phrases you might encounter.",
     "is_new": true,
     "lang": "en"
    },
    {
     "title": "The new Wild West of AI kids’ toys",
     "url": "https://arstechnica.com/ai/2026/05/the-new-wild-west-of-ai-kids-toys/",
     "source": "ArsTechnica - AI",
     "date": "2026-05-09",
     "summary": "These connected companions could disrupt everything from make-believe to bedtime stories. No wonder some lawmakers want them banned.",
     "is_new": true,
     "lang": "en"
    },
    {
     "title": "Laid-off Oracle workers tried to negotiate better severance. Oracle said no.",
     "url": "https://techcrunch.com/2026/05/08/laid-off-oracle-workers-tried-to-negotiate-better-severance-oracle-said-no/",
     "source": "TechCrunch - AI",
     "date": "2026-05-08",
     "summary": "Some found out they didn't qualify for WARN Act protections like two-months notice because the company had classified them as remote workers.",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "Last 24 hours to get 50% off a second pass to TechCrunch Disrupt 2026",
     "url": "https://techcrunch.com/2026/05/08/last-24-hours-to-get-50-off-a-second-pass-to-techcrunch-disrupt-2026/",
     "source": "TechCrunch - AI",
     "date": "2026-05-08",
     "summary": "Last day to buy one pass and get a second one at 50% off to TechCrunch Disrupt 2026. Bring a partner, co-founder, or colleague at half off. Register now.",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "The fax machine is the bottleneck in US healthcare, and VCs are starting to notice",
     "url": "https://techcrunch.com/2026/05/07/the-back-office-problem-that-explains-why-specialists-never-call-you-back/",
     "source": "TechCrunch - AI",
     "date": "2026-05-08",
     "summary": "Like many AI companies automating work that humans currently do, Basata will eventually face a harder question about where the line is between augmenting workers and displacing them. For now, the founders say the administrative staff they work with aren't worried about that; they're more worried ...",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "EMO: Pretraining mixture of experts for emergent modularity",
     "url": "https://huggingface.co/blog/allenai/emo",
     "source": "Hugging Face Blog",
     "date": "2026-05-08",
     "summary": "",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "Manufacturing qubits that can move",
     "url": "https://arstechnica.com/science/2026/05/manufacturing-qubits-that-can-move/",
     "source": "ArsTechnica - AI",
     "date": "2026-05-08",
     "summary": "It's hard to mix electronic manufacturing and flexible geometry.",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "Trump reportedly plans to fire FDA Commissioner Marty Makary",
     "url": "https://arstechnica.com/health/2026/05/trump-reportedly-plans-to-fire-fda-commissioner-marty-makary/",
     "source": "ArsTechnica - AI",
     "date": "2026-05-08",
     "summary": "The plan isn't final and could change, but his ouster would be no surprise.",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "ABC refuses to capitulate to Trump admin, fights FCC probe into The View",
     "url": "https://arstechnica.com/tech-policy/2026/05/abc-fights-trump-fccs-attempt-to-control-content-of-broadcast-tv-shows/",
     "source": "ArsTechnica - AI",
     "date": "2026-05-08",
     "summary": "FCC chair hasn't been able to bully ABC and owner Disney into submission.",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "The unprecedented and deadly cruise ship hantavirus outbreak, explained",
     "url": "https://arstechnica.com/health/2026/05/everything-you-need-to-know-about-the-hantavirus-cruise-ship-outbreak/",
     "source": "ArsTechnica - AI",
     "date": "2026-05-08",
     "summary": "\"This is not COVID,\" and other reasons why risk to the public is currently low.",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "Course correction: Google to link more sources in AI Overviews",
     "url": "https://arstechnica.com/google/2026/05/google-will-put-more-links-to-websites-in-ai-overviews/",
     "source": "ArsTechnica - AI",
     "date": "2026-05-08",
     "summary": "Google's AI search will start citing its sources in several new ways.",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "Court rules Trump's 10% tariff is just as illegal as the tariff it replaced",
     "url": "https://arstechnica.com/tech-policy/2026/05/trumps-10-global-tariff-is-illegal-court-rules/",
     "source": "ArsTechnica - AI",
     "date": "2026-05-08",
     "summary": "Trump's vow to impose tariffs a \"different way\" already has the tech industry on edge.",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "Chaos erupts as cyberattack disrupts learning platform Canvas amid finals",
     "url": "https://arstechnica.com/security/2026/05/chaos-erupts-as-cyberattack-disrupts-learning-platform-canvas-amid-finals/",
     "source": "ArsTechnica - AI",
     "date": "2026-05-08",
     "summary": "Across the country, schools and colleges postpone year-end tests.",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "Elon Musk faces criminal probe in France after ignoring summons in X case",
     "url": "https://arstechnica.com/tech-policy/2026/05/elon-musk-faces-criminal-probe-in-france-after-ignoring-summons-in-x-case/",
     "source": "ArsTechnica - AI",
     "date": "2026-05-08",
     "summary": "France threatens criminal charges if Musk doesn't appear for questioning.",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "Engineers at NASA's Jet Propulsion Lab make a breakthrough in rotor technology",
     "url": "https://arstechnica.com/space/2026/05/engineers-at-nasas-jet-propulsion-lab-make-a-breakthrough-in-rotor-technology/",
     "source": "ArsTechnica - AI",
     "date": "2026-05-08",
     "summary": "Testing shows rotor blades won't disintegrate when they spin at supersonic speed.",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "All the latest updates on AI data centers",
     "url": "https://www.theverge.com/ai-artificial-intelligence/902546/data-centers-ai-energy-power-grids-controversy",
     "source": "The Verge - AI",
     "date": "2026-05-08",
     "summary": "Massive new data centers are the physical foundation for tech companies’ hopes and dreams for AI. But the rush to expand warehouses full of energy-hungry servers has also kicked up fights across the world over their impact on power grids, utility bills, nearby communities, and the environment. Fr...",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "PlayStation sees AI as a ‘powerful tool’ to help make games",
     "url": "https://www.theverge.com/games/926914/sony-playstation-ai-powerful-tool-games",
     "source": "The Verge - AI",
     "date": "2026-05-08",
     "summary": "As part of an earnings presentation on Friday, Sony shared how it's thinking about AI at the company, including many details about how it's evaluating AI as part of making PlayStation games. Generative AI has recently been showing up in bigger games - though many indie developers still reject it ...",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "Nick Bostrom Has a Plan for Humanity’s ‘Big Retirement’",
     "url": "https://www.wired.com/story/nick-bostrom-has-a-plan-for-humanitys-big-retirement/",
     "source": "Wired - AI",
     "date": "2026-05-08",
     "summary": "The philosopher thinks humans should pursue advanced AI and the promise of a “solved world.”",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "The New Wild West of AI Kids’ Toys",
     "url": "https://www.wired.com/story/the-new-wild-west-of-ai-kids-toys/",
     "source": "Wired - AI",
     "date": "2026-05-08",
     "summary": "These cuddly, connected companions could disrupt everything from make-believe to bedtime stories. No wonder some lawmakers want them banned.",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "5,000 vibe-coded apps just proved shadow AI is the new S3 bucket crisis",
     "url": "https://venturebeat.com/security/vibe-coded-apps-shadow-ai-s3-bucket-crisis-ciso-audit-framework",
     "source": "VentureBeat - AI",
     "date": "2026-05-08",
     "summary": "Most enterprise security programs were built to protect servers, endpoints, and cloud accounts. None of them was built to find a customer intake form that a product manager vibe coded on Lovable over a weekend, connected to a live Supabase database, and deployed on a public URL indexed by Google....",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "See what happens when creative legends use AI to make ads for small businesses.",
     "url": "https://blog.google/company-news/inside-google/company-announcements/the-small-brief/",
     "source": "Google AI Blog",
     "date": "2026-05-08",
     "summary": "Today we're launching The Small Brief, an initiative bringing together three ad industry icons to champion a local businesses they love. Their mission is to build breakt…",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "Here’s what you need to know about the cruise ship hantavirus outbreak",
     "url": "https://www.technologyreview.com/2026/05/08/1136988/heres-what-you-need-to-know-about-the-cruise-ship-hantavirus-outbreak/",
     "source": "MIT Technology Review - AI",
     "date": "2026-05-08",
     "summary": "MIT Technology Review Explains: Let our writers untangle the complex, messy world of technology to help you understand what’s coming next. You can read more from the series here. Eight passengers aboard a Dutch-flagged cruise ship have contracted a type of hantavirus, a rare virus transmitted by ...",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "The Download: AI malaise and babymaking tech",
     "url": "https://www.technologyreview.com/2026/05/08/1136985/the-download-ai-malaise-babymaking-ivf-tech/",
     "source": "MIT Technology Review - AI",
     "date": "2026-05-08",
     "summary": "This is today’s edition of The Download, our weekday newsletter that provides a daily dose of what’s going on in the world of technology. We’ve entered the era of AI malaise AI is spreading everywhere, and it is not going away. But what will it do? What effect will it have on our society? Will…",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "Apple’s AirPods with cameras for AI are apparently close to production",
     "url": "https://www.theverge.com/tech/926376/apple-airpods-cameras-ai-production",
     "source": "The Verge - AI",
     "date": "2026-05-07",
     "summary": "Apple's rumored AirPods with cameras are nearing a stage where the company will test early mass production, Bloomberg's Mark Gurman reports. Currently, Apple testers are \"actively using\" prototypes that are in the design validation test stage, which is one step before the production validation te...",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "SpaceX has a $55 billion plan to build AI chips in Texas",
     "url": "https://www.theverge.com/ai-artificial-intelligence/926356/spacex-terafab-plant-cost-ai-chips",
     "source": "The Verge - AI",
     "date": "2026-05-07",
     "summary": "Elon Musk's plans to get into the AI chip manufacturing business are going to be costly. As the The New York Times and CNBC report, SpaceX is planning to invest at least $55 billion into its \"Terafab\" chip plant in Austin, Texas. That's according to the details of a public hearing notice filed in...",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "Big Words",
     "url": "https://simonwillison.net/2026/May/7/big-words/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-05-07",
     "summary": "Tool: Big Words I'm using my vibe coded macOS presentations tool to put together a talk, and I wanted to add a slide with some text on it. The tool only accepts URLs, so I put together a quick page that accepts query string arguments and turns them into a simple slide. Here's an example: https://...",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "GitHub Repo Stats",
     "url": "https://simonwillison.net/2026/May/7/github-repo-stats/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-05-07",
     "summary": "Tool: GitHub Repo Stats One of the things I always look for when evaluating a new GitHub repository is the number of commits it has... but that number isn't visible on GitHub's mobile site layout. I built this tool to fix that, using this prompt: Given a GitHub repo URL or foo/bar repo ID show in...",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "The Download: the tech reshaping IVF and the rise of balcony solar",
     "url": "https://www.technologyreview.com/2026/05/07/1136956/the-download-ivf-tech-balcony-solar/",
     "source": "MIT Technology Review - AI",
     "date": "2026-05-07",
     "summary": "This is today’s edition of The Download, our weekday newsletter that provides a daily dose of what’s going on in the world of technology. What’s next for IVF IVF has brought millions of babies into the world over the last four decades. But the process can still be slow, painful, and expensive—and...",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "Adding Benchmaxxer Repellant to the Open ASR Leaderboard",
     "url": "https://huggingface.co/blog/open-asr-leaderboard-private-data",
     "source": "Hugging Face Blog",
     "date": "2026-05-06",
     "summary": "",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "5 gardening tips you can try right in Search",
     "url": "https://blog.google/products-and-platforms/products/search/gardening-tips/",
     "source": "Google AI Blog",
     "date": "2026-05-06",
     "summary": "We’ve rounded up the top ways you can use Google’s AI Mode, Search Live and Shopping to help your plants thrive.",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "The Download: seafloor science and military chatbots",
     "url": "https://www.technologyreview.com/2026/05/06/1136917/the-download-seafloor-science-military-ai-chatbots/",
     "source": "MIT Technology Review - AI",
     "date": "2026-05-06",
     "summary": "This is today’s edition of The Download, our weekday newsletter that provides a daily dose of what’s going on in the world of technology. Inexpensive seafloor-hopping submersibles could stoke deep-sea science—and mining Last week, two oblong neon submersibles started to descend nearly 6,000 meter...",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "datasette-referrer-policy 0.1",
     "url": "https://simonwillison.net/2026/May/5/datasette-referrer-policy/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-05-05",
     "summary": "Release: datasette-referrer-policy 0.1 The OpenStreetMap tiles on the Datasette global-power-plants demo weren't displaying correctly. This turned out to be caused by two bugs. The first is that the CAPTCHA I added to that site a few weeks ago was triggering for the .json fetch requests used by t...",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "Our AI started a cafe in Stockholm",
     "url": "https://simonwillison.net/2026/May/5/our-ai-started-a-cafe-in-stockholm/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-05-05",
     "summary": "Our AI started a cafe in Stockholm Andon Labs previously started an AI-run retail store in San Francisco. Now they're running a similar experiment in Stockholm, Sweden, only this time it's a cafe. These experiments are interesting, and often throw out amusing anecdotes: During the first week of i...",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "A blueprint for using AI to strengthen democracy",
     "url": "https://www.technologyreview.com/2026/05/05/1136843/ai-democracy-blueprint/",
     "source": "MIT Technology Review - AI",
     "date": "2026-05-05",
     "summary": "Every few centuries, changes in how information moves reshape how societies govern themselves. The printing press spread vernacular literacy, helping give rise to the Reformation and, eventually, representative government. The telegraph made it possible to administer vast nations like the US, acc...",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "The latest AI news we announced in April 2026",
     "url": "https://blog.google/innovation-and-ai/technology/ai/google-ai-updates-april-2026/",
     "source": "Google AI Blog",
     "date": "2026-05-04",
     "summary": "Here are Google’s latest AI updates from April 2026",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "Celebrating 20 years of Google Translate: Fun facts, tips and new features to try",
     "url": "https://blog.google/products-and-platforms/products/translate/fun-facts-google-translate-20-years/",
     "source": "Google AI Blog",
     "date": "2026-04-28",
     "summary": "Google’s sharing 20 fun facts to celebrate Google Translate turning 20, from its roots as a 2006 AI experiment to supporting almost 250 languages today.",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "AI and the Future of Cybersecurity: Why Openness Matters",
     "url": "https://huggingface.co/blog/cybersecurity-openness",
     "source": "Hugging Face Blog",
     "date": "2026-04-21",
     "summary": "",
     "is_new": false,
     "lang": "en"
    },
    {
     "title": "太初元碁携龙虾一体机亮相北京科博会",
     "url": "https://www.qbitai.com/2026/05/415027.html",
     "source": "量子位",
     "date": "2026-05-09",
     "summary": "",
     "is_new": true,
     "lang": "zh"
    },
    {
     "title": "阶跃最新语音模型位列 Artificial Analysis 评测榜中国第一",
     "url": "https://www.qbitai.com/2026/05/415023.html",
     "source": "量子位",
     "date": "2026-05-09",
     "summary": "",
     "is_new": true,
     "lang": "zh"
    },
    {
     "title": "谷歌「AI联合数学家」来了！刷新最难数学AI基准SOTA，牛津教授用它解开群论悬案",
     "url": "https://www.qbitai.com/2026/05/414788.html",
     "source": "量子位",
     "date": "2026-05-09",
     "summary": "谷歌AI for Math迈出最新一步",
     "is_new": true,
     "lang": "zh"
    },
    {
     "title": "行业首创空间3D显示，还能主动提醒和帮忙叫车，千问AI眼镜这操作真把我看愣了",
     "url": "https://www.qbitai.com/2026/05/414501.html",
     "source": "量子位",
     "date": "2026-05-09",
     "summary": "眼镜里的信息第一次「立」起来了",
     "is_new": true,
     "lang": "zh"
    },
    {
     "title": "播放破亿的 AI 短片，名场面是一个「穿帮镜头」| 对话《纸手机》主创",
     "url": "https://www.ifanr.com/1661163?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-05-09",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": true,
     "lang": "zh"
    },
    {
     "title": "AI开始接管年轻人的「精神自留地」",
     "url": "<![CDATA[https://36kr.com/p/3801461350702855?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-05-09",
     "summary": "撰文｜锅包柚 封面来源｜Unsplash（AI辅助扩图） 五一假期已经结束，但打工人的“节后综合症”并未消退。 面对永远99+的工作群消息，和改不完的PPT，打工人蝈蝈在摸鱼时打开灵光APP里的一个小游戏——“老板被我fire了”。 屏幕里跳出老板最爱的PUA话术：“你们要相信我的眼光”“现在的付出都是值得的”。她疯狂点击，伴随着金币掉落的音效，在赛博世界里体验了一把将老板痛扁、原地暴富的爽感。 “老板被我fire了” 这个让蝈蝈短暂“活过来”的应用，不是什么专业团队做的。而是一个同样被工作折磨的网友@二旬老人，在灵光APP免费花30秒随手“搓”出来的。 这届年轻人，连发泄情绪都要精打细...",
     "is_new": true,
     "lang": "zh"
    },
    {
     "title": "光帆带摄像头AI耳机本月开售",
     "url": "<![CDATA[https://36kr.com/newsflashes/3801812857871876?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-05-09",
     "summary": "36氪获悉，光帆科技官方账号发布发售预热海报。海报显示，全球首款具备视觉感知能力的主动式AI耳机——光帆全感AI耳机，将于5月15日正式开售。",
     "is_new": true,
     "lang": "zh"
    },
    {
     "title": "独家｜苹果第一个 AI 硬件，还没发布就已经难产了",
     "url": "https://www.ifanr.com/1665172?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-05-08",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh"
    },
    {
     "title": "AI 硬件时代，手机不会轻易的狗带｜AI 器物志",
     "url": "https://www.ifanr.com/1665181?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-05-08",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh"
    },
    {
     "title": "独家｜苹果带摄像头的AirPods或被迫暂停，部分产线「原地解散」",
     "url": "https://www.ifanr.com/1665134?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-05-08",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh"
    },
    {
     "title": "早报｜曝苹果考虑取消入门款MacBook Neo/理想高管谈MEGA设计争议:不是失败/千问PC端上线AI语音输入",
     "url": "https://www.ifanr.com/1665130?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-05-08",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh"
    },
    {
     "title": "派早报：Google 发布 Fitbit Air 等",
     "url": "https://sspai.com/post/109489",
     "source": "少数派 - AI",
     "date": "2026-05-08",
     "summary": "高通发布骁龙 6 Gen 5 / 4 Gen 5 移动平台，Google 宣布停运 Project Mariner 等。查看全文",
     "is_new": false,
     "lang": "zh"
    },
    {
     "title": "当AI开始懂情绪，AI奇妙物语点亮全民创意风潮",
     "url": "https://www.leiphone.com/category/industrynews/iAOqSCD9VnjVkekb.html",
     "source": "雷锋网 - AI",
     "date": "2026-05-08",
     "summary": "2026年社交网络的“活人感”，一定是AI给的。从朋友圈的“赛博旅行照”到聊天框里的“AI扩图”，生成式AI已不再是极客的玩具，而是普通人记录生活、表达情绪的第六感。当技术门槛被踏平，一场关于“谁更会玩”的创意竞赛悄然开启。近日，由「AI奇妙物语」与安慕希联合发起的“即梦X安慕希整颗蓝莓AI创作大赛” 正在社交平台卷起一场创意风暴。这场事关想象力的全民狂欢折射出的是“AI奇妙物语”IP的先锋创意和贴近大众生活的特质，也为行业提供了一个“AI+艺术+品牌”深度融合的样本。用AI解构生活，给日常加上奇幻滤镜「AI奇妙物语」以“先锋影像”为定位，以“东方梦境”为美学基调。它的诞生就是要打破大众...",
     "is_new": false,
     "lang": "zh"
    },
    {
     "title": "中国高校科研 AI 云市场，阿里云第一！",
     "url": "https://www.leiphone.com/category/industrynews/oue4W89QPv8sRtVl.html",
     "source": "雷锋网 - AI",
     "date": "2026-05-07",
     "summary": "5 月 6 日，国际市场调研机构沙利文（Frost & Sullivan）发布《中国高校科研机构AI4S市场追踪报告，2025年》。报告显示，阿里云以26%的市场份额领跑中国高校科研机构AI4S云市场，稳居第一。AI4S，即AI for Science，人工智能驱动的科学研究，被称作实验、理论、计算、数据范式之后的“第五范式”。报告显示，中国高校科研AI4S 云市场正处于快速成长期，预计2030年将达107亿元。沙利文指出，与通用企业级AI市场相比，中国高校科研机构 AI4S 的需求正在从单一算力资源，升级为AI 全栈能力建设，更强调科研任务适配性、复杂算力与工具链协同能力，以及跨学科场...",
     "is_new": false,
     "lang": "zh"
    },
    {
     "title": "蚂蚁阿福启动“健康中国体检关怀行动”，为1亿人免费解读体检报告",
     "url": "https://www.leiphone.com/category/industrynews/B3MGZRHtiuWL4b1A.html",
     "source": "雷锋网 - AI",
     "date": "2026-05-06",
     "summary": "春季是传统的体检季，可很多人拿到体检报告却犯了难。一项5000名网友参与的调研显示，80%的受访者表示体检报告没有得到详细讲解，也不知道检后该怎么做；75%的受访者没有按体检报告的建议进行复查。为解决这一普遍痛点，5月6日，国内最大的AI健康应用蚂蚁阿福启动“健康中国体检关怀行动”，为1亿人免费解读体检报告。用户打开阿福App拍照或上传体检报告，即可获得实时、免费、专业的解读，明明白白看懂报告。阿福解读体检报告以“红绿灯”形式清晰告知检查结果关注优先级，并给到针对性的健康行动清单。随着“健康中国”战略深入推进，预防性健康管理成为大众关切的重点，体检更是提升全民健康水平的重要抓手。阿福启动...",
     "is_new": false,
     "lang": "zh"
    }
   ]
  }
 ],
 "trending": [
  {
   "name": "ray-project/ray",
   "url": "https://github.com/ray-project/ray",
   "description": "Ray is an AI compute engine. Ray consists of a core distributed runtime and a set of AI Libraries for accelerating ML workloads.",
   "blurb": "Ray is an AI compute engine. Ray consists of a core distributed runtime and a set of AI Libraries for accelerating ML workloads.",
   "stars": 42479,
   "forks": 7537,
   "language": "Python",
   "topics": [
    "data-science",
    "deep-learning",
    "deployment",
    "distributed",
    "hyperparameter-optimization",
    "hyperparameter-search",
    "large-language-models",
    "llm",
    "llm-inference",
    "llm-serving",
    "machine-learning",
    "optimization",
    "parallel",
    "python",
    "pytorch",
    "ray",
    "reinforcement-learning",
    "rllib",
    "serving",
    "tensorflow"
   ]
  },
  {
   "name": "mlflow/mlflow",
   "url": "https://github.com/mlflow/mlflow",
   "description": "The open source AI engineering platform for agents, LLMs, and ML models. MLflow enables teams of all sizes to debug, evaluate, monitor, and optimize production-quality AI applications while controllin",
   "blurb": "The open source AI engineering platform for agents, LLMs, and ML models. MLflow enables teams of all sizes to debug, evaluate, monitor, and optimize production-quality AI applications while controllin",
   "stars": 25841,
   "forks": 5703,
   "language": "Python",
   "topics": [
    "agentops",
    "agents",
    "ai",
    "ai-governance",
    "apache-spark",
    "evaluation",
    "langchain",
    "llm-evaluation",
    "llmops",
    "machine-learning",
    "ml",
    "mlflow",
    "mlops",
    "model-management",
    "observability",
    "open-source",
    "openai",
    "prompt-engineering"
   ]
  },
  {
   "name": "screenpipe/screenpipe",
   "url": "https://github.com/screenpipe/screenpipe",
   "description": "Run agents that work based on what you do. 24/7 local screen & mic recording for the superintelligence era",
   "blurb": "Run agents that work based on what you do. 24/7 local screen & mic recording for the superintelligence era",
   "stars": 18625,
   "forks": 1694,
   "language": "Rust",
   "topics": [
    "agents",
    "agi",
    "ai",
    "computer-vision",
    "llm",
    "machine-learning",
    "ml",
    "multimodal",
    "vision"
   ]
  },
  {
   "name": "stas00/ml-engineering",
   "url": "https://github.com/stas00/ml-engineering",
   "description": "Machine Learning Engineering Open Book",
   "blurb": "Machine Learning Engineering Open Book",
   "stars": 17887,
   "forks": 1139,
   "language": "Python",
   "topics": [
    "ai",
    "debugging",
    "gpus",
    "inference",
    "large-language-models",
    "llm",
    "machine-learning",
    "machine-learning-engineering",
    "mlops",
    "network",
    "pytorch",
    "scalability",
    "slurm",
    "storage",
    "training",
    "transformers"
   ]
  },
  {
   "name": "alibaba/MNN",
   "url": "https://github.com/alibaba/MNN",
   "description": "MNN: A blazing-fast, lightweight inference engine battle-tested by Alibaba, powering high-performance on-device LLMs and Edge AI.",
   "blurb": "MNN: A blazing-fast, lightweight inference engine battle-tested by Alibaba, powering high-performance on-device LLMs and Edge AI.",
   "stars": 15140,
   "forks": 2303,
   "language": "C++",
   "topics": [
    "arm",
    "convolution",
    "deep-learning",
    "embedded-devices",
    "llm",
    "machine-learning",
    "ml",
    "mnn",
    "transformer",
    "vulkan",
    "winograd-algorithm"
   ]
  },
  {
   "name": "ludwig-ai/ludwig",
   "url": "https://github.com/ludwig-ai/ludwig",
   "description": "Low-code framework for building custom LLMs, neural networks, and other AI models",
   "blurb": "Low-code framework for building custom LLMs, neural networks, and other AI models",
   "stars": 11692,
   "forks": 1217,
   "language": "Python",
   "topics": [
    "computer-vision",
    "data-centric",
    "data-science",
    "deep",
    "deep-learning",
    "deeplearning",
    "fine-tuning",
    "learning",
    "llama",
    "llama2",
    "llm",
    "llm-training",
    "machine-learning",
    "machinelearning",
    "mistral",
    "ml",
    "natural-language",
    "natural-language-processing",
    "neural-network",
    "pytorch"
   ]
  },
  {
   "name": "tensorzero/tensorzero",
   "url": "https://github.com/tensorzero/tensorzero",
   "description": "TensorZero is an open-source LLMOps platform that unifies an LLM gateway, observability, evaluation, optimization, and experimentation.",
   "blurb": "TensorZero is an open-source LLMOps platform that unifies an LLM gateway, observability, evaluation, optimization, and experimentation.",
   "stars": 11347,
   "forks": 824,
   "language": "Rust",
   "topics": [
    "ai",
    "ai-engineering",
    "anthropic",
    "artificial-intelligence",
    "deep-learning",
    "genai",
    "generative-ai",
    "gpt",
    "large-language-models",
    "llama",
    "llm",
    "llmops",
    "llms",
    "machine-learning",
    "ml",
    "ml-engineering",
    "mlops",
    "openai",
    "python",
    "rust"
   ]
  },
  {
   "name": "Netflix/metaflow",
   "url": "https://github.com/Netflix/metaflow",
   "description": "Build, Manage and Deploy AI/ML Systems",
   "blurb": "Build, Manage and Deploy AI/ML Systems",
   "stars": 10084,
   "forks": 1270,
   "language": "Python",
   "topics": [
    "agents",
    "ai",
    "aws",
    "azure",
    "cost-optimization",
    "datascience",
    "distributed-training",
    "gcp",
    "generative-ai",
    "high-performance-computing",
    "kubernetes",
    "llm",
    "llmops",
    "machine-learning",
    "ml",
    "ml-infrastructure",
    "ml-platform",
    "mlops",
    "model-management",
    "python"
   ]
  },
  {
   "name": "bentoml/BentoML",
   "url": "https://github.com/bentoml/BentoML",
   "description": "The easiest way to serve AI apps and models - Build Model Inference APIs, Job queues, LLM apps, Multi-model pipelines, and more!",
   "blurb": "The easiest way to serve AI apps and models - Build Model Inference APIs, Job queues, LLM apps, Multi-model pipelines, and more!",
   "stars": 8634,
   "forks": 958,
   "language": "Python",
   "topics": [
    "ai-inference",
    "deep-learning",
    "generative-ai",
    "inference-platform",
    "llm",
    "llm-inference",
    "llm-serving",
    "llmops",
    "machine-learning",
    "ml-engineering",
    "mlops",
    "model-inference-service",
    "model-serving",
    "multimodal",
    "python"
   ]
  },
  {
   "name": "evidentlyai/evidently",
   "url": "https://github.com/evidentlyai/evidently",
   "description": "Evidently is ​​an open-source ML and LLM observability framework. Evaluate, test, and monitor any AI-powered system or data pipeline. From tabular data to Gen AI. 100+ metrics.",
   "blurb": "Evidently is ​​an open-source ML and LLM observability framework. Evaluate, test, and monitor any AI-powered system or data pipeline. From tabular data to Gen AI. 100+ metrics.",
   "stars": 7471,
   "forks": 842,
   "language": "Jupyter Notebook",
   "topics": [
    "data-drift",
    "data-quality",
    "data-science",
    "data-validation",
    "generative-ai",
    "hacktoberfest",
    "html-report",
    "jupyter-notebook",
    "llm",
    "llmops",
    "machine-learning",
    "mlops",
    "model-monitoring",
    "pandas-dataframe"
   ]
  },
  {
   "name": "postgresml/postgresml",
   "url": "https://github.com/postgresml/postgresml",
   "description": "Postgres with GPUs for ML/AI apps.",
   "blurb": "Postgres with GPUs for ML/AI apps.",
   "stars": 6783,
   "forks": 361,
   "language": "Rust",
   "topics": [
    "ai",
    "ann",
    "approximate-nearest-neighbor-search",
    "artificial-intelligence",
    "classification",
    "clustering",
    "embeddings",
    "forecasting",
    "knn",
    "llm",
    "machine-learning",
    "ml",
    "postgres",
    "rag",
    "regression",
    "sql",
    "vector-database"
   ]
  },
  {
   "name": "rustformers/llm",
   "url": "https://github.com/rustformers/llm",
   "description": "[Unmaintained, see README] An ecosystem of Rust libraries for working with large language models",
   "blurb": "[Unmaintained, see README] An ecosystem of Rust libraries for working with large language models",
   "stars": 6150,
   "forks": 378,
   "language": "Rust",
   "topics": [
    "ai",
    "ggml",
    "llm",
    "ml",
    "rust"
   ]
  },
  {
   "name": "ashishps1/learn-ai-engineering",
   "url": "https://github.com/ashishps1/learn-ai-engineering",
   "description": "Learn AI and LLMs from scratch using free resources",
   "blurb": "Learn AI and LLMs from scratch using free resources",
   "stars": 5466,
   "forks": 1361,
   "language": "Unknown",
   "topics": [
    "agentic-ai",
    "agents",
    "ai",
    "deep-learning",
    "generative-ai",
    "large-language-models",
    "llm",
    "machine-learning",
    "mcp",
    "ml",
    "prompt-engineering",
    "rag"
   ]
  },
  {
   "name": "zenml-io/zenml",
   "url": "https://github.com/zenml-io/zenml",
   "description": "ZenML 🙏: One AI Platform from Pipelines to Agents. https://zenml.io.",
   "blurb": "ZenML 🙏: One AI Platform from Pipelines to Agents. https://zenml.io.",
   "stars": 5410,
   "forks": 612,
   "language": "Python",
   "topics": [
    "agentops",
    "agents",
    "ai",
    "automl",
    "data-science",
    "deep-learning",
    "devops-tools",
    "genai",
    "llm",
    "llmops",
    "machine-learning",
    "metadata-tracking",
    "ml",
    "mlops",
    "pipelines",
    "production-ready",
    "pytorch",
    "tensorflow",
    "workflow",
    "zenml"
   ]
  },
  {
   "name": "huggingface/text-embeddings-inference",
   "url": "https://github.com/huggingface/text-embeddings-inference",
   "description": "A blazing fast inference solution for text embeddings models",
   "blurb": "A blazing fast inference solution for text embeddings models",
   "stars": 4778,
   "forks": 387,
   "language": "Rust",
   "topics": [
    "ai",
    "embeddings",
    "huggingface",
    "llm",
    "ml"
   ]
  }
 ]
};