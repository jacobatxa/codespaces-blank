const APP_DATA = {
 "today": "2026-06-25",
 "fetched_at": "2026-06-25T04:04:03",
 "total": 134,
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
   "count": 8,
   "color": "#059669"
  },
  "量子位": {
   "count": 10,
   "color": "#eab308"
  },
  "APPSO": {
   "count": 8,
   "color": "#f43f5e"
  },
  "动点科技 - AI": {
   "count": 3,
   "color": "#10b981"
  },
  "雷锋网 - AI": {
   "count": 16,
   "color": "#8b5cf6"
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
   "count": 33
  },
  {
   "name": "AI Agent与智能体",
   "icon": "🤯",
   "color": "#d97706",
   "count": 9
  },
  {
   "name": "具身智能与机器人",
   "icon": "🤖",
   "color": "#059669",
   "count": 3
  },
  {
   "name": "多模态与AIGC",
   "icon": "🎨",
   "color": "#dc2626",
   "count": 2
  },
  {
   "name": "AI硬件与芯片",
   "icon": "💾",
   "color": "#0891b2",
   "count": 6
  },
  {
   "name": "开源与生态",
   "icon": "🌐",
   "color": "#2563eb",
   "count": 7
  },
  {
   "name": "AI商业与投融资",
   "icon": "💰",
   "color": "#ca8a04",
   "count": 15
  },
  {
   "name": "AI安全与对齐",
   "icon": "🛡️",
   "color": "#dc2626",
   "count": 2
  },
  {
   "name": "其他AI资讯",
   "icon": "🔮",
   "color": "#6b7280",
   "count": 57
  }
 ],
 "sections": [
  {
   "name": "大模型与基础架构",
   "icon": "🧠",
   "color": "#7c3aed",
   "count": 33,
   "cards": [
    {
     "title": "Accelerating Transformers Fine-Tuning with NVIDIA NeMo AutoModel",
     "url": "https://huggingface.co/blog/nvidia/accelerating-fine-tuning-nvidia-nemo-automodel",
     "source": "Hugging Face Blog",
     "date": "2026-06-24",
     "summary": "",
     "is_new": true,
     "lang": "en",
     "interpretation": "英伟达新工具可大幅加速大模型微调，降低企业AI门槛。"
    },
    {
     "title": "OpenAI and Broadcom announce chip designed for LLM inference at scale",
     "url": "https://arstechnica.com/gadgets/2026/06/openai-and-broadcom-announce-chip-designed-for-llm-inference-at-scale/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-24",
     "summary": "The silicon race is heating up amid the struggle to keep up with demand.",
     "is_new": true,
     "lang": "en",
     "interpretation": "定制芯片专为大模型推理优化，可能重塑AI算力供应链格局。"
    },
    {
     "title": "OpenAI reveals its first AI processor: Jalapeño",
     "url": "https://www.theverge.com/ai-artificial-intelligence/955939/openai-reveals-its-first-ai-processor-jalapeno",
     "source": "The Verge - AI",
     "date": "2026-06-24",
     "summary": "OpenAI has just revealed a new \"intelligence processor\" chip for AI servers made in partnership with Broadcom. The chip, called Jalapeño, is designed to power current and future large language models, according to an announcement on Wednesday. Jalapeño is an ASIC (Application-Specific Integrated ...",
     "is_new": true,
     "lang": "en",
     "interpretation": "OpenAI首款AI芯片“Jalapeño”发布，标志其摆脱英伟达依赖的战略转折。"
    },
    {
     "title": "OpenAI and Broadcom unveil LLM-optimized inference chip",
     "url": "https://openai.com/index/openai-broadcom-jalapeno-inference-chip",
     "source": "OpenAI Blog",
     "date": "2026-06-24",
     "summary": "OpenAI and Broadcom introduce Jalapeño, a custom AI chip built for LLM inference to improve performance, efficiency, and scale across AI systems.",
     "is_new": true,
     "lang": "en",
     "interpretation": "软硬协同优化大模型推理芯片，或降低AI应用成本与能耗。"
    },
    {
     "title": "How to Opt Out of Google Search’s New AI Data Training Feature",
     "url": "https://www.wired.com/story/how-to-opt-out-of-google-search-new-ai-data-training/",
     "source": "Wired - AI",
     "date": "2026-06-24",
     "summary": "Google’s Search history update stores media uploads from your interactions, like images used in reverse image searches, for training its AI models.",
     "is_new": true,
     "lang": "en",
     "interpretation": "用户可主动退出谷歌搜索AI训练，体现数据隐私控制权博弈。"
    },
    {
     "title": "simonw/browser-compat-db",
     "url": "https://simonwillison.net/2026/Jun/24/browser-compat-db/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-24",
     "summary": "simonw/browser-compat-db Inspired by Mozilla's new MDN MCP service - source code here - I decided to try converting their comprehensive mdn/browser-compat-data repository full of browser compatibility data into a SQLite database. This new GitHub repo includes a Claude Code for web (Opus 4.8) gene...",
     "is_new": true,
     "lang": "en",
     "interpretation": "浏览器兼容性数据库开源，助力开发者快速定位跨平台问题。"
    },
    {
     "title": "Quoting Tom MacWright",
     "url": "https://simonwillison.net/2026/Jun/24/tom-macwright/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-24",
     "summary": "In the last few months, I've started to see [job applications] that were clearly cowritten by an LLM, link to an LLM-generated portfolio site, which then links to LLM-generated GitHub projects, with purely LLM-generated commit messages. [...] My other reaction is that I don't know anything about ...",
     "is_new": true,
     "lang": "en",
     "interpretation": "引用技术观点引发讨论，折射开发者社区对工具与理念的反思。"
    },
    {
     "title": "Your enterprise AI agents should automatically remember which model is right for which task. Mindstone built the capability with Rebel",
     "url": "https://venturebeat.com/orchestration/your-enterprise-ai-agents-should-automatically-remember-which-model-is-right-for-which-task-mindstone-built-the-capability-with-rebel",
     "source": "VentureBeat - AI",
     "date": "2026-06-24",
     "summary": "AI agent orchestration platforms are popping up like weeds these days, but London-based AI transformation startup Mindstone's Rebel might be among the most promising I've come across. That's because the system, which officially launched this week, is a local-first, agentic AI operating system dis...",
     "is_new": true,
     "lang": "en",
     "interpretation": "企业AI代理自动匹配任务模型，提升效率并降低部署复杂度。"
    },
    {
     "title": "Mistral launches OCR 4, turning document extraction into a full enterprise AI play",
     "url": "https://venturebeat.com/data/mistral-launches-ocr-4-turning-document-extraction-into-a-full-enterprise-ai-play",
     "source": "VentureBeat - AI",
     "date": "2026-06-24",
     "summary": "Mistral AI on Tuesday released OCR 4, a document intelligence model that moves beyond raw text extraction to return structured representations of entire documents — complete with bounding boxes, block-type classification, and per-word confidence scores. The release marks Mistral's fourth generati...",
     "is_new": true,
     "lang": "en",
     "interpretation": "Mistral OCR4将文档提取升级为企业级AI服务，推动办公自动化深度落地。"
    },
    {
     "title": "Alibaba's model never trained as an agent — and improved agent performance across seven benchmarks",
     "url": "https://venturebeat.com/technology/alibabas-model-never-trained-as-an-agent-and-improved-agent-performance-across-seven-benchmarks",
     "source": "VentureBeat - AI",
     "date": "2026-06-24",
     "summary": "Alibaba's Qwen team released Qwen-AgentWorld on Tuesday — two models trained not to act inside agent environments, but to predict what those environments return. The release covers seven domains under a single architecture: MCP, Search, Terminal, Software Engineering, Android, Web, and OS. The re...",
     "is_new": true,
     "lang": "en",
     "interpretation": "阿里模型未专门训练却提升七项智能体指标，证明基础能力可迁移。"
    },
    {
     "title": "Xiaomi's HarnessX rewrites its own AI scaffolding mid-task — and smaller models gain the most",
     "url": "https://venturebeat.com/orchestration/xiaomis-harnessx-rewrites-its-own-ai-scaffolding-mid-task-and-smaller-models-gain-the-most",
     "source": "VentureBeat - AI",
     "date": "2026-06-24",
     "summary": "As enterprise AI agents take on increasingly complex, long-horizon tasks, their performance is often restricted by their harness, the software scaffolding that connects the backbone LLM to its environment. Currently, harnesses are largely static and hand-crafted. Improving them is largely manual ...",
     "is_new": true,
     "lang": "en",
     "interpretation": "小米HarnessX让模型在任务中自我重构，小模型受益最大，降低部署成本。"
    },
    {
     "title": "How Shopify built an AI stack that doesn't care which models survive",
     "url": "https://venturebeat.com/orchestration/how-shopify-built-an-ai-stack-that-doesnt-care-which-models-survive",
     "source": "VentureBeat - AI",
     "date": "2026-06-24",
     "summary": "Shopify built an LLM proxy that gives every engineer access to multiple AI providers — with automatic failover when any one of them goes down, changes, or disappears. When Claude Fable 5 shut down, Shopify's engineers didn't go into panic mode. The proxy shifted them to Claude Opus or GPT 5.5 aut...",
     "is_new": true,
     "lang": "en",
     "interpretation": "Shopify构建模型无关的AI架构，避免被单一技术路线绑定，增强抗风险能力。"
    },
    {
     "title": "The emergence of the web data infrastructure layer for AI",
     "url": "https://www.technologyreview.com/2026/06/24/1139202/the-emergence-of-the-web-data-infrastructure-layer-for-ai/",
     "source": "MIT Technology Review - AI",
     "date": "2026-06-24",
     "summary": "AI is booming. New use cases are emerging each day. To capitalize on the technology’s potential, enterprises require data at scale. In many cases, though, the relevant information is blocked or unstructured, which limits its use by AI models. To understand this challenge, consider the foundation ...",
     "is_new": true,
     "lang": "en",
     "interpretation": "网络数据基础设施层崛起，为AI训练提供标准化、可复用的数据管道。"
    },
    {
     "title": "Experimenting with the proposed Cross-Origin Storage API in Transformers.js",
     "url": "https://huggingface.co/blog/cross-origin-storage",
     "source": "Hugging Face Blog",
     "date": "2026-06-23",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "跨域存储API实验或为浏览器端AI应用开辟更灵活的数据处理路径。"
    },
    {
     "title": "How GPT-5 helped immunologist Derya Unutmaz solve a 3-year-old mystery",
     "url": "https://openai.com/index/gpt-5-immunology-mystery",
     "source": "OpenAI Blog",
     "date": "2026-06-23",
     "summary": "GPT-5 Pro helped solve a 3-year-old immunology mystery, offering insights into T cell behavior. The breakthrough could support cancer and autoimmune research.",
     "is_new": false,
     "lang": "en",
     "interpretation": "GPT-5在科研中展现突破性推理能力，加速复杂问题解决。"
    },
    {
     "title": "We got local models to triage the OpenClaw repo for FREE!*",
     "url": "https://huggingface.co/blog/local-models-pr-triage",
     "source": "Hugging Face Blog",
     "date": "2026-06-22",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "本地模型实现开源仓库自动化分类，降低维护成本与人力投入。"
    },
    {
     "title": "Daybreak: Tools for securing every organization in the world",
     "url": "https://openai.com/index/daybreak-securing-the-world",
     "source": "OpenAI Blog",
     "date": "2026-06-22",
     "summary": "OpenAI introduces new Daybreak tools, including Codex Security and GPT-5.5-Cyber, to help organizations find, validate, and patch vulnerabilities at scale.",
     "is_new": false,
     "lang": "en",
     "interpretation": "新型安全工具瞄准全球组织防护，或推动企业级安全标准升级。"
    },
    {
     "title": "Meta Exposed Data Internally From Its Controversial Employee-Tracking Program",
     "url": "https://www.wired.com/story/meta-accidentally-let-employees-access-each-others-keystroke-data/",
     "source": "Wired - AI",
     "date": "2026-06-22",
     "summary": "Employees had previously raised concerns about the initiative, which involves collecting workers’ keystroke data to train AI models.",
     "is_new": false,
     "lang": "en",
     "interpretation": "内部监控数据泄露暴露科技公司员工隐私与信任危机。"
    },
    {
     "title": "OpenAI Launches Full-Scale Effort to Patch Open-Source Bugs as It Takes on Anthropic’s Mythos",
     "url": "https://www.wired.com/story/openai-launches-full-scale-effort-to-patch-open-source-bugs-as-it-takes-on-anthropics-mythos/",
     "source": "Wired - AI",
     "date": "2026-06-22",
     "summary": "Amid concerns about AI models’ cybersecurity capabilities, OpenAI revealed an improved version of GPT-5.5-Cyber and its “Patch the Planet” initiative to fix open-source software bugs.",
     "is_new": false,
     "lang": "en",
     "interpretation": "OpenAI主动修复开源漏洞，意在争夺开发者社区信任与话语权。"
    },
    {
     "title": "Porting the Moebius 0.2B image inpainting model to run in the browser with Claude Code",
     "url": "https://simonwillison.net/2026/Jun/22/porting-moebius/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-22",
     "summary": "This morning on Hacker News I saw Moebius: 0.2B Lightweight Image Inpainting Framework with 10B-Level Performance, describing a small but effective inpainting model - a model where you can mark regions of an image to remove and the model imagines what should fill the space. The released model req...",
     "is_new": false,
     "lang": "en",
     "interpretation": "将图像修复模型移植到浏览器运行，降低AI应用门槛。"
    },
    {
     "title": "Samsung Electronics brings ChatGPT and Codex to employees",
     "url": "https://openai.com/index/samsung-electronics-chatgpt-codex-deployment",
     "source": "OpenAI Blog",
     "date": "2026-06-21",
     "summary": "Samsung Electronics deploys ChatGPT Enterprise and Codex to employees worldwide, marking one of OpenAI’s largest enterprise AI rollouts.",
     "is_new": false,
     "lang": "en",
     "interpretation": "三星引入AI工具提升效率，但需关注数据安全与员工依赖风险。"
    },
    {
     "title": "Is it agentic enough? Benchmarking open models on your own tooling",
     "url": "https://huggingface.co/blog/is-it-agentic-enough",
     "source": "Hugging Face Blog",
     "date": "2026-06-18",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "用自有工具测试开源模型智能性，强调实际应用场景的评估价值。"
    },
    {
     "title": "How we used Gemini to build Google I/O 2026",
     "url": "https://blog.google/innovation-and-ai/technology/ai/io-2026-google-ai/",
     "source": "Google AI Blog",
     "date": "2026-06-01",
     "summary": "Learn how Googlers used AI to produce Google I/O 2026.",
     "is_new": false,
     "lang": "en",
     "interpretation": "揭秘如何用Gemini模型构建2026年I/O大会，展示AI开发能力。"
    },
    {
     "title": "9 demos of Gemini Omni and Gemini 3.5 in action",
     "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-omni-3-5-videos/",
     "source": "Google AI Blog",
     "date": "2026-05-29",
     "summary": "Watch 9 videos showing the capabilities of Gemini Omni and Gemini 3.5, announced at Google I/O 2026.",
     "is_new": false,
     "lang": "en",
     "interpretation": "九项演示直观展示Gemini Omni与3.5模型的实际能力。"
    },
    {
     "title": "阿里QoderWork推“峰谷Token”，夜间使用Qwen3.7低至2折",
     "url": "https://www.qbitai.com/2026/06/437834.html",
     "source": "量子位",
     "date": "2026-06-24",
     "summary": "涵盖QoderWork、Qoder Desktop等",
     "is_new": true,
     "lang": "zh",
     "interpretation": "夜间算力打折，降低AI使用门槛，推动错峰应用普及。"
    },
    {
     "title": "别让 AI 碰生产环境！Reddit 火爆血泪贴，痛诉 AI 如何一刀切断数据库生命线",
     "url": "https://www.leiphone.com/category/yanxishe/oG2mZO3y4nGNbORu.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-24",
     "summary": "AI 提效有多爽，炸库就有多痛。 作者丨高允毅 编辑丨马晓宁 “别再盲信AI了！你以为是资深专家，其实是炸库高手！”6月22日，全球极客聚集的 Reddit的 LocalLLaMA 板块，一位资深数据工程师发了一篇血泪帖《A Cautionary Note on Local LLMs, Especially in Agentic Contexts》（关于本地大语言模型的警示，尤其是在 Agent 智能体场景中），控诉 AI 的“伪装”已经进化到了人类肉眼难以察觉的危险地步。01完美的伪装与静默的雪崩发帖人 vbwyrde 日常工作是和数据库打交道。事发当天，他正试图用本地 Qwen3 2...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "警示AI直接操作生产环境风险，强调安全边界与人工兜底。"
    },
    {
     "title": "百度智能云发布百度千帆Token Plan企业版，提供GLM-5.2等模型",
     "url": "https://www.leiphone.com/category/industrynews/He2ajsw4G5vP9m2R.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-24",
     "summary": "6月24日消息，百度智能云正式发布企业级AI生产力订阅服务——百度千帆Token Plan企业版，面向企业提供统一采购、统一管理、统一运营的AI资源服务，帮助企业以固定预算、统一管理的方式高效使用AI能力，加速AI在组织内部的规模化落地。﻿据介绍，百度千帆已率先完成智谱GLM-5.2适配并接入Token Plan企业版服务体系，企业用户和开发者无需复杂部署与调优，即可在长程任务处理、复杂推理、Coding等场景中便捷调用该模型。﻿随着大模型能力持续演进，AI正从少数技术团队使用的创新工具逐步演变为企业级生产力基础设施。然而，在规模化应用过程中企业也面临新的挑战：员工分散采购AI工具、模型...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "百度千帆推出企业版Token计划，加速大模型在企业端商业化。"
    },
    {
     "title": "360发布“中国版Mythos”图龙锋 周鸿祎：漏洞发现能力正成为新的战略能力",
     "url": "https://www.leiphone.com/category/industrynews/t81MR1roNriefQ6v.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-24",
     "summary": "在今日开幕的ISC.AI 2026（第十四届互联网安全大会）上，360集团创始人周鸿祎正式发布360 AI安全“倚天屠龙”两大核心能力：漏洞自动化挖掘智能体“图龙锋”和网络安全自动化防御系统“仪天阵”。同时，360联合飞腾、麒麟等信创、安全、云计算、大模型和算力等产业伙伴，共同发起“磐石之盾”安全协作计划。近期，Anthropic宣布限制内部最强模型Mythos对外开放，引发全球安全行业广泛关注。早在该模型问世初期，曾引发美国一众网络安全巨头股价集体暴跌。周鸿祎认为，Mythos之所以引发震动，根本原因在于它能自主发现漏洞、分析漏洞甚至构造网络攻击“武器”，相当于AI时代的“网络核武器”...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "漏洞发现被提升为战略能力，网络安全攻防进入新阶段。"
    },
    {
     "title": "阿里QoderWork推“峰谷Token”，夜间使用Qwen3.7低至2折",
     "url": "https://www.leiphone.com/category/industrynews/fnvQGe0cc0EAX1bK.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-24",
     "summary": "6月23日晚，阿里QoderWork推出“峰谷Token”，Agent在每晚 22:00到次日08:00运行可自动享受优惠，其中Qwen3.7-Max模型低至2折。这是国内首个上线“峰谷Token”的Agent产品，将大幅降低用户的使用成本。例如，用户可在白天设定好定时任务、或者睡前提交长程任务指令，选择Qwen3.7模型，让Agent自动跑完全流程，早上起来验收即可。据介绍，夜间折扣产品涵盖QoderWork、Qoder Desktop等产品。]]>",
     "is_new": true,
     "lang": "zh",
     "interpretation": "夜间算力打折，降低AI使用门槛，推动错峰应用普及。"
    },
    {
     "title": "独家丨清研精准完成数亿元 B3 轮融资，目标打造物理 AI 数据基础设施",
     "url": "https://www.leiphone.com/category/industrynews/ATSs1siQdN2RCpgn.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-24",
     "summary": "雷峰网独家获悉，清华系物理AI企业「清研精准」已于近日完成数亿元B3轮融资，本轮融资由北京市绿色能源基金、北汽产投领投，裕隆集团跟投。据悉，该轮资金将会用于核心人才招募、多模态数采设备的研发与规模化部署，以及算力采购与模型训练基础设施建设等方向。01清华系出身，业务横跨汽车等多个领域清研精准成立于2018年，由清华大学孵化，致力于打造物理AI的工程化底座。清研精准创始人兼CEO董汉是清华大学博士，师从中国工程院院士李克强教授，在汽车领域拥有近十年科研与产业积累；清研精准战略发展总监、精准视界CEO曹绮桐，斯坦福大学管理科学与工程硕士、杜克大学应用数学本科出身；清研精准核心科研成员及合作团...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "清研精准获数亿元融资，旨在构建物理AI数据基础设施，推动智能硬件与真实世界交互。"
    },
    {
     "title": "豆包专业版上线：接入全新豆包2.1 Pro大模型 专注复杂工作任务场景",
     "url": "https://www.leiphone.com/category/industrynews/DEnSlUn7Axou7Rq6.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-24",
     "summary": "6月24日，豆包正式宣布推出豆包专业版。该服务基于最新的豆包2.1系列大模型，面向复杂办公和生产力场景，提供更高的复杂工作场景使用额度，并上线全新的办公任务模式。豆包 2.1 是字节跳动最新发布的智能体模型。面对工作任务及各类复杂需求，它能做好项目规划、文件处理、工具调用等多步操作，产出高质量的结果。该系列模型的编程能力也显著提升，可以稳定交付企业级开发任务。同时，模型的多模态理解、知识、推理等基础能力进一步提升。豆包专业版用户将可以使用接入豆包2.1 Pro模型的办公任务模式；免费用户也可在一定额度内体验接入豆包2.1 Turbo模型的办公任务模式。豆包办公任务模式支持操作本地电脑、使...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "豆包专业版上线，专注复杂工作任务，提升AI在专业场景下的实用性与效率。"
    },
    {
     "title": "收入远高本土平均水平！三星、SK海力士员工跻身韩国婚恋市场顶层；急缺人才！DeepSeek Harness负责人称每日不停面试招人；微信迎重大更新",
     "url": "https://www.leiphone.com/category/zaobao/ci2DnFLhl4SMWN72.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-24",
     "summary": "要闻提示1.外媒：三星、SK 海力士员工已跻身韩国婚恋市场顶层2.急缺人才！DeepSeek Harness负责人坦言每日不停面试招人3.微信迎来史上最大更新！多项功能全面升级4.字节跳动CEO梁汝波：收缩业务宽度，聚焦AI5.刘强东的京东工业，失去一员大将！49岁CEO宋春正因健康原因辞职6.腾讯考虑退出多家日本游戏公司投资7.大疆Osmo Pocket 4P开售秒罄，二手市场现货溢价破千元8.抢先苹果！Meta发布首款自有品牌智能眼镜：定价299美元起今日头条外媒：三星、SK 海力士员工已跻身韩国婚恋市场顶层6 月 23 日消息，有外媒发布长文指出，全球 AI 热潮不仅把 SK 海力...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "三星、SK海力士员工婚恋市场受追捧，折射韩国半导体行业高薪与人才争夺战白热化。"
    },
    {
     "title": "火山引擎下半年往哪发力？答案藏在这场Force大会里",
     "url": "https://www.leiphone.com/category/CorporateServices/ZfxxMFp9Ad0A4EWq.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-24",
     "summary": "过去一年，火山引擎几乎是中国大模型商业化叙事里最受关注的变量之一。一方面，豆包大模型调用量持续攀升，火山在MaaS市场快速扩大份额；另一方面，围绕火山引擎MaaS 业务的收入目标和增长预期，市场上也不断传出更激进的说法。到年中这一节点，外界对火山引擎的关注，已经从“Seedance2.0卖得怎么样”，转向了另一个问题：上半年，火山引擎在Seedance2.0的商业化上打出了一场漂亮仗，但下一步还要往哪里走？又要靠什么继续增长？6月23日举办的2026夏季FORCE原动力大会，正好给了一个观察窗口。看完整场大会，火山引擎给出的答案大致有两层：第一，Seedance在从短剧、漫剧走向更多实体...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "火山引擎Force大会将揭示下半年战略重点，或聚焦AI与云服务深度融合。"
    }
   ]
  },
  {
   "name": "AI Agent与智能体",
   "icon": "🤯",
   "color": "#d97706",
   "count": 9,
   "cards": [
    {
     "title": "Stanford researchers will discuss their agentic 'scientists' that are on course to reshape drug discovery at VB Transform 2026",
     "url": "https://venturebeat.com/data/stanford-researchers-will-discuss-their-agentic-scientists-that-are-on-course-to-reshape-drug-discovery-at-vb-transform-2026",
     "source": "VentureBeat - AI",
     "date": "2026-06-24",
     "summary": "Drug discovery is notoriously inefficient. Pharmaceutical projects span years, moving from one specialized human team to the next through disconnected workflows that result in knowledge loss during each handoff. A shocking 90% to 95% of drug discovery projects reportedly fail — one of the highest...",
     "is_new": true,
     "lang": "en",
     "interpretation": "斯坦福AI科学家将重塑药物研发流程，加速新药发现与临床试验。"
    },
    {
     "title": "Amazon will present its framework for engineering trustworthy AI agents at VB Transform 2026",
     "url": "https://venturebeat.com/orchestration/amazon-will-present-its-framework-for-engineering-trustworthy-ai-agents-at-vb-transform-2026",
     "source": "VentureBeat - AI",
     "date": "2026-06-24",
     "summary": "AI agents are increasingly proficient at executing business tasks autonomously, but IT leaders are cautious about granting permissions to access enterprise systems. Part of the challenge lies in how AI reliability is measured. Industry standards often rely on EVAL scores, which provide a static s...",
     "is_new": true,
     "lang": "en",
     "interpretation": "亚马逊提出可信AI智能体框架，为行业安全应用提供工程化标准。"
    },
    {
     "title": "Build real agentic apps using CUGA: two dozen working examples on a lightweight harness",
     "url": "https://huggingface.co/blog/ibm-research/cuga-apps",
     "source": "Hugging Face Blog",
     "date": "2026-06-23",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "轻量框架下数十个实例，降低开发门槛，加速智能体应用落地。"
    },
    {
     "title": "Temporary Cloudflare Accounts for AI agents",
     "url": "https://simonwillison.net/2026/Jun/21/temporary-cloudflare-accounts/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-21",
     "summary": "Temporary Cloudflare Accounts for AI agents The announcement says this is \"for AI agents\" but (as is pretty common these days) the AI hook isn't really necessary, this is an interesting feature for everyone else as well. Short version: you can now create a Cloudflare Workers project and run this,...",
     "is_new": false,
     "lang": "en",
     "interpretation": "为AI代理提供临时账户，降低自动化工具使用门槛，可能引发安全与滥用问题。"
    },
    {
     "title": "Quoting Sean Lynch",
     "url": "https://simonwillison.net/2026/Jun/19/sean-lynch/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-19",
     "summary": "The real valuable capability MCP offers over skills/CLI is isolating the auth flow outside of the agent’s context window, and potentially out of the harness completely. [...] Maybe the idealized form of MCP is just an auth gateway for the API and nothing else. That’d still be a win. — Sean Lynch,...",
     "is_new": false,
     "lang": "en",
     "interpretation": "引用肖恩·林奇观点，暗示其言论对行业或技术趋势有重要指向性。"
    },
    {
     "title": "MosaicLeaks: Can your research agent keep a secret?",
     "url": "https://huggingface.co/blog/ServiceNow/mosaicleaks",
     "source": "Hugging Face Blog",
     "date": "2026-06-18",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "研究代理能否保密，揭示AI数据泄露风险，影响企业信任与合规。"
    },
    {
     "title": "From the Hugging Face Hub to robot hardware with Strands Agents and LeRobot",
     "url": "https://huggingface.co/blog/amazon/strands-lerobot-hub-to-hardware",
     "source": "Hugging Face Blog",
     "date": "2026-06-17",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "从模型库到机器人硬件落地，加速AI从研究到实体应用的转化进程。"
    },
    {
     "title": "2026中国GEO营销智能体峰会于上海盛大收官，第二届峰会定档十月",
     "url": "https://cn.technode.com/post/2026-06-25/the-2026-china-geo-marketing-intelligence-summit-wrapped-up-grandly-in-shanghai-and-the-second-summit-is-set-for-october/",
     "source": "动点科技 - AI",
     "date": "2026-06-25",
     "summary": "AI浪潮席卷数字营销产业，GEO作为品牌 […]",
     "is_new": true,
     "lang": "zh",
     "interpretation": "第二届峰会定档，显示中国在GEO营销智能体领域持续引领全球趋势。"
    },
    {
     "title": "GAIR Paper 104｜Agent 真的能自我进化吗？我们造了一把它骗不过去的尺子",
     "url": "https://www.leiphone.com/category/private/lWPaab1Q7cpgqnRI.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-23",
     "summary": "我们用 GDPevo，衡量出 AI 自进化的真实价值。 作者丨PrismShadow AI 编辑丨岑峰 01为什么“自进化”突然成了所有人都在抢的赛道？想象一下，你有一个新入职的员工。他一开始什么都不会，需要你手把手教。但几周后，他开始自己总结经验、优化工作流程，甚至能独立应对从未见过的新问题。如果把这个场景里的员工换成AI，这就是眼下人工智能领域最前沿、也最令人兴奋的方向：自进化Agent（Self-evolving Agent）。先说一句这两年在 AI 圈被反复验证的“铁律”：在 AI 时代，一件事一旦能被清晰地评估、又能被自动化地去做，那它离被做到极致就不远了。围棋是这样，写代码是...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "研究揭示AI Agent自我进化存在局限，需更严谨评估机制，避免过度乐观预期。"
    }
   ]
  },
  {
   "name": "具身智能与机器人",
   "icon": "🤖",
   "color": "#059669",
   "count": 3,
   "cards": [
    {
     "title": "Agility Robotics plans to go public via SPAC in a $2.5B deal",
     "url": "https://techcrunch.com/2026/06/24/agility-robotics-plans-to-go-public-via-spac-in-a-2-5b-deal/",
     "source": "TechCrunch - AI",
     "date": "2026-06-24",
     "summary": "Agility Robotics, the humanoid robotics startup that spun out of Oregon State University in 2015, expects to generate $620 million in proceeds.",
     "is_new": true,
     "lang": "en",
     "interpretation": "Agility Robotics拟借SPAC上市，人形机器人商业化提速。"
    },
    {
     "title": "赛那德SENAD完成 3 亿元 C 轮融资， 加速物理 AI 物流场景规模化落地",
     "url": "https://www.leiphone.com/category/industrynews/0EXFJiJBlvQ7Bi9w.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-25",
     "summary": "近日，全球顶尖的物流具身平台「赛那德」（Senad）宣布完成3亿元人民币C轮融资。本轮融资引进了全球领先的智慧物流生态平台满帮集团（YMM.N），以及海通开元、元禾璞华、华义创投、元禾厚望等一线机构，老股东达晨财智、长石资本、初辉资本持续超额跟投。此前，赛那德已获得了包括招商局创投、招商局租赁、中国外运（601598.SH）、阿里巴巴（09988.HK）等一线产业方和达晨财智、长石资本、初辉资本、普华资本、硅港资本、豫资涨泉基金、深投控等头部机构的多轮投资支持。从\"看见\"到\"预见\"：全球首个物流装卸垂直物理引擎在物流行业，装卸货被称为\"顶冠明珠\"——这是自动化程度最低、人力依赖最重、作业...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "3亿元融资加速物理AI物流落地，标志该赛道从概念进入规模化商用阶段。"
    },
    {
     "title": "起底大晓：四个月狂融数亿美金，国家队、车企、芯片巨头为何集体「押注」",
     "url": "https://www.leiphone.com/category/industrynews/SmlYKtAdXG3bGMMu.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-23",
     "summary": "日前，大晓机器人官宣完成天使+轮融资。投资方集齐国家队、产业队、VC 队三股力量：既有深创投、上海科创基金、临港新片区基金等政府资本，吉利资本与沐曦股份等公司业务强相关的产业资本；又有达晨财智、盛宇投资、复星锐正、华控基金、豫资涨泉等 VC 资本；而老股东商汤国香资本持续增资。这轮融资，三重信号值得关注：第一，上海、深圳政府资本集体入局。世界模型、具身智能已进入国家与地方政府的产业视野，战略关注度显著提升。第二，吉利资本、沐曦股份等产业资本下场。大晓机器人与国产算力、汽车制造产业链深度绑定，上下游协同更加紧密。第三，资本结构蜕变。从单一市场化VC主导，进化到“政府资本背书+产业资本协同+...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "多路资本重注大模型赛道，预示AI基础设施竞争进入白热化阶段。"
    }
   ]
  },
  {
   "name": "多模态与AIGC",
   "icon": "🎨",
   "color": "#dc2626",
   "count": 2,
   "cards": [
    {
     "title": "The Google Home Speaker sounds good and looks great — but it’s finicky",
     "url": "https://www.theverge.com/gadgets/955537/google-home-smart-speaker-hands-on",
     "source": "The Verge - AI",
     "date": "2026-06-24",
     "summary": "Right out of the box, the new Google Home Speaker passed a couple of important tests. Even with the volume at 100 percent and music blaring out of the speaker, it quickly ducked the audio and listened every time I said \"Hey, Google.\" In fact, in two days of testing, the speaker's three microphone...",
     "is_new": true,
     "lang": "en",
     "interpretation": "谷歌智能音箱体验虽好但稳定性不足，影响用户日常使用信心。"
    },
    {
     "title": "Something’s off with Midjourney’s pivot to body scanners",
     "url": "https://www.theverge.com/report/954826/midjourney-medical-ai-ultrasound-body-scanner-lacks-evidence",
     "source": "The Verge - AI",
     "date": "2026-06-23",
     "summary": "Last week, Midjourney, an AI startup best known for its image generator, made an unusual pivot: medical imaging. The company announced a futuristic ultrasound scanner that would dunk users into a vat of water and, hopefully, produce \"something as powerful as MRI\" yet \"as casual as a trip to the s...",
     "is_new": false,
     "lang": "en",
     "interpretation": "Midjourney转向身体扫描仪，方向突变引发对技术伦理与用户信任的质疑。"
    }
   ]
  },
  {
   "name": "AI硬件与芯片",
   "icon": "💾",
   "color": "#0891b2",
   "count": 6,
   "cards": [
    {
     "title": "早报｜今年手机平均售价或升至3800元/OpenAI发布首款芯片/68元起，豆包专业版正式上线",
     "url": "https://www.ifanr.com/1669906?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-25",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": true,
     "lang": "zh",
     "interpretation": "手机均价上涨、OpenAI自研芯片、豆包专业版上线，行业动态密集。"
    },
    {
     "title": "摩根大通：自研芯片对冲成本，iPhone 18 Pro 仅“温和”调价",
     "url": "https://cn.technode.com/post/2026-06-25/jpmorgan-chase-self-developed-chips-offset-costs-iphone-18-pro-price-adjustment-only-moderate/",
     "source": "动点科技 - AI",
     "date": "2026-06-25",
     "summary": "摩根大通近日发布市场研报，预估苹果 iP […]",
     "is_new": true,
     "lang": "zh",
     "interpretation": "自研芯片对冲成本，苹果高端机型调价温和，反映供应链自主化战略成效。"
    },
    {
     "title": "存储巨头上市估值冲万亿；大厂不隐藏身份抢数千台B300；Day0适配竞争变味；京东芯片核心成员创业拿亿元融资｜算力情报局Vol.12",
     "url": "https://www.leiphone.com/category/chips/B9OrnyYJ8xX88loZ.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-24",
     "summary": "大厂开始直接抢卡：B300被数千台扫货国内头部互联网公司采购算力的方式正在发生变化。过去，大厂往往通过中间渠道隐藏真实身份进行采购，如今越来越多项目开始直接签约，自我保护色彩明显减弱。与此同时，B300正在被头部客户快速扫货。华东某互联网大厂采购规模超过2000台，华北某科技巨头也采购了一两千台，仅少数几家公司便消化掉市场相当比例的供给资源。更多算力市场内幕，欢迎添加微信EATINGNTAE探讨。 存储巨头估值冲向万亿，可能给已上市公司压力国内两大存储原厂的上市进程持续受到资本市场关注。有消息称，其中一家存储巨头的上市估值有望从数千亿元上调至万亿元级别，而上市时间有可能较此前预期有所延后...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "算力市场资本热、竞争乱，芯片与创业项目成争夺焦点。"
    },
    {
     "title": "芯片5倍涨价、碳酸锂翻番，五大车企高管交底：价格战走到头了丨重庆论坛观察",
     "url": "https://www.leiphone.com/category/transportation/7dBfrkDbL4iRpLn1.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-24",
     "summary": "三年前价格战刚打响时，业内还有声音说“卷一卷更健康”，车企可以通过降价倒逼供应链降本、淘汰落后产能。回头来看，上述逻辑只对了一半——落后的确实被淘汰了一部分，但活下来的也没赚到钱。如今，车圈价格战已经进入第四年，国家补贴政策彻底退出、终端需求被提前释放，叠加上游原材料再度进入上行区间，车企陷入了更艰难的境地，整个市场的“反价格战”声浪也逐渐接近顶点。“成本涨价、材料涨价，售价却一个比一个卖得更低。”6月12日，赛力斯集团董事长张兴海在2026年重庆论坛上吐槽行业竞争乱象，并高呼车企“压力非常非常大”，他甚至在现场直接摊牌了：存储芯片从每单位20块涨到接近100块，碳酸锂也从去年同期每吨8...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "原材料涨价倒逼车企结束价格战，行业竞争转向价值与成本平衡。"
    },
    {
     "title": "对话蔚来高级副总裁任少卿：一个世界模型，如何适配两套芯片、四个平台和十几款车？",
     "url": "https://www.ifanr.com/1669670?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-23",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "蔚来世界模型需适配多芯片、多平台，体现智能汽车软硬件协同的复杂性与挑战。"
    },
    {
     "title": "早报｜豆包联合曹操出行推出打车功能/淘宝闪购灰测高端外卖「家宴」/日本卫浴厂商TOTO计划投800亿日元做1nm芯片",
     "url": "https://www.ifanr.com/1669656?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-23",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "豆包联合曹操出行推打车、淘宝试水高端外卖，互联网巨头加速跨界生活服务布局。"
    }
   ]
  },
  {
   "name": "开源与生态",
   "icon": "🌐",
   "color": "#2563eb",
   "count": 7,
   "cards": [
    {
     "title": "Shipping huggingface_hub every week with AI, open tools, and a human in the loop",
     "url": "https://huggingface.co/blog/huggingface-hub-release-ci",
     "source": "Hugging Face Blog",
     "date": "2026-06-23",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "每周更新结合人工审核，确保AI工具迭代既快又稳，兼顾效率与安全。"
    },
    {
     "title": "PP-OCRv6 on Hugging Face: 50-Language OCR from 1.5M to 34.5M Parameters",
     "url": "https://huggingface.co/blog/PaddlePaddle/pp-ocrv6",
     "source": "Hugging Face Blog",
     "date": "2026-06-22",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "轻量级多语言OCR模型发布，降低小语种文字识别应用成本。"
    },
    {
     "title": "Patch the Planet: a Daybreak initiative to support open source maintainers",
     "url": "https://openai.com/index/patch-the-planet",
     "source": "OpenAI Blog",
     "date": "2026-06-22",
     "summary": "OpenAI introduces Patch the Planet, a Daybreak initiative helping open-source maintainers find, validate, and fix vulnerabilities with AI and expert review.",
     "is_new": false,
     "lang": "en",
     "interpretation": "开源维护者长期被忽视，Daybreak此举或推动行业更公平地支持他们。"
    },
    {
     "title": "Beyond LoRA: Can you beat the most popular fine-tuning technique?",
     "url": "https://huggingface.co/blog/peft-beyond-lora",
     "source": "Hugging Face Blog",
     "date": "2026-06-18",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "挑战LoRA微调技术霸主地位，可能推动更高效模型适配方法诞生。"
    },
    {
     "title": "1小时真机RL微调成功率破95%！HIL-ResRL：即插即用的VLA“外挂”神器",
     "url": "https://www.qbitai.com/2026/06/438166.html",
     "source": "量子位",
     "date": "2026-06-24",
     "summary": "",
     "is_new": true,
     "lang": "zh",
     "interpretation": "1小时真机RL微调成功率破95%，VLA“外挂”技术大幅提升机器人学习效率。"
    },
    {
     "title": "华为天才少年一作，港大MaRS Lab拿下IEEE TRO傅京孙纪念最佳论文奖",
     "url": "https://www.qbitai.com/2026/06/437833.html",
     "source": "量子位",
     "date": "2026-06-24",
     "summary": "开源项目GitHub狂揽4.2k Star",
     "is_new": true,
     "lang": "zh",
     "interpretation": "华为天才少年一作获IEEE TRO最佳论文奖，彰显中国在机器人学基础研究领域的突破。"
    },
    {
     "title": "绿米向左，萤石向右：穿越周期的幸存者",
     "url": "https://www.leiphone.com/category/smarthome/hqbC4c6g5a8xyBE6.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-23",
     "summary": "2026年春天，智能家居行业迎来了一场冰火两重天的资本叙事。3月29日，绿米联创（下称“绿米”）正式向港交所递交招股说明书，拟主板挂牌上市。这家被称为“小米生态链明星”的企业，将自己包装成“全球AI驱动空间智能基础设施第一股”，估值约8.5亿美元。而在大约600公里外的杭州，萤石网络（下称“萤石”）不久前交出了一份颇为体面的2025年年报：全年营收59.01亿元，归母净利润5.67亿元，同比增长12.43%。中国智能家居市场并非没有故事可讲。艾媒咨询数据显示，2025年国内市场规模已达8154亿元，同比增长29.0%，预计到2030年将突破1.8万亿元。这个苦熬多年的行业，似乎终于要迎来...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "智能家居双巨头路径分化，折射行业从野蛮生长转向精细化生存。"
    }
   ]
  },
  {
   "name": "AI商业与投融资",
   "icon": "💰",
   "color": "#ca8a04",
   "count": 15,
   "cards": [
    {
     "title": "Former Infosys chief has a new startup that wants to challenge the IT services world",
     "url": "https://techcrunch.com/2026/06/24/former-infosys-chief-has-a-new-startup-that-wants-to-challenge-the-it-services-world/",
     "source": "TechCrunch - AI",
     "date": "2026-06-24",
     "summary": "Backed by Mayfield and Aramco Ventures, Vishal Sikka’s new venture brings together veterans from SAP, Infosys, and VianAI.",
     "is_new": true,
     "lang": "en",
     "interpretation": "前印孚瑟斯掌门人再创业，剑指传统IT服务市场。"
    },
    {
     "title": "AI researchers continue to leave Google for its rivals",
     "url": "https://techcrunch.com/2026/06/24/ai-researchers-continue-to-leave-google-for-its-rivals/",
     "source": "TechCrunch - AI",
     "date": "2026-06-24",
     "summary": "Top AI researchers Jonas Adler and Alexander Pritzel are leaving Google for Anthropic, following departures from top scientists Noam Shazeer and John Jumper.",
     "is_new": true,
     "lang": "en",
     "interpretation": "AI人才持续从谷歌流向对手，凸显行业竞争白热化。"
    },
    {
     "title": "The memory chip crunch is paying off for this US company",
     "url": "https://techcrunch.com/2026/06/24/the-memory-chip-crunch-is-paying-off-for-this-u-s-company/",
     "source": "TechCrunch - AI",
     "date": "2026-06-24",
     "summary": "Revenue quadrupled to $41.45 billion compared with the same period a year ago. The company's profit, meanwhile, rose from $1.88 billion to an incredible $28.2 billion year-over-year.",
     "is_new": true,
     "lang": "en",
     "interpretation": "存储芯片短缺让这家美国公司获利，凸显供应链波动机遇。"
    },
    {
     "title": "OpenAI unveils its first custom chip, built by Broadcom",
     "url": "https://techcrunch.com/2026/06/24/openai-unveils-its-first-custom-chip-built-by-broadcom/",
     "source": "TechCrunch - AI",
     "date": "2026-06-24",
     "summary": "Named Jalapeño, the new processor was designed specifically for the unique needs of OpenAI's inference systems.",
     "is_new": true,
     "lang": "en",
     "interpretation": "OpenAI自研芯片，减少对英伟达依赖，降低AI推理成本。"
    },
    {
     "title": "Disney agreed to $50M settlement over claims it made live-TV streaming expensive",
     "url": "https://arstechnica.com/tech-policy/2026/06/disney-agreed-to-50m-settlement-over-claims-it-made-live-tv-streaming-expensive/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-24",
     "summary": "Lawsuit alleged Disney inflated market prices by making carriers include ESPN.",
     "is_new": true,
     "lang": "en",
     "interpretation": "迪士尼和解凸显流媒体捆绑销售模式对消费者权益的潜在损害。"
    },
    {
     "title": "Google starts lowering Play Store fees, making good on Epic Games settlement",
     "url": "https://arstechnica.com/google/2026/06/google-starts-lowering-play-store-fees-making-good-on-epic-games-settlement/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-24",
     "summary": "A few additional markets will get the lower fees this year ahead of a global rollout in 2027.",
     "is_new": true,
     "lang": "en",
     "interpretation": "谷歌降低应用商店抽成，反映反垄断压力下平台经济规则正在重构。"
    },
    {
     "title": "Congresswoman denies staff used AI to write defense funding amendment",
     "url": "https://www.theverge.com/policy/956394/florida-anna-paulina-luna-anthropic-claude",
     "source": "The Verge - AI",
     "date": "2026-06-24",
     "summary": "Rep. Anna Paulina Luna (R-FL) says her staff used AI for \"spellcheck\" in an amendment summary for a major defense bill, but denies it was used for the bill text itself and says \"NO Legislation is ever drafted with AI.\" Luna issued the response after accounts on X began sharing screenshots of an a...",
     "is_new": true,
     "lang": "en",
     "interpretation": "议员否认AI代笔，折射国会技术伦理审查机制缺失与公信力危机。"
    },
    {
     "title": "The $27 million Al proxy war over Alex Bores ends in a draw",
     "url": "https://www.theverge.com/ai-artificial-intelligence/956263/alex-bores-new-york-12th-district-congressional-primary-results",
     "source": "The Verge - AI",
     "date": "2026-06-24",
     "summary": "The expensive, $27 million political proxy war between Anthropic and OpenAI came to a draw last night when Alex Bores, a New York state Assemblyman whose popularity surged after being targeted by a pro-AI super PAC, narrowly lost the Democratic primary to represent New York's 12th Congressional d...",
     "is_new": true,
     "lang": "en",
     "interpretation": "2700万美元AI代理权争夺战平局收场，揭示技术投资与政治博弈的复杂交织。"
    },
    {
     "title": "The Trump White House Is Over Anthropic CEO Dario Amodei",
     "url": "https://www.wired.com/story/the-trump-white-house-is-over-anthropics-dario-amodei/",
     "source": "Wired - AI",
     "date": "2026-06-24",
     "summary": "At high-stakes meetings with the White House, Anthropic's cofounder—a \"weirdo,\" per one official—has been replaced by cofounder Tom Brown.",
     "is_new": true,
     "lang": "en",
     "interpretation": "白宫对Anthropic CEO不满，凸显AI安全与政策路线分歧加剧。"
    },
    {
     "title": "Qualcomm Buys Buzzy Chip Startup Modular for Nearly $4 Billion",
     "url": "https://www.wired.com/story/qualcomm-buys-buzzy-chip-startup-modular-for-nearly-dollar4-billion/",
     "source": "Wired - AI",
     "date": "2026-06-24",
     "summary": "Modular, one of the most promising chip software startups of the AI era, heads for a multibillion-dollar exit.",
     "is_new": true,
     "lang": "en",
     "interpretation": "高通近40亿美元收购芯片初创，加速边缘AI与物联网布局。"
    },
    {
     "title": "Stripe, Anthropic, and OpenAI are backing an effort to stop respiratory infections",
     "url": "https://www.technologyreview.com/2026/06/24/1139621/stripe-anthropic-and-openai-are-backing-an-effort-to-stop-respiratory-infections/",
     "source": "MIT Technology Review - AI",
     "date": "2026-06-24",
     "summary": "The common cold comes for us all—often more than once a year. And there is no way to prevent it. The best you can do is take vitamin C and stay away from people with the sniffles. Now the payment company Stripe, founded by brothers Patrick and John Collison, says it will fund a new…",
     "is_new": true,
     "lang": "en",
     "interpretation": "Stripe、Anthropic与OpenAI联手抗击呼吸道感染，科技巨头跨界公共卫生。"
    },
    {
     "title": "Hollywood is bending the knee to OpenAI",
     "url": "https://www.theverge.com/entertainment/954899/luca-guadagnino-artificial-sam-altman-amazon-a24-neon-mubi-chatgpt",
     "source": "The Verge - AI",
     "date": "2026-06-23",
     "summary": "Netflix, A24, Focus Features, and Warner Bros.' Clockwork have all reportedly decided to pass on picking up Artificial - director Luca Guadagnino's new biographical drama about OpenAI cofounder / CEO Sam Altman - for distribution deals. And while Neon and Mubi are still said to be interested in t...",
     "is_new": false,
     "lang": "en",
     "interpretation": "好莱坞向AI公司妥协，标志内容创作行业正被技术力量重塑规则。"
    },
    {
     "title": "Helping build shared standards for advanced AI",
     "url": "https://openai.com/index/helping-build-shared-standards-for-advanced-ai",
     "source": "OpenAI Blog",
     "date": "2026-06-23",
     "summary": "OpenAI helps build shared standards for advanced AI, supporting evaluation frameworks, safety practices, and global cooperation through the Appia Foundation.",
     "is_new": false,
     "lang": "en",
     "interpretation": "推动国际协作制定AI标准，避免技术碎片化与安全风险。"
    },
    {
     "title": "How Omio is building the future of conversational travel",
     "url": "https://openai.com/index/omio",
     "source": "OpenAI Blog",
     "date": "2026-06-23",
     "summary": "Discover how Omio uses OpenAI to power conversational travel experiences, accelerate product development, and transform into an AI-native company.",
     "is_new": false,
     "lang": "en",
     "interpretation": "对话式AI将重塑旅行预订体验，提升效率与个性化服务。"
    },
    {
     "title": "世界模型混战，Momenta率先冲刺IPO",
     "url": "https://www.qbitai.com/2026/06/438179.html",
     "source": "量子位",
     "date": "2026-06-24",
     "summary": "AI司机收入3年涨42倍",
     "is_new": true,
     "lang": "zh",
     "interpretation": "Momenta率先冲刺IPO，世界模型赛道竞争白热化，资本化进程提速。"
    }
   ]
  },
  {
   "name": "AI安全与对齐",
   "icon": "🛡️",
   "color": "#dc2626",
   "count": 2,
   "cards": [
    {
     "title": "AI 想直接改维基百科？创始人放话：没门，“幻觉”还太严重",
     "url": "https://cn.technode.com/post/2026-06-24/wikipedia-wont-let-ai-edit-articles-cofounder-says/",
     "source": "动点科技 - AI",
     "date": "2026-06-24",
     "summary": "据法新社消息，维基百科联合创始人吉米·威 […]",
     "is_new": true,
     "lang": "zh",
     "interpretation": "维基百科拒绝AI直接编辑，凸显内容可靠性仍是核心难题。"
    },
    {
     "title": "物理AI的船票，藏在世界模型里",
     "url": "https://www.leiphone.com/category/transportation/G2qSdvIbBYQ13ERf.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-24",
     "summary": "物理AI的核心是“数据scaling和商业scaling，二者形成正向反馈”。而目前唯一同时实现这两者的，正是自动驾驶。作者 | 黄华丹编辑 | 田 哲1943年，苏格兰心理学家肯尼斯·克雷克（Kenneth Craik）在他的著作《解释的本质》中，提出了一个影响深远的论断——人类大脑在认知外部世界时，并非被动地接收信息，而是会主动构建一个“现实的内部小模型”。借助这个“小模型”，我们可以在脑海中模拟不同行动的结果，从而在真实世界出手之前，先安全地推演一遍未来。这个洞见，后来被认知科学家发展为“心理模型”理论，再后来，它成为人工智能领域一个绵延半个多世纪的执念：能不能让机器也拥有这样一个...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "世界模型是物理AI落地的关键，决定其能否理解真实世界。"
    }
   ]
  },
  {
   "name": "其他AI资讯",
   "icon": "🔮",
   "color": "#6b7280",
   "count": 57,
   "cards": [
    {
     "title": "Europe is pushing back on Washington’s chip war",
     "url": "https://techcrunch.com/2026/06/24/europe-is-pushing-back-on-washingtons-chip-war/",
     "source": "TechCrunch - AI",
     "date": "2026-06-25",
     "summary": "As ASML CEO Christophe Fouquet told TechCrunch in May, what China can currently buy are older-generation deep ultraviolet tools — gear first shipped about a decade ago — the same machines the MATCH Act would now put off limits.",
     "is_new": true,
     "lang": "en",
     "interpretation": "欧洲抵制美国芯片战，或重塑全球半导体供应链格局。"
    },
    {
     "title": "Cerebras stock plunges after earnings as CEO says margin outlook was misunderstood",
     "url": "https://techcrunch.com/2026/06/24/cerebras-stock-plunges-after-earnings-as-ceo-says-margin-outlook-was-misunderstood/",
     "source": "TechCrunch - AI",
     "date": "2026-06-24",
     "summary": "In its first earnings report since going public, the AI chipmaker forecast a narrower gross margin in its core business, scaring investors.",
     "is_new": true,
     "lang": "en",
     "interpretation": "股价暴跌因CEO澄清利润率预期被误读，市场信心受挫。"
    },
    {
     "title": "AI was supposed to kill engineering jobs, but new data suggests they’re the most resilient",
     "url": "https://techcrunch.com/2026/06/24/ai-was-supposed-to-kill-engineering-jobs-but-new-data-suggests-theyre-the-most-resilient/",
     "source": "TechCrunch - AI",
     "date": "2026-06-24",
     "summary": "While AI dominates the layoff narrative, engineers are actually making up a larger share of new hires, according to SignalFire data.",
     "is_new": true,
     "lang": "en",
     "interpretation": "新数据表明AI未取代工程师，反显其岗位抗风险能力最强。"
    },
    {
     "title": "Companies are scrambling to stop employees from maxing out AI budgets with small tasks",
     "url": "https://techcrunch.com/2026/06/24/companies-are-scrambling-to-stop-employees-from-maxing-out-ai-budgets-with-small-tasks/",
     "source": "TechCrunch - AI",
     "date": "2026-06-24",
     "summary": "The tokenmaxxing era was brief. We now appear to be entering the era of token rationing.",
     "is_new": true,
     "lang": "en",
     "interpretation": "企业急防员工用AI处理琐事，避免预算被小额任务耗尽。"
    },
    {
     "title": "Facebook rolls out an AI companion app for creators",
     "url": "https://techcrunch.com/2026/06/24/facebook-rolls-out-an-ai-companion-app-for-creators/",
     "source": "TechCrunch - AI",
     "date": "2026-06-24",
     "summary": "The new app, which is currently being tested with select creators, will have Facebook's recently launched AI creator assistant built into it.",
     "is_new": true,
     "lang": "en",
     "interpretation": "Facebook推AI创作助手，意在绑定内容创作者生态。"
    },
    {
     "title": "Figma adds code layers, support for animations, more AI features in new update",
     "url": "https://techcrunch.com/2026/06/24/figma-adds-code-layers-support-for-animations-more-ai-features-in-new-update/",
     "source": "TechCrunch - AI",
     "date": "2026-06-24",
     "summary": "Figma's update adds a new code layer, support for motion and shaders, and the ability to create custom plug-ins for various tasks using AI.",
     "is_new": true,
     "lang": "en",
     "interpretation": "Figma更新加入代码层与动画，AI功能深化设计工具边界。"
    },
    {
     "title": "3 days left to save up to $190 on your TechCrunch Founder Summit 2026 pass",
     "url": "https://techcrunch.com/2026/06/24/3-days-left-to-save-up-to-190-on-techcrunch-founder-summit-2026/",
     "source": "TechCrunch - AI",
     "date": "2026-06-24",
     "summary": "You have just 3 days left to save up to $190 on your pass to TechCrunch Founder Summit 2026 before Early Bird rates end on June 26 at 11:59 p.m. PT. Register today.",
     "is_new": true,
     "lang": "en",
     "interpretation": "科技峰会早鸟票即将截止，错过将多付190美元。"
    },
    {
     "title": "Introducing the FFASR Leaderboard: Benchmarking ASR in the Real World",
     "url": "https://huggingface.co/blog/ffasr-leaderboard",
     "source": "Hugging Face Blog",
     "date": "2026-06-24",
     "summary": "",
     "is_new": true,
     "lang": "en",
     "interpretation": "新排行榜让真实场景语音识别性能对比更透明，推动技术落地。"
    },
    {
     "title": "Hotly anticipated Grand Theft Auto VI will cost more than other AAA games",
     "url": "https://arstechnica.com/gaming/2026/06/grand-theft-auto-vi-will-cost-80-without-a-physical-disc/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-24",
     "summary": "GTA6 might be an outlier, though—at least for now.]]>",
     "is_new": true,
     "lang": "en",
     "interpretation": "GTA6定价或突破行业天花板，预示游戏市场消费升级趋势。"
    },
    {
     "title": "13 years and $500 million for a stage adapter? Report justifies NASA cancellations.",
     "url": "https://arstechnica.com/space/2026/06/analysis-finds-the-exploration-programs-nasa-recently-canceled-were-running-way-late/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-24",
     "summary": "\"Contract values for these efforts ballooned from nearly $2.8 billion to $5.9 billion.\"",
     "is_new": true,
     "lang": "en",
     "interpretation": "巨额研发投入引争议，NASA项目合理性遭审计报告质疑。"
    },
    {
     "title": "US ends hantavirus outbreak response with no answers on draconian quarantines",
     "url": "https://arstechnica.com/health/2026/06/us-ends-hantavirus-outbreak-response-with-no-answers-on-draconian-quarantines/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-24",
     "summary": "We still don't know why RFK Jr. overruled CDC expert to order strict quarantines.",
     "is_new": true,
     "lang": "en",
     "interpretation": "疫情调查无果而终，暴露美国公共卫生应急机制短板。"
    },
    {
     "title": "One-two punch delivered in global operation disrupts cybercrime \"assembly line\"",
     "url": "https://arstechnica.com/security/2026/06/one-two-punch-delivered-in-global-operation-disrupts-cybercrime-assembly-line/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-24",
     "summary": "\"Operation Endgame\" simultaneously disrupts two widely used crime tools.",
     "is_new": true,
     "lang": "en",
     "interpretation": "跨国行动斩断网络犯罪产业链，警示黑产协作模式风险。"
    },
    {
     "title": "Underpromise, overdeliver? Hands-on with the $24,950 Slate auto.",
     "url": "https://arstechnica.com/features/2026/06/we-take-a-ride-in-slates-24950-electric-pickup/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-24",
     "summary": "It has 205 miles of bare-bones range.",
     "is_new": true,
     "lang": "en",
     "interpretation": "低价电动车实测表现超预期，或搅动新能源市场定价策略。"
    },
    {
     "title": "Experimental wine bottle tracks oxygen moving through the cork",
     "url": "https://arstechnica.com/science/2026/06/experimental-wine-bottle-tracks-oxygen-moving-through-the-cork/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-24",
     "summary": "The small bit of air in the bottle sees oxygen and other chemicals move in and out.",
     "is_new": true,
     "lang": "en",
     "interpretation": "智能酒瓶技术突破或重塑高端葡萄酒运输与储存的行业标准。"
    },
    {
     "title": "FCC plans ID mandate that could block anonymous use of prepaid burner phones",
     "url": "https://arstechnica.com/tech-policy/2026/06/fcc-plans-id-mandate-that-could-block-anonymous-use-of-prepaid-burner-phones/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-24",
     "summary": "Privacy advocates and domestic violence groups say ID mandate is a big mistake.",
     "is_new": true,
     "lang": "en",
     "interpretation": "FCC实名制提案将冲击匿名通信自由，引发隐私与安全平衡争议。"
    },
    {
     "title": "Formula E reveals first calendar for GEN4 with lots of real race tracks",
     "url": "https://arstechnica.com/cars/2026/06/formula-e-reveals-first-calendar-for-gen4-with-lots-of-real-race-tracks/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-24",
     "summary": "Brands Hatch, COTA, and Zandvoort will all hold an e-Prix in 2027.",
     "is_new": true,
     "lang": "en",
     "interpretation": "电动方程式GEN4赛历转向真实赛道，标志赛事向传统赛车文化靠拢。"
    },
    {
     "title": "Elon Musk denies Tesla’s Autopilot caused crash that killed grandmother",
     "url": "https://arstechnica.com/tech-policy/2026/06/elon-musk-denies-teslas-autopilot-caused-crash-that-killed-grandmother/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-24",
     "summary": "Tesla, accused of failing to fix design flaws, blames driver pressing accelerator.",
     "is_new": true,
     "lang": "en",
     "interpretation": "马斯克否认事故责任，凸显自动驾驶事故责任认定的法律与伦理困境。"
    },
    {
     "title": "Figma now has AI motion graphics and shader tools",
     "url": "https://www.theverge.com/tech/955831/figma-code-design-tools-config-2026-announcements",
     "source": "The Verge - AI",
     "date": "2026-06-24",
     "summary": "Figma has revealed some new design and coding product updates at its annual Config conference that aim to help creatives \"push their ideas further\" and automate tedious tasks with AI. Part of this is a reimagined canvas that's now optimized for full-stack development, according to Figma, bringing...",
     "is_new": true,
     "lang": "en",
     "interpretation": "Figma新增AI动效工具，预示设计工具正从辅助功能向创意生成进化。"
    },
    {
     "title": "A24 Knows You’re Mad About the Google AI Collab",
     "url": "https://www.wired.com/story/a24-knows-youre-mad-about-the-google-ai-collab/",
     "source": "Wired - AI",
     "date": "2026-06-24",
     "summary": "Indie movie fans are upset about Google DeepMind’s $75 million investment in the studio, which comes as AI companies are deepening their influence in Hollywood.",
     "is_new": true,
     "lang": "en",
     "interpretation": "A24回应合作争议，反映艺术界对AI技术介入的敏感与警惕。"
    },
    {
     "title": "I Met With China’s Top AI Experts. They’re Freaking Out, Too",
     "url": "https://www.wired.com/story/ai-arms-race-china-us-cooperation/",
     "source": "Wired - AI",
     "date": "2026-06-24",
     "summary": "The AI arms race between China and the US has researchers on both sides worried about a “Chernobyl moment.”",
     "is_new": true,
     "lang": "en",
     "interpretation": "中国顶尖AI专家同样焦虑，揭示全球对AI失控风险的共同担忧。"
    },
    {
     "title": "Europe’s extreme heat is shutting down power plants",
     "url": "https://www.technologyreview.com/2026/06/24/1139676/europe-heat-power-plants/",
     "source": "MIT Technology Review - AI",
     "date": "2026-06-24",
     "summary": "Europe is in the middle of a record-breaking heat wave, and the grid is being pushed to its limits as people turn to fans and air-conditioning to try to stay cool. Some power plants won’t be online to help handle the load. On June 23, France saw its hottest day since record-keeping began in 1947.…",
     "is_new": true,
     "lang": "en",
     "interpretation": "欧洲极端高温导致电厂停运，凸显气候危机对能源系统的直接冲击。"
    },
    {
     "title": "The Download: introducing the Engineering issue",
     "url": "https://www.technologyreview.com/2026/06/24/1139658/the-download-introducing-engineering-issue/",
     "source": "MIT Technology Review - AI",
     "date": "2026-06-24",
     "summary": "This is today’s edition of The Download, our weekday newsletter that provides a daily dose of what’s going on in the world of technology. Introducing: the Engineering issue We can’t fix everything, but we can be ambitious. We can take on the challenge of making the world better through human inge...",
     "is_new": true,
     "lang": "en",
     "interpretation": "《下载》推出工程特刊，聚焦技术落地中的实践与创新。"
    },
    {
     "title": "This flying solar-powered platform could deliver better internet from the air",
     "url": "https://www.technologyreview.com/2026/06/24/1138771/solar-powered-platform-delivers-better-internet/",
     "source": "MIT Technology Review - AI",
     "date": "2026-06-24",
     "summary": "As soon as August, a giant silver bullet will cut its way through the dry air of the southwestern US and cross the Pacific to reach the coast of Japan. Once there, the roughly 200-foot-long craft, built by the New Mexico–based company Sceye, will park some 18 kilometers above the ocean’s surface,...",
     "is_new": true,
     "lang": "en",
     "interpretation": "高空太阳能平台或能突破偏远地区网络覆盖瓶颈，改变数字鸿沟格局。"
    },
    {
     "title": "All challenges big and small",
     "url": "https://www.technologyreview.com/2026/06/24/1138853/editors-letter-july-2026/",
     "source": "MIT Technology Review - AI",
     "date": "2026-06-24",
     "summary": "When I was 18, I skipped my high school graduation and headed to Kuwait. It was 1991, the first Gulf War had just ended, and the country was in complete chaos. There was little to no electricity, aside from generator power. Rubble and unexploded ordnance were everywhere. Massive oil fires lit up ...",
     "is_new": true,
     "lang": "en",
     "interpretation": "无论挑战大小，都需正视并应对，体现持续解决问题的韧性。"
    },
    {
     "title": "Google Home will soon get better at recognizing you",
     "url": "https://www.theverge.com/tech/955385/google-home-familiar-faces-clothing",
     "source": "The Verge - AI",
     "date": "2026-06-23",
     "summary": "A new update for Google Home could make it less likely your smart home cameras mistake you for someone else, just because you're facing away from the camera. Starting June 23rd, Google's expanding its facial recognition feature so that people you've tagged in your Familiar Faces library can conti...",
     "is_new": false,
     "lang": "en",
     "interpretation": "语音识别升级将提升智能家居个性化体验，但隐私边界值得关注。"
    },
    {
     "title": "Why corporate AI super PACs spent $27 million on a local election",
     "url": "https://www.theverge.com/policy/954970/ai-super-pacs-alex-bores-new-york-12th-district",
     "source": "The Verge - AI",
     "date": "2026-06-23",
     "summary": "Hello and welcome to Regulator, the newsletter for Verge subscribers chronicling the misadventures of their favorite tech overlords and Washington swamp creatures. (\"Favorite\" is, of course, subjective.) Not a subscriber yet? Sign up here, especially if you want the hot scoop on quality Amazon Pr...",
     "is_new": false,
     "lang": "en",
     "interpretation": "企业AI政治行动委员会重金介入地方选举，揭示科技资本对政策的影响力。"
    },
    {
     "title": "The Fitbit Air takes a smarter approach to the AI health dumpster fire",
     "url": "https://www.theverge.com/tech/954768/google-fitbit-air-review-fitness-tracker-wearable-ai-health-coach",
     "source": "The Verge - AI",
     "date": "2026-06-23",
     "summary": "Google Health Coach seems to think I'm on the verge of physical collapse. My sleep is not where it needs to be, hence my unimpressive readiness score. My heart rate variability, a measure of how recovered I am, is below baseline. I'm spending too much time in a hot, humid environment, it says, re...",
     "is_new": false,
     "lang": "en",
     "interpretation": "Fitbit Air以更理性方式切入AI健康领域，或为混乱市场提供新范式。"
    },
    {
     "title": "datasette 1.0a35",
     "url": "https://simonwillison.net/2026/Jun/23/datasette/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-23",
     "summary": "Release: datasette 1.0a35 I'll write more about this one soon, but it's a big release. Three highlights from the release notes: New \"Create table\" interface in the database actions menu, backed by the //-/create JSON API. It can define columns, primary keys, custom column types, NOT NULL constrai...",
     "is_new": false,
     "lang": "en",
     "interpretation": "开源数据工具持续迭代，降低非技术人员的数据分析门槛。"
    },
    {
     "title": "OPFS + Pyodide test harness",
     "url": "https://simonwillison.net/2026/Jun/23/opfs-pyodide/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-23",
     "summary": "Tool: OPFS + Pyodide test harness I've been pondering if Datasette Lite - the Python Datasette application run entirely in the browser using Pyodide and WebAssembly - might be able to edit persistent SQLite files stored on the user's computer. That's what OFPS (Origin Private File System) is for,...",
     "is_new": false,
     "lang": "en",
     "interpretation": "浏览器端文件系统与Python运行环境结合，拓展Web应用边界。"
    },
    {
     "title": "Heads in the game",
     "url": "https://www.technologyreview.com/2026/06/23/1138214/heads-in-the-game/",
     "source": "MIT Technology Review - AI",
     "date": "2026-06-23",
     "summary": "The Argentina v. France final of the 2022 Men’s World Cup in Qatar was shaping up to be one of the most epic games in soccer history. With just 12 minutes remaining in the extra time added to the game to break a tie, the referee had a critical decision to make—and fast. Lionel Messi,…",
     "is_new": false,
     "lang": "en",
     "interpretation": "专注力与游戏化结合，可能改变学习或工作效率提升方式。"
    },
    {
     "title": "Sharing a love for calculus",
     "url": "https://www.technologyreview.com/2026/06/23/1138271/sharing-a-love-for-calculus/",
     "source": "MIT Technology Review - AI",
     "date": "2026-06-23",
     "summary": "The national conversation about the value of education is currently dominated by speculation about the risks and positive potential of AI. Whatever your own perspective on that debate, I hope you’ll be glad to know that MIT is also working on a deeply important but comparatively old-fashioned cha...",
     "is_new": false,
     "lang": "en",
     "interpretation": "传播微积分之美，激发公众对基础数学的兴趣与理解。"
    },
    {
     "title": "Codex-maxxing for long-running work",
     "url": "https://openai.com/index/codex-maxxing-long-running-work",
     "source": "OpenAI Blog",
     "date": "2026-06-22",
     "summary": "Learn how Jason Liu uses Codex to preserve context, manage complex projects, and help work continue beyond a single prompt.",
     "is_new": false,
     "lang": "en",
     "interpretation": "长期任务中最大化利用AI编码助手，可能改变开发者工作模式。"
    },
    {
     "title": "World Cup Scams Are Getting Harder to Spot",
     "url": "https://www.wired.com/story/world-cup-scams-are-getting-harder-to-spot/",
     "source": "Wired - AI",
     "date": "2026-06-22",
     "summary": "From fake tickets to cloned websites, AI is magnifying World Cup scams. Can fans distinguish between what’s real and what’s not?",
     "is_new": false,
     "lang": "en",
     "interpretation": "世界杯骗局升级，普通用户更难识别，需提高防范意识。"
    },
    {
     "title": "Prompt Injection as Role Confusion",
     "url": "https://simonwillison.net/2026/Jun/22/prompt-injection-as-role-confusion/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-22",
     "summary": "Prompt Injection as Role Confusion First, I absolutely love this: This is a blog-style writeup of the paper. I wish every paper would come with one of these. Academic writing is pretty dry - the impact of a paper can be so much higher if you publish a readable version to accompany the formal one....",
     "is_new": false,
     "lang": "en",
     "interpretation": "提示注入攻击利用角色混淆，揭示AI安全漏洞的新风险。"
    },
    {
     "title": "sqlite-utils 4.0rc1 adds migrations and nested transactions",
     "url": "https://simonwillison.net/2026/Jun/21/sqlite-utils-40rc1/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-21",
     "summary": "sqlite-utils is my combined Python library and CLI tool for working with SQLite databases. It provides an extensive set of higher-level operations on top of Python's default sqlite3 package, including support for complex table transformations, automatic table creation from JSON data and a whole l...",
     "is_new": false,
     "lang": "en",
     "interpretation": "新版本支持迁移和嵌套事务，提升数据库工具灵活性与可靠性。"
    },
    {
     "title": "sqlite-utils 4.0rc1",
     "url": "https://simonwillison.net/2026/Jun/21/sqlite-utils/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-21",
     "summary": "Release: sqlite-utils 4.0rc1 See sqlite-utils 4.0rc1 adds migrations and nested transactions. Tags: sqlite-utils",
     "is_new": false,
     "lang": "en",
     "interpretation": "该版本是重要里程碑，为开发者提供更强大的数据管理能力。"
    },
    {
     "title": "Datasette Apps: Host custom HTML applications inside Datasette",
     "url": "https://simonwillison.net/2026/Jun/18/datasette-apps/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-18",
     "summary": "Today we launched a new plugin for Datasette, datasette-apps, with this launch announcement post on the Datasette project blog. That post has the what, but I'm going to expand on that a little bit here to provide the why. The TL;DR Datasette Apps are self-contained HTML+JavaScript applications th...",
     "is_new": false,
     "lang": "en",
     "interpretation": "在Datasette中托管HTML应用，简化数据可视化与交互式工具开发。"
    },
    {
     "title": "datasette-acl 0.6a0",
     "url": "https://simonwillison.net/2026/Jun/18/datasette-acl/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-18",
     "summary": "Release: datasette-acl 0.6a0 This release expands datasette-acl from table-only permissions toward a general resource-sharing system. Alex Garcia did most of the work for this release - we're fleshing out the plugin that will allow multi-user Datasette instances finely grained control over who ca...",
     "is_new": false,
     "lang": "en",
     "interpretation": "新版访问控制库更新，强化Datasette权限管理，提升多用户协作安全性。"
    },
    {
     "title": "MolmoMotion: Language-guided 3D motion forecasting",
     "url": "https://huggingface.co/blog/allenai/molmomotion",
     "source": "Hugging Face Blog",
     "date": "2026-06-17",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "语言引导3D运动预测，推动人机交互与机器人动作规划技术融合。"
    },
    {
     "title": "New research shows how AMIE, our medical AI, could help manage health conditions.",
     "url": "https://blog.google/innovation-and-ai/models-and-research/google-research/amie-for-disease-management-in-nature/",
     "source": "Google AI Blog",
     "date": "2026-06-17",
     "summary": "Research in “Nature” shows our conversational AI system matches primary care physicians in complex disease management.",
     "is_new": false,
     "lang": "en",
     "interpretation": "医疗AI管理健康的新证据，或改变慢性病护理模式，减轻医疗系统压力。"
    },
    {
     "title": "We’re strengthening our presence in Alabama through new investments and community support.",
     "url": "https://blog.google/innovation-and-ai/infrastructure-and-cloud/global-network/alabama-investment-june-2026/",
     "source": "Google AI Blog",
     "date": "2026-06-15",
     "summary": "Google has announced a $1.5 billion investment for 2026 and 2027 to expand its data center campus in Jackson County, Alabama. Operating since 2019 on a repurposed former…",
     "is_new": false,
     "lang": "en",
     "interpretation": "扩大在阿拉巴马州的投资与社区支持，体现企业区域深耕战略。"
    },
    {
     "title": "Our new community investments in Virginia support local jobs and expand energy affordability.",
     "url": "https://blog.google/innovation-and-ai/infrastructure-and-cloud/global-network/virginia-community-investments/",
     "source": "Google AI Blog",
     "date": "2026-06-11",
     "summary": "We’re helping build the state’s next-generation workforce and investing in energy programs.",
     "is_new": false,
     "lang": "en",
     "interpretation": "弗吉尼亚州新投资创造本地就业，并提升能源可负担性。"
    },
    {
     "title": "The latest AI news we announced in May 2026",
     "url": "https://blog.google/innovation-and-ai/technology/ai/google-ai-updates-may-2026/",
     "source": "Google AI Blog",
     "date": "2026-06-05",
     "summary": "Here are Google’s latest AI updates from May 2026",
     "is_new": false,
     "lang": "en",
     "interpretation": "2026年5月公布的最新AI动态，展示技术前沿进展。"
    },
    {
     "title": "5 ways Google Search can level up your thrift and vintage shopping",
     "url": "https://blog.google/products-and-platforms/products/search/thrifting-tips/",
     "source": "Google AI Blog",
     "date": "2026-06-03",
     "summary": "Uncover second-hand scores with AI tools in Google Search and Shopping.",
     "is_new": false,
     "lang": "en",
     "interpretation": "谷歌搜索五大技巧，助力二手与复古购物更高效。"
    },
    {
     "title": "Take our I/O 2026 quiz, vibe coded in Google AI Studio.",
     "url": "https://blog.google/innovation-and-ai/technology/ai/io-2026-vibe-coded-quiz/",
     "source": "Google AI Blog",
     "date": "2026-05-29",
     "summary": "We used Google AI Studio to vibe code a quiz about our top I/O 2026 announcements.",
     "is_new": false,
     "lang": "en",
     "interpretation": "通过AI Studio制作的I/O 2026互动问答，趣味展示技术应用。"
    },
    {
     "title": "聚焦GW级Token工厂，解码下一代算力底座｜6月30日，深圳",
     "url": "https://www.qbitai.com/2026/06/438297.html",
     "source": "量子位",
     "date": "2026-06-25",
     "summary": "谁将定义下一代算力基础设施？谁又能在Token时代占据产业制高点？",
     "is_new": true,
     "lang": "zh",
     "interpretation": "聚焦大规模Token工厂，探讨下一代算力基础设施发展方向。"
    },
    {
     "title": "豆包收费版第一天，我：充值…又得充值？我要再充值！",
     "url": "https://www.qbitai.com/2026/06/438204.html",
     "source": "量子位",
     "date": "2026-06-25",
     "summary": "专业版上线，首开付费模式",
     "is_new": true,
     "lang": "zh",
     "interpretation": "豆包收费首日用户吐槽反复充值，反映定价策略引发争议。"
    },
    {
     "title": "百度智能云发布百度千帆Token Plan企业版，提供GLM-5.2等模型",
     "url": "https://www.qbitai.com/2026/06/438174.html",
     "source": "量子位",
     "date": "2026-06-24",
     "summary": "已率先完成智谱GLM-5.2适配",
     "is_new": true,
     "lang": "zh",
     "interpretation": "百度千帆Token Plan企业版发布，整合GLM-5.2等模型，降低企业AI部署门槛。"
    },
    {
     "title": "“AI填志愿”成高考后新现象，超1400万人在和千问聊高考",
     "url": "https://www.qbitai.com/2026/06/438198.html",
     "source": "量子位",
     "date": "2026-06-24",
     "summary": "现在仅需几分钟，就能生成一份志愿报告",
     "is_new": true,
     "lang": "zh",
     "interpretation": "超1400万人用AI填志愿，显示大模型正深度渗透教育决策场景。"
    },
    {
     "title": "Future Tech谁会成为下一个AI巨头？这175个早期项目站上WAIC2026",
     "url": "https://www.qbitai.com/2026/06/438157.html",
     "source": "量子位",
     "date": "2026-06-24",
     "summary": "报名通道已开启。",
     "is_new": true,
     "lang": "zh",
     "interpretation": "175个早期项目亮相WAIC2026，预示AI巨头争夺战从技术转向生态孵化。"
    },
    {
     "title": "物理AI第一块万亿市场，在公路货运先跑通闭环了",
     "url": "https://www.qbitai.com/2026/06/437853.html",
     "source": "量子位",
     "date": "2026-06-24",
     "summary": "申通安能用真金白银下单",
     "is_new": true,
     "lang": "zh",
     "interpretation": "公路货运率先跑通物理AI闭环，万亿市场验证了自动驾驶在物流领域的商业可行性。"
    },
    {
     "title": "1999 元的 AI 眼镜，Meta 想让你像买墨镜一样买它",
     "url": "https://www.ifanr.com/1669886?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-24",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": true,
     "lang": "zh",
     "interpretation": "低价AI眼镜试图将智能穿戴变成大众时尚消费品。"
    },
    {
     "title": "微信 AI 全网最细体验，我又爱上了刷朋友圈",
     "url": "https://www.ifanr.com/1669694?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-23",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "微信AI功能体验升级，优化朋友圈互动，增强用户粘性与社交场景智能化。"
    },
    {
     "title": "第二属性大于 AI 能力，像编剧一样做产品｜对话美图AKA小白",
     "url": "https://www.ifanr.com/1669611?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-23",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "产品设计应注重“第二属性”与叙事能力，超越AI技术本身，打造用户情感共鸣。"
    },
    {
     "title": "响应国家「体重管理年」，蚂蚁阿福发起「科学减重1亿斤」行动",
     "url": "https://www.leiphone.com/category/industrynews/Bqf1PqF4RtuxHXnP.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-23",
     "summary": "“国家喊你减肥了！”别以为这只是网络调侃。数据显示，当前我国成人超重率为34.3%、肥胖率16.4%，合起来超过50%，相当于每两名成年人就有一人体重亮“黄灯”。为此，国家卫健委等16部门于2024年联合启动“体重管理年”，今年正是收官之年。为响应号召，6月22日，全国最大的健康AI应用“蚂蚁阿福”发起“科学减重1亿斤”健康行动，希望帮用户科学管理体重，守护健康。01“1亿斤”怎么减，阿福打算这么干一、补贴智能硬件。许多家庭尚未配备体脂秤，阿福将集中采购，以“地板价”供应给用户。因为只有了解自己的体脂率、肌肉率等身体数据，才能科学管理体重。二、升级AI功能，当“AI私教”。连接智能硬件后...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "蚂蚁阿福发起“科学减重1亿斤”行动，响应国家健康战略，推动全民体重管理。"
    },
    {
     "title": "华为和 Google 都在抢！手机小组件，为什么是 AI 必争之地？｜AI 器物志",
     "url": "https://www.ifanr.com/1669508?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-22",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "组件成AI交互新入口，巨头争夺背后是终端智能化战略卡位战。"
    },
    {
     "title": "微信终于要给 AI 手机开门了｜AI 器物志",
     "url": "https://www.ifanr.com/1669522?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-22",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "微信开放AI接口，标志超级App与手机系统生态壁垒开始松动。"
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
   "stars": 43009,
   "forks": 7725,
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
   "stars": 26731,
   "forks": 5905,
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
   "name": "stas00/ml-engineering",
   "url": "https://github.com/stas00/ml-engineering",
   "description": "Machine Learning Engineering Open Book",
   "blurb": "Machine Learning Engineering Open Book",
   "stars": 18172,
   "forks": 1152,
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
   "stars": 15543,
   "forks": 2373,
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
   "stars": 11723,
   "forks": 1221,
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
   "stars": 11674,
   "forks": 938,
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
   "stars": 10146,
   "forks": 1301,
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
   "stars": 8684,
   "forks": 978,
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
   "stars": 7638,
   "forks": 870,
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
   "stars": 6805,
   "forks": 362,
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
   "stars": 6151,
   "forks": 379,
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
   "stars": 5737,
   "forks": 1405,
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
   "stars": 5458,
   "forks": 628,
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
   "stars": 4895,
   "forks": 405,
   "language": "Rust",
   "topics": [
    "ai",
    "embeddings",
    "huggingface",
    "llm",
    "ml"
   ]
  },
  {
   "name": "omnigent-ai/omnigent",
   "url": "https://github.com/omnigent-ai/omnigent",
   "description": "Omnigent is an open-source AI agent framework and meta-harness: orchestrate Claude Code, Codex, Cursor, Pi, and custom agents — swap harnesses without rewriting, enforce policies and sandboxing, and c",
   "blurb": "Omnigent is an open-source AI agent framework and meta-harness: orchestrate Claude Code, Codex, Cursor, Pi, and custom agents — swap harnesses without rewriting, enforce policies and sandboxing, and c",
   "stars": 4753,
   "forks": 561,
   "language": "Python",
   "topics": [
    "agent-framework",
    "agent-governance",
    "agent-orchestration",
    "agents",
    "ai",
    "ai-agent",
    "ai-agents",
    "claude-code",
    "codex",
    "coding-agents",
    "developer-tools",
    "llm",
    "ml",
    "multi-agent",
    "python",
    "sandbox"
   ]
  }
 ]
};