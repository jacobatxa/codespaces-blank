const APP_DATA = {
 "today": "2026-05-26",
 "fetched_at": "2026-05-26T10:00:59",
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
   "count": 8,
   "color": "#f43f5e"
  },
  "动点科技 - AI": {
   "count": 3,
   "color": "#10b981"
  },
  "少数派 - AI": {
   "count": 1,
   "color": "#f97316"
  },
  "雷锋网 - AI": {
   "count": 12,
   "color": "#8b5cf6"
  },
  "36氪 - AI": {
   "count": 12,
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
   "count": 9
  },
  {
   "name": "开源与生态",
   "icon": "🌐",
   "color": "#2563eb",
   "count": 1
  },
  {
   "name": "AI商业与投融资",
   "icon": "💰",
   "color": "#ca8a04",
   "count": 12
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
   "count": 60
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
     "title": "OpenAI, Grupo Folha and Grupo UOL announce strategic content partnership",
     "url": "https://openai.com/index/grupo-folha-grupo-uol-partnership",
     "source": "OpenAI Blog",
     "date": "2026-05-25",
     "summary": "OpenAI partners with Grupo Folha and Grupo UOL to bring trusted Brazilian journalism to ChatGPT, expanding access to news with attribution and transparency.",
     "is_new": true,
     "lang": "en",
     "interpretation": "OpenAI与巴西媒体巨头合作，标志AI内容生态向传统新闻业渗透。"
    },
    {
     "title": "Towards Speed-of-Light Text Generation with Nemotron-Labs Diffusion Language Models",
     "url": "https://huggingface.co/blog/nvidia/nemotron-labs-diffusion",
     "source": "Hugging Face Blog",
     "date": "2026-05-23",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "英伟达新模型实现接近光速的文本生成，将颠覆AI推理效率。"
    },
    {
     "title": "Google’s new anything-to-anything AI model is wild",
     "url": "https://www.theverge.com/tech/936507/gemini-omni-hands-on-deepfake-ai-video",
     "source": "The Verge - AI",
     "date": "2026-05-23",
     "summary": "Last year I deepfaked my kid's stuffed animal to make it look like his plush deer was on vacation. It was an experiment to see if I could re-create the events depicted in a Gemini ad Google was running, and I never showed the videos of Buddy the deer on his adventures to my four-year-old. […]",
     "is_new": false,
     "lang": "en",
     "interpretation": "谷歌多模态AI模型可任意转换输入输出形式，展现通用人工智能潜力。"
    },
    {
     "title": "Your AI agents need a terminal, not just a vector database",
     "url": "https://venturebeat.com/orchestration/your-ai-agents-need-a-terminal-not-just-a-vector-database",
     "source": "VentureBeat - AI",
     "date": "2026-05-22",
     "summary": "When agentic workflows fail, developers often assume the problem lies in the underlying model’s reasoning abilities. In reality, the limited information provided by the retrieval interface is often the primary limiting factor.Researchers at multiple universities propose a technique called direct ...",
     "is_new": false,
     "lang": "en",
     "interpretation": "AI智能体需要终端操作能力，而非仅依赖向量数据库，这改变了AI应用架构的设计思路。"
    },
    {
     "title": "The Download: coding’s future, the ‘Steroid Olympics,’ and AI-driven science",
     "url": "https://www.technologyreview.com/2026/05/22/1137845/the-download-coding-future-steroid-olympics-ai-science/",
     "source": "MIT Technology Review - AI",
     "date": "2026-05-22",
     "summary": "This is today’s edition of The Download, our weekday newsletter that provides a daily dose of what’s going on in the world of technology. Anthropic’s Code with Claude showed off coding’s future—whether you like it or not At Anthropic’s developer event in London this week, Code with Claude, attend...",
     "is_new": false,
     "lang": "en",
     "interpretation": "编程未来、体育科技争议与AI驱动科学并列，反映技术正在重塑多个领域。"
    },
    {
     "title": "All of the updates from Elon Musk and Sam Altman’s battle over OpenAI",
     "url": "https://www.theverge.com/tech/917225/sam-altman-elon-musk-openai-lawsuit",
     "source": "The Verge - AI",
     "date": "2026-05-21",
     "summary": "Sam Altman and Elon Musk are facing off in a high-stakes trial that could alter the future of OpenAI and its most well-known product, ChatGPT. In 2024, Musk filed a lawsuit accusing OpenAI of abandoning its founding mission of developing AI to benefit humanity and shifting focus to boosting profi...",
     "is_new": false,
     "lang": "en",
     "interpretation": "马斯克与奥特曼的OpenAI争夺战持续升级，影响AI行业权力格局与开源生态。"
    },
    {
     "title": "AdventHealth advances whole-person care with OpenAI",
     "url": "https://openai.com/index/adventhealth",
     "source": "OpenAI Blog",
     "date": "2026-05-21",
     "summary": "AdventHealth is using ChatGPT for Healthcare to streamline workflows, reduce administrative burden, and return more time to patient care.",
     "is_new": false,
     "lang": "en",
     "interpretation": "AdventHealth用OpenAI推进全人医疗，标志AI在个性化健康管理领域取得实质性突破。"
    },
    {
     "title": "I Cloned Myself With Gemini’s AI Avatar Tool. The Result Was Unnervingly Me",
     "url": "https://www.wired.com/story/i-cloned-myself-with-geminis-ai-avatar-tool-the-result-was-unnervingly-me/",
     "source": "Wired - AI",
     "date": "2026-05-21",
     "summary": "I used the Gemini app to generate lifelike videos featuring a digital clone of myself. Google sees this as the future of creation. I’m still creeped out.",
     "is_new": false,
     "lang": "en",
     "interpretation": "Gemini的AI化身克隆出高度逼真的自我，引发对数字身份与隐私边界的深层担忧。"
    },
    {
     "title": "Datasette Agent",
     "url": "https://simonwillison.net/2026/May/21/datasette-agent/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-05-21",
     "summary": "We just announced the first release of Datasette Agent, a new extensible AI assistant for Datasette. I've been working on my LLM Python library for just over three years now, and Datasette Agent represents the moment that LLM and Datasette finally come together. I'm really excited about it! Datas...",
     "is_new": false,
     "lang": "en",
     "interpretation": "Datasette Agent作为新型数据工具，可能简化AI与结构化数据的交互方式。"
    },
    {
     "title": "Alibaba's proprietary Qwen3.7-Max can run for 35 hours autonomously and supports external harnesses like Anthropic's Claude Code",
     "url": "https://venturebeat.com/technology/alibabas-proprietary-qwen3-7-max-can-run-for-35-hours-autonomously-and-supports-external-harnesses-like-anthropics-claude-code",
     "source": "VentureBeat - AI",
     "date": "2026-05-21",
     "summary": "The AI industry has fully entered the \"agent era,\" a paradigm where AI models do far more than generate text — they now actively plan, execute, and course-correct complex tasks over days rather than seconds. Thus, it's perhaps unsurprising to see Chinese e-commerce giant Alibaba's famed Qwen Team...",
     "is_new": false,
     "lang": "en",
     "interpretation": "阿里大模型自主运行35小时，兼容外部工具，挑战AI Agent实用性。"
    },
    {
     "title": "Roundtables: Can AI Learn to Understand the World?",
     "url": "https://www.technologyreview.com/2026/05/21/1137756/roundtables-can-ai-learn-to-understand-the-world/",
     "source": "MIT Technology Review - AI",
     "date": "2026-05-21",
     "summary": "Listen to the session or watch below AI companies want to build systems that understand the external world and overcome the limitations of LLMs. Recent developments have brought world models to the forefront of the AI discussion. Watch a conversation with editor in chief Mat Honan, senior AI edit...",
     "is_new": false,
     "lang": "en",
     "interpretation": "探讨AI能否突破模式匹配，真正理解世界因果，关乎AGI本质。"
    },
    {
     "title": "Anthropic’s Code with Claude showed off coding’s future—whether you like it or not",
     "url": "https://www.technologyreview.com/2026/05/21/1137735/anthropics-code-with-claude-showed-off-codings-future-whether-you-like-it-or-not/",
     "source": "MIT Technology Review - AI",
     "date": "2026-05-21",
     "summary": "The vibes were strong at Code with Claude, Anthropic’s two-day event for software developers in London that kicked off on May 19, the same day as Google’s I/O in Palo Alto. (A coincidence, not a flex, Anthropic staffers assured me.) “Who here has shipped a pull request in the last week that was c...",
     "is_new": false,
     "lang": "en",
     "interpretation": "Anthropic展示的AI编程能力已不可逆，开发者需适应人机协作新常态。"
    },
    {
     "title": "An OpenAI model has disproved a central conjecture in discrete geometry",
     "url": "https://openai.com/index/model-disproves-discrete-geometry-conjecture",
     "source": "OpenAI Blog",
     "date": "2026-05-20",
     "summary": "An OpenAI model solved the 80-year-old unit distance problem, disproving a major conjecture in discrete geometry and marking a milestone in AI-driven mathematics.",
     "is_new": false,
     "lang": "en",
     "interpretation": "OpenAI模型首次自主推翻数学猜想，标志AI在科研中的范式突破。"
    },
    {
     "title": "How Ramp engineers accelerate code review with Codex",
     "url": "https://openai.com/index/ramp",
     "source": "OpenAI Blog",
     "date": "2026-05-20",
     "summary": "How Ramp engineers use Codex with GPT-5.5 to review code and ship improvements, allowing them to get substantive feedback in minutes instead of hours.",
     "is_new": false,
     "lang": "en",
     "interpretation": "Ramp用Codex加速代码审查，展示AI在工程协作中的实际降本增效。"
    },
    {
     "title": "100 things we announced at I/O 2026",
     "url": "https://blog.google/innovation-and-ai/technology/ai/google-io-2026-all-our-announcements/",
     "source": "Google AI Blog",
     "date": "2026-05-20",
     "summary": "This year at Google I/O 2026, we announced Gemini Omni, Google Antigravity, Universal Cart and so much more. Here are the highlights.",
     "is_new": false,
     "lang": "en",
     "interpretation": "I/O大会发布百项更新，展示谷歌技术生态全面升级方向。"
    },
    {
     "title": "OlmoEarth v1.1: A more efficient family of Earth observation models",
     "url": "https://huggingface.co/blog/allenai/olmoearth-v1-1",
     "source": "Hugging Face Blog",
     "date": "2026-05-19",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "新地球观测模型更高效，助力环境监测与灾害预警。"
    },
    {
     "title": "I/O 2026: Welcome to the agentic Gemini era",
     "url": "https://blog.google/innovation-and-ai/sundar-pichai-io-2026/",
     "source": "Google AI Blog",
     "date": "2026-05-19",
     "summary": "The latest from Google I/O: See how we’re helping you get more done with Gemini.",
     "is_new": false,
     "lang": "en",
     "interpretation": "谷歌宣布进入智能体Gemini时代，AI从工具转向自主行动。"
    },
    {
     "title": "PaddleOCR 3.5: Running OCR and Document Parsing Tasks with a Transformers Backend",
     "url": "https://huggingface.co/blog/PaddlePaddle/paddleocr-transformers",
     "source": "Hugging Face Blog",
     "date": "2026-05-18",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "集成Transformer后，OCR与文档解析任务效率与精度有望显著提升。"
    },
    {
     "title": "Building Blocks for Foundation Model Training and Inference on AWS",
     "url": "https://huggingface.co/blog/amazon/foundation-model-building-blocks",
     "source": "Hugging Face Blog",
     "date": "2026-05-11",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "AWS提供的基础设施模块，将加速企业级大模型训练与部署落地。"
    },
    {
     "title": "vLLM V0 to V1: Correctness Before Corrections in RL",
     "url": "https://huggingface.co/blog/ServiceNow-AI/correctness-before-corrections",
     "source": "Hugging Face Blog",
     "date": "2026-05-06",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "vLLM版本升级强调强化学习中先确保正确性再优化，提升模型可靠性。"
    },
    {
     "title": "刚刚，国产AI自己造了AI，全球首例！",
     "url": "https://www.qbitai.com/2026/05/425511.html",
     "source": "量子位",
     "date": "2026-05-26",
     "summary": "训练速度比英伟达Megatron快10%",
     "is_new": true,
     "lang": "zh",
     "interpretation": "国产AI实现自主设计AI系统，标志人工智能自我进化迈出关键一步。"
    },
    {
     "title": "编程权威榜单：千问3.7仅次于Claude，阿里全球第二",
     "url": "https://www.qbitai.com/2026/05/425150.html",
     "source": "量子位",
     "date": "2026-05-26",
     "summary": "跻身全球编程模型第一梯队",
     "is_new": true,
     "lang": "zh",
     "interpretation": "阿里AI编程能力跻身全球第二，证明中国大模型在垂直领域已具国际竞争力。"
    },
    {
     "title": "刚刚，国产Agent模型闯入全球第一梯队！限时免费",
     "url": "https://www.qbitai.com/2026/05/424851.html",
     "source": "量子位",
     "date": "2026-05-26",
     "summary": "深度适配OpenClaw、Claude Code、Hermes等",
     "is_new": true,
     "lang": "zh",
     "interpretation": "国产Agent模型突破技术壁垒，标志中国AI自主智能体进入全球第一阵营。"
    },
    {
     "title": "早报｜华为公布韬定律，Mate 90有望搭载更强芯片/宇树科技上会估值420亿/DeepSeek登顶全球调用榜",
     "url": "https://www.ifanr.com/1666931?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-05-26",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": true,
     "lang": "zh",
     "interpretation": "华为芯片新定律与Mate 90预期，显示国产半导体正加速自主迭代进程。"
    },
    {
     "title": "Code Arena放榜：阿里千问3.7编程能力超越GPT、Gemini，仅次于Claude系列",
     "url": "https://www.leiphone.com/category/industrynews/6QAaQ0MzlkBRqnwS.html",
     "source": "雷锋网 - AI",
     "date": "2026-05-26",
     "summary": "5月26日凌晨，全球权威三方编程榜单Code Arena放榜，阿里最新旗舰模型Qwen3.7-Max得分1541，超越GPT-5.5、Gemini-3.5-Flash、GLM-5.1、Kimi-K2.6等一众模型，仅次于Claude系列，在大模型厂商中排名全球第二，这也标志着在代码理解与生成领域，千问3.7成功跻身全球编程模型第一梯队。 图说：Code Arena榜单显示，凭借Qwen3.7-Max，阿里位列全球第二 编程能力是当下模型智能水平的核心指标，而Code Arena是由知名第三方大模型盲测平台LMArena推出的最具影响力的榜单之一。与传统的代码基准测试不同，Code Are...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "阿里千问3.7编程能力跃居全球第二，国产大模型在代码领域实现关键突破。"
    },
    {
     "title": "阿里云加速AI出海，发布全新海外AI产品官网Qwen Cloud",
     "url": "https://www.leiphone.com/category/industrynews/iIAnVv3C91pE50QK.html",
     "source": "雷锋网 - AI",
     "date": "2026-05-26",
     "summary": "5月26日，阿里云在新加坡面向海外市场发布全新AI产品官网Qwen Cloud、Agent产品MuleRun，以及智能体编程平台Qoder、通用桌面智能体 QoderWork的一系列更新，同步实现面向Agent的云基础设施升级。阿里云首席技术官、国际业务总裁李飞飞表示，海外市场对AI的需求持续旺盛，尤其是Agent的爆发让模型调用量和云资源消耗呈指数级增长。阿里云正在面向海外进行全栈升级，覆盖模型、入口、Agent产品和云基础设施，让全球开发者能够无缝接入阿里云的AI能力。 Qwen Cloud（qwencloud.com）是继国内千问云之后，阿里云面向海外推出的全新AI产品官网。它不是...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "阿里云以独立品牌加速AI出海，标志中国AI基础设施全球化竞争进入新阶段。"
    },
    {
     "title": "半价享顶级性能！天工 SkyClaw Agent 模型限时免费试用",
     "url": "<![CDATA[https://36kr.com/p/3825882266407815?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-05-26",
     "summary": "5月26日，昆仑万维旗下天工 AI 正式推出高性能 Agent 模型 SkyClaw-v1.0，并同步发布轻量化版本 SkyClaw-v1.0-lite，兼具顶尖性能与极致性价比。 SkyClaw-v1.0 支持百万token上下文，深度适配各类真实智能体工作场景，重点优化复杂工具调用、多轮任务执行、代码生成、文件编辑、交互式应用构建与研究型数据分析。模型经过大规模 mid-train、高质量合成任务 SFT 与端到端强化学习优化，可在 OpenClaw、Hermes、Nanobot 等主流 Agent 环境中运行，同时适配Claude Code、Codex 等代码 Agent 框架，通...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "天宫模型限免降低顶级AI使用门槛，或引发中小企业AI应用普及潮。"
    },
    {
     "title": "求购Deepseek老股份额；求购长鑫存储老股份额｜资情留言板第183期",
     "url": "<![CDATA[https://36kr.com/p/3825834410333062?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-05-26",
     "summary": "资产交易市场，信息瞬息万变，消息真假难辨，即使买卖双方花费大量的时间、精力，推动成交往往困难重重。为了能够帮助买卖双方更快速链接市场信息和潜在交易对手，避免不必要的投入与浪费，我们特地打造了这样一档栏目。 本文是这个栏目的第183期。如果你对本文提到的相关的交易线索感兴趣，希望接触这些潜在的交易对手，或者如果你手中直接握有希望交易的资金或者资产，欢迎与我们联系。（邮箱：zcjy@36kr.com） 一、本月新增 1、求购Deepseek老股份额（预期估值面议） 交易价格：预期估值面议 资产规模：约5000万人民币 交易方式：直接老股交易，可以接受锚定份额和进入结构 联系方式：zcjy@3...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "老股求购信息反映市场对AI与芯片领域头部企业的高估值预期与投资热情。"
    },
    {
     "title": "小米集团：第一季度营收991.4亿元",
     "url": "<![CDATA[https://36kr.com/newsflashes/3825920317035140?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-05-26",
     "summary": "36氪获悉，小米集团发布2026年第一季度财报。财报显示，小米集团一季度实现营收991.4亿元，经调整净利润为61亿元。期内小米研发投入90亿元，同比增长33.4%。小米表示，今年AI领域至少投入160亿元，未来三年投入将超600亿元。在基座模型研发方面，基座大模型Xiaomi MiMo-V2.5-Pro Artificial Analysis智能指数与Agent指数均位列全球开源大模型第一，Xiaomi MiMo大模型助力Hermes Agent登顶全球调用量榜首，成为第一贡献模型。",
     "is_new": true,
     "lang": "zh",
     "interpretation": "小米营收近千亿，显示其核心业务增长稳健，市场竞争力依然强劲。"
    },
    {
     "title": "DeepSeek 要用蜜雪冰城的打法，做中国版 Claude Code",
     "url": "https://www.ifanr.com/1666548?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-05-25",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": true,
     "lang": "zh",
     "interpretation": "DeepSeek借鉴低价策略，意图降低AI编程工具门槛，抢占开发者市场。"
    },
    {
     "title": "将 600 亿参数大模型装进手机的瓶颈，终于被中国 AI 公司突破了",
     "url": "https://www.ifanr.com/1666847?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-05-25",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": true,
     "lang": "zh",
     "interpretation": "中国公司突破端侧大模型瓶颈，手机运行600亿参数模型成为可能。"
    },
    {
     "title": "一台手掌大小、300克的AI主机，为什么能跑122B模型？",
     "url": "https://www.leiphone.com/category/industrynews/OKDJKKDkUhQYDaee.html",
     "source": "雷锋网 - AI",
     "date": "2026-05-25",
     "summary": "把一台能运行122B大模型的AI主机塞进口袋，需要付出什么代价？过去大半年，端侧AI硬件的逻辑正在发生变化。两个月前，国内掀起一场现象级的本地部署Agent热潮，大量AI爱好者开始“养虾”，让原本偏小众的Mac mini意外出圈，一度出现溢价和缺货。在更硬核的开发者圈子里，三四万元的英伟达DGX Spark同样热度不低，因为它已经能够在本地运行千亿参数模型。Mac mini和DGX Spark同时走红，背后其实指向的是同一个趋势：Agent正在迅速抬高端侧AI硬件的门槛。此前，40TOPS级别的AI PC，仅能完成对话、生成等轻量任务。但进入Agent时代后，开发者开始追求更大的模型、更...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "手掌大小AI主机跑122B模型，边缘计算算力密度实现重大突破。"
    },
    {
     "title": "港中文李鸿升团队论文 MindVLA-U1：VLA 不再输给 VA，语言真正进入自动驾驶决策",
     "url": "https://www.leiphone.com/category/ai/aBSRTXyAOqvn84ow.html",
     "source": "雷锋网 - AI",
     "date": "2026-05-25",
     "summary": "MindVLA-U1：统一视觉语言动作架构，实现理解后规划。 作者丨郑佳美 编辑丨马晓宁 在自动驾驶进入大模型时代之后，行业正在从传统的“感知、预测、规划、控制”模块化流水线，逐步转向端到端智能系统。过去，VA 模型能够直接从视觉输入生成驾驶轨迹，在规划精度和实时性上表现突出，但它们更多依赖隐式视觉特征，很难清楚解释“为什么这样开”，也难以处理那些需要语义理解和常识推理的长尾场景。比如车辆行驶在狭窄居民区道路上，两侧停满车辆，前方可能有行人突然从车缝中出现；又比如在无保护左转路口，系统不仅要判断对向来车速度，还要理解让行关系和潜在风险；再比如施工区域、临停车辆、单纯依靠视觉到轨迹的映射往...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "语言模型首次在自动驾驶决策中超越纯视觉方案，是技术路线的关键转折。"
    },
    {
     "title": "小鹏副总裁：小鹏可能是唯一欢迎特斯拉FSD入华的车企；有员工喊出「学三星罢工」！曝台积电Q1净利大增58%反降薪；DeepSeek一月内宕机三次",
     "url": "https://www.leiphone.com/category/zaobao/rI3FI7Vjq0Fmv1XA.html",
     "source": "雷锋网 - AI",
     "date": "2026-05-25",
     "summary": "要闻提示1.小鹏副总裁：小鹏可能是唯一欢迎特斯拉FSD入华的车企2.揭秘长安汽车内幕交易案：5名员工利用内幕消息获利400余万，被罚1669万3.腾讯多个事业群试点取消组长，调整人员架构4.台积电Q1净利大增58%反而被曝降薪？有员工喊出“学三星罢工”5.阿里、京东、美团三方竞购朴朴超市，估值20-50亿美元6.冲上热搜！DeepSeek又崩了：一月内宕机了三次7.古尔曼：苹果 watchOS 27 更新将主要关注稳定性、较小优化，而不是引入重大新功能8.接连卷入芯片走私案！黄仁勋隔空喊话美超微：管好自己的公司今日头条小鹏副总裁：小鹏可能是唯一欢迎特斯拉FSD入华的车企5月24日消息，日...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "小鹏开放态度与台积电降薪、DeepSeek宕机形成对比，折射行业分化与内部矛盾。"
    },
    {
     "title": "大模型狂飙的尽头，这家国产 GPU 厂商要把算力放在客厅",
     "url": "https://www.ifanr.com/1666549?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-05-21",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "国产GPU厂商转向边缘计算，或改变AI算力市场格局。"
    },
    {
     "title": "早报｜448元，iPhone绝版配件回归/Meta用员工键鼠数据训练AI，扎克伯格：外包不够聪明/GoPro考虑出售或合并",
     "url": "https://www.ifanr.com/1666545?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-05-21",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "苹果高价复活旧配件、Meta数据争议与GoPro困境折射科技行业分化。"
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
     "title": "What ClickUp’s mass layoff tells us about the future of work",
     "url": "https://techcrunch.com/2026/05/25/what-clickups-mass-layoff-tells-us-about-the-future-of-work/",
     "source": "TechCrunch - AI",
     "date": "2026-05-25",
     "summary": "The nine-year-old startup is replacing hundreds of employees with thousands of AI agents.",
     "is_new": true,
     "lang": "en",
     "interpretation": "ClickUp裁员折射企业用AI替代人力趋势，工作模式正被重塑。"
    },
    {
     "title": "Harness, Scaffold, and the AI Agent Terms Worth Getting Right",
     "url": "https://huggingface.co/blog/agent-glossary",
     "source": "Hugging Face Blog",
     "date": "2026-05-25",
     "summary": "",
     "is_new": true,
     "lang": "en",
     "interpretation": "厘清AI代理术语定义，避免概念混淆阻碍技术落地与行业协作。"
    },
    {
     "title": "datasette-agent 0.1a4",
     "url": "https://simonwillison.net/2026/May/24/datasette-agent/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-05-24",
     "summary": "Release: datasette-agent 0.1a4 Taking advantage of the new makeJumpSections() JavaScript plugin hook added in Datasette 1.0a30, datasette-agent now presents this \"Start a new agent chat\" interface as part of the Jump to menu, any time you hit /: You can try this out by signing into agent.datasett...",
     "is_new": false,
     "lang": "en",
     "interpretation": "Datasette-agent更新，增强自动化数据管理功能的早期版本迭代。"
    },
    {
     "title": "AI agents are quietly generating chaos engineering failures enterprises don’t track yet",
     "url": "https://venturebeat.com/orchestration/ai-agents-are-quietly-generating-chaos-engineering-failures-enterprises-dont-track-yet",
     "source": "VentureBeat - AI",
     "date": "2026-05-24",
     "summary": "There is a category of production incident that engineering teams are not tracking yet — because it doesn't fit any existing postmortem template. The agent initiated an action. The action was technically correct given the agent's context. The context was incomplete. The infrastructure cascaded. A...",
     "is_new": false,
     "lang": "en",
     "interpretation": "AI代理悄然引发混沌工程故障，企业尚未建立追踪机制风险暗藏。"
    },
    {
     "title": "OpenAI named a Leader in enterprise coding agents by Gartner",
     "url": "https://openai.com/index/gartner-2026-agentic-coding-leader",
     "source": "OpenAI Blog",
     "date": "2026-05-22",
     "summary": "OpenAI is named a leader in the 2026 Gartner Magic Quadrant for Enterprise AI Coding Agents, with Codex recognized for innovation and enterprise-scale deployment.",
     "is_new": false,
     "lang": "en",
     "interpretation": "Gartner认可OpenAI在编码领域的领先地位，加速企业AI开发工具竞争。"
    },
    {
     "title": "D&B's database of 642 million businesses was built for humans, not AI agents. So they rebuilt it.",
     "url": "https://venturebeat.com/data/d-and-bs-database-of-642-million-businesses-was-built-for-humans-not-ai-agents-so-they-rebuilt-it",
     "source": "VentureBeat - AI",
     "date": "2026-05-22",
     "summary": "Dun & Bradstreet has spent over 180 years building a comprehensive commercial database. Its Commercial Graph, covering 642 million businesses and their relationships, corporate hierarchies and risk profiles, was designed for people. Credit analysts, risk managers and sales professionals who could...",
     "is_new": false,
     "lang": "en",
     "interpretation": "邓白氏为AI智能体重构商业数据库，说明传统数据格式已无法满足AI的自动化需求。"
    },
    {
     "title": "datasette-agent-sprites 0.1a0",
     "url": "https://simonwillison.net/2026/May/21/datasette-agent-sprites/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-05-21",
     "summary": "Release: datasette-agent-sprites 0.1a0 A Datasette Agent plugin for running commands in a Fly Sprites sandbox. Tags: sandboxing, datasette, fly, datasette-agent",
     "is_new": false,
     "lang": "en",
     "interpretation": "新工具让开发者能快速为数据添加可视化精灵，降低交互门槛。"
    },
    {
     "title": "A 0.12% parameter add-on gives AI agents the working memory RAG can't",
     "url": "https://venturebeat.com/orchestration/a-0-12-parameter-add-on-gives-ai-agents-the-working-memory-rag-cant",
     "source": "VentureBeat - AI",
     "date": "2026-05-21",
     "summary": "AI agents forget. Every time a coding assistant loses track of a debugging thread, or a data analysis agent re-ingests the same context it already processed, the team pays in latency, token costs, and brittle workflows. The fix most teams reach for — expanding the context window or adding more RA...",
     "is_new": false,
     "lang": "en",
     "interpretation": "极少量参数增强可补足RAG缺失的工作记忆，提升AI任务连贯性。"
    },
    {
     "title": "The Open Agent Leaderboard",
     "url": "https://huggingface.co/blog/ibm-research/open-agent-leaderboard",
     "source": "Hugging Face Blog",
     "date": "2026-05-18",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "公开智能体排行榜将推动AI自主决策能力的标准化评估与竞争。"
    },
    {
     "title": "摩尔线程描绘了更大的蓝图：从全功能GPU到Agent全场景落地",
     "url": "https://www.leiphone.com/category/chips/HjyAOXhxHNvIRMKN.html",
     "source": "雷锋网 - AI",
     "date": "2026-05-26",
     "summary": "算力荒的焦虑已无需渲染。 5月的一个北京夜晚，创始人、董事长兼首席执行官张建中在摩尔线程2026年产品发布会现场透露一组数据：当前国内每天仅某一款应用的Token消耗量就已突破140万亿——而此前的预测，是整个市场总消耗量在30万亿到180万亿之间。 为抗住这源源不断的算力需求，一个可靠的人工智能基础设施必不可少。但算力只是故事的一半。“场景最后还是要通过笔记本、手机或者其他终端来实现。”一位投资人告诉雷峰网。 从云端到终端，从算力到生态——这场发布会上，摩尔线程展示了一张完整的版图。 从“小麦”到具身智能，摩尔线程补齐物理AI版图试问token消耗的第一来源，自然是当下备受关注的AI ...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "摩尔线程从硬件向AI应用场景延伸，展现国产GPU厂商的生态野心。"
    },
    {
     "title": "营销内容从“用AI”到“管AI”的10倍提效| 2026AI Partner·北京亦庄AI+产业大会",
     "url": "<![CDATA[https://36kr.com/p/3824179485233541?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-05-26",
     "summary": "从2022年首创数字人直播带货，到如今服务LVMH、欧莱雅、宝洁等全球集团，集思科技在三年间积累了超60亿GMV的实战成绩。 2023年被称作Agent元年，但2026年才是营销内容Agent真正落地应用的节点，而品牌最核心的资产不是视觉，是上下文——把创始人对品牌的理解沉淀为AI可调用的智力资产。 以下为演讲内容，经36氪整理编辑： 李世尊丨集思科技CEO 大家好，我是集思科技李世尊。简单介绍一下集思科技，以及我们在营销领域做的事——通过从用AI到管AI，实现十倍提效。 集思科技一直专注于AI销售，可以理解为做AI Sales，用Agent的方式帮助B端客户，尤其是品牌零售业的客户去面...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "营销从“用AI”转向“管AI”，预示企业AI应用进入系统化、规模化提效阶段。"
    },
    {
     "title": "华为发布AIDC数据基础设施全栈方案，覆盖数据湖至智能体框架五大层级",
     "url": "https://www.leiphone.com/category/CorporateServices/hZtu4I7d1wnDwKWt.html",
     "source": "雷锋网 - AI",
     "date": "2026-05-25",
     "summary": "当地时间5月21日，以“数据觉醒，存力跃迁”为主题的2026华为创新数据基础设施论坛在巴黎举行。会上，华为正式发布华为AIDC 数据基础设施全栈方案，覆盖数据湖、知识与记忆平台、模型工程与资源调度、智能体框架、数据韧性平台五大核心层级，旨在助力企业加速推进 AI 数据中心建设、实现 AI 规模化落地。华为数据存储产品线总裁袁远将此次方案发布置于一个清晰的时代判断之下：\"当下，AI 正深刻改变企业运营模式。Agent 加速普及，成为新型数字生产力主体，逐步成长为企业的常态化'数字员工'；同时，AI 应用持续深化，企业 Token 消耗量迎来爆发式增长。\"他引用的数字印证了这一判断：目前全球...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "华为从数据存储到智能应用全链路打通，意在降低企业AI部署门槛。"
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
     "title": "These Robots Are Making Meals for a Nonprofit in San Francisco’s Tenderloin",
     "url": "https://www.wired.com/story/these-robots-are-making-meals-for-a-nonprofit-in-san-franciscos-tenderloin/",
     "source": "Wired - AI",
     "date": "2026-05-24",
     "summary": "A nonprofit in the city’s most troubled district has turned to robotic meal prep tech to make up for a dearth of human volunteers.",
     "is_new": false,
     "lang": "en",
     "interpretation": "旧金山非营利组织用机器人做饭，探索科技解决社区饥饿问题。"
    },
    {
     "title": "Catch up on the Dialogues stage at Google I/O 2026.",
     "url": "https://blog.google/innovation-and-ai/technology/ai/io-2026-dialogues-recap/",
     "source": "Google AI Blog",
     "date": "2026-05-22",
     "summary": "A recap of the 2026 I/O Dialogues, where leaders discuss the future of AI, quantum computing, robotics and creativity.",
     "is_new": false,
     "lang": "en",
     "interpretation": "谷歌I/O 2026对话环节值得关注，可能揭示AI行业未来关键发展方向。"
    },
    {
     "title": "小马智行：第一季度营收同比增长145%，Robotaxi收入创新高",
     "url": "<![CDATA[https://36kr.com/newsflashes/3825890026984072?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-05-26",
     "summary": "36氪获悉，5月26日，小马智行发布2026年第一季度财报。财报显示，一季度总营收2.36亿元，同比增长145%；毛利润3836万元，同比增长140.1%。Robotaxi业务创下单季收入新高达5912万元，同比增长395.4%，环比增长28.7%；乘客车费收入同比增长456.5%。截至2026年5月，Robotaxi车队规模达1700辆以上。基于一季度的强劲表现，公司上调2026年Robotaxi业务目标：预计全年Robotaxi收入达到2025年水平的3.5倍以上，车队规模超3500辆，覆盖国内外20余个城市。",
     "is_new": true,
     "lang": "zh",
     "interpretation": "小马智行营收猛增，Robotaxi商业化提速，自动驾驶盈利模式初现曙光。"
    },
    {
     "title": "无人车遇水则瘫？Waymo大规模召回，叫停多城Robotaxi服务",
     "url": "https://www.qbitai.com/2026/05/424610.html",
     "source": "量子位",
     "date": "2026-05-25",
     "summary": "特斯拉学会“躲交警”了",
     "is_new": true,
     "lang": "zh",
     "interpretation": "Waymo因雨天故障大规模召回，暴露自动驾驶在复杂天气下的技术短板。"
    },
    {
     "title": "新加坡工业机器人公司Doozy Robotics获得种子轮融资",
     "url": "https://cn.technode.com/post/2026-05-22/doozy-robotics-seed-funding-industrial-robots/",
     "source": "动点科技 - AI",
     "date": "2026-05-22",
     "summary": "具体金额未披露",
     "is_new": false,
     "lang": "zh",
     "interpretation": "新加坡工业机器人初创获资本认可，标志东南亚智能制造赛道正吸引全球投资。"
    },
    {
     "title": "独家丨前美团外卖技术负责人入局餐饮具身模型，「元节智能」获千万级种子轮融资",
     "url": "https://www.leiphone.com/category/robot/c3WgJgUydmWpEoWz.html",
     "source": "雷锋网 - AI",
     "date": "2026-05-22",
     "summary": "雷峰网独家获悉，具身智能初创公司「元节智能（AtomBite.AI）」已于近期完成千万级种子轮融资。本轮由英诺科创基金领投，水木清华校友种子基金、知名投资人个人跟投。据悉，本轮融资将主要用于餐饮场景具身世界模型研发、核心产品打磨及落地。今年3月底元节智能才在苏州注册成立，成立不到两个月即完成首轮融资，同时已获得了国内外多家头部公司产品合作部署意向。据了解，企业核心团队汇聚了来自清华、中科大、美团、地平线等顶尖高校与科技公司的研发负责人及精锐人才，团队背景实力雄厚。 01 清华博士+美团产研班底 元节智能创始人兼CEO王栋博士师从中国人工智能泰斗、清华大学张钹院士，深耕人工智能领域十余年，...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "前美团外卖技术负责人创业聚焦餐饮具身智能，显示AI与机器人结合正进入垂直场景。"
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
     "title": "Quoting Armin Ronacher",
     "url": "https://simonwillison.net/2026/May/24/armin-ronacher/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-05-24",
     "summary": "The most frustrating failure mode right now is that people submit issues that are not in their own voice. They contain an observed problem somewhere, but it has been thrown into a clanker and the clanker reworded it and made a huge mess of it. Typically, it was prompted so badly that the conclusi...",
     "is_new": false,
     "lang": "en",
     "interpretation": "引用Armin Ronacher观点，反映技术社区对编程工具发展的关键思考。"
    },
    {
     "title": "AI is being used to resurrect the voices of dead pilots",
     "url": "https://techcrunch.com/2026/05/22/ai-is-being-used-to-resurrect-the-voices-of-dead-pilots/",
     "source": "TechCrunch - AI",
     "date": "2026-05-22",
     "summary": "People used AI on a spectrogram image of cockpit recordings to reconstruct them, forcing the NTSB to temporarily block access to its docket system.",
     "is_new": false,
     "lang": "en",
     "interpretation": "AI复活逝去飞行员声音，引发科技伦理与情感记忆的深层讨论。"
    },
    {
     "title": "US scrambles to stop Internet users re-creating dead pilots’ voices",
     "url": "https://arstechnica.com/ai/2026/05/ai-users-re-create-dead-pilots-voices-from-crash-investigation-docs/",
     "source": "ArsTechnica - AI",
     "date": "2026-05-22",
     "summary": "Workaround flouts law that bans NTSB disclosures of cockpit audio recordings.",
     "is_new": false,
     "lang": "en",
     "interpretation": "美国紧急阻止AI模仿阵亡飞行员声音，揭示深度伪造技术对伦理与安全的挑战。"
    },
    {
     "title": "New ways to create and get things done in Google Workspace",
     "url": "https://blog.google/products-and-platforms/products/workspace/workspace-updates/",
     "source": "Google AI Blog",
     "date": "2026-05-19",
     "summary": "Announcing new voice capabilities in Gmail, Docs and Keep, a new design tool called Google Pics and updates to AI Inbox.",
     "is_new": false,
     "lang": "en",
     "interpretation": "Workspace新功能简化创作流程，提升办公自动化水平。"
    },
    {
     "title": "京东JoyInside戴文军：AI的终极形态不是聊天，是融入你家每一件物品丨AIGC2026",
     "url": "https://www.qbitai.com/2026/05/424794.html",
     "source": "量子位",
     "date": "2026-05-25",
     "summary": "硬件不该让人适应，它应该主动适应你",
     "is_new": true,
     "lang": "zh",
     "interpretation": "京东高管预判AI将深度嵌入实体产品，智能家居或迎来新一轮革命。"
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
     "title": "It’s time to address the looming crisis in entry-level work.",
     "url": "https://www.technologyreview.com/2026/05/26/1137865/its-time-to-address-the-looming-crisis-in-entry-level-work/",
     "source": "MIT Technology Review - AI",
     "date": "2026-05-26",
     "summary": "Artificial intelligence has not so far produced a clean story of mass unemployment. Aggregate employment in developed countries remains broadly stable, and recent assessments have found limited evidence that AI has shifted the headline numbers. But a troubling change may be hiding beneath the sur...",
     "is_new": true,
     "lang": "en",
     "interpretation": "初级岗位危机迫在眉睫，需重新设计职业培训与教育体系应对。"
    },
    {
     "title": "Pope Leo calls for being ‘profoundly human’ in the age of AI",
     "url": "https://www.theverge.com/news/936945/pope-leo-letter-encyclical-ai-anthropic-labor-warfare",
     "source": "The Verge - AI",
     "date": "2026-05-25",
     "summary": "Pope Leo XIV warned of the risks of AI and unconstrained technological power in his first major papal document released on Monday. Magnifica Humanitas is the pope's manifesto on \"safeguarding the human person in the time of artificial intelligence,\" in which he discusses the dangers of AI-powered...",
     "is_new": true,
     "lang": "en",
     "interpretation": "教皇强调AI发展必须坚守人性本质，技术不能替代人文关怀。"
    },
    {
     "title": "Notes on Pope Leo XIV's encyclical on AI",
     "url": "https://simonwillison.net/2026/May/25/encyclical-on-ai/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-05-25",
     "summary": "Dropped this morning by the Vatican: Magnifica Humanitas of His Holiness Pope Leo XIV on Safeguarding the Human Person in the Time of Artificial Intelligence. This is a very interesting document. It's some of the clearest writing I've seen on the ethics of integrating AI into modern society. Pope...",
     "is_new": true,
     "lang": "en",
     "interpretation": "教皇通谕为AI伦理定调，宗教权威介入科技治理引发全球关注。"
    },
    {
     "title": "Google I/O showed how the path for AI-driven science is shifting",
     "url": "https://www.technologyreview.com/2026/05/22/1137813/google-i-o-showed-how-the-path-for-ai-science-is-shifting/",
     "source": "MIT Technology Review - AI",
     "date": "2026-05-22",
     "summary": "During Tuesday’s Google I/O keynote, Demis Hassabis, the CEO of Google DeepMind, proclaimed that we are currently “standing in the foothills of the singularity.” It was a striking statement—the singularity is the theoretical future moment when AI rapidly exceeds human intelligence and dramaticall...",
     "is_new": false,
     "lang": "en",
     "interpretation": "谷歌I/O显示AI驱动科学的路径正在转变，可能加速科研范式革新。"
    },
    {
     "title": "华为提出「韬定律」，寻找国产芯片自己的进化方向",
     "url": "https://www.ifanr.com/1666860?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-05-26",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": true,
     "lang": "zh",
     "interpretation": "华为为国产芯片探索差异化发展路径，试图突破西方技术封锁的桎梏。"
    },
    {
     "title": "华东大厂下单万台B300；AI芯片公司以旧换新计划遇冷；芯片公司上市，老股东被锁定三年；大厂仅要求保证金与竞业协议｜算力情报局Vol.11",
     "url": "https://www.leiphone.com/category/chips/AX8LY6YCsD1mNJQA.html",
     "source": "雷锋网 - AI",
     "date": "2026-05-26",
     "summary": "算力军备竞赛再升级：B300价格突破500万，华东大厂或下单超万台伴随着OpenClaw的热潮，国内Token调用数量大涨，算力需求再次被点燃。此前由买方主导的算力市场，正在逐渐向卖方市场倾斜。据多位业内人士透露，近期市场对高性能GPU的需求持续走高，尤其是B300等型号供不应求。一家华东头部互联网公司正在推进大规模采购计划，下单规模或超过1万台。价格也在快速抬升。春节后B300市场报价仍在440万元左右，近期已突破500万元。部分供应商开始采用现场竞价的方式分配货源，囤货待涨也成为常见操作。近期算力市场价格变更频繁，背后的原因欢迎添加微信EATINGNTAE进一步探讨。巨额投入成空转，...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "大厂采购与资本锁定期矛盾，折射AI芯片行业供需失衡与投资风险。"
    },
    {
     "title": "工信部：推进控制芯片、计算芯片、车内通信芯片、安全芯片、功率芯片等标准审查报批",
     "url": "<![CDATA[https://36kr.com/newsflashes/3825934573261704?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-05-26",
     "summary": "36氪获悉，工信部发布2026年汽车标准化工作要点。其中包括，加速汽车芯片标准发布实施。贯彻落实汽车芯片标准体系，提升汽车芯片环境可靠性、电磁兼容、功能安全和信息安全水平，推进汽车芯片应力试验要求、信息安全技术规范等标准审查报批。系统性推进汽车芯片产品与技术应用标准研究，推动电源管理芯片等标准发布，推进控制芯片、计算芯片、车内通信芯片、安全芯片、功率芯片等标准审查报批，加快传感芯片、车外通信芯片等标准研制，开展汽车存储芯片、驱动芯片等标准预研及汽车芯片匹配试验方法标准研究。",
     "is_new": true,
     "lang": "zh",
     "interpretation": "工信部推动车用芯片标准审查，加速国产芯片在汽车产业链的规范化应用。"
    },
    {
     "title": "工信部：重点围绕驾驶自动化、汽车数据、“车路云一体化”等领域加速标准研制与迭代",
     "url": "<![CDATA[https://36kr.com/newsflashes/3825934057607815?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-05-26",
     "summary": "36氪获悉，工信部发布2026年汽车标准化工作要点。其中包括，促进新兴领域创新发展。聚焦智能网联汽车、汽车电子、汽车芯片等领域，开展标准引领行动，鼓励创新成果转化。重点围绕驾驶自动化、网联功能与应用、信息安全与数据安全、资源管理与信息服务、汽车软件、汽车数据、“车路云一体化”等领域加速标准研制与迭代。高效开展汽车电子、汽车芯片等关键系统部件标准制修订。",
     "is_new": true,
     "lang": "zh",
     "interpretation": "工信部聚焦车路云一体化标准研制，为智能网联汽车规模化落地铺路。"
    },
    {
     "title": "把18A塞进主流轻薄本，英特尔「WildCat Lake」想让人人用上AI PC",
     "url": "https://www.leiphone.com/category/chips/gAjsNSvozgcw55bE.html",
     "source": "雷锋网 - AI",
     "date": "2026-05-25",
     "summary": "AI浪潮正在加速席卷和重塑PC产业格局。自2023年英特尔为AI PC定调、首次集成 “CPU+GPU+NPU” XPU架构以来，AI PC的边界被不断扩展。以这一赛道的开创者英特尔为例，产品迭代路径证明了“AI PC是PC演进大方向”的主流观点——第一代完成技术验证，第二代刷新业界对x86能效的认知，第三代则在制程、架构、AI引擎上实现系统级重构。 与此同时，政策与研究层面也在为端侧AI指明方向。在本月初召开的“人工智能终端智能化分级”国家标准宣贯会上，有专家指出，未来AI产品的技术体系将走向“端云协同主导、系统性融合”，高频低耗的AI任务将加速向端侧算力转移。 市场数据也印证了这一趋...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "英特尔将18A工艺用于轻薄本，推动AI PC普及，降低个人使用门槛。"
    }
   ]
  },
  {
   "name": "开源与生态",
   "icon": "🌐",
   "color": "#2563eb",
   "count": 1,
   "cards": [
    {
     "title": "北纬诺贝巅峰对话｜乔·韦曼走进中关村两院，深度解读AI时代企业增长新逻辑",
     "url": "https://www.leiphone.com/category/industrynews/FmZzakD3JfKEtvNT.html",
     "source": "雷锋网 - AI",
     "date": "2026-05-25",
     "summary": "雷峰网讯 AI时代企业增长新逻辑2026年5月22日，新一期北纬诺贝巅峰对话在北京中关村学院 x 中关村人工智能研究院（简称“中关村两院”）隆重举行，本次活动由中关村两院及北纬港湾共同举办。全球知名AI战略专家、美国未来产业研究院创始人乔·韦曼（Joe Weinman）受邀出席，并发表主旨演讲——作为长期活跃于全球科技与产业前沿的思想者，乔·韦曼凭借横跨技术研究与商业战略的系统性洞察，持续为AI驱动下的产业变革提供前瞻性判断与实践方法论。本次活动汇聚了中关村两院师生、直博生夏令营营员及北纬社区科创企业负责人等各界代表，围绕AI时代的产业变革、商业增长与人才培养等核心议题展开深入交流。跨越...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "乔·韦曼在中关村解读AI增长逻辑，为企业数字化转型提供战略新视角。"
    }
   ]
  },
  {
   "name": "AI商业与投融资",
   "icon": "💰",
   "color": "#ca8a04",
   "count": 12,
   "cards": [
    {
     "title": "Quoting Corey Quinn",
     "url": "https://simonwillison.net/2026/May/26/corey-quinn/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-05-26",
     "summary": "I cannot believe I'm saying this, but getting the literal Pope to canonize your product's specific technical limitations as a spiritual treatise is the single greatest act of vendor lobbying I have ever seen. — Corey Quinn, on Anthropic co-founder Christopher Olah's influence on Magnifica Humanit...",
     "is_new": true,
     "lang": "en",
     "interpretation": "科里·奎因的犀利观点值得关注，或揭示行业潜规则与认知偏差。"
    },
    {
     "title": "Startup Battlefield 200 applications close in days: Apply before May 27",
     "url": "https://techcrunch.com/2026/05/25/startup-battlefield-200-applications-close-in-days-apply-before-may-27/",
     "source": "TechCrunch - AI",
     "date": "2026-05-25",
     "summary": "The deadline to apply or nominate for Startup Battlefield 200 is May 27. This is your shot at VC access, global visibility, TechCrunch coverage, and $100,000. Apply now.",
     "is_new": true,
     "lang": "en",
     "interpretation": "创业大赛申请截止在即，初创企业争夺曝光与投资的关键窗口。"
    },
    {
     "title": "How VCs and founders use inflated ‘ARR’ to crown AI startups",
     "url": "https://techcrunch.com/2026/05/22/how-vcs-and-founders-use-inflated-arr-to-kingmake-ai-startups/",
     "source": "TechCrunch - AI",
     "date": "2026-05-22",
     "summary": "Some AI startups are stretching traditional revenue metrics when talking about progress publicly. And their investors are fully aware.",
     "is_new": false,
     "lang": "en",
     "interpretation": "风投与创始人虚报ARR吹捧AI初创，揭露行业泡沫化风险。"
    },
    {
     "title": "Elon Musk can’t hear you over the sound of his $1.75 trillion IPO",
     "url": "https://techcrunch.com/podcast/elon-musk-cant-hear-you-over-the-sound-of-his-1-75-trillion-ipo/",
     "source": "TechCrunch - AI",
     "date": "2026-05-22",
     "summary": "The SpaceX S-1 is finally here, and the story it tells goes way further than rockets. The filing runs to 36 pages of risk factors alone, and the numbers inside match the ambition: a $28 trillion total addressable market, a pay package tied to establishing a Mars colony, and a valuation target tha...",
     "is_new": false,
     "lang": "en",
     "interpretation": "马斯克旗下公司估值惊人，反映资本市场对商业航天和AI的狂热追捧。"
    },
    {
     "title": "Can OpenAI’s ‘Master of Disaster’ Fix AI’s Reputation Crisis?",
     "url": "https://www.wired.com/story/openai-chris-lehane-global-affairs-pr/",
     "source": "Wired - AI",
     "date": "2026-05-22",
     "summary": "Global affairs chief Chris Lehane wants to tone down the debate over AI’s societal impacts—and get states to pass laws that won’t derail OpenAI’s meteoric rise.",
     "is_new": false,
     "lang": "en",
     "interpretation": "任命“危机管理专家”能否扭转AI负面形象，考验公关与实质改进的平衡。"
    },
    {
     "title": "FTC to Require Cox Media Group, Two Other Firms to Pay Nearly $1 Million to Settle Charges They Deceived Customers About “Active Listening” AI-Powered Marketing Service",
     "url": "https://simonwillison.net/2026/May/22/ftc-active-listening/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-05-22",
     "summary": "FTC to Require Cox Media Group, Two Other Firms to Pay Nearly $1 Million to Settle Charges They Deceived Customers About “Active Listening” AI-Powered Marketing Service Back in 2024 Cox Media Group were caught trying to sell advertisers packages based on \"active listening\", with this deck which c...",
     "is_new": false,
     "lang": "en",
     "interpretation": "FTC对“AI监听”营销欺诈开罚单，警示技术滥用面临监管重拳。"
    },
    {
     "title": "The next phase of OpenAI’s Education for Countries",
     "url": "https://openai.com/index/the-next-phase-of-education-for-countries",
     "source": "OpenAI Blog",
     "date": "2026-05-20",
     "summary": "OpenAI advances Education for Countries, expanding AI adoption in schools with new partnerships, teacher training, and tools to improve global learning outcomes.",
     "is_new": false,
     "lang": "en",
     "interpretation": "OpenAI教育计划从工具输出转向国家合作，可能重塑全球数字教育格局。"
    },
    {
     "title": "Introducing OpenAI for Singapore",
     "url": "https://openai.com/index/introducing-openai-for-singapore",
     "source": "OpenAI Blog",
     "date": "2026-05-19",
     "summary": "OpenAI for Singapore launches a multi-year AI partnership to expand deployment, build local talent, and support businesses and public services with AI.",
     "is_new": false,
     "lang": "en",
     "interpretation": "OpenAI落地新加坡，加速东南亚AI产业布局与竞争。"
    },
    {
     "title": "卡帕西Anthropic最新头衔：技术员工（MTS）",
     "url": "https://www.qbitai.com/2026/05/425304.html",
     "source": "量子位",
     "date": "2026-05-26",
     "summary": "MTS（技术员工） @Anthropic",
     "is_new": true,
     "lang": "zh",
     "interpretation": "卡帕西在Anthropic担任技术员工，凸显顶尖人才在AI安全领域的深耕。"
    },
    {
     "title": "小米集团：一季度智能手机业务收入为443亿元",
     "url": "<![CDATA[https://36kr.com/newsflashes/3825929878049412?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-05-26",
     "summary": "36氪获悉，小米集团发布2026年第一季度财报。财报显示，第一季度手机×AIoT分部收入793亿元，其中智能手机业务收入为443亿元。第一季度，手机全球平均售价同比提升8.2%至1310元，创下历史新高。海外市场稳步深耕，小米在47个国家和地区的智能手机出货量排名前三，65个国家和地区排名前五。",
     "is_new": true,
     "lang": "zh",
     "interpretation": "小米手机业务收入443亿，显示其在激烈竞争中仍保持核心业务稳健。"
    },
    {
     "title": "小米集团：第一季度新车交付量达到80856辆，同比增长6.6%",
     "url": "<![CDATA[https://36kr.com/newsflashes/3825926574314120?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-05-26",
     "summary": "36氪获悉，小米集团发布2026年第一季度财报。财报显示，一季度智能电动汽车及AI等创新业务分部收入为199亿元，同比增长6.9%。其中，智能电动汽车收入为190亿元，其他相关业务收入为9亿元。本季度，受到车辆购置税补贴以及核心零部件价格上涨影响，智能电动汽车及AI等创新业务分部毛利率为20.1%。第一季度智能电动汽车及AI等创新业务分部经营亏损为31亿元。第一季度共交付80856辆新车，同比增长6.6%。",
     "is_new": true,
     "lang": "zh",
     "interpretation": "小米新车交付量同比增6.6%，表明其造车业务正稳步爬坡并持续放量。"
    },
    {
     "title": "独家解读丨Anthropic每赚100块，为何会被马斯克顺走50？",
     "url": "https://www.leiphone.com/category/industrynews/y43AcoPMgWtTOuzg.html",
     "source": "雷锋网 - AI",
     "date": "2026-05-25",
     "summary": "“SpaceX是除谷歌外，另一家有望冲进10万亿美金市值俱乐部的公司。”今年年初，一位硅谷AI公司CEO刘潇曾向雷峰网如此强调道。一位相识的特朗普幕僚团成员曾告诉他，在特朗普试图超越肯尼迪功绩的政治野心下，SpaceX正在从一家航天公司转变成一头“基建巨兽”。“你看各家现在还在比拼基模，就意味着它不是一个有多大壁垒的事，Lab与Lab之间的差距基本拉不开三个月，而它们的算力消耗还望不到头。这时候做基模的前途有多大，要好好想想了。”刘潇补充道。如今，这一预判的冰山一角正在被掀开。“眼下，AI公司确实在加速给算力厂商打工。”另一位二级市场分析师周强表示。在SpaceX昨日提交的招股书中，一个...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "揭示Anthropic与马斯克旗下xAI的复杂利益关联，或涉及投资条款与竞争博弈。"
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
     "title": "The Download: online safety’s future and climate tech’s big pivot",
     "url": "https://www.technologyreview.com/2026/05/21/1137733/the-download-online-safety-climate-tech-pivot/",
     "source": "MIT Technology Review - AI",
     "date": "2026-05-21",
     "summary": "This is today’s edition of The Download, our weekday newsletter that provides a daily dose of what’s going on in the world of technology. Tech researchers are suing the Trump administration over the future of online safety For months, the Trump administration has been going after researchers who ...",
     "is_new": false,
     "lang": "en",
     "interpretation": "本期聚焦网络监管走向与气候技术战略转型，影响政策与投资方向。"
    },
    {
     "title": "派早报：GitHub 在微软治下面临技术和人员流失困境",
     "url": "https://sspai.com/post/110130",
     "source": "少数派 - AI",
     "date": "2026-05-25",
     "summary": "GitHub 在微软治下面临技术和人员流失困境老虎、富途、长桥将被全面取缔境内业务谷歌搜索 AI 模式误将 disregard 等关键词当作指令「死了么」更名为「在么在么」用于老人居家安全公安部拟明确取证中获取密码等特殊程序 伦敦 iPhone 盗窃集团采用威胁手法解绑 Apple ID看看就行的小道消息少数派的近期动态你可能错过的好文章查看全文",
     "is_new": true,
     "lang": "zh",
     "interpretation": "GitHub在微软管理下人才流失，开源社区生态面临技术停滞风险。"
    }
   ]
  },
  {
   "name": "其他AI资讯",
   "icon": "🔮",
   "color": "#6b7280",
   "count": 60,
   "cards": [
    {
     "title": "Uber president says AI spending is getting ‘harder to justify’",
     "url": "https://www.theverge.com/transportation/937116/uber-ai-investment-hard-to-justify",
     "source": "The Verge - AI",
     "date": "2026-05-26",
     "summary": "After reportedly exhausting its annual AI budget just four months into 2026, Uber is now questioning whether it's actually seeing meaningful returns on its investments. In an interview with Rapid Response, Uber president and chief operating officer Andrew Macdonald said the company isn't seeing a...",
     "is_new": true,
     "lang": "en",
     "interpretation": "优步高管表态暗示AI投资泡沫风险，行业需警惕回报预期降温。"
    },
    {
     "title": "US Law Enforcement Warns of ‘Anti-Tech Extremism’ as AI Hatred Grows",
     "url": "https://www.wired.com/story/us-law-enforcement-warns-of-anti-tech-extremism/",
     "source": "Wired - AI",
     "date": "2026-05-26",
     "summary": "As Americans stew over the looming risk of job-stealing AI and data centers in their back yards, the feds are raising the alarm about a new category of threat, documents obtained by WIRED show.",
     "is_new": true,
     "lang": "en",
     "interpretation": "美国执法部门预警反科技极端主义，AI伦理冲突可能激化社会矛盾。"
    },
    {
     "title": "A reality check on the AI jobs hysteria",
     "url": "https://www.technologyreview.com/2026/05/26/1137855/a-reality-check-on-the-ai-jobs-hysteria/",
     "source": "MIT Technology Review - AI",
     "date": "2026-05-26",
     "summary": "Haven’t you heard? White-collar jobs are going away, decimated by AI. Waves of layoffs in the tech sector (most recently at Coinbase and Meta and Cisco) are said to presage what will soon come for all of us knowledge workers. But before you quit your job as a software developer or financial analy...",
     "is_new": true,
     "lang": "en",
     "interpretation": "理性审视AI就业恐慌，避免被夸张预测误导劳动力市场判断。"
    },
    {
     "title": "The pope’s AI encyclical isn’t really about AI",
     "url": "https://techcrunch.com/2026/05/25/the-popes-ai-encyclical-isnt-really-about-ai/",
     "source": "TechCrunch - AI",
     "date": "2026-05-25",
     "summary": "Pope Leo XIV's first encyclical uses AI as a lens to diagnose older problems: concentrated power, eroding democracy, and a tech elite that shapes the world to its own advantage.",
     "is_new": true,
     "lang": "en",
     "interpretation": "教皇通谕借AI议题探讨人性尊严，科技伦理需回归人文关怀本质。"
    },
    {
     "title": "5 days left: Save up to $410 on TechCrunch Disrupt 2026 passes before prices increase",
     "url": "https://techcrunch.com/2026/05/25/5-days-left-save-up-to-410-on-techcrunch-disrupt-2026-passes-before-prices-increase/",
     "source": "TechCrunch - AI",
     "date": "2026-05-25",
     "summary": "Early Bird savings for TechCrunch Disrupt 2026 in San Francisco end May 29 at 11:59 p.m. PT. Register now to save up to $410 before prices increase.",
     "is_new": true,
     "lang": "en",
     "interpretation": "科技大会早鸟优惠倒计时，行业交流与商业合作机会不容错过。"
    },
    {
     "title": "Citing Gandalf, Pope Leo says we must \"disarm\" AI",
     "url": "https://arstechnica.com/tech-policy/2026/05/citing-gandalf-pope-leo-says-we-must-disarm-ai/",
     "source": "ArsTechnica - AI",
     "date": "2026-05-25",
     "summary": "In an age of AI, Pope looks for \"artisans of hope.\"",
     "is_new": true,
     "lang": "en",
     "interpretation": "教皇借《指环王》隐喻，警示AI需受伦理约束，避免失控风险。"
    },
    {
     "title": "US's big bet on quantum computing may not be entirely legal",
     "url": "https://arstechnica.com/tech-policy/2026/05/uss-big-bet-on-quantum-computing-may-not-be-entirely-legal/",
     "source": "ArsTechnica - AI",
     "date": "2026-05-25",
     "summary": "Deal also launched the first quantum foundry company, but is there a need for it?",
     "is_new": true,
     "lang": "en",
     "interpretation": "美国量子计算布局或涉法律灰色地带，技术竞赛需平衡创新与合规。"
    },
    {
     "title": "I spent years forcing myself to finish The Witcher 3—don't repeat my mistake",
     "url": "https://arstechnica.com/gaming/2026/05/the-witcher-3-is-a-good-game-but-that-doesnt-mean-you-have-to-like-it/",
     "source": "ArsTechnica - AI",
     "date": "2026-05-25",
     "summary": "Consensus and genre labels aren't reliable predictors of what you'll enjoy.",
     "is_new": true,
     "lang": "en",
     "interpretation": "游戏不必强求通关，体验过程比完成目标更重要，避免陷入沉没成本。"
    },
    {
     "title": "The AI Era Is Creating a Bug Hunting Arms Race",
     "url": "https://www.wired.com/story/the-ai-era-is-creating-a-bug-hunting-arms-race/",
     "source": "Wired - AI",
     "date": "2026-05-25",
     "summary": "As attackers ramp up their AI exploit development, the search for software vulnerabilities is changing rapidly.",
     "is_new": true,
     "lang": "en",
     "interpretation": "AI时代漏洞挖掘成军备竞赛，安全攻防战将决定技术信任度。"
    },
    {
     "title": "Why prompt debt, retrieval debt, and evaluation debt are quietly reshaping enterprise AI risk",
     "url": "https://venturebeat.com/technology/why-prompt-debt-retrieval-debt-and-evaluation-debt-are-quietly-reshaping-enterprise-ai-risk",
     "source": "VentureBeat - AI",
     "date": "2026-05-25",
     "summary": "Over the past two decades, technical debt meant outdated architecture, messy code, and poorly maintained documentation. That definition is no longer sufficient in the AI era, where failure modes are more subtle and often non-linear. AI systems are introducing new layers of technical debt that liv...",
     "is_new": true,
     "lang": "en",
     "interpretation": "三类“债务”正重塑企业AI风险管理，忽视隐性成本将埋下系统性隐患。"
    },
    {
     "title": "Everyone is navigating AI security in real time — even Google",
     "url": "https://techcrunch.com/2026/05/24/everyone-is-navigating-ai-security-in-real-time-even-google/",
     "source": "TechCrunch - AI",
     "date": "2026-05-24",
     "summary": "We're in the transition period -- all of us.",
     "is_new": false,
     "lang": "en",
     "interpretation": "连谷歌都在实时摸索AI安全，行业尚无成熟标准，试错成常态。"
    },
    {
     "title": "I tried Amazon’s Bee wearable and am both intrigued and slightly creeped out",
     "url": "https://techcrunch.com/2026/05/24/i-tried-amazons-bee-wearable-and-am-both-intrigued-and-slightly-creeped-out/",
     "source": "TechCrunch - AI",
     "date": "2026-05-24",
     "summary": "Like other AI wearables, Amazon's Bee offers an odd combination of convenience and privacy anxiety.",
     "is_new": false,
     "lang": "en",
     "interpretation": "亚马逊可穿戴设备Bee让人既好奇又不安，隐私与便利的边界再受挑战。"
    },
    {
     "title": "Whatever the mirror test tells us, beluga whales pass it",
     "url": "https://arstechnica.com/science/2026/05/belugas-may-pass-the-mirror-test-but-does-the-mirror-test-still-pass/",
     "source": "ArsTechnica - AI",
     "date": "2026-05-24",
     "summary": "The white whales join the short, contested list of animals that see themselves.",
     "is_new": false,
     "lang": "en",
     "interpretation": "白鲸通过镜像测试，挑战了传统对自我认知能力的定义标准。"
    },
    {
     "title": "Hackers are learning to exploit chatbot ‘personalities’",
     "url": "https://www.theverge.com/column/935545/hackers-ai-chatbots",
     "source": "The Verge - AI",
     "date": "2026-05-24",
     "summary": "This is The Stepback, a weekly newsletter breaking down one essential story from the tech world. For more on AI mischief, follow Robert Hart. The Stepback arrives in our subscribers' inboxes at 8AM ET. Opt in for The Stepback here. How it started Hacking the first generation of AI chatbots was a ...",
     "is_new": false,
     "lang": "en",
     "interpretation": "黑客正利用聊天机器人的“人格”漏洞实施攻击，安全风险升级。"
    },
    {
     "title": "datasette 1.0a30",
     "url": "https://simonwillison.net/2026/May/24/datasette/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-05-24",
     "summary": "Release: datasette 1.0a30 The big new feature in this alpha is a new customizable \"Jump to...\" menu, described in detail in The extensible \"Jump to\" menu in Datasette 1.0a30 on the Datasette blog. You can try it out by hitting / on latest.datasette.io - it looks like this: The new jump_items_sql(...",
     "is_new": false,
     "lang": "en",
     "interpretation": "Datasette新版本发布，持续优化开源数据探索工具的稳定性。"
    },
    {
     "title": "datasette-fixtures 0.1a0",
     "url": "https://simonwillison.net/2026/May/24/datasette-fixtures/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-05-24",
     "summary": "Release: datasette-fixtures 0.1a0 One of the smaller features in Datasette 1.0a30 is this: New documented datasette.fixtures.populate_fixture_database(conn) helper for creating the fixture database tables used by Datasette's own tests, intended for plugin test suites. This new plugin takes advant...",
     "is_new": false,
     "lang": "en",
     "interpretation": "Datasette-fixtures首个测试版，为数据测试提供标准化样本支持。"
    },
    {
     "title": "Mad House — Usborne Creepy Computer Games",
     "url": "https://simonwillison.net/2026/May/24/usborne-mad-house/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-05-24",
     "summary": "Tool: Mad House — Usborne Creepy Computer Games Via Hacker News I learned that UK publisher Usborne published free PDFs of their 1980s Computer Books, some of which I remember working through on my Commodore 64 as a child. These were so great! Beautifully illustrated books with fun projects made ...",
     "is_new": false,
     "lang": "en",
     "interpretation": "复古游戏《Mad House》重现，唤起对早期计算机游戏文化的记忆。"
    },
    {
     "title": "Ferrari is using IBM’s AI to create F1 superfans",
     "url": "https://techcrunch.com/2026/05/23/ferrari-is-using-ai-to-create-f1-superfans/",
     "source": "TechCrunch - AI",
     "date": "2026-05-23",
     "summary": "IBM and Scuderia Ferrari HP take TechCrunch inside how they are redefining the fan experience.",
     "is_new": false,
     "lang": "en",
     "interpretation": "法拉利借IBM的AI培养F1超级粉丝，体育营销与人工智能深度融合。"
    },
    {
     "title": "Elon Musk has given up on solar power (on Earth)",
     "url": "https://techcrunch.com/2026/05/23/elon-musk-has-given-up-on-solar-power-on-earth/",
     "source": "TechCrunch - AI",
     "date": "2026-05-23",
     "summary": "Elon Muks's xAI has gone all in on natural gas, while SpaceX is obsessed with orbital data centers. What happened to the \"solar-electric economy\" he promised?",
     "is_new": false,
     "lang": "en",
     "interpretation": "马斯克放弃地球太阳能业务，或影响全球清洁能源产业布局。"
    },
    {
     "title": "SpaceX's Starship V3—still a work in progress—mostly successful on first flight",
     "url": "https://arstechnica.com/space/2026/05/spacexs-starship-v3-still-a-work-in-progress-mostly-successful-on-first-flight/",
     "source": "ArsTechnica - AI",
     "date": "2026-05-23",
     "summary": "SpaceX has more to prove before flying Starship all the way to low-Earth orbit.",
     "is_new": false,
     "lang": "en",
     "interpretation": "星舰V3首飞基本成功，但仍在迭代，标志重型火箭技术迈入新阶段。"
    },
    {
     "title": "Two space shuttle-era spacewalkers enter Astronaut Hall of Fame",
     "url": "https://arstechnica.com/space/2026/05/two-space-shuttle-era-spacewalkers-enter-astronaut-hall-of-fame/",
     "source": "ArsTechnica - AI",
     "date": "2026-05-23",
     "summary": "\"Two astronauts whose careers embody excellence, leadership, and service.\"",
     "is_new": false,
     "lang": "en",
     "interpretation": "两位航天飞机时代宇航员入选名人堂，致敬人类太空探索先驱。"
    },
    {
     "title": "China’s shark finning could lead to US seafood sanctions",
     "url": "https://arstechnica.com/tech-policy/2026/05/chinas-shark-finning-could-lead-to-us-seafood-sanctions/",
     "source": "ArsTechnica - AI",
     "date": "2026-05-23",
     "summary": "A formal petition to the US government calls for sanctions on Chinese seafood imports.",
     "is_new": false,
     "lang": "en",
     "interpretation": "中国鱼翅贸易或遭美国制裁，凸显海洋生态保护的国际博弈。"
    },
    {
     "title": "On the <dl>",
     "url": "https://simonwillison.net/2026/May/23/on-the-dl/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-05-23",
     "summary": "On the I learned a few new-to-me things about the element from this article by Ben Meyer: A can be followed by multiple You can optionally group the and elements in a for styling - but only a . You can label them using ARIA. They've been called \"description lists\", not \"definition lists\", since a...",
     "is_new": false,
     "lang": "en",
     "interpretation": "（此条标题不完整，无法解读）"
    },
    {
     "title": "Google goes for the glitter with disco-ball icons: ‘Are y’all sure you still want this?’",
     "url": "https://techcrunch.com/2026/05/22/google-goes-for-the-glitter-with-disco-ball-icons-are-yall-sure-you-still-want-this/",
     "source": "TechCrunch - AI",
     "date": "2026-05-22",
     "summary": "You can now disco ball-ify your entire Pixel home screen, says Google.",
     "is_new": false,
     "lang": "en",
     "interpretation": "谷歌拟用迪斯科球图标引发争议，折射科技巨头设计决策的公众压力。"
    },
    {
     "title": "Specialization Beats Scale: A Strategic Variable Most AI Procurement Decisions Overlook",
     "url": "https://huggingface.co/blog/Dharma-AI/specialization-beats-scale",
     "source": "Hugging Face Blog",
     "date": "2026-05-22",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "专业化比规模更重要，提醒AI采购决策应避免盲目追求大而全。"
    },
    {
     "title": "Four Russian satellites are now within striking distance of an ICEYE radarsat",
     "url": "https://arstechnica.com/space/2026/05/a-satellite-company-supporting-ukraine-appears-to-be-in-russias-crosshairs/",
     "source": "ArsTechnica - AI",
     "date": "2026-05-22",
     "summary": "\"This capability is not common for satellites conducting typical missions.\"",
     "is_new": false,
     "lang": "en",
     "interpretation": "俄卫星逼近西方雷达卫星，凸显太空军事化竞争加剧与轨道安全风险。"
    },
    {
     "title": "Ebola outbreak now third largest recorded and \"spreading rapidly\"",
     "url": "https://arstechnica.com/health/2026/05/ebola-outbreak-now-third-largest-recorded-and-spreading-rapidly/",
     "source": "ArsTechnica - AI",
     "date": "2026-05-22",
     "summary": "Ebola outbreak risk level increased as deaths reach 177 with nearly 750 cases.",
     "is_new": false,
     "lang": "en",
     "interpretation": "埃博拉疫情规模创纪录且扩散快，全球公共卫生应急体系面临严峻考验。"
    },
    {
     "title": "First-generation Chromecast users stressed by devices suddenly failing",
     "url": "https://arstechnica.com/gadgets/2026/05/original-chromecast-lives-devices-back-on-after-mysteriously-breaking-this-week/",
     "source": "ArsTechnica - AI",
     "date": "2026-05-22",
     "summary": "Google tells Ars it fixed the first-gen Chromecast bug.",
     "is_new": false,
     "lang": "en",
     "interpretation": "初代Chromecast突然故障，暴露科技产品计划性淘汰对用户体验的伤害。"
    },
    {
     "title": "Trump FCC asks public to comment on whether ABC's The View is a news show",
     "url": "https://arstechnica.com/tech-policy/2026/05/trump-fcc-asks-public-to-comment-on-whether-abcs-the-view-is-a-news-show/",
     "source": "ArsTechnica - AI",
     "date": "2026-05-22",
     "summary": "FCC seeks opinions on whether ABC show's decisions are \"based on newsworthiness.\"",
     "is_new": false,
     "lang": "en",
     "interpretation": "FCC质疑《观点》节目性质，折射美国政治力量对媒体内容分类的干预。"
    },
    {
     "title": "Google’s AI search is so broken it can ‘disregard’ what you’re looking for",
     "url": "https://www.theverge.com/tech/936176/google-ai-overviews-search-disregard",
     "source": "The Verge - AI",
     "date": "2026-05-22",
     "summary": "Google's AI Overviews are running into an interesting problem right now. Earlier on Friday, if you searched for the term \"disregard,\" the AI Overview section would include a response like what you'd see from a more traditional AI chatbot instead of the typical AI summary, as spotted on X. As you ...",
     "is_new": false,
     "lang": "en",
     "interpretation": "谷歌AI搜索功能严重缺陷，说明当前大语言模型在信息检索中的不可靠性。"
    },
    {
     "title": "Elon, stop trying to make Grok happen",
     "url": "https://www.theverge.com/ai-artificial-intelligence/936219/elon-stop-trying-to-make-grok-happen",
     "source": "The Verge - AI",
     "date": "2026-05-22",
     "summary": "There is a harsh truth about Elon Musk's \"truth-seeking\" AI chatbot Grok: It's not very good, and not many people are using it. That's the takeaway of a new Reuters report, which found that Grok barely appears in federal records of how the US government used AI last year. It's not the only sign x...",
     "is_new": false,
     "lang": "en",
     "interpretation": "马斯克强推Grok引发争议，反映AI产品过度营销与用户真实需求间的脱节。"
    },
    {
     "title": "The literary world isn’t prepared for AI",
     "url": "https://www.theverge.com/tech/936073/ai-writing-granta-commonwealth-prize",
     "source": "The Verge - AI",
     "date": "2026-05-22",
     "summary": "Since 2012, the British literary magazine Granta has published the regional winners of the annual Commonwealth Short Story Prize. This year, however, there was something off about one of the selections for the prestigious award: It appears to have been written by AI. Jamir Nazir's \"The Serpent in...",
     "is_new": false,
     "lang": "en",
     "interpretation": "文学界对AI冲击准备不足，预示创作、版权与审美标准将面临颠覆性变革。"
    },
    {
     "title": "Spotify says its AI remix tool is for superfans, but I’m not convinced",
     "url": "https://www.theverge.com/ai-artificial-intelligence/936072/spotify-umg-ai-music-remix-cover-superfan",
     "source": "The Verge - AI",
     "date": "2026-05-22",
     "summary": "AI covers and remixes of songs are already a blight on the internet. Spotify, YouTube, TikTok, and Instagram are awash in flat reggae versions of \"Smells Like Teen Spirit,\" dinky country renditions of The Weeknd, and monotonous Motown reimaginings of AC/DC. Now, a new tool from Spotify will make ...",
     "is_new": false,
     "lang": "en",
     "interpretation": "用户对AI工具的真实价值存疑，反映技术落地与用户期待间的落差。"
    },
    {
     "title": "Samsung’s memory chip employees negotiated $340,000 bonuses this year",
     "url": "https://www.theverge.com/tech/936002/samsung-memory-chip-employees-deal-strike-bonus",
     "source": "The Verge - AI",
     "date": "2026-05-22",
     "summary": "Details have emerged about a tentative deal struck between Samsung and semiconductor employees who had threatened to strike. The deal reportedly makes some workers eligible for average annual bonuses of $340,000. The proposed 18-day strike had hinged on Samsung's bonus cap for employees in the se...",
     "is_new": false,
     "lang": "en",
     "interpretation": "芯片行业高额奖金凸显人才争夺战，或加剧半导体市场成本压力。"
    },
    {
     "title": "How Virgin Atlantic ships faster with Codex",
     "url": "https://openai.com/index/virgin-atlantic",
     "source": "OpenAI Blog",
     "date": "2026-05-22",
     "summary": "How Virgin Atlantic used Codex to ship its revamped mobile app on a fixed holiday travel deadline, reaching near-total unit test coverage and zero P1 defects.",
     "is_new": false,
     "lang": "en",
     "interpretation": "企业用AI优化物流效率，展示技术降本增效的实战案例。"
    },
    {
     "title": "Even If You Hate AI, You Will Use Google AI Search",
     "url": "https://www.wired.com/story/even-if-you-hate-ai-you-will-use-google-ai-search/",
     "source": "Wired - AI",
     "date": "2026-05-22",
     "summary": "The search giant’s AI-crafted answers are so convenient, you’ll be sucked in—to the detriment of the web and the artists and thinkers behind it.",
     "is_new": false,
     "lang": "en",
     "interpretation": "即使抗拒AI，用户仍难逃谷歌搜索的AI化，体现技术渗透的不可逆性。"
    },
    {
     "title": "The Gulf’s AI Boom Has an Undersea Cable Problem",
     "url": "https://www.wired.com/story/the-gulfs-ai-boom-has-an-undersea-cable-problem/",
     "source": "Wired - AI",
     "date": "2026-05-22",
     "summary": "Hyperscalers are pushing the Gulf to rethink internet infrastructure as AI raises the stakes of cable disruptions.",
     "is_new": false,
     "lang": "en",
     "interpretation": "海湾国家AI发展受限于海底电缆，暴露基础设施短板制约技术扩张。"
    },
    {
     "title": "The memory shortage is causing a repricing of consumer electronics",
     "url": "https://simonwillison.net/2026/May/22/memory-shortage/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-05-22",
     "summary": "The memory shortage is causing a repricing of consumer electronics David Oks provides the clearest explanation I've seen yet of why consumer products that use memory are likely to get significantly more expensive over the next few years. The short version is that memory manufacturers - of which t...",
     "is_new": false,
     "lang": "en",
     "interpretation": "内存短缺推高消费电子价格，反映供应链波动对终端市场的直接冲击。"
    },
    {
     "title": "Valid certificates, stolen accounts: how attackers broke npm's last trust signal",
     "url": "https://venturebeat.com/security/npm-sigstore-provenance-stolen-identity-audit-grid-2026",
     "source": "VentureBeat - AI",
     "date": "2026-05-22",
     "summary": "On May 19, 633 malicious npm package versions passed Sigstore provenance verification. They were cleared by the system because the attacker had generated valid signing certificates from a compromised maintainer account.Sigstore worked exactly as designed: it verified the package was built in a CI...",
     "is_new": false,
     "lang": "en",
     "interpretation": "攻击者利用合法证书和盗号突破npm信任机制，暴露开源生态安全漏洞。"
    },
    {
     "title": "Meta Is in Crisis, Google Search’s Makeover, and AI Gets Booed by Graduates",
     "url": "https://www.wired.com/story/uncanny-valley-podcast-meta-in-crisis-google-search-makeover-ai-booed-by-graduates/",
     "source": "Wired - AI",
     "date": "2026-05-21",
     "summary": "In this episode of Uncanny Valley, we unpack the mass layoffs at Meta, big announcements at Google I/O, and the latest backlash against AI.",
     "is_new": false,
     "lang": "en",
     "interpretation": "Meta陷入危机、谷歌搜索改版、AI遭毕业生抵制，显示科技巨头正面临多重信任挑战。"
    },
    {
     "title": "Scaling creativity in the age of AI",
     "url": "https://www.technologyreview.com/2026/05/21/1137613/scaling-creativity-in-the-age-of-ai/",
     "source": "MIT Technology Review - AI",
     "date": "2026-05-21",
     "summary": "Storytelling is core to humanity’s DNA, stemming from our impulse to express ideals, warnings, hopes, and experiences. Technology has always been woven through the medium and the distribution: from early humans’ innovation of natural pigments and charcoals for cave paintings to literal representa...",
     "is_new": false,
     "lang": "en",
     "interpretation": "讨论AI时代如何平衡机器效率与人类创造力，避免创意同质化。"
    },
    {
     "title": "We’re announcing new community investments in Missouri.",
     "url": "https://blog.google/innovation-and-ai/infrastructure-and-cloud/global-network/missouri-programs/",
     "source": "Google AI Blog",
     "date": "2026-05-20",
     "summary": "We’re helping build the state’s next-generation workforce and investing in energy programs.",
     "is_new": false,
     "lang": "en",
     "interpretation": "谷歌在密苏里州投资，可能推动当地数字经济和就业增长。"
    },
    {
     "title": "A new experiment brings better group meetings to Google Beam",
     "url": "https://blog.google/innovation-and-ai/models-and-research/google-research/google-beam-group-meetings/",
     "source": "Google AI Blog",
     "date": "2026-05-20",
     "summary": "See and hear your colleagues in true-to-life size and sound, making hybrid meetings feel more inclusive and connected.",
     "is_new": false,
     "lang": "en",
     "interpretation": "谷歌Beam新功能优化远程会议，提升团队协作效率。"
    },
    {
     "title": "Introducing the Ettin Reranker Family",
     "url": "https://huggingface.co/blog/ettin-reranker",
     "source": "Hugging Face Blog",
     "date": "2026-05-19",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "新重排序模型发布，或提升AI信息检索精准度。"
    },
    {
     "title": "I/O 2026",
     "url": "https://blog.google/innovation-and-ai/technology/developers-tools/google-io-2026-collection/",
     "source": "Google AI Blog",
     "date": "2026-05-19",
     "summary": "At Google I/O 2026, we shared how we’re making AI more helpful for everyone. See everything we announced.",
     "is_new": false,
     "lang": "en",
     "interpretation": "I/O大会年度看点：谷歌战略重心转向AI与硬件融合。"
    },
    {
     "title": "How AI Mode is changing the way people search in the U.S.",
     "url": "https://blog.google/products-and-platforms/products/search/ai-mode-us-insights/",
     "source": "Google AI Blog",
     "date": "2026-05-19",
     "summary": "One year after launch, see how AI Mode’s users are shifting from keywords to natural language queries.",
     "is_new": false,
     "lang": "en",
     "interpretation": "AI搜索模式改变美国用户习惯，重塑信息获取方式。"
    },
    {
     "title": "Granite Embedding Multilingual R2: Open Apache 2.0 Multilingual Embeddings with 32K Context — Best Sub-100M Retrieval Quality",
     "url": "https://huggingface.co/blog/ibm-granite/granite-embedding-multilingual-r2",
     "source": "Hugging Face Blog",
     "date": "2026-05-14",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "开源多语言嵌入模型以32K上下文和顶级检索质量，降低小模型部署门槛。"
    },
    {
     "title": "Unlocking asynchronicity in continuous batching",
     "url": "https://huggingface.co/blog/continuous_async",
     "source": "Hugging Face Blog",
     "date": "2026-05-14",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "连续批处理引入异步机制，可大幅优化推理吞吐与资源利用率。"
    },
    {
     "title": "Adding Benchmaxxer Repellant to the Open ASR Leaderboard",
     "url": "https://huggingface.co/blog/open-asr-leaderboard-private-data",
     "source": "Hugging Face Blog",
     "date": "2026-05-06",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "为语音识别排行榜添加防作弊机制，确保评测结果公正可信。"
    },
    {
     "title": "留给人类数学家的悬赏不多了！谷歌DeepMind一口气解决9道埃尔德什问题",
     "url": "https://www.qbitai.com/2026/05/425455.html",
     "source": "量子位",
     "date": "2026-05-26",
     "summary": "解决卡了人类56年的数学难题",
     "is_new": true,
     "lang": "zh",
     "interpretation": "谷歌AI一次性解决9道经典数学难题，人类数学家面临挑战加剧。"
    },
    {
     "title": "华为发布AI DC数据基础设施全栈方案，加速行业智能化跃升",
     "url": "https://www.qbitai.com/2026/05/425296.html",
     "source": "量子位",
     "date": "2026-05-26",
     "summary": "",
     "is_new": true,
     "lang": "zh",
     "interpretation": "华为全栈方案将加速各行业AI落地，巩固其数字基础设施领导地位。"
    },
    {
     "title": "荣耀600系列手机发布：4K闪光微单Live，国补价2294.15元起",
     "url": "https://www.qbitai.com/2026/05/425155.html",
     "source": "量子位",
     "date": "2026-05-26",
     "summary": "独特“幸运星”ID设计，打造数字系列史上最精致外观",
     "is_new": true,
     "lang": "zh",
     "interpretation": "荣耀以亲民价格将微单级影像带入中端市场，或重塑手机摄影竞争格局。"
    },
    {
     "title": "“卡车界特斯拉”，刚刚又融了2亿美元",
     "url": "https://www.qbitai.com/2026/05/425058.html",
     "source": "量子位",
     "date": "2026-05-26",
     "summary": "90后天才+70后老将打造",
     "is_new": true,
     "lang": "zh",
     "interpretation": "资本持续押注电动卡车赛道，显示物流运输电动化转型仍被长期看好。"
    },
    {
     "title": "AI 的承诺一文不值，谁该买单？",
     "url": "https://www.ifanr.com/1666938?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-05-26",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": true,
     "lang": "zh",
     "interpretation": "质疑AI行业过度承诺现象，提醒市场需理性看待技术落地与商业回报。"
    },
    {
     "title": "两部 AI 剧集闯入戛纳，水母智能要做 AI 内容工业化的破局者｜项目报道",
     "url": "<![CDATA[https://36kr.com/p/3823033729061253?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-05-26",
     "summary": "5月8日，第79届戛纳国际电影节內 Fantastic Pavilion 单元公布竖屏剧展演名单。 由水母智能旗下中国AI影视公司水母映画出品的竖屏剧集《摸金之天机入梦》（英文名：The Golden Tomb Seeker）以及水母星际出品的《饿塔》（英文名：Series Tower）从全球120个国家、超过1000件竖屏作品中脱颖而出，成为正式展映的21部作品之一。 竖屏剧集《摸金之天机入梦》 当两部纯 AI 制作的竖屏短剧，出现在戛纳电影节的展映厅里，大概很多人都没想到：曾经被视作电子榨菜 的 AI 漫剧，居然能站上全球电影工业的殿堂。 这不是流量短剧的镀金游戏，而是一个行业的成人...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "两部AI剧集闯入戛纳，显示AI内容工业化正从技术走向国际主流市场认可。"
    },
    {
     "title": "消除“罪证”：给写作去除“AI味”的不完全手册（2026版）",
     "url": "<![CDATA[https://36kr.com/p/3824601267196037?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-05-25",
     "summary": "图源：公众号「有三思 U Sense」 做个测试。读一下这段话： “熊猫是最可爱的动物，它最爱吃竹子，样子最憨态可掬，是世界上最珍贵的宝藏。” 如果你笑了，或者皱了眉，很明显，你的“鉴AI雷达”已经觉醒。 近期把网友笑到打鸣的“豆包体”里，“最”是高频词汇。大家纷纷晒出自己使用、调教AI，结果内容啼笑皆非的截图。这场围绕AI味写作的调侃就此出圈。 ● 网友@也许像星星发布的AI味吐槽突破 微博AI味相关话题浏览阅读量不小，小红书相关笔记动辄近万点赞。豆瓣、抖音、微信公众号，都能搜到不少相关内容。能引发社交媒体的集体吐槽，说明“AI味”已经人人皆可感知，大家都不傻。同时这也意味着，在工作中...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "提供系统化方法消除AI生成痕迹，反映内容创作领域对真实性与原创性的迫切需求。"
    },
    {
     "title": "用AI重构增长：新通教育集团的实践| 2026AI Partner·北京亦庄AI+产业大会",
     "url": "<![CDATA[https://36kr.com/p/3824164325412992?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-05-25",
     "summary": "新通教育创始人麻亚炜坦诚分享了过去五年的转型历程——从数字化基建到全员AI Must，从AI in All到AI Native新业务。她的实践证明：传统企业拥抱AI，最难的不是技术，而是让战略从董事会走到一线。 麻亚炜将AI转型划分为四个递进阶段： 第一阶段（2021-2022）：数字化基建 完成底层数据与系统架构的夯实，为AI应用奠定坚实基础。 第二阶段（2023-2024）：AI Must 战略落地 通过全员公开课普及认知、孵化标杆小组树立典范、赴哈佛与斯坦福验证产品，将AI从\"命令\"转化为\"共识\"。 第三阶段（2025）：AI in All 深度嵌入 将AI融入所有关键业务流程，构...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "新通教育用AI重构增长路径，展示教育行业数字化转型的落地案例与商业价值。"
    },
    {
     "title": "AI 做不出下一个《GTA》？母公司老板力挺 AI 的同时泼了盆冷水",
     "url": "https://cn.technode.com/post/2026-05-22/take-two-ceo-ai-gta6/",
     "source": "动点科技 - AI",
     "date": "2026-05-22",
     "summary": "Take-Two Interactive […]",
     "is_new": false,
     "lang": "zh",
     "interpretation": "母公司肯定AI潜力但指出其难以复现《GTA》级创意，强调技术边界与内容原创性。"
    },
    {
     "title": "谷歌高管：AI 短期内不会导致大规模失业",
     "url": "https://cn.technode.com/post/2026-05-22/google-executive-ai-will-not-cause-mass-unemployment-in-the-short-term/",
     "source": "动点科技 - AI",
     "date": "2026-05-22",
     "summary": "谷歌高级副总裁詹姆斯·曼尼卡（James […]",
     "is_new": false,
     "lang": "zh",
     "interpretation": "谷歌高管表态意在缓解公众焦虑，但需结合企业实际裁员动作综合看待。"
    },
    {
     "title": "AI 分身 24 小时冲浪，它交朋友怎么比我还好？",
     "url": "https://www.ifanr.com/1666415?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-05-21",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "社交AI分身引发隐私与真实人际关系的伦理讨论。"
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
   "stars": 42647,
   "forks": 7611,
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
   "stars": 26112,
   "forks": 5784,
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
   "description": "YC (S26) | Give AI the ability to live your experience. Records everything you do, say, hear 24/7, local, private, secure",
   "blurb": "YC (S26) | Give AI the ability to live your experience. Records everything you do, say, hear 24/7, local, private, secure",
   "stars": 18917,
   "forks": 1761,
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
   "stars": 17984,
   "forks": 1141,
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
   "stars": 15256,
   "forks": 2318,
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
   "stars": 11707,
   "forks": 1218,
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
   "stars": 11401,
   "forks": 831,
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
   "stars": 10107,
   "forks": 1277,
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
   "stars": 8654,
   "forks": 968,
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
   "stars": 7539,
   "forks": 851,
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
   "stars": 6792,
   "forks": 363,
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
   "stars": 6145,
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
   "stars": 5622,
   "forks": 1384,
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
   "stars": 5424,
   "forks": 620,
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
   "stars": 4818,
   "forks": 392,
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