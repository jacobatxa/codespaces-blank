const APP_DATA = {
 "today": "2026-05-24",
 "fetched_at": "2026-05-24T16:00:54",
 "total": 130,
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
  "APPSO": {
   "count": 5,
   "color": "#f43f5e"
  },
  "动点科技 - AI": {
   "count": 4,
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
   "count": 38
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
   "count": 3
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
   "count": 3
  },
  {
   "name": "其他AI资讯",
   "icon": "🔮",
   "color": "#6b7280",
   "count": 54
  }
 ],
 "sections": [
  {
   "name": "大模型与基础架构",
   "icon": "🧠",
   "color": "#7c3aed",
   "count": 38,
   "cards": [
    {
     "title": "Towards Speed-of-Light Text Generation with Nemotron-Labs Diffusion Language Models",
     "url": "https://huggingface.co/blog/nvidia/nemotron-labs-diffusion",
     "source": "Hugging Face Blog",
     "date": "2026-05-23",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "光速文本生成模型突破，可能彻底改变AI实时交互与大规模内容生产效率。"
    },
    {
     "title": "Google’s new anything-to-anything AI model is wild",
     "url": "https://www.theverge.com/tech/936507/gemini-omni-hands-on-deepfake-ai-video",
     "source": "The Verge - AI",
     "date": "2026-05-23",
     "summary": "Last year I deepfaked my kid's stuffed animal to make it look like his plush deer was on vacation. It was an experiment to see if I could re-create the events depicted in a Gemini ad Google was running, and I never showed the videos of Buddy the deer on his adventures to my four-year-old. […]",
     "is_new": false,
     "lang": "en",
     "interpretation": "谷歌多模态AI模型实现任意输入输出转换，将极大拓展AI应用边界。"
    },
    {
     "title": "We tried Google’s AI glasses and they’re almost there",
     "url": "https://techcrunch.com/2026/05/22/we-tried-googles-ai-glasses-and-theyre-almost-there/",
     "source": "TechCrunch - AI",
     "date": "2026-05-22",
     "summary": "Google demoed prototype Android XR glasses that overlay Gemini-powered translation, navigation, and other information directly into your field of view.",
     "is_new": false,
     "lang": "en",
     "interpretation": "谷歌AI眼镜接近实用但仍存短板，预示消费级AR设备离爆发还需迭代。"
    },
    {
     "title": "Your AI agents need a terminal, not just a vector database",
     "url": "https://venturebeat.com/orchestration/your-ai-agents-need-a-terminal-not-just-a-vector-database",
     "source": "VentureBeat - AI",
     "date": "2026-05-22",
     "summary": "When agentic workflows fail, developers often assume the problem lies in the underlying model’s reasoning abilities. In reality, the limited information provided by the retrieval interface is often the primary limiting factor.Researchers at multiple universities propose a technique called direct ...",
     "is_new": false,
     "lang": "en",
     "interpretation": "AI代理需终端操作能力，仅靠向量数据库无法完成复杂任务，技术架构面临升级。"
    },
    {
     "title": "The Download: coding’s future, the ‘Steroid Olympics,’ and AI-driven science",
     "url": "https://www.technologyreview.com/2026/05/22/1137845/the-download-coding-future-steroid-olympics-ai-science/",
     "source": "MIT Technology Review - AI",
     "date": "2026-05-22",
     "summary": "This is today’s edition of The Download, our weekday newsletter that provides a daily dose of what’s going on in the world of technology. Anthropic’s Code with Claude showed off coding’s future—whether you like it or not At Anthropic’s developer event in London this week, Code with Claude, attend...",
     "is_new": false,
     "lang": "en",
     "interpretation": "编程未来、体育科技滥用与AI科研并行发展，多领域变革正在加速交汇。"
    },
    {
     "title": "All of the updates from Elon Musk and Sam Altman’s battle over OpenAI",
     "url": "https://www.theverge.com/tech/917225/sam-altman-elon-musk-openai-lawsuit",
     "source": "The Verge - AI",
     "date": "2026-05-21",
     "summary": "Sam Altman and Elon Musk are facing off in a high-stakes trial that could alter the future of OpenAI and its most well-known product, ChatGPT. In 2024, Musk filed a lawsuit accusing OpenAI of abandoning its founding mission of developing AI to benefit humanity and shifting focus to boosting profi...",
     "is_new": false,
     "lang": "en",
     "interpretation": "马斯克与奥特曼争夺OpenAI控制权，暴露AI巨头内部权力博弈与路线分歧。"
    },
    {
     "title": "AdventHealth advances whole-person care with OpenAI",
     "url": "https://openai.com/index/adventhealth",
     "source": "OpenAI Blog",
     "date": "2026-05-21",
     "summary": "AdventHealth is using ChatGPT for Healthcare to streamline workflows, reduce administrative burden, and return more time to patient care.",
     "is_new": false,
     "lang": "en",
     "interpretation": "医疗巨头引入AI优化全人护理，标志AI在健康管理领域进入深度应用阶段。"
    },
    {
     "title": "I Cloned Myself With Gemini’s AI Avatar Tool. The Result Was Unnervingly Me",
     "url": "https://www.wired.com/story/i-cloned-myself-with-geminis-ai-avatar-tool-the-result-was-unnervingly-me/",
     "source": "Wired - AI",
     "date": "2026-05-21",
     "summary": "I used the Gemini app to generate lifelike videos featuring a digital clone of myself. Google sees this as the future of creation. I’m still creeped out.",
     "is_new": false,
     "lang": "en",
     "interpretation": "AI克隆人像过于逼真，引发对数字身份与隐私边界的深层伦理讨论。"
    },
    {
     "title": "Datasette Agent",
     "url": "https://simonwillison.net/2026/May/21/datasette-agent/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-05-21",
     "summary": "We just announced the first release of Datasette Agent, a new extensible AI assistant for Datasette. I've been working on my LLM Python library for just over three years now, and Datasette Agent represents the moment that LLM and Datasette finally come together. I'm really excited about it! Datas...",
     "is_new": false,
     "lang": "en",
     "interpretation": "新型AI数据代理工具发布，或简化非技术人员对数据库的交互操作。"
    },
    {
     "title": "Alibaba's proprietary Qwen3.7-Max can run for 35 hours autonomously and supports external harnesses like Anthropic's Claude Code",
     "url": "https://venturebeat.com/technology/alibabas-proprietary-qwen3-7-max-can-run-for-35-hours-autonomously-and-supports-external-harnesses-like-anthropics-claude-code",
     "source": "VentureBeat - AI",
     "date": "2026-05-21",
     "summary": "The AI industry has fully entered the \"agent era,\" a paradigm where AI models do far more than generate text — they now actively plan, execute, and course-correct complex tasks over days rather than seconds. Thus, it's perhaps unsurprising to see Chinese e-commerce giant Alibaba's famed Qwen Team...",
     "is_new": false,
     "lang": "en",
     "interpretation": "阿里Qwen3.7-Max可自主运行35小时并兼容Claude，国产大模型长时任务能力突破。"
    },
    {
     "title": "Roundtables: Can AI Learn to Understand the World?",
     "url": "https://www.technologyreview.com/2026/05/21/1137756/roundtables-can-ai-learn-to-understand-the-world/",
     "source": "MIT Technology Review - AI",
     "date": "2026-05-21",
     "summary": "Listen to the session or watch below AI companies want to build systems that understand the external world and overcome the limitations of LLMs. Recent developments have brought world models to the forefront of the AI discussion. Watch a conversation with editor in chief Mat Honan, senior AI edit...",
     "is_new": false,
     "lang": "en",
     "interpretation": "圆桌讨论聚焦AI能否真正理解世界，关乎智能本质的突破。"
    },
    {
     "title": "Anthropic’s Code with Claude showed off coding’s future—whether you like it or not",
     "url": "https://www.technologyreview.com/2026/05/21/1137735/anthropics-code-with-claude-showed-off-codings-future-whether-you-like-it-or-not/",
     "source": "MIT Technology Review - AI",
     "date": "2026-05-21",
     "summary": "The vibes were strong at Code with Claude, Anthropic’s two-day event for software developers in London that kicked off on May 19, the same day as Google’s I/O in Palo Alto. (A coincidence, not a flex, Anthropic staffers assured me.) “Who here has shipped a pull request in the last week that was c...",
     "is_new": false,
     "lang": "en",
     "interpretation": "Anthropic的Claude编程演示预示了编码未来，无论你是否接受。"
    },
    {
     "title": "An OpenAI model has disproved a central conjecture in discrete geometry",
     "url": "https://openai.com/index/model-disproves-discrete-geometry-conjecture",
     "source": "OpenAI Blog",
     "date": "2026-05-20",
     "summary": "An OpenAI model solved the 80-year-old unit distance problem, disproving a major conjecture in discrete geometry and marking a milestone in AI-driven mathematics.",
     "is_new": false,
     "lang": "en",
     "interpretation": "OpenAI模型推翻离散几何核心猜想，展现AI在数学证明中的颠覆力。"
    },
    {
     "title": "How Ramp engineers accelerate code review with Codex",
     "url": "https://openai.com/index/ramp",
     "source": "OpenAI Blog",
     "date": "2026-05-20",
     "summary": "How Ramp engineers use Codex with GPT-5.5 to review code and ship improvements, allowing them to get substantive feedback in minutes instead of hours.",
     "is_new": false,
     "lang": "en",
     "interpretation": "Ramp工程师用Codex加速代码审查，AI正改变软件开发协作流程。"
    },
    {
     "title": "How fast is 10 tokens per second really?",
     "url": "https://simonwillison.net/2026/May/20/tokens-per-second/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-05-20",
     "summary": "How fast is 10 tokens per second really? Neat little HTML app by Mike Veerman (source code here) which simulates LLM token output speeds from 5/second to 800/second. Useful if you see a model advertised as \"30 tokens/second\" and want to get a feel for what that actually looks like. Via Hacker New...",
     "is_new": false,
     "lang": "en",
     "interpretation": "每秒10个token的速度，揭示了当前AI交互体验的瓶颈与未来优化空间。"
    },
    {
     "title": "Google I/O, Gemini Spark, Antigravity",
     "url": "https://simonwillison.net/2026/May/20/google-io/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-05-20",
     "summary": "It's hard to find much to write about Google I/O this year because I have a policy of not writing about anything that I can't try out myself, and a lot of the big announcements are \"coming soon\". I actually prefer to write about things that are in general availability, because I've had instances ...",
     "is_new": false,
     "lang": "en",
     "interpretation": "Google I/O发布Gemini Spark与反重力技术，标志AI与科幻概念加速落地。"
    },
    {
     "title": "100 things we announced at I/O 2026",
     "url": "https://blog.google/innovation-and-ai/technology/ai/google-io-2026-all-our-announcements/",
     "source": "Google AI Blog",
     "date": "2026-05-20",
     "summary": "This year at Google I/O 2026, we announced Gemini Omni, Google Antigravity, Universal Cart and so much more. Here are the highlights.",
     "is_new": false,
     "lang": "en",
     "interpretation": "解读内容"
    },
    {
     "title": "OlmoEarth v1.1: A more efficient family of Earth observation models",
     "url": "https://huggingface.co/blog/allenai/olmoearth-v1-1",
     "source": "Hugging Face Blog",
     "date": "2026-05-19",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "解读内容"
    },
    {
     "title": "llm-gemini 0.32",
     "url": "https://simonwillison.net/2026/May/19/llm-gemini-2/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-05-19",
     "summary": "Release: llm-gemini 0.32 New model gemini-3.5-flash for Gemini 3.5 Flash. See also my notes on Gemini 3.5 Flash, and the pelican I drew using this upgrade to the plugin. Tags: llm, gemini",
     "is_new": false,
     "lang": "en",
     "interpretation": "谷歌Gemini模型版本更新，或带来性能与功能上的重要改进。"
    },
    {
     "title": "I/O 2026: Welcome to the agentic Gemini era",
     "url": "https://blog.google/innovation-and-ai/sundar-pichai-io-2026/",
     "source": "Google AI Blog",
     "date": "2026-05-19",
     "summary": "The latest from Google I/O: See how we’re helping you get more done with Gemini.",
     "is_new": false,
     "lang": "en",
     "interpretation": "I/O 2026宣告“智能体Gemini时代”，AI自主执行任务成核心。"
    },
    {
     "title": "PaddleOCR 3.5: Running OCR and Document Parsing Tasks with a Transformers Backend",
     "url": "https://huggingface.co/blog/PaddlePaddle/paddleocr-transformers",
     "source": "Hugging Face Blog",
     "date": "2026-05-18",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "PaddleOCR升级支持Transformers，文档解析能力与灵活性大增。"
    },
    {
     "title": "Building Blocks for Foundation Model Training and Inference on AWS",
     "url": "https://huggingface.co/blog/amazon/foundation-model-building-blocks",
     "source": "Hugging Face Blog",
     "date": "2026-05-11",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "AWS为AI训练推理提供标准化基础设施，降低企业开发门槛。"
    },
    {
     "title": "vLLM V0 to V1: Correctness Before Corrections in RL",
     "url": "https://huggingface.co/blog/ServiceNow-AI/correctness-before-corrections",
     "source": "Hugging Face Blog",
     "date": "2026-05-06",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "vLLM版本升级强调强化学习中正确性优先，避免后期修正成本。"
    },
    {
     "title": "Granite 4.1 LLMs: How They’re Built",
     "url": "https://huggingface.co/blog/ibm-granite/granite-4-1",
     "source": "Hugging Face Blog",
     "date": "2026-04-29",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "揭秘Granite 4.1大模型构建方法，为行业提供可复现的技术参考。"
    },
    {
     "title": "一季度AI领域融资超1100亿元 国产大模型融资金额暴增",
     "url": "<![CDATA[https://36kr.com/newsflashes/3822775103607172?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-05-24",
     "summary": "近期人工智能创投市场热度攀升。5月，月之暗面、阶跃星辰等国产大模型拿下超过300亿元融资。具身智能同样受到市场关注，一周内维他动力、鹿明机器人等接连斩获数亿元融资。有创投机构统计，一季度人工智能领域的融资有近600起，总额超1100亿元，同比激增185.4%。AI创业公司拿到融资后不少都投向三大方向。一是研发，头部大模型公司2025年研发投入普遍达到数十亿，远超当期营收。二是算力，GPU采购和云服务租赁占融资额的30%到50%。三是招揽全球顶尖人才和团队。研发投得多，技术迭代就快。2026年，中国大模型企业迭代周期已普遍缩短至3个月以内，人工智能推理成本也大幅下降，商业化进程不断深入。",
     "is_new": true,
     "lang": "zh",
     "interpretation": "一季度AI融资超千亿，国产大模型资本热度激增，行业竞争加速。"
    },
    {
     "title": "圆桌对话：下一个杀手级AI产品，会出现在哪个赛道？| 2026AI Partner·北京亦庄AI+产业大会",
     "url": "<![CDATA[https://36kr.com/p/3821714896408713?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-05-23",
     "summary": "下一个杀手级AI产品，是眼镜、是Agent，还是某个尚未命名的“物理世界入口”？这场圆桌没有标准答案，却达成一个共识：单纯套壳大模型的应用注定短命，只有长期在线、连接物理世界、能完成真实交互闭环的产品，才可能成为下一个百亿级赛道。从AI眼镜到具身智能，入口之争已悄然打响。 硬件先行还是生态为王？C端规模还是B端付费？最终指向同一个逻辑：纯套壳应用、弱交互硬件注定被淘汰，只有“多模态底座+AI原生智能体+可穿戴硬件”三位一体，才能让AI从聊天框真正走进现实。 以下为圆桌对话内容，经36氪整理编辑： 刘子豪丨杭州颜柯教育联合创始人（主持） 赵维奇丨乐奇全球开放生态负责人 路少卿丨商汤科技研究...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "探讨AI杀手级应用赛道，预示行业投资与创业新方向。"
    },
    {
     "title": "对话王小川：离开通用人工智能的主干道之后",
     "url": "<![CDATA[https://36kr.com/p/3821521291038856?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-05-23",
     "summary": "“如果没有转型，继续走主流道路，你也会有同等程度的焦虑。”王小川说，这次转型，让他真正回归到从创业第一天就最想做的事情：造AI医生。 访谈｜邓咏仪 杨轩 文｜邓咏仪 编辑｜张雨忻 一年前，王小川带着百川智能来了一次激烈的“大刹车”：大幅缩减通用模型团队，关闭金融等多条行业线，All in医疗大模型。但与此同时，整个大模型行业却热闹非凡，大厂和创业公司轮番进行“轰炸式更新”——过去半年里，平均3天就有一个新版本的通用大模型面世。 而看起来沉寂的百川在做什么？5月22日，王小川安静地交出答卷：新医疗大模型M4，以及Agent产品“百小医”。 过去3年里，百川逐渐从“要做中国最好的基础大模型”...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "王小川转向非通用AI路径，反映行业对垂直场景的务实探索。"
    },
    {
     "title": "安克消噪耳机搭载AI音频芯片Thus™ A1，获吉尼斯“最清晰通话”认证",
     "url": "https://www.leiphone.com/category/weiwu/SE0UCzo94OXxs9aG.html",
     "source": "雷锋网 - AI",
     "date": "2026-05-22",
     "summary": "2026年5月22日，安克创新在深圳总部举办新品发布会，正式发布安克消噪耳机Liberty 5 Pro Max与Liberty 5 Pro，并宣布两款产品获得 “全球通话最清晰的无线蓝牙耳机” 的吉尼斯世界纪录认证。支撑这一认证的，是安克与知存科技历时三年联合研发的首款基于存算一体架构的大模型算力音频AI芯片Thus™ A1，以及安克在通话降噪算法与系统集成上的持续研发积累。安克创新创始人兼CEO阳萌在发布会上表示：“当芯片的算力大了很多之后，声音会清楚非常多，这是听不听得清的差别，更是听不听得懂的差别。这颗芯片搭载的模型不只在降噪这个领域，还会在音质、ANC等领域，给大家提供跟以前截然...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "安克消噪耳机获吉尼斯认证，凸显AI音频芯片在消费电子中的差异化价值。"
    },
    {
     "title": "寻找 AI 的「第三语言」：中间表示如何打通多模态鸿沟 ｜ CVPR 2026",
     "url": "https://www.leiphone.com/category/ai/Hy3aSP6RBtgHE310.html",
     "source": "雷锋网 - AI",
     "date": "2026-05-22",
     "summary": "“请把杯子拿起来”。这句话对你来说轻而易举。因为你看到了杯子，理解了“拿起来”的含义，手自然地伸过去、捏住、提起。但对一个 AI 系统来说，这中间隔着数道几乎不可逾越的鸿沟：语言到动作、动作到视觉、视觉到空间、空间到执行。传统做法是强迫模型学会直接映射，通过输入一段文字或一组动作参数，让其直接输出像素级的视频帧或关节角度。这种方法在受限环境和充足标注数据下勉强可行，但一旦面对真实世界的复杂性，系统就会崩溃，因为鸿沟太宽，直接跨越注定失败。清华大学智能产业研究院赵昊团队在 CVPR 2026 发表的四篇论文，共享着同一个设计哲学：当两种模态之间的鸿沟太大，真正的解法是为它们搭桥，找到一种“...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "CVPR研究聚焦AI“第三语言”，揭示多模态融合是下一代智能的关键突破点。"
    },
    {
     "title": "谷歌掀桌，一口气甩出16个AI王炸",
     "url": "https://www.leiphone.com/category/ai/k2qs0VRU74Ub6CCw.html",
     "source": "雷锋网 - AI",
     "date": "2026-05-22",
     "summary": "Google I/O 向来是全球开发者日历上最密集的信息节点，更是科技巨头宣示AI野心的最高舞台。2026年5月19日，加州山景城，Sundar Pichai 在两个小时内扔了16款核心产品更新。其中有5个产品各自坐拥30亿用户，Gemini 助手已有9亿用户，搜索AI Mode上线仅一年，月活突破10亿。没有\"One More Thing\"的悬念节奏，没有刻意留到最后的重磅彩蛋。Google选择了一种近乎轰炸式的信息发布策略：把所有东西一次性摊在桌面上。Pichai在台上说了一句耐人寻味的话：\"最前沿的Agent可能只触达过世界上0.1%的人。真正的问题，是怎么把这种前沿能力规模化交付...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "谷歌连发16个AI产品，显示巨头正以密集攻势抢占技术制高点。"
    },
    {
     "title": "Anthropic 花 3 亿美金买下 API「修路工」，打响连接层暗战",
     "url": "https://www.leiphone.com/category/ai/Yqq5YAFbgrGAusRi.html",
     "source": "雷锋网 - AI",
     "date": "2026-05-22",
     "summary": "5月18日，Anthropic宣布了一笔看似“平淡”的收购：买下纽约的开发者工具公司Stainless，估值超过3亿美元。被收购的公司Stainless不是一家普通的 SaaS 公司，它的特殊之处在于，它几乎服务了AI行业的所有头部玩家。其客户名单里躺着 OpenAI、Google、Cloudflare、Replicate 和 Runway 等一众硅谷巨头。Stainless 的核心业务听起来甚至有些枯燥：将结构化的 API 规范，自动转换为 TypeScript、Python、Go 等各种语言的 SDK（软件开发工具包）。同时提供CLI工具和MCP（Model Context Prot...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "Anthropic重金收购API基础设施，标志AI公司从模型竞争转向生态连接层布局。"
    },
    {
     "title": "FSD入华前奏？曝特斯拉国内9城急招智驾测试员；曾对标乔布斯！大疆的对手GoPro要被卖了：3年亏损近40亿；字节Seedance 2.1即将发布",
     "url": "https://www.leiphone.com/category/zaobao/kLtJrYfYVt7gE0sF.html",
     "source": "雷锋网 - AI",
     "date": "2026-05-22",
     "summary": "要闻提示1.FSD入华前奏？曝特斯拉国内急招智驾测试员，覆盖9大城市2.曾对标乔布斯！大疆的对手GoPro要被卖了：3年亏损近40亿3.字节Seedance 2.1即将发布，生成质量预计提升约20%4.月之暗面 Kimi 融资获国资加持，国智投、中国移动等央企巨头入场5.罗永浩遭前合伙人炮轰：一辈子都在装猛男，假装自己网络无敌6.DeepSeek回应信息“串台”BUG：特殊字符引发模型幻觉，不会泄露隐私7.网友建议微信新增聊天列表长按多选删除功能，微信员工回应8.谷歌深夜炸场！最强模型Gemini 3.5 Flash发布：速度快4倍，干翻GPT-5.5今日头条FSD入华前奏？曝特斯拉国内...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "FSD在华急招测试员、GoPro亏损、字节新模型发布，体现自动驾驶与消费电子格局剧变。"
    },
    {
     "title": "大模型狂飙的尽头，这家国产 GPU 厂商要把算力放在客厅",
     "url": "https://www.ifanr.com/1666549?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-05-21",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "国产GPU将算力推向客厅，预示AI从云端向家庭场景渗透的产业趋势。"
    },
    {
     "title": "早报｜448元，iPhone绝版配件回归/Meta用员工键鼠数据训练AI，扎克伯格：外包不够聪明/GoPro考虑出售或合并",
     "url": "https://www.ifanr.com/1666545?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-05-21",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "苹果经典配件回归，情怀与商业策略结合，考验市场反应。"
    },
    {
     "title": "对标特斯拉FSD，Momenta借势出海",
     "url": "https://www.leiphone.com/category/transportation/3chtnA4AOy1BLrwW.html",
     "source": "雷锋网 - AI",
     "date": "2026-05-21",
     "summary": "中国车企在过去几年间完成了产品、品牌和生态体系的逐步出海。而接下来，很可能是智驾技术的全球远征。MomentaCEO曹旭东判断，2028年将是海外城市NOA的拐点。Momenta和上汽MG做好了准备。北京车展上，双方联合宣布，下半年推出的全新轿跑车型MG07，搭载MomentaR7强化学习世界模型、X7大模型专用芯片，主打软硬一体路线。作为全球品牌，MG将以这款新车为进攻全球市场，而Momenta也将借助MG车型，深入特斯拉腹地，迎来海外市场布局的关键挑战。曹旭东在采访中透出兴奋与期待。他宣布，R7对标FSD V14，“我们要做中国年轻人的特斯拉。”中美两国“老司机”出海欧洲，谁会赢？曹...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "Momenta对标特斯拉FSD，中国自动驾驶出海竞争加剧。"
    },
    {
     "title": "DeepSeek组建Harness团队，非「超能力者」不要？中国AI开启「做产品」的关键一跳",
     "url": "https://www.leiphone.com/category/yanxishe/s8qOo3KbXsfmFxb6.html",
     "source": "雷锋网 - AI",
     "date": "2026-05-21",
     "summary": "大模型行业的战火，正在从“基座智商”烧向“终端入口”。5月19日，DeepSeek 资深研究员陈德里在小红书上发了一条招聘贴，证实内部正在组建全新的\"Harness\"（代码智能体工程）团队，目标直指 Anthropic 旗下的明星产品 Claude Code。这条消息的冲击力不在于“DeepSeek 要做编码工具了”，毕竟一家有模型的 AI 公司做编码工具再正常不过。真正值得注意的是：一家习惯于底层模型研究的公司，终于开始跨出实验室，亲自下场打造桌面端生产力入口。 招聘信息显示，DeepSeek目前在北京海淀区开放了Harness产品经理与研发工程师两个岗位。新成员将全程参与\"DeepS...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "DeepSeek组建精英团队，标志中国AI从技术转向产品化落地。"
    },
    {
     "title": "阿里云为什么「重构自己」？",
     "url": "https://www.leiphone.com/category/ai/nQVZmFcBopMuwsCZ.html",
     "source": "雷锋网 - AI",
     "date": "2026-05-21",
     "summary": "如果你连续几年参加云相关的峰会，今年就会有一个明显的感受：话题变了。过去我们聊云，我们在聊什么？一来是聊云，我们聊的是怎么把服务器搬上去。再后来，我们聊的是怎么在云上跑AI，买GPU、调模型、搭推理服务。可能大家还会有印象，去年这个时候，大家的焦点还是哪家云的GPU够便宜、模型推理延迟多少、算力供应够不够。但今年，行业的问题完全变了。今年云计算行业一个非常大的变化是，大家都开始聊，怎么让Agent自主使用云。5月20日，杭州，雷峰网参与了阿里云峰会，现场观察到阿里云把这个问题摆到了台面上，而且给出了一个系统性的回答。从发布搭载自研芯片真武M890的超节点服务器、推出国产第一的旗舰模型Qw...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "阿里云自我重构，为应对云计算市场变化与竞争压力。"
    },
    {
     "title": "OpenAI放弃的事，为什么阿里可能做得成",
     "url": "https://www.leiphone.com/category/industrynews/KHSMwS0aTqX2ip1W.html",
     "source": "雷锋网 - AI",
     "date": "2026-05-21",
     "summary": "一个完整的AI购物闭环出现了。5月11日，千问与淘宝全面打通。用户打开千问App，与AI对话，即可完成淘宝上的商品挑选、对比及下单购买。在淘宝端内，点击“千问AI购物助手”也可以体验AI购物。AI重塑电商讨论了两年，但未来的轮廓并不清晰。一边是全球科技巨头都在布局。ChatGPT、Gemini先后接入沃尔玛等零售商，亚马逊自研Rufus，微软与Stripe合作；另一边，最先下场的OpenAI在2026年初悄然收缩了Instant Checkout，放弃了在聊天界面内直接完成交易这个核心功能。一个被硅谷最强AI公司验证过\"做不通\"的事，阿里为什么还要做？千问接入淘宝的路径，和OpenAI到...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "阿里或能实现OpenAI未竟目标，因商业模式与生态优势不同。"
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
     "title": "OpenAI named a Leader in enterprise coding agents by Gartner",
     "url": "https://openai.com/index/gartner-2026-agentic-coding-leader",
     "source": "OpenAI Blog",
     "date": "2026-05-22",
     "summary": "OpenAI is named a leader in the 2026 Gartner Magic Quadrant for Enterprise AI Coding Agents, with Codex recognized for innovation and enterprise-scale deployment.",
     "is_new": false,
     "lang": "en",
     "interpretation": "企业级AI编程工具市场格局生变，OpenAI获权威认可。"
    },
    {
     "title": "D&B's database of 642 million businesses was built for humans, not AI agents. So they rebuilt it.",
     "url": "https://venturebeat.com/data/d-and-bs-database-of-642-million-businesses-was-built-for-humans-not-ai-agents-so-they-rebuilt-it",
     "source": "VentureBeat - AI",
     "date": "2026-05-22",
     "summary": "Dun & Bradstreet has spent over 180 years building a comprehensive commercial database. Its Commercial Graph, covering 642 million businesses and their relationships, corporate hierarchies and risk profiles, was designed for people. Credit analysts, risk managers and sales professionals who could...",
     "is_new": false,
     "lang": "en",
     "interpretation": "邓白氏为AI重构商业数据库，反映传统数据服务必须适配机器读取，否则将被淘汰。"
    },
    {
     "title": "datasette-agent-sprites 0.1a0",
     "url": "https://simonwillison.net/2026/May/21/datasette-agent-sprites/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-05-21",
     "summary": "Release: datasette-agent-sprites 0.1a0 A Datasette Agent plugin for running commands in a Fly Sprites sandbox. Tags: sandboxing, datasette, fly, datasette-agent",
     "is_new": false,
     "lang": "en",
     "interpretation": "精灵图生成代理工具初版上线，为游戏或UI开发提供自动化素材方案。"
    },
    {
     "title": "datasette-agent-charts 0.1a2",
     "url": "https://simonwillison.net/2026/May/21/datasette-agent-charts/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-05-21",
     "summary": "Release: datasette-agent-charts 0.1a2 \"View SQL query\" buttons below rendered charts. Tags: datasette, datasette-agent",
     "is_new": false,
     "lang": "en",
     "interpretation": "图表生成代理工具迭代，加速数据分析与可视化流程的智能化。"
    },
    {
     "title": "datasette-agent 0.1a3",
     "url": "https://simonwillison.net/2026/May/21/datasette-agent-2/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-05-21",
     "summary": "Release: datasette-agent 0.1a3 \"View SQL query\" buttons for both visible tables and collapsed SQL result tool calls. Don't display empty reasoning chunks Improved handling of truncated responses - table still displays to the user even if the SQL results were truncated when showing the agent. See ...",
     "is_new": false,
     "lang": "en",
     "interpretation": "数据代理核心框架更新，推动AI自主处理结构化数据的能力提升。"
    },
    {
     "title": "A 0.12% parameter add-on gives AI agents the working memory RAG can't",
     "url": "https://venturebeat.com/orchestration/a-0-12-parameter-add-on-gives-ai-agents-the-working-memory-rag-cant",
     "source": "VentureBeat - AI",
     "date": "2026-05-21",
     "summary": "AI agents forget. Every time a coding assistant loses track of a debugging thread, or a data analysis agent re-ingests the same context it already processed, the team pays in latency, token costs, and brittle workflows. The fix most teams reach for — expanding the context window or adding more RA...",
     "is_new": false,
     "lang": "en",
     "interpretation": "仅增加0.12%参数即可赋予AI工作记忆，弥补了RAG的短板。"
    },
    {
     "title": "Enterprise AI agents keep failing because they forget what they learned",
     "url": "https://venturebeat.com/orchestration/enterprise-ai-agents-keep-failing-because-they-forget-what-they-learned",
     "source": "VentureBeat - AI",
     "date": "2026-05-21",
     "summary": "RAG architectures are good at one thing: surfacing semantically relevant documents. That's also where they stop.A framework called a decision context graph addresses that gap by giving agents structured memory, time-aware reasoning, and explicit decision logic. Rippletide, a startup in the Neo4j ...",
     "is_new": false,
     "lang": "en",
     "interpretation": "企业AI因遗忘已学知识而频繁失败，记忆机制成关键瓶颈。"
    },
    {
     "title": "datasette-agent-charts 0.1a1",
     "url": "https://simonwillison.net/2026/May/20/datasette-agent-charts/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-05-20",
     "summary": "Release: datasette-agent-charts 0.1a1 More color! Bar and waffle charts without a color column are shaded by magnitude with a sequential color scheme; color columns holding text values use the observable10 categorical scheme. #2 Now checks execute-sql permission before running the query to find t...",
     "is_new": false,
     "lang": "en",
     "interpretation": "解读内容"
    },
    {
     "title": "The Open Agent Leaderboard",
     "url": "https://huggingface.co/blog/ibm-research/open-agent-leaderboard",
     "source": "Hugging Face Blog",
     "date": "2026-05-18",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "开放智能体排行榜发布，为评估AI自主能力提供统一标尺。"
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
     "is_new": true,
     "lang": "en",
     "interpretation": "旧金山非营利组织用机器人做饭，探索科技解决城市贫困与食品短缺的可行性。"
    },
    {
     "title": "Catch up on the Dialogues stage at Google I/O 2026.",
     "url": "https://blog.google/innovation-and-ai/technology/ai/io-2026-dialogues-recap/",
     "source": "Google AI Blog",
     "date": "2026-05-22",
     "summary": "A recap of the 2026 I/O Dialogues, where leaders discuss the future of AI, quantum computing, robotics and creativity.",
     "is_new": false,
     "lang": "en",
     "interpretation": "Google I/O 2026对话环节揭示行业趋势，开发者需关注平台最新战略方向。"
    },
    {
     "title": "芬兰大学说新型AI聊天机器人有助抵抗错误健康信息",
     "url": "<![CDATA[https://36kr.com/newsflashes/3822778010079362?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-05-24",
     "summary": "芬兰奥卢大学日前发布新闻公报说，该校研究人员与国际同行合作开发出一款人工智能（AI）聊天机器人，通过使用“认知接种”方法，可帮助人们抵抗健康领域的错误信息。",
     "is_new": true,
     "lang": "zh",
     "interpretation": "芬兰高校用AI对抗健康谣言，为信息治理提供技术新思路。"
    },
    {
     "title": "36氪首发 | 北大项目孵化，国内首家原生机器人“大脑芯片”企业获数亿元融资",
     "url": "<![CDATA[https://36kr.com/p/3821371042877575?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-05-23",
     "summary": "作者 | 乔钰杰 编辑 | 袁斯来 硬氪获悉，北京维泛智能科技有限公司（以下简称“维泛智能”）近日完成数亿元种子轮融资，由中关村资本及旗下启航投资联合领投，上海未来产业基金、石溪资本、佰维存储、燕创集团、海益投资、探元创投共同投资。 维泛智能成立于2025年5月，孵化自北京大学类脑芯片实验室（PAICORE Lab），专注于具身智能“大小脑”融合芯片研发，致力于打造全国产化机器人核心计算方案。 联合创始人殷积磊毕业于北京大学，拥有超过20年半导体行业经验，曾任知存科技COO兼研发副总裁，以及IBM、GlobalFoundries芯片研发总监，并曾在MTK、VIA等企业从事芯片研发工作。团...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "原生机器人“大脑芯片”获融资，标志国产硬件自主化突破。"
    },
    {
     "title": "新加坡工业机器人公司Doozy Robotics获得种子轮融资",
     "url": "https://cn.technode.com/post/2026-05-22/doozy-robotics-seed-funding-industrial-robots/",
     "source": "动点科技 - AI",
     "date": "2026-05-22",
     "summary": "具体金额未披露",
     "is_new": false,
     "lang": "zh",
     "interpretation": "新加坡工业机器人获融资，显示东南亚智能制造赛道升温。"
    },
    {
     "title": "独家丨前美团外卖技术负责人入局餐饮具身模型，「元节智能」获千万级种子轮融资",
     "url": "https://www.leiphone.com/category/robot/c3WgJgUydmWpEoWz.html",
     "source": "雷锋网 - AI",
     "date": "2026-05-22",
     "summary": "雷峰网独家获悉，具身智能初创公司「元节智能（AtomBite.AI）」已于近期完成千万级种子轮融资。本轮由英诺科创基金领投，水木清华校友种子基金、知名投资人个人跟投。据悉，本轮融资将主要用于餐饮场景具身世界模型研发、核心产品打磨及落地。今年3月底元节智能才在苏州注册成立，成立不到两个月即完成首轮融资，同时已获得了国内外多家头部公司产品合作部署意向。据了解，企业核心团队汇聚了来自清华、中科大、美团、地平线等顶尖高校与科技公司的研发负责人及精锐人才，团队背景实力雄厚。 01 清华博士+美团产研班底 元节智能创始人兼CEO王栋博士师从中国人工智能泰斗、清华大学张钹院士，深耕人工智能领域十余年，...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "前美团技术负责人获投餐饮具身模型，预示AI在垂直场景的落地竞争加剧。"
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
     "title": "AI is being used to resurrect the voices of dead pilots",
     "url": "https://techcrunch.com/2026/05/22/ai-is-being-used-to-resurrect-the-voices-of-dead-pilots/",
     "source": "TechCrunch - AI",
     "date": "2026-05-22",
     "summary": "People used AI on a spectrogram image of cockpit recordings to reconstruct them, forcing the NTSB to temporarily block access to its docket system.",
     "is_new": false,
     "lang": "en",
     "interpretation": "用AI还原逝者声音涉及伦理争议，技术滥用可能冲击情感与隐私边界。"
    },
    {
     "title": "US scrambles to stop Internet users re-creating dead pilots’ voices",
     "url": "https://arstechnica.com/ai/2026/05/ai-users-re-create-dead-pilots-voices-from-crash-investigation-docs/",
     "source": "ArsTechnica - AI",
     "date": "2026-05-22",
     "summary": "Workaround flouts law that bans NTSB disclosures of cockpit audio recordings.",
     "is_new": false,
     "lang": "en",
     "interpretation": "美国紧急阻止AI模仿阵亡飞行员声音，凸显深度伪造伦理危机。"
    },
    {
     "title": "In desperate times, graduates find hope in humiliating tech CEOs",
     "url": "https://www.theverge.com/ai-artificial-intelligence/935602/graduates-boo-ai-ceos",
     "source": "The Verge - AI",
     "date": "2026-05-21",
     "summary": "University graduates are booing and heckling corporate executives who praise AI during their commencement ceremonies, and the only people who seem to be genuinely surprised by this are the executives themselves. In a procession of viral videos, 2026 commencement speakers like former Google CEO Er...",
     "is_new": false,
     "lang": "en",
     "interpretation": "毕业生通过羞辱科技CEO宣泄就业焦虑，反映年轻一代对行业精英的信任危机。"
    },
    {
     "title": "SpaceX Listed Grok’s ‘Spicy’ Mode as a Risk in Its IPO Filing",
     "url": "https://www.wired.com/story/spacex-ipo-grok-spicy-mode-risks/",
     "source": "Wired - AI",
     "date": "2026-05-21",
     "summary": "The rocket company has set aside more than $500 million for potential litigation losses, in part to account for complaints alleging that Grok created sexualized images.",
     "is_new": false,
     "lang": "en",
     "interpretation": "SpaceX将AI“暴躁模式”列为风险，凸显AI不可控性对商业运营的潜在威胁。"
    },
    {
     "title": "New ways to create and get things done in Google Workspace",
     "url": "https://blog.google/products-and-platforms/products/workspace/workspace-updates/",
     "source": "Google AI Blog",
     "date": "2026-05-19",
     "summary": "Announcing new voice capabilities in Gmail, Docs and Keep, a new design tool called Google Pics and updates to AI Inbox.",
     "is_new": false,
     "lang": "en",
     "interpretation": "Google Workspace新增AI功能，办公效率与创作方式迎来升级。"
    }
   ]
  },
  {
   "name": "AI硬件与芯片",
   "icon": "💾",
   "color": "#0891b2",
   "count": 3,
   "cards": [
    {
     "title": "Google I/O showed how the path for AI-driven science is shifting",
     "url": "https://www.technologyreview.com/2026/05/22/1137813/google-i-o-showed-how-the-path-for-ai-science-is-shifting/",
     "source": "MIT Technology Review - AI",
     "date": "2026-05-22",
     "summary": "During Tuesday’s Google I/O keynote, Demis Hassabis, the CEO of Google DeepMind, proclaimed that we are currently “standing in the foothills of the singularity.” It was a striking statement—the singularity is the theoretical future moment when AI rapidly exceeds human intelligence and dramaticall...",
     "is_new": false,
     "lang": "en",
     "interpretation": "Google I/O表明AI驱动科研路径正从理论转向落地，产学研合作模式将重塑。"
    },
    {
     "title": "一季度韩国前五大企业出口占比达44%",
     "url": "<![CDATA[https://36kr.com/newsflashes/3822778731368838?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-05-24",
     "summary": "周日发布数据显示，受人工智能热潮带动，全球存储芯片需求激增，三星电子、SK海力士等五家头部企业，一季度出口额占韩国出口总额比重约44%。",
     "is_new": true,
     "lang": "zh",
     "interpretation": "韩国头部企业出口集中度攀升，反映经济结构依赖大财团的隐忧。"
    },
    {
     "title": "Manus创始人计划融资10亿美元回购公司；曝知名招聘平台主动申请破产；特斯拉官宣：监督版FSD登陆中国！",
     "url": "https://www.leiphone.com/category/zaobao/qFYlp8Q5YFJ9KJRc.html",
     "source": "雷锋网 - AI",
     "date": "2026-05-22",
     "summary": "要闻提示1.CEO曾称大厂高薪惯坏了年轻人！招聘平台“拉勾网”被曝主动申请破产2.Manus创始人计划融资10亿美元回购公司3.山姆超市，突然被曝！网友：像在吃自助餐4.特斯拉官宣：监督版FSD登陆中国！5.为何小米汽车要执着于纽北刷圈？CTO 胡峥楠回应6.京东零售高层大调整：杨博接棒汽车事业部，钟波执掌拍卖业务7.英特尔 CEO 陈立武铁腕新规：若芯片两次流片未能量产，员工将被炒鱿鱼8.供应链传闻苹果 iPhone 2027 年会上类四曲面屏 ID今日头条Manus创始人计划融资10亿美元回购公司5月21日，据外媒报道，Manus三位创始人肖弘、季逸超、张涛正在讨论从外部投资者处融资...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "Manus融资、招聘平台破产、FSD入华，反映AI行业资本洗牌与自动驾驶加速。"
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
     "title": "How VCs and founders use inflated ‘ARR’ to crown AI startups",
     "url": "https://techcrunch.com/2026/05/22/how-vcs-and-founders-use-inflated-arr-to-kingmake-ai-startups/",
     "source": "TechCrunch - AI",
     "date": "2026-05-22",
     "summary": "Some AI startups are stretching traditional revenue metrics when talking about progress publicly. And their investors are fully aware.",
     "is_new": false,
     "lang": "en",
     "interpretation": "虚报ARR数据成风，AI创投圈泡沫化风险加剧，投资者需警惕估值水分。"
    },
    {
     "title": "Elon Musk can’t hear you over the sound of his $1.75 trillion IPO",
     "url": "https://techcrunch.com/podcast/elon-musk-cant-hear-you-over-the-sound-of-his-1-75-trillion-ipo/",
     "source": "TechCrunch - AI",
     "date": "2026-05-22",
     "summary": "The SpaceX S-1 is finally here, and the story it tells goes way further than rockets. The filing runs to 36 pages of risk factors alone, and the numbers inside match the ambition: a $28 trillion total addressable market, a pay package tied to establishing a Mars colony, and a valuation target tha...",
     "is_new": false,
     "lang": "en",
     "interpretation": "马斯克旗下公司1.75万亿IPO规模惊人，或重塑资本市场对科技股的估值逻辑。"
    },
    {
     "title": "SpaceX files to go public, and the math requires a little faith",
     "url": "https://techcrunch.com/video/spacex-files-to-go-public-and-the-math-requires-a-little-faith/",
     "source": "TechCrunch - AI",
     "date": "2026-05-22",
     "summary": "The SpaceX S-1 is finally here, and the story it tells goes way further than rockets. The filing runs to 36 pages of risk factors alone, and the numbers inside match the ambition: a $28 trillion total addressable market, a pay package tied to establishing a Mars colony, and a valuation target tha...",
     "is_new": false,
     "lang": "en",
     "interpretation": "SpaceX上市估值依赖未来预期，投资者需权衡航天业高投入与盈利不确定性。"
    },
    {
     "title": "Can OpenAI’s ‘Master of Disaster’ Fix AI’s Reputation Crisis?",
     "url": "https://www.wired.com/story/openai-chris-lehane-global-affairs-pr/",
     "source": "Wired - AI",
     "date": "2026-05-22",
     "summary": "Global affairs chief Chris Lehane wants to tone down the debate over AI’s societal impacts—and get states to pass laws that won’t derail OpenAI’s meteoric rise.",
     "is_new": false,
     "lang": "en",
     "interpretation": "OpenAI任命危机管理专家，试图扭转公众对AI安全的信任危机。"
    },
    {
     "title": "FTC to Require Cox Media Group, Two Other Firms to Pay Nearly $1 Million to Settle Charges They Deceived Customers About “Active Listening” AI-Powered Marketing Service",
     "url": "https://simonwillison.net/2026/May/22/ftc-active-listening/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-05-22",
     "summary": "FTC to Require Cox Media Group, Two Other Firms to Pay Nearly $1 Million to Settle Charges They Deceived Customers About “Active Listening” AI-Powered Marketing Service Back in 2024 Cox Media Group were caught trying to sell advertisers packages based on \"active listening\", with this deck which c...",
     "is_new": false,
     "lang": "en",
     "interpretation": "FTC重罚虚假AI监听营销，警示企业不得滥用技术概念欺骗消费者。"
    },
    {
     "title": "Spotify and Universal Music strike deal allowing fan-made AI covers and remixes",
     "url": "https://techcrunch.com/2026/05/21/spotify-and-universal-music-strike-deal-allowing-fan-made-ai-covers-and-remixes/",
     "source": "TechCrunch - AI",
     "date": "2026-05-21",
     "summary": "Spotify is partnering with Universal Music Group￼ to let Premium subscribers create AI-generated song covers and remixes, with participating artists receiving a share of the revenue.",
     "is_new": false,
     "lang": "en",
     "interpretation": "Spotify与环球音乐允许AI翻唱，版权规则重大突破，音乐创作权向用户倾斜。"
    },
    {
     "title": "The next phase of OpenAI’s Education for Countries",
     "url": "https://openai.com/index/the-next-phase-of-education-for-countries",
     "source": "OpenAI Blog",
     "date": "2026-05-20",
     "summary": "OpenAI advances Education for Countries, expanding AI adoption in schools with new partnerships, teacher training, and tools to improve global learning outcomes.",
     "is_new": false,
     "lang": "en",
     "interpretation": "OpenAI教育计划进入新阶段，AI将重塑国家层面的学习模式。"
    },
    {
     "title": "Green steel startup Boston Metal is doubling down on critical metals",
     "url": "https://www.technologyreview.com/2026/05/20/1137523/boston-metal-funding-critical-metals/",
     "source": "MIT Technology Review - AI",
     "date": "2026-05-20",
     "summary": "The startup Boston Metal has raised a $75 million funding round to produce critical metals, MIT Technology Review can exclusively report. The company has been known largely for its efforts to clean up steel production, an industry that’s responsible for about 8% of global greenhouse emissions tod...",
     "is_new": false,
     "lang": "en",
     "interpretation": "解读内容"
    },
    {
     "title": "Introducing OpenAI for Singapore",
     "url": "https://openai.com/index/introducing-openai-for-singapore",
     "source": "OpenAI Blog",
     "date": "2026-05-19",
     "summary": "OpenAI for Singapore launches a multi-year AI partnership to expand deployment, build local talent, and support businesses and public services with AI.",
     "is_new": false,
     "lang": "en",
     "interpretation": "新加坡成OpenAI新据点，加速亚太地区AI布局与竞争。"
    },
    {
     "title": "Advancing content provenance for a safer, more transparent AI ecosystem",
     "url": "https://openai.com/index/advancing-content-provenance",
     "source": "OpenAI Blog",
     "date": "2026-05-19",
     "summary": "OpenAI advances AI content provenance with Content Credentials, SynthID, and a verification tool to help people identify and trust AI-generated media.",
     "is_new": false,
     "lang": "en",
     "interpretation": "推动内容溯源技术，为AI生成内容的可信度与安全保驾护航。"
    },
    {
     "title": "圆桌对话：当AI进入产业前线：未来最稀缺的AI人才，会是谁？| 2026AI Partner·北京亦庄AI+产业大会",
     "url": "<![CDATA[https://36kr.com/p/3821542483857801?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-05-23",
     "summary": "稀缺的，到底是懂AI的人，还是懂业务的人？ 一个反直觉的判断——懂AI这件事正在快速贬值，而能在关键低频决策中做出判断的人，才是未来的稀缺品。高频重复的工作最容易被AI替代，但在打造爆品、建立品牌等低频高影响力的决策上，人的判断依然不可替代，企业AI转型的最大卡点也不是技术或数据，而是“想不到应用场景”， 当前AI的利润大头仍在基础设施层，应用端的ROI尚未完全释放，但拐点会比预想来得更快。 以下为圆桌对话内容，经36氪整理编辑： 郑王宇丨36氪基金投资副总裁（主持） 龚毅丨尼尔森IQ 通信及科技业务总经理 罗飞丨华科智能AI研究院院长 林海卓丨卓源亚洲创始合伙人、董事长 郑王宇：各位老...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "聚焦AI产业人才稀缺性，影响未来教育、招聘与职业规划。"
    },
    {
     "title": "阿里国际接近盈利背后，速卖通品牌化与AI提效双线并进",
     "url": "https://www.leiphone.com/category/industrynews/g6NLstG8StqeQc8p.html",
     "source": "雷锋网 - AI",
     "date": "2026-05-21",
     "summary": "阿里最新一季财报披露了一个容易被外界忽视但意义重大的数字：阿里国际本季度经调整EBITA亏损仅剩1.38亿元，已经接近盈亏平衡。阿里国际的亏损收窄并非偶然。财报给出的解释是“速卖通运营效率的显著提升，以及多项业务的效率提升所致”。这听起来像是一句标准的财报话术，但拆解开来，背后是一套已经跑通的商业逻辑。过去一年，速卖通在物流优化上的投入开始产生回报。Choice业务的单位经济效益环比持续改善，仓配网络覆盖27个重点国家，在4个国家的重点城市实现次日达。物流成本的下降直接转化为利润空间的释放。与此同时，平台在用户获取上的策略也在调整：从过去依赖补贴拉新，转向通过品牌升级提升用户质量和客单价...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "速卖通品牌化与AI提效双驱动，阿里国际接近盈利关键。"
    }
   ]
  },
  {
   "name": "AI安全与对齐",
   "icon": "🛡️",
   "color": "#dc2626",
   "count": 3,
   "cards": [
    {
     "title": "Americans can’t spot a deepfake, and that’s a business crisis, not just a consumer problem",
     "url": "https://venturebeat.com/security/americans-cant-spot-a-deepfake-and-thats-a-business-crisis-not-just-a-consumer-problem",
     "source": "VentureBeat - AI",
     "date": "2026-05-21",
     "summary": "Presented by Veriff Americans can’t reliably distinguish real from AI-generated content, and that’s not just a media literacy problem; it’s a direct threat to how businesses verify identity online.New research finds that while many people are aware of deepfakes, their ability to distinguish them ...",
     "is_new": false,
     "lang": "en",
     "interpretation": "美国人难辨深度伪造，企业面临信任危机，影响远超消费者层面。"
    },
    {
     "title": "The Download: online safety’s future and climate tech’s big pivot",
     "url": "https://www.technologyreview.com/2026/05/21/1137733/the-download-online-safety-climate-tech-pivot/",
     "source": "MIT Technology Review - AI",
     "date": "2026-05-21",
     "summary": "This is today’s edition of The Download, our weekday newsletter that provides a daily dose of what’s going on in the world of technology. Tech researchers are suing the Trump administration over the future of online safety For months, the Trump administration has been going after researchers who ...",
     "is_new": false,
     "lang": "en",
     "interpretation": "网络安全未来与气候技术转向，两大领域正经历根本性变革。"
    },
    {
     "title": "用AI来管公司，Moka推出三款AI HR工具｜涌现新栏目",
     "url": "<![CDATA[https://36kr.com/p/3819979202253189?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-05-23",
     "summary": "作者｜梁键强 编辑｜王毓婵 一句话介绍 Moka为AI人力资源软件服务商，早期从智能化招聘管理系统起步，后逐步扩展至更完整的HR管理系统。5月，Moka上线了招聘Eva、人事Eva和BPEva三款AI HR产品。 招聘Eva覆盖招聘全流程，辅助企业完成识人、筛选和面试；人事Eva聚焦报表处理、流程流转和员工咨询等重复事务；BPEva则用于动态更新人才画像，辅助企业进行人才识别和组织决策。 支撑这三款产品的是Moka AI工坊，它相当于底层能力平台，可以让企业用业务语言描述需求，具有快速响应、个性化定制和安全上线等能力。 图片来源：Moka 团队介绍 Moka联合创始人兼CEO李国兴，本科...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "Moka推出AI HR工具，预示企业管理智能化进入实操阶段。"
    }
   ]
  },
  {
   "name": "其他AI资讯",
   "icon": "🔮",
   "color": "#6b7280",
   "count": 54,
   "cards": [
    {
     "title": "I tried Amazon’s Bee wearable and am both intrigued and slightly creeped out",
     "url": "https://techcrunch.com/2026/05/24/i-tried-amazons-bee-wearable-and-am-both-intrigued-and-slightly-creeped-out/",
     "source": "TechCrunch - AI",
     "date": "2026-05-24",
     "summary": "Like other AI wearables, Amazon's Bee offers an odd combination of convenience and privacy anxiety.",
     "is_new": true,
     "lang": "en",
     "interpretation": "亚马逊可穿戴设备引发隐私与新奇感的矛盾，反映科技便利与个人边界的冲突。"
    },
    {
     "title": "Whatever the mirror test tells us, beluga whales pass it",
     "url": "https://arstechnica.com/science/2026/05/belugas-may-pass-the-mirror-test-but-does-the-mirror-test-still-pass/",
     "source": "ArsTechnica - AI",
     "date": "2026-05-24",
     "summary": "The white whales join the short, contested list of animals that see themselves.",
     "is_new": true,
     "lang": "en",
     "interpretation": "白鲸通过镜像测试挑战传统自我认知标准，或推动动物意识研究新方向。"
    },
    {
     "title": "Hackers are learning to exploit chatbot ‘personalities’",
     "url": "https://www.theverge.com/column/935545/hackers-ai-chatbots",
     "source": "The Verge - AI",
     "date": "2026-05-24",
     "summary": "This is The Stepback, a weekly newsletter breaking down one essential story from the tech world. For more on AI mischief, follow Robert Hart. The Stepback arrives in our subscribers' inboxes at 8AM ET. Opt in for The Stepback here. How it started Hacking the first generation of AI chatbots was a ...",
     "is_new": true,
     "lang": "en",
     "interpretation": "黑客利用AI聊天机器人“人格”漏洞攻击，凸显大模型安全防御的紧迫性。"
    },
    {
     "title": "Ferrari is using IBM’s AI to create F1 superfans",
     "url": "https://techcrunch.com/2026/05/23/ferrari-is-using-ai-to-create-f1-superfans/",
     "source": "TechCrunch - AI",
     "date": "2026-05-23",
     "summary": "IBM and Scuderia Ferrari HP take TechCrunch inside how they are redefining the fan experience.",
     "is_new": false,
     "lang": "en",
     "interpretation": "法拉利借IBM人工智能培养F1超级粉丝，预示品牌营销将深度依赖数据与AI。"
    },
    {
     "title": "Elon Musk has given up on solar power (on Earth)",
     "url": "https://techcrunch.com/2026/05/23/elon-musk-has-given-up-on-solar-power-on-earth/",
     "source": "TechCrunch - AI",
     "date": "2026-05-23",
     "summary": "Elon Muks's xAI has gone all in on natural gas, while SpaceX is obsessed with orbital data centers. What happened to the \"solar-electric economy\" he promised?",
     "is_new": false,
     "lang": "en",
     "interpretation": "马斯克放弃地球太阳能业务，折射其战略重心转向太空能源与火星计划。"
    },
    {
     "title": "SpaceX's Starship V3—still a work in progress—mostly successful on first flight",
     "url": "https://arstechnica.com/space/2026/05/spacexs-starship-v3-still-a-work-in-progress-mostly-successful-on-first-flight/",
     "source": "ArsTechnica - AI",
     "date": "2026-05-23",
     "summary": "SpaceX has more to prove before flying Starship all the way to low-Earth orbit.",
     "is_new": false,
     "lang": "en",
     "interpretation": "星舰V3首飞虽未完美但关键成功，为人类重返月球和火星任务积累实战数据。"
    },
    {
     "title": "Two space shuttle-era spacewalkers enter Astronaut Hall of Fame",
     "url": "https://arstechnica.com/space/2026/05/two-space-shuttle-era-spacewalkers-enter-astronaut-hall-of-fame/",
     "source": "ArsTechnica - AI",
     "date": "2026-05-23",
     "summary": "\"Two astronauts whose careers embody excellence, leadership, and service.\"",
     "is_new": false,
     "lang": "en",
     "interpretation": "航天飞机时代宇航员入选名人堂，致敬太空探索先驱并激励新一代航天人。"
    },
    {
     "title": "China’s shark finning could lead to US seafood sanctions",
     "url": "https://arstechnica.com/tech-policy/2026/05/chinas-shark-finning-could-lead-to-us-seafood-sanctions/",
     "source": "ArsTechnica - AI",
     "date": "2026-05-23",
     "summary": "A formal petition to the US government calls for sanctions on Chinese seafood imports.",
     "is_new": false,
     "lang": "en",
     "interpretation": "中国鱼翅贸易或遭美国制裁，反映海洋生态保护正成为国际贸易博弈新筹码。"
    },
    {
     "title": "On the <dl>",
     "url": "https://simonwillison.net/2026/May/23/on-the-dl/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-05-23",
     "summary": "On the I learned a few new-to-me things about the element from this article by Ben Meyer: A can be followed by multiple You can optionally group the and elements in a for styling - but only a . You can label them using ARIA. They've been called \"description lists\", not \"definition lists\", since a...",
     "is_new": false,
     "lang": "en",
     "interpretation": "该HTML标签的语义化用法争议，反映网页标准化与开发者习惯的冲突。"
    },
    {
     "title": "Google goes for the glitter with disco-ball icons: ‘Are y’all sure you still want this?’",
     "url": "https://techcrunch.com/2026/05/22/google-goes-for-the-glitter-with-disco-ball-icons-are-yall-sure-you-still-want-this/",
     "source": "TechCrunch - AI",
     "date": "2026-05-22",
     "summary": "You can now disco ball-ify your entire Pixel home screen, says Google.",
     "is_new": false,
     "lang": "en",
     "interpretation": "谷歌迪斯科球图标设计遭质疑，暴露科技巨头在审美与用户需求间的摇摆。"
    },
    {
     "title": "You can no longer Google the word ‘disregard’",
     "url": "https://techcrunch.com/2026/05/22/you-can-no-longer-google-the-word-disregard/",
     "source": "TechCrunch - AI",
     "date": "2026-05-22",
     "summary": "After Google Search's AI update, the word \"disregard\" now effectively breaks the search interface.",
     "is_new": false,
     "lang": "en",
     "interpretation": "谷歌屏蔽“disregard”搜索词，暗示算法审查机制存在不可预测的干预风险。"
    },
    {
     "title": "Specialization Beats Scale: A Strategic Variable Most AI Procurement Decisions Overlook",
     "url": "https://huggingface.co/blog/Dharma-AI/specialization-beats-scale",
     "source": "Hugging Face Blog",
     "date": "2026-05-22",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "采购AI时专业化比规模化更重要，企业忽视垂直场景适配将导致资源浪费。"
    },
    {
     "title": "Four Russian satellites are now within striking distance of an ICEYE radarsat",
     "url": "https://arstechnica.com/space/2026/05/a-satellite-company-supporting-ukraine-appears-to-be-in-russias-crosshairs/",
     "source": "ArsTechnica - AI",
     "date": "2026-05-22",
     "summary": "\"This capability is not common for satellites conducting typical missions.\"",
     "is_new": false,
     "lang": "en",
     "interpretation": "俄卫星逼近西方雷达卫星，太空军事化风险加剧。"
    },
    {
     "title": "Ebola outbreak now third largest recorded and \"spreading rapidly\"",
     "url": "https://arstechnica.com/health/2026/05/ebola-outbreak-now-third-largest-recorded-and-spreading-rapidly/",
     "source": "ArsTechnica - AI",
     "date": "2026-05-22",
     "summary": "Ebola outbreak risk level increased as deaths reach 177 with nearly 750 cases.",
     "is_new": false,
     "lang": "en",
     "interpretation": "埃博拉疫情规模创历史第三，快速扩散威胁全球卫生安全。"
    },
    {
     "title": "First-generation Chromecast users stressed by devices suddenly failing",
     "url": "https://arstechnica.com/gadgets/2026/05/original-chromecast-lives-devices-back-on-after-mysteriously-breaking-this-week/",
     "source": "ArsTechnica - AI",
     "date": "2026-05-22",
     "summary": "Google tells Ars it fixed the first-gen Chromecast bug.",
     "is_new": false,
     "lang": "en",
     "interpretation": "初代Chromecast突然变砖，暴露智能硬件计划性淘汰问题。"
    },
    {
     "title": "Trump FCC asks public to comment on whether ABC's The View is a news show",
     "url": "https://arstechnica.com/tech-policy/2026/05/trump-fcc-asks-public-to-comment-on-whether-abcs-the-view-is-a-news-show/",
     "source": "ArsTechnica - AI",
     "date": "2026-05-22",
     "summary": "FCC seeks opinions on whether ABC show's decisions are \"based on newsworthiness.\"",
     "is_new": false,
     "lang": "en",
     "interpretation": "FCC要求公众定义《观点》节目性质，折射媒体监管政治化倾向。"
    },
    {
     "title": "The Boys is dead. Long live Vought Rising.",
     "url": "https://arstechnica.com/culture/2026/05/the-boys-is-dead-long-live-vought-rising/",
     "source": "ArsTechnica - AI",
     "date": "2026-05-22",
     "summary": "\"There's a brighter future. All we need to do is take it.\"",
     "is_new": false,
     "lang": "en",
     "interpretation": "《黑袍纠察队》衍生剧启动，超级英雄IP宇宙化扩张加速。"
    },
    {
     "title": "Police boast of hacking VPN where criminals \"believed themselves to be safe\"",
     "url": "https://arstechnica.com/tech-policy/2026/05/police-boast-of-hacking-vpn-where-criminals-believed-themselves-to-be-safe/",
     "source": "ArsTechnica - AI",
     "date": "2026-05-22",
     "summary": "Law enforcement intercepted VPN traffic, seized domains, and arrested its operator.",
     "is_new": false,
     "lang": "en",
     "interpretation": "警方炫耀攻破犯罪VPN，警示加密工具并非绝对安全。"
    },
    {
     "title": "Review: The Mandalorian and Grogu is ... fine",
     "url": "https://arstechnica.com/culture/2026/05/review-the-mandalorian-and-grogu-is-average-star-wars-no-more-no-less/",
     "source": "ArsTechnica - AI",
     "date": "2026-05-22",
     "summary": "The plot is predictable, the fight scenes are meh, but you can't beat the charm of that little green Grogu.",
     "is_new": false,
     "lang": "en",
     "interpretation": "《曼达洛人》新作评价平庸，星战IP创新乏力引担忧。"
    },
    {
     "title": "Google’s AI search is so broken it can ‘disregard’ what you’re looking for",
     "url": "https://www.theverge.com/tech/936176/google-ai-overviews-search-disregard",
     "source": "The Verge - AI",
     "date": "2026-05-22",
     "summary": "Google's AI Overviews are running into an interesting problem right now. Earlier on Friday, if you searched for the term \"disregard,\" the AI Overview section would include a response like what you'd see from a more traditional AI chatbot instead of the typical AI summary, as spotted on X. As you ...",
     "is_new": false,
     "lang": "en",
     "interpretation": "谷歌AI搜索无视用户需求，暴露大模型逻辑缺陷与体验倒退。"
    },
    {
     "title": "Elon, stop trying to make Grok happen",
     "url": "https://www.theverge.com/ai-artificial-intelligence/936219/elon-stop-trying-to-make-grok-happen",
     "source": "The Verge - AI",
     "date": "2026-05-22",
     "summary": "There is a harsh truth about Elon Musk's \"truth-seeking\" AI chatbot Grok: It's not very good, and not many people are using it. That's the takeaway of a new Reuters report, which found that Grok barely appears in federal records of how the US government used AI last year. It's not the only sign x...",
     "is_new": false,
     "lang": "en",
     "interpretation": "马斯克强推Grok遭抵制，AI产品过度营销引发用户反感。"
    },
    {
     "title": "The literary world isn’t prepared for AI",
     "url": "https://www.theverge.com/tech/936073/ai-writing-granta-commonwealth-prize",
     "source": "The Verge - AI",
     "date": "2026-05-22",
     "summary": "Since 2012, the British literary magazine Granta has published the regional winners of the annual Commonwealth Short Story Prize. This year, however, there was something off about one of the selections for the prestigious award: It appears to have been written by AI. Jamir Nazir's \"The Serpent in...",
     "is_new": false,
     "lang": "en",
     "interpretation": "文学界尚未准备好应对AI创作带来的版权与原创性冲击。"
    },
    {
     "title": "Spotify says its AI remix tool is for superfans, but I’m not convinced",
     "url": "https://www.theverge.com/ai-artificial-intelligence/936072/spotify-umg-ai-music-remix-cover-superfan",
     "source": "The Verge - AI",
     "date": "2026-05-22",
     "summary": "AI covers and remixes of songs are already a blight on the internet. Spotify, YouTube, TikTok, and Instagram are awash in flat reggae versions of \"Smells Like Teen Spirit,\" dinky country renditions of The Weeknd, and monotonous Motown reimaginings of AC/DC. Now, a new tool from Spotify will make ...",
     "is_new": false,
     "lang": "en",
     "interpretation": "Spotify的AI混音工具看似讨好粉丝，实则可能削弱音乐人价值。"
    },
    {
     "title": "Samsung’s memory chip employees negotiated $340,000 bonuses this year",
     "url": "https://www.theverge.com/tech/936002/samsung-memory-chip-employees-deal-strike-bonus",
     "source": "The Verge - AI",
     "date": "2026-05-22",
     "summary": "Details have emerged about a tentative deal struck between Samsung and semiconductor employees who had threatened to strike. The deal reportedly makes some workers eligible for average annual bonuses of $340,000. The proposed 18-day strike had hinged on Samsung's bonus cap for employees in the se...",
     "is_new": false,
     "lang": "en",
     "interpretation": "三星芯片员工高额奖金反映存储芯片行业竞争激烈与利润丰厚。"
    },
    {
     "title": "How Virgin Atlantic ships faster with Codex",
     "url": "https://openai.com/index/virgin-atlantic",
     "source": "OpenAI Blog",
     "date": "2026-05-22",
     "summary": "How Virgin Atlantic used Codex to ship its revamped mobile app on a fixed holiday travel deadline, reaching near-total unit test coverage and zero P1 defects.",
     "is_new": false,
     "lang": "en",
     "interpretation": "维珍航空用AI优化物流，展示企业级AI降本增效的实战价值。"
    },
    {
     "title": "Even If You Hate AI, You Will Use Google AI Search",
     "url": "https://www.wired.com/story/even-if-you-hate-ai-you-will-use-google-ai-search/",
     "source": "Wired - AI",
     "date": "2026-05-22",
     "summary": "The search giant’s AI-crafted answers are so convenient, you’ll be sucked in—to the detriment of the web and the artists and thinkers behind it.",
     "is_new": false,
     "lang": "en",
     "interpretation": "谷歌AI搜索将成不可回避的工具，用户习惯面临强制重塑。"
    },
    {
     "title": "The Gulf’s AI Boom Has an Undersea Cable Problem",
     "url": "https://www.wired.com/story/the-gulfs-ai-boom-has-an-undersea-cable-problem/",
     "source": "Wired - AI",
     "date": "2026-05-22",
     "summary": "Hyperscalers are pushing the Gulf to rethink internet infrastructure as AI raises the stakes of cable disruptions.",
     "is_new": false,
     "lang": "en",
     "interpretation": "海湾国家AI算力扩张受限于海底电缆，基础设施短板凸显。"
    },
    {
     "title": "The memory shortage is causing a repricing of consumer electronics",
     "url": "https://simonwillison.net/2026/May/22/memory-shortage/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-05-22",
     "summary": "The memory shortage is causing a repricing of consumer electronics David Oks provides the clearest explanation I've seen yet of why consumer products that use memory are likely to get significantly more expensive over the next few years. The short version is that memory manufacturers - of which t...",
     "is_new": false,
     "lang": "en",
     "interpretation": "存储芯片短缺推高消费电子价格，产业链成本压力传导至终端。"
    },
    {
     "title": "Valid certificates, stolen accounts: how attackers broke npm's last trust signal",
     "url": "https://venturebeat.com/security/npm-sigstore-provenance-stolen-identity-audit-grid-2026",
     "source": "VentureBeat - AI",
     "date": "2026-05-22",
     "summary": "On May 19, 633 malicious npm package versions passed Sigstore provenance verification. They were cleared by the system because the attacker had generated valid signing certificates from a compromised maintainer account.Sigstore worked exactly as designed: it verified the package was built in a CI...",
     "is_new": false,
     "lang": "en",
     "interpretation": "npm信任机制被攻破，暴露软件供应链安全漏洞，开发者需警惕证书与账户双重风险。"
    },
    {
     "title": "Six search engines worth trying now that Google isn’t really Google anymore",
     "url": "https://techcrunch.com/2026/05/21/six-search-engines-worth-trying-now-that-google-isnt-really-google-anymore/",
     "source": "TechCrunch - AI",
     "date": "2026-05-21",
     "summary": "Google is about to look really different, and if you're not a fan of the AI overview feature, then you're not going to like what's coming.",
     "is_new": false,
     "lang": "en",
     "interpretation": "谷歌搜索质量下滑，六款替代引擎崛起，用户搜索习惯可能迎来分流。"
    },
    {
     "title": "This AI guitar pedal let me roll my own effects",
     "url": "https://www.theverge.com/ai-artificial-intelligence/935219/polyend-endless-ai-guitar-effects-pedal",
     "source": "The Verge - AI",
     "date": "2026-05-21",
     "summary": "I'm not sure anyone was really asking for an AI guitar pedal. But it was inevitable that someone would build one. One of the first to take the plunge is Polyend, a well-respected music gear maker with a reputation for building niche, idiosyncratic devices. The company has built grooveboxes around...",
     "is_new": false,
     "lang": "en",
     "interpretation": "用户可自定义音效，降低AI音乐创作门槛，推动个性化音频工具普及。"
    },
    {
     "title": "Meta Is in Crisis, Google Search’s Makeover, and AI Gets Booed by Graduates",
     "url": "https://www.wired.com/story/uncanny-valley-podcast-meta-in-crisis-google-search-makeover-ai-booed-by-graduates/",
     "source": "Wired - AI",
     "date": "2026-05-21",
     "summary": "In this episode of Uncanny Valley, we unpack the mass layoffs at Meta, big announcements at Google I/O, and the latest backlash against AI.",
     "is_new": false,
     "lang": "en",
     "interpretation": "Meta内部危机、谷歌搜索改版、AI遭毕业生抵制，反映科技行业多重矛盾激化。"
    },
    {
     "title": "Scaling creativity in the age of AI",
     "url": "https://www.technologyreview.com/2026/05/21/1137613/scaling-creativity-in-the-age-of-ai/",
     "source": "MIT Technology Review - AI",
     "date": "2026-05-21",
     "summary": "Storytelling is core to humanity’s DNA, stemming from our impulse to express ideals, warnings, hopes, and experiences. Technology has always been woven through the medium and the distribution: from early humans’ innovation of natural pigments and charcoals for cave paintings to literal representa...",
     "is_new": false,
     "lang": "en",
     "interpretation": "AI时代如何规模化创造力，是内容产业效率与原创性的平衡挑战。"
    },
    {
     "title": "SpaceX Is Spending $2.8 Billion to Buy Gas Turbines for Its AI Data Centers",
     "url": "https://www.wired.com/story/elon-musk-spacex-spending-gas-turbines-grok/",
     "source": "Wired - AI",
     "date": "2026-05-20",
     "summary": "The investment comes as Elon Musk’s AI unit faces complaints about the carbon-emitting units and looks to become a big player in cloud computing.",
     "is_new": false,
     "lang": "en",
     "interpretation": "SpaceX巨资购燃气轮机，凸显AI数据中心能源需求激增与基础设施军备竞赛。"
    },
    {
     "title": "Quoting SpaceX S-1",
     "url": "https://simonwillison.net/2026/May/20/spacex-s1/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-05-20",
     "summary": "We have the ability to use compute resources to support our proprietary AI applications (such as Grok 5, which is currently being trained at COLOSSUS II), while also providing access to select compute capacity to third-party customers. For example, in May 2026, we entered into Cloud Services Agre...",
     "is_new": false,
     "lang": "en",
     "interpretation": "解读内容"
    },
    {
     "title": "We’re announcing new community investments in Missouri.",
     "url": "https://blog.google/innovation-and-ai/infrastructure-and-cloud/global-network/missouri-programs/",
     "source": "Google AI Blog",
     "date": "2026-05-20",
     "summary": "We’re helping build the state’s next-generation workforce and investing in energy programs.",
     "is_new": false,
     "lang": "en",
     "interpretation": "解读内容"
    },
    {
     "title": "A new experiment brings better group meetings to Google Beam",
     "url": "https://blog.google/innovation-and-ai/models-and-research/google-research/google-beam-group-meetings/",
     "source": "Google AI Blog",
     "date": "2026-05-20",
     "summary": "See and hear your colleagues in true-to-life size and sound, making hybrid meetings feel more inclusive and connected.",
     "is_new": false,
     "lang": "en",
     "interpretation": "解读内容"
    },
    {
     "title": "Introducing the Ettin Reranker Family",
     "url": "https://huggingface.co/blog/ettin-reranker",
     "source": "Hugging Face Blog",
     "date": "2026-05-19",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "新型重排序模型发布，有望提升信息检索精准度与效率。"
    },
    {
     "title": "I/O 2026",
     "url": "https://blog.google/innovation-and-ai/technology/developers-tools/google-io-2026-collection/",
     "source": "Google AI Blog",
     "date": "2026-05-19",
     "summary": "At Google I/O 2026, we shared how we’re making AI more helpful for everyone. See everything we announced.",
     "is_new": false,
     "lang": "en",
     "interpretation": "谷歌I/O大会定档2026，预示下一代AI技术与生态方向。"
    },
    {
     "title": "How AI Mode is changing the way people search in the U.S.",
     "url": "https://blog.google/products-and-platforms/products/search/ai-mode-us-insights/",
     "source": "Google AI Blog",
     "date": "2026-05-19",
     "summary": "One year after launch, see how AI Mode’s users are shifting from keywords to natural language queries.",
     "is_new": false,
     "lang": "en",
     "interpretation": "AI搜索模式改变美国用户习惯，搜索体验从关键词转向对话。"
    },
    {
     "title": "Granite Embedding Multilingual R2: Open Apache 2.0 Multilingual Embeddings with 32K Context — Best Sub-100M Retrieval Quality",
     "url": "https://huggingface.co/blog/ibm-granite/granite-embedding-multilingual-r2",
     "source": "Hugging Face Blog",
     "date": "2026-05-14",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "开源多语言嵌入模型性能突破，小模型也能实现顶尖检索质量。"
    },
    {
     "title": "Unlocking asynchronicity in continuous batching",
     "url": "https://huggingface.co/blog/continuous_async",
     "source": "Hugging Face Blog",
     "date": "2026-05-14",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "异步批处理技术提升推理效率，是大规模部署的关键优化。"
    },
    {
     "title": "Adding Benchmaxxer Repellant to the Open ASR Leaderboard",
     "url": "https://huggingface.co/blog/open-asr-leaderboard-private-data",
     "source": "Hugging Face Blog",
     "date": "2026-05-06",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "开源语音识别排行榜引入防刷机制，保障评测结果公平可信。"
    },
    {
     "title": "周鸿祎谈马斯克大尺度预言：十年后人类都不开车了？",
     "url": "<![CDATA[https://36kr.com/newsflashes/3822814415589768?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-05-24",
     "summary": "5月24日，周鸿祎发视频谈马斯克关于“十年后人类都不开车了”大尺度预言： 我觉得马斯克这次关于自动驾驶的判断，真正提醒我们的不是驾照以后还有没有用，而是AI的下一阶段不是在屏幕里变得更会聊天，而在真实世界里变得越来越能干活。过去AI主要改变的是信息流，接下来它要改变的是物流、人流、车流，甚至整个物理世界的运行方式。",
     "is_new": true,
     "lang": "zh",
     "interpretation": "周鸿祎借马斯克预言探讨自动驾驶趋势，引发对十年后出行方式的思考。"
    },
    {
     "title": "圆桌对话：人才特种兵：“AI原生人才”与“产业老炮”的共生手册| 2026AI Partner·北京亦庄AI+产业大会",
     "url": "<![CDATA[https://36kr.com/p/3821533415985283?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-05-23",
     "summary": "真正AI原生的人，甚至不会来这个现场。但对于那些积极转型的20%，如何找到、培养并留住他们，这里有一本实战手册。 只有1%的企业是AI原生企业，20%积极拥抱变化，80%在苦苦挣扎；人才亦然。圆桌深入探讨了企业“赶时髦招AI人才”的焦虑、通过黑客松内部挖掘AI人才的方法、以及“事业留人、文化留人”的留存策略。 以下为圆桌对话内容，经36氪整理编辑： 帮主丨36氪《AI局内人》主播（主持） 郑鹏宇丨杭州颜柯教育科技有限公司创始人 肖玛峰丨AI招聘平台TTC创始人 帮主：各位下午好，我是这场圆桌的主持人帮主。这场圆桌不聊技术落地的事，聊一个在座很多老板都非常关心的事——AI人才从哪里来，以及...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "强调AI人才与产业经验融合，决定企业数字化转型成败。"
    },
    {
     "title": "圆桌对话：AI浓度与转化率：数字体验的实战增长法则",
     "url": "<![CDATA[https://36kr.com/p/3821519307591811?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-05-23",
     "summary": "AI浓度并非越高越好，转化率的秘密在于人机共生的平衡点。 “AI应像手机一样贯穿全流程”，而面对亲子游客和老年群体，主动将AI浓度降至50%，却实现了超50%的转化率。浓度的关键是以人为本、文化温度先行。 以下为圆桌对话内容，经36氪整理编辑： 薛冰丨上海蜚语信息科技副总裁（主持） 崔健南丨广州搞搞镇文化科技创始人兼CEO 杨晟丨珀乐互动科技创始人 薛冰：各位嘉宾大家下午好，我是主持人薛冰，很荣幸受到36氪以及北京亦庄的邀请主持下午的圆桌。今天非常开心能够邀请到和我同台的两位重量级嘉宾，崔总、杨总，现在我们直接进入圆桌环节，先请两位嘉宾做一下自我介绍，先从崔总开始。 崔健南：谢谢主持人，...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "揭示AI提升数字体验的关键指标，指导企业优化转化效率。"
    },
    {
     "title": "AI 做不出下一个《GTA》？母公司老板力挺 AI 的同时泼了盆冷水",
     "url": "https://cn.technode.com/post/2026-05-22/take-two-ceo-ai-gta6/",
     "source": "动点科技 - AI",
     "date": "2026-05-22",
     "summary": "Take-Two Interactive […]",
     "is_new": false,
     "lang": "zh",
     "interpretation": "老板肯定AI但质疑其创造顶级游戏，点明创意领域AI局限。"
    },
    {
     "title": "谷歌高管：AI 短期内不会导致大规模失业",
     "url": "https://cn.technode.com/post/2026-05-22/google-executive-ai-will-not-cause-mass-unemployment-in-the-short-term/",
     "source": "动点科技 - AI",
     "date": "2026-05-22",
     "summary": "谷歌高级副总裁詹姆斯·曼尼卡（James […]",
     "is_new": false,
     "lang": "zh",
     "interpretation": "谷歌高管淡化AI失业论，缓解社会焦虑但需关注结构性调整。"
    },
    {
     "title": "派早报：小米召开新品发布会、Photoshop 移除工具支持端侧 AI 模型等",
     "url": "https://sspai.com/post/110020",
     "source": "少数派 - AI",
     "date": "2026-05-22",
     "summary": "绿联推出 NAS 新品 DXP4800 GT、哈博森黑鹰 4 号无人机发布等。查看全文",
     "is_new": false,
     "lang": "zh",
     "interpretation": "小米新品发布与Photoshop端侧AI，标志消费电子与创意工具加速智能化落地。"
    },
    {
     "title": "AI 分身 24 小时冲浪，它交朋友怎么比我还好？",
     "url": "https://www.ifanr.com/1666415?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-05-21",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "AI分身自主社交，引发对数字身份与人类社交本质的重新思考。"
    },
    {
     "title": "跨过800亿美元单季营收后，英伟达需要证明AI基建不是短期风口",
     "url": "https://cn.technode.com/post/2026-05-21/nvidia-fy2027-q1-revenue-816b-ai-infrastructure/",
     "source": "动点科技 - AI",
     "date": "2026-05-21",
     "summary": "AI工厂生意，开始进入验证期",
     "is_new": false,
     "lang": "zh",
     "interpretation": "英伟达营收新高，但需证明AI需求可持续，而非资本泡沫。"
    },
    {
     "title": "早报｜Google发布一大波AI更新/华为五一假期领跑中国手机市场/小米YU7 GT刷新纽北纪录",
     "url": "https://www.ifanr.com/1666368?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-05-20",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "Google密集AI更新，华为领跑手机市场，小米YU7创纽北纪录。"
    },
    {
     "title": "当 AI 成为角色：漫谈我的 SillyTavern 使用经验",
     "url": "https://sspai.com/post/109869",
     "source": "少数派 - AI",
     "date": "2026-05-20",
     "summary": "ST 以及它背后的这套工作流起初只是我的无心的收获，但网上关于这方面的讨论并不多，实在可惜，故有此文。查看全文",
     "is_new": false,
     "lang": "zh",
     "interpretation": "用户分享SillyTavern经验，展现AI角色扮演的个性化应用潜力。"
    },
    {
     "title": "谷歌用 AI 「杀死」谷歌，这场发布会看得人缺氧",
     "url": "https://www.ifanr.com/1666329?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-05-19",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "谷歌AI更新颠覆自身产品，发布会信息密集令人应接不暇。"
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
   "stars": 42648,
   "forks": 7606,
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
   "stars": 26085,
   "forks": 5776,
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
   "stars": 18876,
   "forks": 1753,
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
   "stars": 17970,
   "forks": 1142,
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
   "stars": 15243,
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
   "stars": 11705,
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
   "stars": 11394,
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
   "stars": 10108,
   "forks": 1283,
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
   "stars": 8653,
   "forks": 966,
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
   "stars": 7532,
   "forks": 850,
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
   "stars": 6791,
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
   "stars": 6146,
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
   "stars": 5579,
   "forks": 1380,
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
   "stars": 4815,
   "forks": 391,
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