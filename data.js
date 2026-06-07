const APP_DATA = {
 "today": "2026-06-07",
 "fetched_at": "2026-06-07T10:03:20",
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
   "count": 3,
   "color": "#10b981"
  },
  "少数派 - AI": {
   "count": 2,
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
   "count": 35
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
   "count": 4
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
   "count": 2
  },
  {
   "name": "AI商业与投融资",
   "icon": "💰",
   "color": "#ca8a04",
   "count": 22
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
   "count": 35,
   "cards": [
    {
     "title": "OpenAI unveils Lockdown Mode to protect sensitive data from prompt injection attacks",
     "url": "https://techcrunch.com/2026/06/06/openai-unveils-lockdown-mode-to-protect-sensitive-data-from-prompt-injection-attacks/",
     "source": "TechCrunch - AI",
     "date": "2026-06-06",
     "summary": "Even with Lockdown Mode, ChatGPT could be still vulnerable to prompt injections, but the goal is to reduce the likelihood that sensitive data gets shared in the process.",
     "is_new": true,
     "lang": "en",
     "interpretation": "锁定模式可防御提示注入攻击，对AI安全防护具有里程碑意义。"
    },
    {
     "title": "Five labs, five minds: building a multi-model finance drama on small models",
     "url": "https://huggingface.co/blog/build-small-hackathon/thousand-token-wood-sim-v2",
     "source": "Hugging Face Blog",
     "date": "2026-06-06",
     "summary": "",
     "is_new": true,
     "lang": "en",
     "interpretation": "多模型协作创作金融剧，探索小模型高效协同新路径。"
    },
    {
     "title": "When Claude changed, everything changed: Managing AI blast radius in production",
     "url": "https://venturebeat.com/orchestration/when-claude-changed-everything-changed-managing-ai-blast-radius-in-production",
     "source": "VentureBeat - AI",
     "date": "2026-06-06",
     "summary": "Our system did one thing, and it did it well: It turned natural-language questions into API calls.The users were analysts, account managers, and operations leads. They knew what data they needed, but assembling it manually meant pulling from four dashboards, two BI tools, and a Salesforce report ...",
     "is_new": true,
     "lang": "en",
     "interpretation": "模型更新引发连锁反应，提示AI部署需建立动态风险管控机制。"
    },
    {
     "title": "OpenAI Help: Lockdown Mode",
     "url": "https://simonwillison.net/2026/Jun/5/openai-help-lockdown-mode/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-05",
     "summary": "OpenAI Help: Lockdown Mode OpenAI first teased this in February, but now it's live and \"rolling out to eligible personal accounts, including Free, Go, Plus, and Pro, and self-serve ChatGPT Business accounts\": Lockdown Mode is designed to help prevent the final stage of data exfiltration from a pr...",
     "is_new": false,
     "lang": "en",
     "interpretation": "OpenAI推出“锁定模式”，强化AI安全边界，回应数据隐私与滥用担忧。"
    },
    {
     "title": "Microsoft AI chief says company was “set free” from OpenAI to pursue superintelligence",
     "url": "https://venturebeat.com/technology/microsoft-ai-chief-says-company-was-set-free-from-openai-to-pursue-superintelligence",
     "source": "VentureBeat - AI",
     "date": "2026-06-05",
     "summary": "For three years, Microsoft's artificial intelligence story has been inseparable from OpenAI. The partnership — cemented by a cumulative investment exceeding $13 billion — gave Microsoft early access to the most advanced AI models on the planet, catapulting its Copilot products into the enterprise...",
     "is_new": false,
     "lang": "en",
     "interpretation": "微软AI独立发展超级智能，摆脱OpenAI束缚，战略意义重大。"
    },
    {
     "title": "How Endava is redesigning software delivery around AI agents",
     "url": "https://openai.com/index/endava-frontiers",
     "source": "OpenAI Blog",
     "date": "2026-06-04",
     "summary": "Learn how Endava is using AI agents, ChatGPT Enterprise, and Codex to accelerate software delivery, automate workflows, and build an AI-native culture across the enterprise.",
     "is_new": false,
     "lang": "en",
     "interpretation": "软件交付流程全面引入AI代理，预示传统开发模式将被重构。"
    },
    {
     "title": "Dreaming: Better memory for a more helpful ChatGPT",
     "url": "https://openai.com/index/chatgpt-memory-dreaming",
     "source": "OpenAI Blog",
     "date": "2026-06-04",
     "summary": "ChatGPT introduces a new memory system to better remember preferences, keeping context fresh and relevant across conversations.",
     "is_new": false,
     "lang": "en",
     "interpretation": "记忆增强技术让ChatGPT更懂上下文，提升长对话连贯性。"
    },
    {
     "title": "Anthropic says 80% of its new production code is now authored by Claude — how your enterprise can keep up",
     "url": "https://venturebeat.com/technology/anthropic-says-80-of-its-new-production-code-is-now-authored-by-claude-how-your-enterprise-can-keep-up",
     "source": "VentureBeat - AI",
     "date": "2026-06-04",
     "summary": "Anthropic co-founder and CEO Dario Amodei said it was coming, but it still feels like a milestone: More than 80% of the code merged into Anthropic’s production codebase in May wasn't authored by humans, but by its own AI model, Claude, according to a new report shared by the record-breaking AI st...",
     "is_new": false,
     "lang": "en",
     "interpretation": "80%代码由AI生成，企业需加速适应人机协作开发新范式。"
    },
    {
     "title": "Introducing new capabilities to GPT-Rosalind",
     "url": "https://openai.com/index/introducing-new-capabilities-to-gpt-rosalind",
     "source": "OpenAI Blog",
     "date": "2026-06-03",
     "summary": "GPT-Rosalind advances life sciences research with enhanced biological reasoning, medicinal chemistry expertise, genomics analysis, and experimental workflow capabilities.",
     "is_new": false,
     "lang": "en",
     "interpretation": "GPT-Rosalind新增功能，或强化生物信息学领域的AI辅助研究。"
    },
    {
     "title": "How Wasmer used Codex to build a Node.js runtime for the edge",
     "url": "https://openai.com/index/wasmer",
     "source": "OpenAI Blog",
     "date": "2026-06-03",
     "summary": "See how Wasmer used Codex with GPT-5.5 to build a Node.js runtime for the edge, accelerating development 10x to 20x and shipping in weeks instead of months.",
     "is_new": false,
     "lang": "en",
     "interpretation": "边缘计算与Node.js结合，降低云依赖，提升应用响应速度。"
    },
    {
     "title": "Uber Caps Usage of AI Tools Like Claude Code to Manage Costs",
     "url": "https://simonwillison.net/2026/Jun/3/uber-caps-usage/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-03",
     "summary": "Uber Caps Usage of AI Tools Like Claude Code to Manage Costs I wrote the other day about Uber blowing its 2026 AI budget in four months, and how that wasn't particularly surprising given they would have set that budget in 2025, before anyone could have predicted how popular token-burning coding a...",
     "is_new": false,
     "lang": "en",
     "interpretation": "成本压力下，企业开始收紧AI工具使用，预示行业理性回归。"
    },
    {
     "title": "Google's new open source Gemma 4 12B analyzes audio, video — and runs entirely locally on a typical 16GB enterprise laptop",
     "url": "https://venturebeat.com/technology/googles-new-open-source-gemma-4-12b-analyzes-audio-video-and-runs-entirely-locally-on-a-typical-16gb-enterprise-laptop",
     "source": "VentureBeat - AI",
     "date": "2026-06-03",
     "summary": "While many AI open source model providers are pursuing larger and more powerful models, Google is still giving attention to the smaller, more local side of the market. Today, the tech giant released Gemma 4 12B, an 11.95-billion-parameter open-weights model with permissive Apache 2.0 license opti...",
     "is_new": false,
     "lang": "en",
     "interpretation": "开源多模态模型可本地运行，降低企业AI部署门槛与隐私风险。"
    },
    {
     "title": "Microsoft's new MAI models",
     "url": "https://simonwillison.net/2026/Jun/2/microsofts-new-models/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-02",
     "summary": "Microsoft announced two new text LLMs this morning - MAI-Thinking-1 (reasoning, 1T parameters, 35B active, available to \"select early partners\") and MAI-Code-1-Flash (137B Parameters, 5B active, \"purpose-built for GitHub Copilot and VS Code to deliver high performance and lower cost [...] rolling...",
     "is_new": false,
     "lang": "en",
     "interpretation": "微软自研模型发布，加剧大模型竞争，或重塑云AI生态。"
    },
    {
     "title": "datasette-agent-micropython 0.1a0",
     "url": "https://simonwillison.net/2026/Jun/2/datasette-agent-micropython/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-02",
     "summary": "Release: datasette-agent-micropython 0.1a0 I want Datasette Agent to be able to generate and execute Python code safely. This alpha is looking promising so far. GPT-5.5 has so far failed to break out of the sandbox! Tags: python, sandboxing, datasette, webassembly, datasette-agent, micropython",
     "is_new": false,
     "lang": "en",
     "interpretation": "微型Python与数据集的结合，降低物联网数据处理门槛。"
    },
    {
     "title": "California Brown Pelican",
     "url": "https://simonwillison.net/2026/Jun/2/sighting-367841339/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-02",
     "summary": "California Brown Pelican, in Fort Mason, CA, USI'm at the Microsoft Build conference today, held at Fort Mason in San Francisco. There are California Brown Pelicans diving into the water directly behind venue! Tags: microsoft, ai, generative-ai, llms, llm-release",
     "is_new": false,
     "lang": "en",
     "interpretation": "加州褐鹈鹕的生态状况，反映沿海环境健康与保护成效。"
    },
    {
     "title": "Pasted File Editor",
     "url": "https://simonwillison.net/2026/Jun/2/pasted-file-editor/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-02",
     "summary": "Tool: Pasted File Editor I really like how you can paste a large volume of text into claude.ai (or the Claude desktop/mobile apps) and it will detect it as a large paste and turn it into a file attachment instead. I decided to have Codex desktop build me a version of that as a prototype. You can ...",
     "is_new": false,
     "lang": "en",
     "interpretation": "粘贴文件编辑器简化操作，提升文本或代码处理的便捷性。"
    },
    {
     "title": "Introducing Mellum2: A 12B Mixture-of-Experts Model by JetBrains",
     "url": "https://huggingface.co/blog/JetBrains/mellum2-launch",
     "source": "Hugging Face Blog",
     "date": "2026-06-01",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "JetBrains发布12B参数混合专家模型，为开发者提供更高效代码工具。"
    },
    {
     "title": "Beyond LLMs: Why Scalable Enterprise AI Adoption Depends on Agent Logic",
     "url": "https://huggingface.co/blog/ibm-research/agent-logic-and-scalable-ai-adoption",
     "source": "Hugging Face Blog",
     "date": "2026-06-01",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "企业AI落地关键在智能体逻辑，而非单纯追求大模型规模。"
    },
    {
     "title": "How we used Gemini to build Google I/O 2026",
     "url": "https://blog.google/innovation-and-ai/technology/ai/io-2026-google-ai/",
     "source": "Google AI Blog",
     "date": "2026-06-01",
     "summary": "Learn how Googlers used AI to produce Google I/O 2026.",
     "is_new": false,
     "lang": "en",
     "interpretation": "用Gemini构建Google I/O大会，展示AI驱动大型活动策划的可行性。"
    },
    {
     "title": "9 demos of Gemini Omni and Gemini 3.5 in action",
     "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-omni-3-5-videos/",
     "source": "Google AI Blog",
     "date": "2026-05-29",
     "summary": "Watch 9 videos showing the capabilities of Gemini Omni and Gemini 3.5, announced at Google I/O 2026.",
     "is_new": false,
     "lang": "en",
     "interpretation": "Gemini多模态模型现场演示，揭示AI从对话到全场景应用的跨越。"
    },
    {
     "title": "Catch up on 12 major I/O 2026 moments",
     "url": "https://blog.google/innovation-and-ai/technology/ai/io-2026-keynote-moment-videos/",
     "source": "Google AI Blog",
     "date": "2026-05-28",
     "summary": "Here are 12 of the biggest Google I/O 2026 keynote moments, including news about Gemini Omni, Gemini 3.5 Flash and more.",
     "is_new": false,
     "lang": "en",
     "interpretation": "大会12项核心发布汇总，反映谷歌AI战略布局与行业风向标。"
    },
    {
     "title": "多家供给方下调算力价格 算力普惠再提速",
     "url": "<![CDATA[https://36kr.com/newsflashes/3842626008647945?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-06-07",
     "summary": "随着全国算力基建规模化、标准化不断提速，多家算力价格也迎来持续普惠。让曾经昂贵的“高端稀缺资源”变身为各行各业可普惠使用的“数字水电”。前不久，多家模型厂商宣布永久下调算力价格，其中DeepSeek与小米MiMo降价尤为显著，最高降幅接近99%。极大降低了用户日常高频问答、网页设计、代码编程等多场景AI使用成本，让各类轻量化、常态化AI应用告别高门槛、高成本的制约。（央视新闻）",
     "is_new": true,
     "lang": "zh",
     "interpretation": "算力成本下降将加速AI应用普及，中小企业受益明显。"
    },
    {
     "title": "大模型发展三年半，AI圈终于等来了一场“不要大厂，只赌脑洞”的比赛",
     "url": "https://www.qbitai.com/2026/06/431287.html",
     "source": "量子位",
     "date": "2026-06-06",
     "summary": "观众投币定前十！",
     "is_new": true,
     "lang": "zh",
     "interpretation": "大模型竞赛从拼资源转向拼创意，小团队迎来逆袭机会。"
    },
    {
     "title": "macOS 存储管理漫谈：去重是节约空间的最好方法",
     "url": "https://sspai.com/prime/story/macos-storage-management-deduplication",
     "source": "少数派 - AI",
     "date": "2026-06-05",
     "summary": "虽然最近各种用LLM帮忙整理电脑里的文件、删除垃圾数据的帖子很火，但我天然对这种LLM用法抱有一丝警惕，我始终相信电脑里存在的文件都有自己的意义。所以我就想在这篇文章里和大家聊聊macOS里的存储管理 ...查看全文本文为会员文章，出自《单篇文章》，订阅后可阅读全文。",
     "is_new": false,
     "lang": "zh",
     "interpretation": "去重是macOS存储管理最优解，提醒用户关注数据冗余对空间和性能的隐性消耗。"
    },
    {
     "title": "NTU 曹子昂教授团队：破解 3D 标注成本难题，只需一张图片丨CVPR 2026",
     "url": "https://www.leiphone.com/category/ai/gOCTM6K2fNwaBttQ.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-05",
     "summary": "PhysX-Anythingt：可从一张照片自动生成可用于机器人训练的物理 3D资产。 作者丨郑佳美、樊天骄 编辑丨郑佳美 在生成式 AI 进入 3D 内容生产之后，行业最先解决的是“看起来像不像”的问题：一个模型能不能从文字或图片生成外观完整、纹理逼真、形状合理的 3D 物体。但随着机器人、具身智能、数字孪生、AR / VR 和工业仿真的发展，真正制约应用落地的矛盾已经变了。现实世界中的物体不是静态摆件，而是带有尺度、材料、重量、关节、摩擦、碰撞和功能关系的物理对象。一个柜子不仅要有柜门，还要知道门轴在哪里、能向哪个方向打开；一副眼镜不仅要有镜框和镜腿，还要知道镜腿能绕哪个关节折叠；一...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "单图即可完成3D标注，大幅降低数据成本，加速自动驾驶等应用落地。"
    },
    {
     "title": "Coding 能力，正在颠覆大模型的估值逻辑",
     "url": "https://www.leiphone.com/category/industrynews/bwyozCVtFIOJynck.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-05",
     "summary": "大模型赛道的估值逻辑，正在被一个变量粗暴重构。它不是参数，不是月活，不是多模态，是你能不能做好Coding。把四家中国大模型公司的数据拉出来，这条线清晰得不需要统计检验：Coding 能力突出的 DeepSeek 正在洽谈国内 AI 公司史上最大单笔融资 70 亿美元，估值或达 590亿美元。月之暗面在 Kimi K2.5 把 Coding 能力拉满之后，20 天收入超 2025 全年，ARR 3 个月冲到 2 亿美元，半年内四轮融资合计超 39 亿美元，估值飙到 200 亿美元。智谱 GLM-5 拿下 SWE-bench Verified 开源模型榜首，MaaS 平台 ARR 同比暴涨...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "代码能力成为大模型商业价值核心指标，重塑行业竞争格局。"
    },
    {
     "title": "银河通用创始人王鹤：具身智能正迈向专属的「AlphaGo时刻」与「ChatGPT时刻」 | ICRA 2026",
     "url": "https://www.leiphone.com/category/robot/DZhbEoMS7u3gvJIO.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-05",
     "summary": "具身智能正在敲开AGI的大门，全面引爆属于通用机器人的第四次工业革命。 作者丨岑 峰 编辑丨马晓宁 2026年6月3日，国际机器人与自动化会议（ICRA 2026）在奥地利维也纳进入正会的第二天。在这一天的“行业主题演讲”环节（Industry Keynote Session），具身智能领域知名学者、银河通用（Galbot）创始人和CTO王鹤发表了题为《Towards the AlphaGo and ChatGPT Moments of Embodied AI》的主题演讲。在演讲中，王鹤指出，具身智能正迈向专属的“AlphaGo时刻”与“ChatGPT时刻”。他表示，银河通用已通过两大突...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "具身智能迎来关键突破节点，从实验室走向产业化爆发前夜。"
    },
    {
     "title": "华人学者闪耀维也纳，胡瑞珍、石冠亚、王晓龙等斩获ICRA核心大奖 | ICRA 2026",
     "url": "https://www.leiphone.com/category/robot/vXUDbgmmjD4EH4Ys.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-05",
     "summary": "中国学者的智慧，正在拼凑出现代物理 AI的最完整版图。 作者丨岑 峰 编辑丨马晓宁 2026年6月，全球机器人与自动化领域的顶级学术盛会——IEEE 国际机器人与自动化大会（ICRA 2026）在奥地利维也纳盛大举行。作为机器人界的“奥斯卡”，ICRA 每年的颁奖典礼都是全行业瞩目的焦点，它不仅是对过去一年乃至数十年顶尖科研成果的表彰，更是未来技术发展的风向标。在刚刚结束的颁奖典礼上，无论是在极具分量的个人学术生涯奖项，还是在竞争白热化的顶级会议最佳论文评选中，华人学者不仅未曾缺席，更是站在了具身智能、大模型应用以及人形机器人控制等最前沿领域的浪潮之巅。其中，深圳大学特聘教授胡瑞珍，北京...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "华人学者在机器人顶会ICRA斩获多项大奖，彰显中国AI研究实力。"
    },
    {
     "title": "华人学者闪耀维也纳，胡瑞珍、石冠亚、王晓龙等斩获ICRA核心大奖 | ICRA 2026",
     "url": "https://www.leiphone.com/category/robot/ASmQYsOyWk796smb.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-05",
     "summary": "中国学者的智慧，正在拼凑出现代物理 AI的最完整版图。 作者丨岑 峰 编辑丨马晓宁 2026年6月，全球机器人与自动化领域的顶级学术盛会——IEEE 国际机器人与自动化大会（ICRA 2026）在奥地利维也纳盛大举行。作为机器人界的“奥斯卡”，ICRA 每年的颁奖典礼都是全行业瞩目的焦点，它不仅是对过去一年乃至数十年顶尖科研成果的表彰，更是未来技术发展的风向标。在刚刚结束的颁奖典礼上，无论是在极具分量的个人学术生涯奖项，还是在竞争白热化的顶级会议最佳论文评选中，华人学者不仅未曾缺席，更是站在了具身智能、大模型应用以及人形机器人控制等最前沿领域的浪潮之巅。其中，深圳大学特聘教授胡瑞珍，北京...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "华人学者在机器人顶会ICRA斩获多项大奖，彰显中国AI研究实力。"
    },
    {
     "title": "中科闻歌发布 Decitron 决策机：跳出问答大模型，AI 迈入真实世界推演时代",
     "url": "https://www.leiphone.com/category/industrynews/JvMzCFCNVVx3dav9.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-05",
     "summary": "决策机Decitron发布会现场2026年6月5日，中科闻歌正式发布通用决策大模型——Decitron决策机。作为面向复杂事件、复杂系统和复杂决策打造的产品，Decitron决策机不只是回答问题，而是理解事件、推演路径、比较结果，帮助人类在复杂事务中做决策。“AI已经开始像水和电一样进入现实世界和人们的生活。但当AI会聊天、会写作、会画画、会做视频之后，一个更重要的问题正在出现：AI能不能不只是回答问题，而是进一步推演世界、预测未来？”发布会上，中科闻歌董事长王磊抛出了这个关于AI下一阶段发展的关键问题。正是基于对这一问题的思考，中科闻歌正式发布了AI决策时代的全新产品——Decitro...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "从问答到推演，AI能力质变，将加速在复杂决策场景中的实际应用。"
    },
    {
     "title": "硬氪独家 | 唐文斌「原力灵机」并购物流机器人公司，并获智谱、商汤、阶跃等投资",
     "url": "<![CDATA[https://36kr.com/p/3838835333253385?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-06-05",
     "summary": "作者 | 邱晓芬 编辑 | 袁斯来 硬氪独家获悉，具身智能企业「原力灵机」近期完成新一轮融资，资方主要为数家大模型公司，包括智谱、阶跃星辰、商汤科技。此外，华勤、上汽恒旭等产业投资方持续加注。 「原力灵机」是一家通用具身大模型公司，2025年3月由旷视科技联合创始人兼CTO唐文斌创立，团队核心创始成员为旷视科技原班人马。 有意思的是，此次融资也是商汤、旷视这两家曾经的对手，在具身智能的热潮中罕见“会师”； 另外，算上A+轮独家领投的阿里，这也是具身智能赛道罕见同时聚齐国内四家大模型厂商——此前，智谱仅通过Z基金小范围投资具身智能领域，阶跃星辰则几乎未出手具身智能。 而这一集体动作也释放出...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "唐文斌并购物流机器人公司，整合技术与场景，推动AI在实体产业加速落地。"
    },
    {
     "title": "国家队下场做AI虚拟细胞，「百曜科技」完成数千万元新一轮融资｜36氪首发",
     "url": "<![CDATA[https://36kr.com/p/3835460873385348?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-06-05",
     "summary": "文｜胡香赟 编辑｜海若镜 36氪获悉，AI虚拟细胞（AIVC）平台公司「百曜科技」近期已完成数千万元新一轮融资。本轮融资由国家级国有资本运营平台中国国新旗下的国新创投基金领投，道彤资本和云启资本跟投，老股东峰瑞资本和百度风投追加投资。募集资金将主要用于全新一代虚拟细胞算法模型迭代、独家数据收集平台建设以及加速产业化落地。 百曜科技是36氪持续追踪报道的企业（附链接），公司创始团队依托中国科学院动物研究所、北京干细胞与再生医学研究院的科研资源，自2023年起开始构建AI虚拟细胞基础大模型，以实现细胞行为和状态变化的精准分析及预测，并持续推进AIVC模型升级和产业化落地实践。 2026年来，...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "国家队投资AI虚拟细胞，预示生物计算与AI融合将成国家战略级科研新方向。"
    },
    {
     "title": "早报｜曝苹果Vision Pro系列被砍/多地高考将查验智能眼镜/DeepSeek首轮融资规模约500亿元",
     "url": "https://www.ifanr.com/1668044?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-04",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "苹果头显项目调整、高考防作弊升级、DeepSeek巨额融资，科技与教育、资本深度交织。"
    },
    {
     "title": "一夜之间，ChatGPT 变成了第二个 Claude",
     "url": "https://www.ifanr.com/1667898?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-03",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "ChatGPT界面与功能向Claude靠拢，AI助手设计趋同化竞争加剧。"
    },
    {
     "title": "早报｜微软发布Windows「梦中神机」/腾讯云DeepSeek-V4最高降价97.5%/徕卡相机或被中国资本收购",
     "url": "https://www.ifanr.com/1667902?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-03",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "微软AI PC发布、腾讯云大降价、徕卡或被收购，科技巨头动作频频。"
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
     "title": "Microsoft's AI Futurist explains how he uses Copilot — and the real-world problems enterprises are solving with agents",
     "url": "https://venturebeat.com/orchestration/microsofts-ai-futurist-explains-how-he-uses-copilot-and-the-real-world-problems-enterprises-are-solving-with-agents",
     "source": "VentureBeat - AI",
     "date": "2026-06-05",
     "summary": "Microsoft used its Build 2026 conference this week to push a clear message: agents are rapidly moving into production throughout enterprise systems, and the winning platform will be the one that gives them reliable context, governance, identity, memory — and secure access to enterprise data. The ...",
     "is_new": false,
     "lang": "en",
     "interpretation": "微软高管展示Copilot实际应用，企业用AI代理解决真实问题。"
    },
    {
     "title": "AI agents are learning on the job — just not for your whole team",
     "url": "https://venturebeat.com/orchestration/ai-agents-are-learning-on-the-job-just-not-for-your-whole-team",
     "source": "VentureBeat - AI",
     "date": "2026-06-05",
     "summary": "When someone on a team corrects an AI agent — better prompts, better feedback, better context — that improvement disappears the moment a colleague opens the same tool. The correction doesn't transfer, and the next person starts from zero.The problem compounds in multi-agent workflows, where teams...",
     "is_new": false,
     "lang": "en",
     "interpretation": "AI代理边工作边学习，但尚未覆盖整个团队，效率提升有限。"
    },
    {
     "title": "Meta's AI support agent bound recovery emails for anyone who asked. Your SOC never saw an alert.",
     "url": "https://venturebeat.com/security/meta-ai-support-agent-recovery-email-takeover-soc-audit-grid",
     "source": "VentureBeat - AI",
     "date": "2026-06-05",
     "summary": "Meta's AI support agent bound recovery emails to accounts for whoever asked, and SOCs never saw an alert. An authorized agent writes a log of legitimate transactions, so nothing in the detection stack fired. Attackers asked the bot to make the change, took the one-time code it sent, and ran the p...",
     "is_new": false,
     "lang": "en",
     "interpretation": "Meta的AI代理自动处理恢复邮件，安全团队完全未察觉，存在隐患。"
    },
    {
     "title": "The Download: AI hacking beyond Mythos, and chatbots’ impact on our brains",
     "url": "https://www.technologyreview.com/2026/06/05/1138452/the-download-ai-hacking-mythos-chatbots-brain-impacts/",
     "source": "MIT Technology Review - AI",
     "date": "2026-06-05",
     "summary": "This is today’s edition of The Download, our weekday newsletter that provides a daily dose of what’s going on in the world of technology. The Meta hack shows there’s more to AI security than Mythos On Monday, reports emerged that attackers had used Meta’s AI customer support agent to steal Instag...",
     "is_new": false,
     "lang": "en",
     "interpretation": "AI黑客攻击超越神话，聊天机器人正影响人类大脑认知。"
    },
    {
     "title": "The Meta hack shows there’s more to AI security than Mythos",
     "url": "https://www.technologyreview.com/2026/06/05/1138437/the-meta-hack-shows-theres-more-to-ai-security-than-mythos/",
     "source": "MIT Technology Review - AI",
     "date": "2026-06-05",
     "summary": "On June 5, 404 Media reported that attackers had been using Meta’s AI customer support agent to steal Instagram accounts. Their approach was simple: They asked the agent to link the accounts to email addresses that they controlled, and the agent complied. One attacker broke into the dormant Obama...",
     "is_new": false,
     "lang": "en",
     "interpretation": "Meta被黑事件揭示AI安全远不止神话故事，现实威胁更严峻。"
    },
    {
     "title": "Designing the hf CLI as an agent-optimized way to work with the Hub",
     "url": "https://huggingface.co/blog/hf-cli-for-agents",
     "source": "Hugging Face Blog",
     "date": "2026-06-04",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "命令行工具优化为代理交互模式，降低开发者使用Hugging Face门槛。"
    },
    {
     "title": "Adding MCP Tools to Reachy Mini",
     "url": "https://huggingface.co/blog/adding-mcp-tools-to-reachy-mini",
     "source": "Hugging Face Blog",
     "date": "2026-06-03",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "为机器人添加MCP工具，推动具身智能与物理世界交互能力。"
    },
    {
     "title": "Holo3.1: Fast & Local Computer Use Agents",
     "url": "https://huggingface.co/blog/Hcompany/holo31",
     "source": "Hugging Face Blog",
     "date": "2026-06-02",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "本地化计算机使用代理，提升自动化效率，减少云端延迟。"
    },
    {
     "title": "micropython-wasm 0.1a1",
     "url": "https://simonwillison.net/2026/Jun/2/micropython-wasm/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-02",
     "summary": "Release: micropython-wasm 0.1a1 Fixes for some limitations that emerged while I was trying to use this to build datasette-agent-micropython. Tags: python, sandboxing, webassembly, micropython",
     "is_new": false,
     "lang": "en",
     "interpretation": "在Web端运行MicroPython，拓展了嵌入式开发的浏览器应用场景。"
    },
    {
     "title": "Rehumanizing global health care with agentic AI",
     "url": "https://www.technologyreview.com/2026/06/02/1137827/rehumanizing-global-health-care-with-agentic-ai/",
     "source": "MIT Technology Review - AI",
     "date": "2026-06-02",
     "summary": "The global health care sector is under increasing strain. Decades of chronic underinvestment and constraints in recruitment have coincided with a surge in demand for services for aging populations. Gaps in provision are already taking a toll, with fragmented access to care and high rates of stres...",
     "is_new": false,
     "lang": "en",
     "interpretation": "用智能体AI重塑全球医疗，有望缓解资源不均并提升服务人性化。"
    },
    {
     "title": "从感知智能到智能体 AI：高通汽车中国布局深化加速",
     "url": "https://www.ifanr.com/1668242?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-06",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": true,
     "lang": "zh",
     "interpretation": "高通从感知到决策的AI布局，预示汽车智能化竞争进入新阶段。"
    },
    {
     "title": "有人靠CPU把AI算力密度卷到了新高度",
     "url": "https://www.qbitai.com/2026/06/431045.html",
     "source": "量子位",
     "date": "2026-06-05",
     "summary": "Agentic AI的算力焦虑，英特尔给来了一剂「猛药」",
     "is_new": false,
     "lang": "zh",
     "interpretation": "通过CPU优化提升AI算力密度，为硬件受限场景提供低成本高性能新路径。"
    },
    {
     "title": "华为云发布Agentic AI系列新品 打造智能时代“硅基黑土地”",
     "url": "https://www.qbitai.com/2026/06/431027.html",
     "source": "量子位",
     "date": "2026-06-05",
     "summary": "",
     "is_new": false,
     "lang": "zh",
     "interpretation": "华为云发布Agentic AI新品，旨在构建智能时代的基础设施，加速行业应用落地。"
    },
    {
     "title": "从 INSPIRE 创想者大会看华为云：它正在 AI 时代给自己找一个更清晰的位置",
     "url": "https://www.leiphone.com/category/CorporateServices/93NsFoqxglrbXa26.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-05",
     "summary": "今年上半年，外界看华为云在AI上的战略，常常会有一种模糊感。过去6个月，云厂商的AI叙事变得越来越具体：阿里云、火山引擎都在讲模型调用量，讲MaaS收入，腾讯云目前在讲爆款应用。相比之下，华为云在AI时代究竟要把自己的核心位置放在哪里，外界此前并不总是看得很清楚。这一次华为云INSPIRE创想者大会给了一个很好的观察窗口。从这次大会来看，华为云正在把自己的位置讲得更清楚：向下，它要做智能体时代的“硅基黑土地”；向上，它要从医疗、具身智能、制造、科研这些行业场景里，寻找AI商业化的出口。华为云不想只被MaaS定义在这次活动媒体群访中，雷峰网抛给了华为云CEO一个很直接的问题：今年上半年，阿...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "华为云正从云服务商转向AI时代的基础设施与生态构建者。"
    },
    {
     "title": "腾讯文档行业首发「人机双写」，支持Word、PPT与数据图表",
     "url": "https://www.leiphone.com/category/industrynews/qSkgFVNBfMkyDldg.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-05",
     "summary": "6月5日，在2026腾讯云AI产业应用大会上，腾讯文档宣布全面升级，正式发布行业首创的「人机双写」能力。从专供人使用的编辑工具，正式进化为人与AI共同工作的新一代内容平台。依托首发的「人机双写」能力，腾讯文档让AI办公从过去来回切屏、手动复制粘贴的繁琐模式，变成能在文档里与用户同屏接力干活的数字同事。比如，用户列好文字提纲，AI即可直接按照逻辑接力填补细节；在处理幻灯片或数据时，AI也能实时接力，一键生成排版精美的PPT或直观的可视化图表。 这一突破性体验的背后，得益于腾讯文档与WorkBuddy的深度技术融合。腾讯文档原生采用了WorkBuddy的统一Agent内核，结合文档自研的高性...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "腾讯文档首创人机协同写作模式，提升办公效率与内容创作体验。"
    },
    {
     "title": "华为云发布Agentic AI系列新品 打造智能时代“硅基黑土地”",
     "url": "https://www.leiphone.com/category/citydigital/I7sO2yPT7tpnmnZk.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-05",
     "summary": "[中国，上海，2026年6月5日] 今天，华为云INSPIRE创想者大会在上海西岸国际会展中心开幕。华为云在本次新品发布会上正式提出Agentic Infra新范式，并发布Agentic Infra通智一体化基础设施、新一代模型训推平台、企业级智能体平台等系列Agentic AI新品，打造企业级Agentic AI创新的“硅基黑土地”。大会还宣布正式上线“行业AI梦工厂”智慧医疗、具身智能、智能制造、科学计算四大专区，坚持用AI解行业难题，加速发展行业数智化生态。定义Agentic Infra新范式，软硬芯协同做厚“硅基黑土地”华为公司董事、华为云CEO周跃峰指出，Agentic AI时...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "华为云布局AI底层生态，旨在降低企业开发门槛，抢占智能时代基础设施制高点。"
    },
    {
     "title": "微信AI对手机厂商打开一道窄门｜焦点分析",
     "url": "<![CDATA[https://36kr.com/p/3839575253993985?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-06-05",
     "summary": "文｜王毓婵 梁键强 编辑｜张雨忻 昨日，腾讯客服回应称，微信正在与华为、小米、荣耀、OPPO、vivo等手机厂商合作推出A2A助手能力，目前已有多家厂商完成接入。 “您可以通过对应手机系统的AI助手发起微信音视频通话或向指定好友发送消息。该功能基于A2A（Agent-to-Agent）协作机制，数据安全与隐私通过双重授权机制保障。合作旨在将微信高频沟通功能融入手机系统助手，为您提供更便捷的使用体验。”腾讯客服表示。 与之前字节跳动推出的豆包手机相比，腾讯的微信AI采取了完全不同的技术路径。 以豆包手机为代表的很多 OS 端 AI 助手，走的是 GUI agent（图形界面智能体） 路线—...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "微信AI开放接口给手机厂商，可能重塑移动端AI服务格局，打破封闭生态。"
    },
    {
     "title": "刚刚，Windows「梦中神机」来了，把你的 PC 变成 Agent 工位",
     "url": "https://www.ifanr.com/1667971?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-03",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "微软新系统让PC变身智能助手工位，推动个人计算向AI代理进化。"
    },
    {
     "title": "制糖工厂发布 AI 小电拼 Mirror，支持 AI Agent 原生接入",
     "url": "https://www.ifanr.com/1667908?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-03",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "充电设备接入AI代理，硬件智能化从工具向主动服务升级。"
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
     "interpretation": "行业领袖对话内容汇总，揭示AI商业化路径与伦理治理最新共识。"
    },
    {
     "title": "黄仁勋会见韩国两大游戏商代表共商游戏AI合作方案",
     "url": "<![CDATA[https://36kr.com/newsflashes/3842764594792708?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-06-07",
     "summary": "据报道，英伟达首席执行官（CEO）黄仁勋7日在首尔江南区的网吧先后会见韩国游戏公司KRAFTON创始人兼董事长蔣柄圭和游戏开发商NCSOFT代表金泽辰。据悉，当天黄仁勋和蔣柄圭可能就物理AI等人形机器人，以及基于英伟达近期发布的首款AI笔记本电脑系列“RTX Spark”的游戏领域合作等进行讨论。KRAFTON长期与英伟达合作研发AI功能，并将其融入游戏之中。通过游戏结成的合作关系还推动了双方有关物理AI合作的讨论。KRAFTON主要高管去年4月访问英伟达位于美国加州的总部，同黄仁勋就包括机器人在内的新一代技术合作方向进行了探讨。在结束与KRAFTON高管的会面后，黄仁勋移步附近的另一家...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "黄仁勋亲访韩国游戏巨头，预示AI将深度重塑游戏开发与交互体验。"
    },
    {
     "title": "波恩大学 Maren Bennewitz 教授：让机器人在遮挡世界中主动获取信息 | ICRA 2026",
     "url": "https://www.leiphone.com/category/ai/Y65BpmoLEhUaqnNS.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-05",
     "summary": "机器人不能只会“看见”。 作者丨郑佳美 编辑丨马晓宁 2026 年 6 月 4 日，在 ICRA 2026 “Robot perception and spatial AI” Keynote Session 上，波恩大学教授 Maren Bennewitz 发表了关于主动感知机器人的演讲，直指真实机器人部署中的一个基本困境：机器人面对的世界往往是杂乱、持续变化且只能部分观测的，仅靠被动观察无法完成可靠理解。Bennewitz 的核心判断是：机器人要真正进入家庭、农业和服务场景，不能只把感知当作“看一眼”的过程，而必须把感知、预测、先验知识和动作规划放到同一个闭环里。机器人需要主动移动视角...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "机器人学会主动应对遮挡，提升复杂环境下的自主感知与决策能力。"
    },
    {
     "title": "独家解读丨时隔五年，OpenAI为何非要吃机器人这口「回头草」？",
     "url": "https://www.leiphone.com/category/industrynews/0P8KvQPzWQpU9F40.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-05",
     "summary": "时隔五年，山姆·奥特曼为何重返机器人？这是他在X上官宣这则消息后，业内最大的疑问。是担心股价破发，开始拼命画饼讲故事了？还是Anthropic万亿估值压顶下，OpenAI不得不寻求更大差异化？亦或是说，物理世界的 AGI 临界点真的已到来？聚光灯正在移位。2026年的AI科技舞台上，OpenAI 早已告别了独占鳌头的绝对主角时代。随着马斯克SpaceX、OpenAI、Anthropic 三家超级巨头相继步入美股 IPO 的敲钟倒计时，一场残酷的估值绞杀战已然打响。SpaceX已突破1.75万亿美元，Anthropic估值也已超过OpenAI，以9650亿距万亿一步之遥，这也让卡在两大巨头...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "OpenAI重拾机器人业务，反映AI从虚拟交互向物理世界落地的重要战略转向。"
    },
    {
     "title": "早报｜OpenAI官宣进军机器人领域/AI误把文物照片上架，闲鱼致歉/天涯社区重启首日被挤爆",
     "url": "https://www.ifanr.com/1667792?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-02",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "OpenAI入局机器人，AI从虚拟走向物理世界，竞争格局将变。"
    }
   ]
  },
  {
   "name": "多模态与AIGC",
   "icon": "🎨",
   "color": "#dc2626",
   "count": 4,
   "cards": [
    {
     "title": "Meta made its own AI-generated clickbait news feed",
     "url": "https://www.theverge.com/ai-artificial-intelligence/944235/meta-app-ai-clickbait-articles",
     "source": "The Verge - AI",
     "date": "2026-06-06",
     "summary": "Facebook has long been filled with feeds of clickbait articles. Now, Meta is making its own clickbait articles with AI. The standalone Meta AI app now has a \"For You\" section that populates a list of clickbait-style stories for you to read. But the topics, images, and text are all AI-generated - ...",
     "is_new": true,
     "lang": "en",
     "interpretation": "Meta用AI生成点击诱饵新闻，暴露平台内容质量与流量优先的隐患。"
    },
    {
     "title": "Nemotron 3.5 Content Safety: Customizable Multimodal Safety for Global Enterprise AI",
     "url": "https://huggingface.co/blog/nvidia/nemotron-3-5-content-safety",
     "source": "Hugging Face Blog",
     "date": "2026-06-04",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "英伟达推出多模态安全模型，助力全球企业定制化AI内容防护。"
    },
    {
     "title": "Let us filter AI slop, you cowards",
     "url": "https://www.theverge.com/ai-artificial-intelligence/942909/let-us-filter-ai-slop-google-youtube-meta-instagram-tiktok",
     "source": "The Verge - AI",
     "date": "2026-06-04",
     "summary": "It's almost impossible to avoid seeing AI-generated content online, but it doesn't have to be this way. YouTube, Instagram, TikTok, and more have ramped up content authentication efforts over the last year, with many now automatically applying labels to distinguish AI-generated images, videos, an...",
     "is_new": false,
     "lang": "en",
     "interpretation": "呼吁平台主动过滤AI生成垃圾内容，否则将面临用户信任危机。"
    },
    {
     "title": "郭明錤：苹果已砍掉 Vision Pro，改玩 AI 眼镜了",
     "url": "https://cn.technode.com/post/2026-06-04/kuo-apple-vision-pro/",
     "source": "动点科技 - AI",
     "date": "2026-06-04",
     "summary": "知名分析师郭明錤发帖称，苹果 XR 头显 […]",
     "is_new": false,
     "lang": "zh",
     "interpretation": "苹果战略转向，放弃高价头显，押注更轻便的AI眼镜赛道。"
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
     "title": "What to expect from WWDC 2026: Siri’s highly anticipated revamp and Apple Intelligence updates",
     "url": "https://techcrunch.com/2026/06/06/what-to-expect-from-wwdc-2026-siris-highly-anticipated-revamp-and-apple-intelligence-updates/",
     "source": "TechCrunch - AI",
     "date": "2026-06-06",
     "summary": "Apple's WWDC nears: Here's what you can look forward to.",
     "is_new": true,
     "lang": "en",
     "interpretation": "Siri大改版与苹果AI更新，决定未来智能助手竞争格局。"
    },
    {
     "title": "This is your laptop… on AI",
     "url": "https://www.theverge.com/podcast/944058/ai-laptop-nvidia-build-gemini-spark-vergecast",
     "source": "The Verge - AI",
     "date": "2026-06-05",
     "summary": "We're now deep into developer conference season, and one of the themes so far is the relentless conviction from Big Tech companies that AI is going to change everything about how we do everything. Nvidia's Jensen Huang made that clearer than anyone this week, when he described a completely new wa...",
     "is_new": false,
     "lang": "en",
     "interpretation": "AI深度融入笔记本电脑，标志个人计算设备进入智能增强新阶段。"
    },
    {
     "title": "Biodefense in the Intelligence Age",
     "url": "https://openai.com/index/biodefense-in-the-intelligence-age",
     "source": "OpenAI Blog",
     "date": "2026-06-04",
     "summary": "An action plan for AI-powered biological resilience",
     "is_new": false,
     "lang": "en",
     "interpretation": "生物防御引入AI情报分析，或改变未来大流行病监测模式。"
    },
    {
     "title": "比亚迪重磅发布中国首款4nm制程智驾芯片 布局高等级自动驾驶",
     "url": "https://www.leiphone.com/category/transportation/7dY2VaaFzmB8aCxi.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-05",
     "summary": "2026年5月28日，比亚迪召开“敢为”智能化战略发布会，董事长王传福表示：“电动化上半场看电池，智能化下半场看芯片。”由此，比亚迪重磅发布中国首款4nm制程智驾芯片——璇玑A3，加速推进智能化下半场进程，引领全球汽车行业智能化变革。此外，继为智能泊车安全兜底后，比亚迪再次率先承诺为城市领航安全兜底1年，并宣布全系车型均可搭载天神之眼B 辅助驾驶激光版，选装价格12000元，开创全民城市领航时代，让好技术人人可享、人人放心享！ 从人的真实需求出发 比亚迪设立智能化下半场三大目标过去几年，全球迎来新一轮人工智能发展浪潮，感知硬件、芯片的发展速度超乎想象，这些推动着汽车从单纯的出行工具进化为...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "比亚迪发布4nm智驾芯片，标志中国车企在高端自动驾驶硬件领域实现自主突破。"
    },
    {
     "title": "他用WPS笔记，把AI报错变成了可复用的“避坑指南”",
     "url": "https://www.leiphone.com/category/industrynews/my3uIlmkVcHIKgu3.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-05",
     "summary": "“AI Coding 最大的风险不是写不出代码，而是忘记了自己为什么做出某个判断。”这不是一句抽象判断，而是工程师曹健在反复处理 AI 报错后得到的真实体会。6月5日，在金山办公旗下「WPS AI Next」活动现场，他从自己的 AI Coding 工作流讲起，分享了使用 WPS 笔记沉淀技术经验的故事。当天发布的 WPS 笔记，是一款面向个人知识管理场景的 AI 原生多模态笔记产品，主张“随心记录，轻松有序”。对曹健来说，这句话并不抽象。它对应的是一次半夜两点的报错、一套 47 万字的资料库，以及一次从 30 分钟到 3 分钟的排查效率变化。那次GPU飙到100%后，他多年的积累没能帮...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "将AI报错经验结构化沉淀，降低个人与团队重复试错成本。"
    },
    {
     "title": "618大促小米迎来开门红，摘得京东手机竞速榜国产冠军",
     "url": "https://www.leiphone.com/category/industrynews/UuldegmKFW9zsxhE.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-05",
     "summary": "2026 年 618 大促正在进行中，活动从 5 月中旬持续到 6 月18 日，大促进度过半。近日，各电商平台宣布启动开门红活动新政策。小米 618 迎来开门红，多个爆款手机、科技家电销量可圈可点。以京东手机竞速榜为例，截至6 月1 日下午 19点，小米摘得京东手机竞速榜国产累计销量冠军。值得一提的是，小米 15 Ultra直降 1500 元，成为本次 618 期间小米手机优惠力度最大的旗舰机。存储涨价持续发酵，618成锁定低价关键窗口随着618大促全面开启，消费电子市场迎来年中换新热潮。多家媒体持续关注智能手机行业价格走势，在存储芯片价格持续上涨、终端成本不断承压的背景下，今年618成...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "小米在618大促中手机销量领先，显示其性价比策略与品牌号召力。"
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
     "interpretation": "PyTorch性能分析入门指南，帮助开发者精准优化模型训练效率。"
    },
    {
     "title": "5分钟AI长视频不翻车！国产开源框架杀到全球第一梯队",
     "url": "https://www.qbitai.com/2026/06/431401.html",
     "source": "量子位",
     "date": "2026-06-07",
     "summary": "高一致性、低延迟、实时超分全梭哈",
     "is_new": true,
     "lang": "zh",
     "interpretation": "国产AI视频框架突破长时生成瓶颈，技术实力已跻身全球第一梯队。"
    }
   ]
  },
  {
   "name": "AI商业与投融资",
   "icon": "💰",
   "color": "#ca8a04",
   "count": 22,
   "cards": [
    {
     "title": "The Trump administration might take an equity stake in OpenAI",
     "url": "https://techcrunch.com/2026/06/06/the-trump-administration-might-take-an-equity-stake-in-openai/",
     "source": "TechCrunch - AI",
     "date": "2026-06-06",
     "summary": "President Donald Trump said he's discussing deals \"where the American people can benefit from the success of AI.\"",
     "is_new": true,
     "lang": "en",
     "interpretation": "政府入股OpenAI，将深刻改变AI行业监管与资本结构。"
    },
    {
     "title": "Crypto-Funded Chinese Peptide Labs Are Booming",
     "url": "https://www.wired.com/story/security-news-this-week-crypto-funded-chinese-peptide-labs-are-booming/",
     "source": "Wired - AI",
     "date": "2026-06-06",
     "summary": "Plus: Hackers use Meta’s AI bots to hack Instagram accounts, Anthropic helps NSA hackers, a decades-long GPS satellite mystery may have been solved, and more.",
     "is_new": true,
     "lang": "en",
     "interpretation": "加密货币资金涌入中国肽实验室，凸显监管灰色地带与科研资本化风险。"
    },
    {
     "title": "Startup Battlefield 200 applications officially close in 3 days",
     "url": "https://techcrunch.com/2026/06/05/startup-battlefield-200-applications-officially-close-in-3-days/",
     "source": "TechCrunch - AI",
     "date": "2026-06-05",
     "summary": "Applications for Startup Battlefield 200 officially close on June 8, 11:59 p.m. PT. Don't wait any longer. Secure your shot at competing on the Disrupt Stage at TechCrunch Disrupt 2026 this October at San Francisco's Moscone West.",
     "is_new": false,
     "lang": "en",
     "interpretation": "创业大赛报名截止在即，预示新一批硬科技项目即将进入资本视野。"
    },
    {
     "title": "The most interesting startups right now want to get you off your phone",
     "url": "https://techcrunch.com/video/the-most-interesting-startups-right-now-want-to-get-you-off-your-phone/",
     "source": "TechCrunch - AI",
     "date": "2026-06-05",
     "summary": "While the AI fundraising machine keeps breaking its own records, some founders are building in the other direction. Mirror founder Brynn Putnam just raised money for Board, a startup focused on bringing people together through in-person games and social experiences. Cyberdeck creators are going v...",
     "is_new": false,
     "lang": "en",
     "interpretation": "反手机依赖成创业新风口，反映数字健康需求催生行为干预技术市场。"
    },
    {
     "title": "The ‘together tech’ wave might be the most intriguing startup bet of 2026",
     "url": "https://techcrunch.com/podcast/the-together-tech-wave-might-be-the-most-intriguing-startup-bet-of-2026/",
     "source": "TechCrunch - AI",
     "date": "2026-06-05",
     "summary": "While the AI fundraising machine keeps breaking its own records, some founders are building in the other direction. Mirror founder Brynn Putnam just raised money for Board, a startup focused on bringing people together through in-person games and social experiences. Cyberdeck creators are going v...",
     "is_new": false,
     "lang": "en",
     "interpretation": "“协同技术”概念走红，暗示2026年投资热点从单点突破转向系统整合。"
    },
    {
     "title": "Mira Murati steps back into the spotlight, carefully",
     "url": "https://techcrunch.com/2026/06/04/mira-murati-steps-back-into-the-spotlight-carefully/",
     "source": "TechCrunch - AI",
     "date": "2026-06-05",
     "summary": "In the current environment, remaining heads down has diminishing returns; at some point, you have to make some noise just to remind the market you exist.",
     "is_new": false,
     "lang": "en",
     "interpretation": "前OpenAI首席技术官穆拉蒂谨慎复出，预示AI行业高层人事新动向。"
    },
    {
     "title": "Small modular nuclear reactor reaches criticality in first test",
     "url": "https://arstechnica.com/science/2026/06/first-us-test-of-modular-reactor-reaches-criticality/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-05",
     "summary": "The reactor, from a startup called Antares, isn't ready to generate power yet.",
     "is_new": false,
     "lang": "en",
     "interpretation": "小型模块化核反应堆首次临界测试成功，为清洁能源提供新路径。"
    },
    {
     "title": "S&P 500 rejects SpaceX, also blocking entry for OpenAI and Anthropic",
     "url": "https://arstechnica.com/tech-policy/2026/06/sp-500-blocks-fast-spacex-entry-wont-waive-rule-for-unprofitable-ai-firms/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-05",
     "summary": "SpaceX won’t get easy access to billions of dollars from passive investors.",
     "is_new": false,
     "lang": "en",
     "interpretation": "标普500拒绝SpaceX等AI公司，反映资本市场对新兴行业估值分歧。"
    },
    {
     "title": "This AI startup says it can tell if a script will make a hit film",
     "url": "https://www.theverge.com/ai-artificial-intelligence/943531/ai-script-quilty-simon-horsman-daniel-wood",
     "source": "The Verge - AI",
     "date": "2026-06-05",
     "summary": "When Quilty hit the industry trades earlier this year, the AI startup promised that its tool could accurately predict a film's success just by reading the script. When people actually got a chance to experiment with Quilty's product, though, they were left skeptical. Even with all the available d...",
     "is_new": false,
     "lang": "en",
     "interpretation": "用AI预测剧本票房，可能颠覆传统影视投资决策模式。"
    },
    {
     "title": "OpenAI and Anthropic May Be Rivals, but Investors Aren’t Picking Sides",
     "url": "https://www.wired.com/story/openai-and-anthropic-may-be-rivals-but-their-investors-arent-choosing-sides/",
     "source": "Wired - AI",
     "date": "2026-06-05",
     "summary": "“Why wouldn’t you want to be in both Pepsi and Coke?” says one venture capitalist. “It’s the same here.”",
     "is_new": false,
     "lang": "en",
     "interpretation": "投资者同时押注OpenAI和Anthropic，说明AI赛道竞争未定、资本不愿错失机会。"
    },
    {
     "title": "Ahead of its IPO, Anthropic’s Daniela Amodei shrugs off doubts about AI’s returns",
     "url": "https://techcrunch.com/2026/06/04/ahead-of-its-ipo-anthropics-daniela-amodei-shrugs-off-doubts-about-ais-returns/",
     "source": "TechCrunch - AI",
     "date": "2026-06-04",
     "summary": "Anthropic has been growing at a breakneck pace. The company announced that annualized revenue crossed $47 billion in May, up dramatically from roughly $9 billion at the end of 2025. That trajectory faces a real test, though.",
     "is_new": false,
     "lang": "en",
     "interpretation": "Anthropic高管无视AI回报质疑，IPO前展现信心，市场关注度高。"
    },
    {
     "title": "The AI IPO Race Heats Up, DOGE Whistleblower Sues Elon Musk, and Instagram Gets Hacked",
     "url": "https://www.wired.com/story/uncanny-valley-podcast-ai-ipo-race-elon-musk-doge-whistleblower-instagram-hacking-incident/",
     "source": "Wired - AI",
     "date": "2026-06-04",
     "summary": "On Uncanny Valley, we dive into the IPO bonanza that the top AI companies are embarking on to the point where some real estate listings are looking for not just regular old cash, but Anthropic stock.",
     "is_new": false,
     "lang": "en",
     "interpretation": "AI公司扎堆IPO、马斯克遭举报、Instagram被黑，科技圈乱局加剧。"
    },
    {
     "title": "Jeff Bezos Is Funding a Wild Hunt for the Brain’s ‘Core Algorithm’",
     "url": "https://www.wired.com/story/jeff-bezos-is-funding-a-wild-hunt-for-the-brains-core-algorithm/",
     "source": "Wired - AI",
     "date": "2026-06-04",
     "summary": "With $500 million in funding and a reported $2.5 billion valuation, Flourish wants to reinvent AI by putting real neurons under the microscope.",
     "is_new": false,
     "lang": "en",
     "interpretation": "贝佐斯押注大脑算法研究，或颠覆AI与神经科学交叉领域。"
    },
    {
     "title": "OpenAI and Anthropic Sign Letter to Prevent AI-Developed Biological Weapons",
     "url": "https://www.wired.com/story/openai-anthropic-letter-ai-biological-weapons/",
     "source": "Wired - AI",
     "date": "2026-06-04",
     "summary": "Leading AI labs, executives, and scientists are sending a letter to lawmakers urging them to improve tracking of synthetic DNA sequences that could be used for bioweapons.",
     "is_new": false,
     "lang": "en",
     "interpretation": "顶级AI公司主动承诺防生物武器，为行业安全树立新标杆。"
    },
    {
     "title": "A blueprint for democratic governance of frontier AI",
     "url": "https://openai.com/index/frontier-safety-blueprint",
     "source": "OpenAI Blog",
     "date": "2026-06-03",
     "summary": "OpenAI outlines a blueprint for U.S. governance of frontier AI, proposing a federal framework for safety, resilience, and national security.",
     "is_new": false,
     "lang": "en",
     "interpretation": "为前沿AI制定民主治理框架，防止技术权力过度集中。"
    },
    {
     "title": "OpenAI public policy agenda",
     "url": "https://openai.com/index/public-policy-agenda",
     "source": "OpenAI Blog",
     "date": "2026-06-03",
     "summary": "OpenAI outlines its public policy agenda for AI, including safety, youth protection, workforce transition, and global standards to ensure AI benefits society.",
     "is_new": false,
     "lang": "en",
     "interpretation": "公开政策议程，影响全球AI监管方向与行业合规标准。"
    },
    {
     "title": "Travelers deploys AI-powered claims countrywide with OpenAI",
     "url": "https://openai.com/index/travelers",
     "source": "OpenAI Blog",
     "date": "2026-06-02",
     "summary": "Travelers built an AI-powered Claim Assistant with OpenAI to guide customers through filing claims, provide 24/7 support, and scale operations during peak demand.",
     "is_new": false,
     "lang": "en",
     "interpretation": "AI理赔全国落地，保险业效率与用户体验将迎来质变。"
    },
    {
     "title": "The Download: AI can run your admin department now",
     "url": "https://www.technologyreview.com/2026/06/02/1138277/the-download-ai-tips-small-businesses-admin/",
     "source": "MIT Technology Review - AI",
     "date": "2026-06-02",
     "summary": "This is today’s edition of The Download, our weekday newsletter that provides a daily dose of what’s going on in the world of technology. How small businesses can leverage AI From accounting to design to market research and product development, there’s a staggering breadth of skills needed to run...",
     "is_new": false,
     "lang": "en",
     "interpretation": "AI接管行政事务，预示企业运营效率与岗位结构将重大变革。"
    },
    {
     "title": "9点1氪｜豆包推出付费后月活减少610万；Anthropic呼吁全球放缓AI开发，警告AI“自我改进”风险；罗永浩卸任锤子软件公司执行董事",
     "url": "<![CDATA[https://36kr.com/p/3840996342073604?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-06-06",
     "summary": "今日热点导览 SpaceX据悉将其IPO的日本融资目标提高至25亿美元 二手房挂牌量回落新房库存下降，楼市供需关系向好 B站宣布启动AI创造公开赛 TOP3大新闻 数据显示，豆包推出付费后月活减少610万 据全球人工智能市场追踪机构Aicpb.com周三发布的数据显示，在豆包推出订阅选项后，该应用5月份的月活跃用户（MAU）减少了610万，这是自2023年推出以来该应用罕见的下滑。Aicpb.com创始人李邦竹表示：“中国的免费人工智能服务时代还远未结束，所以豆包的商业化可能确实为时过早。” 有分析人士认为，字节跳动过早地将盈利模式商业化，可能会使其在中国竞争激烈的消费人工智能市场中失去...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "豆包付费后用户流失，说明AI产品需平衡变现与用户体验，避免杀鸡取卵。"
    },
    {
     "title": "ThinkAR AiLENS V1 AI智能眼镜正式于日本上市，亚洲市场布局持续扩展",
     "url": "https://www.leiphone.com/category/industrynews/AqCfShBxj7cZCuRD.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-05",
     "summary": "轻量化可穿戴AI设备，将实时翻译、AI助手、来电通知与提词功能直接呈现于用户视野之中。东京/上海——2026年6月5日——ThinkAR今日宣布AiLENS V1 AI智能眼镜于日本正式上市。这款轻量化AI可穿戴设备以「让AI信息随时可见、即时获取、解放双手」为核心设计理念，标志着 ThinkAR在亚洲重点市场持续扩展的下一阶段。AiLENS V1可将实用信息直接显示于用户的视野范围内。通过与智能手机配对，用户无需频繁低头查看手机，即可获取实时翻译内容、AI 助手回复、来电通知及提词信息。产品支持76种语言的实时翻译，适用于商务出行、酒店旅游、零售服务、教育培训、跨国会议、业务演示及跨境...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "国产AI眼镜进军日本，标志着中国智能硬件在亚洲市场的竞争力和影响力提升。"
    },
    {
     "title": "氪星晚报 ｜日本或通过抛售美债，为创纪录规模的日元汇市干预筹资；俞浩内部发文：未来将继续心无旁骛做实业",
     "url": "<![CDATA[https://36kr.com/p/3840267945969929?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-06-05",
     "summary": "大公司： 首关15亿元，英诺科创三期基金持续聚焦早期科技投资 36氪获悉，6月5日，英诺基金宣布旗下英诺科创三期基金完成首轮关账，规模15亿元。该基金聚焦早期科技投资，重点布局前沿科技及人工智能领域。 比特币“金库”公司市值蒸发620亿美元 比特币本周下跌约14%，至四个月低点附近。随着加密货6月5日下午，追觅科技创始人俞浩在公司内部大群发文，表示未来将继续心无旁骛做实业，坚持技术创新，去啃全球最难的市场。（界面）币整体滑坡，数字资产“金库型”公司的股票也持续下挫，其中许多的跌幅远远超过它们所持有的加密货币本身。Artemis的数据显示，这些比特币金库公司的完全稀释股票总市值，已从去年1...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "日本或动用美债干预汇市，凸显全球金融博弈加剧，日元汇率保卫战进入新阶段。"
    },
    {
     "title": "Anthropic 抢跑 IPO，AI 巨头接连秘密上市，背后是怎样的攻防战",
     "url": "https://www.ifanr.com/1667829?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-02",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "AI公司抢跑上市，背后是资本争夺与行业话语权暗战。"
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
     "title": "AI等机器网络请求量首超人类",
     "url": "<![CDATA[https://36kr.com/newsflashes/3842694357092869?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-06-07",
     "summary": "全球最大的互联网托管服务商之一——云网络安全服务公司发布的最新数据显示，在其托管网站收到的网络访问请求中，约57.4%来自人工智能和自动化程序，42.6%来自人类用户。该公司称，这是互联网历史上来自人类的网络访问请求数量首次被机器超越。 (央视新闻)",
     "is_new": true,
     "lang": "zh",
     "interpretation": "机器流量超越人类，标志着AI自主交互时代正式开启。"
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
     "title": "Sriram Krishnan is leaving his role as White House AI advisor",
     "url": "https://techcrunch.com/2026/06/06/sriram-krishnan-is-leaving-his-role-as-white-house-ai-advisor/",
     "source": "TechCrunch - AI",
     "date": "2026-06-06",
     "summary": "Krishnan is reportedly starting a new institution to continue shaping Trump's AI policy.",
     "is_new": true,
     "lang": "en",
     "interpretation": "白宫AI顾问离职，或影响美国人工智能政策走向。"
    },
    {
     "title": "Scientists ejected from diabetes conference for distributing journal reprints",
     "url": "https://arstechnica.com/science/2026/06/scientists-ejected-from-diabetes-conference-for-distributing-journal-reprints/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-06",
     "summary": "Those ousted included ADA journal editor-in-chief Steven Kahn and former ADA president Desmond Schatz",
     "is_new": true,
     "lang": "en",
     "interpretation": "科学家因分发论文被逐，凸显学术传播与商业利益的冲突。"
    },
    {
     "title": "Some ancient microbes frozen with Ötzi the Iceman are still growing",
     "url": "https://arstechnica.com/science/2026/06/otzis-mummified-body-is-home-to-ancient-strains-of-yeast-and-bacteria/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-06",
     "summary": "What’s the difference between a person, an artifact, and an ecosystem?",
     "is_new": true,
     "lang": "en",
     "interpretation": "冰人携带的远古微生物仍存活，为研究极端环境生命提供活样本。"
    },
    {
     "title": "The mayor of Shelbyville, Indiana, says only people who live in ‘shitty houses’ oppose data center",
     "url": "https://www.theverge.com/ai-artificial-intelligence/944984/shelbyville-indiana-mayor-shitty-houses-data-center",
     "source": "The Verge - AI",
     "date": "2026-06-06",
     "summary": "A proposed $2 billion data center has become a political flashpoint in the small city of Shelbyville, Indiana. And the controversy has only grown more intense after the mayor, Scott Furgeson, was caught on camera saying of the \"No Data Center\" signs going up that, \"I've seen a lot of these all ov...",
     "is_new": true,
     "lang": "en",
     "interpretation": "市长言论激化数据中心选址争议，反映地方发展与居民利益矛盾。"
    },
    {
     "title": "Here comes new Siri again",
     "url": "https://www.theverge.com/tech/944245/apple-wwdc-2026-ai-siri-gemini",
     "source": "The Verge - AI",
     "date": "2026-06-06",
     "summary": "Apple has been on its back foot, AI-wise, for the past few years. But in a strange way, playing from behind might not be such a bad move. At WWDC on Monday, Apple appears to be getting ready to reintroduce us to the new Siri. Again. As a reminder, we met the new Siri in […]",
     "is_new": true,
     "lang": "en",
     "interpretation": "新版Siri再次登场，苹果能否兑现智能助手体验升级承诺。"
    },
    {
     "title": "micropython-wasm 0.1a2",
     "url": "https://simonwillison.net/2026/Jun/6/micropython-wasm/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-06",
     "summary": "Release: micropython-wasm 0.1a2 I added a CLI to micropython-wasm (issue #7), inspired by the first draft of the blog entry when I realized it would be a great way to illustrate the Try it yourself section. Tags: python, sandboxing, webassembly, micropython",
     "is_new": true,
     "lang": "en",
     "interpretation": "MicroPython的WASM版本发布，为浏览器内轻量级Python运行提供新可能。"
    },
    {
     "title": "Running Python code in a sandbox with MicroPython and WASM",
     "url": "https://simonwillison.net/2026/Jun/6/micropython-in-a-sandbox/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-06",
     "summary": "I've been experimenting with different approaches to running code in a sandbox for several years now, but my latest attempt feels like it might finally have all of the characteristics I've been looking for. I've released it as an alpha package called micropython-wasm, and I'm using it for a code ...",
     "is_new": true,
     "lang": "en",
     "interpretation": "沙箱运行Python代码，提升Web端代码安全性与跨平台兼容性。"
    },
    {
     "title": "Google will pay SpaceX $920M per month for compute",
     "url": "https://techcrunch.com/2026/06/05/google-will-pay-spacex-920m-per-month-for-compute/",
     "source": "TechCrunch - AI",
     "date": "2026-06-05",
     "summary": "In a statement, a Google representative described the deal as a result of unexpected demand for its recently launched AI products.",
     "is_new": false,
     "lang": "en",
     "interpretation": "谷歌天价采购算力，折射AI军备竞赛下云服务商与太空基建的深度绑定。"
    },
    {
     "title": "The token bill comes due: Inside the industry scramble to manage AI’s runaway costs",
     "url": "https://techcrunch.com/2026/06/05/the-token-bill-comes-due-inside-the-industry-scramble-to-manage-ais-runaway-costs/",
     "source": "TechCrunch - AI",
     "date": "2026-06-05",
     "summary": "\"The whole conversation shifted from tokenmaxxing and 'go fast' to 'we need guardrails, how do we control this?'\"",
     "is_new": false,
     "lang": "en",
     "interpretation": "AI算力成本失控引发行业焦虑，倒逼企业从烧钱转向效率优先策略。"
    },
    {
     "title": "AirTrunk commits $30B to build 5GW of AI data centers in India",
     "url": "https://techcrunch.com/2026/06/05/airtrunk-commits-30b-to-build-5gw-of-ai-data-centers-in-india/",
     "source": "TechCrunch - AI",
     "date": "2026-06-05",
     "summary": "The Australian data center operator plans to set up 5GW of capacity in India.",
     "is_new": false,
     "lang": "en",
     "interpretation": "澳洲数据中心商押注印度AI基建，凸显南亚成为全球算力争夺新战场。"
    },
    {
     "title": "Baby botulism outbreak: FDA still doesn't know cause—or how to prevent it",
     "url": "https://arstechnica.com/health/2026/06/baby-botulism-outbreak-fda-still-doesnt-know-cause-or-how-to-prevent-it/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-05",
     "summary": "In the end, the three companies involved all point the finger at each other.",
     "is_new": false,
     "lang": "en",
     "interpretation": "婴儿肉毒杆菌爆发原因不明，凸显食品安全监管漏洞与预防困境。"
    },
    {
     "title": "How a USB-connected speaker can infect a PC without ever being touched",
     "url": "https://arstechnica.com/security/2026/06/highly-reviewed-speaker-can-be-hacked-over-the-air-to-infect-connected-devices/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-05",
     "summary": "Seller of the Sound Blaster Katana V2X doesn't consider the behavior a vulnerability.",
     "is_new": false,
     "lang": "en",
     "interpretation": "无需物理接触即可通过USB音箱感染电脑，暴露外设安全新威胁。"
    },
    {
     "title": "The saga of the International Space Station air leak took a worrying turn Friday",
     "url": "https://arstechnica.com/space/2026/06/work-on-russias-leaky-space-station-module-causes-astronauts-to-take-shelter/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-05",
     "summary": "\"We look forward to working with Roscosmos on a collaborative approach to address the leaks.\"",
     "is_new": false,
     "lang": "en",
     "interpretation": "国际空间站漏气问题恶化，威胁长期载人航天任务安全与计划。"
    },
    {
     "title": "\"We pissed off a lot of people\": Giant data center plan cut 50% amid protests",
     "url": "https://arstechnica.com/tech-policy/2026/06/we-pissed-off-a-lot-of-people-giant-data-center-plan-cut-50-amid-protests/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-05",
     "summary": "Developer felt \"beaten up,\" with \"no choice\" but to shrink data center.",
     "is_new": false,
     "lang": "en",
     "interpretation": "巨型数据中心因抗议规模减半，显示公众对能源与土地争夺的抵制力。"
    },
    {
     "title": "Review: Spider-Noir recaptures the magic of a bygone era",
     "url": "https://arstechnica.com/culture/2026/06/review-spider-noir-recaptures-the-magic-of-a-bygone-era/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-05",
     "summary": "Nicolas Cage was born to play 1930s PI Ben Reilly/The Spider: part Bogart, part Bugs Bunny, 100% Cage-y.",
     "is_new": false,
     "lang": "en",
     "interpretation": "《蜘蛛 noir》重现经典时代魅力，证明怀旧风格在流媒体市场仍具吸引力。"
    },
    {
     "title": "Trump admin tries again to revive dying coal industry",
     "url": "https://arstechnica.com/science/2026/06/trump-admin-tries-again-to-revive-dying-coal-industry/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-05",
     "summary": "Money would keep coal plants open, build the first new plants in over a decade.",
     "is_new": false,
     "lang": "en",
     "interpretation": "特朗普政府再推煤炭复兴，凸显传统能源与气候政策间的激烈博弈。"
    },
    {
     "title": "The Fitbit Air is a good wearable weighed down by a chatty AI \"coach\"",
     "url": "https://arstechnica.com/gadgets/2026/06/the-fitbit-air-is-great-but-googles-ai-is-too-nice-to-be-your-coach/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-05",
     "summary": "The Air succeeds as a minimalist, reliable fitness tracker, but Google's AI Health Coach feels unnecessary.",
     "is_new": false,
     "lang": "en",
     "interpretation": "Fitbit Air因AI教练过度聊天拖累体验，警示可穿戴设备需平衡功能与干扰。"
    },
    {
     "title": "Not the next R8? Audi reveals mid-engined plug-in hybrid V8 Nuvolari.",
     "url": "https://arstechnica.com/cars/2026/06/not-the-next-r8-audi-reveals-mid-engined-plug-in-hybrid-v8-nuvolari/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-05",
     "summary": "The Huracan gave us the R8s, now the Temerario lends itself to a new Audi.",
     "is_new": false,
     "lang": "en",
     "interpretation": "奥迪推出混动超跑Nuvolari，或预示电动化时代高性能燃油车的转型方向。"
    },
    {
     "title": "New York lawmakers pass one-year ban on new data centers",
     "url": "https://www.theverge.com/policy/944041/new-york-data-center-moratorium",
     "source": "The Verge - AI",
     "date": "2026-06-05",
     "summary": "The New York State legislature passed a one-year moratorium on new large data centers, the first statewide ban of its kind if Democratic Governor Kathy Hochul signs it into law. Lawmakers behind the bill say it's meant to give policymakers time to understand the impact of large data centers on th...",
     "is_new": false,
     "lang": "en",
     "interpretation": "纽约暂停新建数据中心一年，反映AI算力扩张与能源环保矛盾的激化。"
    },
    {
     "title": "Has Microsoft Lost Its Mojo (Again)?",
     "url": "https://www.wired.com/story/has-microsoft-lost-its-mojo-again/",
     "source": "Wired - AI",
     "date": "2026-06-05",
     "summary": "Microsoft’s AI products aren’t selling, and Github’s been plagued with troubles. WIRED spoke with VP Scott Hanselman about whether the company is in catch-up mode.",
     "is_new": false,
     "lang": "en",
     "interpretation": "微软再次被质疑创新力，凸显科技巨头在AI浪潮中保持领先的挑战。"
    },
    {
     "title": "Why Apple Might Put Cameras Into Its Next AirPods",
     "url": "https://www.wired.com/story/why-apple-might-put-cameras-into-its-next-airpods/",
     "source": "Wired - AI",
     "date": "2026-06-05",
     "summary": "From battery life to privacy, there are many hurdles to the idea taking off.",
     "is_new": false,
     "lang": "en",
     "interpretation": "苹果或在AirPods加入摄像头，指向空间计算与视觉交互的下一代穿戴生态。"
    },
    {
     "title": "AI Has Come for Serif Fonts",
     "url": "https://www.wired.com/story/ai-has-come-for-serif-fonts/",
     "source": "Wired - AI",
     "date": "2026-06-05",
     "summary": "AI companies are using serif to project humanity. Critics are calling it “tasteslop.”",
     "is_new": false,
     "lang": "en",
     "interpretation": "AI字体生成技术冲击经典衬线体，设计行业面临工具与审美的双重变革。"
    },
    {
     "title": "Quoting Andreas Kling",
     "url": "https://simonwillison.net/2026/Jun/5/andreas-kling/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-05",
     "summary": "We will no longer accept public pull requests. [...] A substantial patch used to imply substantial effort, and that effort was a reasonable proxy for good faith. That assumption no longer holds. [...] Whether code was typed by hand is beside the point. What matters is who is responsible for it on...",
     "is_new": false,
     "lang": "en",
     "interpretation": "引用Andreas Kling观点，暗示对AI技术发展路径的批判性反思。"
    },
    {
     "title": "The latest AI news we announced in May 2026",
     "url": "https://blog.google/innovation-and-ai/technology/ai/google-ai-updates-may-2026/",
     "source": "Google AI Blog",
     "date": "2026-06-05",
     "summary": "Here are Google’s latest AI updates from May 2026",
     "is_new": false,
     "lang": "en",
     "interpretation": "2026年5月AI新闻汇总，反映技术最新进展与行业趋势。"
    },
    {
     "title": "Are AI chatbots making us lose control of our brains?",
     "url": "https://www.technologyreview.com/2026/06/05/1138427/are-ai-chatbots-making-us-lose-control-of-our-brains/",
     "source": "MIT Technology Review - AI",
     "date": "2026-06-05",
     "summary": "This week I’ve been at SXSW London. There’s been music, film, and a lot—and I mean a lot—of talk about AI. I also had the opportunity to sit down with Gloria Mark, a psychologist at the University of California, Irvine, who has spent the last 30 years studying how people interact with digital tec...",
     "is_new": false,
     "lang": "en",
     "interpretation": "聊天机器人可能导致人类思维失控，需警惕认知依赖风险。"
    },
    {
     "title": "EVA-Bench Data 2.0: 3 Domains, 121 Tools, 213 Scenarios",
     "url": "https://huggingface.co/blog/ServiceNow-AI/eva-bench-data",
     "source": "Hugging Face Blog",
     "date": "2026-06-04",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "多领域多工具场景的评测基准发布，推动AI代理能力标准化评估。"
    },
    {
     "title": "Kevin O’Leary agrees to downsize massive Utah data center",
     "url": "https://www.theverge.com/ai-artificial-intelligence/943234/kevin-oleary-agrees-to-downsize-massive-utah-data-center",
     "source": "The Verge - AI",
     "date": "2026-06-04",
     "summary": "Kevin O'Leary agreed to halve the size of his planned 40,000-acre data center in Utah amid mounting pressure from residents and activists, as reported earlier by local affiliate ABC4. The Shark Tank star sent a letter to Utah Senate President J. Stuart Adams on Thursday, saying that he will remov...",
     "is_new": false,
     "lang": "en",
     "interpretation": "鲨鱼坦克明星投资人缩减数据中心规模，反映AI算力泡沫风险。"
    },
    {
     "title": "TSMC struggles to keep up with AI demand: ‘We can only support so much’",
     "url": "https://www.theverge.com/tech/943066/tsmc-ai-demand-struggles",
     "source": "The Verge - AI",
     "date": "2026-06-04",
     "summary": "Taiwan Semiconductor Manufacturing Co. - the world's biggest semiconductor-maker - is struggling to meet demands from American customers even with its factory buildout in the US, according to reports from Reuters and Bloomberg. \"Customer demand is so high, and we can only support so much,\" TSMC C...",
     "is_new": false,
     "lang": "en",
     "interpretation": "台积电产能瓶颈暴露AI芯片供需矛盾，或延缓大模型迭代速度。"
    },
    {
     "title": "Elon Musk is steamrolling Wall Street to become a trillionaire",
     "url": "https://www.theverge.com/podcast/942586/elon-musk-spacex-ipo-x-xai-index-funds",
     "source": "The Verge - AI",
     "date": "2026-06-04",
     "summary": "Today on Decoder, I’m talking to Ryan Mac, a technology reporter at The New York Times and coauthor of the excellent book Character Limit: How Elon Musk Destroyed Twitter, which came out in 2024. I can’t recommend it enough. I wanted to have Ryan on the show because we’re on the cusp of the Space...",
     "is_new": false,
     "lang": "en",
     "interpretation": "马斯克借AI热潮碾压华尔街预期，个人财富冲击万亿级门槛。"
    },
    {
     "title": "AI enthusiasts are in a race against time, AI skeptics are in a race against entropy",
     "url": "https://simonwillison.net/2026/Jun/4/ai-enthusiasts-ai-skeptics/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-04",
     "summary": "AI enthusiasts are in a race against time, AI skeptics are in a race against entropy Charity Majors neatly captures the dynamic between AI enthusiasts and AI skeptics, both of whom are trying to build great software, often in the same teams: The enthusiasts are not wrong. We are starting to see r...",
     "is_new": false,
     "lang": "en",
     "interpretation": "AI乐观派争分夺秒创新，怀疑派对抗系统退化，两方赛跑决定未来。"
    },
    {
     "title": "Quoting Emanuel Maiberg, 404 Media",
     "url": "https://simonwillison.net/2026/Jun/4/a-slightly-different-version/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-04",
     "summary": "After this story was published Google's spokesperson reached out and asked us to publish a slightly different version of that statement. The new statement no longer stated that \"it's critical that we maintain humans in the loop.\" — Emanuel Maiberg, 404 Media, Google Employees Internally Share Mem...",
     "is_new": false,
     "lang": "en",
     "interpretation": "媒体人观点被引用，凸显AI报道中伦理与批判性思考的重要性。"
    },
    {
     "title": "The Download: AI-generated lawsuits and virtual power plants for data centers",
     "url": "https://www.technologyreview.com/2026/06/04/1138408/the-download-ai-lawsuits-virtual-power-plants-data-centers/",
     "source": "MIT Technology Review - AI",
     "date": "2026-06-04",
     "summary": "This is today’s edition of The Download, our weekday newsletter that provides a daily dose of what’s going on in the world of technology. How courts are coping with a flood of AI-generated lawsuits Most days in her chambers, Judge Maritza Braswell, a federal magistrate judge in Colorado, sifts th...",
     "is_new": false,
     "lang": "en",
     "interpretation": "AI引发诉讼潮与数据中心虚拟电厂，技术双刃剑效应显现。"
    },
    {
     "title": "How courts are coping with a flood of AI-generated lawsuits",
     "url": "https://www.technologyreview.com/2026/06/04/1138391/courts-coping-ai-lawsuits/",
     "source": "MIT Technology Review - AI",
     "date": "2026-06-04",
     "summary": "Most days in her chambers, Judge Maritza Braswell, a federal magistrate judge in Colorado, sifts through stacks of documents written by people without a lawyer. Many of them can’t afford to hire a lawyer, and others have cases too weak or too small to interest one. She reads each one carefully, m...",
     "is_new": false,
     "lang": "en",
     "interpretation": "法院面临AI生成诉讼文件激增，司法系统亟需技术应对策略。"
    },
    {
     "title": "Direct Preference Optimization Beyond Chatbots",
     "url": "https://huggingface.co/blog/Dharma-AI/direct-preference-optimization-beyond-chatbots",
     "source": "Hugging Face Blog",
     "date": "2026-06-03",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "偏好优化技术突破聊天机器人，拓展至更广泛AI对齐应用。"
    },
    {
     "title": "5 ways Google Search can level up your thrift and vintage shopping",
     "url": "https://blog.google/products-and-platforms/products/search/thrifting-tips/",
     "source": "Google AI Blog",
     "date": "2026-06-03",
     "summary": "Uncover second-hand scores with AI tools in Google Search and Shopping.",
     "is_new": false,
     "lang": "en",
     "interpretation": "搜索功能升级，助力二手购物更精准，推动可持续消费。"
    },
    {
     "title": "The Download: Trump’s new AI order, and smart glasses for warfare",
     "url": "https://www.technologyreview.com/2026/06/03/1138322/the-download-trump-ai-order-smart-glasses-warfare/",
     "source": "MIT Technology Review - AI",
     "date": "2026-06-03",
     "summary": "This is today’s edition of The Download, our weekday newsletter that provides a daily dose of what’s going on in the world of technology. 5 key points in Trump’s new AI order Less than two weeks after scrapping an executive order on AI, President Donald Trump signed a new one on Tuesday. Promisin...",
     "is_new": false,
     "lang": "en",
     "interpretation": "新行政令与军用眼镜，标志AI加速进入国家安全与战场应用。"
    },
    {
     "title": "Take our I/O 2026 quiz, vibe coded in Google AI Studio.",
     "url": "https://blog.google/innovation-and-ai/technology/ai/io-2026-vibe-coded-quiz/",
     "source": "Google AI Blog",
     "date": "2026-05-29",
     "summary": "We used Google AI Studio to vibe code a quiz about our top I/O 2026 announcements.",
     "is_new": false,
     "lang": "en",
     "interpretation": "谷歌I/O大会首次引入AI编程互动，展示技术民主化新玩法。"
    },
    {
     "title": "Check out real-life AI prototypes from the Futures Lab.",
     "url": "https://blog.google/innovation-and-ai/technology/ai/university-waterloo-labs/",
     "source": "Google AI Blog",
     "date": "2026-05-29",
     "summary": "University of Waterloo students develop AI prototypes like sign language tutors to reshape the future of education and work.",
     "is_new": false,
     "lang": "en",
     "interpretation": "未来实验室原型曝光，预示AI将从概念走向真实生活场景落地。"
    },
    {
     "title": "Reachy Mini goes fully local",
     "url": "https://huggingface.co/blog/local-reachy-mini-conversation",
     "source": "Hugging Face Blog",
     "date": "2026-05-27",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "机器人实现完全本地化运行，突破云端依赖，隐私与响应速度双提升。"
    },
    {
     "title": "Shipping a Trillion Parameters With a Hub Bucket: Delta Weight Sync in TRL",
     "url": "https://huggingface.co/blog/delta-weight-sync",
     "source": "Hugging Face Blog",
     "date": "2026-05-27",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "万亿参数模型同步技术突破，降低大模型部署门槛，推动开源生态发展。"
    },
    {
     "title": "教你用AI一节课收17万，华尔街精英排着队付费",
     "url": "https://www.qbitai.com/2026/06/431487.html",
     "source": "量子位",
     "date": "2026-06-07",
     "summary": "花旗美银都是客户",
     "is_new": true,
     "lang": "zh",
     "interpretation": "高价AI课程揭示知识付费泡沫，警惕利用技术焦虑收割韭菜现象。"
    },
    {
     "title": "中国银河证券：非农走强并不意味着美联储年内加息",
     "url": "<![CDATA[https://36kr.com/newsflashes/3842691789654273?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-06-07",
     "summary": "中国银河宏观研报认为，非农走强并不意味着美联储年内加息。总体上，5月劳动市场数据表明，就业情况整体依然好于市场预期，美联储短期缺乏支持降息的理由和数据；不过，结构仍然显示劳动市场并没有明显加速的风险，也不会推升通胀形成螺旋，无需过度定价年内加息的风险。尽管3月以来的非农数据表现偏强，短期来看也仅是增加了美联储年内降息的门槛，并不会导致加息压力。总体上，市场对加息的担忧成为了交易的主线。虽然中国银河宏观倾向于市场过度定价了加息风险，但短期的滞后经济数据并不能证伪加息预期，美联储也只能保持“数据依赖”。目前，市场在AI的极致定价后面临一段时间的回���风险，流动性预期的恢复年内将会出现，但需...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "市场对美联储降息预期过度，非农数据不改变政策观望立场。"
    },
    {
     "title": "马斯克是SpaceX面子，她才是里子",
     "url": "https://www.qbitai.com/2026/06/431371.html",
     "source": "量子位",
     "date": "2026-06-06",
     "summary": "造火箭的正在批量造巨富",
     "is_new": true,
     "lang": "zh",
     "interpretation": "揭示SpaceX真正技术核心是女性工程师，而非马斯克个人光环。"
    },
    {
     "title": "Hinton吹哨了：AI已经有意识！",
     "url": "https://www.qbitai.com/2026/06/431349.html",
     "source": "量子位",
     "date": "2026-06-06",
     "summary": "人类得接受自己不再是唯一智能生命体",
     "is_new": true,
     "lang": "zh",
     "interpretation": "AI意识争议升级，Hinton的警告可能推动伦理监管加速。"
    },
    {
     "title": "今年CVPR看点是广东：何恺明再获至高大奖，广工大打破大厂名校垄断",
     "url": "https://www.qbitai.com/2026/06/431186.html",
     "source": "量子位",
     "date": "2026-06-06",
     "summary": "广东上大分！",
     "is_new": true,
     "lang": "zh",
     "interpretation": "中国学者与地方高校在顶级AI会议中打破巨头垄断，展现技术实力。"
    },
    {
     "title": "港股鞋王千百度，一夜完成AI数据公司转型",
     "url": "https://www.qbitai.com/2026/06/431056.html",
     "source": "量子位",
     "date": "2026-06-06",
     "summary": "形成「鞋履+人工智能数据」双主业",
     "is_new": true,
     "lang": "zh",
     "interpretation": "传统鞋企跨界AI数据赛道，反映产业转型的极端案例。"
    },
    {
     "title": "早报｜黄仁勋访韩首站去T1网吧/姚顺雨谈腾讯AI下半场/三大运营商提醒高考考点将屏蔽信号，周边或无法上网",
     "url": "https://www.ifanr.com/1668239?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-06",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": true,
     "lang": "zh",
     "interpretation": "高考信号屏蔽影响日常通信，凸显重大考试的社会协调成本。"
    },
    {
     "title": "智源&清华合作成果登上Science：脑科学多模态基础模型Brainμ支撑揭示“记忆-睡眠”调控的神经机制",
     "url": "https://www.qbitai.com/2026/06/431033.html",
     "source": "量子位",
     "date": "2026-06-05",
     "summary": "研究表明，睡眠中的记忆重激活参与调控睡眠动态，为理解“记忆-睡眠”双向作用机制提供了新的实验证据。",
     "is_new": false,
     "lang": "zh",
     "interpretation": "脑科学多模态模型揭示记忆与睡眠机制，推动AI与神经科学交叉研究突破。"
    },
    {
     "title": "垃圾桶里捡零件，弹幕里接需求，B 站有群人在用 AI 野生造产品",
     "url": "https://www.ifanr.com/1668088?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-05",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "B站用户利用AI低成本造产品，展现草根创新活力，或催生新形态的众创生态。"
    },
    {
     "title": "是时候造一台 AI 时代的手机了｜AIDONE 第五期",
     "url": "https://www.ifanr.com/1668163?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-05",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "探讨AI时代手机形态变革，预示终端设备将从工具升级为智能交互核心入口。"
    },
    {
     "title": "早报｜苹果App Store四成头部应用已支持AI/千问上线肯德基skill/奈雪擦边LABUBU被判赔32万",
     "url": "https://www.ifanr.com/1668169?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-05",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "苹果App Store四成头部应用已支持AI，标志移动端AI应用进入规模化普及阶段。"
    },
    {
     "title": "WWDC26 开幕在即，今年有哪些看点值得关注？",
     "url": "https://sspai.com/post/110669",
     "source": "少数派 - AI",
     "date": "2026-06-05",
     "summary": "今年WWDC全球开发者大会即将在北京时间6月9日凌晨拉开帷幕，对Apple来说今年这一次活动是一个非常关键的节点：首先，2024年WWDC上画的饼至今没有兑现，而AI竞赛在2026年已经进入了白热化， ...查看全文",
     "is_new": false,
     "lang": "zh",
     "interpretation": "WWDC26看点聚焦，预示苹果将在系统生态与AI整合上推出重要更新。"
    },
    {
     "title": "Token大战中，华为云选择了第三条路｜最前线",
     "url": "<![CDATA[https://36kr.com/p/3840016255126016?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-06-05",
     "summary": "作者 | 邓咏仪 编辑 | 张雨忻 “在当前国产化算力正在成长的情况下，华为云现在不太在乎Token总量是多少，也不太在乎收入的总量是多少，在乎的是国产化的算力系统所生产出来的Tokens的健康度，并且要代表着生产力提升，而不仅仅是情绪价值。” 6月5日，2026华为云 INSPIRE 创想者大会在上海开幕，华为云CEO周跃峰表示。 他举了个例子：一个人闲来无事在手机上问 AI 一个问题，也会产生 Token，但这种 Token 的价值有多大很难说明。在他看来，衡量一朵云做得好不好，不该强调它跑出了多少万亿 Token，而该看这些 Token 替企业提了多少效率。 华为云CEO周跃峰 过...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "华为云避开Token价格战，选择差异化技术路线，意在构建长期竞争壁垒。"
    },
    {
     "title": "今年最值得升级的生产力工具，可能是一整张 AI 工位",
     "url": "https://www.ifanr.com/1667995?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-04",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "AI工位概念兴起，标志AI从工具升级为工作环境核心，将重塑办公效率与模式。"
    },
    {
     "title": "制糖工厂发布 AI 小电拼 Mirror：FluxAI 自由流让多口充电进入「功率复用」时代",
     "url": "https://www.ifanr.com/1667933?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-04",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "多口充电实现功率动态分配，提升充电效率与设备兼容性。"
    },
    {
     "title": "亚马逊高管：AI 已越过恐怖谷，普通观众难分辨",
     "url": "https://cn.technode.com/post/2026-06-03/amazon-ai-studio-chief-albert-cheng-uncanny-valley/",
     "source": "动点科技 - AI",
     "date": "2026-06-03",
     "summary": "亚马逊米高梅影业 AI 工作室负责人阿尔 […]",
     "is_new": false,
     "lang": "zh",
     "interpretation": "AI生成内容逼真度突破临界点，真假难辨引发信任危机。"
    },
    {
     "title": "制糖工厂发布 AI 小电拼 Mirror：琥珀屏、双支架与可拼拆设计，重构桌面能源设备",
     "url": "https://www.ifanr.com/1667822?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-02",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "模块化设计+智能屏显，桌面充电设备向美学与功能融合进化。"
    },
    {
     "title": "莫言硬核发声：AI 无法取代作家，它是靠偷师人类长大的",
     "url": "https://cn.technode.com/post/2026-06-02/moyan-on-ai/",
     "source": "动点科技 - AI",
     "date": "2026-06-02",
     "summary": "据新华社报道，中国作家莫言近日接受专访时 […]",
     "is_new": false,
     "lang": "zh",
     "interpretation": "闲鱼AI审核失误暴露技术短板，平台需平衡效率与准确性。"
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
   "stars": 42800,
   "forks": 7658,
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
   "stars": 26336,
   "forks": 5817,
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
   "stars": 19181,
   "forks": 1807,
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
   "stars": 18068,
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
   "stars": 15428,
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
   "stars": 11712,
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
   "stars": 11447,
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
   "stars": 10119,
   "forks": 1288,
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
   "stars": 8668,
   "forks": 969,
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
   "stars": 6797,
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
   "stars": 5676,
   "forks": 1398,
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
   "forks": 623,
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
   "stars": 4850,
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