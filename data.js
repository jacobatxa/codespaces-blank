const APP_DATA = {
 "today": "2026-06-08",
 "fetched_at": "2026-06-08T10:03:58",
 "total": 150,
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
   "count": 13,
   "color": "#f43f5e"
  },
  "动点科技 - AI": {
   "count": 2,
   "color": "#10b981"
  },
  "少数派 - AI": {
   "count": 2,
   "color": "#f97316"
  },
  "雷锋网 - AI": {
   "count": 12,
   "color": "#8b5cf6"
  },
  "36氪 - AI": {
   "count": 14,
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
   "count": 31
  },
  {
   "name": "AI Agent与智能体",
   "icon": "🤯",
   "color": "#d97706",
   "count": 20
  },
  {
   "name": "具身智能与机器人",
   "icon": "🤖",
   "color": "#059669",
   "count": 4
  },
  {
   "name": "多模态与AIGC",
   "icon": "🎨",
   "color": "#dc2626",
   "count": 3
  },
  {
   "name": "AI硬件与芯片",
   "icon": "💾",
   "color": "#0891b2",
   "count": 9
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
   "count": 25
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
   "count": 55
  }
 ],
 "sections": [
  {
   "name": "大模型与基础架构",
   "icon": "🧠",
   "color": "#7c3aed",
   "count": 31,
   "cards": [
    {
     "title": "When Claude changed, everything changed: Managing AI blast radius in production",
     "url": "https://venturebeat.com/orchestration/when-claude-changed-everything-changed-managing-ai-blast-radius-in-production",
     "source": "VentureBeat - AI",
     "date": "2026-06-08",
     "summary": "Our system did one thing, and it did it well: It turned natural-language questions into API calls.The users were analysts, account managers, and operations leads. They knew what data they needed, but assembling it manually meant pulling from four dashboards, two BI tools, and a Salesforce report ...",
     "is_new": true,
     "lang": "en",
     "interpretation": "模型行为突变影响生产环境，需警惕AI系统不可控风险。"
    },
    {
     "title": "OpenAI unveils Lockdown Mode to protect sensitive data from prompt injection attacks",
     "url": "https://techcrunch.com/2026/06/06/openai-unveils-lockdown-mode-to-protect-sensitive-data-from-prompt-injection-attacks/",
     "source": "TechCrunch - AI",
     "date": "2026-06-06",
     "summary": "Even with Lockdown Mode, ChatGPT could be still vulnerable to prompt injections, but the goal is to reduce the likelihood that sensitive data gets shared in the process.",
     "is_new": false,
     "lang": "en",
     "interpretation": "OpenAI推出锁定模式，旨在防御提示注入攻击，提升AI安全防护能力。"
    },
    {
     "title": "OpenAI Help: Lockdown Mode",
     "url": "https://simonwillison.net/2026/Jun/5/openai-help-lockdown-mode/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-05",
     "summary": "OpenAI Help: Lockdown Mode OpenAI first teased this in February, but now it's live and \"rolling out to eligible personal accounts, including Free, Go, Plus, and Pro, and self-serve ChatGPT Business accounts\": Lockdown Mode is designed to help prevent the final stage of data exfiltration from a pr...",
     "is_new": false,
     "lang": "en",
     "interpretation": "OpenAI推出锁定模式，强化用户隐私与数据安全控制能力。"
    },
    {
     "title": "Microsoft AI chief says company was “set free” from OpenAI to pursue superintelligence",
     "url": "https://venturebeat.com/technology/microsoft-ai-chief-says-company-was-set-free-from-openai-to-pursue-superintelligence",
     "source": "VentureBeat - AI",
     "date": "2026-06-05",
     "summary": "For three years, Microsoft's artificial intelligence story has been inseparable from OpenAI. The partnership — cemented by a cumulative investment exceeding $13 billion — gave Microsoft early access to the most advanced AI models on the planet, catapulting its Copilot products into the enterprise...",
     "is_new": false,
     "lang": "en",
     "interpretation": "微软AI主管称公司已从OpenAI“解放”，全力冲刺超级智能研发。"
    },
    {
     "title": "How Endava is redesigning software delivery around AI agents",
     "url": "https://openai.com/index/endava-frontiers",
     "source": "OpenAI Blog",
     "date": "2026-06-04",
     "summary": "Learn how Endava is using AI agents, ChatGPT Enterprise, and Codex to accelerate software delivery, automate workflows, and build an AI-native culture across the enterprise.",
     "is_new": false,
     "lang": "en",
     "interpretation": "技术公司重构软件交付流程，AI代理正从辅助工具升级为核心生产力。"
    },
    {
     "title": "Dreaming: Better memory for a more helpful ChatGPT",
     "url": "https://openai.com/index/chatgpt-memory-dreaming",
     "source": "OpenAI Blog",
     "date": "2026-06-04",
     "summary": "ChatGPT introduces a new memory system to better remember preferences, keeping context fresh and relevant across conversations.",
     "is_new": false,
     "lang": "en",
     "interpretation": "记忆增强技术让ChatGPT更懂用户，个性化交互体验迎来质变突破。"
    },
    {
     "title": "Anthropic says 80% of its new production code is now authored by Claude — how your enterprise can keep up",
     "url": "https://venturebeat.com/technology/anthropic-says-80-of-its-new-production-code-is-now-authored-by-claude-how-your-enterprise-can-keep-up",
     "source": "VentureBeat - AI",
     "date": "2026-06-04",
     "summary": "Anthropic co-founder and CEO Dario Amodei said it was coming, but it still feels like a milestone: More than 80% of the code merged into Anthropic’s production codebase in May wasn't authored by humans, but by its own AI model, Claude, according to a new report shared by the record-breaking AI st...",
     "is_new": false,
     "lang": "en",
     "interpretation": "Claude生成80%生产代码，标志AI已从辅助工具变为企业核心生产力。"
    },
    {
     "title": "Introducing new capabilities to GPT-Rosalind",
     "url": "https://openai.com/index/introducing-new-capabilities-to-gpt-rosalind",
     "source": "OpenAI Blog",
     "date": "2026-06-03",
     "summary": "GPT-Rosalind advances life sciences research with enhanced biological reasoning, medicinal chemistry expertise, genomics analysis, and experimental workflow capabilities.",
     "is_new": false,
     "lang": "en",
     "interpretation": "增强生物信息学AI能力，加速药物研发与基因数据分析。"
    },
    {
     "title": "How Wasmer used Codex to build a Node.js runtime for the edge",
     "url": "https://openai.com/index/wasmer",
     "source": "OpenAI Blog",
     "date": "2026-06-03",
     "summary": "See how Wasmer used Codex with GPT-5.5 to build a Node.js runtime for the edge, accelerating development 10x to 20x and shipping in weeks instead of months.",
     "is_new": false,
     "lang": "en",
     "interpretation": "用AI自动生成边缘计算运行时，降低开发门槛与部署成本。"
    },
    {
     "title": "Uber Caps Usage of AI Tools Like Claude Code to Manage Costs",
     "url": "https://simonwillison.net/2026/Jun/3/uber-caps-usage/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-03",
     "summary": "Uber Caps Usage of AI Tools Like Claude Code to Manage Costs I wrote the other day about Uber blowing its 2026 AI budget in four months, and how that wasn't particularly surprising given they would have set that budget in 2025, before anyone could have predicted how popular token-burning coding a...",
     "is_new": false,
     "lang": "en",
     "interpretation": "企业主动限制AI工具使用，反映成本与效率的现实博弈。"
    },
    {
     "title": "Microsoft's new MAI models",
     "url": "https://simonwillison.net/2026/Jun/2/microsofts-new-models/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-02",
     "summary": "Microsoft announced two new text LLMs this morning - MAI-Thinking-1 (reasoning, 1T parameters, 35B active, available to \"select early partners\") and MAI-Code-1-Flash (137B Parameters, 5B active, \"purpose-built for GitHub Copilot and VS Code to deliver high performance and lower cost [...] rolling...",
     "is_new": false,
     "lang": "en",
     "interpretation": "微软新模型或重塑AI竞争格局，影响开发者生态与云服务市场。"
    },
    {
     "title": "datasette-agent-micropython 0.1a0",
     "url": "https://simonwillison.net/2026/Jun/2/datasette-agent-micropython/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-02",
     "summary": "Release: datasette-agent-micropython 0.1a0 I want Datasette Agent to be able to generate and execute Python code safely. This alpha is looking promising so far. GPT-5.5 has so far failed to break out of the sandbox! Tags: python, sandboxing, datasette, webassembly, datasette-agent, micropython",
     "is_new": false,
     "lang": "en",
     "interpretation": "在Datasette中集成MicroPython，简化数据工具的自定义脚本能力。"
    },
    {
     "title": "California Brown Pelican",
     "url": "https://simonwillison.net/2026/Jun/2/sighting-367841339/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-02",
     "summary": "California Brown Pelican, in Fort Mason, CA, USI'm at the Microsoft Build conference today, held at Fort Mason in San Francisco. There are California Brown Pelicans diving into the water directly behind venue! Tags: microsoft, ai, generative-ai, llms, llm-release",
     "is_new": false,
     "lang": "en",
     "interpretation": "加州褐鹈鹕的生存状况反映海洋生态健康，是环境监测的关键指标。"
    },
    {
     "title": "Introducing Mellum2: A 12B Mixture-of-Experts Model by JetBrains",
     "url": "https://huggingface.co/blog/JetBrains/mellum2-launch",
     "source": "Hugging Face Blog",
     "date": "2026-06-01",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "JetBrains推出12B参数混合专家模型，或为代码智能工具带来新突破。"
    },
    {
     "title": "Beyond LLMs: Why Scalable Enterprise AI Adoption Depends on Agent Logic",
     "url": "https://huggingface.co/blog/ibm-research/agent-logic-and-scalable-ai-adoption",
     "source": "Hugging Face Blog",
     "date": "2026-06-01",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "企业AI落地不能只靠大模型，智能体逻辑才是规模化应用的核心。"
    },
    {
     "title": "How we used Gemini to build Google I/O 2026",
     "url": "https://blog.google/innovation-and-ai/technology/ai/io-2026-google-ai/",
     "source": "Google AI Blog",
     "date": "2026-06-01",
     "summary": "Learn how Googlers used AI to produce Google I/O 2026.",
     "is_new": false,
     "lang": "en",
     "interpretation": "用Gemini构建Google I/O大会，展示AI如何深度参与大型活动策划。"
    },
    {
     "title": "9 demos of Gemini Omni and Gemini 3.5 in action",
     "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-omni-3-5-videos/",
     "source": "Google AI Blog",
     "date": "2026-05-29",
     "summary": "Watch 9 videos showing the capabilities of Gemini Omni and Gemini 3.5, announced at Google I/O 2026.",
     "is_new": false,
     "lang": "en",
     "interpretation": "谷歌新一代多模态模型Gemini Omni和3.5版本功能集中演示，体现AI能力跃升。"
    },
    {
     "title": "Catch up on 12 major I/O 2026 moments",
     "url": "https://blog.google/innovation-and-ai/technology/ai/io-2026-keynote-moment-videos/",
     "source": "Google AI Blog",
     "date": "2026-05-28",
     "summary": "Here are 12 of the biggest Google I/O 2026 keynote moments, including news about Gemini Omni, Gemini 3.5 Flash and more.",
     "is_new": false,
     "lang": "en",
     "interpretation": "快速回顾谷歌年度开发者大会12个关键发布，把握行业技术风向。"
    },
    {
     "title": "难上热搜的高考数学，我拿ChatGPT和豆包PK了一把！",
     "url": "https://www.qbitai.com/2026/06/432425.html",
     "source": "量子位",
     "date": "2026-06-08",
     "summary": "豆包硬刚ChatGPT",
     "is_new": true,
     "lang": "zh",
     "interpretation": "实测ChatGPT与豆包解答高考数学题，直观对比中外大模型逻辑推理能力。"
    },
    {
     "title": "大模型看Coding，具身看Picking！原力灵机已抢先入局",
     "url": "https://www.qbitai.com/2026/06/432417.html",
     "source": "量子位",
     "date": "2026-06-08",
     "summary": "轻视它就会错过整个时代",
     "is_new": true,
     "lang": "zh",
     "interpretation": "原力灵机同时布局AI编程与具身智能抓取技术，抢占两大前沿赛道。"
    },
    {
     "title": "斯坦福Jeannette Bohg教授：抛弃“人手崇拜”，灵巧手要「解构物理」 | ICRA 2026",
     "url": "https://www.leiphone.com/category/robot/7bIdz0Vi001jq6lt.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-08",
     "summary": "2026年6月3日，ICRA 2026维也纳会议“操作、控制与具身设计”主题Keynote环节，斯坦福大学计算机科学系的副教授，同时也是斯坦福交互式感知实验室（Interactive Perception Lab）的负责人Jeannette Bohg以一个反问开场——“我们还需要灵巧手吗？” 这个问题之所以有力，恰恰因为它指向了当下机器人操作领域最真实的张力：二指夹爪（two-finger gripper）配合端到端大模型，已经能完成Rubik魔方、精细拼装等令人叹服的任务。那么，高自由度、高复杂度的灵巧手（dexterous hand）的价值究竟在哪里？ Jeannette Bohg给...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "灵巧手研究突破仿生局限，转向物理交互本质重构抓取逻辑。"
    },
    {
     "title": "3D 还是 2D？哥大李昀烛：通用机器人基础模型的解药在“中间地带”  | ICRA 2026",
     "url": "https://www.leiphone.com/category/robot/LPcnomdfvrGTm2cO.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-08",
     "summary": "作者｜岑峰2026年6月1日，机器人领域最重要的学术会议国际机器人与自动化会议（ICRA）在奥地利维也纳召开。在首日举行的“Synthetic Data for Robot Learning” Workshop上，哥伦比亚大学助理教授李昀烛（Yunzhu Li）发表了题为“Structured World Models as Scalable Data Enginesfor Robot Policy Training and Evaluation”的演讲，直击了当今具身智能领域面临的核心痛点：真实物理交互数据采集成本极高，且模型试错与评估极其困难。为此，他提出将结构化世界模型（Struc...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "指出2D与3D融合的中间表征，可能是机器人基础模型突破方向。"
    },
    {
     "title": "改变全球速度的AI，付款却卡在上一个时代",
     "url": "<![CDATA[https://36kr.com/p/3844199957236227?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-06-08",
     "summary": "2026年，全球平均每小时就有一家新的AI公司诞生。 AI行业的竞争已经白热化到如此程度：大模型的参数在卷，推理速度在卷，应用落地的速度在卷，就连融资PPT的故事密度也在卷。一时间，所有人的目光都盯在“前端”——谁的模型更强，谁的产品先跑出来，谁就能在这场军备竞赛里站稳脚跟。 但在这场喧嚣之外，一个被大多数人忽视的问题，正在悄悄侵蚀每一家AI企业的利润：钱，到底能不能顺畅地流动起来？ 当AI企业的采购清单越来越全球化，支付链路的每一个断点，都意味着实实在在的成本损耗和效率内耗。而当产品开始面向全球用户变现，跨币种结算的汇损、本地支付方式的碎片化与计费模式的复杂性，又在收款侧筑起了另一道门...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "揭示AI技术高速发展与传统支付体系之间的效率鸿沟。"
    },
    {
     "title": "8点1氪丨八家上市公司集中公告“补税”；ChatGPT将迎来史上最大幅度升级；高考新增AI监考员，自动截取异常录像",
     "url": "<![CDATA[https://36kr.com/p/3843764238174729?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-06-08",
     "summary": "今日热点导览 AI等机器网络请求量首超人类 瑞幸咖啡回应拿铁去冰仅半杯 宗馥莉自有品牌KELLYONE回归 多家低成本航空公司对登机箱登机收费 黄仁勋会见韩国两大游戏商代表共商游戏AI合作方案 TOP3大新闻 八家上市公司集中公告“补税” 6月1日至6日，不到一周内，八家A股上市公司先后披露补缴税款公告。这八家公司合计补缴税款及滞纳金约4亿元。其中，苹果中国最大授权经销商爱施德（002416.SZ）一家补缴3.08亿元，占八家总额的近八成，该公司披露，仅滞纳金就达1.23亿元。对部分公司而言，这笔补缴金额已接近甚至超过去年一整年的利润。如电子材料企业宏昌电子（603002.SH）需补缴4...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "上市公司补税、ChatGPT大升级、高考AI监考，三件事均涉监管与变革。"
    },
    {
     "title": "阿里巴巴升级大模型组织架构，成立Token Foundry事业部",
     "url": "<![CDATA[https://36kr.com/newsflashes/3844339389254145?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-06-08",
     "summary": "36氪获悉，6月8日，阿里巴巴宣布合并通义大模型事业部和未来生活实验室，成立Token Foundry事业部，由集团CEO吴泳铭直接负责。据了解，此次调整涉及到一批AI业务。周靖人将担任阿里巴巴首席科学家，牵头成立阿里巴巴AI未来研究院，专注前沿AI科技的探索与突破。郑波带领Happy Horse、Happy Oyster等加入Token Foundry事业部。",
     "is_new": true,
     "lang": "zh",
     "interpretation": "阿里成立Token Foundry，标志其AI战略从模型研发转向商业化落地。"
    },
    {
     "title": "macOS 存储管理漫谈：去重是节约空间的最好方法",
     "url": "https://sspai.com/prime/story/macos-storage-management-deduplication",
     "source": "少数派 - AI",
     "date": "2026-06-05",
     "summary": "虽然最近各种用LLM帮忙整理电脑里的文件、删除垃圾数据的帖子很火，但我天然对这种LLM用法抱有一丝警惕，我始终相信电脑里存在的文件都有自己的意义。所以我就想在这篇文章里和大家聊聊macOS里的存储管理 ...查看全文本文为会员文章，出自《单篇文章》，订阅后可阅读全文。",
     "is_new": false,
     "lang": "zh",
     "interpretation": "去重技术成存储管理核心，反映数据爆炸时代用户对空间利用率的迫切需求。"
    },
    {
     "title": "NTU 曹子昂教授团队：破解 3D 标注成本难题，只需一张图片丨CVPR 2026",
     "url": "https://www.leiphone.com/category/ai/gOCTM6K2fNwaBttQ.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-05",
     "summary": "PhysX-Anythingt：可从一张照片自动生成可用于机器人训练的物理 3D资产。 作者丨郑佳美、樊天骄 编辑丨郑佳美 在生成式 AI 进入 3D 内容生产之后，行业最先解决的是“看起来像不像”的问题：一个模型能不能从文字或图片生成外观完整、纹理逼真、形状合理的 3D 物体。但随着机器人、具身智能、数字孪生、AR / VR 和工业仿真的发展，真正制约应用落地的矛盾已经变了。现实世界中的物体不是静态摆件，而是带有尺度、材料、重量、关节、摩擦、碰撞和功能关系的物理对象。一个柜子不仅要有柜门，还要知道门轴在哪里、能向哪个方向打开；一副眼镜不仅要有镜框和镜腿，还要知道镜腿能绕哪个关节折叠；一...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "单图生成3D标注，大幅降低自动驾驶等场景数据成本，推动AI落地效率革命。"
    },
    {
     "title": "Coding 能力，正在颠覆大模型的估值逻辑",
     "url": "https://www.leiphone.com/category/industrynews/bwyozCVtFIOJynck.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-05",
     "summary": "大模型赛道的估值逻辑，正在被一个变量粗暴重构。它不是参数，不是月活，不是多模态，是你能不能做好Coding。把四家中国大模型公司的数据拉出来，这条线清晰得不需要统计检验：Coding 能力突出的 DeepSeek 正在洽谈国内 AI 公司史上最大单笔融资 70 亿美元，估值或达 590亿美元。月之暗面在 Kimi K2.5 把 Coding 能力拉满之后，20 天收入超 2025 全年，ARR 3 个月冲到 2 亿美元，半年内四轮融资合计超 39 亿美元，估值飙到 200 亿美元。智谱 GLM-5 拿下 SWE-bench Verified 开源模型榜首，MaaS 平台 ARR 同比暴涨...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "编程能力成AI估值新标尺，技术落地能力比模型参数更决定商业价值。"
    },
    {
     "title": "早报｜曝苹果Vision Pro系列被砍/多地高考将查验智能眼镜/DeepSeek首轮融资规模约500亿元",
     "url": "https://www.ifanr.com/1668044?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-04",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "苹果砍掉头显转攻AI眼镜，预示消费电子新风口转向轻量化穿戴。"
    },
    {
     "title": "一夜之间，ChatGPT 变成了第二个 Claude",
     "url": "https://www.ifanr.com/1667898?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-03",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "ChatGPT界面与功能向Claude靠拢，反映AI助手设计趋同化竞争加剧。"
    },
    {
     "title": "早报｜微软发布Windows「梦中神机」/腾讯云DeepSeek-V4最高降价97.5%/徕卡相机或被中国资本收购",
     "url": "https://www.ifanr.com/1667902?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-03",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "腾讯云大模型大幅降价，或引发AI服务价格战，加速行业普及。"
    }
   ]
  },
  {
   "name": "AI Agent与智能体",
   "icon": "🤯",
   "color": "#d97706",
   "count": 20,
   "cards": [
    {
     "title": "datasette-agent-edit 0.1a0",
     "url": "https://simonwillison.net/2026/Jun/7/datasette-agent-edit/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-07",
     "summary": "Release: datasette-agent-edit 0.1a0 I'm planning several plugins for Datasette Agent which can make edits to existing pieces of text - things like collaborative Markdown editing, updating large SQL queries, and editing SVG files. Agentic editing of text is a little tricky to get right. My favorit...",
     "is_new": true,
     "lang": "en",
     "interpretation": "轻量级编辑工具发布，推动AI代理在数据库交互中实用化。"
    },
    {
     "title": "Agentic AI solved coding — and exposed every other problem in software engineering",
     "url": "https://venturebeat.com/technology/agentic-ai-solved-coding-and-exposed-every-other-problem-in-software-engineering",
     "source": "VentureBeat - AI",
     "date": "2026-06-07",
     "summary": "Agentic AI is now a core part of the engineering process, driving massive execution leverage and helping us generate more code than ever before. Yet, a difficult question I’ve increasingly heard from business leaders is: if we’re shipping code faster than ever, why aren’t our products improving a...",
     "is_new": true,
     "lang": "en",
     "interpretation": "AI解决编码后，暴露软件工程中需求、测试等深层顽疾。"
    },
    {
     "title": "Microsoft's AI Futurist explains how he uses Copilot — and the real-world problems enterprises are solving with agents",
     "url": "https://venturebeat.com/orchestration/microsofts-ai-futurist-explains-how-he-uses-copilot-and-the-real-world-problems-enterprises-are-solving-with-agents",
     "source": "VentureBeat - AI",
     "date": "2026-06-05",
     "summary": "Microsoft used its Build 2026 conference this week to push a clear message: agents are rapidly moving into production throughout enterprise systems, and the winning platform will be the one that gives them reliable context, governance, identity, memory — and secure access to enterprise data. The ...",
     "is_new": false,
     "lang": "en",
     "interpretation": "微软AI专家详解Copilot实战案例，展示企业级智能体解决真实问题。"
    },
    {
     "title": "AI agents are learning on the job — just not for your whole team",
     "url": "https://venturebeat.com/orchestration/ai-agents-are-learning-on-the-job-just-not-for-your-whole-team",
     "source": "VentureBeat - AI",
     "date": "2026-06-05",
     "summary": "When someone on a team corrects an AI agent — better prompts, better feedback, better context — that improvement disappears the moment a colleague opens the same tool. The correction doesn't transfer, and the next person starts from zero.The problem compounds in multi-agent workflows, where teams...",
     "is_new": false,
     "lang": "en",
     "interpretation": "AI智能体正逐步上岗，但尚未覆盖全员，体现技术落地的渐进性。"
    },
    {
     "title": "Meta's AI support agent bound recovery emails for anyone who asked. Your SOC never saw an alert.",
     "url": "https://venturebeat.com/security/meta-ai-support-agent-recovery-email-takeover-soc-audit-grid",
     "source": "VentureBeat - AI",
     "date": "2026-06-05",
     "summary": "Meta's AI support agent bound recovery emails to accounts for whoever asked, and SOCs never saw an alert. An authorized agent writes a log of legitimate transactions, so nothing in the detection stack fired. Attackers asked the bot to make the change, took the one-time code it sent, and ran the p...",
     "is_new": false,
     "lang": "en",
     "interpretation": "Meta的AI客服自动绑定恢复邮箱，安全团队竟未察觉异常。"
    },
    {
     "title": "The Download: AI hacking beyond Mythos, and chatbots’ impact on our brains",
     "url": "https://www.technologyreview.com/2026/06/05/1138452/the-download-ai-hacking-mythos-chatbots-brain-impacts/",
     "source": "MIT Technology Review - AI",
     "date": "2026-06-05",
     "summary": "This is today’s edition of The Download, our weekday newsletter that provides a daily dose of what’s going on in the world of technology. The Meta hack shows there’s more to AI security than Mythos On Monday, reports emerged that attackers had used Meta’s AI customer support agent to steal Instag...",
     "is_new": false,
     "lang": "en",
     "interpretation": "AI黑客突破神话，聊天机器人正重塑人类认知与思维模式。"
    },
    {
     "title": "The Meta hack shows there’s more to AI security than Mythos",
     "url": "https://www.technologyreview.com/2026/06/05/1138437/the-meta-hack-shows-theres-more-to-ai-security-than-mythos/",
     "source": "MIT Technology Review - AI",
     "date": "2026-06-05",
     "summary": "On June 5, 404 Media reported that attackers had been using Meta’s AI customer support agent to steal Instagram accounts. Their approach was simple: They asked the agent to link the accounts to email addresses that they controlled, and the agent complied. One attacker broke into the dormant Obama...",
     "is_new": false,
     "lang": "en",
     "interpretation": "Meta被黑事件揭示AI安全漏洞远超技术神话，需警惕系统性风险。"
    },
    {
     "title": "Designing the hf CLI as an agent-optimized way to work with the Hub",
     "url": "https://huggingface.co/blog/hf-cli-for-agents",
     "source": "Hugging Face Blog",
     "date": "2026-06-04",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "优化命令行工具设计，让开发者更高效地通过AI代理管理模型库。"
    },
    {
     "title": "Adding MCP Tools to Reachy Mini",
     "url": "https://huggingface.co/blog/adding-mcp-tools-to-reachy-mini",
     "source": "Hugging Face Blog",
     "date": "2026-06-03",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "为机器人接入MCP工具，拓展了物理世界的AI应用边界。"
    },
    {
     "title": "Holo3.1: Fast & Local Computer Use Agents",
     "url": "https://huggingface.co/blog/Hcompany/holo31",
     "source": "Hugging Face Blog",
     "date": "2026-06-02",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "本地化、低延迟的计算机视觉代理，提升隐私与实时交互性。"
    },
    {
     "title": "micropython-wasm 0.1a1",
     "url": "https://simonwillison.net/2026/Jun/2/micropython-wasm/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-02",
     "summary": "Release: micropython-wasm 0.1a1 Fixes for some limitations that emerged while I was trying to use this to build datasette-agent-micropython. Tags: python, sandboxing, webassembly, micropython",
     "is_new": false,
     "lang": "en",
     "interpretation": "MicroPython在WebAssembly上运行，为浏览器端嵌入式开发打开新可能。"
    },
    {
     "title": "Rehumanizing global health care with agentic AI",
     "url": "https://www.technologyreview.com/2026/06/02/1137827/rehumanizing-global-health-care-with-agentic-ai/",
     "source": "MIT Technology Review - AI",
     "date": "2026-06-02",
     "summary": "The global health care sector is under increasing strain. Decades of chronic underinvestment and constraints in recruitment have coincided with a surge in demand for services for aging populations. Gaps in provision are already taking a toll, with fragmented access to care and high rates of stres...",
     "is_new": false,
     "lang": "en",
     "interpretation": "用智能体AI重构全球医疗，有望缓解资源不均，但需解决数据隐私难题。"
    },
    {
     "title": "对话 MiniMax 择因：Agent 终会超过人类，我们又将何去何从？",
     "url": "https://www.ifanr.com/1668337?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-08",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": true,
     "lang": "zh",
     "interpretation": "当AI代理能力超越人类时，需重新定义人机协作与社会伦理边界。"
    },
    {
     "title": "独家丨华为天才少年王裕鑫创业，首月完成数千万级首轮融资",
     "url": "https://www.leiphone.com/category/yanxishe/SinorLMYmWes9Kqq.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-08",
     "summary": "聚焦「流式视频生成」，攻破实时视频生成难题。 作者丨郑佳美 编辑丨马晓宁 雷峰网 AI 科技评论独家获悉，华为“天才少年”、元石科技早期核心技术成员王裕鑫已创立形界智能，方向聚焦“流式视频生成”。据悉，形界智能已在成立首月完成数千万级首轮融资。形界智能切入的并非传统文生视频、图生视频工具，而是更强调实时性和连续交互的视频生成方向。简单来说，其目标是让视频像“流”一样持续生成，并能在用户交互过程中实时响应、不断续写。这一方向也延续了王裕鑫此前在视频 Agent 和实时视频模型上的积累。此前，他曾担任 Muset 视频 Agent 技术负责人，并参与海外 AI 陪伴产品的技术落地；在元石科技...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "天才少年创业获资本追捧，AI芯片赛道再添实力派玩家。"
    },
    {
     "title": "腾讯汤道生评价姚顺雨、混元 3和元宝",
     "url": "<![CDATA[https://36kr.com/p/3844018911889924?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-06-08",
     "summary": "文｜王毓婵 编辑｜张雨忻 6月5日，腾讯云AI产业应用大会最受外界关注的是什么？ 毫无疑问，是汤道生与姚顺雨的对话。 在这场发布了一系列覆盖20多个垂直场景Agent的大会上，因为产品过于To B，也没有提及大家最关注的“微信AI”，导致外界的关注重心几乎全部被那场对话吸引走。 腾讯集团高级执行副总裁、云与智慧产业事业群CEO汤道生，在对谈中问腾讯首席AI科学家、腾讯混元大语言模型及AI Infra负责人姚顺雨，“很多人说腾讯在AI上慢了，你觉得我们真的慢了吗？” 姚顺雨回答说：“感觉应该是我问你的问题。” 姚顺雨随后提到了两个判断标准——1.AI是一个短期游戏还是长期游戏？2.它会是一...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "腾讯高层对混元3与元宝的公开评价，反映内部AI战略态度。"
    },
    {
     "title": "事关数据赋能人工智能发展，国家层面首次系统部署",
     "url": "<![CDATA[https://36kr.com/newsflashes/3844349427992833?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-06-08",
     "summary": "今天，国家数据局发布《关于推进行业高质量数据集建设行动的实施方案》，这是国家层面首次对数据赋能人工智能发展作出的系统性部署。《实施方案》围绕行业高质量数据集供给、流通、应用等关键环节，部署六大专项行动，提出面向人工智能应用需求，持续推进文本、图像、音视频等多模态高质量数据集建设；聚焦智能体、具身智能和世界模型等重点方向，要求加快推进数据集建设；引导具备条件的地区因地制宜开展数据标注创新试验区建设。（央视新闻）",
     "is_new": true,
     "lang": "zh",
     "interpretation": "国家首次系统部署数据赋能AI，标志顶层设计进入实操阶段。"
    },
    {
     "title": "从感知智能到智能体 AI：高通汽车中国布局深化加速",
     "url": "https://www.ifanr.com/1668242?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-06",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "高通深化汽车AI布局，从感知到智能体，预示智能座舱与自动驾驶竞争进入新阶段。"
    },
    {
     "title": "从 INSPIRE 创想者大会看华为云：它正在 AI 时代给自己找一个更清晰的位置",
     "url": "https://www.leiphone.com/category/CorporateServices/93NsFoqxglrbXa26.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-05",
     "summary": "今年上半年，外界看华为云在AI上的战略，常常会有一种模糊感。过去6个月，云厂商的AI叙事变得越来越具体：阿里云、火山引擎都在讲模型调用量，讲MaaS收入，腾讯云目前在讲爆款应用。相比之下，华为云在AI时代究竟要把自己的核心位置放在哪里，外界此前并不总是看得很清楚。这一次华为云INSPIRE创想者大会给了一个很好的观察窗口。从这次大会来看，华为云正在把自己的位置讲得更清楚：向下，它要做智能体时代的“硅基黑土地”；向上，它要从医疗、具身智能、制造、科研这些行业场景里，寻找AI商业化的出口。华为云不想只被MaaS定义在这次活动媒体群访中，雷峰网抛给了华为云CEO一个很直接的问题：今年上半年，阿...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "华为云借创想者大会重塑定位，显示云厂商正从基础设施转向AI赋能者角色。"
    },
    {
     "title": "刚刚，Windows「梦中神机」来了，把你的 PC 变成 Agent 工位",
     "url": "https://www.ifanr.com/1667971?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-03",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "微软将PC升级为AI代理平台，可能颠覆传统人机交互与自动化工作流。"
    },
    {
     "title": "制糖工厂发布 AI 小电拼 Mirror，支持 AI Agent 原生接入",
     "url": "https://www.ifanr.com/1667908?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-03",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "充电硬件接入AI Agent，开启智能设备能源管理的自动化新场景。"
    }
   ]
  },
  {
   "name": "具身智能与机器人",
   "icon": "🤖",
   "color": "#059669",
   "count": 4,
   "cards": [
    {
     "title": "Catch up on the Dialogues stage at Google I/O 2026.",
     "url": "https://blog.google/innovation-and-ai/technology/ai/io-2026-dialogues-recap/",
     "source": "Google AI Blog",
     "date": "2026-05-22",
     "summary": "A recap of the 2026 I/O Dialogues, where leaders discuss the future of AI, quantum computing, robotics and creativity.",
     "is_new": false,
     "lang": "en",
     "interpretation": "谷歌I/O 2026对话环节精华汇总，聚焦AI伦理、行业应用等深度议题。"
    },
    {
     "title": "ICRA 2026最佳论文奖，千寻智能首席科学家、清华高阳团队FP3入围",
     "url": "https://www.leiphone.com/category/robot/tTanpzX7mu3CDICJ.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-08",
     "summary": "原文作者：谭梓馨原文链接：https://mp.weixin.qq.com/s/llcXE2be4oNWItL_0ydVZw2026年IEEE国际机器人与自动化会议（IEEE ICRA 2026）是机器人与自动化领域的顶级学术盛会，于6月1日至5日在奥地利维也纳举办。今年，FP3、HITTER等多篇华人团队论文入围最佳论文奖提名，头部科技此前曾报道过HITTER，今天来看另一篇研究FP3。FP3论文的导师之一高阳是清华大学跨学科信息科学研究院（IIIS）的助理教授，同时他也是国内具身独角兽千寻智能（Spirit AI）的联创兼首席科学家。下面，一起来看看FP3做了哪些创新工作。三维基座带...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "中国团队入围顶会最佳论文，具身智能感知技术获国际认可。"
    },
    {
     "title": "CVPR 2026 几何智能研究盘点：从看见形状，到理解运动与交互",
     "url": "https://www.leiphone.com/category/ai/DY9VohqHITkbu2i9.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-08",
     "summary": "可动结构、4D 表征与高效重建登场。 作者丨郑佳美 编辑丨马晓宁 2026 年 6 月 1 日，国际机器人与自动化会议（ICRA）在奥地利维也纳召开。次日上午的自动驾驶与导航报告环节，雷峰网GAIR 2021大会嘉宾、上海交通大学教授王贺升发表了题为《Learning to Navigate: From Scene Understanding to Decision Makin》的演讲。3D 视觉研究正在从“重建形状”走向“理解空间”。过去，一个模型只要能生成外观合理的三维物体，就已经足够令人关注。但现在，真正重要的问题正在变得更复杂：模型能否判断一个物体内部哪些部件可以运动，能否理解动...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "计算机视觉从静态识别转向动态理解，推动机器人自主决策进化。"
    },
    {
     "title": "普渡大学Aniket Bera教授：可靠自主机器人的“安全阀”，藏在“可检查接口”里 | ICRA 2026",
     "url": "https://www.leiphone.com/category/robot/msKJXBpOWYL23WVc.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-08",
     "summary": "2026年6月2日，国际机器人与自动化会议（ICRA 2026）在奥地利维也纳进入第二天。普渡大学（Purdue University）计算机科学系教授、IDEAS Lab实验室主任Aniket Bera发表了题为\"RobotsSafe Navigation in Unstructured & Human-Centered Environments\"（在非结构化与以人为中心环境中安全导航）的主题演讲，系统阐述了他对鲁棒自主机器人系统的一整套方法论。 他的核心论断直指当前自主系统研发中的结构性缺陷：今天绝大多数“成功”的自主系统，本质上是因为我们把世界变简单了，而不是机器人真正理解了世界。...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "强调可检查接口是确保机器人安全可控的关键技术路径。"
    }
   ]
  },
  {
   "name": "多模态与AIGC",
   "icon": "🎨",
   "color": "#dc2626",
   "count": 3,
   "cards": [
    {
     "title": "Meta made its own AI-generated clickbait news feed",
     "url": "https://www.theverge.com/ai-artificial-intelligence/944235/meta-app-ai-clickbait-articles",
     "source": "The Verge - AI",
     "date": "2026-06-06",
     "summary": "Facebook has long been filled with feeds of clickbait articles. Now, Meta is making its own clickbait articles with AI. The standalone Meta AI app now has a \"For You\" section that populates a list of clickbait-style stories for you to read. But the topics, images, and text are all AI-generated - ...",
     "is_new": false,
     "lang": "en",
     "interpretation": "Meta自建AI生成点击诱饵新闻，加剧信息生态中虚假内容的泛滥风险。"
    },
    {
     "title": "Nemotron 3.5 Content Safety: Customizable Multimodal Safety for Global Enterprise AI",
     "url": "https://huggingface.co/blog/nvidia/nemotron-3-5-content-safety",
     "source": "Hugging Face Blog",
     "date": "2026-06-04",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "英伟达推出可定制多模态安全方案，助力企业全球化AI部署合规。"
    },
    {
     "title": "郭明錤：苹果已砍掉 Vision Pro，改玩 AI 眼镜了",
     "url": "https://cn.technode.com/post/2026-06-04/kuo-apple-vision-pro/",
     "source": "动点科技 - AI",
     "date": "2026-06-04",
     "summary": "知名分析师郭明錤发帖称，苹果 XR 头显 […]",
     "is_new": false,
     "lang": "zh",
     "interpretation": "苹果战略转向AI眼镜，或加速AR/VR行业从笨重头显向轻量化演进。"
    }
   ]
  },
  {
   "name": "AI硬件与芯片",
   "icon": "💾",
   "color": "#0891b2",
   "count": 9,
   "cards": [
    {
     "title": "What to expect from WWDC 2026: Siri’s highly anticipated revamp and Apple Intelligence updates",
     "url": "https://techcrunch.com/2026/06/06/what-to-expect-from-wwdc-2026-siris-highly-anticipated-revamp-and-apple-intelligence-updates/",
     "source": "TechCrunch - AI",
     "date": "2026-06-06",
     "summary": "Apple's WWDC nears: Here's what you can look forward to.",
     "is_new": false,
     "lang": "en",
     "interpretation": "WWDC 2026将迎来Siri重大改版与苹果AI更新，或重塑智能助手体验。"
    },
    {
     "title": "This is your laptop… on AI",
     "url": "https://www.theverge.com/podcast/944058/ai-laptop-nvidia-build-gemini-spark-vergecast",
     "source": "The Verge - AI",
     "date": "2026-06-05",
     "summary": "We're now deep into developer conference season, and one of the themes so far is the relentless conviction from Big Tech companies that AI is going to change everything about how we do everything. Nvidia's Jensen Huang made that clearer than anyone this week, when he described a completely new wa...",
     "is_new": false,
     "lang": "en",
     "interpretation": "AI赋能笔记本电脑，预示个人计算设备将迎来智能化革命。"
    },
    {
     "title": "Biodefense in the Intelligence Age",
     "url": "https://openai.com/index/biodefense-in-the-intelligence-age",
     "source": "OpenAI Blog",
     "date": "2026-06-04",
     "summary": "An action plan for AI-powered biological resilience",
     "is_new": false,
     "lang": "en",
     "interpretation": "生物防御进入智能时代，意味着技术对抗生物威胁的范式正在被重塑。"
    },
    {
     "title": "让矩阵归模拟，让逻辑归数字！这家中国团队重新定义了计算机",
     "url": "https://www.qbitai.com/2026/06/432062.html",
     "source": "量子位",
     "date": "2026-06-08",
     "summary": "黄仁勋要算一万步，这家公司的芯片只需一步",
     "is_new": true,
     "lang": "zh",
     "interpretation": "新型计算架构突破传统冯·诺依曼瓶颈，或开启算力革命新纪元。"
    },
    {
     "title": "马斯克唱多美光，目前产能远不及芯片实际需求",
     "url": "<![CDATA[https://36kr.com/newsflashes/3844350469376515?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-06-08",
     "summary": "马斯克近日在摩根大通全球总部的采访中唱多美光科技。他表示，“真正的瓶颈在于芯片制造能力”，目前美光的产能还远不及芯片实际需求。（财联社）",
     "is_new": true,
     "lang": "zh",
     "interpretation": "马斯克看好美光产能缺口，暗示芯片供需矛盾将持续。"
    },
    {
     "title": "英国首相斯塔默斥资5.33亿美元投资人工智能芯片，支持“主权计算”",
     "url": "<![CDATA[https://36kr.com/newsflashes/3844346048743689?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-06-08",
     "summary": "英国首相基尔·斯塔默周一宣布了一项旨在发展自主计算能力的新战略，承诺投入约4亿英镑（5.33亿美元）用于采购专用人工智能芯片，并支持本土初创企业。“我们将利用公共采购的力量来支持英国的创新精神，”斯塔默周一在伦敦科技周大会上的演讲中表示。（新浪财经）",
     "is_new": true,
     "lang": "zh",
     "interpretation": "英国大手笔投资AI芯片，意在构建自主可控的算力主权。"
    },
    {
     "title": "OpenAI芯片核心叛逃Anthropic！就在量产前夜",
     "url": "https://www.qbitai.com/2026/06/431499.html",
     "source": "量子位",
     "date": "2026-06-07",
     "summary": "帮OpenAI从零造出第一颗芯片的人，转投Anthropic了",
     "is_new": true,
     "lang": "zh",
     "interpretation": "OpenAI芯片核心团队量产前夜叛逃Anthropic，暴露AI军备竞赛中人才争夺白热化。"
    },
    {
     "title": "比亚迪重磅发布中国首款4nm制程智驾芯片 布局高等级自动驾驶",
     "url": "https://www.leiphone.com/category/transportation/7dY2VaaFzmB8aCxi.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-05",
     "summary": "2026年5月28日，比亚迪召开“敢为”智能化战略发布会，董事长王传福表示：“电动化上半场看电池，智能化下半场看芯片。”由此，比亚迪重磅发布中国首款4nm制程智驾芯片——璇玑A3，加速推进智能化下半场进程，引领全球汽车行业智能化变革。此外，继为智能泊车安全兜底后，比亚迪再次率先承诺为城市领航安全兜底1年，并宣布全系车型均可搭载天神之眼B 辅助驾驶激光版，选装价格12000元，开创全民城市领航时代，让好技术人人可享、人人放心享！ 从人的真实需求出发 比亚迪设立智能化下半场三大目标过去几年，全球迎来新一轮人工智能发展浪潮，感知硬件、芯片的发展速度超乎想象，这些推动着汽车从单纯的出行工具进化为...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "比亚迪自研4nm芯片，标志中国车企向芯片核心技术突破，加速自动驾驶自主化。"
    },
    {
     "title": "他用WPS笔记，把AI报错变成了可复用的“避坑指南”",
     "url": "https://www.leiphone.com/category/industrynews/my3uIlmkVcHIKgu3.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-05",
     "summary": "“AI Coding 最大的风险不是写不出代码，而是忘记了自己为什么做出某个判断。”这不是一句抽象判断，而是工程师曹健在反复处理 AI 报错后得到的真实体会。6月5日，在金山办公旗下「WPS AI Next」活动现场，他从自己的 AI Coding 工作流讲起，分享了使用 WPS 笔记沉淀技术经验的故事。当天发布的 WPS 笔记，是一款面向个人知识管理场景的 AI 原生多模态笔记产品，主张“随心记录，轻松有序”。对曹健来说，这句话并不抽象。它对应的是一次半夜两点的报错、一套 47 万字的资料库，以及一次从 30 分钟到 3 分钟的排查效率变化。那次GPU飙到100%后，他多年的积累没能帮...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "用笔记工具沉淀AI错误经验，体现知识管理对提升AI使用效率的实用价值。"
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
     "title": "Profiling in PyTorch (Part 1): A Beginner's Guide to torch.profiler",
     "url": "https://huggingface.co/blog/torch-profiler",
     "source": "Hugging Face Blog",
     "date": "2026-05-29",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "入门PyTorch性能分析工具，帮助开发者定位瓶颈，优化模型训练效率。"
    },
    {
     "title": "5分钟AI长视频不翻车！国产开源框架杀到全球第一梯队",
     "url": "https://www.qbitai.com/2026/06/431401.html",
     "source": "量子位",
     "date": "2026-06-07",
     "summary": "高一致性、低延迟、实时超分全梭哈",
     "is_new": true,
     "lang": "zh",
     "interpretation": "国产开源框架实现5分钟长视频AI生成，标志中国在视频生成领域跻身全球第一梯队。"
    }
   ]
  },
  {
   "name": "AI商业与投融资",
   "icon": "💰",
   "color": "#ca8a04",
   "count": 25,
   "cards": [
    {
     "title": "Notion restores access to Anthropic after service disruption",
     "url": "https://techcrunch.com/2026/06/07/notion-restores-access-to-anthropic-after-service-disruption/",
     "source": "TechCrunch - AI",
     "date": "2026-06-07",
     "summary": "Notion's head of product said he was \"astonished\" at “the amount of people RT-ing this.\"",
     "is_new": true,
     "lang": "en",
     "interpretation": "服务中断暴露AI工具依赖风险，企业需备灾预案。"
    },
    {
     "title": "OpenAI is still working on that ‘super app’",
     "url": "https://techcrunch.com/2026/06/07/openai-is-still-working-on-that-super-app/",
     "source": "TechCrunch - AI",
     "date": "2026-06-07",
     "summary": "\"Chat is dead\" — at least, according to a senior OpenAI employee.",
     "is_new": true,
     "lang": "en",
     "interpretation": "超级应用野心显示OpenAI正整合功能争夺生态入口。"
    },
    {
     "title": "The Trump administration might take an equity stake in OpenAI",
     "url": "https://techcrunch.com/2026/06/06/the-trump-administration-might-take-an-equity-stake-in-openai/",
     "source": "TechCrunch - AI",
     "date": "2026-06-06",
     "summary": "President Donald Trump said he's discussing deals \"where the American people can benefit from the success of AI.\"",
     "is_new": false,
     "lang": "en",
     "interpretation": "特朗普政府或入股OpenAI，标志政企深度绑定AI产业的新模式。"
    },
    {
     "title": "Crypto-Funded Chinese Peptide Labs Are Booming",
     "url": "https://www.wired.com/story/security-news-this-week-crypto-funded-chinese-peptide-labs-are-booming/",
     "source": "Wired - AI",
     "date": "2026-06-06",
     "summary": "Plus: Hackers use Meta’s AI bots to hack Instagram accounts, Anthropic helps NSA hackers, a decades-long GPS satellite mystery may have been solved, and more.",
     "is_new": false,
     "lang": "en",
     "interpretation": "加密货币资助的中国肽实验室兴起，揭示生物科技与虚拟资本的新结合。"
    },
    {
     "title": "Startup Battlefield 200 applications officially close in 3 days",
     "url": "https://techcrunch.com/2026/06/05/startup-battlefield-200-applications-officially-close-in-3-days/",
     "source": "TechCrunch - AI",
     "date": "2026-06-05",
     "summary": "Applications for Startup Battlefield 200 officially close on June 8, 11:59 p.m. PT. Don't wait any longer. Secure your shot at competing on the Disrupt Stage at TechCrunch Disrupt 2026 this October at San Francisco's Moscone West.",
     "is_new": false,
     "lang": "en",
     "interpretation": "创业大赛报名即将截止，预示新一批高潜力初创公司即将亮相，吸引投资界关注。"
    },
    {
     "title": "The most interesting startups right now want to get you off your phone",
     "url": "https://techcrunch.com/video/the-most-interesting-startups-right-now-want-to-get-you-off-your-phone/",
     "source": "TechCrunch - AI",
     "date": "2026-06-05",
     "summary": "While the AI fundraising machine keeps breaking its own records, some founders are building in the other direction. Mirror founder Brynn Putnam just raised money for Board, a startup focused on bringing people together through in-person games and social experiences. Cyberdeck creators are going v...",
     "is_new": false,
     "lang": "en",
     "interpretation": "新兴创业公司聚焦减少手机依赖，反映用户对数字健康需求增长，或催生新消费趋势。"
    },
    {
     "title": "The ‘together tech’ wave might be the most intriguing startup bet of 2026",
     "url": "https://techcrunch.com/podcast/the-together-tech-wave-might-be-the-most-intriguing-startup-bet-of-2026/",
     "source": "TechCrunch - AI",
     "date": "2026-06-05",
     "summary": "While the AI fundraising machine keeps breaking its own records, some founders are building in the other direction. Mirror founder Brynn Putnam just raised money for Board, a startup focused on bringing people together through in-person games and social experiences. Cyberdeck creators are going v...",
     "is_new": false,
     "lang": "en",
     "interpretation": "“协同技术”浪潮被视为2026年最值得关注的创业方向，可能重塑人机协作与产业效率模式。"
    },
    {
     "title": "Small modular nuclear reactor reaches criticality in first test",
     "url": "https://arstechnica.com/science/2026/06/first-us-test-of-modular-reactor-reaches-criticality/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-05",
     "summary": "The reactor, from a startup called Antares, isn't ready to generate power yet.",
     "is_new": false,
     "lang": "en",
     "interpretation": "小型模块化核反应堆首次达到临界状态，标志着清洁能源技术取得关键突破，加速核电小型化进程。"
    },
    {
     "title": "S&P 500 rejects SpaceX, also blocking entry for OpenAI and Anthropic",
     "url": "https://arstechnica.com/tech-policy/2026/06/sp-500-blocks-fast-spacex-entry-wont-waive-rule-for-unprofitable-ai-firms/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-05",
     "summary": "SpaceX won’t get easy access to billions of dollars from passive investors.",
     "is_new": false,
     "lang": "en",
     "interpretation": "标普500拒绝SpaceX等AI巨头，反映传统指数对新兴科技股仍存偏见。"
    },
    {
     "title": "This AI startup says it can tell if a script will make a hit film",
     "url": "https://www.theverge.com/ai-artificial-intelligence/943531/ai-script-quilty-simon-horsman-daniel-wood",
     "source": "The Verge - AI",
     "date": "2026-06-05",
     "summary": "When Quilty hit the industry trades earlier this year, the AI startup promised that its tool could accurately predict a film's success just by reading the script. When people actually got a chance to experiment with Quilty's product, though, they were left skeptical. Even with all the available d...",
     "is_new": false,
     "lang": "en",
     "interpretation": "AI预测剧本票房潜力，可能颠覆传统影视投资决策模式。"
    },
    {
     "title": "OpenAI and Anthropic May Be Rivals, but Investors Aren’t Picking Sides",
     "url": "https://www.wired.com/story/openai-and-anthropic-may-be-rivals-but-their-investors-arent-choosing-sides/",
     "source": "Wired - AI",
     "date": "2026-06-05",
     "summary": "“Why wouldn’t you want to be in both Pepsi and Coke?” says one venture capitalist. “It’s the same here.”",
     "is_new": false,
     "lang": "en",
     "interpretation": "投资者同时押注OpenAI与Anthropic，说明AI赛道竞争未定，资本更重赛道而非站队。"
    },
    {
     "title": "The AI IPO Race Heats Up, DOGE Whistleblower Sues Elon Musk, and Instagram Gets Hacked",
     "url": "https://www.wired.com/story/uncanny-valley-podcast-ai-ipo-race-elon-musk-doge-whistleblower-instagram-hacking-incident/",
     "source": "Wired - AI",
     "date": "2026-06-04",
     "summary": "On Uncanny Valley, we dive into the IPO bonanza that the top AI companies are embarking on to the point where some real estate listings are looking for not just regular old cash, but Anthropic stock.",
     "is_new": false,
     "lang": "en",
     "interpretation": "AI公司争相IPO、内部举报与安全漏洞，折射出行业野蛮生长下的多重风险。"
    },
    {
     "title": "Jeff Bezos Is Funding a Wild Hunt for the Brain’s ‘Core Algorithm’",
     "url": "https://www.wired.com/story/jeff-bezos-is-funding-a-wild-hunt-for-the-brains-core-algorithm/",
     "source": "Wired - AI",
     "date": "2026-06-04",
     "summary": "With $500 million in funding and a reported $2.5 billion valuation, Flourish wants to reinvent AI by putting real neurons under the microscope.",
     "is_new": false,
     "lang": "en",
     "interpretation": "贝佐斯押注破解大脑核心算法，可能颠覆AI与神经科学的融合路径。"
    },
    {
     "title": "OpenAI and Anthropic Sign Letter to Prevent AI-Developed Biological Weapons",
     "url": "https://www.wired.com/story/openai-anthropic-letter-ai-biological-weapons/",
     "source": "Wired - AI",
     "date": "2026-06-04",
     "summary": "Leading AI labs, executives, and scientists are sending a letter to lawmakers urging them to improve tracking of synthetic DNA sequences that could be used for bioweapons.",
     "is_new": false,
     "lang": "en",
     "interpretation": "两大AI巨头联合承诺防范生物武器，展现行业对技术滥用的主动约束。"
    },
    {
     "title": "A blueprint for democratic governance of frontier AI",
     "url": "https://openai.com/index/frontier-safety-blueprint",
     "source": "OpenAI Blog",
     "date": "2026-06-03",
     "summary": "OpenAI outlines a blueprint for U.S. governance of frontier AI, proposing a federal framework for safety, resilience, and national security.",
     "is_new": false,
     "lang": "en",
     "interpretation": "为前沿AI治理提供民主化框架，关乎技术发展方向与公众利益。"
    },
    {
     "title": "OpenAI public policy agenda",
     "url": "https://openai.com/index/public-policy-agenda",
     "source": "OpenAI Blog",
     "date": "2026-06-03",
     "summary": "OpenAI outlines its public policy agenda for AI, including safety, youth protection, workforce transition, and global standards to ensure AI benefits society.",
     "is_new": false,
     "lang": "en",
     "interpretation": "明确AI监管与创新平衡立场，影响全球科技政策走向。"
    },
    {
     "title": "Travelers deploys AI-powered claims countrywide with OpenAI",
     "url": "https://openai.com/index/travelers",
     "source": "OpenAI Blog",
     "date": "2026-06-02",
     "summary": "Travelers built an AI-powered Claim Assistant with OpenAI to guide customers through filing claims, provide 24/7 support, and scale operations during peak demand.",
     "is_new": false,
     "lang": "en",
     "interpretation": "保险业大规模落地AI理赔，验证大模型在传统行业的降本增效潜力。"
    },
    {
     "title": "The Download: AI can run your admin department now",
     "url": "https://www.technologyreview.com/2026/06/02/1138277/the-download-ai-tips-small-businesses-admin/",
     "source": "MIT Technology Review - AI",
     "date": "2026-06-02",
     "summary": "This is today’s edition of The Download, our weekday newsletter that provides a daily dose of what’s going on in the world of technology. How small businesses can leverage AI From accounting to design to market research and product development, there’s a staggering breadth of skills needed to run...",
     "is_new": false,
     "lang": "en",
     "interpretation": "AI接管行政办公，预示企业运营效率将迎来质变，但需关注就业冲击。"
    },
    {
     "title": "派早报：乘用车越造越重，12 年增重近 400 公斤",
     "url": "https://sspai.com/post/110847",
     "source": "少数派 - AI",
     "date": "2026-06-08",
     "summary": "乘用车越造越重，12 年增重近 400 公斤iFixit 拆解华强北山寨苹果产品Cloudflare 收购 Vite 背后公司rsync 疑因 AI 参与维护出现 bug，引发争议OpenAI 与美国政府商讨捐赠股权美国平均上路车龄达到 13 年看看就行的简讯少数派的近期动态你可能错过的好文章查看全文",
     "is_new": true,
     "lang": "zh",
     "interpretation": "汽车增重趋势警示安全与环保矛盾，倒逼轻量化材料技术突破。"
    },
    {
     "title": "产品观察 | 小米创始员工范典创业AI硬件，做了台“无摩擦”的睡眠床头灯",
     "url": "<![CDATA[https://36kr.com/p/3844006775360002?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-06-08",
     "summary": "作者 | 邱晓芬 编辑 | 袁斯来 「格物科技」的创始人范典，是当下智能硬件赛道的一个“异类”。 作为喝过小米粥的小米创始员工，范典曾任曾小米物联网平台部总经理、AIoT战略委员会主席。以大厂高管履历拿笔钱，以最短时间做出款硬件上众筹，依托媒体造势，再滚动更多融资是这两年硬件赛道创业很常见的打法。 但范典做第一款产品用了三年。 2024年，智能硬件还是很冷僻的赛道，范典的选择更是小众中的小众。 他没做当时已被市场验证过的AI可穿戴设备、AI床垫，转而做起一个 全新的品类—— AI睡眠床头灯（Sleepal AI Lamp）。 很少人清楚这三年发生了什么。范典几乎不接受采访，也鲜少见投资人...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "小米创始员工跨界AI硬件，主打无感交互的睡眠场景产品。"
    },
    {
     "title": "「华超神控」获亿元天使系列融资，加速打造新一代AI超声脑机接口平台 | 36氪首发",
     "url": "<![CDATA[https://36kr.com/p/3841459663030532?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-06-08",
     "summary": "文｜胡香赟 编辑｜海若镜 36氪获悉，近日，新一代AI超声脑机公司华超神控（BCI-Sonics）已完成亿元人民币级天使轮系列融资。天使轮融资由经纬创投领投，天使+轮由德联资本、道远资本联合领投，循光资本持续担任独家财务顾问。募集资金将用于推动公司的技术验证与产业化落地。 华超神控于2025年创立，创始人李昕是中国科学院与德国弗劳恩霍夫IGD研究所联合培养生物医学工程博士，曾任GE医疗全球科研中心中国区负责人，并连续创立创新科技及医疗公司，在医疗影像、AI、脑机接口与产业转化方面拥有深厚积累。 公司核心团队汇聚了来自清华大学、上海交通大学、帝国理工等海内外高校的人才，覆盖神经科学、声学、...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "华超神控获亿元融资，推动AI超声脑机接口平台加速落地。"
    },
    {
     "title": "中望软件：尚未涉足物理AI相关技术体系及商业化落地",
     "url": "<![CDATA[https://36kr.com/newsflashes/3844332160747776?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-06-08",
     "summary": "36氪获悉，中望软件公告，公司股票于2026年6月5日、6月8日连续两个交易日收盘价格涨幅偏离值累计达30%，属于股票交易异常波动。近期资本市场对“物理AI”等概念关注度较高。公司主营业务为CAD/CAM/CAE等研发设计类工业软件的研发、推广与销售业务。从技术本质来看，公司现有CAE产品、AI辅助应用与市场所称“物理AI”存在明显区别，尚未涉足物理AI相关技术体系及商业化落地。敬请广大投资者客观区分概念差异，充分认知行业发展及公司业务进展存在的不确定性，理性研判、审慎投资，注意二级市场交易风险。",
     "is_new": true,
     "lang": "zh",
     "interpretation": "中望软件澄清未涉足物理AI，反映工业软件企业当前仍聚焦传统技术路线。"
    },
    {
     "title": "马斯克39页SpaceX计划，人类史上最伟大的PPT",
     "url": "https://www.qbitai.com/2026/06/431694.html",
     "source": "量子位",
     "date": "2026-06-07",
     "summary": "人类历史最大规模的IPO招股开始了！",
     "is_new": true,
     "lang": "zh",
     "interpretation": "马斯克SpaceX计划被称“最伟大PPT”，凸显其愿景对航天产业与公众的震撼力。"
    },
    {
     "title": "9点1氪｜豆包推出付费后月活减少610万；Anthropic呼吁全球放缓AI开发，警告AI“自我改进”风险；罗永浩卸任锤子软件公司执行董事",
     "url": "<![CDATA[https://36kr.com/p/3840996342073604?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-06-06",
     "summary": "今日热点导览 SpaceX据悉将其IPO的日本融资目标提高至25亿美元 二手房挂牌量回落新房库存下降，楼市供需关系向好 B站宣布启动AI创造公开赛 TOP3大新闻 数据显示，豆包推出付费后月活减少610万 据全球人工智能市场追踪机构Aicpb.com周三发布的数据显示，在豆包推出订阅选项后，该应用5月份的月活跃用户（MAU）减少了610万，这是自2023年推出以来该应用罕见的下滑。Aicpb.com创始人李邦竹表示：“中国的免费人工智能服务时代还远未结束，所以豆包的商业化可能确实为时过早。” 有分析人士认为，字节跳动过早地将盈利模式商业化，可能会使其在中国竞争激烈的消费人工智能市场中失去...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "豆包付费后用户流失，说明AI产品需平衡变现与用户体验，避免杀鸡取卵。"
    },
    {
     "title": "氪星晚报 ｜日本或通过抛售美债，为创纪录规模的日元汇市干预筹资；俞浩内部发文：未来将继续心无旁骛做实业",
     "url": "<![CDATA[https://36kr.com/p/3840267945969929?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-06-05",
     "summary": "大公司： 首关15亿元，英诺科创三期基金持续聚焦早期科技投资 36氪获悉，6月5日，英诺基金宣布旗下英诺科创三期基金完成首轮关账，规模15亿元。该基金聚焦早期科技投资，重点布局前沿科技及人工智能领域。 比特币“金库”公司市值蒸发620亿美元 比特币本周下跌约14%，至四个月低点附近。随着加密货6月5日下午，追觅科技创始人俞浩在公司内部大群发文，表示未来将继续心无旁骛做实业，坚持技术创新，去啃全球最难的市场。（界面）币整体滑坡，数字资产“金库型”公司的股票也持续下挫，其中许多的跌幅远远超过它们所持有的加密货币本身。Artemis的数据显示，这些比特币金库公司的完全稀释股票总市值，已从去年1...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "日本若抛美债救汇市，可能引发全球债市动荡，影响美元资产信心。"
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
     "title": "School shooting survivor sues AI gun detection firm after system failed to spot weapon",
     "url": "https://arstechnica.com/tech-policy/2026/06/school-shooting-survivor-sues-ai-gun-detection-firm-after-system-failed-to-spot-weapon/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-07",
     "summary": "How accurate does an AI system need to be?",
     "is_new": true,
     "lang": "en",
     "interpretation": "技术失灵致诉讼，AI安防可靠性成公共安全关键争议点。"
    }
   ]
  },
  {
   "name": "其他AI资讯",
   "icon": "🔮",
   "color": "#6b7280",
   "count": 55,
   "cards": [
    {
     "title": "Is this the dawn of the Tokenpocalypse?",
     "url": "https://techcrunch.com/2026/06/07/is-this-the-dawn-of-the-tokenpocalypse/",
     "source": "TechCrunch - AI",
     "date": "2026-06-07",
     "summary": "We're likely to see more price increases as the big AI companies plan to go public.",
     "is_new": true,
     "lang": "en",
     "interpretation": "代币消耗激增或预示AI成本与资源瓶颈临界点到来。"
    },
    {
     "title": "Amazing Digital Dentures (a failed project)",
     "url": "https://huggingface.co/blog/build-small-hackathon/amazingdigitaldentures",
     "source": "Hugging Face Blog",
     "date": "2026-06-07",
     "summary": "",
     "is_new": true,
     "lang": "en",
     "interpretation": "数字假牙项目失败警示AI落地需匹配真实需求与可行性。"
    },
    {
     "title": "RIP Anthony Head: Our 10 favorite moments of Buffy's Giles",
     "url": "https://arstechnica.com/culture/2026/06/rip-anthony-head-our-10-favorite-moments-of-buffys-giles/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-07",
     "summary": "Head's true genius—and that of his character, Giles—lay in quietly filling in the gaps in every scene",
     "is_new": true,
     "lang": "en",
     "interpretation": "缅怀经典角色背后，是AI时代对人文记忆与情感价值的反思。"
    },
    {
     "title": "AI ‘content creators’ are getting harder to spot",
     "url": "https://www.theverge.com/ai-artificial-intelligence/943187/ai-content-creators",
     "source": "The Verge - AI",
     "date": "2026-06-07",
     "summary": "This is The Stepback, a weekly newsletter breaking down one essential story from the tech world. For more on AI confusion, follow Robert Hart. The Stepback arrives in our subscribers' inboxes at 8AM ET. Opt in for The Stepback here. How it started At first, AI influencers were relatively easy to ...",
     "is_new": true,
     "lang": "en",
     "interpretation": "内容真伪难辨加剧，AI生成物监管与识别技术亟待突破。"
    },
    {
     "title": "Sriram Krishnan is leaving his role as White House AI advisor",
     "url": "https://techcrunch.com/2026/06/06/sriram-krishnan-is-leaving-his-role-as-white-house-ai-advisor/",
     "source": "TechCrunch - AI",
     "date": "2026-06-06",
     "summary": "Krishnan is reportedly starting a new institution to continue shaping Trump's AI policy.",
     "is_new": false,
     "lang": "en",
     "interpretation": "白宫AI顾问离职，可能影响美国AI政策走向与科技战略布局。"
    },
    {
     "title": "Scientists ejected from diabetes conference for distributing journal reprints",
     "url": "https://arstechnica.com/science/2026/06/scientists-ejected-from-diabetes-conference-for-distributing-journal-reprints/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-06",
     "summary": "Those ousted included ADA journal editor-in-chief Steven Kahn and former ADA president Desmond Schatz",
     "is_new": false,
     "lang": "en",
     "interpretation": "科学家因分发论文被逐出会议，凸显学术交流与版权规则的冲突。"
    },
    {
     "title": "Some ancient microbes frozen with Ötzi the Iceman are still growing",
     "url": "https://arstechnica.com/science/2026/06/otzis-mummified-body-is-home-to-ancient-strains-of-yeast-and-bacteria/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-06",
     "summary": "What’s the difference between a person, an artifact, and an ecosystem?",
     "is_new": false,
     "lang": "en",
     "interpretation": "冰人奥茨携带的远古微生物仍能生长，为研究极端环境生命提供新线索。"
    },
    {
     "title": "The mayor of Shelbyville, Indiana, says only people who live in ‘shitty houses’ oppose data center",
     "url": "https://www.theverge.com/ai-artificial-intelligence/944984/shelbyville-indiana-mayor-shitty-houses-data-center",
     "source": "The Verge - AI",
     "date": "2026-06-06",
     "summary": "A proposed $2 billion data center has become a political flashpoint in the small city of Shelbyville, Indiana. And the controversy has only grown more intense after the mayor, Scott Furgeson, was caught on camera saying of the \"No Data Center\" signs going up that, \"I've seen a lot of these all ov...",
     "is_new": false,
     "lang": "en",
     "interpretation": "市长称反对数据中心者住“破房子”，暴露基础设施选址中的阶层矛盾。"
    },
    {
     "title": "Here comes new Siri again",
     "url": "https://www.theverge.com/tech/944245/apple-wwdc-2026-ai-siri-gemini",
     "source": "The Verge - AI",
     "date": "2026-06-06",
     "summary": "Apple has been on its back foot, AI-wise, for the past few years. But in a strange way, playing from behind might not be such a bad move. At WWDC on Monday, Apple appears to be getting ready to reintroduce us to the new Siri. Again. As a reminder, we met the new Siri in […]",
     "is_new": false,
     "lang": "en",
     "interpretation": "新版Siri再次登场，苹果能否借AI翻身成为市场关注焦点。"
    },
    {
     "title": "micropython-wasm 0.1a2",
     "url": "https://simonwillison.net/2026/Jun/6/micropython-wasm/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-06",
     "summary": "Release: micropython-wasm 0.1a2 I added a CLI to micropython-wasm (issue #7), inspired by the first draft of the blog entry when I realized it would be a great way to illustrate the Try it yourself section. Tags: python, sandboxing, webassembly, micropython",
     "is_new": false,
     "lang": "en",
     "interpretation": "将MicroPython与WASM结合，使Python能在浏览器沙箱中安全运行，拓展了Web应用开发边界。"
    },
    {
     "title": "Running Python code in a sandbox with MicroPython and WASM",
     "url": "https://simonwillison.net/2026/Jun/6/micropython-in-a-sandbox/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-06",
     "summary": "I've been experimenting with different approaches to running code in a sandbox for several years now, but my latest attempt feels like it might finally have all of the characteristics I've been looking for. I've released it as an alpha package called micropython-wasm, and I'm using it for a code ...",
     "is_new": false,
     "lang": "en",
     "interpretation": "为Python代码提供隔离执行环境，提升Web端运行第三方脚本的安全性，降低安全风险。"
    },
    {
     "title": "Google will pay SpaceX $920M per month for compute",
     "url": "https://techcrunch.com/2026/06/05/google-will-pay-spacex-920m-per-month-for-compute/",
     "source": "TechCrunch - AI",
     "date": "2026-06-05",
     "summary": "In a statement, a Google representative described the deal as a result of unexpected demand for its recently launched AI products.",
     "is_new": false,
     "lang": "en",
     "interpretation": "谷歌巨额采购SpaceX算力，显示云计算巨头正加速布局太空计算基础设施，竞争格局生变。"
    },
    {
     "title": "The token bill comes due: Inside the industry scramble to manage AI’s runaway costs",
     "url": "https://techcrunch.com/2026/06/05/the-token-bill-comes-due-inside-the-industry-scramble-to-manage-ais-runaway-costs/",
     "source": "TechCrunch - AI",
     "date": "2026-06-05",
     "summary": "\"The whole conversation shifted from tokenmaxxing and 'go fast' to 'we need guardrails, how do we control this?'\"",
     "is_new": false,
     "lang": "en",
     "interpretation": "AI算力成本飙升引发行业紧急应对，凸显大模型商业化面临盈利压力，技术投入需更精细化。"
    },
    {
     "title": "Baby botulism outbreak: FDA still doesn't know cause—or how to prevent it",
     "url": "https://arstechnica.com/health/2026/06/baby-botulism-outbreak-fda-still-doesnt-know-cause-or-how-to-prevent-it/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-05",
     "summary": "In the end, the three companies involved all point the finger at each other.",
     "is_new": false,
     "lang": "en",
     "interpretation": "婴儿肉毒杆菌爆发原因不明，暴露食品安全监管漏洞，亟需建立更有效的预防与溯源机制。"
    },
    {
     "title": "How a USB-connected speaker can infect a PC without ever being touched",
     "url": "https://arstechnica.com/security/2026/06/highly-reviewed-speaker-can-be-hacked-over-the-air-to-infect-connected-devices/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-05",
     "summary": "Seller of the Sound Blaster Katana V2X doesn't consider the behavior a vulnerability.",
     "is_new": false,
     "lang": "en",
     "interpretation": "仅通过USB连接即可无声入侵电脑，揭示硬件供应链安全新威胁，需加强外设防护措施。"
    },
    {
     "title": "The saga of the International Space Station air leak took a worrying turn Friday",
     "url": "https://arstechnica.com/space/2026/06/work-on-russias-leaky-space-station-module-causes-astronauts-to-take-shelter/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-05",
     "summary": "\"We look forward to working with Roscosmos on a collaborative approach to address the leaks.\"",
     "is_new": false,
     "lang": "en",
     "interpretation": "国际空间站漏气问题恶化，或威胁宇航员安全与长期驻留计划。"
    },
    {
     "title": "\"We pissed off a lot of people\": Giant data center plan cut 50% amid protests",
     "url": "https://arstechnica.com/tech-policy/2026/06/we-pissed-off-a-lot-of-people-giant-data-center-plan-cut-50-amid-protests/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-05",
     "summary": "Developer felt \"beaten up,\" with \"no choice\" but to shrink data center.",
     "is_new": false,
     "lang": "en",
     "interpretation": "巨型数据中心因抗议规模砍半，凸显公众对能源与环境影响的强烈抵制。"
    },
    {
     "title": "Review: Spider-Noir recaptures the magic of a bygone era",
     "url": "https://arstechnica.com/culture/2026/06/review-spider-noir-recaptures-the-magic-of-a-bygone-era/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-05",
     "summary": "Nicolas Cage was born to play 1930s PI Ben Reilly/The Spider: part Bogart, part Bugs Bunny, 100% Cage-y.",
     "is_new": false,
     "lang": "en",
     "interpretation": "《蜘蛛 noir》重现经典时代魅力，证明怀旧风格在超级英雄题材中仍有市场。"
    },
    {
     "title": "Trump admin tries again to revive dying coal industry",
     "url": "https://arstechnica.com/science/2026/06/trump-admin-tries-again-to-revive-dying-coal-industry/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-05",
     "summary": "Money would keep coal plants open, build the first new plants in over a decade.",
     "is_new": false,
     "lang": "en",
     "interpretation": "特朗普政府再推煤炭复兴，但清洁能源趋势下此举可能徒劳且加剧气候争议。"
    },
    {
     "title": "New York lawmakers pass one-year ban on new data centers",
     "url": "https://www.theverge.com/policy/944041/new-york-data-center-moratorium",
     "source": "The Verge - AI",
     "date": "2026-06-05",
     "summary": "The New York State legislature passed a one-year moratorium on new large data centers, the first statewide ban of its kind if Democratic Governor Kathy Hochul signs it into law. Lawmakers behind the bill say it's meant to give policymakers time to understand the impact of large data centers on th...",
     "is_new": false,
     "lang": "en",
     "interpretation": "纽约暂停新建数据中心一年，或为全球数据中心扩张政策收紧的风向标。"
    },
    {
     "title": "Has Microsoft Lost Its Mojo (Again)?",
     "url": "https://www.wired.com/story/has-microsoft-lost-its-mojo-again/",
     "source": "Wired - AI",
     "date": "2026-06-05",
     "summary": "Microsoft’s AI products aren’t selling, and Github’s been plagued with troubles. WIRED spoke with VP Scott Hanselman about whether the company is in catch-up mode.",
     "is_new": false,
     "lang": "en",
     "interpretation": "微软再次被质疑创新乏力，反映科技巨头在AI时代面临转型压力。"
    },
    {
     "title": "Why Apple Might Put Cameras Into Its Next AirPods",
     "url": "https://www.wired.com/story/why-apple-might-put-cameras-into-its-next-airpods/",
     "source": "Wired - AI",
     "date": "2026-06-05",
     "summary": "From battery life to privacy, there are many hurdles to the idea taking off.",
     "is_new": false,
     "lang": "en",
     "interpretation": "苹果或在AirPods加入摄像头，预示空间计算与AI视觉交互新方向。"
    },
    {
     "title": "AI Has Come for Serif Fonts",
     "url": "https://www.wired.com/story/ai-has-come-for-serif-fonts/",
     "source": "Wired - AI",
     "date": "2026-06-05",
     "summary": "AI companies are using serif to project humanity. Critics are calling it “tasteslop.”",
     "is_new": false,
     "lang": "en",
     "interpretation": "AI开始取代传统衬线字体设计，冲击视觉文化与创意行业根基。"
    },
    {
     "title": "Quoting Andreas Kling",
     "url": "https://simonwillison.net/2026/Jun/5/andreas-kling/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-05",
     "summary": "We will no longer accept public pull requests. [...] A substantial patch used to imply substantial effort, and that effort was a reasonable proxy for good faith. That assumption no longer holds. [...] Whether code was typed by hand is beside the point. What matters is who is responsible for it on...",
     "is_new": false,
     "lang": "en",
     "interpretation": "Andreas Kling观点被引用，反映开发者对技术本质的独立思考。"
    },
    {
     "title": "The latest AI news we announced in May 2026",
     "url": "https://blog.google/innovation-and-ai/technology/ai/google-ai-updates-may-2026/",
     "source": "Google AI Blog",
     "date": "2026-06-05",
     "summary": "Here are Google’s latest AI updates from May 2026",
     "is_new": false,
     "lang": "en",
     "interpretation": "2026年5月AI新闻汇总，揭示技术演进趋势与行业竞争格局。"
    },
    {
     "title": "Are AI chatbots making us lose control of our brains?",
     "url": "https://www.technologyreview.com/2026/06/05/1138427/are-ai-chatbots-making-us-lose-control-of-our-brains/",
     "source": "MIT Technology Review - AI",
     "date": "2026-06-05",
     "summary": "This week I’ve been at SXSW London. There’s been music, film, and a lot—and I mean a lot—of talk about AI. I also had the opportunity to sit down with Gloria Mark, a psychologist at the University of California, Irvine, who has spent the last 30 years studying how people interact with digital tec...",
     "is_new": false,
     "lang": "en",
     "interpretation": "过度依赖AI聊天机器人可能削弱人类独立思考与判断能力。"
    },
    {
     "title": "EVA-Bench Data 2.0: 3 Domains, 121 Tools, 213 Scenarios",
     "url": "https://huggingface.co/blog/ServiceNow-AI/eva-bench-data",
     "source": "Hugging Face Blog",
     "date": "2026-06-04",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "新基准数据集覆盖三大领域121种工具，推动AI工具调用能力评估标准化。"
    },
    {
     "title": "Kevin O’Leary agrees to downsize massive Utah data center",
     "url": "https://www.theverge.com/ai-artificial-intelligence/943234/kevin-oleary-agrees-to-downsize-massive-utah-data-center",
     "source": "The Verge - AI",
     "date": "2026-06-04",
     "summary": "Kevin O'Leary agreed to halve the size of his planned 40,000-acre data center in Utah amid mounting pressure from residents and activists, as reported earlier by local affiliate ABC4. The Shark Tank star sent a letter to Utah Senate President J. Stuart Adams on Thursday, saying that he will remov...",
     "is_new": false,
     "lang": "en",
     "interpretation": "鲨鱼坦克明星投资人缩减数据中心规模，反映AI算力泡沫或面临调整。"
    },
    {
     "title": "TSMC struggles to keep up with AI demand: ‘We can only support so much’",
     "url": "https://www.theverge.com/tech/943066/tsmc-ai-demand-struggles",
     "source": "The Verge - AI",
     "date": "2026-06-04",
     "summary": "Taiwan Semiconductor Manufacturing Co. - the world's biggest semiconductor-maker - is struggling to meet demands from American customers even with its factory buildout in the US, according to reports from Reuters and Bloomberg. \"Customer demand is so high, and we can only support so much,\" TSMC C...",
     "is_new": false,
     "lang": "en",
     "interpretation": "台积电产能瓶颈凸显全球AI芯片供应链紧张，行业扩张遭遇现实阻力。"
    },
    {
     "title": "Elon Musk is steamrolling Wall Street to become a trillionaire",
     "url": "https://www.theverge.com/podcast/942586/elon-musk-spacex-ipo-x-xai-index-funds",
     "source": "The Verge - AI",
     "date": "2026-06-04",
     "summary": "Today on Decoder, I’m talking to Ryan Mac, a technology reporter at The New York Times and coauthor of the excellent book Character Limit: How Elon Musk Destroyed Twitter, which came out in 2024. I can’t recommend it enough. I wanted to have Ryan on the show because we’re on the cusp of the Space...",
     "is_new": false,
     "lang": "en",
     "interpretation": "马斯克借AI热潮碾压华尔街预期，万亿市值之路重塑科技资本格局。"
    },
    {
     "title": "AI enthusiasts are in a race against time, AI skeptics are in a race against entropy",
     "url": "https://simonwillison.net/2026/Jun/4/ai-enthusiasts-ai-skeptics/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-04",
     "summary": "AI enthusiasts are in a race against time, AI skeptics are in a race against entropy Charity Majors neatly captures the dynamic between AI enthusiasts and AI skeptics, both of whom are trying to build great software, often in the same teams: The enthusiasts are not wrong. We are starting to see r...",
     "is_new": false,
     "lang": "en",
     "interpretation": "乐观者与悲观者的竞赛，本质是技术加速与系统失序的终极博弈。"
    },
    {
     "title": "Quoting Emanuel Maiberg, 404 Media",
     "url": "https://simonwillison.net/2026/Jun/4/a-slightly-different-version/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-04",
     "summary": "After this story was published Google's spokesperson reached out and asked us to publish a slightly different version of that statement. The new statement no longer stated that \"it's critical that we maintain humans in the loop.\" — Emanuel Maiberg, 404 Media, Google Employees Internally Share Mem...",
     "is_new": false,
     "lang": "en",
     "interpretation": "引用404媒体观点，揭示技术报道中批判性视角对公众认知的关键作用。"
    },
    {
     "title": "The Download: AI-generated lawsuits and virtual power plants for data centers",
     "url": "https://www.technologyreview.com/2026/06/04/1138408/the-download-ai-lawsuits-virtual-power-plants-data-centers/",
     "source": "MIT Technology Review - AI",
     "date": "2026-06-04",
     "summary": "This is today’s edition of The Download, our weekday newsletter that provides a daily dose of what’s going on in the world of technology. How courts are coping with a flood of AI-generated lawsuits Most days in her chambers, Judge Maritza Braswell, a federal magistrate judge in Colorado, sifts th...",
     "is_new": false,
     "lang": "en",
     "interpretation": "AI生成诉讼激增与数据中心虚拟电厂，反映技术对法律与能源的双重冲击。"
    },
    {
     "title": "How courts are coping with a flood of AI-generated lawsuits",
     "url": "https://www.technologyreview.com/2026/06/04/1138391/courts-coping-ai-lawsuits/",
     "source": "MIT Technology Review - AI",
     "date": "2026-06-04",
     "summary": "Most days in her chambers, Judge Maritza Braswell, a federal magistrate judge in Colorado, sifts through stacks of documents written by people without a lawyer. Many of them can’t afford to hire a lawyer, and others have cases too weak or too small to interest one. She reads each one carefully, m...",
     "is_new": false,
     "lang": "en",
     "interpretation": "法院应对AI生成诉讼洪流，凸显司法系统在技术造假面前的适应性挑战。"
    },
    {
     "title": "Direct Preference Optimization Beyond Chatbots",
     "url": "https://huggingface.co/blog/Dharma-AI/direct-preference-optimization-beyond-chatbots",
     "source": "Hugging Face Blog",
     "date": "2026-06-03",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "直接偏好优化突破聊天机器人边界，预示AI对齐技术将进入更广泛场景。"
    },
    {
     "title": "5 ways Google Search can level up your thrift and vintage shopping",
     "url": "https://blog.google/products-and-platforms/products/search/thrifting-tips/",
     "source": "Google AI Blog",
     "date": "2026-06-03",
     "summary": "Uncover second-hand scores with AI tools in Google Search and Shopping.",
     "is_new": false,
     "lang": "en",
     "interpretation": "用AI优化二手购物体验，推动可持续消费与搜索场景创新。"
    },
    {
     "title": "The Download: Trump’s new AI order, and smart glasses for warfare",
     "url": "https://www.technologyreview.com/2026/06/03/1138322/the-download-trump-ai-order-smart-glasses-warfare/",
     "source": "MIT Technology Review - AI",
     "date": "2026-06-03",
     "summary": "This is today’s edition of The Download, our weekday newsletter that provides a daily dose of what’s going on in the world of technology. 5 key points in Trump’s new AI order Less than two weeks after scrapping an executive order on AI, President Donald Trump signed a new one on Tuesday. Promisin...",
     "is_new": false,
     "lang": "en",
     "interpretation": "新行政令与军用智能眼镜，标志AI加速进入国家安全领域。"
    },
    {
     "title": "Take our I/O 2026 quiz, vibe coded in Google AI Studio.",
     "url": "https://blog.google/innovation-and-ai/technology/ai/io-2026-vibe-coded-quiz/",
     "source": "Google AI Blog",
     "date": "2026-05-29",
     "summary": "We used Google AI Studio to vibe code a quiz about our top I/O 2026 announcements.",
     "is_new": false,
     "lang": "en",
     "interpretation": "谷歌I/O 2026预热活动，用AI工具生成代码的趣味互动，展示技术易用性。"
    },
    {
     "title": "Check out real-life AI prototypes from the Futures Lab.",
     "url": "https://blog.google/innovation-and-ai/technology/ai/university-waterloo-labs/",
     "source": "Google AI Blog",
     "date": "2026-05-29",
     "summary": "University of Waterloo students develop AI prototypes like sign language tutors to reshape the future of education and work.",
     "is_new": false,
     "lang": "en",
     "interpretation": "未来实验室将AI概念转化为可交互原型，预示技术落地方向。"
    },
    {
     "title": "Reachy Mini goes fully local",
     "url": "https://huggingface.co/blog/local-reachy-mini-conversation",
     "source": "Hugging Face Blog",
     "date": "2026-05-27",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "机器人Reachy Mini实现完全本地化运行，无需联网，提升隐私与响应速度。"
    },
    {
     "title": "Shipping a Trillion Parameters With a Hub Bucket: Delta Weight Sync in TRL",
     "url": "https://huggingface.co/blog/delta-weight-sync",
     "source": "Hugging Face Blog",
     "date": "2026-05-27",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "万亿参数模型通过增量权重同步实现高效部署，降低大模型应用门槛。"
    },
    {
     "title": "马斯克SpaceX路演PPT：60页，值1.77万亿美元",
     "url": "https://www.qbitai.com/2026/06/432084.html",
     "source": "量子位",
     "date": "2026-06-08",
     "summary": "最值得看的不是火箭是AI",
     "is_new": true,
     "lang": "zh",
     "interpretation": "马斯克SpaceX路演PPT估值1.77万亿美元，揭示商业航天资本运作逻辑。"
    },
    {
     "title": "高通点赞广汽埃安N60智驾大赛获亚军，文远知行WRD 3.0亮相高通峰会",
     "url": "https://www.qbitai.com/2026/06/432055.html",
     "source": "量子位",
     "date": "2026-06-08",
     "summary": "文远知行携L2++ 一段式端到端方案WRD 3.0参展",
     "is_new": true,
     "lang": "zh",
     "interpretation": "中国智驾方案获国际芯片巨头背书，商业化落地进程加速。"
    },
    {
     "title": "既看重 AI 又嫌弃 AI？小岛秀夫最新发声：它只是个“创意清洁工”",
     "url": "https://cn.technode.com/post/2026-06-08/hideo-kojima-says-hes-not-interested-in-ai/",
     "source": "动点科技 - AI",
     "date": "2026-06-08",
     "summary": "上个月，在普拉达（Prada）以著名游戏 […]",
     "is_new": true,
     "lang": "zh",
     "interpretation": "游戏大师揭示AI工具化本质：辅助创作而非替代人类创造力。"
    },
    {
     "title": "智能戒指爆发前夜，RingConn走到哪一步了？",
     "url": "https://www.leiphone.com/category/weiwu/f6k18uKTJjmKBYwd.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-08",
     "summary": "作者 | 吴优编辑 | 刘伟“智能戒指在世界上依然是一个小众市场，年销量几百万枚，但我相信它在未来一定会跟上智能手表的步伐，实现全球上亿只的销量”。作为上海交通大学特聘教授及RingConn品牌创始人的王国兴教授，5月30日在深圳 INNO100 全球创新旗舰店内发表了对智能戒指未来的看法。这天是 RingConn Gen3 的产品发布会，王国兴教授着装浅绿衬衫，手戴三枚智能戒指出席了本次活动，向到场的科技爱好者和用户们介绍新一代AI智能戒指产品。与 Gen 2 相比，Gen 3 的核心亮点集中在三个方面：其一， 长期血压趋势洞察，依托临床验证实现每 15 分钟自动监测，呈现用户真实血管...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "智能戒指赛道爆发前夜，健康监测与交互体验成破局关键。"
    },
    {
     "title": "上海：截至6月8日新增6款已完成登记的生成式人工智能服务",
     "url": "<![CDATA[https://36kr.com/newsflashes/3844318693837317?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-06-08",
     "summary": "36氪获悉，据网信上海消息，截至6月8日，上海市新增6款已完成登记的生成式人工智能服务，累计已完成183款生成式人工智能服务登记。已上线的生成式人工智能应用或功能，应在显著位置或产品详情页面标明所取得的上线编号，并根据《人工智能生成合成内容标识办法》添加生成合成内容标识。",
     "is_new": true,
     "lang": "zh",
     "interpretation": "上海新增6款AI服务备案，显示地方正加速推进生成式AI合规化进程。"
    },
    {
     "title": "有余凯不投的地平线离职创业员工吗？",
     "url": "https://www.qbitai.com/2026/06/431931.html",
     "source": "量子位",
     "date": "2026-06-07",
     "summary": "「放任」人才外流的反常操作，只是格局使然吗？",
     "is_new": true,
     "lang": "zh",
     "interpretation": "地平线创始人余凯对离职创业员工的态度，折射出AI人才流动与内部创业文化。"
    },
    {
     "title": "教你用AI一节课收17万，华尔街精英排着队付费",
     "url": "https://www.qbitai.com/2026/06/431487.html",
     "source": "量子位",
     "date": "2026-06-07",
     "summary": "花旗美银都是客户",
     "is_new": true,
     "lang": "zh",
     "interpretation": "华尔街精英付费学AI授课，揭示高端知识付费市场对AI应用技能的迫切需求。"
    },
    {
     "title": "早报｜黄仁勋访韩首站去T1网吧/姚顺雨谈腾讯AI下半场/三大运营商提醒高考考点将屏蔽信号，周边或无法上网",
     "url": "https://www.ifanr.com/1668239?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-06",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "黄仁勋访韩首站网吧、腾讯AI下半场等动态，显示AI巨头正加速渗透消费与产业场景。"
    },
    {
     "title": "垃圾桶里捡零件，弹幕里接需求，B 站有群人在用 AI 野生造产品",
     "url": "https://www.ifanr.com/1668088?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-05",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "民间AI创新展现草根力量，低成本、快迭代模式可能颠覆传统产品开发路径。"
    },
    {
     "title": "是时候造一台 AI 时代的手机了｜AIDONE 第五期",
     "url": "https://www.ifanr.com/1668163?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-05",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "AI手机概念升温，预示硬件厂商需重新定义交互逻辑，抢占下一代终端入口。"
    },
    {
     "title": "早报｜苹果App Store四成头部应用已支持AI/千问上线肯德基skill/奈雪擦边LABUBU被判赔32万",
     "url": "https://www.ifanr.com/1668169?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-05",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "苹果头部应用AI化加速，行业竞争从功能比拼转向生态整合与场景落地。"
    },
    {
     "title": "Token大战中，华为云选择了第三条路｜最前线",
     "url": "<![CDATA[https://36kr.com/p/3840016255126016?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-06-05",
     "summary": "作者 | 邓咏仪 编辑 | 张雨忻 “在当前国产化算力正在成长的情况下，华为云现在不太在乎Token总量是多少，也不太在乎收入的总量是多少，在乎的是国产化的算力系统所生产出来的Tokens的健康度，并且要代表着生产力提升，而不仅仅是情绪价值。” 6月5日，2026华为云 INSPIRE 创想者大会在上海开幕，华为云CEO周跃峰表示。 他举了个例子：一个人闲来无事在手机上问 AI 一个问题，也会产生 Token，但这种 Token 的价值有多大很难说明。在他看来，衡量一朵云做得好不好，不该强调它跑出了多少万亿 Token，而该看这些 Token 替企业提了多少效率。 华为云CEO周跃峰 过...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "华为云不选站队，自研技术路线或重塑AI云服务竞争格局。"
    },
    {
     "title": "今年最值得升级的生产力工具，可能是一整张 AI 工位",
     "url": "https://www.ifanr.com/1667995?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-04",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "AI整合进办公全流程，可能重新定义个人效率工具的升级标准。"
    },
    {
     "title": "制糖工厂发布 AI 小电拼 Mirror：FluxAI 自由流让多口充电进入「功率复用」时代",
     "url": "https://www.ifanr.com/1667933?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-04",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "多口充电实现功率动态分配，解决多设备同时快充的痛点。"
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
   "stars": 42807,
   "forks": 7663,
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
   "stars": 26353,
   "forks": 5822,
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
   "description": "YC (S26) | AI that knows what you've seen, said, or heard. Records everything you do, say, hear 24/7, local, private, secure",
   "blurb": "YC (S26) | AI that knows what you've seen, said, or heard. Records everything you do, say, hear 24/7, local, private, secure",
   "stars": 19203,
   "forks": 1806,
   "language": "Rust",
   "topics": [
    "agents",
    "agi",
    "ai",
    "audio-recording",
    "computer-vision",
    "llm",
    "local-ai",
    "local-first",
    "machine-learning",
    "ml",
    "multimodal",
    "privacy",
    "screen-recording",
    "speech-to-text",
    "vision",
    "ycombinator"
   ]
  },
  {
   "name": "stas00/ml-engineering",
   "url": "https://github.com/stas00/ml-engineering",
   "description": "Machine Learning Engineering Open Book",
   "blurb": "Machine Learning Engineering Open Book",
   "stars": 18070,
   "forks": 1148,
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
   "stars": 15436,
   "forks": 2343,
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
   "stars": 11713,
   "forks": 1220,
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
   "stars": 11450,
   "forks": 835,
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
   "stars": 10120,
   "forks": 1290,
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
   "stars": 8671,
   "forks": 970,
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
   "stars": 7581,
   "forks": 858,
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
   "stars": 6798,
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
   "forks": 377,
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
   "stars": 5681,
   "forks": 1399,
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
   "stars": 5434,
   "forks": 624,
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
   "stars": 4854,
   "forks": 397,
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