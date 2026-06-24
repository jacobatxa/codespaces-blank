const APP_DATA = {
 "today": "2026-06-24",
 "fetched_at": "2026-06-24T22:06:22",
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
   "count": 8,
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
   "count": 15,
   "color": "#8b5cf6"
  },
  "36氪 - AI": {
   "count": 9,
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
   "count": 36
  },
  {
   "name": "AI Agent与智能体",
   "icon": "🤯",
   "color": "#d97706",
   "count": 12
  },
  {
   "name": "具身智能与机器人",
   "icon": "🤖",
   "color": "#059669",
   "count": 2
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
   "count": 4
  },
  {
   "name": "开源与生态",
   "icon": "🌐",
   "color": "#2563eb",
   "count": 8
  },
  {
   "name": "AI商业与投融资",
   "icon": "💰",
   "color": "#ca8a04",
   "count": 19
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
   "count": 58
  }
 ],
 "sections": [
  {
   "name": "大模型与基础架构",
   "icon": "🧠",
   "color": "#7c3aed",
   "count": 36,
   "cards": [
    {
     "title": "Accelerating Transformers Fine-Tuning with NVIDIA NeMo AutoModel",
     "url": "https://huggingface.co/blog/nvidia/accelerating-fine-tuning-nvidia-nemo-automodel",
     "source": "Hugging Face Blog",
     "date": "2026-06-24",
     "summary": "",
     "is_new": true,
     "lang": "en",
     "interpretation": "NVIDIA新工具加速大模型微调，降低企业部署AI的门槛与成本。"
    },
    {
     "title": "OpenAI reveals its first AI processor: Jalapeño",
     "url": "https://www.theverge.com/ai-artificial-intelligence/955939/openai-reveals-its-first-ai-processor-jalapeno",
     "source": "The Verge - AI",
     "date": "2026-06-24",
     "summary": "OpenAI has just revealed a new \"intelligence processor\" chip for AI servers made in partnership with Broadcom. The chip, called Jalapeño, is designed to power current and future large language models, according to an announcement on Wednesday. Jalapeño is an ASIC (Application-Specific Integrated ...",
     "is_new": true,
     "lang": "en",
     "interpretation": "OpenAI首款自研AI处理器“Jalapeño”亮相，减少对英伟达依赖。"
    },
    {
     "title": "OpenAI and Broadcom unveil LLM-optimized inference chip",
     "url": "https://openai.com/index/openai-broadcom-jalapeno-inference-chip",
     "source": "OpenAI Blog",
     "date": "2026-06-24",
     "summary": "OpenAI and Broadcom introduce Jalapeño, a custom AI chip built for LLM inference to improve performance, efficiency, and scale across AI systems.",
     "is_new": true,
     "lang": "en",
     "interpretation": "OpenAI与博通联合推出大模型推理芯片，加速AI应用成本下降。"
    },
    {
     "title": "Quoting Tom MacWright",
     "url": "https://simonwillison.net/2026/Jun/24/tom-macwright/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-24",
     "summary": "In the last few months, I've started to see [job applications] that were clearly cowritten by an LLM, link to an LLM-generated portfolio site, which then links to LLM-generated GitHub projects, with purely LLM-generated commit messages. [...] My other reaction is that I don't know anything about ...",
     "is_new": true,
     "lang": "en",
     "interpretation": "引用Tom MacWright观点，或引发对技术行业现状的反思与讨论。"
    },
    {
     "title": "Mistral launches OCR 4, turning document extraction into a full enterprise AI play",
     "url": "https://venturebeat.com/data/mistral-launches-ocr-4-turning-document-extraction-into-a-full-enterprise-ai-play",
     "source": "VentureBeat - AI",
     "date": "2026-06-24",
     "summary": "Mistral AI on Tuesday released OCR 4, a document intelligence model that moves beyond raw text extraction to return structured representations of entire documents — complete with bounding boxes, block-type classification, and per-word confidence scores. The release marks Mistral's fourth generati...",
     "is_new": true,
     "lang": "en",
     "interpretation": "Mistral推出OCR 4，将文档处理升级为企业级AI解决方案，拓展商业应用场景。"
    },
    {
     "title": "Alibaba's model never trained as an agent — and improved agent performance across seven benchmarks",
     "url": "https://venturebeat.com/technology/alibabas-model-never-trained-as-an-agent-and-improved-agent-performance-across-seven-benchmarks",
     "source": "VentureBeat - AI",
     "date": "2026-06-24",
     "summary": "Alibaba's Qwen team released Qwen-AgentWorld on Tuesday — two models trained not to act inside agent environments, but to predict what those environments return. The release covers seven domains under a single architecture: MCP, Search, Terminal, Software Engineering, Android, Web, and OS. The re...",
     "is_new": true,
     "lang": "en",
     "interpretation": "阿里模型未经智能体训练却提升多项基准，证明基础模型本身具备强大潜力。"
    },
    {
     "title": "Xiaomi's HarnessX rewrites its own AI scaffolding mid-task — and smaller models gain the most",
     "url": "https://venturebeat.com/orchestration/xiaomis-harnessx-rewrites-its-own-ai-scaffolding-mid-task-and-smaller-models-gain-the-most",
     "source": "VentureBeat - AI",
     "date": "2026-06-24",
     "summary": "As enterprise AI agents take on increasingly complex, long-horizon tasks, their performance is often restricted by their harness, the software scaffolding that connects the backbone LLM to its environment. Currently, harnesses are largely static and hand-crafted. Improving them is largely manual ...",
     "is_new": true,
     "lang": "en",
     "interpretation": "小米HarnessX实现任务中动态重写AI框架，小模型受益最大，降低部署成本。"
    },
    {
     "title": "How Shopify built an AI stack that doesn't care which models survive",
     "url": "https://venturebeat.com/orchestration/how-shopify-built-an-ai-stack-that-doesnt-care-which-models-survive",
     "source": "VentureBeat - AI",
     "date": "2026-06-24",
     "summary": "Shopify built an LLM proxy that gives every engineer access to multiple AI providers — with automatic failover when any one of them goes down, changes, or disappears. When Claude Fable 5 shut down, Shopify's engineers didn't go into panic mode. The proxy shifted them to Claude Opus or GPT 5.5 aut...",
     "is_new": true,
     "lang": "en",
     "interpretation": "Shopify构建模型无关的AI架构，确保技术迭代中业务稳定与灵活性。"
    },
    {
     "title": "The emergence of the web data infrastructure layer for AI",
     "url": "https://www.technologyreview.com/2026/06/24/1139202/the-emergence-of-the-web-data-infrastructure-layer-for-ai/",
     "source": "MIT Technology Review - AI",
     "date": "2026-06-24",
     "summary": "AI is booming. New use cases are emerging each day. To capitalize on the technology’s potential, enterprises require data at scale. In many cases, though, the relevant information is blocked or unstructured, which limits its use by AI models. To understand this challenge, consider the foundation ...",
     "is_new": true,
     "lang": "en",
     "interpretation": "数据基础设施成AI竞争新赛道，决定模型训练效率与质量。"
    },
    {
     "title": "Anthropic’s Claude Tag is learning your company, one Slack message at a time",
     "url": "https://techcrunch.com/2026/06/23/anthropics-claude-tag-is-learning-your-company-one-slack-message-at-a-time/",
     "source": "TechCrunch - AI",
     "date": "2026-06-23",
     "summary": "Anthropic’s new Claude Tag brings an always-on AI teammate to Slack. But beyond productivity, the feature is a strategic play to capture organizational context, institutional knowledge, and enterprise workflows.",
     "is_new": false,
     "lang": "en",
     "interpretation": "企业AI通过分析内部通讯学习组织文化，或重塑团队协作与知识管理。"
    },
    {
     "title": "Experimenting with the proposed Cross-Origin Storage API in Transformers.js",
     "url": "https://huggingface.co/blog/cross-origin-storage",
     "source": "Hugging Face Blog",
     "date": "2026-06-23",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "在Transformers.js中试验跨源存储API，可能推动浏览器端AI能力突破。"
    },
    {
     "title": "How GPT-5 helped immunologist Derya Unutmaz solve a 3-year-old mystery",
     "url": "https://openai.com/index/gpt-5-immunology-mystery",
     "source": "OpenAI Blog",
     "date": "2026-06-23",
     "summary": "GPT-5 Pro helped solve a 3-year-old immunology mystery, offering insights into T cell behavior. The breakthrough could support cancer and autoimmune research.",
     "is_new": false,
     "lang": "en",
     "interpretation": "GPT-5助力免疫学家破解三年谜题，展现AI在科研中的颠覆性价值。"
    },
    {
     "title": "We got local models to triage the OpenClaw repo for FREE!*",
     "url": "https://huggingface.co/blog/local-models-pr-triage",
     "source": "Hugging Face Blog",
     "date": "2026-06-22",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "用本地模型免费处理开源仓库问题，降低社区维护成本与门槛。"
    },
    {
     "title": "Daybreak: Tools for securing every organization in the world",
     "url": "https://openai.com/index/daybreak-securing-the-world",
     "source": "OpenAI Blog",
     "date": "2026-06-22",
     "summary": "OpenAI introduces new Daybreak tools, including Codex Security and GPT-5.5-Cyber, to help organizations find, validate, and patch vulnerabilities at scale.",
     "is_new": false,
     "lang": "en",
     "interpretation": "面向全球组织的安全工具发布，旨在系统性提升网络防护能力。"
    },
    {
     "title": "Meta Exposed Data Internally From Its Controversial Employee-Tracking Program",
     "url": "https://www.wired.com/story/meta-accidentally-let-employees-access-each-others-keystroke-data/",
     "source": "Wired - AI",
     "date": "2026-06-22",
     "summary": "Employees had previously raised concerns about the initiative, which involves collecting workers’ keystroke data to train AI models.",
     "is_new": false,
     "lang": "en",
     "interpretation": "内部监控数据泄露，暴露科技巨头对员工隐私的漠视与争议。"
    },
    {
     "title": "OpenAI Launches Full-Scale Effort to Patch Open-Source Bugs as It Takes on Anthropic’s Mythos",
     "url": "https://www.wired.com/story/openai-launches-full-scale-effort-to-patch-open-source-bugs-as-it-takes-on-anthropics-mythos/",
     "source": "Wired - AI",
     "date": "2026-06-22",
     "summary": "Amid concerns about AI models’ cybersecurity capabilities, OpenAI revealed an improved version of GPT-5.5-Cyber and its “Patch the Planet” initiative to fix open-source software bugs.",
     "is_new": false,
     "lang": "en",
     "interpretation": "开源漏洞修复竞赛升级，AI安全成巨头争夺用户信任新战场。"
    },
    {
     "title": "Porting the Moebius 0.2B image inpainting model to run in the browser with Claude Code",
     "url": "https://simonwillison.net/2026/Jun/22/porting-moebius/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-22",
     "summary": "This morning on Hacker News I saw Moebius: 0.2B Lightweight Image Inpainting Framework with 10B-Level Performance, describing a small but effective inpainting model - a model where you can mark regions of an image to remove and the model imagines what should fill the space. The released model req...",
     "is_new": false,
     "lang": "en",
     "interpretation": "图像修复模型轻量化移植浏览器，AI应用门槛进一步降低。"
    },
    {
     "title": "Samsung Electronics brings ChatGPT and Codex to employees",
     "url": "https://openai.com/index/samsung-electronics-chatgpt-codex-deployment",
     "source": "OpenAI Blog",
     "date": "2026-06-21",
     "summary": "Samsung Electronics deploys ChatGPT Enterprise and Codex to employees worldwide, marking one of OpenAI’s largest enterprise AI rollouts.",
     "is_new": false,
     "lang": "en",
     "interpretation": "三星引入生成式AI工具，企业级AI应用普及加速但存数据风险。"
    },
    {
     "title": "28 Tips to Take Your ChatGPT Prompts to the Next Level",
     "url": "https://www.wired.com/story/28-tips-to-take-your-chatgpt-prompts-to-the-next-level/",
     "source": "Wired - AI",
     "date": "2026-06-21",
     "summary": "Sure, anyone can use OpenAI’s chatbot. But with smart engineering, you can get way more interesting results.",
     "is_new": false,
     "lang": "en",
     "interpretation": "提示词技巧合集，反映用户对AI交互效率的深度需求。"
    },
    {
     "title": "Is it agentic enough? Benchmarking open models on your own tooling",
     "url": "https://huggingface.co/blog/is-it-agentic-enough",
     "source": "Hugging Face Blog",
     "date": "2026-06-18",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "用自有工具测试开源模型自主性，决定实际应用可靠性。"
    },
    {
     "title": "GLM-5.2 is probably the most powerful text-only open weights LLM",
     "url": "https://simonwillison.net/2026/Jun/17/glm-52/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-17",
     "summary": "Chinese AI lab Z.ai released GLM-5.2 to their coding plan subscribers on June 13th, and then yesterday (June 16th) released the full open weights under an MIT license. Similar in size to their previous GLM-5 and GLM-5.1 releases this is a 753B parameter, 1.51TB monster - with 40 active parameters...",
     "is_new": false,
     "lang": "en",
     "interpretation": "纯文本开源模型性能登顶，或重塑大模型竞争格局。"
    },
    {
     "title": "How we used Gemini to build Google I/O 2026",
     "url": "https://blog.google/innovation-and-ai/technology/ai/io-2026-google-ai/",
     "source": "Google AI Blog",
     "date": "2026-06-01",
     "summary": "Learn how Googlers used AI to produce Google I/O 2026.",
     "is_new": false,
     "lang": "en",
     "interpretation": "用Gemini构建自家开发者大会，展示AI工具从研发到落地的闭环能力。"
    },
    {
     "title": "9 demos of Gemini Omni and Gemini 3.5 in action",
     "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-omni-3-5-videos/",
     "source": "Google AI Blog",
     "date": "2026-05-29",
     "summary": "Watch 9 videos showing the capabilities of Gemini Omni and Gemini 3.5, announced at Google I/O 2026.",
     "is_new": false,
     "lang": "en",
     "interpretation": "Gemini Omni与3.5版本九大实机演示，直观呈现多模态AI能力边界。"
    },
    {
     "title": "阿里QoderWork推“峰谷Token”，夜间使用Qwen3.7低至2折",
     "url": "https://www.qbitai.com/2026/06/437834.html",
     "source": "量子位",
     "date": "2026-06-24",
     "summary": "涵盖QoderWork、Qoder Desktop等",
     "is_new": true,
     "lang": "zh",
     "interpretation": "阿里推夜间低价算力，降低开发者调用大模型的门槛与成本。"
    },
    {
     "title": "刚刚，Claude Code大升级！卡帕西：LLM第三次变革",
     "url": "https://www.qbitai.com/2026/06/437734.html",
     "source": "量子位",
     "date": "2026-06-24",
     "summary": "目前A社约65%的产品代码已经由Claude Tag参与完成",
     "is_new": true,
     "lang": "zh",
     "interpretation": "Claude Code重大升级，标志LLM从对话走向编程工具的新阶段。"
    },
    {
     "title": "别让 AI 碰生产环境！Reddit 火爆血泪贴，痛诉 AI 如何一刀切断数据库生命线",
     "url": "https://www.leiphone.com/category/yanxishe/oG2mZO3y4nGNbORu.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-24",
     "summary": "AI 提效有多爽，炸库就有多痛。 作者丨高允毅 编辑丨马晓宁 “别再盲信AI了！你以为是资深专家，其实是炸库高手！”6月22日，全球极客聚集的 Reddit的 LocalLLaMA 板块，一位资深数据工程师发了一篇血泪帖《A Cautionary Note on Local LLMs, Especially in Agentic Contexts》（关于本地大语言模型的警示，尤其是在 Agent 智能体场景中），控诉 AI 的“伪装”已经进化到了人类肉眼难以察觉的危险地步。01完美的伪装与静默的雪崩发帖人 vbwyrde 日常工作是和数据库打交道。事发当天，他正试图用本地 Qwen3 2...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "警示AI直接操作生产环境的巨大风险，强调人工审核与安全隔离的必要性。"
    },
    {
     "title": "百度智能云发布百度千帆Token Plan企业版，提供GLM-5.2等模型",
     "url": "https://www.leiphone.com/category/industrynews/He2ajsw4G5vP9m2R.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-24",
     "summary": "6月24日消息，百度智能云正式发布企业级AI生产力订阅服务——百度千帆Token Plan企业版，面向企业提供统一采购、统一管理、统一运营的AI资源服务，帮助企业以固定预算、统一管理的方式高效使用AI能力，加速AI在组织内部的规模化落地。﻿据介绍，百度千帆已率先完成智谱GLM-5.2适配并接入Token Plan企业版服务体系，企业用户和开发者无需复杂部署与调优，即可在长程任务处理、复杂推理、Coding等场景中便捷调用该模型。﻿随着大模型能力持续演进，AI正从少数技术团队使用的创新工具逐步演变为企业级生产力基础设施。然而，在规模化应用过程中企业也面临新的挑战：员工分散采购AI工具、模型...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "百度智能云推出企业级模型服务，加速大模型在商业场景的落地与竞争。"
    },
    {
     "title": "360发布“中国版Mythos”图龙锋 周鸿祎：漏洞发现能力正成为新的战略能力",
     "url": "https://www.leiphone.com/category/industrynews/t81MR1roNriefQ6v.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-24",
     "summary": "在今日开幕的ISC.AI 2026（第十四届互联网安全大会）上，360集团创始人周鸿祎正式发布360 AI安全“倚天屠龙”两大核心能力：漏洞自动化挖掘智能体“图龙锋”和网络安全自动化防御系统“仪天阵”。同时，360联合飞腾、麒麟等信创、安全、云计算、大模型和算力等产业伙伴，共同发起“磐石之盾”安全协作计划。近期，Anthropic宣布限制内部最强模型Mythos对外开放，引发全球安全行业广泛关注。早在该模型问世初期，曾引发美国一众网络安全巨头股价集体暴跌。周鸿祎认为，Mythos之所以引发震动，根本原因在于它能自主发现漏洞、分析漏洞甚至构造网络攻击“武器”，相当于AI时代的“网络核武器”...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "360发布国产漏洞挖掘工具，凸显网络安全攻防中漏洞发现能力的战略价值。"
    },
    {
     "title": "阿里QoderWork推“峰谷Token”，夜间使用Qwen3.7低至2折",
     "url": "https://www.leiphone.com/category/industrynews/fnvQGe0cc0EAX1bK.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-24",
     "summary": "6月23日晚，阿里QoderWork推出“峰谷Token”，Agent在每晚 22:00到次日08:00运行可自动享受优惠，其中Qwen3.7-Max模型低至2折。这是国内首个上线“峰谷Token”的Agent产品，将大幅降低用户的使用成本。例如，用户可在白天设定好定时任务、或者睡前提交长程任务指令，选择Qwen3.7模型，让Agent自动跑完全流程，早上起来验收即可。据介绍，夜间折扣产品涵盖QoderWork、Qoder Desktop等产品。]]>",
     "is_new": true,
     "lang": "zh",
     "interpretation": "阿里云推出夜间低价算力，降低开发者使用大模型的成本，推动AI普惠化。"
    },
    {
     "title": "独家丨清研精准完成数亿元 B3 轮融资，目标打造物理 AI 数据基础设施",
     "url": "https://www.leiphone.com/category/industrynews/ATSs1siQdN2RCpgn.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-24",
     "summary": "雷峰网独家获悉，清华系物理AI企业「清研精准」已于近日完成数亿元B3轮融资，本轮融资由北京市绿色能源基金、北汽产投领投，裕隆集团跟投。据悉，该轮资金将会用于核心人才招募、多模态数采设备的研发与规模化部署，以及算力采购与模型训练基础设施建设等方向。01清华系出身，业务横跨汽车等多个领域清研精准成立于2018年，由清华大学孵化，致力于打造物理AI的工程化底座。清研精准创始人兼CEO董汉是清华大学博士，师从中国工程院院士李克强教授，在汽车领域拥有近十年科研与产业积累；清研精准战略发展总监、精准视界CEO曹绮桐，斯坦福大学管理科学与工程硕士、杜克大学应用数学本科出身；清研精准核心科研成员及合作团...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "清研精准获数亿元融资，聚焦物理AI数据基础设施，加速智能硬件与场景融合。"
    },
    {
     "title": "豆包专业版上线：接入全新豆包2.1 Pro大模型 专注复杂工作任务场景",
     "url": "https://www.leiphone.com/category/industrynews/DEnSlUn7Axou7Rq6.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-24",
     "summary": "6月24日，豆包正式宣布推出豆包专业版。该服务基于最新的豆包2.1系列大模型，面向复杂办公和生产力场景，提供更高的复杂工作场景使用额度，并上线全新的办公任务模式。豆包 2.1 是字节跳动最新发布的智能体模型。面对工作任务及各类复杂需求，它能做好项目规划、文件处理、工具调用等多步操作，产出高质量的结果。该系列模型的编程能力也显著提升，可以稳定交付企业级开发任务。同时，模型的多模态理解、知识、推理等基础能力进一步提升。豆包专业版用户将可以使用接入豆包2.1 Pro模型的办公任务模式；免费用户也可在一定额度内体验接入豆包2.1 Turbo模型的办公任务模式。豆包办公任务模式支持操作本地电脑、使...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "豆包专业版上线新大模型，瞄准复杂工作任务，提升AI在专业领域的应用深度。"
    },
    {
     "title": "收入远高本土平均水平！三星、SK海力士员工跻身韩国婚恋市场顶层；急缺人才！DeepSeek Harness负责人称每日不停面试招人；微信迎重大更新",
     "url": "https://www.leiphone.com/category/zaobao/ci2DnFLhl4SMWN72.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-24",
     "summary": "要闻提示1.外媒：三星、SK 海力士员工已跻身韩国婚恋市场顶层2.急缺人才！DeepSeek Harness负责人坦言每日不停面试招人3.微信迎来史上最大更新！多项功能全面升级4.字节跳动CEO梁汝波：收缩业务宽度，聚焦AI5.刘强东的京东工业，失去一员大将！49岁CEO宋春正因健康原因辞职6.腾讯考虑退出多家日本游戏公司投资7.大疆Osmo Pocket 4P开售秒罄，二手市场现货溢价破千元8.抢先苹果！Meta发布首款自有品牌智能眼镜：定价299美元起今日头条外媒：三星、SK 海力士员工已跻身韩国婚恋市场顶层6 月 23 日消息，有外媒发布长文指出，全球 AI 热潮不仅把 SK 海力...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "高薪吸引人才、婚恋市场分层，反映AI行业人才争夺激烈，企业招聘压力巨大。"
    },
    {
     "title": "火山引擎下半年往哪发力？答案藏在这场Force大会里",
     "url": "https://www.leiphone.com/category/CorporateServices/ZfxxMFp9Ad0A4EWq.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-24",
     "summary": "过去一年，火山引擎几乎是中国大模型商业化叙事里最受关注的变量之一。一方面，豆包大模型调用量持续攀升，火山在MaaS市场快速扩大份额；另一方面，围绕火山引擎MaaS 业务的收入目标和增长预期，市场上也不断传出更激进的说法。到年中这一节点，外界对火山引擎的关注，已经从“Seedance2.0卖得怎么样”，转向了另一个问题：上半年，火山引擎在Seedance2.0的商业化上打出了一场漂亮仗，但下一步还要往哪里走？又要靠什么继续增长？6月23日举办的2026夏季FORCE原动力大会，正好给了一个观察窗口。看完整场大会，火山引擎给出的答案大致有两层：第一，Seedance在从短剧、漫剧走向更多实体...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "火山引擎Force大会将揭示下半年战略重点，或聚焦AI算力与行业解决方案创新。"
    },
    {
     "title": "微信AI助手小微，还有许多做不到的事情｜产品观察",
     "url": "<![CDATA[https://36kr.com/p/3865425714795525?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-06-24",
     "summary": "文｜王毓婵 编辑｜张雨忻 微信AI助手“小微”正在灰度内测，36氪智能涌现拿到了首批测试资格。 先说结论：一些简单操作，小微做得没那么好；一些复杂操作，小微反而做得比较好。 小微入口 小微的服务主要基于微信自研模型WeLM，部分回答可能会调用DeepSeek来处理。主入口在微信首页左上角，默认交互方式是语音转文字，亦可直接手动打字输入。 小微会默认开启记忆能力、个性化服务和授权帮助模型改进效果。用户也可以在“记忆与隐私”界面手动选择关闭。 这款尚为测试版的AI助手打通了小程序、微信聊天、朋友圈、公众号、视频号、微信小店等微信的基础功能，但同时又有很多做不到的事情——比如，它可以读取你的朋...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "微信AI助手功能仍有局限，说明当前AI在复杂场景下尚难完全替代人工。"
    },
    {
     "title": "宇树R1人形机器人降价至2.99万元起",
     "url": "<![CDATA[https://36kr.com/newsflashes/3867114597848067?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-06-24",
     "summary": "宇树科技宣布旗下双足人形机器人Unitree R1官方售价由3.99万元下调至2.99万元起，并即日起开放现货销售。该机器人重25千克，配备26个高精度关节，支持语音与图像多模态大模型交互，具备开发与定制能力。（财联社）",
     "is_new": true,
     "lang": "zh",
     "interpretation": "人形机器人价格降至3万以内，加速消费级市场普及与行业竞争白热化。"
    },
    {
     "title": "网易有道首发14语种零口音语音克隆模型，无需参考文本即可复刻任意音色",
     "url": "https://www.leiphone.com/category/industrynews/30qYFuhjh76yBsIV.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-23",
     "summary": "当前，人工智能作为培育新质生产力的核心引擎，已上升为国家战略层面。国务院《关于深入实施“人工智能+”行动的意见》明确提出，要加快AI核心技术自主创新、降低产业落地门槛、构建开放共享的国产AI生态，推动人工智能与千行百业深度融合。在这一战略背景下，网易有道正式推出“子曰4.0”大模型体系TTS语音合成引擎——Confucius4-TTS，并已面向全球用户开放。近日，该引擎凭借全球首个不依赖参考文本即可实现14语种无口音跨语种语音克隆的开创性突破引发行业高度关注，为数字人、跨境传播、智能教育等产业提供国产化、低成本语音克隆功能。重磅开源发布，完整模型权重本地可部署Confucius4-TTS...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "网易有道突破多语种零参考语音克隆，降低AI语音应用门槛，拓展全球化场景。"
    }
   ]
  },
  {
   "name": "AI Agent与智能体",
   "icon": "🤯",
   "color": "#d97706",
   "count": 12,
   "cards": [
    {
     "title": "Stanford researchers will discuss their agentic 'scientists' that are on course to reshape drug discovery at VB Transform 2026",
     "url": "https://venturebeat.com/data/stanford-researchers-will-discuss-their-agentic-scientists-that-are-on-course-to-reshape-drug-discovery-at-vb-transform-2026",
     "source": "VentureBeat - AI",
     "date": "2026-06-24",
     "summary": "Drug discovery is notoriously inefficient. Pharmaceutical projects span years, moving from one specialized human team to the next through disconnected workflows that result in knowledge loss during each handoff. A shocking 90% to 95% of drug discovery projects reportedly fail — one of the highest...",
     "is_new": true,
     "lang": "en",
     "interpretation": "斯坦福“AI科学家”将重塑药物研发，预示AI在科研领域的颠覆性突破。"
    },
    {
     "title": "Amazon will present its framework for engineering trustworthy AI agents at VB Transform 2026",
     "url": "https://venturebeat.com/orchestration/amazon-will-present-its-framework-for-engineering-trustworthy-ai-agents-at-vb-transform-2026",
     "source": "VentureBeat - AI",
     "date": "2026-06-24",
     "summary": "AI agents are increasingly proficient at executing business tasks autonomously, but IT leaders are cautious about granting permissions to access enterprise systems. Part of the challenge lies in how AI reliability is measured. Industry standards often rely on EVAL scores, which provide a static s...",
     "is_new": true,
     "lang": "en",
     "interpretation": "亚马逊将发布可信AI智能体框架，为行业提供工程化落地的安全标准。"
    },
    {
     "title": "Intuit will show off how it rebuilt its AI infrastructure to support fast and complex tasks at VB Transform 2026",
     "url": "https://venturebeat.com/orchestration/intuit-will-show-off-how-it-rebuilt-its-ai-infrastructure-to-support-fast-and-complex-tasks-at-vb-transform-2026",
     "source": "VentureBeat - AI",
     "date": "2026-06-24",
     "summary": "Customer expectations have shifted from simple, fast conversational interactions to complex agentic AI-powered tasks that legacy IT architectures simply can’t handle. To address this, Intuit made the bold decision to overhaul its technical infrastructure for its business platform. The company mov...",
     "is_new": true,
     "lang": "en",
     "interpretation": "展示AI基础设施重构经验，为行业提供高效复杂任务处理范本。"
    },
    {
     "title": "India’s MoEngage bets that the future of marketing is millions of AI agents",
     "url": "https://techcrunch.com/2026/06/23/indias-moengage-bets-marketings-future-on-millions-of-ai-agents/",
     "source": "TechCrunch - AI",
     "date": "2026-06-23",
     "summary": "The all-cash deal gives MoEngage access to technology that assigns AI agents to individual customers.",
     "is_new": false,
     "lang": "en",
     "interpretation": "营销自动化转向AI代理集群，预示客户互动模式将彻底变革。"
    },
    {
     "title": "Build real agentic apps using CUGA: two dozen working examples on a lightweight harness",
     "url": "https://huggingface.co/blog/ibm-research/cuga-apps",
     "source": "Hugging Face Blog",
     "date": "2026-06-23",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "CUGA框架提供轻量级工具，让开发者快速构建真实AI代理应用。"
    },
    {
     "title": "Temporary Cloudflare Accounts for AI agents",
     "url": "https://simonwillison.net/2026/Jun/21/temporary-cloudflare-accounts/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-21",
     "summary": "Temporary Cloudflare Accounts for AI agents The announcement says this is \"for AI agents\" but (as is pretty common these days) the AI hook isn't really necessary, this is an interesting feature for everyone else as well. Short version: you can now create a Cloudflare Workers project and run this,...",
     "is_new": false,
     "lang": "en",
     "interpretation": "临时Cloudflare账号专供AI代理，自动化网络操作安全与效率平衡。"
    },
    {
     "title": "Quoting Sean Lynch",
     "url": "https://simonwillison.net/2026/Jun/19/sean-lynch/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-19",
     "summary": "The real valuable capability MCP offers over skills/CLI is isolating the auth flow outside of the agent’s context window, and potentially out of the harness completely. [...] Maybe the idealized form of MCP is just an auth gateway for the API and nothing else. That’d still be a win. — Sean Lynch,...",
     "is_new": false,
     "lang": "en",
     "interpretation": "引用Sean Lynch的观点，暗示其言论具有行业风向标意义。"
    },
    {
     "title": "MosaicLeaks: Can your research agent keep a secret?",
     "url": "https://huggingface.co/blog/ServiceNow/mosaicleaks",
     "source": "Hugging Face Blog",
     "date": "2026-06-18",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "研究代理的保密能力，关乎AI安全与数据隐私的核心挑战。"
    },
    {
     "title": "From the Hugging Face Hub to robot hardware with Strands Agents and LeRobot",
     "url": "https://huggingface.co/blog/amazon/strands-lerobot-hub-to-hardware",
     "source": "Hugging Face Blog",
     "date": "2026-06-17",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "从模型库到实体机器人，打通AI理论与硬件落地的关键链路。"
    },
    {
     "title": "DV/HDV 磁带拯救计划：用 AI 驱动十八年前的老设备",
     "url": "https://sspai.com/post/111223",
     "source": "少数派 - AI",
     "date": "2026-06-24",
     "summary": "2026 年是 AI agent 的第一年，2026 年也是 FireWire 的最后一年。查看全文",
     "is_new": true,
     "lang": "zh",
     "interpretation": "AI驱动老旧设备读取磁带，拯救被遗忘的数字化历史资料。"
    },
    {
     "title": "完成数亿元新融资，影眸科技 Hyper3D 让 3D 生成进入“思考时代”丨36氪首发",
     "url": "<![CDATA[https://36kr.com/p/3865060112438533?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-06-24",
     "summary": "文｜王欣逸 编辑｜张雨忻 2026 年开年来，3D 生成模型赛道相当热闹。 今年第一季度，影眸科技发布首个 3D 编辑模型 Rodin Gen-2 Edit，让 AI 3D 模型第一次可编辑；今年 6 月，VAST 官宣了新一轮融资，Meshy 也紧随其后，宣称自己发布了全球首款 3D AI Agent。 近日，影眸科技——这支扎根学术圈、创业早、年轻的 3D 模型团队，带着最新的技术研究成果，以及新一轮融资，再添了一把火。 这支团队创立于 2020 年，创始人兼 CEO 吴迪、和联合创始人兼 CTO 张启煊以及另外两位联合创始人张龙文、曾初啸均来自上海科技大学。团队约 60 人，平均年...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "3D生成技术从“生成”迈向“思考”，标志着行业进入更智能的新阶段。"
    },
    {
     "title": "GAIR Paper 104｜Agent 真的能自我进化吗？我们造了一把它骗不过去的尺子",
     "url": "https://www.leiphone.com/category/private/lWPaab1Q7cpgqnRI.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-23",
     "summary": "我们用 GDPevo，衡量出 AI 自进化的真实价值。 作者丨PrismShadow AI 编辑丨岑峰 01为什么“自进化”突然成了所有人都在抢的赛道？想象一下，你有一个新入职的员工。他一开始什么都不会，需要你手把手教。但几周后，他开始自己总结经验、优化工作流程，甚至能独立应对从未见过的新问题。如果把这个场景里的员工换成AI，这就是眼下人工智能领域最前沿、也最令人兴奋的方向：自进化Agent（Self-evolving Agent）。先说一句这两年在 AI 圈被反复验证的“铁律”：在 AI 时代，一件事一旦能被清晰地评估、又能被自动化地去做，那它离被做到极致就不远了。围棋是这样，写代码是...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "揭示当前AI智能体自我进化能力的局限，提出可验证的评估标准。"
    }
   ]
  },
  {
   "name": "具身智能与机器人",
   "icon": "🤖",
   "color": "#059669",
   "count": 2,
   "cards": [
    {
     "title": "Agility Robotics plans to go public via SPAC in a $2.5B deal",
     "url": "https://techcrunch.com/2026/06/24/agility-robotics-plans-to-go-public-via-spac-in-a-2-5b-deal/",
     "source": "TechCrunch - AI",
     "date": "2026-06-24",
     "summary": "Agility Robotics, the humanoid robotics startup that spun out of Oregon State University in 2015, expects to generate $620 million in proceeds.",
     "is_new": true,
     "lang": "en",
     "interpretation": "人形机器人公司Agility拟借SPAC上市，标志商用机器人赛道加速资本化。"
    },
    {
     "title": "起底大晓：四个月狂融数亿美金，国家队、车企、芯片巨头为何集体「押注」",
     "url": "https://www.leiphone.com/category/industrynews/SmlYKtAdXG3bGMMu.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-23",
     "summary": "日前，大晓机器人官宣完成天使+轮融资。投资方集齐国家队、产业队、VC 队三股力量：既有深创投、上海科创基金、临港新片区基金等政府资本，吉利资本与沐曦股份等公司业务强相关的产业资本；又有达晨财智、盛宇投资、复星锐正、华控基金、豫资涨泉等 VC 资本；而老股东商汤国香资本持续增资。这轮融资，三重信号值得关注：第一，上海、深圳政府资本集体入局。世界模型、具身智能已进入国家与地方政府的产业视野，战略关注度显著提升。第二，吉利资本、沐曦股份等产业资本下场。大晓机器人与国产算力、汽车制造产业链深度绑定，上下游协同更加紧密。第三，资本结构蜕变。从单一市场化VC主导，进化到“政府资本背书+产业资本协同+...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "大晓短时间获多方资本押注，反映AI赛道对国家队与产业资本的巨大吸引力。"
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
     "interpretation": "谷歌Home音箱音质外观俱佳但操作不稳定，智能家居体验仍存短板。"
    },
    {
     "title": "Something’s off with Midjourney’s pivot to body scanners",
     "url": "https://www.theverge.com/report/954826/midjourney-medical-ai-ultrasound-body-scanner-lacks-evidence",
     "source": "The Verge - AI",
     "date": "2026-06-23",
     "summary": "Last week, Midjourney, an AI startup best known for its image generator, made an unusual pivot: medical imaging. The company announced a futuristic ultrasound scanner that would dunk users into a vat of water and, hopefully, produce \"something as powerful as MRI\" yet \"as casual as a trip to the s...",
     "is_new": false,
     "lang": "en",
     "interpretation": "Midjourney转向人体扫描仪引发争议，暴露AI公司商业化路径的混乱。"
    }
   ]
  },
  {
   "name": "AI硬件与芯片",
   "icon": "💾",
   "color": "#0891b2",
   "count": 4,
   "cards": [
    {
     "title": "存储巨头上市估值冲万亿；大厂不隐藏身份抢数千台B300；Day0适配竞争变味；京东芯片核心成员创业拿亿元融资｜算力情报局Vol.12",
     "url": "https://www.leiphone.com/category/chips/B9OrnyYJ8xX88loZ.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-24",
     "summary": "大厂开始直接抢卡：B300被数千台扫货国内头部互联网公司采购算力的方式正在发生变化。过去，大厂往往通过中间渠道隐藏真实身份进行采购，如今越来越多项目开始直接签约，自我保护色彩明显减弱。与此同时，B300正在被头部客户快速扫货。华东某互联网大厂采购规模超过2000台，华北某科技巨头也采购了一两千台，仅少数几家公司便消化掉市场相当比例的供给资源。更多算力市场内幕，欢迎添加微信EATINGNTAE探讨。 存储巨头估值冲向万亿，可能给已上市公司压力国内两大存储原厂的上市进程持续受到资本市场关注。有消息称，其中一家存储巨头的上市估值有望从数千亿元上调至万亿元级别，而上市时间有可能较此前预期有所延后...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "存储巨头估值飙升、大厂抢购高端芯片，算力产业链竞争白热化，创业潮涌现。"
    },
    {
     "title": "芯片5倍涨价、碳酸锂翻番，五大车企高管交底：价格战走到头了丨重庆论坛观察",
     "url": "https://www.leiphone.com/category/transportation/7dBfrkDbL4iRpLn1.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-24",
     "summary": "三年前价格战刚打响时，业内还有声音说“卷一卷更健康”，车企可以通过降价倒逼供应链降本、淘汰落后产能。回头来看，上述逻辑只对了一半——落后的确实被淘汰了一部分，但活下来的也没赚到钱。如今，车圈价格战已经进入第四年，国家补贴政策彻底退出、终端需求被提前释放，叠加上游原材料再度进入上行区间，车企陷入了更艰难的境地，整个市场的“反价格战”声浪也逐渐接近顶点。“成本涨价、材料涨价，售价却一个比一个卖得更低。”6月12日，赛力斯集团董事长张兴海在2026年重庆论坛上吐槽行业竞争乱象，并高呼车企“压力非常非常大”，他甚至在现场直接摊牌了：存储芯片从每单位20块涨到接近100块，碳酸锂也从去年同期每吨8...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "芯片与原材料涨价传导至车企，预示价格战结束，行业进入成本与利润的博弈期。"
    },
    {
     "title": "对话蔚来高级副总裁任少卿：一个世界模型，如何适配两套芯片、四个平台和十几款车？",
     "url": "https://www.ifanr.com/1669670?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-23",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "蔚来跨平台适配世界模型，展现其技术整合与规模化落地的关键能力。"
    },
    {
     "title": "早报｜豆包联合曹操出行推出打车功能/淘宝闪购灰测高端外卖「家宴」/日本卫浴厂商TOTO计划投800亿日元做1nm芯片",
     "url": "https://www.ifanr.com/1669656?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-23",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "豆包、淘宝、TOTO跨界布局，显示AI与芯片正渗透至出行、零售、传统制造。"
    }
   ]
  },
  {
   "name": "开源与生态",
   "icon": "🌐",
   "color": "#2563eb",
   "count": 8,
   "cards": [
    {
     "title": "Shipping huggingface_hub every week with AI, open tools, and a human in the loop",
     "url": "https://huggingface.co/blog/huggingface-hub-release-ci",
     "source": "Hugging Face Blog",
     "date": "2026-06-23",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "每周更新huggingface_hub，体现AI工具与人工审核结合的高效迭代。"
    },
    {
     "title": "PP-OCRv6 on Hugging Face: 50-Language OCR from 1.5M to 34.5M Parameters",
     "url": "https://huggingface.co/blog/PaddlePaddle/pp-ocrv6",
     "source": "Hugging Face Blog",
     "date": "2026-06-22",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "轻量级多语言OCR模型发布，让低资源设备也能实现高精度文字识别。"
    },
    {
     "title": "Patch the Planet: a Daybreak initiative to support open source maintainers",
     "url": "https://openai.com/index/patch-the-planet",
     "source": "OpenAI Blog",
     "date": "2026-06-22",
     "summary": "OpenAI introduces Patch the Planet, a Daybreak initiative helping open-source maintainers find, validate, and fix vulnerabilities with AI and expert review.",
     "is_new": false,
     "lang": "en",
     "interpretation": "企业发起开源维护者资助计划，缓解开源生态的可持续性危机。"
    },
    {
     "title": "Beyond LoRA: Can you beat the most popular fine-tuning technique?",
     "url": "https://huggingface.co/blog/peft-beyond-lora",
     "source": "Hugging Face Blog",
     "date": "2026-06-18",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "挑战LoRA微调技术霸主地位，推动模型适配效率新突破。"
    },
    {
     "title": "1小时真机RL微调成功率破95%！HIL-ResRL：即插即用的VLA“外挂”神器",
     "url": "https://www.qbitai.com/2026/06/438166.html",
     "source": "量子位",
     "date": "2026-06-24",
     "summary": "",
     "is_new": true,
     "lang": "zh",
     "interpretation": "真机强化学习微调成功率突破95%，为机器人学习提供即插即用的高效方案。"
    },
    {
     "title": "华为天才少年一作，港大MaRS Lab拿下IEEE TRO傅京孙纪念最佳论文奖",
     "url": "https://www.qbitai.com/2026/06/437833.html",
     "source": "量子位",
     "date": "2026-06-24",
     "summary": "开源项目GitHub狂揽4.2k Star",
     "is_new": true,
     "lang": "zh",
     "interpretation": "华为天才少年团队获机器人顶刊最佳论文，彰显中国AI人才实力。"
    },
    {
     "title": "AI × OPC的新可能：一个人，就是一支队伍｜2026WAVES",
     "url": "<![CDATA[https://36kr.com/p/3866649515938825?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-06-24",
     "summary": "2026年6月16日，36氪2026 WAVES 新浪潮大会在广州番禺良仓新造创意园开幕。以下这场圆桌论坛是大会首日下午的收官议题，探讨 AI 时代 OPC（One Person Company）的真实生态。 八九十年代，一辆三轮车、一个摊位，就能撑起一门生意。今天的 OPC 看起来形似，但底层逻辑已经彻底不同。 过去个体户的杠杆是体力、经验和地理位置，本质上是基于本地的 LBS 服务，脱不开那个具体的摊位。今天 OPC 的杠杆是代码和媒体——边际成本几乎为零的杠杆，加上 AI 带来的生产力平权，让一个人第一次拥有了接近公司的交付能力。 这场圆桌汇集了 OPC 生态的上中下游：已经跑出商...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "AI与OPC结合让个人能力极大扩展，未来个体即可匹敌传统团队。"
    },
    {
     "title": "绿米向左，萤石向右：穿越周期的幸存者",
     "url": "https://www.leiphone.com/category/smarthome/hqbC4c6g5a8xyBE6.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-23",
     "summary": "2026年春天，智能家居行业迎来了一场冰火两重天的资本叙事。3月29日，绿米联创（下称“绿米”）正式向港交所递交招股说明书，拟主板挂牌上市。这家被称为“小米生态链明星”的企业，将自己包装成“全球AI驱动空间智能基础设施第一股”，估值约8.5亿美元。而在大约600公里外的杭州，萤石网络（下称“萤石”）不久前交出了一份颇为体面的2025年年报：全年营收59.01亿元，归母净利润5.67亿元，同比增长12.43%。中国智能家居市场并非没有故事可讲。艾媒咨询数据显示，2025年国内市场规模已达8154亿元，同比增长29.0%，预计到2030年将突破1.8万亿元。这个苦熬多年的行业，似乎终于要迎来...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "绿米与萤石不同路径穿越周期，展示智能家居行业生存与转型的两种典型策略。"
    }
   ]
  },
  {
   "name": "AI商业与投融资",
   "icon": "💰",
   "color": "#ca8a04",
   "count": 19,
   "cards": [
    {
     "title": "AI researchers continue to leave Google for its rivals",
     "url": "https://techcrunch.com/2026/06/24/ai-researchers-continue-to-leave-google-for-its-rivals/",
     "source": "TechCrunch - AI",
     "date": "2026-06-24",
     "summary": "Top AI researchers Jonas Adler and Alexander Pritzel are leaving Google for Anthropic, following departures from top scientists Noam Shazeer and John Jumper.",
     "is_new": true,
     "lang": "en",
     "interpretation": "顶尖AI人才持续从谷歌流失，凸显其技术领导地位正被对手侵蚀。"
    },
    {
     "title": "The memory chip crunch is paying off for this U.S. company",
     "url": "https://techcrunch.com/2026/06/24/the-memory-chip-crunch-is-paying-off-for-this-u-s-company/",
     "source": "TechCrunch - AI",
     "date": "2026-06-24",
     "summary": "Revenue quadrupled to $41.45 billion compared with the same period a year ago. The company's profit, meanwhile, rose from $1.88 billion to an incredible $28.2 billion year-over-year.",
     "is_new": true,
     "lang": "en",
     "interpretation": "美国公司因存储芯片短缺获利，显示供应链危机中也有赢家。"
    },
    {
     "title": "OpenAI unveils its first custom chip, built by Broadcom",
     "url": "https://techcrunch.com/2026/06/24/openai-unveils-its-first-custom-chip-built-by-broadcom/",
     "source": "TechCrunch - AI",
     "date": "2026-06-24",
     "summary": "Named Jalapeño, the new processor was designed specifically for the unique needs of OpenAI's inference systems.",
     "is_new": true,
     "lang": "en",
     "interpretation": "OpenAI首款自研芯片由博通代工，预示其降低对英伟达依赖的战略布局。"
    },
    {
     "title": "Disney agreed to $50M settlement over claims it made live-TV streaming expensive",
     "url": "https://arstechnica.com/tech-policy/2026/06/disney-agreed-to-50m-settlement-over-claims-it-made-live-tv-streaming-expensive/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-24",
     "summary": "Lawsuit alleged Disney inflated market prices by making carriers include ESPN.",
     "is_new": true,
     "lang": "en",
     "interpretation": "迪士尼和解案警示流媒体捆绑收费可能损害消费者权益。"
    },
    {
     "title": "Google starts lowering Play Store fees, making good on Epic Games settlement",
     "url": "https://arstechnica.com/google/2026/06/google-starts-lowering-play-store-fees-making-good-on-epic-games-settlement/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-24",
     "summary": "A few additional markets will get the lower fees this year ahead of a global rollout in 2027.",
     "is_new": true,
     "lang": "en",
     "interpretation": "谷歌降低应用分成比例，标志数字平台反垄断取得进展。"
    },
    {
     "title": "Congresswoman denies staff used AI to write defense funding amendment",
     "url": "https://www.theverge.com/policy/956394/florida-anna-paulina-luna-anthropic-claude",
     "source": "The Verge - AI",
     "date": "2026-06-24",
     "summary": "Rep. Anna Paulina Luna (R-FL) says her staff used AI for \"spellcheck\" in an amendment summary for a major defense bill, but denies it was used for the bill text itself and says \"NO Legislation is ever drafted with AI.\" Luna issued the response after accounts on X began sharing screenshots of an a...",
     "is_new": true,
     "lang": "en",
     "interpretation": "否认用AI撰写修正案，凸显国会技术伦理与透明度争议。"
    },
    {
     "title": "The $27 million Al proxy war over Alex Bores ends in a draw",
     "url": "https://www.theverge.com/ai-artificial-intelligence/956263/alex-bores-new-york-12th-district-congressional-primary-results",
     "source": "The Verge - AI",
     "date": "2026-06-24",
     "summary": "The expensive, $27 million political proxy war between Anthropic and OpenAI came to a draw last night when Alex Bores, a New York state Assemblyman whose popularity surged after being targeted by a pro-AI super PAC, narrowly lost the Democratic primary to represent New York's 12th Congressional d...",
     "is_new": true,
     "lang": "en",
     "interpretation": "2700万美元AI代理权争夺战平局，暴露AI政治游说激烈竞争。"
    },
    {
     "title": "The Trump White House Is Over Anthropic CEO Dario Amodei",
     "url": "https://www.wired.com/story/the-trump-white-house-is-over-anthropics-dario-amodei/",
     "source": "Wired - AI",
     "date": "2026-06-24",
     "summary": "At high-stakes meetings with the White House, Anthropic's cofounder—a \"weirdo,\" per one official—has been replaced by cofounder Tom Brown.",
     "is_new": true,
     "lang": "en",
     "interpretation": "特朗普团队对Anthropic CEO态度转变，凸显美国政商界在AI监管上的博弈。"
    },
    {
     "title": "Qualcomm Buys Buzzy Chip Startup Modular for Nearly $4 Billion",
     "url": "https://www.wired.com/story/qualcomm-buys-buzzy-chip-startup-modular-for-nearly-dollar4-billion/",
     "source": "Wired - AI",
     "date": "2026-06-24",
     "summary": "Modular, one of the most promising chip software startups of the AI era, heads for a multibillion-dollar exit.",
     "is_new": true,
     "lang": "en",
     "interpretation": "高通近40亿美元收购芯片初创，加速布局AI边缘计算与硬件生态。"
    },
    {
     "title": "Stripe, Anthropic, and OpenAI are backing an effort to stop respiratory infections",
     "url": "https://www.technologyreview.com/2026/06/24/1139621/stripe-anthropic-and-openai-are-backing-an-effort-to-stop-respiratory-infections/",
     "source": "MIT Technology Review - AI",
     "date": "2026-06-24",
     "summary": "The common cold comes for us all—often more than once a year. And there is no way to prevent it. The best you can do is take vitamin C and stay away from people with the sniffles. Now the payment company Stripe, founded by brothers Patrick and John Collison, says it will fund a new…",
     "is_new": true,
     "lang": "en",
     "interpretation": "科技巨头跨界医疗，AI或成呼吸道感染防控新突破口。"
    },
    {
     "title": "Hollywood is bending the knee to OpenAI",
     "url": "https://www.theverge.com/entertainment/954899/luca-guadagnino-artificial-sam-altman-amazon-a24-neon-mubi-chatgpt",
     "source": "The Verge - AI",
     "date": "2026-06-23",
     "summary": "Netflix, A24, Focus Features, and Warner Bros.' Clockwork have all reportedly decided to pass on picking up Artificial - director Luca Guadagnino's new biographical drama about OpenAI cofounder / CEO Sam Altman - for distribution deals. And while Neon and Mubi are still said to be interested in t...",
     "is_new": false,
     "lang": "en",
     "interpretation": "好莱坞向OpenAI妥协，标志AI正深度重塑影视内容生产模式。"
    },
    {
     "title": "Helping build shared standards for advanced AI",
     "url": "https://openai.com/index/helping-build-shared-standards-for-advanced-ai",
     "source": "OpenAI Blog",
     "date": "2026-06-23",
     "summary": "OpenAI helps build shared standards for advanced AI, supporting evaluation frameworks, safety practices, and global cooperation through the Appia Foundation.",
     "is_new": false,
     "lang": "en",
     "interpretation": "推动高级AI共享标准建设，旨在避免技术碎片化与安全风险。"
    },
    {
     "title": "How Omio is building the future of conversational travel",
     "url": "https://openai.com/index/omio",
     "source": "OpenAI Blog",
     "date": "2026-06-23",
     "summary": "Discover how Omio uses OpenAI to power conversational travel experiences, accelerate product development, and transform into an AI-native company.",
     "is_new": false,
     "lang": "en",
     "interpretation": "对话式旅行预订正从概念走向实用，将改变用户出行体验。"
    },
    {
     "title": "圆桌对话：诶? AI! AI这个月、AI这一年、AI这五年｜36氪WAVES2026新浪潮",
     "url": "<![CDATA[https://36kr.com/p/3866900608701449?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-06-24",
     "summary": "“2026年，创投圈的浪潮再次翻涌：AI从技术概念走进产业深水区，硬科技创业从“小众赛道” 变成“主流共识”，年轻的创业者们正在用代码和双手，重新定义中国创新的未来坐标。 每一年，由36氪 · 暗涌主办的WAVES大会，都是中国创投圈的年度风向标。今年的 WAVES 2026以“今年盛夏”为主题，落地广州番禺良仓新造创意园，在两天的时间里，我们汇聚了顶级投资人、产业领袖、新锐创业者，用14场深度圆桌、数十场独立演讲，拆解 AI、硬科技、出海、医疗等核心赛道的底层逻辑，见证那些“少数人” 的坚持，如何汇聚成改变行业的浪潮。” 以下为对话内容，经36氪整理编辑： 海若镜丨36氪暗涌副主编（主...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "通过不同时间维度审视AI发展，帮助行业把握技术演进节奏与未来趋势。"
    },
    {
     "title": "主题圆桌：生命的新算法，AI重构医疗产业全链路｜36氪WAVES2026新浪潮",
     "url": "<![CDATA[https://36kr.com/p/3866854221698313?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-06-24",
     "summary": "“2026年，创投圈的浪潮再次翻涌：AI从技术概念走进产业深水区，硬科技创业从“小众赛道” 变成“主流共识”，年轻的创业者们正在用代码和双手，重新定义中国创新的未来坐标。 每一年，由36氪 · 暗涌主办的WAVES大会，都是中国创投圈的年度风向标。今年的 WAVES 2026以“今年盛夏”为主题，落地广州番禺良仓新造创意园，在两天的时间里，我们汇聚了顶级投资人、产业领袖、新锐创业者，用14场深度圆桌、数十场独立演讲，拆解 AI、硬科技、出海、医疗等核心赛道的底层逻辑，见证那些“少数人” 的坚持，如何汇聚成改变行业的浪潮。” 6月17日下午，WAVES2026新浪潮大会进行了一场圆桌对话，...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "AI正深度重塑医疗全链路，从诊断到治疗将迎来效率与精准度的革命。"
    },
    {
     "title": "圆桌论坛：2026 科技的这一年 “少数，即浪潮” | 36氪WAVES2026新浪潮",
     "url": "<![CDATA[https://36kr.com/p/3866787672773888?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-06-24",
     "summary": "“2026年，创投圈的浪潮再次翻涌：AI从技术概念走进产业深水区，硬科技创业从“小众赛道” 变成“主流共识”，年轻的创业者们正在用代码和双手，重新定义中国创新的未来坐标。 每一年，由36氪 · 暗涌主办的WAVES大会，都是中国创投圈的年度风向标。今年的 WAVES 2026以“今年盛夏”为主题，落地广州番禺良仓新造创意园，在两天的时间里，我们汇聚了顶级投资人、产业领袖、新锐创业者，用14场深度圆桌、数十场独立演讲，拆解 AI、硬科技、出海、医疗等核心赛道的底层逻辑，见证那些“少数人” 的坚持，如何汇聚成改变行业的浪潮。” 以下为对话内容，经36氪整理编辑： 何思翀丨蚂蚁集团NEXTA创...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "少数前沿科技正引领浪潮，强调创新者需在喧嚣中坚持独特方向。"
    },
    {
     "title": "主题圆桌: 迎风而立的人，那些漂洋过海寻找的答案｜36氪WAVES2026新浪潮",
     "url": "<![CDATA[https://36kr.com/p/3866622738060553?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-06-24",
     "summary": "“2026年，创投圈的浪潮再次翻涌：AI从技术概念走进产业深水区，硬科技创业从‘小众赛道’ 变成‘主流共识’，年轻的创业者们正在用代码和双手，重新定义中国创新的未来坐标。 每一年，由36氪 · 暗涌主办的WAVES大会，都是中国创投圈的年度风向标。今年的 WAVES 2026以‘今年盛夏’为主题，落地广州番禺良仓新造创意园，在两天的时间里，我们汇聚了顶级投资人、产业领袖、新锐创业者，用14场深度圆桌、数十场独立演讲，拆解 AI、硬科技、出海、医疗等核心赛道的底层逻辑，见证那些‘少数人’ 的坚持，如何汇聚成改变行业的浪潮。” 以下为演讲内容，经36氪整理编辑： 彭孝秋 | 36氪硬氪主编（...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "聚焦全球化背景下的人才与经验流动，揭示出海者如何寻找新增长答案。"
    },
    {
     "title": "主题演讲：全密态计算，破解AI时代的数据安全难题 | 36氪WAVES2026新浪潮",
     "url": "<![CDATA[https://36kr.com/p/3866604451845377?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-06-24",
     "summary": "“2026年，创投圈的浪潮再次翻涌：AI从技术概念走进产业深水区，硬科技创业从“小众赛道” 变成“主流共识”，年轻的创业者们正在用代码和双手，重新定义中国创新的未来坐标。 每一年，由36氪 · 暗涌主办的WAVES大会，都是中国创投圈的年度风向标。今年的 WAVES 2026以“今年盛夏”为主题，落地广州番禺良仓新造创意园，在两天的时间里，我们汇聚了顶级投资人、产业领袖、新锐创业者，用14场深度圆桌、数十场独立演讲，拆解 AI、硬科技、出海、医疗等核心赛道的底层逻辑，见证那些“少数人” 的坚持，如何汇聚成改变行业的浪潮。” 以下为对话内容，经36氪整理编辑： 于功山丨辰宜科技 联合创始人...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "全密态计算为AI数据安全提供关键解法，是隐私保护与商业落地的平衡点。"
    },
    {
     "title": "诺奖得主转投Anthropic，谷歌48小时连失两大牛，内部信仰崩塌？",
     "url": "https://www.ifanr.com/1669460?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-20",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "诺奖得主接连离开谷歌，暴露顶尖AI人才争夺战与巨头内部创新危机。"
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
     "title": "周鸿祎ISC宣布打造中国版Mythos，360联手信创巨头发起“磐石之盾”安全协作计划",
     "url": "https://www.qbitai.com/2026/06/437838.html",
     "source": "量子位",
     "date": "2026-06-24",
     "summary": "不能坐等风险爆发",
     "is_new": true,
     "lang": "zh",
     "interpretation": "360联手信创巨头构建安全协作计划，打造中国版AI安全生态。"
    },
    {
     "title": "AI 想直接改维基百科？创始人放话：没门，“幻觉”还太严重",
     "url": "https://cn.technode.com/post/2026-06-24/wikipedia-wont-let-ai-edit-articles-cofounder-says/",
     "source": "动点科技 - AI",
     "date": "2026-06-24",
     "summary": "据法新社消息，维基百科联合创始人吉米·威 […]",
     "is_new": true,
     "lang": "zh",
     "interpretation": "维基百科创始人拒绝AI直接编辑，因“幻觉”问题仍不可控。"
    }
   ]
  },
  {
   "name": "其他AI资讯",
   "icon": "🔮",
   "color": "#6b7280",
   "count": 58,
   "cards": [
    {
     "title": "AI was supposed to kill engineering jobs, but new data suggests they’re the most resilient",
     "url": "https://techcrunch.com/2026/06/24/ai-was-supposed-to-kill-engineering-jobs-but-new-data-suggests-theyre-the-most-resilient/",
     "source": "TechCrunch - AI",
     "date": "2026-06-24",
     "summary": "While AI dominates the layoff narrative, engineers are actually making up a larger share of new hires, according to SignalFire data.",
     "is_new": true,
     "lang": "en",
     "interpretation": "工程岗未因AI消亡反而更稳固，颠覆了AI取代白领的普遍预期。"
    },
    {
     "title": "Companies are scrambling to stop employees from maxing out AI budgets with small tasks",
     "url": "https://techcrunch.com/2026/06/24/companies-are-scrambling-to-stop-employees-from-maxing-out-ai-budgets-with-small-tasks/",
     "source": "TechCrunch - AI",
     "date": "2026-06-24",
     "summary": "The tokenmaxxing era was brief. We now appear to be entering the era of token rationing.",
     "is_new": true,
     "lang": "en",
     "interpretation": "企业急堵员工滥用AI预算做琐事，反映AI工具普及后的管理新难题。"
    },
    {
     "title": "Facebook rolls out an AI companion app for creators",
     "url": "https://techcrunch.com/2026/06/24/facebook-rolls-out-an-ai-companion-app-for-creators/",
     "source": "TechCrunch - AI",
     "date": "2026-06-24",
     "summary": "The new app, which is currently being tested with select creators, will have Facebook's recently launched AI creator assistant built into it.",
     "is_new": true,
     "lang": "en",
     "interpretation": "Facebook推AI助手服务创作者，意在巩固内容生态与创作者黏性。"
    },
    {
     "title": "Figma adds code layers, support for animations, more AI features in new update",
     "url": "https://techcrunch.com/2026/06/24/figma-adds-code-layers-support-for-animations-more-ai-features-in-new-update/",
     "source": "TechCrunch - AI",
     "date": "2026-06-24",
     "summary": "Figma's update adds a new code layer, support for motion and shaders, and the ability to create custom plug-ins for various tasks using AI.",
     "is_new": true,
     "lang": "en",
     "interpretation": "Figma更新集成代码层与AI功能，设计工具正从界面向开发全流程延伸。"
    },
    {
     "title": "3 days left to save up to $190 on your TechCrunch Founder Summit 2026 pass",
     "url": "https://techcrunch.com/2026/06/24/3-days-left-to-save-up-to-190-on-techcrunch-founder-summit-2026/",
     "source": "TechCrunch - AI",
     "date": "2026-06-24",
     "summary": "You have just 3 days left to save up to $190 on your pass to TechCrunch Founder Summit 2026 before Early Bird rates end on June 26 at 11:59 p.m. PT. Register today.",
     "is_new": true,
     "lang": "en",
     "interpretation": "TechCrunch峰会早鸟票即将截止，提醒创业者抓住最后优惠窗口。"
    },
    {
     "title": "Introducing the FFASR Leaderboard: Benchmarking ASR in the Real World",
     "url": "https://huggingface.co/blog/ffasr-leaderboard",
     "source": "Hugging Face Blog",
     "date": "2026-06-24",
     "summary": "",
     "is_new": true,
     "lang": "en",
     "interpretation": "新基准测试推动语音识别技术更贴近真实场景应用。"
    },
    {
     "title": "One-two punch delivered in global operation disrupts cybercrime \"assembly line\"",
     "url": "https://arstechnica.com/security/2026/06/one-two-punch-delivered-in-global-operation-disrupts-cybercrime-assembly-line/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-24",
     "summary": "\"Operation Endgame\" simultaneously disrupts two widely used crime tools.",
     "is_new": true,
     "lang": "en",
     "interpretation": "全球联合执法重创网络犯罪产业链，震慑黑产。"
    },
    {
     "title": "Underpromise, overdeliver? Hands-on with the $24,950 Slate auto.",
     "url": "https://arstechnica.com/features/2026/06/we-take-a-ride-in-slates-24950-electric-pickup/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-24",
     "summary": "It has 205 miles of bare-bones range.",
     "is_new": true,
     "lang": "en",
     "interpretation": "低价电动车实测能否兑现承诺，考验市场信任。"
    },
    {
     "title": "Experimental wine bottle tracks oxygen moving through the cork",
     "url": "https://arstechnica.com/science/2026/06/experimental-wine-bottle-tracks-oxygen-moving-through-the-cork/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-24",
     "summary": "The small bit of air in the bottle sees oxygen and other chemicals move in and out.",
     "is_new": true,
     "lang": "en",
     "interpretation": "智能酒瓶技术可监测葡萄酒氧化过程，提升品质管控。"
    },
    {
     "title": "FCC plans ID mandate that could block anonymous use of prepaid burner phones",
     "url": "https://arstechnica.com/tech-policy/2026/06/fcc-plans-id-mandate-that-could-block-anonymous-use-of-prepaid-burner-phones/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-24",
     "summary": "Privacy advocates and domestic violence groups say ID mandate is a big mistake.",
     "is_new": true,
     "lang": "en",
     "interpretation": "实名制预付费手机或削弱匿名通信，引发隐私争议。"
    },
    {
     "title": "Formula E reveals first calendar for GEN4 with lots of real race tracks",
     "url": "https://arstechnica.com/cars/2026/06/formula-e-reveals-first-calendar-for-gen4-with-lots-of-real-race-tracks/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-24",
     "summary": "Brands Hatch, COTA, and Zandvoort will all hold an e-Prix in 2027.",
     "is_new": true,
     "lang": "en",
     "interpretation": "电动方程式新赛季回归专业赛道，提升竞技观赏性。"
    },
    {
     "title": "Elon Musk denies Tesla’s Autopilot caused crash that killed grandmother",
     "url": "https://arstechnica.com/tech-policy/2026/06/elon-musk-denies-teslas-autopilot-caused-crash-that-killed-grandmother/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-24",
     "summary": "Tesla, accused of failing to fix design flaws, blames driver pressing accelerator.",
     "is_new": true,
     "lang": "en",
     "interpretation": "马斯克否认事故责任，自动驾驶安全争议持续发酵。"
    },
    {
     "title": "Military branches restore flu shot requirement after virus swept through base",
     "url": "https://arstechnica.com/health/2026/06/military-branches-restore-flu-shot-requirement-after-virus-swept-through-base/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-24",
     "summary": "Branches received exceptions to Hegseth's policy that made the shot optional.",
     "is_new": true,
     "lang": "en",
     "interpretation": "军队恢复流感疫苗接种，凸显集体防疫对战斗力的关键作用。"
    },
    {
     "title": "Slate Auto's truck builder goes live for its $25k electric pickup",
     "url": "https://arstechnica.com/cars/2026/06/here-are-five-ways-you-could-build-a-slate-ev-from-25000-to-37000/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-24",
     "summary": "From a bare-bones pickup to a loaded, wrapped SUV, here's what some Slates will cost.",
     "is_new": true,
     "lang": "en",
     "interpretation": "2.5万美元电动皮卡量产，或冲击低价电动车市场格局。"
    },
    {
     "title": "We got a sneak peek of the final space shuttle set to go on public display",
     "url": "https://arstechnica.com/space/2026/06/november-launch-set-for-space-shuttle-endeavours-towering-display/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-24",
     "summary": "\"It is an incredible exhibit and incredible sight.\"",
     "is_new": true,
     "lang": "en",
     "interpretation": "最后一架航天飞机将公开展示，标志航天时代实物教育新节点。"
    },
    {
     "title": "White House app auto-downloads to government phones, can't be uninstalled",
     "url": "https://arstechnica.com/tech-policy/2026/06/white-house-app-auto-downloads-to-government-phones-cant-be-uninstalled/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-24",
     "summary": "“It’s shooting pure unadulterated propaganda into our veins,” says one worker.",
     "is_new": true,
     "lang": "en",
     "interpretation": "白宫应用强制预装且无法卸载，引发政府设备隐私与管控争议。"
    },
    {
     "title": "Figma now has AI motion graphics and shader tools",
     "url": "https://www.theverge.com/tech/955831/figma-code-design-tools-config-2026-announcements",
     "source": "The Verge - AI",
     "date": "2026-06-24",
     "summary": "Figma has revealed some new design and coding product updates at its annual Config conference that aim to help creatives \"push their ideas further\" and automate tedious tasks with AI. Part of this is a reimagined canvas that's now optimized for full-stack development, according to Figma, bringing...",
     "is_new": true,
     "lang": "en",
     "interpretation": "Figma新增AI动效与着色器，降低设计师技术门槛，提升创作效率。"
    },
    {
     "title": "A24 Knows You’re Mad About the Google AI Collab",
     "url": "https://www.wired.com/story/a24-knows-youre-mad-about-the-google-ai-collab/",
     "source": "Wired - AI",
     "date": "2026-06-24",
     "summary": "Indie movie fans are upset about Google DeepMind’s $75 million investment in the studio, which comes as AI companies are deepening their influence in Hollywood.",
     "is_new": true,
     "lang": "en",
     "interpretation": "A24回应与谷歌AI合作争议，艺术界对AI介入创作敏感度升级。"
    },
    {
     "title": "I Met With China’s Top AI Experts. They’re Freaking Out, Too",
     "url": "https://www.wired.com/story/ai-arms-race-china-us-cooperation/",
     "source": "Wired - AI",
     "date": "2026-06-24",
     "summary": "The AI arms race between China and the US has researchers on both sides worried about a “Chernobyl moment.”",
     "is_new": true,
     "lang": "en",
     "interpretation": "中国顶尖AI专家的焦虑，折射出全球AI竞赛的紧迫感与不确定性。"
    },
    {
     "title": "Europe’s extreme heat is shutting down power plants",
     "url": "https://www.technologyreview.com/2026/06/24/1139676/europe-heat-power-plants/",
     "source": "MIT Technology Review - AI",
     "date": "2026-06-24",
     "summary": "Europe is in the middle of a record-breaking heat wave, and the grid is being pushed to its limits as people turn to fans and air-conditioning to try to stay cool. Some power plants won’t be online to help handle the load. On June 23, France saw its hottest day since record-keeping began in 1947.…",
     "is_new": true,
     "lang": "en",
     "interpretation": "极端高温威胁能源安全，凸显气候危机对关键基础设施的直接影响。"
    },
    {
     "title": "The Download: introducing the Engineering issue",
     "url": "https://www.technologyreview.com/2026/06/24/1139658/the-download-introducing-engineering-issue/",
     "source": "MIT Technology Review - AI",
     "date": "2026-06-24",
     "summary": "This is today’s edition of The Download, our weekday newsletter that provides a daily dose of what’s going on in the world of technology. Introducing: the Engineering issue We can’t fix everything, but we can be ambitious. We can take on the challenge of making the world better through human inge...",
     "is_new": true,
     "lang": "en",
     "interpretation": "聚焦工程领域创新，揭示技术突破背后的核心工程思维与挑战。"
    },
    {
     "title": "This flying solar-powered platform could deliver better internet from the air",
     "url": "https://www.technologyreview.com/2026/06/24/1138771/solar-powered-platform-delivers-better-internet/",
     "source": "MIT Technology Review - AI",
     "date": "2026-06-24",
     "summary": "As soon as August, a giant silver bullet will cut its way through the dry air of the southwestern US and cross the Pacific to reach the coast of Japan. Once there, the roughly 200-foot-long craft, built by the New Mexico–based company Sceye, will park some 18 kilometers above the ocean’s surface,...",
     "is_new": true,
     "lang": "en",
     "interpretation": "太阳能飞行平台有望突破地面基站限制，实现偏远地区网络覆盖。"
    },
    {
     "title": "All challenges big and small",
     "url": "https://www.technologyreview.com/2026/06/24/1138853/editors-letter-july-2026/",
     "source": "MIT Technology Review - AI",
     "date": "2026-06-24",
     "summary": "When I was 18, I skipped my high school graduation and headed to Kuwait. It was 1991, the first Gulf War had just ended, and the country was in complete chaos. There was little to no electricity, aside from generator power. Rubble and unexploded ordnance were everywhere. Massive oil fires lit up ...",
     "is_new": true,
     "lang": "en",
     "interpretation": "强调应对各类挑战的普遍性，映射技术发展需兼顾宏观与微观问题。"
    },
    {
     "title": "4 days left to save up to $190 on TechCrunch Founder Summit 2026",
     "url": "https://techcrunch.com/2026/06/23/4-days-left-to-save-up-to-190-on-techcrunch-founder-summit-2026/",
     "source": "TechCrunch - AI",
     "date": "2026-06-23",
     "summary": "Four days left to save up to $190 on your pass to TechCrunch Founder Summit 2026 — the ultimate founder bootcamp — before Early Bird rates end on June 26 at 11:59 p.m. PT. Register today.",
     "is_new": false,
     "lang": "en",
     "interpretation": "峰会折扣倒计时，凸显科技行业对高端交流与投资对接的迫切需求。"
    },
    {
     "title": "Google Home will soon get better at recognizing you",
     "url": "https://www.theverge.com/tech/955385/google-home-familiar-faces-clothing",
     "source": "The Verge - AI",
     "date": "2026-06-23",
     "summary": "A new update for Google Home could make it less likely your smart home cameras mistake you for someone else, just because you're facing away from the camera. Starting June 23rd, Google's expanding its facial recognition feature so that people you've tagged in your Familiar Faces library can conti...",
     "is_new": false,
     "lang": "en",
     "interpretation": "谷歌Home提升语音识别精度，将强化智能家居个性化体验。"
    },
    {
     "title": "Why corporate AI super PACs spent $27 million on a local election",
     "url": "https://www.theverge.com/policy/954970/ai-super-pacs-alex-bores-new-york-12th-district",
     "source": "The Verge - AI",
     "date": "2026-06-23",
     "summary": "Hello and welcome to Regulator, the newsletter for Verge subscribers chronicling the misadventures of their favorite tech overlords and Washington swamp creatures. (\"Favorite\" is, of course, subjective.) Not a subscriber yet? Sign up here, especially if you want the hot scoop on quality Amazon Pr...",
     "is_new": false,
     "lang": "en",
     "interpretation": "企业AI超级PAC重金干预地方选举，揭示科技资本对政治决策的渗透。"
    },
    {
     "title": "The Fitbit Air takes a smarter approach to the AI health dumpster fire",
     "url": "https://www.theverge.com/tech/954768/google-fitbit-air-review-fitness-tracker-wearable-ai-health-coach",
     "source": "The Verge - AI",
     "date": "2026-06-23",
     "summary": "Google Health Coach seems to think I'm on the verge of physical collapse. My sleep is not where it needs to be, hence my unimpressive readiness score. My heart rate variability, a measure of how recovered I am, is below baseline. I'm spending too much time in a hot, humid environment, it says, re...",
     "is_new": false,
     "lang": "en",
     "interpretation": "Fitbit Air以更智能方式切入AI健康领域，或终结数据泛滥的乱象。"
    },
    {
     "title": "datasette 1.0a35",
     "url": "https://simonwillison.net/2026/Jun/23/datasette/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-23",
     "summary": "Release: datasette 1.0a35 I'll write more about this one soon, but it's a big release. Three highlights from the release notes: New \"Create table\" interface in the database actions menu, backed by the //-/create JSON API. It can define columns, primary keys, custom column types, NOT NULL constrai...",
     "is_new": false,
     "lang": "en",
     "interpretation": "开源数据探索工具发布重要测试版，预示功能趋于稳定。"
    },
    {
     "title": "OPFS + Pyodide test harness",
     "url": "https://simonwillison.net/2026/Jun/23/opfs-pyodide/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-23",
     "summary": "Tool: OPFS + Pyodide test harness I've been pondering if Datasette Lite - the Python Datasette application run entirely in the browser using Pyodide and WebAssembly - might be able to edit persistent SQLite files stored on the user's computer. That's what OFPS (Origin Private File System) is for,...",
     "is_new": false,
     "lang": "en",
     "interpretation": "浏览器内文件系统与Python运行环境结合，拓展了Web应用边界。"
    },
    {
     "title": "Heads in the game",
     "url": "https://www.technologyreview.com/2026/06/23/1138214/heads-in-the-game/",
     "source": "MIT Technology Review - AI",
     "date": "2026-06-23",
     "summary": "The Argentina v. France final of the 2022 Men’s World Cup in Qatar was shaping up to be one of the most epic games in soccer history. With just 12 minutes remaining in the extra time added to the game to break a tie, the referee had a critical decision to make—and fast. Lionel Messi,…",
     "is_new": false,
     "lang": "en",
     "interpretation": "专注力与游戏化结合，可能提升学习或工作效率的新思路。"
    },
    {
     "title": "Sharing a love for calculus",
     "url": "https://www.technologyreview.com/2026/06/23/1138271/sharing-a-love-for-calculus/",
     "source": "MIT Technology Review - AI",
     "date": "2026-06-23",
     "summary": "The national conversation about the value of education is currently dominated by speculation about the risks and positive potential of AI. Whatever your own perspective on that debate, I hope you’ll be glad to know that MIT is also working on a deeply important but comparatively old-fashioned cha...",
     "is_new": false,
     "lang": "en",
     "interpretation": "微积分知识的分享热潮，反映基础数学教育在社交时代的复兴。"
    },
    {
     "title": "Codex-maxxing for long-running work",
     "url": "https://openai.com/index/codex-maxxing-long-running-work",
     "source": "OpenAI Blog",
     "date": "2026-06-22",
     "summary": "Learn how Jason Liu uses Codex to preserve context, manage complex projects, and help work continue beyond a single prompt.",
     "is_new": false,
     "lang": "en",
     "interpretation": "利用AI编码助手优化长期任务，可能重塑软件开发工作流。"
    },
    {
     "title": "World Cup Scams Are Getting Harder to Spot",
     "url": "https://www.wired.com/story/world-cup-scams-are-getting-harder-to-spot/",
     "source": "Wired - AI",
     "date": "2026-06-22",
     "summary": "From fake tickets to cloned websites, AI is magnifying World Cup scams. Can fans distinguish between what’s real and what’s not?",
     "is_new": false,
     "lang": "en",
     "interpretation": "世界杯诈骗手段翻新，球迷需警惕高度仿真的钓鱼陷阱。"
    },
    {
     "title": "Prompt Injection as Role Confusion",
     "url": "https://simonwillison.net/2026/Jun/22/prompt-injection-as-role-confusion/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-22",
     "summary": "Prompt Injection as Role Confusion First, I absolutely love this: This is a blog-style writeup of the paper. I wish every paper would come with one of these. Academic writing is pretty dry - the impact of a paper can be so much higher if you publish a readable version to accompany the formal one....",
     "is_new": false,
     "lang": "en",
     "interpretation": "提示注入攻击本质是AI混淆角色，暴露大模型安全机制漏洞。"
    },
    {
     "title": "sqlite-utils 4.0rc1 adds migrations and nested transactions",
     "url": "https://simonwillison.net/2026/Jun/21/sqlite-utils-40rc1/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-21",
     "summary": "sqlite-utils is my combined Python library and CLI tool for working with SQLite databases. It provides an extensive set of higher-level operations on top of Python's default sqlite3 package, including support for complex table transformations, automatic table creation from JSON data and a whole l...",
     "is_new": false,
     "lang": "en",
     "interpretation": "数据库工具新增迁移与嵌套事务，提升开发者数据管理灵活性。"
    },
    {
     "title": "sqlite-utils 4.0rc1",
     "url": "https://simonwillison.net/2026/Jun/21/sqlite-utils/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-21",
     "summary": "Release: sqlite-utils 4.0rc1 See sqlite-utils 4.0rc1 adds migrations and nested transactions. Tags: sqlite-utils",
     "is_new": false,
     "lang": "en",
     "interpretation": "版本更新聚焦稳定性，开源工具迭代依赖社区反馈驱动。"
    },
    {
     "title": "Datasette Apps: Host custom HTML applications inside Datasette",
     "url": "https://simonwillison.net/2026/Jun/18/datasette-apps/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-18",
     "summary": "Today we launched a new plugin for Datasette, datasette-apps, with this launch announcement post on the Datasette project blog. That post has the what, but I'm going to expand on that a little bit here to provide the why. The TL;DR Datasette Apps are self-contained HTML+JavaScript applications th...",
     "is_new": false,
     "lang": "en",
     "interpretation": "在Datasette内嵌自定义HTML应用，拓展数据工具生态边界。"
    },
    {
     "title": "datasette-acl 0.6a0",
     "url": "https://simonwillison.net/2026/Jun/18/datasette-acl/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-18",
     "summary": "Release: datasette-acl 0.6a0 This release expands datasette-acl from table-only permissions toward a general resource-sharing system. Alex Garcia did most of the work for this release - we're fleshing out the plugin that will allow multi-user Datasette instances finely grained control over who ca...",
     "is_new": false,
     "lang": "en",
     "interpretation": "新版访问控制工具迭代，强化数据协作中的权限管理。"
    },
    {
     "title": "MolmoMotion: Language-guided 3D motion forecasting",
     "url": "https://huggingface.co/blog/allenai/molmomotion",
     "source": "Hugging Face Blog",
     "date": "2026-06-17",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "语言引导3D运动预测，为机器人交互与自动驾驶提供新思路。"
    },
    {
     "title": "New research shows how AMIE, our medical AI, could help manage health conditions.",
     "url": "https://blog.google/innovation-and-ai/models-and-research/google-research/amie-for-disease-management-in-nature/",
     "source": "Google AI Blog",
     "date": "2026-06-17",
     "summary": "Research in “Nature” shows our conversational AI system matches primary care physicians in complex disease management.",
     "is_new": false,
     "lang": "en",
     "interpretation": "医疗AI管理健康的新研究，展现AI辅助诊疗的临床潜力。"
    },
    {
     "title": "We’re strengthening our presence in Alabama through new investments and community support.",
     "url": "https://blog.google/innovation-and-ai/infrastructure-and-cloud/global-network/alabama-investment-june-2026/",
     "source": "Google AI Blog",
     "date": "2026-06-15",
     "summary": "Google has announced a $1.5 billion investment for 2026 and 2027 to expand its data center campus in Jackson County, Alabama. Operating since 2019 on a repurposed former…",
     "is_new": false,
     "lang": "en",
     "interpretation": "在阿拉巴马州加大投资，体现企业深耕本地经济与社区发展的战略布局。"
    },
    {
     "title": "Our new community investments in Virginia support local jobs and expand energy affordability.",
     "url": "https://blog.google/innovation-and-ai/infrastructure-and-cloud/global-network/virginia-community-investments/",
     "source": "Google AI Blog",
     "date": "2026-06-11",
     "summary": "We’re helping build the state’s next-generation workforce and investing in energy programs.",
     "is_new": false,
     "lang": "en",
     "interpretation": "弗吉尼亚州新投资聚焦就业与能源可负担性，直接惠及当地民生。"
    },
    {
     "title": "The latest AI news we announced in May 2026",
     "url": "https://blog.google/innovation-and-ai/technology/ai/google-ai-updates-may-2026/",
     "source": "Google AI Blog",
     "date": "2026-06-05",
     "summary": "Here are Google’s latest AI updates from May 2026",
     "is_new": false,
     "lang": "en",
     "interpretation": "2026年5月AI动态集中发布，预示技术迭代进入新阶段。"
    },
    {
     "title": "5 ways Google Search can level up your thrift and vintage shopping",
     "url": "https://blog.google/products-and-platforms/products/search/thrifting-tips/",
     "source": "Google AI Blog",
     "date": "2026-06-03",
     "summary": "Uncover second-hand scores with AI tools in Google Search and Shopping.",
     "is_new": false,
     "lang": "en",
     "interpretation": "谷歌搜索功能升级，让二手与复古购物更智能高效，改变消费体验。"
    },
    {
     "title": "Take our I/O 2026 quiz, vibe coded in Google AI Studio.",
     "url": "https://blog.google/innovation-and-ai/technology/ai/io-2026-vibe-coded-quiz/",
     "source": "Google AI Blog",
     "date": "2026-05-29",
     "summary": "We used Google AI Studio to vibe code a quiz about our top I/O 2026 announcements.",
     "is_new": false,
     "lang": "en",
     "interpretation": "通过AI Studio“氛围编程”生成大会问答，降低技术门槛，激发创意参与。"
    },
    {
     "title": "百度智能云发布百度千帆Token Plan企业版，提供GLM-5.2等模型",
     "url": "https://www.qbitai.com/2026/06/438174.html",
     "source": "量子位",
     "date": "2026-06-24",
     "summary": "已率先完成智谱GLM-5.2适配",
     "is_new": true,
     "lang": "zh",
     "interpretation": "百度千帆企业版引入GLM-5.2，加速大模型在商业场景的定制化落地。"
    },
    {
     "title": "Future Tech谁会成为下一个AI巨头？这175个早期项目站上WAIC2026",
     "url": "https://www.qbitai.com/2026/06/438157.html",
     "source": "量子位",
     "date": "2026-06-24",
     "summary": "报名通道已开启。",
     "is_new": true,
     "lang": "zh",
     "interpretation": "WAIC2026上175个早期项目亮相，揭示未来AI巨头可能诞生的赛道与方向。"
    },
    {
     "title": "物理AI第一块万亿市场，在公路货运先跑通闭环了",
     "url": "https://www.qbitai.com/2026/06/437853.html",
     "source": "量子位",
     "date": "2026-06-24",
     "summary": "申通安能用真金白银下单",
     "is_new": true,
     "lang": "zh",
     "interpretation": "公路货运率先实现物理AI商业闭环，万亿市场大门正式开启。"
    },
    {
     "title": "2026世界人工智能大会SAIL奖TOP30及青年优秀论文奖TOP20发布",
     "url": "https://www.qbitai.com/2026/06/437698.html",
     "source": "量子位",
     "date": "2026-06-24",
     "summary": "卓越人工智能引领者奖颁布",
     "is_new": true,
     "lang": "zh",
     "interpretation": "SAIL奖与青年论文奖发布，为世界AI大会筛选前沿创新成果。"
    },
    {
     "title": "智能座舱之王「转身」物理AI，高通需要被重估了",
     "url": "https://www.qbitai.com/2026/06/432494.html",
     "source": "量子位",
     "date": "2026-06-24",
     "summary": "不争最强算力，只求无处不在",
     "is_new": true,
     "lang": "zh",
     "interpretation": "高通从智能座舱转向物理AI，其芯片价值与市场定位需重新评估。"
    },
    {
     "title": "1999 元的 AI 眼镜，Meta 想让你像买墨镜一样买它",
     "url": "https://www.ifanr.com/1669886?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-24",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": true,
     "lang": "zh",
     "interpretation": "Meta推低价AI眼镜，目标让智能穿戴像墨镜一样普及。"
    },
    {
     "title": "微信 AI 全网最细体验，我又爱上了刷朋友圈",
     "url": "https://www.ifanr.com/1669694?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-23",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "微信AI深度体验揭示其如何改变社交互动，让刷朋友圈变得更有趣高效。"
    },
    {
     "title": "第二属性大于 AI 能力，像编剧一样做产品｜对话美图AKA小白",
     "url": "https://www.ifanr.com/1669611?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-23",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "强调产品叙事与用户情感共鸣比单纯AI技术更重要，是差异化竞争核心。"
    },
    {
     "title": "响应国家「体重管理年」，蚂蚁阿福发起「科学减重1亿斤」行动",
     "url": "https://www.leiphone.com/category/industrynews/Bqf1PqF4RtuxHXnP.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-23",
     "summary": "“国家喊你减肥了！”别以为这只是网络调侃。数据显示，当前我国成人超重率为34.3%、肥胖率16.4%，合起来超过50%，相当于每两名成年人就有一人体重亮“黄灯”。为此，国家卫健委等16部门于2024年联合启动“体重管理年”，今年正是收官之年。为响应号召，6月22日，全国最大的健康AI应用“蚂蚁阿福”发起“科学减重1亿斤”健康行动，希望帮用户科学管理体重，守护健康。01“1亿斤”怎么减，阿福打算这么干一、补贴智能硬件。许多家庭尚未配备体脂秤，阿福将集中采购，以“地板价”供应给用户。因为只有了解自己的体脂率、肌肉率等身体数据，才能科学管理体重。二、升级AI功能，当“AI私教”。连接智能硬件后...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "蚂蚁集团以数字化手段推动全民健康目标，体现企业社会责任与政策响应结合。"
    },
    {
     "title": "华为和 Google 都在抢！手机小组件，为什么是 AI 必争之地？｜AI 器物志",
     "url": "https://www.ifanr.com/1669508?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-22",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "手机小组件成AI入口，华为与谷歌争夺显示其是下一代交互与生态控制关键。"
    },
    {
     "title": "微信终于要给 AI 手机开门了｜AI 器物志",
     "url": "https://www.ifanr.com/1669522?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-22",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "微信开放AI接口，标志超级App与手机系统深度融合，开启新生态竞争。"
    },
    {
     "title": "早报｜曝苹果新CEO重建设计团队/微信原生AI助手「小微」灰度上线/马斯克拿下7800亿天价薪酬",
     "url": "https://www.ifanr.com/1669504?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-22",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "苹果设计团队重组与微信AI助手上线，预示科技巨头加速AI与硬件融合。"
    },
    {
     "title": "索尼谈未来游戏开发：让 AI 负责打杂，设计师才能专心搞创意",
     "url": "https://cn.technode.com/post/2026-06-22/sony-deletes-mention-of-pc-from-annual-strategy-report-in-favour-of-a-gushing-about-ai/",
     "source": "动点科技 - AI",
     "date": "2026-06-22",
     "summary": "如今的游戏行业，几乎每三款新游戏里就有一 […]",
     "is_new": false,
     "lang": "zh",
     "interpretation": "索尼用AI解放设计师重复劳动，或推动游戏行业创意效率革命。"
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
   "stars": 43005,
   "forks": 7724,
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
   "stars": 26727,
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
   "stars": 18169,
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
   "stars": 15541,
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
   "forks": 1300,
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
   "stars": 4713,
   "forks": 556,
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