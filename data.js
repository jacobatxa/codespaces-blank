const APP_DATA = {
 "today": "2026-05-25",
 "fetched_at": "2026-05-25T04:00:39",
 "total": 135,
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
   "count": 6,
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
   "count": 37
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
   "count": 7
  },
  {
   "name": "多模态与AIGC",
   "icon": "🎨",
   "color": "#dc2626",
   "count": 7
  },
  {
   "name": "AI硬件与芯片",
   "icon": "💾",
   "color": "#0891b2",
   "count": 2
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
   "count": 11
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
   "count": 56
  }
 ],
 "sections": [
  {
   "name": "大模型与基础架构",
   "icon": "🧠",
   "color": "#7c3aed",
   "count": 37,
   "cards": [
    {
     "title": "Towards Speed-of-Light Text Generation with Nemotron-Labs Diffusion Language Models",
     "url": "https://huggingface.co/blog/nvidia/nemotron-labs-diffusion",
     "source": "Hugging Face Blog",
     "date": "2026-05-23",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "光速文本生成模型突破，将极大提升AI实时交互与内容生产效率。"
    },
    {
     "title": "Google’s new anything-to-anything AI model is wild",
     "url": "https://www.theverge.com/tech/936507/gemini-omni-hands-on-deepfake-ai-video",
     "source": "The Verge - AI",
     "date": "2026-05-23",
     "summary": "Last year I deepfaked my kid's stuffed animal to make it look like his plush deer was on vacation. It was an experiment to see if I could re-create the events depicted in a Gemini ad Google was running, and I never showed the videos of Buddy the deer on his adventures to my four-year-old. […]",
     "is_new": false,
     "lang": "en",
     "interpretation": "谷歌多模态AI模型实现任意格式互转，打破数据壁垒，重塑内容创作范式。"
    },
    {
     "title": "We tried Google’s AI glasses and they’re almost there",
     "url": "https://techcrunch.com/2026/05/22/we-tried-googles-ai-glasses-and-theyre-almost-there/",
     "source": "TechCrunch - AI",
     "date": "2026-05-22",
     "summary": "Google demoed prototype Android XR glasses that overlay Gemini-powered translation, navigation, and other information directly into your field of view.",
     "is_new": false,
     "lang": "en",
     "interpretation": "谷歌AI眼镜接近实用，但尚未突破消费级产品的关键瓶颈。"
    },
    {
     "title": "Your AI agents need a terminal, not just a vector database",
     "url": "https://venturebeat.com/orchestration/your-ai-agents-need-a-terminal-not-just-a-vector-database",
     "source": "VentureBeat - AI",
     "date": "2026-05-22",
     "summary": "When agentic workflows fail, developers often assume the problem lies in the underlying model’s reasoning abilities. In reality, the limited information provided by the retrieval interface is often the primary limiting factor.Researchers at multiple universities propose a technique called direct ...",
     "is_new": false,
     "lang": "en",
     "interpretation": "AI代理需结合终端操作能力而非仅依赖数据库，才能实现复杂任务闭环。"
    },
    {
     "title": "The Download: coding’s future, the ‘Steroid Olympics,’ and AI-driven science",
     "url": "https://www.technologyreview.com/2026/05/22/1137845/the-download-coding-future-steroid-olympics-ai-science/",
     "source": "MIT Technology Review - AI",
     "date": "2026-05-22",
     "summary": "This is today’s edition of The Download, our weekday newsletter that provides a daily dose of what’s going on in the world of technology. Anthropic’s Code with Claude showed off coding’s future—whether you like it or not At Anthropic’s developer event in London this week, Code with Claude, attend...",
     "is_new": false,
     "lang": "en",
     "interpretation": "编程未来、体育科技滥用与AI驱动科研，三大议题影响深远。"
    },
    {
     "title": "All of the updates from Elon Musk and Sam Altman’s battle over OpenAI",
     "url": "https://www.theverge.com/tech/917225/sam-altman-elon-musk-openai-lawsuit",
     "source": "The Verge - AI",
     "date": "2026-05-21",
     "summary": "Sam Altman and Elon Musk are facing off in a high-stakes trial that could alter the future of OpenAI and its most well-known product, ChatGPT. In 2024, Musk filed a lawsuit accusing OpenAI of abandoning its founding mission of developing AI to benefit humanity and shifting focus to boosting profi...",
     "is_new": false,
     "lang": "en",
     "interpretation": "马斯克与奥特曼的OpenAI控制权之争，决定AI发展方向。"
    },
    {
     "title": "AdventHealth advances whole-person care with OpenAI",
     "url": "https://openai.com/index/adventhealth",
     "source": "OpenAI Blog",
     "date": "2026-05-21",
     "summary": "AdventHealth is using ChatGPT for Healthcare to streamline workflows, reduce administrative burden, and return more time to patient care.",
     "is_new": false,
     "lang": "en",
     "interpretation": "AI辅助医疗从疾病治疗转向全人健康管理的新模式。"
    },
    {
     "title": "I Cloned Myself With Gemini’s AI Avatar Tool. The Result Was Unnervingly Me",
     "url": "https://www.wired.com/story/i-cloned-myself-with-geminis-ai-avatar-tool-the-result-was-unnervingly-me/",
     "source": "Wired - AI",
     "date": "2026-05-21",
     "summary": "I used the Gemini app to generate lifelike videos featuring a digital clone of myself. Google sees this as the future of creation. I’m still creeped out.",
     "is_new": false,
     "lang": "en",
     "interpretation": "AI克隆人像以假乱真，数字身份伦理边界再受挑战。"
    },
    {
     "title": "Datasette Agent",
     "url": "https://simonwillison.net/2026/May/21/datasette-agent/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-05-21",
     "summary": "We just announced the first release of Datasette Agent, a new extensible AI assistant for Datasette. I've been working on my LLM Python library for just over three years now, and Datasette Agent represents the moment that LLM and Datasette finally come together. I'm really excited about it! Datas...",
     "is_new": false,
     "lang": "en",
     "interpretation": "一个轻量级AI代理工具发布，可能简化数据探索与自动化流程。"
    },
    {
     "title": "Alibaba's proprietary Qwen3.7-Max can run for 35 hours autonomously and supports external harnesses like Anthropic's Claude Code",
     "url": "https://venturebeat.com/technology/alibabas-proprietary-qwen3-7-max-can-run-for-35-hours-autonomously-and-supports-external-harnesses-like-anthropics-claude-code",
     "source": "VentureBeat - AI",
     "date": "2026-05-21",
     "summary": "The AI industry has fully entered the \"agent era,\" a paradigm where AI models do far more than generate text — they now actively plan, execute, and course-correct complex tasks over days rather than seconds. Thus, it's perhaps unsurprising to see Chinese e-commerce giant Alibaba's famed Qwen Team...",
     "is_new": false,
     "lang": "en",
     "interpretation": "阿里自研AI可自主运行35小时并兼容外部工具，展现国产大模型在长周期任务中的突破。"
    },
    {
     "title": "Roundtables: Can AI Learn to Understand the World?",
     "url": "https://www.technologyreview.com/2026/05/21/1137756/roundtables-can-ai-learn-to-understand-the-world/",
     "source": "MIT Technology Review - AI",
     "date": "2026-05-21",
     "summary": "Listen to the session or watch below AI companies want to build systems that understand the external world and overcome the limitations of LLMs. Recent developments have brought world models to the forefront of the AI discussion. Watch a conversation with editor in chief Mat Honan, senior AI edit...",
     "is_new": false,
     "lang": "en",
     "interpretation": "圆桌讨论聚焦AI能否理解世界，本质是拷问当前模型是否具备真正的因果推理能力。"
    },
    {
     "title": "Anthropic’s Code with Claude showed off coding’s future—whether you like it or not",
     "url": "https://www.technologyreview.com/2026/05/21/1137735/anthropics-code-with-claude-showed-off-codings-future-whether-you-like-it-or-not/",
     "source": "MIT Technology Review - AI",
     "date": "2026-05-21",
     "summary": "The vibes were strong at Code with Claude, Anthropic’s two-day event for software developers in London that kicked off on May 19, the same day as Google’s I/O in Palo Alto. (A coincidence, not a flex, Anthropic staffers assured me.) “Who here has shipped a pull request in the last week that was c...",
     "is_new": false,
     "lang": "en",
     "interpretation": "克劳德展示AI编程未来，开发者需正视其颠覆性影响。"
    },
    {
     "title": "An OpenAI model has disproved a central conjecture in discrete geometry",
     "url": "https://openai.com/index/model-disproves-discrete-geometry-conjecture",
     "source": "OpenAI Blog",
     "date": "2026-05-20",
     "summary": "An OpenAI model solved the 80-year-old unit distance problem, disproving a major conjecture in discrete geometry and marking a milestone in AI-driven mathematics.",
     "is_new": false,
     "lang": "en",
     "interpretation": "OpenAI模型破解几何猜想，AI正成为数学研究新工具。"
    },
    {
     "title": "How Ramp engineers accelerate code review with Codex",
     "url": "https://openai.com/index/ramp",
     "source": "OpenAI Blog",
     "date": "2026-05-20",
     "summary": "How Ramp engineers use Codex with GPT-5.5 to review code and ship improvements, allowing them to get substantive feedback in minutes instead of hours.",
     "is_new": false,
     "lang": "en",
     "interpretation": "Ramp用Codex加速代码审查，AI提升开发效率成趋势。"
    },
    {
     "title": "100 things we announced at I/O 2026",
     "url": "https://blog.google/innovation-and-ai/technology/ai/google-io-2026-all-our-announcements/",
     "source": "Google AI Blog",
     "date": "2026-05-20",
     "summary": "This year at Google I/O 2026, we announced Gemini Omni, Google Antigravity, Universal Cart and so much more. Here are the highlights.",
     "is_new": false,
     "lang": "en",
     "interpretation": "I/O大会发布百项更新，谷歌生态全面AI化信号明确。"
    },
    {
     "title": "OlmoEarth v1.1: A more efficient family of Earth observation models",
     "url": "https://huggingface.co/blog/allenai/olmoearth-v1-1",
     "source": "Hugging Face Blog",
     "date": "2026-05-19",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "地球观测模型效率提升，将推动遥感数据分析更快、更准。"
    },
    {
     "title": "I/O 2026: Welcome to the agentic Gemini era",
     "url": "https://blog.google/innovation-and-ai/sundar-pichai-io-2026/",
     "source": "Google AI Blog",
     "date": "2026-05-19",
     "summary": "The latest from Google I/O: See how we’re helping you get more done with Gemini.",
     "is_new": false,
     "lang": "en",
     "interpretation": "I/O 2026宣告进入“智能体Gemini时代”，AI自主执行任务成为核心。"
    },
    {
     "title": "PaddleOCR 3.5: Running OCR and Document Parsing Tasks with a Transformers Backend",
     "url": "https://huggingface.co/blog/PaddlePaddle/paddleocr-transformers",
     "source": "Hugging Face Blog",
     "date": "2026-05-18",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "PaddleOCR升级支持Transformers，文档解析能力更强，应用更广。"
    },
    {
     "title": "Building Blocks for Foundation Model Training and Inference on AWS",
     "url": "https://huggingface.co/blog/amazon/foundation-model-building-blocks",
     "source": "Hugging Face Blog",
     "date": "2026-05-11",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "AWS为基座模型训练推理提供系统化基础设施，降低部署复杂度。"
    },
    {
     "title": "vLLM V0 to V1: Correctness Before Corrections in RL",
     "url": "https://huggingface.co/blog/ServiceNow-AI/correctness-before-corrections",
     "source": "Hugging Face Blog",
     "date": "2026-05-06",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "vLLM版本迭代强调强化学习中正确性优先于修正，影响模型训练策略。"
    },
    {
     "title": "Granite 4.1 LLMs: How They’re Built",
     "url": "https://huggingface.co/blog/ibm-granite/granite-4-1",
     "source": "Hugging Face Blog",
     "date": "2026-04-29",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "揭秘Granite 4.1模型构建细节，为开源大模型研发提供参考。"
    },
    {
     "title": "未来推理将吃掉70%算力，30%留给训练丨硅谷投资人张璐@AIGC2026",
     "url": "https://www.qbitai.com/2026/05/423441.html",
     "source": "量子位",
     "date": "2026-05-25",
     "summary": "这些AI关键词正在被重新定义",
     "is_new": true,
     "lang": "zh",
     "interpretation": "未来算力分配将向推理倾斜，预示AI应用落地进入新阶段。"
    },
    {
     "title": "华为具身大脑一号位做类脑智能世界模型，对标JEPA，获亿元级融资｜硬氪首发",
     "url": "<![CDATA[https://36kr.com/p/3819931562414467?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-05-25",
     "summary": "作者｜黄楠 编辑｜袁斯来 硬氪获悉，具身智能大脑公司「具脑磐石」完成新一轮亿元级融资，本轮融资由具备深厚类脑与具身产业背景的顶尖产业资本领投，老股东及多家顶尖基金复投和跟投，多维资本担任独家财务顾问。同时，更新一轮融资也在同步交割中。 资金将重点投入核心技术研发、人才团队扩容及全球化市场拓展，以加速认知世界模型（Cognitive World Model）的研发、工程化落地与真实场景验证。 类脑智能世界模型（图源/企业） 具脑磐石成立于2025年，以类脑智能为底层范式，构建面向真实物理世界的认知世界模型（Cognitive World Model）。公司由“华为具身大脑一号位”朱森华创立...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "华为布局类脑智能世界模型，对标JEPA并获融资，标志其AI战略向通用智能底层架构延伸。"
    },
    {
     "title": "摩根士丹利：2030年全球半导体产业市场规模或达1.5万亿美元，人工智能相关半导体产品占半壁江山",
     "url": "<![CDATA[https://36kr.com/newsflashes/3824126045933704?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-05-25",
     "summary": "摩根士丹利近日在一份研究报告中指出，到2030年，全球半导体产业市场规模可能达到1.5万亿美元，其中人工智能相关半导体产品贡献份额占半壁江山。主要云服务提供商的云资本支出依然强劲。摩根士丹利云资本支出追踪器估计，到2026年，云资本支出将接近8110亿美元。研究认为，代理式人工智能产生了不断增长的CPU应用机遇。当AI从推理转向执行时，GPU计算强度随之提升。该机构将基准情景下的编排CPU市场总规模（TAM）上调至790亿美元，CPU编排技术的市场附加价值（TAM）预测将达到2380亿美元。（新浪财经）",
     "is_new": true,
     "lang": "zh",
     "interpretation": "摩根士丹利预测2030年半导体市场达1.5万亿美元，AI芯片将占半壁江山，凸显AI对硬件产业的绝对主导。"
    },
    {
     "title": "未来推理将吃掉70%算力，30%留给训练丨硅谷投资人张璐@AIGC2026",
     "url": "https://www.qbitai.com/2026/05/423382.html",
     "source": "量子位",
     "date": "2026-05-24",
     "summary": "技术创新只是起点，产业整合速度才是AI落地的真正竞争力",
     "is_new": true,
     "lang": "zh",
     "interpretation": "未来推理算力需求将远超训练，预示AI应用重心从模型开发转向大规模实时推理部署。"
    },
    {
     "title": "DeepSeek V4价格打骨折，宁王京东网易抢着入场，梁文锋：目标是AGI",
     "url": "https://www.qbitai.com/2026/05/423162.html",
     "source": "量子位",
     "date": "2026-05-23",
     "summary": "梁文锋承诺坚持开源路线",
     "is_new": false,
     "lang": "zh",
     "interpretation": "国产大模型价格战升级，巨头入场加速行业洗牌，AGI目标彰显野心。"
    },
    {
     "title": "安克消噪耳机搭载AI音频芯片Thus™ A1，获吉尼斯“最清晰通话”认证",
     "url": "https://www.leiphone.com/category/weiwu/SE0UCzo94OXxs9aG.html",
     "source": "雷锋网 - AI",
     "date": "2026-05-22",
     "summary": "2026年5月22日，安克创新在深圳总部举办新品发布会，正式发布安克消噪耳机Liberty 5 Pro Max与Liberty 5 Pro，并宣布两款产品获得 “全球通话最清晰的无线蓝牙耳机” 的吉尼斯世界纪录认证。支撑这一认证的，是安克与知存科技历时三年联合研发的首款基于存算一体架构的大模型算力音频AI芯片Thus™ A1，以及安克在通话降噪算法与系统集成上的持续研发积累。安克创新创始人兼CEO阳萌在发布会上表示：“当芯片的算力大了很多之后，声音会清楚非常多，这是听不听得清的差别，更是听不听得懂的差别。这颗芯片搭载的模型不只在降噪这个领域，还会在音质、ANC等领域，给大家提供跟以前截然...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "安克创新AI音频芯片获认证，标志消费电子端侧AI降噪技术取得突破。"
    },
    {
     "title": "寻找 AI 的「第三语言」：中间表示如何打通多模态鸿沟 ｜ CVPR 2026",
     "url": "https://www.leiphone.com/category/ai/Hy3aSP6RBtgHE310.html",
     "source": "雷锋网 - AI",
     "date": "2026-05-22",
     "summary": "“请把杯子拿起来”。这句话对你来说轻而易举。因为你看到了杯子，理解了“拿起来”的含义，手自然地伸过去、捏住、提起。但对一个 AI 系统来说，这中间隔着数道几乎不可逾越的鸿沟：语言到动作、动作到视觉、视觉到空间、空间到执行。传统做法是强迫模型学会直接映射，通过输入一段文字或一组动作参数，让其直接输出像素级的视频帧或关节角度。这种方法在受限环境和充足标注数据下勉强可行，但一旦面对真实世界的复杂性，系统就会崩溃，因为鸿沟太宽，直接跨越注定失败。清华大学智能产业研究院赵昊团队在 CVPR 2026 发表的四篇论文，共享着同一个设计哲学：当两种模态之间的鸿沟太大，真正的解法是为它们搭桥，找到一种“...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "多模态中间表示技术突破，或成AI理解世界的通用桥梁。"
    },
    {
     "title": "谷歌掀桌，一口气甩出16个AI王炸",
     "url": "https://www.leiphone.com/category/ai/k2qs0VRU74Ub6CCw.html",
     "source": "雷锋网 - AI",
     "date": "2026-05-22",
     "summary": "Google I/O 向来是全球开发者日历上最密集的信息节点，更是科技巨头宣示AI野心的最高舞台。2026年5月19日，加州山景城，Sundar Pichai 在两个小时内扔了16款核心产品更新。其中有5个产品各自坐拥30亿用户，Gemini 助手已有9亿用户，搜索AI Mode上线仅一年，月活突破10亿。没有\"One More Thing\"的悬念节奏，没有刻意留到最后的重磅彩蛋。Google选择了一种近乎轰炸式的信息发布策略：把所有东西一次性摊在桌面上。Pichai在台上说了一句耐人寻味的话：\"最前沿的Agent可能只触达过世界上0.1%的人。真正的问题，是怎么把这种前沿能力规模化交付...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "谷歌密集发布16项AI产品，意在巩固生态主导权。"
    },
    {
     "title": "Anthropic 花 3 亿美金买下 API「修路工」，打响连接层暗战",
     "url": "https://www.leiphone.com/category/ai/Yqq5YAFbgrGAusRi.html",
     "source": "雷锋网 - AI",
     "date": "2026-05-22",
     "summary": "5月18日，Anthropic宣布了一笔看似“平淡”的收购：买下纽约的开发者工具公司Stainless，估值超过3亿美元。被收购的公司Stainless不是一家普通的 SaaS 公司，它的特殊之处在于，它几乎服务了AI行业的所有头部玩家。其客户名单里躺着 OpenAI、Google、Cloudflare、Replicate 和 Runway 等一众硅谷巨头。Stainless 的核心业务听起来甚至有些枯燥：将结构化的 API 规范，自动转换为 TypeScript、Python、Go 等各种语言的 SDK（软件开发工具包）。同时提供CLI工具和MCP（Model Context Prot...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "Anthropic高价收购API中间件公司，争夺AI应用层控制权。"
    },
    {
     "title": "FSD入华前奏？曝特斯拉国内9城急招智驾测试员；曾对标乔布斯！大疆的对手GoPro要被卖了：3年亏损近40亿；字节Seedance 2.1即将发布",
     "url": "https://www.leiphone.com/category/zaobao/kLtJrYfYVt7gE0sF.html",
     "source": "雷锋网 - AI",
     "date": "2026-05-22",
     "summary": "要闻提示1.FSD入华前奏？曝特斯拉国内急招智驾测试员，覆盖9大城市2.曾对标乔布斯！大疆的对手GoPro要被卖了：3年亏损近40亿3.字节Seedance 2.1即将发布，生成质量预计提升约20%4.月之暗面 Kimi 融资获国资加持，国智投、中国移动等央企巨头入场5.罗永浩遭前合伙人炮轰：一辈子都在装猛男，假装自己网络无敌6.DeepSeek回应信息“串台”BUG：特殊字符引发模型幻觉，不会泄露隐私7.网友建议微信新增聊天列表长按多选删除功能，微信员工回应8.谷歌深夜炸场！最强模型Gemini 3.5 Flash发布：速度快4倍，干翻GPT-5.5今日头条FSD入华前奏？曝特斯拉国内...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "特斯拉急招智驾测试员，FSD入华进入倒计时阶段。"
    },
    {
     "title": "大模型狂飙的尽头，这家国产 GPU 厂商要把算力放在客厅",
     "url": "https://www.ifanr.com/1666549?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-05-21",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "国产GPU厂商瞄准家庭算力，推动AI从云端走向客厅。"
    },
    {
     "title": "早报｜448元，iPhone绝版配件回归/Meta用员工键鼠数据训练AI，扎克伯格：外包不够聪明/GoPro考虑出售或合并",
     "url": "https://www.ifanr.com/1666545?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-05-21",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "Meta用员工数据训练AI，暴露科技巨头数据伦理争议。"
    },
    {
     "title": "对标特斯拉FSD，Momenta借势出海",
     "url": "https://www.leiphone.com/category/transportation/3chtnA4AOy1BLrwW.html",
     "source": "雷锋网 - AI",
     "date": "2026-05-21",
     "summary": "中国车企在过去几年间完成了产品、品牌和生态体系的逐步出海。而接下来，很可能是智驾技术的全球远征。MomentaCEO曹旭东判断，2028年将是海外城市NOA的拐点。Momenta和上汽MG做好了准备。北京车展上，双方联合宣布，下半年推出的全新轿跑车型MG07，搭载MomentaR7强化学习世界模型、X7大模型专用芯片，主打软硬一体路线。作为全球品牌，MG将以这款新车为进攻全球市场，而Momenta也将借助MG车型，深入特斯拉腹地，迎来海外市场布局的关键挑战。曹旭东在采访中透出兴奋与期待。他宣布，R7对标FSD V14，“我们要做中国年轻人的特斯拉。”中美两国“老司机”出海欧洲，谁会赢？曹...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "Momenta对标特斯拉FSD出海，中国智驾加速全球化竞争。"
    },
    {
     "title": "DeepSeek组建Harness团队，非「超能力者」不要？中国AI开启「做产品」的关键一跳",
     "url": "https://www.leiphone.com/category/yanxishe/s8qOo3KbXsfmFxb6.html",
     "source": "雷锋网 - AI",
     "date": "2026-05-21",
     "summary": "大模型行业的战火，正在从“基座智商”烧向“终端入口”。5月19日，DeepSeek 资深研究员陈德里在小红书上发了一条招聘贴，证实内部正在组建全新的\"Harness\"（代码智能体工程）团队，目标直指 Anthropic 旗下的明星产品 Claude Code。这条消息的冲击力不在于“DeepSeek 要做编码工具了”，毕竟一家有模型的 AI 公司做编码工具再正常不过。真正值得注意的是：一家习惯于底层模型研究的公司，终于开始跨出实验室，亲自下场打造桌面端生产力入口。 招聘信息显示，DeepSeek目前在北京海淀区开放了Harness产品经理与研发工程师两个岗位。新成员将全程参与\"DeepS...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "DeepSeek组建精英团队，标志中国AI从模型转向产品化。"
    },
    {
     "title": "阿里云为什么「重构自己」？",
     "url": "https://www.leiphone.com/category/ai/nQVZmFcBopMuwsCZ.html",
     "source": "雷锋网 - AI",
     "date": "2026-05-21",
     "summary": "如果你连续几年参加云相关的峰会，今年就会有一个明显的感受：话题变了。过去我们聊云，我们在聊什么？一来是聊云，我们聊的是怎么把服务器搬上去。再后来，我们聊的是怎么在云上跑AI，买GPU、调模型、搭推理服务。可能大家还会有印象，去年这个时候，大家的焦点还是哪家云的GPU够便宜、模型推理延迟多少、算力供应够不够。但今年，行业的问题完全变了。今年云计算行业一个非常大的变化是，大家都开始聊，怎么让Agent自主使用云。5月20日，杭州，雷峰网参与了阿里云峰会，现场观察到阿里云把这个问题摆到了台面上，而且给出了一个系统性的回答。从发布搭载自研芯片真武M890的超节点服务器、推出国产第一的旗舰模型Qw...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "阿里云主动重构，意在应对技术迭代与市场竞争的双重压力。"
    },
    {
     "title": "OpenAI放弃的事，为什么阿里可能做得成",
     "url": "https://www.leiphone.com/category/industrynews/KHSMwS0aTqX2ip1W.html",
     "source": "雷锋网 - AI",
     "date": "2026-05-21",
     "summary": "一个完整的AI购物闭环出现了。5月11日，千问与淘宝全面打通。用户打开千问App，与AI对话，即可完成淘宝上的商品挑选、对比及下单购买。在淘宝端内，点击“千问AI购物助手”也可以体验AI购物。AI重塑电商讨论了两年，但未来的轮廓并不清晰。一边是全球科技巨头都在布局。ChatGPT、Gemini先后接入沃尔玛等零售商，亚马逊自研Rufus，微软与Stripe合作；另一边，最先下场的OpenAI在2026年初悄然收缩了Instant Checkout，放弃了在聊天界面内直接完成交易这个核心功能。一个被硅谷最强AI公司验证过\"做不通\"的事，阿里为什么还要做？千问接入淘宝的路径，和OpenAI到...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "阿里在商业模式与生态整合上更具优势，可能走通OpenAI未走的路。"
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
     "title": "datasette-agent 0.1a4",
     "url": "https://simonwillison.net/2026/May/24/datasette-agent/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-05-24",
     "summary": "Release: datasette-agent 0.1a4 Taking advantage of the new makeJumpSections() JavaScript plugin hook added in Datasette 1.0a30, datasette-agent now presents this \"Start a new agent chat\" interface as part of the Jump to menu, any time you hit /: You can try this out by signing into agent.datasett...",
     "is_new": true,
     "lang": "en",
     "interpretation": "Datasette-agent 0.1a4上线，自动化数据管理更进一步。"
    },
    {
     "title": "AI agents are quietly generating chaos engineering failures enterprises don’t track yet",
     "url": "https://venturebeat.com/orchestration/ai-agents-are-quietly-generating-chaos-engineering-failures-enterprises-dont-track-yet",
     "source": "VentureBeat - AI",
     "date": "2026-05-24",
     "summary": "There is a category of production incident that engineering teams are not tracking yet — because it doesn't fit any existing postmortem template. The agent initiated an action. The action was technically correct given the agent's context. The context was incomplete. The infrastructure cascaded. A...",
     "is_new": true,
     "lang": "en",
     "interpretation": "AI代理引发企业未察觉的混沌工程故障，凸显系统监控盲区与潜在风险。"
    },
    {
     "title": "OpenAI named a Leader in enterprise coding agents by Gartner",
     "url": "https://openai.com/index/gartner-2026-agentic-coding-leader",
     "source": "OpenAI Blog",
     "date": "2026-05-22",
     "summary": "OpenAI is named a leader in the 2026 Gartner Magic Quadrant for Enterprise AI Coding Agents, with Codex recognized for innovation and enterprise-scale deployment.",
     "is_new": false,
     "lang": "en",
     "interpretation": "企业级AI编码工具获权威认可，标志AI开发进入标准化阶段。"
    },
    {
     "title": "D&B's database of 642 million businesses was built for humans, not AI agents. So they rebuilt it.",
     "url": "https://venturebeat.com/data/d-and-bs-database-of-642-million-businesses-was-built-for-humans-not-ai-agents-so-they-rebuilt-it",
     "source": "VentureBeat - AI",
     "date": "2026-05-22",
     "summary": "Dun & Bradstreet has spent over 180 years building a comprehensive commercial database. Its Commercial Graph, covering 642 million businesses and their relationships, corporate hierarchies and risk profiles, was designed for people. Credit analysts, risk managers and sales professionals who could...",
     "is_new": false,
     "lang": "en",
     "interpretation": "邓白氏为AI重构商业数据库，传统数据架构无法满足智能体实时调用需求。"
    },
    {
     "title": "datasette-agent-sprites 0.1a0",
     "url": "https://simonwillison.net/2026/May/21/datasette-agent-sprites/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-05-21",
     "summary": "Release: datasette-agent-sprites 0.1a0 A Datasette Agent plugin for running commands in a Fly Sprites sandbox. Tags: sandboxing, datasette, fly, datasette-agent",
     "is_new": false,
     "lang": "en",
     "interpretation": "该工具新增精灵图支持，或为数据可视化提供更灵活的图形化交互能力。"
    },
    {
     "title": "datasette-agent-charts 0.1a2",
     "url": "https://simonwillison.net/2026/May/21/datasette-agent-charts/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-05-21",
     "summary": "Release: datasette-agent-charts 0.1a2 \"View SQL query\" buttons below rendered charts. Tags: datasette, datasette-agent",
     "is_new": false,
     "lang": "en",
     "interpretation": "图表代理功能迭代，预示数据分析工具正从静态报告向智能生成演进。"
    },
    {
     "title": "datasette-agent 0.1a3",
     "url": "https://simonwillison.net/2026/May/21/datasette-agent-2/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-05-21",
     "summary": "Release: datasette-agent 0.1a3 \"View SQL query\" buttons for both visible tables and collapsed SQL result tool calls. Don't display empty reasoning chunks Improved handling of truncated responses - table still displays to the user even if the SQL results were truncated when showing the agent. See ...",
     "is_new": false,
     "lang": "en",
     "interpretation": "核心代理框架更新，标志着开源数据工具向模块化、可扩展的AI代理生态迈进。"
    },
    {
     "title": "A 0.12% parameter add-on gives AI agents the working memory RAG can't",
     "url": "https://venturebeat.com/orchestration/a-0-12-parameter-add-on-gives-ai-agents-the-working-memory-rag-cant",
     "source": "VentureBeat - AI",
     "date": "2026-05-21",
     "summary": "AI agents forget. Every time a coding assistant loses track of a debugging thread, or a data analysis agent re-ingests the same context it already processed, the team pays in latency, token costs, and brittle workflows. The fix most teams reach for — expanding the context window or adding more RA...",
     "is_new": false,
     "lang": "en",
     "interpretation": "仅增0.12%参数即赋予AI工作记忆，弥补了传统检索增强生成在持续学习上的短板。"
    },
    {
     "title": "Enterprise AI agents keep failing because they forget what they learned",
     "url": "https://venturebeat.com/orchestration/enterprise-ai-agents-keep-failing-because-they-forget-what-they-learned",
     "source": "VentureBeat - AI",
     "date": "2026-05-21",
     "summary": "RAG architectures are good at one thing: surfacing semantically relevant documents. That's also where they stop.A framework called a decision context graph addresses that gap by giving agents structured memory, time-aware reasoning, and explicit decision logic. Rippletide, a startup in the Neo4j ...",
     "is_new": false,
     "lang": "en",
     "interpretation": "企业AI代理因“遗忘”频繁失败，揭示当前AI缺乏长期记忆是落地核心瓶颈。"
    },
    {
     "title": "The Open Agent Leaderboard",
     "url": "https://huggingface.co/blog/ibm-research/open-agent-leaderboard",
     "source": "Hugging Face Blog",
     "date": "2026-05-18",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "开放智能体排行榜发布，为评估和比较AI自主系统提供标准。"
    },
    {
     "title": "ima Copilot今日全面开放，并发布新能力知识号支持发布Skill",
     "url": "<![CDATA[https://36kr.com/newsflashes/3824136947437704?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-05-25",
     "summary": "36氪获悉，ima今日开放两项重要能力：Copilot功能全面开放，此前该功能需申请排队，排队人数已超过10万；Copilot的全面开放，意味着更多用户可以在ima自身产品内直接使用知识Agent。用户沉淀在ima中的资料和知识，也可以在Copilot的任务执行过程中被调用和使用。同时，知识广场支持通过知识号发布和发现Skill，首批上线微信读书、腾讯招聘等Skill，用户也可以发布自己的Skill。",
     "is_new": true,
     "lang": "zh",
     "interpretation": "ima Copilot全面开放并支持知识号发布Skill，意味着AI助手从通用工具向可定制知识平台升级。"
    },
    {
     "title": "卷到今天，Agent的含金量还在提升丨AIGC2026圆桌论坛",
     "url": "https://www.qbitai.com/2026/05/423421.html",
     "source": "量子位",
     "date": "2026-05-24",
     "summary": "大厂集体下场后，创业公司还有哪些机会？",
     "is_new": true,
     "lang": "zh",
     "interpretation": "Agent在激烈竞争中价值持续提升，说明AI自主执行能力正成为行业核心竞争力。"
    }
   ]
  },
  {
   "name": "具身智能与机器人",
   "icon": "🤖",
   "color": "#059669",
   "count": 7,
   "cards": [
    {
     "title": "These Robots Are Making Meals for a Nonprofit in San Francisco’s Tenderloin",
     "url": "https://www.wired.com/story/these-robots-are-making-meals-for-a-nonprofit-in-san-franciscos-tenderloin/",
     "source": "Wired - AI",
     "date": "2026-05-24",
     "summary": "A nonprofit in the city’s most troubled district has turned to robotic meal prep tech to make up for a dearth of human volunteers.",
     "is_new": true,
     "lang": "en",
     "interpretation": "旧金山非营利组织用机器人做饭，科技助力公益解决温饱。"
    },
    {
     "title": "Catch up on the Dialogues stage at Google I/O 2026.",
     "url": "https://blog.google/innovation-and-ai/technology/ai/io-2026-dialogues-recap/",
     "source": "Google AI Blog",
     "date": "2026-05-22",
     "summary": "A recap of the 2026 I/O Dialogues, where leaders discuss the future of AI, quantum computing, robotics and creativity.",
     "is_new": false,
     "lang": "en",
     "interpretation": "谷歌I/O大会对话环节揭示AI行业最新趋势与争议焦点。"
    },
    {
     "title": "华为具身大脑一号位创业，用认知科学造世界模型，获亿元级融资",
     "url": "https://www.qbitai.com/2026/05/423455.html",
     "source": "量子位",
     "date": "2026-05-25",
     "summary": "用“人类心智”重做具身智能",
     "is_new": true,
     "lang": "zh",
     "interpretation": "具身智能赛道获资本加注，认知科学路径或成世界模型新方向。"
    },
    {
     "title": "36氪首发 | 商汤国香投了一家消费级空间相机公司，为具身智能采集真实世界数据",
     "url": "<![CDATA[https://36kr.com/p/3824089662853513?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-05-25",
     "summary": "作者丨欧雪 编辑丨袁斯来 硬氪获悉，消费级空间相机公司竹马创新近日完成了数千万天使+轮融资，本轮由商汤国香资本领投，鼎晖VGC、峰瑞资本跟投，深渡资本担任后续独家财务顾问。资金将主要用于产品研发、量产准备及海外市场拓展。 竹马创新成立于2025年11月，是一家以Camera + AI为核心的空间智能公司。公司希望定义一种新的AI硬件品类——空间相机：既是消费级3D内容创作工具，更是面向具身智能与世界模型的真实世界三维数据入口。 团队方面，创始人张吉曾任群核科技副总裁，深度参与大规模空间数据处理与商业化；首席科学家过洁为南京大学长聘副教授、3DGS和空间仿真领域顶尖科学家；团队具备从三维数...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "空间相机公司获投，为具身智能提供真实场景数据采集方案。"
    },
    {
     "title": "美团外卖前负责人入局餐饮具身模型，元节智能获千万级种子轮融资",
     "url": "https://www.qbitai.com/2026/05/423159.html",
     "source": "量子位",
     "date": "2026-05-23",
     "summary": "不造人形机器人，死磕餐饮后厨",
     "is_new": false,
     "lang": "zh",
     "interpretation": "前高管跨界创业，餐饮机器人赛道获资本青睐，具身智能落地场景受关注。"
    },
    {
     "title": "新加坡工业机器人公司Doozy Robotics获得种子轮融资",
     "url": "https://cn.technode.com/post/2026-05-22/doozy-robotics-seed-funding-industrial-robots/",
     "source": "动点科技 - AI",
     "date": "2026-05-22",
     "summary": "具体金额未披露",
     "is_new": false,
     "lang": "zh",
     "interpretation": "新加坡工业机器人初创获融资，反映东南亚智能制造与自动化需求增长。"
    },
    {
     "title": "独家丨前美团外卖技术负责人入局餐饮具身模型，「元节智能」获千万级种子轮融资",
     "url": "https://www.leiphone.com/category/robot/c3WgJgUydmWpEoWz.html",
     "source": "雷锋网 - AI",
     "date": "2026-05-22",
     "summary": "雷峰网独家获悉，具身智能初创公司「元节智能（AtomBite.AI）」已于近期完成千万级种子轮融资。本轮由英诺科创基金领投，水木清华校友种子基金、知名投资人个人跟投。据悉，本轮融资将主要用于餐饮场景具身世界模型研发、核心产品打磨及落地。今年3月底元节智能才在苏州注册成立，成立不到两个月即完成首轮融资，同时已获得了国内外多家头部公司产品合作部署意向。据了解，企业核心团队汇聚了来自清华、中科大、美团、地平线等顶尖高校与科技公司的研发负责人及精锐人才，团队背景实力雄厚。 01 清华博士+美团产研班底 元节智能创始人兼CEO王栋博士师从中国人工智能泰斗、清华大学张钹院士，深耕人工智能领域十余年，...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "前美团技术负责人再创业，餐饮具身模型成资本新热点，行业人才流动受关注。"
    }
   ]
  },
  {
   "name": "多模态与AIGC",
   "icon": "🎨",
   "color": "#dc2626",
   "count": 7,
   "cards": [
    {
     "title": "Quoting Armin Ronacher",
     "url": "https://simonwillison.net/2026/May/24/armin-ronacher/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-05-24",
     "summary": "The most frustrating failure mode right now is that people submit issues that are not in their own voice. They contain an observed problem somewhere, but it has been thrown into a clanker and the clanker reworded it and made a huge mess of it. Typically, it was prompted so badly that the conclusi...",
     "is_new": true,
     "lang": "en",
     "interpretation": "Armin Ronacher观点被引用，技术领袖言论影响行业思考。"
    },
    {
     "title": "AI is being used to resurrect the voices of dead pilots",
     "url": "https://techcrunch.com/2026/05/22/ai-is-being-used-to-resurrect-the-voices-of-dead-pilots/",
     "source": "TechCrunch - AI",
     "date": "2026-05-22",
     "summary": "People used AI on a spectrogram image of cockpit recordings to reconstruct them, forcing the NTSB to temporarily block access to its docket system.",
     "is_new": false,
     "lang": "en",
     "interpretation": "AI复活逝去飞行员声音，引发科技伦理与情感记忆的深刻讨论。"
    },
    {
     "title": "US scrambles to stop Internet users re-creating dead pilots’ voices",
     "url": "https://arstechnica.com/ai/2026/05/ai-users-re-create-dead-pilots-voices-from-crash-investigation-docs/",
     "source": "ArsTechnica - AI",
     "date": "2026-05-22",
     "summary": "Workaround flouts law that bans NTSB disclosures of cockpit audio recordings.",
     "is_new": false,
     "lang": "en",
     "interpretation": "技术滥用风险凸显，AI语音克隆已触及伦理与法律红线。"
    },
    {
     "title": "In desperate times, graduates find hope in humiliating tech CEOs",
     "url": "https://www.theverge.com/ai-artificial-intelligence/935602/graduates-boo-ai-ceos",
     "source": "The Verge - AI",
     "date": "2026-05-21",
     "summary": "University graduates are booing and heckling corporate executives who praise AI during their commencement ceremonies, and the only people who seem to be genuinely surprised by this are the executives themselves. In a procession of viral videos, 2026 commencement speakers like former Google CEO Er...",
     "is_new": false,
     "lang": "en",
     "interpretation": "毕业生当众羞辱科技CEO，折射就业焦虑与行业信任危机。"
    },
    {
     "title": "SpaceX Listed Grok’s ‘Spicy’ Mode as a Risk in Its IPO Filing",
     "url": "https://www.wired.com/story/spacex-ipo-grok-spicy-mode-risks/",
     "source": "Wired - AI",
     "date": "2026-05-21",
     "summary": "The rocket company has set aside more than $500 million for potential litigation losses, in part to account for complaints alleging that Grok created sexualized images.",
     "is_new": false,
     "lang": "en",
     "interpretation": "马斯克旗下AI的“暴躁”模式被列为上市风险，凸显AI不可控性对资本市场的潜在冲击。"
    },
    {
     "title": "New ways to create and get things done in Google Workspace",
     "url": "https://blog.google/products-and-platforms/products/workspace/workspace-updates/",
     "source": "Google AI Blog",
     "date": "2026-05-19",
     "summary": "Announcing new voice capabilities in Gmail, Docs and Keep, a new design tool called Google Pics and updates to AI Inbox.",
     "is_new": false,
     "lang": "en",
     "interpretation": "Google Workspace新增创作与办公功能，提升用户协作与效率体验。"
    },
    {
     "title": "“五类人AI替代不了，企业做第二名最稳妥” | 昆仑万维方汉@AIGC2026",
     "url": "https://www.qbitai.com/2026/05/423202.html",
     "source": "量子位",
     "date": "2026-05-23",
     "summary": "“AI时代经验不再是护城河”",
     "is_new": false,
     "lang": "zh",
     "interpretation": "昆仑万维提出五类人不可替代、企业宜做第二，揭示AI时代差异化生存与稳健竞争策略。"
    }
   ]
  },
  {
   "name": "AI硬件与芯片",
   "icon": "💾",
   "color": "#0891b2",
   "count": 2,
   "cards": [
    {
     "title": "Google I/O showed how the path for AI-driven science is shifting",
     "url": "https://www.technologyreview.com/2026/05/22/1137813/google-i-o-showed-how-the-path-for-ai-science-is-shifting/",
     "source": "MIT Technology Review - AI",
     "date": "2026-05-22",
     "summary": "During Tuesday’s Google I/O keynote, Demis Hassabis, the CEO of Google DeepMind, proclaimed that we are currently “standing in the foothills of the singularity.” It was a striking statement—the singularity is the theoretical future moment when AI rapidly exceeds human intelligence and dramaticall...",
     "is_new": false,
     "lang": "en",
     "interpretation": "AI驱动科研路径正从理论走向实际应用的关键转折点。"
    },
    {
     "title": "Manus创始人计划融资10亿美元回购公司；曝知名招聘平台主动申请破产；特斯拉官宣：监督版FSD登陆中国！",
     "url": "https://www.leiphone.com/category/zaobao/qFYlp8Q5YFJ9KJRc.html",
     "source": "雷锋网 - AI",
     "date": "2026-05-22",
     "summary": "要闻提示1.CEO曾称大厂高薪惯坏了年轻人！招聘平台“拉勾网”被曝主动申请破产2.Manus创始人计划融资10亿美元回购公司3.山姆超市，突然被曝！网友：像在吃自助餐4.特斯拉官宣：监督版FSD登陆中国！5.为何小米汽车要执着于纽北刷圈？CTO 胡峥楠回应6.京东零售高层大调整：杨博接棒汽车事业部，钟波执掌拍卖业务7.英特尔 CEO 陈立武铁腕新规：若芯片两次流片未能量产，员工将被炒鱿鱼8.供应链传闻苹果 iPhone 2027 年会上类四曲面屏 ID今日头条Manus创始人计划融资10亿美元回购公司5月21日，据外媒报道，Manus三位创始人肖弘、季逸超、张涛正在讨论从外部投资者处融资...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "Manus融资回购与特斯拉FSD入华，凸显AI创业公司资本运作与自动驾驶商业化加速。"
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
     "title": "OpenAI大神教你如何榨干Codex",
     "url": "https://www.qbitai.com/2026/05/423179.html",
     "source": "量子位",
     "date": "2026-05-23",
     "summary": "13k星开源库作者解锁Codex-maxxing！",
     "is_new": false,
     "lang": "zh",
     "interpretation": "揭示高效利用AI编程工具的核心技巧，对开发者提升效率有直接指导意义。"
    }
   ]
  },
  {
   "name": "AI商业与投融资",
   "icon": "💰",
   "color": "#ca8a04",
   "count": 11,
   "cards": [
    {
     "title": "How VCs and founders use inflated ‘ARR’ to crown AI startups",
     "url": "https://techcrunch.com/2026/05/22/how-vcs-and-founders-use-inflated-arr-to-kingmake-ai-startups/",
     "source": "TechCrunch - AI",
     "date": "2026-05-22",
     "summary": "Some AI startups are stretching traditional revenue metrics when talking about progress publicly. And their investors are fully aware.",
     "is_new": false,
     "lang": "en",
     "interpretation": "虚报ARR成风，揭示AI创投圈数据注水与泡沫风险。"
    },
    {
     "title": "Elon Musk can’t hear you over the sound of his $1.75 trillion IPO",
     "url": "https://techcrunch.com/podcast/elon-musk-cant-hear-you-over-the-sound-of-his-1-75-trillion-ipo/",
     "source": "TechCrunch - AI",
     "date": "2026-05-22",
     "summary": "The SpaceX S-1 is finally here, and the story it tells goes way further than rockets. The filing runs to 36 pages of risk factors alone, and the numbers inside match the ambition: a $28 trillion total addressable market, a pay package tied to establishing a Mars colony, and a valuation target tha...",
     "is_new": false,
     "lang": "en",
     "interpretation": "马斯克IPO估值1.75万亿，凸显市场对特斯拉的狂热与争议。"
    },
    {
     "title": "SpaceX files to go public, and the math requires a little faith",
     "url": "https://techcrunch.com/video/spacex-files-to-go-public-and-the-math-requires-a-little-faith/",
     "source": "TechCrunch - AI",
     "date": "2026-05-22",
     "summary": "The SpaceX S-1 is finally here, and the story it tells goes way further than rockets. The filing runs to 36 pages of risk factors alone, and the numbers inside match the ambition: a $28 trillion total addressable market, a pay package tied to establishing a Mars colony, and a valuation target tha...",
     "is_new": false,
     "lang": "en",
     "interpretation": "SpaceX上市估值依赖信仰，折射太空经济盈利模式仍不清晰。"
    },
    {
     "title": "Can OpenAI’s ‘Master of Disaster’ Fix AI’s Reputation Crisis?",
     "url": "https://www.wired.com/story/openai-chris-lehane-global-affairs-pr/",
     "source": "Wired - AI",
     "date": "2026-05-22",
     "summary": "Global affairs chief Chris Lehane wants to tone down the debate over AI’s societal impacts—and get states to pass laws that won’t derail OpenAI’s meteoric rise.",
     "is_new": false,
     "lang": "en",
     "interpretation": "危机管理专家能否扭转公众对AI安全性的信任危机，决定行业未来走向。"
    },
    {
     "title": "FTC to Require Cox Media Group, Two Other Firms to Pay Nearly $1 Million to Settle Charges They Deceived Customers About “Active Listening” AI-Powered Marketing Service",
     "url": "https://simonwillison.net/2026/May/22/ftc-active-listening/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-05-22",
     "summary": "FTC to Require Cox Media Group, Two Other Firms to Pay Nearly $1 Million to Settle Charges They Deceived Customers About “Active Listening” AI-Powered Marketing Service Back in 2024 Cox Media Group were caught trying to sell advertisers packages based on \"active listening\", with this deck which c...",
     "is_new": false,
     "lang": "en",
     "interpretation": "美国联邦贸易委员会重罚虚假AI监听营销，监管开始整治技术滥用乱象。"
    },
    {
     "title": "Spotify and Universal Music strike deal allowing fan-made AI covers and remixes",
     "url": "https://techcrunch.com/2026/05/21/spotify-and-universal-music-strike-deal-allowing-fan-made-ai-covers-and-remixes/",
     "source": "TechCrunch - AI",
     "date": "2026-05-21",
     "summary": "Spotify is partnering with Universal Music Group￼ to let Premium subscribers create AI-generated song covers and remixes, with participating artists receiving a share of the revenue.",
     "is_new": false,
     "lang": "en",
     "interpretation": "用户自制AI翻唱合法化，将重塑音乐版权与创作生态。"
    },
    {
     "title": "The next phase of OpenAI’s Education for Countries",
     "url": "https://openai.com/index/the-next-phase-of-education-for-countries",
     "source": "OpenAI Blog",
     "date": "2026-05-20",
     "summary": "OpenAI advances Education for Countries, expanding AI adoption in schools with new partnerships, teacher training, and tools to improve global learning outcomes.",
     "is_new": false,
     "lang": "en",
     "interpretation": "OpenAI教育计划推进，AI将重塑各国人才培养模式。"
    },
    {
     "title": "Green steel startup Boston Metal is doubling down on critical metals",
     "url": "https://www.technologyreview.com/2026/05/20/1137523/boston-metal-funding-critical-metals/",
     "source": "MIT Technology Review - AI",
     "date": "2026-05-20",
     "summary": "The startup Boston Metal has raised a $75 million funding round to produce critical metals, MIT Technology Review can exclusively report. The company has been known largely for its efforts to clean up steel production, an industry that’s responsible for about 8% of global greenhouse emissions tod...",
     "is_new": false,
     "lang": "en",
     "interpretation": "波士顿金属押注关键金属，绿色钢铁与资源安全双线突破。"
    },
    {
     "title": "Introducing OpenAI for Singapore",
     "url": "https://openai.com/index/introducing-openai-for-singapore",
     "source": "OpenAI Blog",
     "date": "2026-05-19",
     "summary": "OpenAI for Singapore launches a multi-year AI partnership to expand deployment, build local talent, and support businesses and public services with AI.",
     "is_new": false,
     "lang": "en",
     "interpretation": "OpenAI在新加坡布局，标志其加速拓展亚洲市场与本地化服务。"
    },
    {
     "title": "Advancing content provenance for a safer, more transparent AI ecosystem",
     "url": "https://openai.com/index/advancing-content-provenance",
     "source": "OpenAI Blog",
     "date": "2026-05-19",
     "summary": "OpenAI advances AI content provenance with Content Credentials, SynthID, and a verification tool to help people identify and trust AI-generated media.",
     "is_new": false,
     "lang": "en",
     "interpretation": "加强内容来源追溯，有助于遏制虚假信息，提升AI可信度。"
    },
    {
     "title": "阿里国际接近盈利背后，速卖通品牌化与AI提效双线并进",
     "url": "https://www.leiphone.com/category/industrynews/g6NLstG8StqeQc8p.html",
     "source": "雷锋网 - AI",
     "date": "2026-05-21",
     "summary": "阿里最新一季财报披露了一个容易被外界忽视但意义重大的数字：阿里国际本季度经调整EBITA亏损仅剩1.38亿元，已经接近盈亏平衡。阿里国际的亏损收窄并非偶然。财报给出的解释是“速卖通运营效率的显著提升，以及多项业务的效率提升所致”。这听起来像是一句标准的财报话术，但拆解开来，背后是一套已经跑通的商业逻辑。过去一年，速卖通在物流优化上的投入开始产生回报。Choice业务的单位经济效益环比持续改善，仓配网络覆盖27个重点国家，在4个国家的重点城市实现次日达。物流成本的下降直接转化为利润空间的释放。与此同时，平台在用户获取上的策略也在调整：从过去依赖补贴拉新，转向通过品牌升级提升用户质量和客单价...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "速卖通品牌化与AI提效双驱动，是阿里国际接近盈利的关键。"
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
     "interpretation": "网络安全的未来与气候技术转型，关乎全球治理方向。"
    },
    {
     "title": "派早报：GitHub 在微软治下面临技术和人员流失困境",
     "url": "https://sspai.com/post/110130",
     "source": "少数派 - AI",
     "date": "2026-05-25",
     "summary": "GitHub 在微软治下面临技术和人员流失困境老虎、富途、长桥将被全面取缔境内业务谷歌搜索 AI 模式误将 disregard 等关键词当作指令「死了么」更名为「在么在么」用于老人居家安全公安部拟明确取证中获取密码等特殊程序 伦敦 iPhone 盗窃集团采用威胁手法解绑 Apple ID看看就行的小道消息少数派的近期动态你可能错过的好文章查看全文",
     "is_new": true,
     "lang": "zh",
     "interpretation": "微软治理下GitHub面临技术停滞与人才外流，开源生态承压。"
    }
   ]
  },
  {
   "name": "其他AI资讯",
   "icon": "🔮",
   "color": "#6b7280",
   "count": 56,
   "cards": [
    {
     "title": "Everyone is navigating AI security in real time — even Google",
     "url": "https://techcrunch.com/2026/05/24/everyone-is-navigating-ai-security-in-real-time-even-google/",
     "source": "TechCrunch - AI",
     "date": "2026-05-24",
     "summary": "We're in the transition period -- all of us.",
     "is_new": true,
     "lang": "en",
     "interpretation": "谷歌也需实时应对AI安全，说明行业尚无成熟方案。"
    },
    {
     "title": "I tried Amazon’s Bee wearable and am both intrigued and slightly creeped out",
     "url": "https://techcrunch.com/2026/05/24/i-tried-amazons-bee-wearable-and-am-both-intrigued-and-slightly-creeped-out/",
     "source": "TechCrunch - AI",
     "date": "2026-05-24",
     "summary": "Like other AI wearables, Amazon's Bee offers an odd combination of convenience and privacy anxiety.",
     "is_new": true,
     "lang": "en",
     "interpretation": "亚马逊可穿戴设备Bee让人既好奇又不安，隐私边界引关注。"
    },
    {
     "title": "Whatever the mirror test tells us, beluga whales pass it",
     "url": "https://arstechnica.com/science/2026/05/belugas-may-pass-the-mirror-test-but-does-the-mirror-test-still-pass/",
     "source": "ArsTechnica - AI",
     "date": "2026-05-24",
     "summary": "The white whales join the short, contested list of animals that see themselves.",
     "is_new": true,
     "lang": "en",
     "interpretation": "白鲸通过镜像测试，挑战传统自我认知标准。"
    },
    {
     "title": "Hackers are learning to exploit chatbot ‘personalities’",
     "url": "https://www.theverge.com/column/935545/hackers-ai-chatbots",
     "source": "The Verge - AI",
     "date": "2026-05-24",
     "summary": "This is The Stepback, a weekly newsletter breaking down one essential story from the tech world. For more on AI mischief, follow Robert Hart. The Stepback arrives in our subscribers' inboxes at 8AM ET. Opt in for The Stepback here. How it started Hacking the first generation of AI chatbots was a ...",
     "is_new": true,
     "lang": "en",
     "interpretation": "黑客利用聊天机器人“人格”漏洞，AI安全面临新威胁。"
    },
    {
     "title": "datasette 1.0a30",
     "url": "https://simonwillison.net/2026/May/24/datasette/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-05-24",
     "summary": "Release: datasette 1.0a30 The big new feature in this alpha is a new customizable \"Jump to...\" menu, described in detail in The extensible \"Jump to\" menu in Datasette 1.0a30 on the Datasette blog. You can try it out by hitting / on latest.datasette.io - it looks like this: The new jump_items_sql(...",
     "is_new": true,
     "lang": "en",
     "interpretation": "Datasette 1.0a30发布，开源数据工具持续迭代。"
    },
    {
     "title": "datasette-fixtures 0.1a0",
     "url": "https://simonwillison.net/2026/May/24/datasette-fixtures/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-05-24",
     "summary": "Release: datasette-fixtures 0.1a0 One of the smaller features in Datasette 1.0a30 is this: New documented datasette.fixtures.populate_fixture_database(conn) helper for creating the fixture database tables used by Datasette's own tests, intended for plugin test suites. This new plugin takes advant...",
     "is_new": true,
     "lang": "en",
     "interpretation": "Datasette-fixtures 0.1a0推出，测试数据标准化迈出第一步。"
    },
    {
     "title": "Mad House — Usborne Creepy Computer Games",
     "url": "https://simonwillison.net/2026/May/24/usborne-mad-house/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-05-24",
     "summary": "Tool: Mad House — Usborne Creepy Computer Games Via Hacker News I learned that UK publisher Usborne published free PDFs of their 1980s Computer Books, some of which I remember working through on my Commodore 64 as a child. These were so great! Beautifully illustrated books with fun projects made ...",
     "is_new": true,
     "lang": "en",
     "interpretation": "《疯狂之屋》重现Usborne经典，复古编程游戏唤起怀旧与教育意义。"
    },
    {
     "title": "Ferrari is using IBM’s AI to create F1 superfans",
     "url": "https://techcrunch.com/2026/05/23/ferrari-is-using-ai-to-create-f1-superfans/",
     "source": "TechCrunch - AI",
     "date": "2026-05-23",
     "summary": "IBM and Scuderia Ferrari HP take TechCrunch inside how they are redefining the fan experience.",
     "is_new": false,
     "lang": "en",
     "interpretation": "法拉利用IBM人工智能打造F1超级粉丝，标志体育营销进入AI个性化时代。"
    },
    {
     "title": "Elon Musk has given up on solar power (on Earth)",
     "url": "https://techcrunch.com/2026/05/23/elon-musk-has-given-up-on-solar-power-on-earth/",
     "source": "TechCrunch - AI",
     "date": "2026-05-23",
     "summary": "Elon Muks's xAI has gone all in on natural gas, while SpaceX is obsessed with orbital data centers. What happened to the \"solar-electric economy\" he promised?",
     "is_new": false,
     "lang": "en",
     "interpretation": "马斯克放弃地球太阳能业务，折射其战略重心转向太空与AI领域。"
    },
    {
     "title": "SpaceX's Starship V3—still a work in progress—mostly successful on first flight",
     "url": "https://arstechnica.com/space/2026/05/spacexs-starship-v3-still-a-work-in-progress-mostly-successful-on-first-flight/",
     "source": "ArsTechnica - AI",
     "date": "2026-05-23",
     "summary": "SpaceX has more to prove before flying Starship all the way to low-Earth orbit.",
     "is_new": false,
     "lang": "en",
     "interpretation": "星舰V3首飞基本成功，验证重型火箭迭代能力，但完全成熟仍需改进。"
    },
    {
     "title": "Two space shuttle-era spacewalkers enter Astronaut Hall of Fame",
     "url": "https://arstechnica.com/space/2026/05/two-space-shuttle-era-spacewalkers-enter-astronaut-hall-of-fame/",
     "source": "ArsTechnica - AI",
     "date": "2026-05-23",
     "summary": "\"Two astronauts whose careers embody excellence, leadership, and service.\"",
     "is_new": false,
     "lang": "en",
     "interpretation": "航天飞机时代宇航员入选名人堂，致敬人类太空探索的开拓者精神。"
    },
    {
     "title": "China’s shark finning could lead to US seafood sanctions",
     "url": "https://arstechnica.com/tech-policy/2026/05/chinas-shark-finning-could-lead-to-us-seafood-sanctions/",
     "source": "ArsTechnica - AI",
     "date": "2026-05-23",
     "summary": "A formal petition to the US government calls for sanctions on Chinese seafood imports.",
     "is_new": false,
     "lang": "en",
     "interpretation": "中国鱼翅贸易或遭美国制裁，反映国际社会对海洋生态保护的强硬立场。"
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
     "interpretation": "谷歌用迪斯科球图标试探用户，反映其设计决策的随意性。"
    },
    {
     "title": "You can no longer Google the word ‘disregard’",
     "url": "https://techcrunch.com/2026/05/22/you-can-no-longer-google-the-word-disregard/",
     "source": "TechCrunch - AI",
     "date": "2026-05-22",
     "summary": "After Google Search's AI update, the word \"disregard\" now effectively breaks the search interface.",
     "is_new": false,
     "lang": "en",
     "interpretation": "谷歌屏蔽“disregard”一词，暴露其搜索算法存在政治敏感干预。"
    },
    {
     "title": "Specialization Beats Scale: A Strategic Variable Most AI Procurement Decisions Overlook",
     "url": "https://huggingface.co/blog/Dharma-AI/specialization-beats-scale",
     "source": "Hugging Face Blog",
     "date": "2026-05-22",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "专业化优于规模化，点明AI采购常忽视的差异化竞争策略。"
    },
    {
     "title": "Four Russian satellites are now within striking distance of an ICEYE radarsat",
     "url": "https://arstechnica.com/space/2026/05/a-satellite-company-supporting-ukraine-appears-to-be-in-russias-crosshairs/",
     "source": "ArsTechnica - AI",
     "date": "2026-05-22",
     "summary": "\"This capability is not common for satellites conducting typical missions.\"",
     "is_new": false,
     "lang": "en",
     "interpretation": "俄卫星逼近ICEYE雷达星，标志太空军事化对抗进入新阶段。"
    },
    {
     "title": "Ebola outbreak now third largest recorded and \"spreading rapidly\"",
     "url": "https://arstechnica.com/health/2026/05/ebola-outbreak-now-third-largest-recorded-and-spreading-rapidly/",
     "source": "ArsTechnica - AI",
     "date": "2026-05-22",
     "summary": "Ebola outbreak risk level increased as deaths reach 177 with nearly 750 cases.",
     "is_new": false,
     "lang": "en",
     "interpretation": "埃博拉疫情成第三大且快速扩散，全球公共卫生防线再受考验。"
    },
    {
     "title": "First-generation Chromecast users stressed by devices suddenly failing",
     "url": "https://arstechnica.com/gadgets/2026/05/original-chromecast-lives-devices-back-on-after-mysteriously-breaking-this-week/",
     "source": "ArsTechnica - AI",
     "date": "2026-05-22",
     "summary": "Google tells Ars it fixed the first-gen Chromecast bug.",
     "is_new": false,
     "lang": "en",
     "interpretation": "初代Chromecast突然变砖，暴露谷歌对老旧硬件支持不足。"
    },
    {
     "title": "Trump FCC asks public to comment on whether ABC's The View is a news show",
     "url": "https://arstechnica.com/tech-policy/2026/05/trump-fcc-asks-public-to-comment-on-whether-abcs-the-view-is-a-news-show/",
     "source": "ArsTechnica - AI",
     "date": "2026-05-22",
     "summary": "FCC seeks opinions on whether ABC show's decisions are \"based on newsworthiness.\"",
     "is_new": false,
     "lang": "en",
     "interpretation": "质疑媒体定性，反映监管介入内容分类的政治化倾向。"
    },
    {
     "title": "The Boys is dead. Long live Vought Rising.",
     "url": "https://arstechnica.com/culture/2026/05/the-boys-is-dead-long-live-vought-rising/",
     "source": "ArsTechnica - AI",
     "date": "2026-05-22",
     "summary": "\"There's a brighter future. All we need to do is take it.\"",
     "is_new": false,
     "lang": "en",
     "interpretation": "剧集宇宙扩张，衍生剧接棒标志IP商业开发进入新阶段。"
    },
    {
     "title": "Police boast of hacking VPN where criminals \"believed themselves to be safe\"",
     "url": "https://arstechnica.com/tech-policy/2026/05/police-boast-of-hacking-vpn-where-criminals-believed-themselves-to-be-safe/",
     "source": "ArsTechnica - AI",
     "date": "2026-05-22",
     "summary": "Law enforcement intercepted VPN traffic, seized domains, and arrested its operator.",
     "is_new": false,
     "lang": "en",
     "interpretation": "警方技术突破，VPN加密神话破灭警示网络犯罪无绝对安全。"
    },
    {
     "title": "Review: The Mandalorian and Grogu is ... fine",
     "url": "https://arstechnica.com/culture/2026/05/review-the-mandalorian-and-grogu-is-average-star-wars-no-more-no-less/",
     "source": "ArsTechnica - AI",
     "date": "2026-05-22",
     "summary": "The plot is predictable, the fight scenes are meh, but you can't beat the charm of that little green Grogu.",
     "is_new": false,
     "lang": "en",
     "interpretation": "续作口碑平庸，经典IP创新乏力恐消耗粉丝情怀。"
    },
    {
     "title": "Google’s AI search is so broken it can ‘disregard’ what you’re looking for",
     "url": "https://www.theverge.com/tech/936176/google-ai-overviews-search-disregard",
     "source": "The Verge - AI",
     "date": "2026-05-22",
     "summary": "Google's AI Overviews are running into an interesting problem right now. Earlier on Friday, if you searched for the term \"disregard,\" the AI Overview section would include a response like what you'd see from a more traditional AI chatbot instead of the typical AI summary, as spotted on X. As you ...",
     "is_new": false,
     "lang": "en",
     "interpretation": "搜索功能失控，AI理解偏差暴露技术落地可靠性危机。"
    },
    {
     "title": "Elon, stop trying to make Grok happen",
     "url": "https://www.theverge.com/ai-artificial-intelligence/936219/elon-stop-trying-to-make-grok-happen",
     "source": "The Verge - AI",
     "date": "2026-05-22",
     "summary": "There is a harsh truth about Elon Musk's \"truth-seeking\" AI chatbot Grok: It's not very good, and not many people are using it. That's the takeaway of a new Reuters report, which found that Grok barely appears in federal records of how the US government used AI last year. It's not the only sign x...",
     "is_new": false,
     "lang": "en",
     "interpretation": "产品强行推广，用户反感折射科技巨头傲慢营销反噬。"
    },
    {
     "title": "The literary world isn’t prepared for AI",
     "url": "https://www.theverge.com/tech/936073/ai-writing-granta-commonwealth-prize",
     "source": "The Verge - AI",
     "date": "2026-05-22",
     "summary": "Since 2012, the British literary magazine Granta has published the regional winners of the annual Commonwealth Short Story Prize. This year, however, there was something off about one of the selections for the prestigious award: It appears to have been written by AI. Jamir Nazir's \"The Serpent in...",
     "is_new": false,
     "lang": "en",
     "interpretation": "创作生态受冲击，AI生成内容挑战传统文学价值与版权体系。"
    },
    {
     "title": "Spotify says its AI remix tool is for superfans, but I’m not convinced",
     "url": "https://www.theverge.com/ai-artificial-intelligence/936072/spotify-umg-ai-music-remix-cover-superfan",
     "source": "The Verge - AI",
     "date": "2026-05-22",
     "summary": "AI covers and remixes of songs are already a blight on the internet. Spotify, YouTube, TikTok, and Instagram are awash in flat reggae versions of \"Smells Like Teen Spirit,\" dinky country renditions of The Weeknd, and monotonous Motown reimaginings of AC/DC. Now, a new tool from Spotify will make ...",
     "is_new": false,
     "lang": "en",
     "interpretation": "功能定位存疑，AI工具与用户真实需求间存在认知鸿沟。"
    },
    {
     "title": "Samsung’s memory chip employees negotiated $340,000 bonuses this year",
     "url": "https://www.theverge.com/tech/936002/samsung-memory-chip-employees-deal-strike-bonus",
     "source": "The Verge - AI",
     "date": "2026-05-22",
     "summary": "Details have emerged about a tentative deal struck between Samsung and semiconductor employees who had threatened to strike. The deal reportedly makes some workers eligible for average annual bonuses of $340,000. The proposed 18-day strike had hinged on Samsung's bonus cap for employees in the se...",
     "is_new": false,
     "lang": "en",
     "interpretation": "行业景气信号，高额奖金反映芯片市场激烈人才争夺战。"
    },
    {
     "title": "How Virgin Atlantic ships faster with Codex",
     "url": "https://openai.com/index/virgin-atlantic",
     "source": "OpenAI Blog",
     "date": "2026-05-22",
     "summary": "How Virgin Atlantic used Codex to ship its revamped mobile app on a fixed holiday travel deadline, reaching near-total unit test coverage and zero P1 defects.",
     "is_new": false,
     "lang": "en",
     "interpretation": "航空巨头用AI优化物流，证明大模型在传统行业降本增效的可行性。"
    },
    {
     "title": "Even If You Hate AI, You Will Use Google AI Search",
     "url": "https://www.wired.com/story/even-if-you-hate-ai-you-will-use-google-ai-search/",
     "source": "Wired - AI",
     "date": "2026-05-22",
     "summary": "The search giant’s AI-crafted answers are so convenient, you’ll be sucked in—to the detriment of the web and the artists and thinkers behind it.",
     "is_new": false,
     "lang": "en",
     "interpretation": "即使抗拒AI，用户仍会被动使用谷歌搜索的AI功能，技术普及不可逆。"
    },
    {
     "title": "The Gulf’s AI Boom Has an Undersea Cable Problem",
     "url": "https://www.wired.com/story/the-gulfs-ai-boom-has-an-undersea-cable-problem/",
     "source": "Wired - AI",
     "date": "2026-05-22",
     "summary": "Hyperscalers are pushing the Gulf to rethink internet infrastructure as AI raises the stakes of cable disruptions.",
     "is_new": false,
     "lang": "en",
     "interpretation": "海湾国家AI算力扩张受制于海底光缆容量，基础设施瓶颈制约区域竞争。"
    },
    {
     "title": "The memory shortage is causing a repricing of consumer electronics",
     "url": "https://simonwillison.net/2026/May/22/memory-shortage/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-05-22",
     "summary": "The memory shortage is causing a repricing of consumer electronics David Oks provides the clearest explanation I've seen yet of why consumer products that use memory are likely to get significantly more expensive over the next few years. The short version is that memory manufacturers - of which t...",
     "is_new": false,
     "lang": "en",
     "interpretation": "内存芯片短缺推高电子产品价格，供应链波动直接传导至消费端。"
    },
    {
     "title": "Valid certificates, stolen accounts: how attackers broke npm's last trust signal",
     "url": "https://venturebeat.com/security/npm-sigstore-provenance-stolen-identity-audit-grid-2026",
     "source": "VentureBeat - AI",
     "date": "2026-05-22",
     "summary": "On May 19, 633 malicious npm package versions passed Sigstore provenance verification. They were cleared by the system because the attacker had generated valid signing certificates from a compromised maintainer account.Sigstore worked exactly as designed: it verified the package was built in a CI...",
     "is_new": false,
     "lang": "en",
     "interpretation": "攻击者利用合法证书和盗号突破npm安全防线，开源生态信任机制遭重创。"
    },
    {
     "title": "This AI guitar pedal let me roll my own effects",
     "url": "https://www.theverge.com/ai-artificial-intelligence/935219/polyend-endless-ai-guitar-effects-pedal",
     "source": "The Verge - AI",
     "date": "2026-05-21",
     "summary": "I'm not sure anyone was really asking for an AI guitar pedal. But it was inevitable that someone would build one. One of the first to take the plunge is Polyend, a well-respected music gear maker with a reputation for building niche, idiosyncratic devices. The company has built grooveboxes around...",
     "is_new": false,
     "lang": "en",
     "interpretation": "吉他手可自定义AI音效，音乐创作工具迎来平民化革命。"
    },
    {
     "title": "Meta Is in Crisis, Google Search’s Makeover, and AI Gets Booed by Graduates",
     "url": "https://www.wired.com/story/uncanny-valley-podcast-meta-in-crisis-google-search-makeover-ai-booed-by-graduates/",
     "source": "Wired - AI",
     "date": "2026-05-21",
     "summary": "In this episode of Uncanny Valley, we unpack the mass layoffs at Meta, big announcements at Google I/O, and the latest backlash against AI.",
     "is_new": false,
     "lang": "en",
     "interpretation": "Meta内部危机与谷歌搜索改革，科技巨头面临信任重塑。"
    },
    {
     "title": "Scaling creativity in the age of AI",
     "url": "https://www.technologyreview.com/2026/05/21/1137613/scaling-creativity-in-the-age-of-ai/",
     "source": "MIT Technology Review - AI",
     "date": "2026-05-21",
     "summary": "Storytelling is core to humanity’s DNA, stemming from our impulse to express ideals, warnings, hopes, and experiences. Technology has always been woven through the medium and the distribution: from early humans’ innovation of natural pigments and charcoals for cave paintings to literal representa...",
     "is_new": false,
     "lang": "en",
     "interpretation": "在AI时代规模化创造力，关键挑战在于平衡机器生成与人类原创性的边界。"
    },
    {
     "title": "SpaceX Is Spending $2.8 Billion to Buy Gas Turbines for Its AI Data Centers",
     "url": "https://www.wired.com/story/elon-musk-spacex-spending-gas-turbines-grok/",
     "source": "Wired - AI",
     "date": "2026-05-20",
     "summary": "The investment comes as Elon Musk’s AI unit faces complaints about the carbon-emitting units and looks to become a big player in cloud computing.",
     "is_new": false,
     "lang": "en",
     "interpretation": "SpaceX斥巨资为AI数据中心购燃气轮机，算力军备竞赛升级。"
    },
    {
     "title": "We’re announcing new community investments in Missouri.",
     "url": "https://blog.google/innovation-and-ai/infrastructure-and-cloud/global-network/missouri-programs/",
     "source": "Google AI Blog",
     "date": "2026-05-20",
     "summary": "We’re helping build the state’s next-generation workforce and investing in energy programs.",
     "is_new": false,
     "lang": "en",
     "interpretation": "社区投资落地密苏里，科技巨头加速区域数字基建布局。"
    },
    {
     "title": "A new experiment brings better group meetings to Google Beam",
     "url": "https://blog.google/innovation-and-ai/models-and-research/google-research/google-beam-group-meetings/",
     "source": "Google AI Blog",
     "date": "2026-05-20",
     "summary": "See and hear your colleagues in true-to-life size and sound, making hybrid meetings feel more inclusive and connected.",
     "is_new": false,
     "lang": "en",
     "interpretation": "Google Beam会议新实验，远程协作体验有望质变。"
    },
    {
     "title": "Introducing the Ettin Reranker Family",
     "url": "https://huggingface.co/blog/ettin-reranker",
     "source": "Hugging Face Blog",
     "date": "2026-05-19",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "新型重排序模型家族发布，有望提升信息检索与问答系统性能。"
    },
    {
     "title": "I/O 2026",
     "url": "https://blog.google/innovation-and-ai/technology/developers-tools/google-io-2026-collection/",
     "source": "Google AI Blog",
     "date": "2026-05-19",
     "summary": "At Google I/O 2026, we shared how we’re making AI more helpful for everyone. See everything we announced.",
     "is_new": false,
     "lang": "en",
     "interpretation": "Google I/O 2026召开，预示年度技术战略与AI发展方向公布。"
    },
    {
     "title": "How AI Mode is changing the way people search in the U.S.",
     "url": "https://blog.google/products-and-platforms/products/search/ai-mode-us-insights/",
     "source": "Google AI Blog",
     "date": "2026-05-19",
     "summary": "One year after launch, see how AI Mode’s users are shifting from keywords to natural language queries.",
     "is_new": false,
     "lang": "en",
     "interpretation": "AI搜索模式改变美国用户习惯，反映搜索正从关键词转向智能交互。"
    },
    {
     "title": "Granite Embedding Multilingual R2: Open Apache 2.0 Multilingual Embeddings with 32K Context — Best Sub-100M Retrieval Quality",
     "url": "https://huggingface.co/blog/ibm-granite/granite-embedding-multilingual-r2",
     "source": "Hugging Face Blog",
     "date": "2026-05-14",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "开源多语言嵌入模型性能突破，降低小规模检索应用门槛。"
    },
    {
     "title": "Unlocking asynchronicity in continuous batching",
     "url": "https://huggingface.co/blog/continuous_async",
     "source": "Hugging Face Blog",
     "date": "2026-05-14",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "连续批处理引入异步机制，有望大幅提升推理吞吐效率。"
    },
    {
     "title": "Adding Benchmaxxer Repellant to the Open ASR Leaderboard",
     "url": "https://huggingface.co/blog/open-asr-leaderboard-private-data",
     "source": "Hugging Face Blog",
     "date": "2026-05-06",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "语音识别排行榜新增防刷机制，保障基准测试的公平性与可信度。"
    },
    {
     "title": "从服务沉默玩家，到技术外溢至千行百业：游戏+AI的下一站是什么？",
     "url": "<![CDATA[https://36kr.com/p/3822747968196993?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-05-25",
     "summary": "文丨小葵 编辑丨果脯、刘士武 2026年GDC大会上，《和平精英》策划副总监薛冰披露了一组数据。 AI队友周末活跃玩家突破1770万，累计1.1亿人体验过AI功能，单局消息互动70条，麦克风开启率高达75%，超过了真人双排的历史峰值。 这意味着，大量玩家不仅选择了AI队友，还愿意对着屏幕那头的“数字人”开口说话。它像是一个切口，让我们得以窥见某种长期被行业忽视的集体情绪。从业者们不再追问“AI能否融入游戏”，一个更尖锐的问题浮出水面：当技术已经赢得了漂亮的胜利，接下来它该往哪里走？ 《和平精英》AI战犬 01 “交流”往往是多人游戏中最基础也最脆弱的一环。 大多场景中，玩家可能会将其粗暴...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "游戏AI技术正从服务特定用户外溢至各行各业，预示其将成为产业数字化转型的关键基础设施。"
    },
    {
     "title": "高德问店选址Skill接入钉钉悟空",
     "url": "<![CDATA[https://36kr.com/newsflashes/3824063200301449?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-05-25",
     "summary": "36氪获悉，近日，钉钉企业级AI原生工作平台“悟空”技能广场正式上线了一款名为“高德问店选址智能助手”的Skill。该技能面向连锁品牌加盟商及中小商家，可通过自然语言对话方式，提供开店需要的位置推荐、点位评估、点位对比、立项报告等全流程选址服务。",
     "is_new": true,
     "lang": "zh",
     "interpretation": "高德选址能力接入钉钉，体现地图数据与办公场景深度融合，企业决策智能化再进一步。"
    },
    {
     "title": "谷歌CEO承认Coding落后了",
     "url": "https://www.qbitai.com/2026/05/423390.html",
     "source": "量子位",
     "date": "2026-05-24",
     "summary": "搜索25年来最大改版，但谷歌还不敢一脚切到AI",
     "is_new": true,
     "lang": "zh",
     "interpretation": "谷歌CEO公开承认编程领域落后，反映AI编程赛道竞争白热化，巨头面临技术迭代压力。"
    },
    {
     "title": "什么！你说胡彦斌也在苦修Vibe Coding",
     "url": "https://www.qbitai.com/2026/05/423213.html",
     "source": "量子位",
     "date": "2026-05-24",
     "summary": "Vibe Coding还是太权威了vibe",
     "is_new": true,
     "lang": "zh",
     "interpretation": "胡彦斌学习Vibe Coding，说明AI编程工具正突破技术圈层，向大众创意创作领域渗透。"
    },
    {
     "title": "AI 做不出下一个《GTA》？母公司老板力挺 AI 的同时泼了盆冷水",
     "url": "https://cn.technode.com/post/2026-05-22/take-two-ceo-ai-gta6/",
     "source": "动点科技 - AI",
     "date": "2026-05-22",
     "summary": "Take-Two Interactive […]",
     "is_new": false,
     "lang": "zh",
     "interpretation": "业界大佬理性看待AI创作能力，指出当前技术难以突破顶级游戏开发瓶颈。"
    },
    {
     "title": "谷歌高管：AI 短期内不会导致大规模失业",
     "url": "https://cn.technode.com/post/2026-05-22/google-executive-ai-will-not-cause-mass-unemployment-in-the-short-term/",
     "source": "动点科技 - AI",
     "date": "2026-05-22",
     "summary": "谷歌高级副总裁詹姆斯·曼尼卡（James […]",
     "is_new": false,
     "lang": "zh",
     "interpretation": "谷歌高管为AI就业影响降温，缓解公众对技术替代劳动力的过度焦虑。"
    },
    {
     "title": "派早报：小米召开新品发布会、Photoshop 移除工具支持端侧 AI 模型等",
     "url": "https://sspai.com/post/110020",
     "source": "少数派 - AI",
     "date": "2026-05-22",
     "summary": "绿联推出 NAS 新品 DXP4800 GT、哈博森黑鹰 4 号无人机发布等。查看全文",
     "is_new": false,
     "lang": "zh",
     "interpretation": "小米新品与Adobe端侧AI更新，体现消费电子与创意工具智能化趋势。"
    },
    {
     "title": "AI 分身 24 小时冲浪，它交朋友怎么比我还好？",
     "url": "https://www.ifanr.com/1666415?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-05-21",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "AI社交分身自主互动，挑战人类真实社交关系边界。"
    },
    {
     "title": "跨过800亿美元单季营收后，英伟达需要证明AI基建不是短期风口",
     "url": "https://cn.technode.com/post/2026-05-21/nvidia-fy2027-q1-revenue-816b-ai-infrastructure/",
     "source": "动点科技 - AI",
     "date": "2026-05-21",
     "summary": "AI工厂生意，开始进入验证期",
     "is_new": false,
     "lang": "zh",
     "interpretation": "英伟达营收破800亿，需证明AI基建需求非短期泡沫。"
    },
    {
     "title": "早报｜Google发布一大波AI更新/华为五一假期领跑中国手机市场/小米YU7 GT刷新纽北纪录",
     "url": "https://www.ifanr.com/1666368?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-05-20",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "科技巨头密集发布AI新品，华为与小米在各自领域展现强劲竞争力。"
    },
    {
     "title": "谷歌用 AI 「杀死」谷歌，这场发布会看得人缺氧",
     "url": "https://www.ifanr.com/1666329?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-05-19",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "谷歌用AI颠覆自身产品，发布会信息量巨大，行业格局或生变。"
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
   "stars": 42655,
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
   "stars": 26097,
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
   "stars": 18889,
   "forks": 1756,
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
   "stars": 17974,
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
   "stars": 15247,
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
   "stars": 11706,
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
   "stars": 11396,
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
   "forks": 1282,
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
   "stars": 5593,
   "forks": 1382,
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
   "stars": 4817,
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