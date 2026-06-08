const APP_DATA = {
 "today": "2026-06-08",
 "fetched_at": "2026-06-08T04:00:39",
 "total": 152,
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
   "count": 15,
   "color": "#f43f5e"
  },
  "动点科技 - AI": {
   "count": 2,
   "color": "#10b981"
  },
  "少数派 - AI": {
   "count": 3,
   "color": "#f97316"
  },
  "雷锋网 - AI": {
   "count": 15,
   "color": "#8b5cf6"
  },
  "36氪 - AI": {
   "count": 10,
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
   "count": 32
  },
  {
   "name": "AI Agent与智能体",
   "icon": "🤯",
   "color": "#d97706",
   "count": 19
  },
  {
   "name": "具身智能与机器人",
   "icon": "🤖",
   "color": "#059669",
   "count": 5
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
   "count": 7
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
   "count": 58
  }
 ],
 "sections": [
  {
   "name": "大模型与基础架构",
   "icon": "🧠",
   "color": "#7c3aed",
   "count": 32,
   "cards": [
    {
     "title": "When Claude changed, everything changed: Managing AI blast radius in production",
     "url": "https://venturebeat.com/orchestration/when-claude-changed-everything-changed-managing-ai-blast-radius-in-production",
     "source": "VentureBeat - AI",
     "date": "2026-06-08",
     "summary": "Our system did one thing, and it did it well: It turned natural-language questions into API calls.The users were analysts, account managers, and operations leads. They knew what data they needed, but assembling it manually meant pulling from four dashboards, two BI tools, and a Salesforce report ...",
     "is_new": true,
     "lang": "en",
     "interpretation": "模型行为突变影响生产环境，需重视AI系统的可控性与安全边界。"
    },
    {
     "title": "OpenAI unveils Lockdown Mode to protect sensitive data from prompt injection attacks",
     "url": "https://techcrunch.com/2026/06/06/openai-unveils-lockdown-mode-to-protect-sensitive-data-from-prompt-injection-attacks/",
     "source": "TechCrunch - AI",
     "date": "2026-06-06",
     "summary": "Even with Lockdown Mode, ChatGPT could be still vulnerable to prompt injections, but the goal is to reduce the likelihood that sensitive data gets shared in the process.",
     "is_new": false,
     "lang": "en",
     "interpretation": "锁定模式可防御提示注入攻击，提升AI系统安全性。"
    },
    {
     "title": "OpenAI Help: Lockdown Mode",
     "url": "https://simonwillison.net/2026/Jun/5/openai-help-lockdown-mode/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-05",
     "summary": "OpenAI Help: Lockdown Mode OpenAI first teased this in February, but now it's live and \"rolling out to eligible personal accounts, including Free, Go, Plus, and Pro, and self-serve ChatGPT Business accounts\": Lockdown Mode is designed to help prevent the final stage of data exfiltration from a pr...",
     "is_new": false,
     "lang": "en",
     "interpretation": "OpenAI推出锁定模式，强化AI安全防护，防止敏感数据泄露。"
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
     "interpretation": "Endava用AI智能体重构软件交付流程，预示开发模式根本变革。"
    },
    {
     "title": "Dreaming: Better memory for a more helpful ChatGPT",
     "url": "https://openai.com/index/chatgpt-memory-dreaming",
     "source": "OpenAI Blog",
     "date": "2026-06-04",
     "summary": "ChatGPT introduces a new memory system to better remember preferences, keeping context fresh and relevant across conversations.",
     "is_new": false,
     "lang": "en",
     "interpretation": "记忆增强技术让ChatGPT更懂用户，但隐私与依赖风险并存。"
    },
    {
     "title": "Anthropic says 80% of its new production code is now authored by Claude — how your enterprise can keep up",
     "url": "https://venturebeat.com/technology/anthropic-says-80-of-its-new-production-code-is-now-authored-by-claude-how-your-enterprise-can-keep-up",
     "source": "VentureBeat - AI",
     "date": "2026-06-04",
     "summary": "Anthropic co-founder and CEO Dario Amodei said it was coming, but it still feels like a milestone: More than 80% of the code merged into Anthropic’s production codebase in May wasn't authored by humans, but by its own AI model, Claude, according to a new report shared by the record-breaking AI st...",
     "is_new": false,
     "lang": "en",
     "interpretation": "代码自动化率达80%预示企业需重构开发流程，否则面临效率断层。"
    },
    {
     "title": "Introducing new capabilities to GPT-Rosalind",
     "url": "https://openai.com/index/introducing-new-capabilities-to-gpt-rosalind",
     "source": "OpenAI Blog",
     "date": "2026-06-03",
     "summary": "GPT-Rosalind advances life sciences research with enhanced biological reasoning, medicinal chemistry expertise, genomics analysis, and experimental workflow capabilities.",
     "is_new": false,
     "lang": "en",
     "interpretation": "新功能上线，提升GPT-Rosalind在专业领域的应用深度与效率。"
    },
    {
     "title": "How Wasmer used Codex to build a Node.js runtime for the edge",
     "url": "https://openai.com/index/wasmer",
     "source": "OpenAI Blog",
     "date": "2026-06-03",
     "summary": "See how Wasmer used Codex with GPT-5.5 to build a Node.js runtime for the edge, accelerating development 10x to 20x and shipping in weeks instead of months.",
     "is_new": false,
     "lang": "en",
     "interpretation": "展示如何用AI代码生成工具构建边缘计算运行时，降低开发门槛。"
    },
    {
     "title": "Uber Caps Usage of AI Tools Like Claude Code to Manage Costs",
     "url": "https://simonwillison.net/2026/Jun/3/uber-caps-usage/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-03",
     "summary": "Uber Caps Usage of AI Tools Like Claude Code to Manage Costs I wrote the other day about Uber blowing its 2026 AI budget in four months, and how that wasn't particularly surprising given they would have set that budget in 2025, before anyone could have predicted how popular token-burning coding a...",
     "is_new": false,
     "lang": "en",
     "interpretation": "优步限制AI工具使用以控制成本，反映企业平衡效率与支出的现实。"
    },
    {
     "title": "Microsoft's new MAI models",
     "url": "https://simonwillison.net/2026/Jun/2/microsofts-new-models/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-02",
     "summary": "Microsoft announced two new text LLMs this morning - MAI-Thinking-1 (reasoning, 1T parameters, 35B active, available to \"select early partners\") and MAI-Code-1-Flash (137B Parameters, 5B active, \"purpose-built for GitHub Copilot and VS Code to deliver high performance and lower cost [...] rolling...",
     "is_new": false,
     "lang": "en",
     "interpretation": "微软新模型或改变AI竞争格局，需关注其技术路线与市场影响。"
    },
    {
     "title": "datasette-agent-micropython 0.1a0",
     "url": "https://simonwillison.net/2026/Jun/2/datasette-agent-micropython/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-02",
     "summary": "Release: datasette-agent-micropython 0.1a0 I want Datasette Agent to be able to generate and execute Python code safely. This alpha is looking promising so far. GPT-5.5 has so far failed to break out of the sandbox! Tags: python, sandboxing, datasette, webassembly, datasette-agent, micropython",
     "is_new": false,
     "lang": "en",
     "interpretation": "将MicroPython与Datasette结合，简化数据探索与脚本化操作。"
    },
    {
     "title": "California Brown Pelican",
     "url": "https://simonwillison.net/2026/Jun/2/sighting-367841339/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-02",
     "summary": "California Brown Pelican, in Fort Mason, CA, USI'm at the Microsoft Build conference today, held at Fort Mason in San Francisco. There are California Brown Pelicans diving into the water directly behind venue! Tags: microsoft, ai, generative-ai, llms, llm-release",
     "is_new": false,
     "lang": "en",
     "interpretation": "加州褐鹈鹕的生存状态反映海洋生态健康，是环境监测的关键指标。"
    },
    {
     "title": "Introducing Mellum2: A 12B Mixture-of-Experts Model by JetBrains",
     "url": "https://huggingface.co/blog/JetBrains/mellum2-launch",
     "source": "Hugging Face Blog",
     "date": "2026-06-01",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "JetBrains发布12B参数混合专家模型，或推动代码智能工具升级。"
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
     "interpretation": "用Gemini构建大会网站，展示AI在复杂项目管理中的实际能力。"
    },
    {
     "title": "9 demos of Gemini Omni and Gemini 3.5 in action",
     "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-omni-3-5-videos/",
     "source": "Google AI Blog",
     "date": "2026-05-29",
     "summary": "Watch 9 videos showing the capabilities of Gemini Omni and Gemini 3.5, announced at Google I/O 2026.",
     "is_new": false,
     "lang": "en",
     "interpretation": "Gemini新模型多场景演示，凸显谷歌AI能力升级方向。"
    },
    {
     "title": "Catch up on 12 major I/O 2026 moments",
     "url": "https://blog.google/innovation-and-ai/technology/ai/io-2026-keynote-moment-videos/",
     "source": "Google AI Blog",
     "date": "2026-05-28",
     "summary": "Here are 12 of the biggest Google I/O 2026 keynote moments, including news about Gemini Omni, Gemini 3.5 Flash and more.",
     "is_new": false,
     "lang": "en",
     "interpretation": "大会关键发布汇总，反映谷歌年度技术战略重点。"
    },
    {
     "title": "8点1氪丨八家上市公司集中公告“补税”；ChatGPT将迎来史上最大幅度升级；高考新增AI监考员，自动截取异常录像",
     "url": "<![CDATA[https://36kr.com/p/3843764238174729?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-06-08",
     "summary": "今日热点导览 AI等机器网络请求量首超人类 瑞幸咖啡回应拿铁去冰仅半杯 宗馥莉自有品牌KELLYONE回归 多家低成本航空公司对登机箱登机收费 黄仁勋会见韩国两大游戏商代表共商游戏AI合作方案 TOP3大新闻 八家上市公司集中公告“补税” 6月1日至6日，不到一周内，八家A股上市公司先后披露补缴税款公告。这八家公司合计补缴税款及滞纳金约4亿元。其中，苹果中国最大授权经销商爱施德（002416.SZ）一家补缴3.08亿元，占八家总额的近八成，该公司披露，仅滞纳金就达1.23亿元。对部分公司而言，这笔补缴金额已接近甚至超过去年一整年的利润。如电子材料企业宏昌电子（603002.SH）需补缴4...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "上市公司集中补税释放税务监管趋严信号，企业合规成本将显著上升。"
    },
    {
     "title": "英伟达与LG集团合建AI工厂，合作推进机器人、自动驾驶及自主AI",
     "url": "<![CDATA[https://36kr.com/newsflashes/3843985339664896?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-06-08",
     "summary": "英伟达与LG集团宣布合作建设AI工厂，为LG旗下机器人、自动驾驶、数据中心及GPU云服务等核心业务提供加速计算基础设施。在机器人领域，LG电子将整合英伟达Isaac Sim、GR00T等框架训练家用机器人CLoiD，并建立物理AI数据工厂向外部供应机器人训练数据；LG CNS将英伟达机器人技术引入其PhysicalWorks工业平台。在AI工厂基础设施方面，LG Uplus及LG CNS将基于英伟达DSX平台建设可扩展AI工厂，LG新能源探索800伏直流数据中心储能方案。在自动驾驶领域，LG电子将对齐英伟达DRIVE Hyperion架构推进ADAS及软件定义汽车产品线。在自主AI方面，...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "英伟达与LG合作标志AI基础设施向机器人、自动驾驶等实体场景加速渗透。"
    },
    {
     "title": "月之暗面Kimi启动新一轮融资，估值升至300亿美金",
     "url": "<![CDATA[https://36kr.com/newsflashes/3843910851447296?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-06-08",
     "summary": "36氪获悉，月之暗面Kimi已启动新一轮融资，投前估值上升至300亿美金，这标志着Kimi从去年12月底的43亿美金估值实现了七倍增长。消息层面，Kimi上周发布面向知识工作者的通用型本地Agent Kimi Work，公司年度经常性收入在4月突破2亿美元。",
     "is_new": true,
     "lang": "zh",
     "interpretation": "Kimi估值飙至300亿美元，反映国产大模型赛道资本热度持续高涨。"
    },
    {
     "title": "大模型发展三年半，AI圈终于等来了一场“不要大厂，只赌脑洞”的比赛",
     "url": "https://www.qbitai.com/2026/06/431287.html",
     "source": "量子位",
     "date": "2026-06-06",
     "summary": "观众投币定前十！",
     "is_new": false,
     "lang": "zh",
     "interpretation": "比赛聚焦创意而非资本，或催生AI领域新锐突破。"
    },
    {
     "title": "macOS 存储管理漫谈：去重是节约空间的最好方法",
     "url": "https://sspai.com/prime/story/macos-storage-management-deduplication",
     "source": "少数派 - AI",
     "date": "2026-06-05",
     "summary": "虽然最近各种用LLM帮忙整理电脑里的文件、删除垃圾数据的帖子很火，但我天然对这种LLM用法抱有一丝警惕，我始终相信电脑里存在的文件都有自己的意义。所以我就想在这篇文章里和大家聊聊macOS里的存储管理 ...查看全文本文为会员文章，出自《单篇文章》，订阅后可阅读全文。",
     "is_new": false,
     "lang": "zh",
     "interpretation": "去重技术成存储管理关键，提示AI时代数据优化新思路。"
    },
    {
     "title": "NTU 曹子昂教授团队：破解 3D 标注成本难题，只需一张图片丨CVPR 2026",
     "url": "https://www.leiphone.com/category/ai/gOCTM6K2fNwaBttQ.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-05",
     "summary": "PhysX-Anythingt：可从一张照片自动生成可用于机器人训练的物理 3D资产。 作者丨郑佳美、樊天骄 编辑丨郑佳美 在生成式 AI 进入 3D 内容生产之后，行业最先解决的是“看起来像不像”的问题：一个模型能不能从文字或图片生成外观完整、纹理逼真、形状合理的 3D 物体。但随着机器人、具身智能、数字孪生、AR / VR 和工业仿真的发展，真正制约应用落地的矛盾已经变了。现实世界中的物体不是静态摆件，而是带有尺度、材料、重量、关节、摩擦、碰撞和功能关系的物理对象。一个柜子不仅要有柜门，还要知道门轴在哪里、能向哪个方向打开；一副眼镜不仅要有镜框和镜腿，还要知道镜腿能绕哪个关节折叠；一...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "单图3D标注突破，将大幅降低自动驾驶等领域的标注成本。"
    },
    {
     "title": "Coding 能力，正在颠覆大模型的估值逻辑",
     "url": "https://www.leiphone.com/category/industrynews/bwyozCVtFIOJynck.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-05",
     "summary": "大模型赛道的估值逻辑，正在被一个变量粗暴重构。它不是参数，不是月活，不是多模态，是你能不能做好Coding。把四家中国大模型公司的数据拉出来，这条线清晰得不需要统计检验：Coding 能力突出的 DeepSeek 正在洽谈国内 AI 公司史上最大单笔融资 70 亿美元，估值或达 590亿美元。月之暗面在 Kimi K2.5 把 Coding 能力拉满之后，20 天收入超 2025 全年，ARR 3 个月冲到 2 亿美元，半年内四轮融资合计超 39 亿美元，估值飙到 200 亿美元。智谱 GLM-5 拿下 SWE-bench Verified 开源模型榜首，MaaS 平台 ARR 同比暴涨...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "编程能力成为大模型商业价值与竞争格局的关键分水岭。"
    },
    {
     "title": "银河通用创始人王鹤：具身智能正迈向专属的「AlphaGo时刻」与「ChatGPT时刻」 | ICRA 2026",
     "url": "https://www.leiphone.com/category/robot/DZhbEoMS7u3gvJIO.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-05",
     "summary": "具身智能正在敲开AGI的大门，全面引爆属于通用机器人的第四次工业革命。 作者丨岑 峰 编辑丨马晓宁 2026年6月3日，国际机器人与自动化会议（ICRA 2026）在奥地利维也纳进入正会的第二天。在这一天的“行业主题演讲”环节（Industry Keynote Session），具身智能领域知名学者、银河通用（Galbot）创始人和CTO王鹤发表了题为《Towards the AlphaGo and ChatGPT Moments of Embodied AI》的主题演讲。在演讲中，王鹤指出，具身智能正迈向专属的“AlphaGo时刻”与“ChatGPT时刻”。他表示，银河通用已通过两大突...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "具身智能两大里程碑临近，行业从实验室走向规模化落地。"
    },
    {
     "title": "华人学者闪耀维也纳，胡瑞珍、石冠亚、王晓龙等斩获ICRA核心大奖 | ICRA 2026",
     "url": "https://www.leiphone.com/category/robot/ASmQYsOyWk796smb.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-05",
     "summary": "中国学者的智慧，正在拼凑出现代物理 AI的最完整版图。 作者丨岑 峰 编辑丨马晓宁 2026年6月，全球机器人与自动化领域的顶级学术盛会——IEEE 国际机器人与自动化大会（ICRA 2026）在奥地利维也纳盛大举行。作为机器人界的“奥斯卡”，ICRA 每年的颁奖典礼都是全行业瞩目的焦点，它不仅是对过去一年乃至数十年顶尖科研成果的表彰，更是未来技术发展的风向标。在刚刚结束的颁奖典礼上，无论是在极具分量的个人学术生涯奖项，还是在竞争白热化的顶级会议最佳论文评选中，华人学者不仅未曾缺席，更是站在了具身智能、大模型应用以及人形机器人控制等最前沿领域的浪潮之巅。其中，深圳大学特聘教授胡瑞珍，北京...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "华人学者包揽ICRA大奖，彰显中国在机器人领域的全球影响力。"
    },
    {
     "title": "中科闻歌发布 Decitron 决策机：跳出问答大模型，AI 迈入真实世界推演时代",
     "url": "https://www.leiphone.com/category/industrynews/JvMzCFCNVVx3dav9.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-05",
     "summary": "决策机Decitron发布会现场2026年6月5日，中科闻歌正式发布通用决策大模型——Decitron决策机。作为面向复杂事件、复杂系统和复杂决策打造的产品，Decitron决策机不只是回答问题，而是理解事件、推演路径、比较结果，帮助人类在复杂事务中做决策。“AI已经开始像水和电一样进入现实世界和人们的生活。但当AI会聊天、会写作、会画画、会做视频之后，一个更重要的问题正在出现：AI能不能不只是回答问题，而是进一步推演世界、预测未来？”发布会上，中科闻歌董事长王磊抛出了这个关于AI下一阶段发展的关键问题。正是基于对这一问题的思考，中科闻歌正式发布了AI决策时代的全新产品——Decitro...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "从问答到推演，决策机标志着AI从信息处理向真实世界因果推理的关键跨越。"
    },
    {
     "title": "硬氪独家 | 唐文斌「原力灵机」并购物流机器人公司，并获智谱、商汤、阶跃等投资",
     "url": "<![CDATA[https://36kr.com/p/3838835333253385?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-06-05",
     "summary": "作者 | 邱晓芬 编辑 | 袁斯来 硬氪独家获悉，具身智能企业「原力灵机」近期完成新一轮融资，资方主要为数家大模型公司，包括智谱、阶跃星辰、商汤科技。此外，华勤、上汽恒旭等产业投资方持续加注。 「原力灵机」是一家通用具身大模型公司，2025年3月由旷视科技联合创始人兼CTO唐文斌创立，团队核心创始成员为旷视科技原班人马。 有意思的是，此次融资也是商汤、旷视这两家曾经的对手，在具身智能的热潮中罕见“会师”； 另外，算上A+轮独家领投的阿里，这也是具身智能赛道罕见同时聚齐国内四家大模型厂商——此前，智谱仅通过Z基金小范围投资具身智能领域，阶跃星辰则几乎未出手具身智能。 而这一集体动作也释放出...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "唐文斌整合物流机器人公司并获多家AI巨头投资，具身智能产业链加速整合。"
    },
    {
     "title": "早报｜曝苹果Vision Pro系列被砍/多地高考将查验智能眼镜/DeepSeek首轮融资规模约500亿元",
     "url": "https://www.ifanr.com/1668044?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-04",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "苹果战略转向、高考防作弊升级、DeepSeek巨额融资，三件事折射AI竞争白热化。"
    },
    {
     "title": "一夜之间，ChatGPT 变成了第二个 Claude",
     "url": "https://www.ifanr.com/1667898?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-03",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "ChatGPT功能趋同Claude，说明AI助手正陷入同质化竞争，差异化成关键。"
    },
    {
     "title": "早报｜微软发布Windows「梦中神机」/腾讯云DeepSeek-V4最高降价97.5%/徕卡相机或被中国资本收购",
     "url": "https://www.ifanr.com/1667902?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-03",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "微软AI PC、腾讯云降价、徕卡收购传闻，三件事指向AI硬件、云服务、影像三大赛道变局。"
    }
   ]
  },
  {
   "name": "AI Agent与智能体",
   "icon": "🤯",
   "color": "#d97706",
   "count": 19,
   "cards": [
    {
     "title": "datasette-agent-edit 0.1a0",
     "url": "https://simonwillison.net/2026/Jun/7/datasette-agent-edit/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-07",
     "summary": "Release: datasette-agent-edit 0.1a0 I'm planning several plugins for Datasette Agent which can make edits to existing pieces of text - things like collaborative Markdown editing, updating large SQL queries, and editing SVG files. Agentic editing of text is a little tricky to get right. My favorit...",
     "is_new": true,
     "lang": "en",
     "interpretation": "轻量级编辑工具发布，降低AI数据交互门槛，推动实用化进程。"
    },
    {
     "title": "Agentic AI solved coding — and exposed every other problem in software engineering",
     "url": "https://venturebeat.com/technology/agentic-ai-solved-coding-and-exposed-every-other-problem-in-software-engineering",
     "source": "VentureBeat - AI",
     "date": "2026-06-07",
     "summary": "Agentic AI is now a core part of the engineering process, driving massive execution leverage and helping us generate more code than ever before. Yet, a difficult question I’ve increasingly heard from business leaders is: if we’re shipping code faster than ever, why aren’t our products improving a...",
     "is_new": true,
     "lang": "en",
     "interpretation": "代码能力突破反衬工程体系短板，AI需与流程、测试等环节协同进化。"
    },
    {
     "title": "Microsoft's AI Futurist explains how he uses Copilot — and the real-world problems enterprises are solving with agents",
     "url": "https://venturebeat.com/orchestration/microsofts-ai-futurist-explains-how-he-uses-copilot-and-the-real-world-problems-enterprises-are-solving-with-agents",
     "source": "VentureBeat - AI",
     "date": "2026-06-05",
     "summary": "Microsoft used its Build 2026 conference this week to push a clear message: agents are rapidly moving into production throughout enterprise systems, and the winning platform will be the one that gives them reliable context, governance, identity, memory — and secure access to enterprise data. The ...",
     "is_new": false,
     "lang": "en",
     "interpretation": "微软AI专家详解Copilot实际应用，展示企业用智能体解决真实业务难题。"
    },
    {
     "title": "AI agents are learning on the job — just not for your whole team",
     "url": "https://venturebeat.com/orchestration/ai-agents-are-learning-on-the-job-just-not-for-your-whole-team",
     "source": "VentureBeat - AI",
     "date": "2026-06-05",
     "summary": "When someone on a team corrects an AI agent — better prompts, better feedback, better context — that improvement disappears the moment a colleague opens the same tool. The correction doesn't transfer, and the next person starts from zero.The problem compounds in multi-agent workflows, where teams...",
     "is_new": false,
     "lang": "en",
     "interpretation": "AI智能体正边工作边学习，但尚未能覆盖整个团队协作场景。"
    },
    {
     "title": "Meta's AI support agent bound recovery emails for anyone who asked. Your SOC never saw an alert.",
     "url": "https://venturebeat.com/security/meta-ai-support-agent-recovery-email-takeover-soc-audit-grid",
     "source": "VentureBeat - AI",
     "date": "2026-06-05",
     "summary": "Meta's AI support agent bound recovery emails to accounts for whoever asked, and SOCs never saw an alert. An authorized agent writes a log of legitimate transactions, so nothing in the detection stack fired. Attackers asked the bot to make the change, took the one-time code it sent, and ran the p...",
     "is_new": false,
     "lang": "en",
     "interpretation": "Meta的AI客服可自动绑定恢复邮箱，安全团队却毫无察觉，暴露风险。"
    },
    {
     "title": "The Download: AI hacking beyond Mythos, and chatbots’ impact on our brains",
     "url": "https://www.technologyreview.com/2026/06/05/1138452/the-download-ai-hacking-mythos-chatbots-brain-impacts/",
     "source": "MIT Technology Review - AI",
     "date": "2026-06-05",
     "summary": "This is today’s edition of The Download, our weekday newsletter that provides a daily dose of what’s going on in the world of technology. The Meta hack shows there’s more to AI security than Mythos On Monday, reports emerged that attackers had used Meta’s AI customer support agent to steal Instag...",
     "is_new": false,
     "lang": "en",
     "interpretation": "AI黑客攻击超越神话传说，同时聊天机器人正悄然改变人类思维模式。"
    },
    {
     "title": "The Meta hack shows there’s more to AI security than Mythos",
     "url": "https://www.technologyreview.com/2026/06/05/1138437/the-meta-hack-shows-theres-more-to-ai-security-than-mythos/",
     "source": "MIT Technology Review - AI",
     "date": "2026-06-05",
     "summary": "On June 5, 404 Media reported that attackers had been using Meta’s AI customer support agent to steal Instagram accounts. Their approach was simple: They asked the agent to link the accounts to email addresses that they controlled, and the agent complied. One attacker broke into the dormant Obama...",
     "is_new": false,
     "lang": "en",
     "interpretation": "Meta被黑事件暴露AI安全不能只靠虚构的“神话”式防护。"
    },
    {
     "title": "Designing the hf CLI as an agent-optimized way to work with the Hub",
     "url": "https://huggingface.co/blog/hf-cli-for-agents",
     "source": "Hugging Face Blog",
     "date": "2026-06-04",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "Hugging Face设计智能体友好型命令行工具，简化AI模型交互流程。"
    },
    {
     "title": "Adding MCP Tools to Reachy Mini",
     "url": "https://huggingface.co/blog/adding-mcp-tools-to-reachy-mini",
     "source": "Hugging Face Blog",
     "date": "2026-06-03",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "为机器人添加MCP工具，拓展了其在复杂任务中的自主操作能力。"
    },
    {
     "title": "Holo3.1: Fast & Local Computer Use Agents",
     "url": "https://huggingface.co/blog/Hcompany/holo31",
     "source": "Hugging Face Blog",
     "date": "2026-06-02",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "本地化、快速运行的计算机使用代理，提升AI在个人设备上的实用性。"
    },
    {
     "title": "micropython-wasm 0.1a1",
     "url": "https://simonwillison.net/2026/Jun/2/micropython-wasm/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-02",
     "summary": "Release: micropython-wasm 0.1a1 Fixes for some limitations that emerged while I was trying to use this to build datasette-agent-micropython. Tags: python, sandboxing, webassembly, micropython",
     "is_new": false,
     "lang": "en",
     "interpretation": "MicroPython在WebAssembly上运行，拓展了嵌入式AI的浏览器端应用。"
    },
    {
     "title": "Rehumanizing global health care with agentic AI",
     "url": "https://www.technologyreview.com/2026/06/02/1137827/rehumanizing-global-health-care-with-agentic-ai/",
     "source": "MIT Technology Review - AI",
     "date": "2026-06-02",
     "summary": "The global health care sector is under increasing strain. Decades of chronic underinvestment and constraints in recruitment have coincided with a surge in demand for services for aging populations. Gaps in provision are already taking a toll, with fragmented access to care and high rates of stres...",
     "is_new": false,
     "lang": "en",
     "interpretation": "用智能体AI重构医疗体系，有望解决资源不均与效率低下问题。"
    },
    {
     "title": "从感知智能到智能体 AI：高通汽车中国布局深化加速",
     "url": "https://www.ifanr.com/1668242?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-06",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "高通加码智能体与汽车融合，推动车载AI从感知到决策升级。"
    },
    {
     "title": "从 INSPIRE 创想者大会看华为云：它正在 AI 时代给自己找一个更清晰的位置",
     "url": "https://www.leiphone.com/category/CorporateServices/93NsFoqxglrbXa26.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-05",
     "summary": "今年上半年，外界看华为云在AI上的战略，常常会有一种模糊感。过去6个月，云厂商的AI叙事变得越来越具体：阿里云、火山引擎都在讲模型调用量，讲MaaS收入，腾讯云目前在讲爆款应用。相比之下，华为云在AI时代究竟要把自己的核心位置放在哪里，外界此前并不总是看得很清楚。这一次华为云INSPIRE创想者大会给了一个很好的观察窗口。从这次大会来看，华为云正在把自己的位置讲得更清楚：向下，它要做智能体时代的“硅基黑土地”；向上，它要从医疗、具身智能、制造、科研这些行业场景里，寻找AI商业化的出口。华为云不想只被MaaS定义在这次活动媒体群访中，雷峰网抛给了华为云CEO一个很直接的问题：今年上半年，阿...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "华为云正从云服务商转向AI时代的底层能力与生态构建者。"
    },
    {
     "title": "腾讯文档行业首发「人机双写」，支持Word、PPT与数据图表",
     "url": "https://www.leiphone.com/category/industrynews/qSkgFVNBfMkyDldg.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-05",
     "summary": "6月5日，在2026腾讯云AI产业应用大会上，腾讯文档宣布全面升级，正式发布行业首创的「人机双写」能力。从专供人使用的编辑工具，正式进化为人与AI共同工作的新一代内容平台。依托首发的「人机双写」能力，腾讯文档让AI办公从过去来回切屏、手动复制粘贴的繁琐模式，变成能在文档里与用户同屏接力干活的数字同事。比如，用户列好文字提纲，AI即可直接按照逻辑接力填补细节；在处理幻灯片或数据时，AI也能实时接力，一键生成排版精美的PPT或直观的可视化图表。 这一突破性体验的背后，得益于腾讯文档与WorkBuddy的深度技术融合。腾讯文档原生采用了WorkBuddy的统一Agent内核，结合文档自研的高性...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "人机协同编辑模式将大幅提升办公效率，推动文档工具向智能化协作演进。"
    },
    {
     "title": "华为云发布Agentic AI系列新品 打造智能时代“硅基黑土地”",
     "url": "https://www.leiphone.com/category/citydigital/I7sO2yPT7tpnmnZk.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-05",
     "summary": "[中国，上海，2026年6月5日] 今天，华为云INSPIRE创想者大会在上海西岸国际会展中心开幕。华为云在本次新品发布会上正式提出Agentic Infra新范式，并发布Agentic Infra通智一体化基础设施、新一代模型训推平台、企业级智能体平台等系列Agentic AI新品，打造企业级Agentic AI创新的“硅基黑土地”。大会还宣布正式上线“行业AI梦工厂”智慧医疗、具身智能、智能制造、科学计算四大专区，坚持用AI解行业难题，加速发展行业数智化生态。定义Agentic Infra新范式，软硬芯协同做厚“硅基黑土地”华为公司董事、华为云CEO周跃峰指出，Agentic AI时...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "华为云以“硅基黑土地”为定位，为AI应用提供底层基础设施，加速行业智能化转型。"
    },
    {
     "title": "微信AI对手机厂商打开一道窄门｜焦点分析",
     "url": "<![CDATA[https://36kr.com/p/3839575253993985?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-06-05",
     "summary": "文｜王毓婵 梁键强 编辑｜张雨忻 昨日，腾讯客服回应称，微信正在与华为、小米、荣耀、OPPO、vivo等手机厂商合作推出A2A助手能力，目前已有多家厂商完成接入。 “您可以通过对应手机系统的AI助手发起微信音视频通话或向指定好友发送消息。该功能基于A2A（Agent-to-Agent）协作机制，数据安全与隐私通过双重授权机制保障。合作旨在将微信高频沟通功能融入手机系统助手，为您提供更便捷的使用体验。”腾讯客服表示。 与之前字节跳动推出的豆包手机相比，腾讯的微信AI采取了完全不同的技术路径。 以豆包手机为代表的很多 OS 端 AI 助手，走的是 GUI agent（图形界面智能体） 路线—...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "微信AI向手机厂商开放接口，可能重塑移动端AI服务分发格局。"
    },
    {
     "title": "刚刚，Windows「梦中神机」来了，把你的 PC 变成 Agent 工位",
     "url": "https://www.ifanr.com/1667971?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-03",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "微软将PC升级为AI代理工作站，标志操作系统从工具平台向智能体平台进化。"
    },
    {
     "title": "制糖工厂发布 AI 小电拼 Mirror，支持 AI Agent 原生接入",
     "url": "https://www.ifanr.com/1667908?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-03",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "充电硬件接入AI Agent，预示智能设备正从“被控制”转向“主动服务”。"
    }
   ]
  },
  {
   "name": "具身智能与机器人",
   "icon": "🤖",
   "color": "#059669",
   "count": 5,
   "cards": [
    {
     "title": "Catch up on the Dialogues stage at Google I/O 2026.",
     "url": "https://blog.google/innovation-and-ai/technology/ai/io-2026-dialogues-recap/",
     "source": "Google AI Blog",
     "date": "2026-05-22",
     "summary": "A recap of the 2026 I/O Dialogues, where leaders discuss the future of AI, quantum computing, robotics and creativity.",
     "is_new": false,
     "lang": "en",
     "interpretation": "I/O对话环节回顾，聚焦AI伦理与行业前沿讨论。"
    },
    {
     "title": "波恩大学 Maren Bennewitz 教授：让机器人在遮挡世界中主动获取信息 | ICRA 2026",
     "url": "https://www.leiphone.com/category/ai/Y65BpmoLEhUaqnNS.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-05",
     "summary": "机器人不能只会“看见”。 作者丨郑佳美 编辑丨马晓宁 2026 年 6 月 4 日，在 ICRA 2026 “Robot perception and spatial AI” Keynote Session 上，波恩大学教授 Maren Bennewitz 发表了关于主动感知机器人的演讲，直指真实机器人部署中的一个基本困境：机器人面对的世界往往是杂乱、持续变化且只能部分观测的，仅靠被动观察无法完成可靠理解。Bennewitz 的核心判断是：机器人要真正进入家庭、农业和服务场景，不能只把感知当作“看一眼”的过程，而必须把感知、预测、先验知识和动作规划放到同一个闭环里。机器人需要主动移动视角...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "机器人主动感知遮挡环境，提升复杂场景下的自主决策能力。"
    },
    {
     "title": "独家解读丨时隔五年，OpenAI为何非要吃机器人这口「回头草」？",
     "url": "https://www.leiphone.com/category/industrynews/0P8KvQPzWQpU9F40.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-05",
     "summary": "时隔五年，山姆·奥特曼为何重返机器人？这是他在X上官宣这则消息后，业内最大的疑问。是担心股价破发，开始拼命画饼讲故事了？还是Anthropic万亿估值压顶下，OpenAI不得不寻求更大差异化？亦或是说，物理世界的 AGI 临界点真的已到来？聚光灯正在移位。2026年的AI科技舞台上，OpenAI 早已告别了独占鳌头的绝对主角时代。随着马斯克SpaceX、OpenAI、Anthropic 三家超级巨头相继步入美股 IPO 的敲钟倒计时，一场残酷的估值绞杀战已然打响。SpaceX已突破1.75万亿美元，Anthropic估值也已超过OpenAI，以9650亿距万亿一步之遥，这也让卡在两大巨头...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "机器人赛道重获OpenAI青睐，反映AI从虚拟交互向物理世界落地的战略转向。"
    },
    {
     "title": "ICRA 2026 现场：中国军团主导维也纳，新锐巨头混战具身智能深水区",
     "url": "https://www.leiphone.com/category/robot/FQ8kbFW5Lq956az4.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-05",
     "summary": "史上最大ICRA，中国惊艳世界。 作者丨吴思梦 编辑丨岑 峰 宇树科技、千寻智能、帕西尼、智元机器人、加速进化、高擎机电、光轮智能、银河通用、魔法原子、戴盟机器人、鹿明机器人等企业在本届 ICRA 的核心工业展区，放眼望去皆是中国展商的身影。这一幕，让日本参会学者Shohei Hido在现场直接感叹：“China is dominating”——中国展商，已经成为本届ICRA最醒目的存在。当多瑙河畔的音乐之都响起代码与算法的交响，全球机器人学界一年一度的“奥林匹克”——IEEE国际机器人与自动化会议（ICRA 2026），于6月1日在奥地利维也纳正式拉开帷幕。本届大会以“Robots f...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "中国企业在具身智能领域集中发力，显示该赛道正从学术研究转向产业混战。"
    },
    {
     "title": "早报｜OpenAI官宣进军机器人领域/AI误把文物照片上架，闲鱼致歉/天涯社区重启首日被挤爆",
     "url": "https://www.ifanr.com/1667792?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-02",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "OpenAI入局将加速机器人智能化，AI审核失误暴露平台数据治理漏洞，天涯重启折射怀旧经济潜力。"
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
     "interpretation": "Meta自产AI点击诱饵新闻，加剧信息生态污染。"
    },
    {
     "title": "Nemotron 3.5 Content Safety: Customizable Multimodal Safety for Global Enterprise AI",
     "url": "https://huggingface.co/blog/nvidia/nemotron-3-5-content-safety",
     "source": "Hugging Face Blog",
     "date": "2026-06-04",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "英伟达推出可定制多模态安全工具，助力企业AI全球合规部署。"
    },
    {
     "title": "郭明錤：苹果已砍掉 Vision Pro，改玩 AI 眼镜了",
     "url": "https://cn.technode.com/post/2026-06-04/kuo-apple-vision-pro/",
     "source": "动点科技 - AI",
     "date": "2026-06-04",
     "summary": "知名分析师郭明錤发帖称，苹果 XR 头显 […]",
     "is_new": false,
     "lang": "zh",
     "interpretation": "苹果放弃高价头显转攻AI眼镜，显示消费级AR路线正在被重新定义。"
    }
   ]
  },
  {
   "name": "AI硬件与芯片",
   "icon": "💾",
   "color": "#0891b2",
   "count": 7,
   "cards": [
    {
     "title": "What to expect from WWDC 2026: Siri’s highly anticipated revamp and Apple Intelligence updates",
     "url": "https://techcrunch.com/2026/06/06/what-to-expect-from-wwdc-2026-siris-highly-anticipated-revamp-and-apple-intelligence-updates/",
     "source": "TechCrunch - AI",
     "date": "2026-06-06",
     "summary": "Apple's WWDC nears: Here's what you can look forward to.",
     "is_new": false,
     "lang": "en",
     "interpretation": "Siri大改版与苹果AI更新是WWDC 2026最受关注亮点。"
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
     "interpretation": "智能时代生物防御技术升级，关乎国家安全与生物安全战略布局。"
    },
    {
     "title": "OpenAI芯片核心叛逃Anthropic！就在量产前夜",
     "url": "https://www.qbitai.com/2026/06/431499.html",
     "source": "量子位",
     "date": "2026-06-07",
     "summary": "帮OpenAI从零造出第一颗芯片的人，转投Anthropic了",
     "is_new": true,
     "lang": "zh",
     "interpretation": "OpenAI芯片核心人才量产前夜转投Anthropic，可能动摇其硬件自主化进程。"
    },
    {
     "title": "比亚迪重磅发布中国首款4nm制程智驾芯片 布局高等级自动驾驶",
     "url": "https://www.leiphone.com/category/transportation/7dY2VaaFzmB8aCxi.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-05",
     "summary": "2026年5月28日，比亚迪召开“敢为”智能化战略发布会，董事长王传福表示：“电动化上半场看电池，智能化下半场看芯片。”由此，比亚迪重磅发布中国首款4nm制程智驾芯片——璇玑A3，加速推进智能化下半场进程，引领全球汽车行业智能化变革。此外，继为智能泊车安全兜底后，比亚迪再次率先承诺为城市领航安全兜底1年，并宣布全系车型均可搭载天神之眼B 辅助驾驶激光版，选装价格12000元，开创全民城市领航时代，让好技术人人可享、人人放心享！ 从人的真实需求出发 比亚迪设立智能化下半场三大目标过去几年，全球迎来新一轮人工智能发展浪潮，感知硬件、芯片的发展速度超乎想象，这些推动着汽车从单纯的出行工具进化为...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "比亚迪自研4nm芯片，标志中国车企突破智驾核心硬件壁垒。"
    },
    {
     "title": "他用WPS笔记，把AI报错变成了可复用的“避坑指南”",
     "url": "https://www.leiphone.com/category/industrynews/my3uIlmkVcHIKgu3.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-05",
     "summary": "“AI Coding 最大的风险不是写不出代码，而是忘记了自己为什么做出某个判断。”这不是一句抽象判断，而是工程师曹健在反复处理 AI 报错后得到的真实体会。6月5日，在金山办公旗下「WPS AI Next」活动现场，他从自己的 AI Coding 工作流讲起，分享了使用 WPS 笔记沉淀技术经验的故事。当天发布的 WPS 笔记，是一款面向个人知识管理场景的 AI 原生多模态笔记产品，主张“随心记录，轻松有序”。对曹健来说，这句话并不抽象。它对应的是一次半夜两点的报错、一套 47 万字的资料库，以及一次从 30 分钟到 3 分钟的排查效率变化。那次GPU飙到100%后，他多年的积累没能帮...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "普通人用AI工具沉淀经验，展现人机协作的实用价值。"
    },
    {
     "title": "618大促小米迎来开门红，摘得京东手机竞速榜国产冠军",
     "url": "https://www.leiphone.com/category/industrynews/UuldegmKFW9zsxhE.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-05",
     "summary": "2026 年 618 大促正在进行中，活动从 5 月中旬持续到 6 月18 日，大促进度过半。近日，各电商平台宣布启动开门红活动新政策。小米 618 迎来开门红，多个爆款手机、科技家电销量可圈可点。以京东手机竞速榜为例，截至6 月1 日下午 19点，小米摘得京东手机竞速榜国产累计销量冠军。值得一提的是，小米 15 Ultra直降 1500 元，成为本次 618 期间小米手机优惠力度最大的旗舰机。存储涨价持续发酵，618成锁定低价关键窗口随着618大促全面开启，消费电子市场迎来年中换新热潮。多家媒体持续关注智能手机行业价格走势，在存储芯片价格持续上涨、终端成本不断承压的背景下，今年618成...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "小米618首战告捷，国产手机在高端市场持续挤压苹果份额。"
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
     "interpretation": "入门PyTorch性能分析工具，帮助开发者优化模型训练与推理效率。"
    },
    {
     "title": "5分钟AI长视频不翻车！国产开源框架杀到全球第一梯队",
     "url": "https://www.qbitai.com/2026/06/431401.html",
     "source": "量子位",
     "date": "2026-06-07",
     "summary": "高一致性、低延迟、实时超分全梭哈",
     "is_new": true,
     "lang": "zh",
     "interpretation": "国产开源框架实现5分钟长视频稳定生成，打破海外技术垄断并跻身全球第一梯队。"
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
     "interpretation": "服务中断暴露AI工具依赖风险，稳定性成企业级应用关键。"
    },
    {
     "title": "OpenAI is still working on that ‘super app’",
     "url": "https://techcrunch.com/2026/06/07/openai-is-still-working-on-that-super-app/",
     "source": "TechCrunch - AI",
     "date": "2026-06-07",
     "summary": "\"Chat is dead\" — at least, according to a senior OpenAI employee.",
     "is_new": true,
     "lang": "en",
     "interpretation": "超级应用布局显示OpenAI正试图整合功能，争夺用户入口。"
    },
    {
     "title": "The Trump administration might take an equity stake in OpenAI",
     "url": "https://techcrunch.com/2026/06/06/the-trump-administration-might-take-an-equity-stake-in-openai/",
     "source": "TechCrunch - AI",
     "date": "2026-06-06",
     "summary": "President Donald Trump said he's discussing deals \"where the American people can benefit from the success of AI.\"",
     "is_new": false,
     "lang": "en",
     "interpretation": "政府持股OpenAI将重塑AI行业政商关系格局。"
    },
    {
     "title": "Crypto-Funded Chinese Peptide Labs Are Booming",
     "url": "https://www.wired.com/story/security-news-this-week-crypto-funded-chinese-peptide-labs-are-booming/",
     "source": "Wired - AI",
     "date": "2026-06-06",
     "summary": "Plus: Hackers use Meta’s AI bots to hack Instagram accounts, Anthropic helps NSA hackers, a decades-long GPS satellite mystery may have been solved, and more.",
     "is_new": false,
     "lang": "en",
     "interpretation": "加密货币资助的肽类实验室兴起，引发监管与伦理担忧。"
    },
    {
     "title": "Startup Battlefield 200 applications officially close in 3 days",
     "url": "https://techcrunch.com/2026/06/05/startup-battlefield-200-applications-officially-close-in-3-days/",
     "source": "TechCrunch - AI",
     "date": "2026-06-05",
     "summary": "Applications for Startup Battlefield 200 officially close on June 8, 11:59 p.m. PT. Don't wait any longer. Secure your shot at competing on the Disrupt Stage at TechCrunch Disrupt 2026 this October at San Francisco's Moscone West.",
     "is_new": false,
     "lang": "en",
     "interpretation": "创业大赛报名即将截止，意味着大量创新项目将集中亮相，可能催生下一波科技独角兽。"
    },
    {
     "title": "The most interesting startups right now want to get you off your phone",
     "url": "https://techcrunch.com/video/the-most-interesting-startups-right-now-want-to-get-you-off-your-phone/",
     "source": "TechCrunch - AI",
     "date": "2026-06-05",
     "summary": "While the AI fundraising machine keeps breaking its own records, some founders are building in the other direction. Mirror founder Brynn Putnam just raised money for Board, a startup focused on bringing people together through in-person games and social experiences. Cyberdeck creators are going v...",
     "is_new": false,
     "lang": "en",
     "interpretation": "这些创业公司试图帮用户减少手机依赖，反映数字健康正成为科技行业新增长点。"
    },
    {
     "title": "The ‘together tech’ wave might be the most intriguing startup bet of 2026",
     "url": "https://techcrunch.com/podcast/the-together-tech-wave-might-be-the-most-intriguing-startup-bet-of-2026/",
     "source": "TechCrunch - AI",
     "date": "2026-06-05",
     "summary": "While the AI fundraising machine keeps breaking its own records, some founders are building in the other direction. Mirror founder Brynn Putnam just raised money for Board, a startup focused on bringing people together through in-person games and social experiences. Cyberdeck creators are going v...",
     "is_new": false,
     "lang": "en",
     "interpretation": "“协同技术”浪潮可能成为2026年最受关注的创业方向，预示人机协作将重塑工作模式。"
    },
    {
     "title": "Small modular nuclear reactor reaches criticality in first test",
     "url": "https://arstechnica.com/science/2026/06/first-us-test-of-modular-reactor-reaches-criticality/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-05",
     "summary": "The reactor, from a startup called Antares, isn't ready to generate power yet.",
     "is_new": false,
     "lang": "en",
     "interpretation": "小型模块化核反应堆首次实现临界，为清洁能源提供更灵活、安全的分布式供电方案。"
    },
    {
     "title": "S&P 500 rejects SpaceX, also blocking entry for OpenAI and Anthropic",
     "url": "https://arstechnica.com/tech-policy/2026/06/sp-500-blocks-fast-spacex-entry-wont-waive-rule-for-unprofitable-ai-firms/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-05",
     "summary": "SpaceX won’t get easy access to billions of dollars from passive investors.",
     "is_new": false,
     "lang": "en",
     "interpretation": "标普500拒绝SpaceX等科技巨头，反映传统指数对新兴产业的保守态度。"
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
     "interpretation": "投资者同时押注OpenAI与Anthropic，显示AI赛道竞争未定胜负。"
    },
    {
     "title": "The AI IPO Race Heats Up, DOGE Whistleblower Sues Elon Musk, and Instagram Gets Hacked",
     "url": "https://www.wired.com/story/uncanny-valley-podcast-ai-ipo-race-elon-musk-doge-whistleblower-instagram-hacking-incident/",
     "source": "Wired - AI",
     "date": "2026-06-04",
     "summary": "On Uncanny Valley, we dive into the IPO bonanza that the top AI companies are embarking on to the point where some real estate listings are looking for not just regular old cash, but Anthropic stock.",
     "is_new": false,
     "lang": "en",
     "interpretation": "AI公司上市竞争白热化，内部举报与安全漏洞暴露行业治理风险。"
    },
    {
     "title": "Jeff Bezos Is Funding a Wild Hunt for the Brain’s ‘Core Algorithm’",
     "url": "https://www.wired.com/story/jeff-bezos-is-funding-a-wild-hunt-for-the-brains-core-algorithm/",
     "source": "Wired - AI",
     "date": "2026-06-04",
     "summary": "With $500 million in funding and a reported $2.5 billion valuation, Flourish wants to reinvent AI by putting real neurons under the microscope.",
     "is_new": false,
     "lang": "en",
     "interpretation": "贝佐斯投资破解大脑算法，可能颠覆AI与神经科学融合方向。"
    },
    {
     "title": "OpenAI and Anthropic Sign Letter to Prevent AI-Developed Biological Weapons",
     "url": "https://www.wired.com/story/openai-anthropic-letter-ai-biological-weapons/",
     "source": "Wired - AI",
     "date": "2026-06-04",
     "summary": "Leading AI labs, executives, and scientists are sending a letter to lawmakers urging them to improve tracking of synthetic DNA sequences that could be used for bioweapons.",
     "is_new": false,
     "lang": "en",
     "interpretation": "头部AI企业主动约束技术滥用，为生物安全设立行业红线。"
    },
    {
     "title": "A blueprint for democratic governance of frontier AI",
     "url": "https://openai.com/index/frontier-safety-blueprint",
     "source": "OpenAI Blog",
     "date": "2026-06-03",
     "summary": "OpenAI outlines a blueprint for U.S. governance of frontier AI, proposing a federal framework for safety, resilience, and national security.",
     "is_new": false,
     "lang": "en",
     "interpretation": "为前沿AI的民主治理提供框架，关乎技术发展方向与公众利益。"
    },
    {
     "title": "OpenAI public policy agenda",
     "url": "https://openai.com/index/public-policy-agenda",
     "source": "OpenAI Blog",
     "date": "2026-06-03",
     "summary": "OpenAI outlines its public policy agenda for AI, including safety, youth protection, workforce transition, and global standards to ensure AI benefits society.",
     "is_new": false,
     "lang": "en",
     "interpretation": "公开政策议程，揭示OpenAI对监管、安全与社会影响的战略布局。"
    },
    {
     "title": "Travelers deploys AI-powered claims countrywide with OpenAI",
     "url": "https://openai.com/index/travelers",
     "source": "OpenAI Blog",
     "date": "2026-06-02",
     "summary": "Travelers built an AI-powered Claim Assistant with OpenAI to guide customers through filing claims, provide 24/7 support, and scale operations during peak demand.",
     "is_new": false,
     "lang": "en",
     "interpretation": "旅行者保险全美部署AI理赔，标志保险业大规模应用AI提升效率。"
    },
    {
     "title": "The Download: AI can run your admin department now",
     "url": "https://www.technologyreview.com/2026/06/02/1138277/the-download-ai-tips-small-businesses-admin/",
     "source": "MIT Technology Review - AI",
     "date": "2026-06-02",
     "summary": "This is today’s edition of The Download, our weekday newsletter that provides a daily dose of what’s going on in the world of technology. How small businesses can leverage AI From accounting to design to market research and product development, there’s a staggering breadth of skills needed to run...",
     "is_new": false,
     "lang": "en",
     "interpretation": "AI接管行政流程，可能大幅降低企业运营成本并重塑岗位结构。"
    },
    {
     "title": "派早报：乘用车越造越重，12 年增重近 400 公斤",
     "url": "https://sspai.com/post/110847",
     "source": "少数派 - AI",
     "date": "2026-06-08",
     "summary": "乘用车越造越重，12 年增重近 400 公斤iFixit 拆解华强北山寨苹果产品Cloudflare 收购 Vite 背后公司rsync 疑因 AI 参与维护出现 bug，引发争议OpenAI 与美国政府商讨捐赠股权美国平均上路车龄达到 13 年看看就行的简讯少数派的近期动态你可能错过的好文章查看全文",
     "is_new": true,
     "lang": "zh",
     "interpretation": "乘用车重量持续增加，影响燃油效率与新能源车续航。"
    },
    {
     "title": "「华超神控」获亿元天使系列融资，加速打造新一代AI超声脑机接口平台 | 36氪首发",
     "url": "<![CDATA[https://36kr.com/p/3841459663030532?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-06-08",
     "summary": "文｜胡香赟 编辑｜海若镜 36氪获悉，近日，新一代AI超声脑机公司华超神控（BCI-Sonics）已完成亿元人民币级天使轮系列融资。天使轮融资由经纬创投领投，天使+轮由德联资本、道远资本联合领投，循光资本持续担任独家财务顾问。募集资金将用于推动公司的技术验证与产业化落地。 华超神控于2025年创立，创始人李昕是中国科学院与德国弗劳恩霍夫IGD研究所联合培养生物医学工程博士，曾任GE医疗全球科研中心中国区负责人，并连续创立创新科技及医疗公司，在医疗影像、AI、脑机接口与产业转化方面拥有深厚积累。 公司核心团队汇聚了来自清华大学、上海交通大学、帝国理工等海内外高校的人才，覆盖神经科学、声学、...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "AI超声脑机接口获资本加持，医疗与神经交互技术融合提速。"
    },
    {
     "title": "马斯克39页SpaceX计划，人类史上最伟大的PPT",
     "url": "https://www.qbitai.com/2026/06/431694.html",
     "source": "量子位",
     "date": "2026-06-07",
     "summary": "人类历史最大规模的IPO招股开始了！",
     "is_new": true,
     "lang": "zh",
     "interpretation": "马斯克SpaceX计划被称“最伟大PPT”，凸显其愿景对航天产业的颠覆性影响。"
    },
    {
     "title": "9点1氪｜豆包推出付费后月活减少610万；Anthropic呼吁全球放缓AI开发，警告AI“自我改进”风险；罗永浩卸任锤子软件公司执行董事",
     "url": "<![CDATA[https://36kr.com/p/3840996342073604?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-06-06",
     "summary": "今日热点导览 SpaceX据悉将其IPO的日本融资目标提高至25亿美元 二手房挂牌量回落新房库存下降，楼市供需关系向好 B站宣布启动AI创造公开赛 TOP3大新闻 数据显示，豆包推出付费后月活减少610万 据全球人工智能市场追踪机构Aicpb.com周三发布的数据显示，在豆包推出订阅选项后，该应用5月份的月活跃用户（MAU）减少了610万，这是自2023年推出以来该应用罕见的下滑。Aicpb.com创始人李邦竹表示：“中国的免费人工智能服务时代还远未结束，所以豆包的商业化可能确实为时过早。” 有分析人士认为，字节跳动过早地将盈利模式商业化，可能会使其在中国竞争激烈的消费人工智能市场中失去...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "豆包付费用户流失、Anthropic警告风险，AI商业化与安全争议升温。"
    },
    {
     "title": "ThinkAR AiLENS V1 AI智能眼镜正式于日本上市，亚洲市场布局持续扩展",
     "url": "https://www.leiphone.com/category/industrynews/AqCfShBxj7cZCuRD.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-05",
     "summary": "轻量化可穿戴AI设备，将实时翻译、AI助手、来电通知与提词功能直接呈现于用户视野之中。东京/上海——2026年6月5日——ThinkAR今日宣布AiLENS V1 AI智能眼镜于日本正式上市。这款轻量化AI可穿戴设备以「让AI信息随时可见、即时获取、解放双手」为核心设计理念，标志着 ThinkAR在亚洲重点市场持续扩展的下一阶段。AiLENS V1可将实用信息直接显示于用户的视野范围内。通过与智能手机配对，用户无需频繁低头查看手机，即可获取实时翻译内容、AI 助手回复、来电通知及提词信息。产品支持76种语言的实时翻译，适用于商务出行、酒店旅游、零售服务、教育培训、跨国会议、业务演示及跨境...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "智能眼镜在日本上市，标志亚洲消费级AR设备进入规模化市场拓展阶段。"
    },
    {
     "title": "氪星晚报 ｜日本或通过抛售美债，为创纪录规模的日元汇市干预筹资；俞浩内部发文：未来将继续心无旁骛做实业",
     "url": "<![CDATA[https://36kr.com/p/3840267945969929?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-06-05",
     "summary": "大公司： 首关15亿元，英诺科创三期基金持续聚焦早期科技投资 36氪获悉，6月5日，英诺基金宣布旗下英诺科创三期基金完成首轮关账，规模15亿元。该基金聚焦早期科技投资，重点布局前沿科技及人工智能领域。 比特币“金库”公司市值蒸发620亿美元 比特币本周下跌约14%，至四个月低点附近。随着加密货6月5日下午，追觅科技创始人俞浩在公司内部大群发文，表示未来将继续心无旁骛做实业，坚持技术创新，去啃全球最难的市场。（界面）币整体滑坡，数字资产“金库型”公司的股票也持续下挫，其中许多的跌幅远远超过它们所持有的加密货币本身。Artemis的数据显示，这些比特币金库公司的完全稀释股票总市值，已从去年1...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "日本或抛售美债干预汇市，凸显全球金融政策联动下的汇率博弈与风险传导。"
    },
    {
     "title": "Anthropic 抢跑 IPO，AI 巨头接连秘密上市，背后是怎样的攻防战",
     "url": "https://www.ifanr.com/1667829?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-02",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "Anthropic秘密冲刺IPO，揭示AI巨头在资本、技术、监管间的复杂博弈。"
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
     "interpretation": "技术失灵致诉讼，凸显AI安防系统可靠性关乎生命安全责任。"
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
     "title": "Is this the dawn of the Tokenpocalypse?",
     "url": "https://techcrunch.com/2026/06/07/is-this-the-dawn-of-the-tokenpocalypse/",
     "source": "TechCrunch - AI",
     "date": "2026-06-07",
     "summary": "We're likely to see more price increases as the big AI companies plan to go public.",
     "is_new": true,
     "lang": "en",
     "interpretation": "代币消耗激增或预示AI应用成本与资源分配面临拐点。"
    },
    {
     "title": "Amazing Digital Dentures (a failed project)",
     "url": "https://huggingface.co/blog/build-small-hackathon/amazingdigitaldentures",
     "source": "Hugging Face Blog",
     "date": "2026-06-07",
     "summary": "",
     "is_new": true,
     "lang": "en",
     "interpretation": "失败案例警示：技术落地需匹配真实需求，避免资源浪费。"
    },
    {
     "title": "RIP Anthony Head: Our 10 favorite moments of Buffy's Giles",
     "url": "https://arstechnica.com/culture/2026/06/rip-anthony-head-our-10-favorite-moments-of-buffys-giles/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-07",
     "summary": "Head's true genius—and that of his character, Giles—lay in quietly filling in the gaps in every scene",
     "is_new": true,
     "lang": "en",
     "interpretation": "纪念经典角色背后，是文化符号对一代人集体记忆的深远影响。"
    },
    {
     "title": "AI ‘content creators’ are getting harder to spot",
     "url": "https://www.theverge.com/ai-artificial-intelligence/943187/ai-content-creators",
     "source": "The Verge - AI",
     "date": "2026-06-07",
     "summary": "This is The Stepback, a weekly newsletter breaking down one essential story from the tech world. For more on AI confusion, follow Robert Hart. The Stepback arrives in our subscribers' inboxes at 8AM ET. Opt in for The Stepback here. How it started At first, AI influencers were relatively easy to ...",
     "is_new": true,
     "lang": "en",
     "interpretation": "内容真假难辨加剧信息污染，AI生成物监管与识别技术亟待升级。"
    },
    {
     "title": "Sriram Krishnan is leaving his role as White House AI advisor",
     "url": "https://techcrunch.com/2026/06/06/sriram-krishnan-is-leaving-his-role-as-white-house-ai-advisor/",
     "source": "TechCrunch - AI",
     "date": "2026-06-06",
     "summary": "Krishnan is reportedly starting a new institution to continue shaping Trump's AI policy.",
     "is_new": false,
     "lang": "en",
     "interpretation": "白宫AI顾问离职可能影响美国AI政策走向。"
    },
    {
     "title": "Scientists ejected from diabetes conference for distributing journal reprints",
     "url": "https://arstechnica.com/science/2026/06/scientists-ejected-from-diabetes-conference-for-distributing-journal-reprints/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-06",
     "summary": "Those ousted included ADA journal editor-in-chief Steven Kahn and former ADA president Desmond Schatz",
     "is_new": false,
     "lang": "en",
     "interpretation": "学术会议驱逐分发论文者，凸显开放获取争议。"
    },
    {
     "title": "Some ancient microbes frozen with Ötzi the Iceman are still growing",
     "url": "https://arstechnica.com/science/2026/06/otzis-mummified-body-is-home-to-ancient-strains-of-yeast-and-bacteria/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-06",
     "summary": "What’s the difference between a person, an artifact, and an ecosystem?",
     "is_new": false,
     "lang": "en",
     "interpretation": "冰人微生物复活研究或揭示极端环境生命存活机制。"
    },
    {
     "title": "The mayor of Shelbyville, Indiana, says only people who live in ‘shitty houses’ oppose data center",
     "url": "https://www.theverge.com/ai-artificial-intelligence/944984/shelbyville-indiana-mayor-shitty-houses-data-center",
     "source": "The Verge - AI",
     "date": "2026-06-06",
     "summary": "A proposed $2 billion data center has become a political flashpoint in the small city of Shelbyville, Indiana. And the controversy has only grown more intense after the mayor, Scott Furgeson, was caught on camera saying of the \"No Data Center\" signs going up that, \"I've seen a lot of these all ov...",
     "is_new": false,
     "lang": "en",
     "interpretation": "市长言论折射数据中心选址引发的社区利益冲突。"
    },
    {
     "title": "Here comes new Siri again",
     "url": "https://www.theverge.com/tech/944245/apple-wwdc-2026-ai-siri-gemini",
     "source": "The Verge - AI",
     "date": "2026-06-06",
     "summary": "Apple has been on its back foot, AI-wise, for the past few years. But in a strange way, playing from behind might not be such a bad move. At WWDC on Monday, Apple appears to be getting ready to reintroduce us to the new Siri. Again. As a reminder, we met the new Siri in […]",
     "is_new": false,
     "lang": "en",
     "interpretation": "新版Siri再次发布，反映苹果AI战略持续调整。"
    },
    {
     "title": "micropython-wasm 0.1a2",
     "url": "https://simonwillison.net/2026/Jun/6/micropython-wasm/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-06",
     "summary": "Release: micropython-wasm 0.1a2 I added a CLI to micropython-wasm (issue #7), inspired by the first draft of the blog entry when I realized it would be a great way to illustrate the Try it yourself section. Tags: python, sandboxing, webassembly, micropython",
     "is_new": false,
     "lang": "en",
     "interpretation": "将MicroPython与WASM结合，可在浏览器中安全运行Python代码，拓展了Web应用开发边界。"
    },
    {
     "title": "Running Python code in a sandbox with MicroPython and WASM",
     "url": "https://simonwillison.net/2026/Jun/6/micropython-in-a-sandbox/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-06",
     "summary": "I've been experimenting with different approaches to running code in a sandbox for several years now, but my latest attempt feels like it might finally have all of the characteristics I've been looking for. I've released it as an alpha package called micropython-wasm, and I'm using it for a code ...",
     "is_new": false,
     "lang": "en",
     "interpretation": "利用沙箱技术隔离Python执行环境，能有效防止恶意代码影响主机系统，提升安全性。"
    },
    {
     "title": "Google will pay SpaceX $920M per month for compute",
     "url": "https://techcrunch.com/2026/06/05/google-will-pay-spacex-920m-per-month-for-compute/",
     "source": "TechCrunch - AI",
     "date": "2026-06-05",
     "summary": "In a statement, a Google representative described the deal as a result of unexpected demand for its recently launched AI products.",
     "is_new": false,
     "lang": "en",
     "interpretation": "谷歌每月向SpaceX支付巨额费用，显示云计算巨头对卫星互联网算力的迫切需求与战略布局。"
    },
    {
     "title": "The token bill comes due: Inside the industry scramble to manage AI’s runaway costs",
     "url": "https://techcrunch.com/2026/06/05/the-token-bill-comes-due-inside-the-industry-scramble-to-manage-ais-runaway-costs/",
     "source": "TechCrunch - AI",
     "date": "2026-06-05",
     "summary": "\"The whole conversation shifted from tokenmaxxing and 'go fast' to 'we need guardrails, how do we control this?'\"",
     "is_new": false,
     "lang": "en",
     "interpretation": "AI算力成本飙升引发行业焦虑，企业正紧急寻找降本方案，否则可能拖累技术普及。"
    },
    {
     "title": "Baby botulism outbreak: FDA still doesn't know cause—or how to prevent it",
     "url": "https://arstechnica.com/health/2026/06/baby-botulism-outbreak-fda-still-doesnt-know-cause-or-how-to-prevent-it/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-05",
     "summary": "In the end, the three companies involved all point the finger at each other.",
     "is_new": false,
     "lang": "en",
     "interpretation": "婴儿肉毒杆菌疫情原因不明，暴露食品安全监管漏洞，亟需建立更有效的预防机制。"
    },
    {
     "title": "How a USB-connected speaker can infect a PC without ever being touched",
     "url": "https://arstechnica.com/security/2026/06/highly-reviewed-speaker-can-be-hacked-over-the-air-to-infect-connected-devices/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-05",
     "summary": "Seller of the Sound Blaster Katana V2X doesn't consider the behavior a vulnerability.",
     "is_new": false,
     "lang": "en",
     "interpretation": "仅通过USB连接的音箱就能无声入侵电脑，揭示硬件供应链安全存在严重隐患。"
    },
    {
     "title": "The saga of the International Space Station air leak took a worrying turn Friday",
     "url": "https://arstechnica.com/space/2026/06/work-on-russias-leaky-space-station-module-causes-astronauts-to-take-shelter/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-05",
     "summary": "\"We look forward to working with Roscosmos on a collaborative approach to address the leaks.\"",
     "is_new": false,
     "lang": "en",
     "interpretation": "国际空间站漏气问题恶化，威胁宇航员安全与长期驻留计划。"
    },
    {
     "title": "\"We pissed off a lot of people\": Giant data center plan cut 50% amid protests",
     "url": "https://arstechnica.com/tech-policy/2026/06/we-pissed-off-a-lot-of-people-giant-data-center-plan-cut-50-amid-protests/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-05",
     "summary": "Developer felt \"beaten up,\" with \"no choice\" but to shrink data center.",
     "is_new": false,
     "lang": "en",
     "interpretation": "巨型数据中心因抗议规模减半，凸显公众对能源消耗与环境的担忧。"
    },
    {
     "title": "Review: Spider-Noir recaptures the magic of a bygone era",
     "url": "https://arstechnica.com/culture/2026/06/review-spider-noir-recaptures-the-magic-of-a-bygone-era/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-05",
     "summary": "Nicolas Cage was born to play 1930s PI Ben Reilly/The Spider: part Bogart, part Bugs Bunny, 100% Cage-y.",
     "is_new": false,
     "lang": "en",
     "interpretation": "《蜘蛛 noir》剧集重现经典风格，证明怀旧叙事仍有市场号召力。"
    },
    {
     "title": "Trump admin tries again to revive dying coal industry",
     "url": "https://arstechnica.com/science/2026/06/trump-admin-tries-again-to-revive-dying-coal-industry/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-05",
     "summary": "Money would keep coal plants open, build the first new plants in over a decade.",
     "is_new": false,
     "lang": "en",
     "interpretation": "特朗普政府再推煤炭复兴，但清洁能源转型趋势难以逆转。"
    },
    {
     "title": "New York lawmakers pass one-year ban on new data centers",
     "url": "https://www.theverge.com/policy/944041/new-york-data-center-moratorium",
     "source": "The Verge - AI",
     "date": "2026-06-05",
     "summary": "The New York State legislature passed a one-year moratorium on new large data centers, the first statewide ban of its kind if Democratic Governor Kathy Hochul signs it into law. Lawmakers behind the bill say it's meant to give policymakers time to understand the impact of large data centers on th...",
     "is_new": false,
     "lang": "en",
     "interpretation": "纽约暂停新建数据中心一年，为能源与土地政策调整争取时间。"
    },
    {
     "title": "Has Microsoft Lost Its Mojo (Again)?",
     "url": "https://www.wired.com/story/has-microsoft-lost-its-mojo-again/",
     "source": "Wired - AI",
     "date": "2026-06-05",
     "summary": "Microsoft’s AI products aren’t selling, and Github’s been plagued with troubles. WIRED spoke with VP Scott Hanselman about whether the company is in catch-up mode.",
     "is_new": false,
     "lang": "en",
     "interpretation": "微软再陷创新乏力质疑，科技巨头需警惕“大公司病”复发。"
    },
    {
     "title": "Why Apple Might Put Cameras Into Its Next AirPods",
     "url": "https://www.wired.com/story/why-apple-might-put-cameras-into-its-next-airpods/",
     "source": "Wired - AI",
     "date": "2026-06-05",
     "summary": "From battery life to privacy, there are many hurdles to the idea taking off.",
     "is_new": false,
     "lang": "en",
     "interpretation": "苹果或为AirPods加装摄像头，旨在拓展空间计算与视觉交互新场景。"
    },
    {
     "title": "AI Has Come for Serif Fonts",
     "url": "https://www.wired.com/story/ai-has-come-for-serif-fonts/",
     "source": "Wired - AI",
     "date": "2026-06-05",
     "summary": "AI companies are using serif to project humanity. Critics are calling it “tasteslop.”",
     "is_new": false,
     "lang": "en",
     "interpretation": "AI开始取代传统衬线字体设计，标志视觉创作领域自动化加速。"
    },
    {
     "title": "Quoting Andreas Kling",
     "url": "https://simonwillison.net/2026/Jun/5/andreas-kling/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-05",
     "summary": "We will no longer accept public pull requests. [...] A substantial patch used to imply substantial effort, and that effort was a reasonable proxy for good faith. That assumption no longer holds. [...] Whether code was typed by hand is beside the point. What matters is who is responsible for it on...",
     "is_new": false,
     "lang": "en",
     "interpretation": "引用Andreas Kling观点，反映开发者对AI工具实用性与可控性的深层思考。"
    },
    {
     "title": "The latest AI news we announced in May 2026",
     "url": "https://blog.google/innovation-and-ai/technology/ai/google-ai-updates-may-2026/",
     "source": "Google AI Blog",
     "date": "2026-06-05",
     "summary": "Here are Google’s latest AI updates from May 2026",
     "is_new": false,
     "lang": "en",
     "interpretation": "2026年5月AI新闻汇总，预示技术迭代与行业格局的新变化。"
    },
    {
     "title": "Are AI chatbots making us lose control of our brains?",
     "url": "https://www.technologyreview.com/2026/06/05/1138427/are-ai-chatbots-making-us-lose-control-of-our-brains/",
     "source": "MIT Technology Review - AI",
     "date": "2026-06-05",
     "summary": "This week I’ve been at SXSW London. There’s been music, film, and a lot—and I mean a lot—of talk about AI. I also had the opportunity to sit down with Gloria Mark, a psychologist at the University of California, Irvine, who has spent the last 30 years studying how people interact with digital tec...",
     "is_new": false,
     "lang": "en",
     "interpretation": "过度依赖AI聊天机器人可能导致人类独立思考能力退化。"
    },
    {
     "title": "EVA-Bench Data 2.0: 3 Domains, 121 Tools, 213 Scenarios",
     "url": "https://huggingface.co/blog/ServiceNow-AI/eva-bench-data",
     "source": "Hugging Face Blog",
     "date": "2026-06-04",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "新基准数据集覆盖三大领域121种工具，推动AI工具调用能力评估。"
    },
    {
     "title": "Kevin O’Leary agrees to downsize massive Utah data center",
     "url": "https://www.theverge.com/ai-artificial-intelligence/943234/kevin-oleary-agrees-to-downsize-massive-utah-data-center",
     "source": "The Verge - AI",
     "date": "2026-06-04",
     "summary": "Kevin O'Leary agreed to halve the size of his planned 40,000-acre data center in Utah amid mounting pressure from residents and activists, as reported earlier by local affiliate ABC4. The Shark Tank star sent a letter to Utah Senate President J. Stuart Adams on Thursday, saying that he will remov...",
     "is_new": false,
     "lang": "en",
     "interpretation": "知名投资人缩减数据中心规模，或反映AI算力泡沫风险信号。"
    },
    {
     "title": "TSMC struggles to keep up with AI demand: ‘We can only support so much’",
     "url": "https://www.theverge.com/tech/943066/tsmc-ai-demand-struggles",
     "source": "The Verge - AI",
     "date": "2026-06-04",
     "summary": "Taiwan Semiconductor Manufacturing Co. - the world's biggest semiconductor-maker - is struggling to meet demands from American customers even with its factory buildout in the US, according to reports from Reuters and Bloomberg. \"Customer demand is so high, and we can only support so much,\" TSMC C...",
     "is_new": false,
     "lang": "en",
     "interpretation": "台积电产能告急，揭示AI芯片需求远超半导体制造极限。"
    },
    {
     "title": "Elon Musk is steamrolling Wall Street to become a trillionaire",
     "url": "https://www.theverge.com/podcast/942586/elon-musk-spacex-ipo-x-xai-index-funds",
     "source": "The Verge - AI",
     "date": "2026-06-04",
     "summary": "Today on Decoder, I’m talking to Ryan Mac, a technology reporter at The New York Times and coauthor of the excellent book Character Limit: How Elon Musk Destroyed Twitter, which came out in 2024. I can’t recommend it enough. I wanted to have Ryan on the show because we’re on the cusp of the Space...",
     "is_new": false,
     "lang": "en",
     "interpretation": "马斯克碾压华尔街预期，AI业务或助其冲击万亿富豪门槛。"
    },
    {
     "title": "AI enthusiasts are in a race against time, AI skeptics are in a race against entropy",
     "url": "https://simonwillison.net/2026/Jun/4/ai-enthusiasts-ai-skeptics/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-04",
     "summary": "AI enthusiasts are in a race against time, AI skeptics are in a race against entropy Charity Majors neatly captures the dynamic between AI enthusiasts and AI skeptics, both of whom are trying to build great software, often in the same teams: The enthusiasts are not wrong. We are starting to see r...",
     "is_new": false,
     "lang": "en",
     "interpretation": "乐观派争分夺秒推进AI，悲观派对抗系统失序，反映技术发展根本矛盾。"
    },
    {
     "title": "Quoting Emanuel Maiberg, 404 Media",
     "url": "https://simonwillison.net/2026/Jun/4/a-slightly-different-version/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-04",
     "summary": "After this story was published Google's spokesperson reached out and asked us to publish a slightly different version of that statement. The new statement no longer stated that \"it's critical that we maintain humans in the loop.\" — Emanuel Maiberg, 404 Media, Google Employees Internally Share Mem...",
     "is_new": false,
     "lang": "en",
     "interpretation": "媒体人观点被引用，凸显AI报道中伦理与批判性视角的价值。"
    },
    {
     "title": "The Download: AI-generated lawsuits and virtual power plants for data centers",
     "url": "https://www.technologyreview.com/2026/06/04/1138408/the-download-ai-lawsuits-virtual-power-plants-data-centers/",
     "source": "MIT Technology Review - AI",
     "date": "2026-06-04",
     "summary": "This is today’s edition of The Download, our weekday newsletter that provides a daily dose of what’s going on in the world of technology. How courts are coping with a flood of AI-generated lawsuits Most days in her chambers, Judge Maritza Braswell, a federal magistrate judge in Colorado, sifts th...",
     "is_new": false,
     "lang": "en",
     "interpretation": "AI生成法律文书与数据中心虚拟电厂，揭示技术对司法与能源的双重冲击。"
    },
    {
     "title": "How courts are coping with a flood of AI-generated lawsuits",
     "url": "https://www.technologyreview.com/2026/06/04/1138391/courts-coping-ai-lawsuits/",
     "source": "MIT Technology Review - AI",
     "date": "2026-06-04",
     "summary": "Most days in her chambers, Judge Maritza Braswell, a federal magistrate judge in Colorado, sifts through stacks of documents written by people without a lawyer. Many of them can’t afford to hire a lawyer, and others have cases too weak or too small to interest one. She reads each one carefully, m...",
     "is_new": false,
     "lang": "en",
     "interpretation": "法院应对AI诉讼潮，暴露法律体系在技术造假面前的脆弱性。"
    },
    {
     "title": "Direct Preference Optimization Beyond Chatbots",
     "url": "https://huggingface.co/blog/Dharma-AI/direct-preference-optimization-beyond-chatbots",
     "source": "Hugging Face Blog",
     "date": "2026-06-03",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "偏好优化技术突破聊天场景，将重塑推荐、医疗等领域的决策逻辑。"
    },
    {
     "title": "5 ways Google Search can level up your thrift and vintage shopping",
     "url": "https://blog.google/products-and-platforms/products/search/thrifting-tips/",
     "source": "Google AI Blog",
     "date": "2026-06-03",
     "summary": "Uncover second-hand scores with AI tools in Google Search and Shopping.",
     "is_new": false,
     "lang": "en",
     "interpretation": "谷歌搜索新技巧助力二手购物，提升用户发现高性价比商品的能力。"
    },
    {
     "title": "The Download: Trump’s new AI order, and smart glasses for warfare",
     "url": "https://www.technologyreview.com/2026/06/03/1138322/the-download-trump-ai-order-smart-glasses-warfare/",
     "source": "MIT Technology Review - AI",
     "date": "2026-06-03",
     "summary": "This is today’s edition of The Download, our weekday newsletter that provides a daily dose of what’s going on in the world of technology. 5 key points in Trump’s new AI order Less than two weeks after scrapping an executive order on AI, President Donald Trump signed a new one on Tuesday. Promisin...",
     "is_new": false,
     "lang": "en",
     "interpretation": "特朗普新AI行政令与军用智能眼镜，标志AI在国防领域的加速渗透。"
    },
    {
     "title": "Take our I/O 2026 quiz, vibe coded in Google AI Studio.",
     "url": "https://blog.google/innovation-and-ai/technology/ai/io-2026-vibe-coded-quiz/",
     "source": "Google AI Blog",
     "date": "2026-05-29",
     "summary": "We used Google AI Studio to vibe code a quiz about our top I/O 2026 announcements.",
     "is_new": false,
     "lang": "en",
     "interpretation": "谷歌I/O 2026推出趣味互动测试，展示AI Studio易用性。"
    },
    {
     "title": "Check out real-life AI prototypes from the Futures Lab.",
     "url": "https://blog.google/innovation-and-ai/technology/ai/university-waterloo-labs/",
     "source": "Google AI Blog",
     "date": "2026-05-29",
     "summary": "University of Waterloo students develop AI prototypes like sign language tutors to reshape the future of education and work.",
     "is_new": false,
     "lang": "en",
     "interpretation": "未来实验室原型曝光，预示AI从概念走向真实应用。"
    },
    {
     "title": "Reachy Mini goes fully local",
     "url": "https://huggingface.co/blog/local-reachy-mini-conversation",
     "source": "Hugging Face Blog",
     "date": "2026-05-27",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "Reachy Mini实现完全本地化，推动隐私与离线AI发展。"
    },
    {
     "title": "Shipping a Trillion Parameters With a Hub Bucket: Delta Weight Sync in TRL",
     "url": "https://huggingface.co/blog/delta-weight-sync",
     "source": "Hugging Face Blog",
     "date": "2026-05-27",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "万亿参数模型同步技术突破，降低大模型部署门槛。"
    },
    {
     "title": "高通点赞广汽埃安N60智驾大赛获亚军，文远知行WRD 3.0亮相高通峰会",
     "url": "https://www.qbitai.com/2026/06/432055.html",
     "source": "量子位",
     "date": "2026-06-08",
     "summary": "文远知行携L2++ 一段式端到端方案WRD 3.0参展",
     "is_new": true,
     "lang": "zh",
     "interpretation": "高通认可中国智驾技术，文远知行新平台加速自动驾驶落地。"
    },
    {
     "title": "摩根大通据悉正在招聘野村的国际AI策略主管",
     "url": "<![CDATA[https://36kr.com/newsflashes/3843954056612096?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-06-08",
     "summary": "知情人士透露，摩根大通正在招聘野村控股国际AI策略主管；这家华尔街银行正在加紧招募AI专家以提高生产力。据知情人士透露，驻新加坡的Tahir Zafar在2023年底加入野村，预计将在“园艺假”结束后于7月左右正式上任。（财联社）",
     "is_new": true,
     "lang": "zh",
     "interpretation": "摩根大通挖角AI策略主管，显示华尔街正全力争夺人工智能金融应用人才。"
    },
    {
     "title": "有余凯不投的地平线离职创业员工吗？",
     "url": "https://www.qbitai.com/2026/06/431931.html",
     "source": "量子位",
     "date": "2026-06-07",
     "summary": "「放任」人才外流的反常操作，只是格局使然吗？",
     "is_new": true,
     "lang": "zh",
     "interpretation": "地平线离职创业现象引发关注，揭示自动驾驶领域人才流动与创业生态活跃。"
    },
    {
     "title": "教你用AI一节课收17万，华尔街精英排着队付费",
     "url": "https://www.qbitai.com/2026/06/431487.html",
     "source": "量子位",
     "date": "2026-06-07",
     "summary": "花旗美银都是客户",
     "is_new": true,
     "lang": "zh",
     "interpretation": "华尔街精英高价学习AI变现，折射出金融圈对AI赋能暴利模式的狂热追逐。"
    },
    {
     "title": "马斯克是SpaceX面子，她才是里子",
     "url": "https://www.qbitai.com/2026/06/431371.html",
     "source": "量子位",
     "date": "2026-06-06",
     "summary": "造火箭的正在批量造巨富",
     "is_new": false,
     "lang": "zh",
     "interpretation": "马斯克是SpaceX的公众符号，但核心技术与管理实权掌握在另一位女性手中。"
    },
    {
     "title": "Hinton吹哨了：AI已经有意识！",
     "url": "https://www.qbitai.com/2026/06/431349.html",
     "source": "量子位",
     "date": "2026-06-06",
     "summary": "人类得接受自己不再是唯一智能生命体",
     "is_new": false,
     "lang": "zh",
     "interpretation": "顶级学者警示AI意识觉醒，引发伦理与安全紧迫讨论。"
    },
    {
     "title": "今年CVPR看点是广东：何恺明再获至高大奖，广工大打破大厂名校垄断",
     "url": "https://www.qbitai.com/2026/06/431186.html",
     "source": "量子位",
     "date": "2026-06-06",
     "summary": "广东上大分！",
     "is_new": false,
     "lang": "zh",
     "interpretation": "中国学者与高校突破巨头垄断，彰显本土AI研究实力。"
    },
    {
     "title": "早报｜黄仁勋访韩首站去T1网吧/姚顺雨谈腾讯AI下半场/三大运营商提醒高考考点将屏蔽信号，周边或无法上网",
     "url": "https://www.ifanr.com/1668239?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-06",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "黄仁勋访韩、姚顺雨论战、高考信号屏蔽，多领域AI动态交织。"
    },
    {
     "title": "垃圾桶里捡零件，弹幕里接需求，B 站有群人在用 AI 野生造产品",
     "url": "https://www.ifanr.com/1668088?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-05",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "草根用AI低成本造产品，展现技术民主化与用户共创潜力。"
    },
    {
     "title": "是时候造一台 AI 时代的手机了｜AIDONE 第五期",
     "url": "https://www.ifanr.com/1668163?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-05",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "呼吁为AI原生设计硬件，挑战现有手机形态与交互逻辑。"
    },
    {
     "title": "早报｜苹果App Store四成头部应用已支持AI/千问上线肯德基skill/奈雪擦边LABUBU被判赔32万",
     "url": "https://www.ifanr.com/1668169?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-05",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "苹果、阿里、奈雪等跨界AI应用，商业与法律边界受关注。"
    },
    {
     "title": "WWDC26 开幕在即，今年有哪些看点值得关注？",
     "url": "https://sspai.com/post/110669",
     "source": "少数派 - AI",
     "date": "2026-06-05",
     "summary": "今年WWDC全球开发者大会即将在北京时间6月9日凌晨拉开帷幕，对Apple来说今年这一次活动是一个非常关键的节点：首先，2024年WWDC上画的饼至今没有兑现，而AI竞赛在2026年已经进入了白热化， ...查看全文",
     "is_new": false,
     "lang": "zh",
     "interpretation": "苹果年度开发者大会将至，AI与系统融合或成最大悬念。"
    },
    {
     "title": "Token大战中，华为云选择了第三条路｜最前线",
     "url": "<![CDATA[https://36kr.com/p/3840016255126016?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-06-05",
     "summary": "作者 | 邓咏仪 编辑 | 张雨忻 “在当前国产化算力正在成长的情况下，华为云现在不太在乎Token总量是多少，也不太在乎收入的总量是多少，在乎的是国产化的算力系统所生产出来的Tokens的健康度，并且要代表着生产力提升，而不仅仅是情绪价值。” 6月5日，2026华为云 INSPIRE 创想者大会在上海开幕，华为云CEO周跃峰表示。 他举了个例子：一个人闲来无事在手机上问 AI 一个问题，也会产生 Token，但这种 Token 的价值有多大很难说明。在他看来，衡量一朵云做得好不好，不该强调它跑出了多少万亿 Token，而该看这些 Token 替企业提了多少效率。 华为云CEO周跃峰 过...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "华为云避开算力军备竞赛，以差异化路径争夺AI生态话语权。"
    },
    {
     "title": "今年最值得升级的生产力工具，可能是一整张 AI 工位",
     "url": "https://www.ifanr.com/1667995?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-04",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "预示AI正从软件工具向实体办公空间渗透，重塑人机协作模式。"
    },
    {
     "title": "制糖工厂发布 AI 小电拼 Mirror：FluxAI 自由流让多口充电进入「功率复用」时代",
     "url": "https://www.ifanr.com/1667933?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-04",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "多口充电实现功率动态分配，解决设备同时快充的行业痛点。"
    },
    {
     "title": "亚马逊高管：AI 已越过恐怖谷，普通观众难分辨",
     "url": "https://cn.technode.com/post/2026-06-03/amazon-ai-studio-chief-albert-cheng-uncanny-valley/",
     "source": "动点科技 - AI",
     "date": "2026-06-03",
     "summary": "亚马逊米高梅影业 AI 工作室负责人阿尔 […]",
     "is_new": false,
     "lang": "zh",
     "interpretation": "AI生成内容已逼近真实边界，未来虚假信息鉴别将成社会性挑战。"
    },
    {
     "title": "制糖工厂发布 AI 小电拼 Mirror：琥珀屏、双支架与可拼拆设计，重构桌面能源设备",
     "url": "https://www.ifanr.com/1667822?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-02",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "将桌面电源从功能工具升级为可交互、可扩展的智能硬件新物种。"
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
   "stars": 42805,
   "forks": 7661,
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
   "stars": 26350,
   "forks": 5821,
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
   "stars": 19196,
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
   "stars": 18071,
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
   "stars": 15435,
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
   "stars": 11449,
   "forks": 836,
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
   "forks": 1289,
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
   "stars": 8670,
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
   "stars": 5433,
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
   "stars": 4851,
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