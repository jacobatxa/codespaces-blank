const APP_DATA = {
 "today": "2026-05-25",
 "fetched_at": "2026-05-25T10:00:54",
 "total": 139,
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
   "count": 13,
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
   "count": 39
  },
  {
   "name": "AI Agent与智能体",
   "icon": "🤯",
   "color": "#d97706",
   "count": 13
  },
  {
   "name": "具身智能与机器人",
   "icon": "🤖",
   "color": "#059669",
   "count": 8
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
   "count": 4
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
   "count": 53
  }
 ],
 "sections": [
  {
   "name": "大模型与基础架构",
   "icon": "🧠",
   "color": "#7c3aed",
   "count": 39,
   "cards": [
    {
     "title": "Towards Speed-of-Light Text Generation with Nemotron-Labs Diffusion Language Models",
     "url": "https://huggingface.co/blog/nvidia/nemotron-labs-diffusion",
     "source": "Hugging Face Blog",
     "date": "2026-05-23",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "扩散语言模型实现近光速文本生成，将颠覆实时交互与内容生产。"
    },
    {
     "title": "Google’s new anything-to-anything AI model is wild",
     "url": "https://www.theverge.com/tech/936507/gemini-omni-hands-on-deepfake-ai-video",
     "source": "The Verge - AI",
     "date": "2026-05-23",
     "summary": "Last year I deepfaked my kid's stuffed animal to make it look like his plush deer was on vacation. It was an experiment to see if I could re-create the events depicted in a Gemini ad Google was running, and I never showed the videos of Buddy the deer on his adventures to my four-year-old. […]",
     "is_new": false,
     "lang": "en",
     "interpretation": "谷歌多模态AI模型实现任意格式互转，打破信息处理的技术壁垒。"
    },
    {
     "title": "We tried Google’s AI glasses and they’re almost there",
     "url": "https://techcrunch.com/2026/05/22/we-tried-googles-ai-glasses-and-theyre-almost-there/",
     "source": "TechCrunch - AI",
     "date": "2026-05-22",
     "summary": "Google demoed prototype Android XR glasses that overlay Gemini-powered translation, navigation, and other information directly into your field of view.",
     "is_new": false,
     "lang": "en",
     "interpretation": "谷歌AI眼镜接近实用但仍存短板，预示可穿戴设备市场即将迎来新一轮竞争。"
    },
    {
     "title": "Your AI agents need a terminal, not just a vector database",
     "url": "https://venturebeat.com/orchestration/your-ai-agents-need-a-terminal-not-just-a-vector-database",
     "source": "VentureBeat - AI",
     "date": "2026-05-22",
     "summary": "When agentic workflows fail, developers often assume the problem lies in the underlying model’s reasoning abilities. In reality, the limited information provided by the retrieval interface is often the primary limiting factor.Researchers at multiple universities propose a technique called direct ...",
     "is_new": false,
     "lang": "en",
     "interpretation": "智能体需终端交互能力，仅靠数据库无法完成复杂任务。"
    },
    {
     "title": "The Download: coding’s future, the ‘Steroid Olympics,’ and AI-driven science",
     "url": "https://www.technologyreview.com/2026/05/22/1137845/the-download-coding-future-steroid-olympics-ai-science/",
     "source": "MIT Technology Review - AI",
     "date": "2026-05-22",
     "summary": "This is today’s edition of The Download, our weekday newsletter that provides a daily dose of what’s going on in the world of technology. Anthropic’s Code with Claude showed off coding’s future—whether you like it or not At Anthropic’s developer event in London this week, Code with Claude, attend...",
     "is_new": false,
     "lang": "en",
     "interpretation": "编程未来、体育科技滥用与AI驱动科研，三大趋势交汇。"
    },
    {
     "title": "All of the updates from Elon Musk and Sam Altman’s battle over OpenAI",
     "url": "https://www.theverge.com/tech/917225/sam-altman-elon-musk-openai-lawsuit",
     "source": "The Verge - AI",
     "date": "2026-05-21",
     "summary": "Sam Altman and Elon Musk are facing off in a high-stakes trial that could alter the future of OpenAI and its most well-known product, ChatGPT. In 2024, Musk filed a lawsuit accusing OpenAI of abandoning its founding mission of developing AI to benefit humanity and shifting focus to boosting profi...",
     "is_new": false,
     "lang": "en",
     "interpretation": "马斯克与奥特曼的OpenAI控制权之争，影响AI行业格局。"
    },
    {
     "title": "AdventHealth advances whole-person care with OpenAI",
     "url": "https://openai.com/index/adventhealth",
     "source": "OpenAI Blog",
     "date": "2026-05-21",
     "summary": "AdventHealth is using ChatGPT for Healthcare to streamline workflows, reduce administrative burden, and return more time to patient care.",
     "is_new": false,
     "lang": "en",
     "interpretation": "医院用AI实现全人护理，医疗模式从治病转向治人。"
    },
    {
     "title": "I Cloned Myself With Gemini’s AI Avatar Tool. The Result Was Unnervingly Me",
     "url": "https://www.wired.com/story/i-cloned-myself-with-geminis-ai-avatar-tool-the-result-was-unnervingly-me/",
     "source": "Wired - AI",
     "date": "2026-05-21",
     "summary": "I used the Gemini app to generate lifelike videos featuring a digital clone of myself. Google sees this as the future of creation. I’m still creeped out.",
     "is_new": false,
     "lang": "en",
     "interpretation": "用Gemini克隆自己，AI生成的数字分身逼真到令人不安。"
    },
    {
     "title": "Datasette Agent",
     "url": "https://simonwillison.net/2026/May/21/datasette-agent/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-05-21",
     "summary": "We just announced the first release of Datasette Agent, a new extensible AI assistant for Datasette. I've been working on my LLM Python library for just over three years now, and Datasette Agent represents the moment that LLM and Datasette finally come together. I'm really excited about it! Datas...",
     "is_new": false,
     "lang": "en",
     "interpretation": "开源数据探索工具推出智能代理功能，让非技术人员也能用自然语言查询数据库。"
    },
    {
     "title": "Alibaba's proprietary Qwen3.7-Max can run for 35 hours autonomously and supports external harnesses like Anthropic's Claude Code",
     "url": "https://venturebeat.com/technology/alibabas-proprietary-qwen3-7-max-can-run-for-35-hours-autonomously-and-supports-external-harnesses-like-anthropics-claude-code",
     "source": "VentureBeat - AI",
     "date": "2026-05-21",
     "summary": "The AI industry has fully entered the \"agent era,\" a paradigm where AI models do far more than generate text — they now actively plan, execute, and course-correct complex tasks over days rather than seconds. Thus, it's perhaps unsurprising to see Chinese e-commerce giant Alibaba's famed Qwen Team...",
     "is_new": false,
     "lang": "en",
     "interpretation": "阿里千问模型可自主运行35小时并兼容外部工具，标志国产AI在长周期任务上取得突破。"
    },
    {
     "title": "Roundtables: Can AI Learn to Understand the World?",
     "url": "https://www.technologyreview.com/2026/05/21/1137756/roundtables-can-ai-learn-to-understand-the-world/",
     "source": "MIT Technology Review - AI",
     "date": "2026-05-21",
     "summary": "Listen to the session or watch below AI companies want to build systems that understand the external world and overcome the limitations of LLMs. Recent developments have brought world models to the forefront of the AI discussion. Watch a conversation with editor in chief Mat Honan, senior AI edit...",
     "is_new": false,
     "lang": "en",
     "interpretation": "圆桌讨论聚焦AI能否理解世界本质，反映学界对“智能”定义的根本性反思。"
    },
    {
     "title": "Anthropic’s Code with Claude showed off coding’s future—whether you like it or not",
     "url": "https://www.technologyreview.com/2026/05/21/1137735/anthropics-code-with-claude-showed-off-codings-future-whether-you-like-it-or-not/",
     "source": "MIT Technology Review - AI",
     "date": "2026-05-21",
     "summary": "The vibes were strong at Code with Claude, Anthropic’s two-day event for software developers in London that kicked off on May 19, the same day as Google’s I/O in Palo Alto. (A coincidence, not a flex, Anthropic staffers assured me.) “Who here has shipped a pull request in the last week that was c...",
     "is_new": false,
     "lang": "en",
     "interpretation": "克劳德展示AI编程的未来趋势，预示开发者工作方式将剧变。"
    },
    {
     "title": "An OpenAI model has disproved a central conjecture in discrete geometry",
     "url": "https://openai.com/index/model-disproves-discrete-geometry-conjecture",
     "source": "OpenAI Blog",
     "date": "2026-05-20",
     "summary": "An OpenAI model solved the 80-year-old unit distance problem, disproving a major conjecture in discrete geometry and marking a milestone in AI-driven mathematics.",
     "is_new": false,
     "lang": "en",
     "interpretation": "OpenAI模型推翻几何猜想，证明AI在数学研究中的突破性价值。"
    },
    {
     "title": "How Ramp engineers accelerate code review with Codex",
     "url": "https://openai.com/index/ramp",
     "source": "OpenAI Blog",
     "date": "2026-05-20",
     "summary": "How Ramp engineers use Codex with GPT-5.5 to review code and ship improvements, allowing them to get substantive feedback in minutes instead of hours.",
     "is_new": false,
     "lang": "en",
     "interpretation": "代码审查效率提升，AI工具正加速软件开发流程的自动化。"
    },
    {
     "title": "100 things we announced at I/O 2026",
     "url": "https://blog.google/innovation-and-ai/technology/ai/google-io-2026-all-our-announcements/",
     "source": "Google AI Blog",
     "date": "2026-05-20",
     "summary": "This year at Google I/O 2026, we announced Gemini Omni, Google Antigravity, Universal Cart and so much more. Here are the highlights.",
     "is_new": false,
     "lang": "en",
     "interpretation": "百项更新密集发布，谷歌生态系统的竞争壁垒持续加高。"
    },
    {
     "title": "OlmoEarth v1.1: A more efficient family of Earth observation models",
     "url": "https://huggingface.co/blog/allenai/olmoearth-v1-1",
     "source": "Hugging Face Blog",
     "date": "2026-05-19",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "地球观测模型效率提升，将推动遥感数据分析更快更准。"
    },
    {
     "title": "I/O 2026: Welcome to the agentic Gemini era",
     "url": "https://blog.google/innovation-and-ai/sundar-pichai-io-2026/",
     "source": "Google AI Blog",
     "date": "2026-05-19",
     "summary": "The latest from Google I/O: See how we’re helping you get more done with Gemini.",
     "is_new": false,
     "lang": "en",
     "interpretation": "I/O 2026宣告智能体Gemini时代到来，AI从工具转向主动服务。"
    },
    {
     "title": "PaddleOCR 3.5: Running OCR and Document Parsing Tasks with a Transformers Backend",
     "url": "https://huggingface.co/blog/PaddlePaddle/paddleocr-transformers",
     "source": "Hugging Face Blog",
     "date": "2026-05-18",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "PaddleOCR 3.5引入Transformer后端，文档解析精度与效率双提升。"
    },
    {
     "title": "Building Blocks for Foundation Model Training and Inference on AWS",
     "url": "https://huggingface.co/blog/amazon/foundation-model-building-blocks",
     "source": "Hugging Face Blog",
     "date": "2026-05-11",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "AWS为模型训练与推理提供系统化构建方案，降低基础设施门槛。"
    },
    {
     "title": "vLLM V0 to V1: Correctness Before Corrections in RL",
     "url": "https://huggingface.co/blog/ServiceNow-AI/correctness-before-corrections",
     "source": "Hugging Face Blog",
     "date": "2026-05-06",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "vLLM版本迭代强调强化学习中正确性优先，为后续优化奠定基础。"
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
     "title": "DeepSeek V4还能更省！新工具缓存命中率高达99.82%，2折稳定到手",
     "url": "https://www.qbitai.com/2026/05/424552.html",
     "source": "量子位",
     "date": "2026-05-25",
     "summary": "原本4亿+token、61美元的账单，直降至12美元",
     "is_new": true,
     "lang": "zh",
     "interpretation": "新工具缓存命中率近100%，DeepSeek V4推理成本可降至两折，极具性价比。"
    },
    {
     "title": "图灵奖得主领衔，中国大模型第一梯队集结！2026智源大会，看懂AI下一程",
     "url": "https://www.qbitai.com/2026/05/424551.html",
     "source": "量子位",
     "date": "2026-05-25",
     "summary": "报名通道已开，手慢无",
     "is_new": true,
     "lang": "zh",
     "interpretation": "中国AI顶尖力量集结，预示技术路线与产业格局将迎来重大转折。"
    },
    {
     "title": "Claude 通过率不到4%，SaaS-Bench撕碎了Computer-Use的「全自动办公」幻想",
     "url": "https://www.qbitai.com/2026/05/424277.html",
     "source": "量子位",
     "date": "2026-05-25",
     "summary": "UniPat AI 发布 SaaS-Bench 评测，Claude 等主流大模型在真实办公任务中完全通过率最高仅 3.8%，AI 全自动办公远未落地。",
     "is_new": true,
     "lang": "zh",
     "interpretation": "实测暴露AI自动化办公能力严重不足，行业需正视技术瓶颈而非炒作。"
    },
    {
     "title": "未来推理将吃掉70%算力，30%留给训练丨硅谷投资人张璐@AIGC2026",
     "url": "https://www.qbitai.com/2026/05/423441.html",
     "source": "量子位",
     "date": "2026-05-25",
     "summary": "这些AI关键词正在被重新定义",
     "is_new": true,
     "lang": "zh",
     "interpretation": "算力需求结构剧变，推理将成AI产业核心战场，训练占比萎缩。"
    },
    {
     "title": "DeepSeek 要用蜜雪冰城的打法，做中国版 Claude Code",
     "url": "https://www.ifanr.com/1666548?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-05-25",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": true,
     "lang": "zh",
     "interpretation": "低价策略冲击AI编程工具市场，中国版Claude Code或重塑行业生态。"
    },
    {
     "title": "将 600 亿参数大模型装进手机的瓶颈，终于被中国 AI 公司突破了",
     "url": "https://www.ifanr.com/1666847?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-05-25",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": true,
     "lang": "zh",
     "interpretation": "端侧大模型技术获突破，手机运行600亿参数模型成为可能。"
    },
    {
     "title": "港中文李鸿升团队论文 MindVLA-U1：VLA 不再输给 VA，语言真正进入自动驾驶决策",
     "url": "https://www.leiphone.com/category/ai/aBSRTXyAOqvn84ow.html",
     "source": "雷锋网 - AI",
     "date": "2026-05-25",
     "summary": "MindVLA-U1：统一视觉语言动作架构，实现理解后规划。 作者丨郑佳美 编辑丨马晓宁 在自动驾驶进入大模型时代之后，行业正在从传统的“感知、预测、规划、控制”模块化流水线，逐步转向端到端智能系统。过去，VA 模型能够直接从视觉输入生成驾驶轨迹，在规划精度和实时性上表现突出，但它们更多依赖隐式视觉特征，很难清楚解释“为什么这样开”，也难以处理那些需要语义理解和常识推理的长尾场景。比如车辆行驶在狭窄居民区道路上，两侧停满车辆，前方可能有行人突然从车缝中出现；又比如在无保护左转路口，系统不仅要判断对向来车速度，还要理解让行关系和潜在风险；再比如施工区域、临停车辆、单纯依靠视觉到轨迹的映射往...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "语言模型首次在自动驾驶决策中超越视觉模型，技术路径实现关键突破。"
    },
    {
     "title": "小鹏副总裁：小鹏可能是唯一欢迎特斯拉FSD入华的车企；有员工喊出「学三星罢工」！曝台积电Q1净利大增58%反降薪；DeepSeek一月内宕机三次",
     "url": "https://www.leiphone.com/category/zaobao/rI3FI7Vjq0Fmv1XA.html",
     "source": "雷锋网 - AI",
     "date": "2026-05-25",
     "summary": "要闻提示1.小鹏副总裁：小鹏可能是唯一欢迎特斯拉FSD入华的车企2.揭秘长安汽车内幕交易案：5名员工利用内幕消息获利400余万，被罚1669万3.腾讯多个事业群试点取消组长，调整人员架构4.台积电Q1净利大增58%反而被曝降薪？有员工喊出“学三星罢工”5.阿里、京东、美团三方竞购朴朴超市，估值20-50亿美元6.冲上热搜！DeepSeek又崩了：一月内宕机了三次7.古尔曼：苹果 watchOS 27 更新将主要关注稳定性、较小优化，而不是引入重大新功能8.接连卷入芯片走私案！黄仁勋隔空喊话美超微：管好自己的公司今日头条小鹏副总裁：小鹏可能是唯一欢迎特斯拉FSD入华的车企5月24日消息，日...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "反映车企对技术开放态度分化，及芯片巨头内部劳资与运营危机。"
    },
    {
     "title": "华为具身大脑一号位做类脑智能世界模型，对标JEPA，获亿元级融资｜硬氪首发",
     "url": "<![CDATA[https://36kr.com/p/3819931562414467?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-05-25",
     "summary": "作者｜黄楠 编辑｜袁斯来 硬氪获悉，具身智能大脑公司「具脑磐石」完成新一轮亿元级融资，本轮融资由具备深厚类脑与具身产业背景的顶尖产业资本领投，老股东及多家顶尖基金复投和跟投，多维资本担任独家财务顾问。同时，更新一轮融资也在同步交割中。 资金将重点投入核心技术研发、人才团队扩容及全球化市场拓展，以加速认知世界模型（Cognitive World Model）的研发、工程化落地与真实场景验证。 类脑智能世界模型（图源/企业） 具脑磐石成立于2025年，以类脑智能为底层范式，构建面向真实物理世界的认知世界模型（Cognitive World Model）。公司由“华为具身大脑一号位”朱森华创立...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "华为布局类脑智能世界模型，对标前沿技术，获资本认可。"
    },
    {
     "title": "上海：支持微短剧企业租用智能算力，对租用智能算力的主体给予支持",
     "url": "<![CDATA[https://36kr.com/newsflashes/3824513366987141?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-05-25",
     "summary": "36氪获悉，上海市文化和旅游局印发《上海市加快推进人工智能赋能微短剧高质量发展的若干措施》。其中提出，优化“AI+微短剧”核心要素供给。支持智能算力使用，支持微短剧企业租用智能算力，对租用智能算力的主体给予支持。支持视听模型使用，支持微短剧企业调用云平台部署的第三方大模型API（应用程序接口）。支持视听语料使用，支持微短剧企业采购非关联方的语料进行垂类模型训练、智能体应用研发。鼓励创制资源共建共享，支持微短剧企业建设数字资产库、IP库。",
     "is_new": true,
     "lang": "zh",
     "interpretation": "上海以算力补贴推动微短剧行业与AI技术融合，降低创新成本。"
    },
    {
     "title": "安克消噪耳机搭载AI音频芯片Thus™ A1，获吉尼斯“最清晰通话”认证",
     "url": "https://www.leiphone.com/category/weiwu/SE0UCzo94OXxs9aG.html",
     "source": "雷锋网 - AI",
     "date": "2026-05-22",
     "summary": "2026年5月22日，安克创新在深圳总部举办新品发布会，正式发布安克消噪耳机Liberty 5 Pro Max与Liberty 5 Pro，并宣布两款产品获得 “全球通话最清晰的无线蓝牙耳机” 的吉尼斯世界纪录认证。支撑这一认证的，是安克与知存科技历时三年联合研发的首款基于存算一体架构的大模型算力音频AI芯片Thus™ A1，以及安克在通话降噪算法与系统集成上的持续研发积累。安克创新创始人兼CEO阳萌在发布会上表示：“当芯片的算力大了很多之后，声音会清楚非常多，这是听不听得清的差别，更是听不听得懂的差别。这颗芯片搭载的模型不只在降噪这个领域，还会在音质、ANC等领域，给大家提供跟以前截然...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "专用AI音频芯片实现消费级降噪通话突破，技术差异化带动认证背书。"
    },
    {
     "title": "寻找 AI 的「第三语言」：中间表示如何打通多模态鸿沟 ｜ CVPR 2026",
     "url": "https://www.leiphone.com/category/ai/Hy3aSP6RBtgHE310.html",
     "source": "雷锋网 - AI",
     "date": "2026-05-22",
     "summary": "“请把杯子拿起来”。这句话对你来说轻而易举。因为你看到了杯子，理解了“拿起来”的含义，手自然地伸过去、捏住、提起。但对一个 AI 系统来说，这中间隔着数道几乎不可逾越的鸿沟：语言到动作、动作到视觉、视觉到空间、空间到执行。传统做法是强迫模型学会直接映射，通过输入一段文字或一组动作参数，让其直接输出像素级的视频帧或关节角度。这种方法在受限环境和充足标注数据下勉强可行，但一旦面对真实世界的复杂性，系统就会崩溃，因为鸿沟太宽，直接跨越注定失败。清华大学智能产业研究院赵昊团队在 CVPR 2026 发表的四篇论文，共享着同一个设计哲学：当两种模态之间的鸿沟太大，真正的解法是为它们搭桥，找到一种“...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "多模态中间表示或成AI理解世界的“通用语”，打破数据孤岛。"
    },
    {
     "title": "谷歌掀桌，一口气甩出16个AI王炸",
     "url": "https://www.leiphone.com/category/ai/k2qs0VRU74Ub6CCw.html",
     "source": "雷锋网 - AI",
     "date": "2026-05-22",
     "summary": "Google I/O 向来是全球开发者日历上最密集的信息节点，更是科技巨头宣示AI野心的最高舞台。2026年5月19日，加州山景城，Sundar Pichai 在两个小时内扔了16款核心产品更新。其中有5个产品各自坐拥30亿用户，Gemini 助手已有9亿用户，搜索AI Mode上线仅一年，月活突破10亿。没有\"One More Thing\"的悬念节奏，没有刻意留到最后的重磅彩蛋。Google选择了一种近乎轰炸式的信息发布策略：把所有东西一次性摊在桌面上。Pichai在台上说了一句耐人寻味的话：\"最前沿的Agent可能只触达过世界上0.1%的人。真正的问题，是怎么把这种前沿能力规模化交付...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "谷歌密集发布16项AI产品，意在巩固生态主导权并压制对手。"
    },
    {
     "title": "Anthropic 花 3 亿美金买下 API「修路工」，打响连接层暗战",
     "url": "https://www.leiphone.com/category/ai/Yqq5YAFbgrGAusRi.html",
     "source": "雷锋网 - AI",
     "date": "2026-05-22",
     "summary": "5月18日，Anthropic宣布了一笔看似“平淡”的收购：买下纽约的开发者工具公司Stainless，估值超过3亿美元。被收购的公司Stainless不是一家普通的 SaaS 公司，它的特殊之处在于，它几乎服务了AI行业的所有头部玩家。其客户名单里躺着 OpenAI、Google、Cloudflare、Replicate 和 Runway 等一众硅谷巨头。Stainless 的核心业务听起来甚至有些枯燥：将结构化的 API 规范，自动转换为 TypeScript、Python、Go 等各种语言的 SDK（软件开发工具包）。同时提供CLI工具和MCP（Model Context Prot...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "Anthropic重金收购API中间件公司，抢占AI应用落地的关键连接层。"
    },
    {
     "title": "FSD入华前奏？曝特斯拉国内9城急招智驾测试员；曾对标乔布斯！大疆的对手GoPro要被卖了：3年亏损近40亿；字节Seedance 2.1即将发布",
     "url": "https://www.leiphone.com/category/zaobao/kLtJrYfYVt7gE0sF.html",
     "source": "雷锋网 - AI",
     "date": "2026-05-22",
     "summary": "要闻提示1.FSD入华前奏？曝特斯拉国内急招智驾测试员，覆盖9大城市2.曾对标乔布斯！大疆的对手GoPro要被卖了：3年亏损近40亿3.字节Seedance 2.1即将发布，生成质量预计提升约20%4.月之暗面 Kimi 融资获国资加持，国智投、中国移动等央企巨头入场5.罗永浩遭前合伙人炮轰：一辈子都在装猛男，假装自己网络无敌6.DeepSeek回应信息“串台”BUG：特殊字符引发模型幻觉，不会泄露隐私7.网友建议微信新增聊天列表长按多选删除功能，微信员工回应8.谷歌深夜炸场！最强模型Gemini 3.5 Flash发布：速度快4倍，干翻GPT-5.5今日头条FSD入华前奏？曝特斯拉国内...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "特斯拉急招国内测试员，FSD入华进入倒计时；GoPro亏损求售，大疆对手陷困境。"
    },
    {
     "title": "大模型狂飙的尽头，这家国产 GPU 厂商要把算力放在客厅",
     "url": "https://www.ifanr.com/1666549?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-05-21",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "国产GPU厂商将算力推向家庭场景，试图在AI终端市场开辟新赛道。"
    },
    {
     "title": "早报｜448元，iPhone绝版配件回归/Meta用员工键鼠数据训练AI，扎克伯格：外包不够聪明/GoPro考虑出售或合并",
     "url": "https://www.ifanr.com/1666545?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-05-21",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "iPhone绝版配件高价回归，Meta用员工数据训练AI引隐私争议，GoPro寻求出售。"
    },
    {
     "title": "对标特斯拉FSD，Momenta借势出海",
     "url": "https://www.leiphone.com/category/transportation/3chtnA4AOy1BLrwW.html",
     "source": "雷锋网 - AI",
     "date": "2026-05-21",
     "summary": "中国车企在过去几年间完成了产品、品牌和生态体系的逐步出海。而接下来，很可能是智驾技术的全球远征。MomentaCEO曹旭东判断，2028年将是海外城市NOA的拐点。Momenta和上汽MG做好了准备。北京车展上，双方联合宣布，下半年推出的全新轿跑车型MG07，搭载MomentaR7强化学习世界模型、X7大模型专用芯片，主打软硬一体路线。作为全球品牌，MG将以这款新车为进攻全球市场，而Momenta也将借助MG车型，深入特斯拉腹地，迎来海外市场布局的关键挑战。曹旭东在采访中透出兴奋与期待。他宣布，R7对标FSD V14，“我们要做中国年轻人的特斯拉。”中美两国“老司机”出海欧洲，谁会赢？曹...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "Momenta对标特斯拉FSD并加速出海，中国智驾方案开始全球竞争。"
    }
   ]
  },
  {
   "name": "AI Agent与智能体",
   "icon": "🤯",
   "color": "#d97706",
   "count": 13,
   "cards": [
    {
     "title": "datasette-agent 0.1a4",
     "url": "https://simonwillison.net/2026/May/24/datasette-agent/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-05-24",
     "summary": "Release: datasette-agent 0.1a4 Taking advantage of the new makeJumpSections() JavaScript plugin hook added in Datasette 1.0a30, datasette-agent now presents this \"Start a new agent chat\" interface as part of the Jump to menu, any time you hit /: You can try this out by signing into agent.datasett...",
     "is_new": true,
     "lang": "en",
     "interpretation": "datasette-agent插件初版上线，自动化数据管理更便捷。"
    },
    {
     "title": "AI agents are quietly generating chaos engineering failures enterprises don’t track yet",
     "url": "https://venturebeat.com/orchestration/ai-agents-are-quietly-generating-chaos-engineering-failures-enterprises-dont-track-yet",
     "source": "VentureBeat - AI",
     "date": "2026-05-24",
     "summary": "There is a category of production incident that engineering teams are not tracking yet — because it doesn't fit any existing postmortem template. The agent initiated an action. The action was technically correct given the agent's context. The context was incomplete. The infrastructure cascaded. A...",
     "is_new": true,
     "lang": "en",
     "interpretation": "AI代理引发的系统故障未被企业察觉，可能造成隐蔽性运营风险。"
    },
    {
     "title": "OpenAI named a Leader in enterprise coding agents by Gartner",
     "url": "https://openai.com/index/gartner-2026-agentic-coding-leader",
     "source": "OpenAI Blog",
     "date": "2026-05-22",
     "summary": "OpenAI is named a leader in the 2026 Gartner Magic Quadrant for Enterprise AI Coding Agents, with Codex recognized for innovation and enterprise-scale deployment.",
     "is_new": false,
     "lang": "en",
     "interpretation": "企业级AI编码能力获权威认可，将加速行业技术落地。"
    },
    {
     "title": "D&B's database of 642 million businesses was built for humans, not AI agents. So they rebuilt it.",
     "url": "https://venturebeat.com/data/d-and-bs-database-of-642-million-businesses-was-built-for-humans-not-ai-agents-so-they-rebuilt-it",
     "source": "VentureBeat - AI",
     "date": "2026-05-22",
     "summary": "Dun & Bradstreet has spent over 180 years building a comprehensive commercial database. Its Commercial Graph, covering 642 million businesses and their relationships, corporate hierarchies and risk profiles, was designed for people. Credit analysts, risk managers and sales professionals who could...",
     "is_new": false,
     "lang": "en",
     "interpretation": "企业数据为AI重构，传统数据库向智能体友好型转型成趋势。"
    },
    {
     "title": "datasette-agent-sprites 0.1a0",
     "url": "https://simonwillison.net/2026/May/21/datasette-agent-sprites/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-05-21",
     "summary": "Release: datasette-agent-sprites 0.1a0 A Datasette Agent plugin for running commands in a Fly Sprites sandbox. Tags: sandboxing, datasette, fly, datasette-agent",
     "is_new": false,
     "lang": "en",
     "interpretation": "精灵图插件为AI代理添加可视化能力，降低数据应用开发门槛。"
    },
    {
     "title": "datasette-agent-charts 0.1a2",
     "url": "https://simonwillison.net/2026/May/21/datasette-agent-charts/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-05-21",
     "summary": "Release: datasette-agent-charts 0.1a2 \"View SQL query\" buttons below rendered charts. Tags: datasette, datasette-agent",
     "is_new": false,
     "lang": "en",
     "interpretation": "图表插件让AI代理直接生成交互式数据可视化，加速分析决策流程。"
    },
    {
     "title": "datasette-agent 0.1a3",
     "url": "https://simonwillison.net/2026/May/21/datasette-agent-2/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-05-21",
     "summary": "Release: datasette-agent 0.1a3 \"View SQL query\" buttons for both visible tables and collapsed SQL result tool calls. Don't display empty reasoning chunks Improved handling of truncated responses - table still displays to the user even if the SQL results were truncated when showing the agent. See ...",
     "is_new": false,
     "lang": "en",
     "interpretation": "数据代理框架进入早期测试，预示自动化数据工作流将更易部署。"
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
     "interpretation": "企业AI代理因“学后即忘”频繁失败，暴露当前架构缺乏长期记忆能力的致命缺陷。"
    },
    {
     "title": "The Open Agent Leaderboard",
     "url": "https://huggingface.co/blog/ibm-research/open-agent-leaderboard",
     "source": "Hugging Face Blog",
     "date": "2026-05-18",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "开放智能体排行榜发布，为评估AI自主能力提供统一基准。"
    },
    {
     "title": "华为发布AIDC数据基础设施全栈方案，覆盖数据湖至智能体框架五大层级",
     "url": "https://www.leiphone.com/category/CorporateServices/hZtu4I7d1wnDwKWt.html",
     "source": "雷锋网 - AI",
     "date": "2026-05-25",
     "summary": "当地时间5月21日，以“数据觉醒，存力跃迁”为主题的2026华为创新数据基础设施论坛在巴黎举行。会上，华为正式发布华为AIDC 数据基础设施全栈方案，覆盖数据湖、知识与记忆平台、模型工程与资源调度、智能体框架、数据韧性平台五大核心层级，旨在助力企业加速推进 AI 数据中心建设、实现 AI 规模化落地。华为数据存储产品线总裁袁远将此次方案发布置于一个清晰的时代判断之下：\"当下，AI 正深刻改变企业运营模式。Agent 加速普及，成为新型数字生产力主体，逐步成长为企业的常态化'数字员工'；同时，AI 应用持续深化，企业 Token 消耗量迎来爆发式增长。\"他引用的数字印证了这一判断：目前全球...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "华为发布全栈AI数据方案，打通从数据管理到智能应用的全链条。"
    },
    {
     "title": "上海：布局市级“AI+微短剧”中试基地，支持“AI+微短剧”应用创新",
     "url": "<![CDATA[https://36kr.com/newsflashes/3824513091752069?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-05-25",
     "summary": "36氪获悉，上海市文化和旅游局印发《上海市加快推进人工智能赋能微短剧高质量发展的若干措施》。其中提出，布局市级“AI+微短剧”中试基地。支持企业、科研院所、高校联合开展中试基地建设与运营，推动人工智能深度赋能微短剧内容生产传播全链路，探索形成具有推广示范效应的行业解决方案。支持“AI+微短剧”应用创新。鼓励企业聚焦行业典型应用场景，打造AI微短剧技能库、智能体。对自主研发、市场认可的智能体项目，按不超过实际研发投入20%给予最高1000万元支持。",
     "is_new": true,
     "lang": "zh",
     "interpretation": "上海建设AI+微短剧中试基地，加速应用创新与产业落地。"
    },
    {
     "title": "卷到今天，Agent的含金量还在提升丨AIGC2026圆桌论坛",
     "url": "https://www.qbitai.com/2026/05/423421.html",
     "source": "量子位",
     "date": "2026-05-24",
     "summary": "大厂集体下场后，创业公司还有哪些机会？",
     "is_new": true,
     "lang": "zh",
     "interpretation": "强调Agent技术正从概念走向落地，其商业价值持续被行业认可。"
    }
   ]
  },
  {
   "name": "具身智能与机器人",
   "icon": "🤖",
   "color": "#059669",
   "count": 8,
   "cards": [
    {
     "title": "These Robots Are Making Meals for a Nonprofit in San Francisco’s Tenderloin",
     "url": "https://www.wired.com/story/these-robots-are-making-meals-for-a-nonprofit-in-san-franciscos-tenderloin/",
     "source": "Wired - AI",
     "date": "2026-05-24",
     "summary": "A nonprofit in the city’s most troubled district has turned to robotic meal prep tech to make up for a dearth of human volunteers.",
     "is_new": true,
     "lang": "en",
     "interpretation": "旧金山非营利组织用机器人做饭，科技解决社区饥饿问题。"
    },
    {
     "title": "Catch up on the Dialogues stage at Google I/O 2026.",
     "url": "https://blog.google/innovation-and-ai/technology/ai/io-2026-dialogues-recap/",
     "source": "Google AI Blog",
     "date": "2026-05-22",
     "summary": "A recap of the 2026 I/O Dialogues, where leaders discuss the future of AI, quantum computing, robotics and creativity.",
     "is_new": false,
     "lang": "en",
     "interpretation": "谷歌I/O大会对话环节聚焦AI前沿，预示技术发展方向。"
    },
    {
     "title": "“VLA和世界模型都不是终局，会有物理世界独有的模型” | 蚂蚁灵波沈宇军@AIGC2026",
     "url": "https://www.qbitai.com/2026/05/424584.html",
     "source": "量子位",
     "date": "2026-05-25",
     "summary": "“要做机器人时代的安卓系统”",
     "is_new": true,
     "lang": "zh",
     "interpretation": "蚂蚁灵波指出VLA与世界模型非终局，物理世界专属模型才是未来方向。"
    },
    {
     "title": "蚂蚁灵波LingBot-VA论文被机器人顶会RSS 2026接收，让机器人边推演、边行动",
     "url": "https://www.qbitai.com/2026/05/424581.html",
     "source": "量子位",
     "date": "2026-05-25",
     "summary": "获得了国际机器人研究共同体的高度认可",
     "is_new": true,
     "lang": "zh",
     "interpretation": "蚂蚁灵波论文被机器人顶会接收，实现机器人边推演边行动的技术突破。"
    },
    {
     "title": "华为具身大脑一号位创业，用认知科学造世界模型，获亿元级融资",
     "url": "https://www.qbitai.com/2026/05/423455.html",
     "source": "量子位",
     "date": "2026-05-25",
     "summary": "用“人类心智”重做具身智能",
     "is_new": true,
     "lang": "zh",
     "interpretation": "华为系创业新方向，用认知科学突破AI物理世界理解，获资本重注。"
    },
    {
     "title": "36氪首发 | 商汤国香投了一家消费级空间相机公司，为具身智能采集真实世界数据",
     "url": "<![CDATA[https://36kr.com/p/3824089662853513?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-05-25",
     "summary": "作者丨欧雪 编辑丨袁斯来 硬氪获悉，消费级空间相机公司竹马创新近日完成了数千万天使+轮融资，本轮由商汤国香资本领投，鼎晖VGC、峰瑞资本跟投，深渡资本担任后续独家财务顾问。资金将主要用于产品研发、量产准备及海外市场拓展。 竹马创新成立于2025年11月，是一家以Camera + AI为核心的空间智能公司。公司希望定义一种新的AI硬件品类——空间相机：既是消费级3D内容创作工具，更是面向具身智能与世界模型的真实世界三维数据入口。 团队方面，创始人张吉曾任群核科技副总裁，深度参与大规模空间数据处理与商业化；首席科学家过洁为南京大学长聘副教授、3DGS和空间仿真领域顶尖科学家；团队具备从三维数...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "商汤通过投资消费级硬件，为具身智能获取真实场景训练数据。"
    },
    {
     "title": "新加坡工业机器人公司Doozy Robotics获得种子轮融资",
     "url": "https://cn.technode.com/post/2026-05-22/doozy-robotics-seed-funding-industrial-robots/",
     "source": "动点科技 - AI",
     "date": "2026-05-22",
     "summary": "具体金额未披露",
     "is_new": false,
     "lang": "zh",
     "interpretation": "显示资本对东南亚工业自动化赛道兴趣升温，机器人创业获早期支持。"
    },
    {
     "title": "独家丨前美团外卖技术负责人入局餐饮具身模型，「元节智能」获千万级种子轮融资",
     "url": "https://www.leiphone.com/category/robot/c3WgJgUydmWpEoWz.html",
     "source": "雷锋网 - AI",
     "date": "2026-05-22",
     "summary": "雷峰网独家获悉，具身智能初创公司「元节智能（AtomBite.AI）」已于近期完成千万级种子轮融资。本轮由英诺科创基金领投，水木清华校友种子基金、知名投资人个人跟投。据悉，本轮融资将主要用于餐饮场景具身世界模型研发、核心产品打磨及落地。今年3月底元节智能才在苏州注册成立，成立不到两个月即完成首轮融资，同时已获得了国内外多家头部公司产品合作部署意向。据了解，企业核心团队汇聚了来自清华、中科大、美团、地平线等顶尖高校与科技公司的研发负责人及精锐人才，团队背景实力雄厚。 01 清华博士+美团产研班底 元节智能创始人兼CEO王栋博士师从中国人工智能泰斗、清华大学张钹院士，深耕人工智能领域十余年，...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "前大厂高管跨界创业，餐饮具身模型赛道获资本关注，技术落地场景明确。"
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
     "interpretation": "Armin Ronacher观点被引用，技术社区思想碰撞值得关注。"
    },
    {
     "title": "AI is being used to resurrect the voices of dead pilots",
     "url": "https://techcrunch.com/2026/05/22/ai-is-being-used-to-resurrect-the-voices-of-dead-pilots/",
     "source": "TechCrunch - AI",
     "date": "2026-05-22",
     "summary": "People used AI on a spectrogram image of cockpit recordings to reconstruct them, forcing the NTSB to temporarily block access to its docket system.",
     "is_new": false,
     "lang": "en",
     "interpretation": "AI复活逝者语音引发伦理争议，技术边界与情感慰藉如何平衡？"
    },
    {
     "title": "US scrambles to stop Internet users re-creating dead pilots’ voices",
     "url": "https://arstechnica.com/ai/2026/05/ai-users-re-create-dead-pilots-voices-from-crash-investigation-docs/",
     "source": "ArsTechnica - AI",
     "date": "2026-05-22",
     "summary": "Workaround flouts law that bans NTSB disclosures of cockpit audio recordings.",
     "is_new": false,
     "lang": "en",
     "interpretation": "技术滥用威胁逝者权益，凸显AI语音克隆的伦理监管空白。"
    },
    {
     "title": "In desperate times, graduates find hope in humiliating tech CEOs",
     "url": "https://www.theverge.com/ai-artificial-intelligence/935602/graduates-boo-ai-ceos",
     "source": "The Verge - AI",
     "date": "2026-05-21",
     "summary": "University graduates are booing and heckling corporate executives who praise AI during their commencement ceremonies, and the only people who seem to be genuinely surprised by this are the executives themselves. In a procession of viral videos, 2026 commencement speakers like former Google CEO Er...",
     "is_new": false,
     "lang": "en",
     "interpretation": "毕业生以羞辱科技CEO为乐，反映就业焦虑与权力反思。"
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
     "interpretation": "Google Workspace新增创作与效率工具，办公自动化再升级。"
    },
    {
     "title": "圆桌对话：从“千人千面”到“人心洞察”| 2026AI Partner·北京亦庄AI+产业大会",
     "url": "<![CDATA[https://36kr.com/p/3824154127093892?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-05-25",
     "summary": "AIGC如何从生产工具进阶到情感洞察？当AI能写出剧本、生成音乐、表演微表情，人还剩什么？ 内容产业正在发生生产模式跃迁，传统用户画像在AI时代正在被颠覆，真正要做的是理解用户的情感状态而非静态标签。厂牌效应不会消失，越过技术线之后，人最后坚守的是“手搓”的审美与意义。 以下为圆桌对话内容，经36氪整理编辑： 刘士武丨36氪游戏主编（主持） 庄明浩丨趣丸科技副总裁兼首席战略官 胡维琦丨MiniMax To B 中国区商业化负责人 郑安迪丨柠萌影视旗下短剧厂牌好有本领总经理 刘士武：大家好，我是36氪游戏主编刘士武，也是这场圆桌的主持人，本场圆桌论坛的主题是从“千人千面”到“人心洞察”。A...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "探讨AI从个性化推荐转向深度理解用户情感与心理的行业趋势。"
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
     "title": "Google I/O showed how the path for AI-driven science is shifting",
     "url": "https://www.technologyreview.com/2026/05/22/1137813/google-i-o-showed-how-the-path-for-ai-science-is-shifting/",
     "source": "MIT Technology Review - AI",
     "date": "2026-05-22",
     "summary": "During Tuesday’s Google I/O keynote, Demis Hassabis, the CEO of Google DeepMind, proclaimed that we are currently “standing in the foothills of the singularity.” It was a striking statement—the singularity is the theoretical future moment when AI rapidly exceeds human intelligence and dramaticall...",
     "is_new": false,
     "lang": "en",
     "interpretation": "AI在科研领域的应用路径正发生关键性转变。"
    },
    {
     "title": "把18A塞进主流轻薄本，英特尔「WildCat Lake」想让人人用上AI PC",
     "url": "https://www.leiphone.com/category/chips/gAjsNSvozgcw55bE.html",
     "source": "雷锋网 - AI",
     "date": "2026-05-25",
     "summary": "AI浪潮正在加速席卷和重塑PC产业格局。自2023年英特尔为AI PC定调、首次集成 “CPU+GPU+NPU” XPU架构以来，AI PC的边界被不断扩展。以这一赛道的开创者英特尔为例，产品迭代路径证明了“AI PC是PC演进大方向”的主流观点——第一代完成技术验证，第二代刷新业界对x86能效的认知，第三代则在制程、架构、AI引擎上实现系统级重构。 与此同时，政策与研究层面也在为端侧AI指明方向。在本月初召开的“人工智能终端智能化分级”国家标准宣贯会上，有专家指出，未来AI产品的技术体系将走向“端云协同主导、系统性融合”，高频低耗的AI任务将加速向端侧算力转移。 市场数据也印证了这一趋...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "英特尔推低功耗AI芯片，目标将AI PC普及至主流轻薄笔记本。"
    },
    {
     "title": "龙磁科技：研发的芯片电感产品产能正在建设，处于客户端验证及小批量出货阶段",
     "url": "<![CDATA[https://36kr.com/newsflashes/3824498595238018?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-05-25",
     "summary": "36氪获悉，龙磁科技公告，目前公司研发的芯片电感产品产能正在建设，处于客户端验证及小批量出货阶段，当前该产品尚未形成稳定营收贡献，业务合作及订单交付进度存在不确定性，存在未来业务推进不及预期的风险。",
     "is_new": true,
     "lang": "zh",
     "interpretation": "芯片电感产品进入验证出货阶段，显示国产替代进程加速。"
    },
    {
     "title": "Manus创始人计划融资10亿美元回购公司；曝知名招聘平台主动申请破产；特斯拉官宣：监督版FSD登陆中国！",
     "url": "https://www.leiphone.com/category/zaobao/qFYlp8Q5YFJ9KJRc.html",
     "source": "雷锋网 - AI",
     "date": "2026-05-22",
     "summary": "要闻提示1.CEO曾称大厂高薪惯坏了年轻人！招聘平台“拉勾网”被曝主动申请破产2.Manus创始人计划融资10亿美元回购公司3.山姆超市，突然被曝！网友：像在吃自助餐4.特斯拉官宣：监督版FSD登陆中国！5.为何小米汽车要执着于纽北刷圈？CTO 胡峥楠回应6.京东零售高层大调整：杨博接棒汽车事业部，钟波执掌拍卖业务7.英特尔 CEO 陈立武铁腕新规：若芯片两次流片未能量产，员工将被炒鱿鱼8.供应链传闻苹果 iPhone 2027 年会上类四曲面屏 ID今日头条Manus创始人计划融资10亿美元回购公司5月21日，据外媒报道，Manus三位创始人肖弘、季逸超、张涛正在讨论从外部投资者处融资...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "创始人高价回购、平台破产、FSD入华，三件事折射AI行业资本与监管双重变局。"
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
     "title": "打造创投生态的超级枢纽， 2026投资界SuperLink大会定档6月",
     "url": "https://www.qbitai.com/2026/05/424605.html",
     "source": "量子位",
     "date": "2026-05-25",
     "summary": "6月10-11日盛大启幕",
     "is_new": true,
     "lang": "zh",
     "interpretation": "2026年投资界大会定档，聚焦创投生态枢纽建设，释放行业风向标信号。"
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
     "interpretation": "虚报ARR成风，揭示AI创投圈数据注水乱象，投资者需警惕估值泡沫。"
    },
    {
     "title": "Elon Musk can’t hear you over the sound of his $1.75 trillion IPO",
     "url": "https://techcrunch.com/podcast/elon-musk-cant-hear-you-over-the-sound-of-his-1-75-trillion-ipo/",
     "source": "TechCrunch - AI",
     "date": "2026-05-22",
     "summary": "The SpaceX S-1 is finally here, and the story it tells goes way further than rockets. The filing runs to 36 pages of risk factors alone, and the numbers inside match the ambition: a $28 trillion total addressable market, a pay package tied to establishing a Mars colony, and a valuation target tha...",
     "is_new": false,
     "lang": "en",
     "interpretation": "马斯克1.75万亿美元IPO声量盖过一切，凸显其个人影响力对市场叙事的绝对主导。"
    },
    {
     "title": "SpaceX files to go public, and the math requires a little faith",
     "url": "https://techcrunch.com/video/spacex-files-to-go-public-and-the-math-requires-a-little-faith/",
     "source": "TechCrunch - AI",
     "date": "2026-05-22",
     "summary": "The SpaceX S-1 is finally here, and the story it tells goes way further than rockets. The filing runs to 36 pages of risk factors alone, and the numbers inside match the ambition: a $28 trillion total addressable market, a pay package tied to establishing a Mars colony, and a valuation target tha...",
     "is_new": false,
     "lang": "en",
     "interpretation": "SpaceX上市估值依赖信仰，说明太空经济高回报预期背后缺乏可靠财务支撑。"
    },
    {
     "title": "Can OpenAI’s ‘Master of Disaster’ Fix AI’s Reputation Crisis?",
     "url": "https://www.wired.com/story/openai-chris-lehane-global-affairs-pr/",
     "source": "Wired - AI",
     "date": "2026-05-22",
     "summary": "Global affairs chief Chris Lehane wants to tone down the debate over AI’s societal impacts—and get states to pass laws that won’t derail OpenAI’s meteoric rise.",
     "is_new": false,
     "lang": "en",
     "interpretation": "危机管理专家能否扭转公众对AI的信任危机，成败在此一举。"
    },
    {
     "title": "FTC to Require Cox Media Group, Two Other Firms to Pay Nearly $1 Million to Settle Charges They Deceived Customers About “Active Listening” AI-Powered Marketing Service",
     "url": "https://simonwillison.net/2026/May/22/ftc-active-listening/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-05-22",
     "summary": "FTC to Require Cox Media Group, Two Other Firms to Pay Nearly $1 Million to Settle Charges They Deceived Customers About “Active Listening” AI-Powered Marketing Service Back in 2024 Cox Media Group were caught trying to sell advertisers packages based on \"active listening\", with this deck which c...",
     "is_new": false,
     "lang": "en",
     "interpretation": "FTC重罚虚假AI营销，警示企业不得滥用技术概念欺骗用户。"
    },
    {
     "title": "Spotify and Universal Music strike deal allowing fan-made AI covers and remixes",
     "url": "https://techcrunch.com/2026/05/21/spotify-and-universal-music-strike-deal-allowing-fan-made-ai-covers-and-remixes/",
     "source": "TechCrunch - AI",
     "date": "2026-05-21",
     "summary": "Spotify is partnering with Universal Music Group￼ to let Premium subscribers create AI-generated song covers and remixes, with participating artists receiving a share of the revenue.",
     "is_new": false,
     "lang": "en",
     "interpretation": "用户可合法制作AI翻唱与混音，版权与创作边界被重塑。"
    },
    {
     "title": "The next phase of OpenAI’s Education for Countries",
     "url": "https://openai.com/index/the-next-phase-of-education-for-countries",
     "source": "OpenAI Blog",
     "date": "2026-05-20",
     "summary": "OpenAI advances Education for Countries, expanding AI adoption in schools with new partnerships, teacher training, and tools to improve global learning outcomes.",
     "is_new": false,
     "lang": "en",
     "interpretation": "教育合作计划升级，AI将重塑全球教育资源的公平分配。"
    },
    {
     "title": "Green steel startup Boston Metal is doubling down on critical metals",
     "url": "https://www.technologyreview.com/2026/05/20/1137523/boston-metal-funding-critical-metals/",
     "source": "MIT Technology Review - AI",
     "date": "2026-05-20",
     "summary": "The startup Boston Metal has raised a $75 million funding round to produce critical metals, MIT Technology Review can exclusively report. The company has been known largely for its efforts to clean up steel production, an industry that’s responsible for about 8% of global greenhouse emissions tod...",
     "is_new": false,
     "lang": "en",
     "interpretation": "绿色钢铁转向关键金属，清洁技术产业链争夺战略资源。"
    },
    {
     "title": "Introducing OpenAI for Singapore",
     "url": "https://openai.com/index/introducing-openai-for-singapore",
     "source": "OpenAI Blog",
     "date": "2026-05-19",
     "summary": "OpenAI for Singapore launches a multi-year AI partnership to expand deployment, build local talent, and support businesses and public services with AI.",
     "is_new": false,
     "lang": "en",
     "interpretation": "OpenAI落地新加坡，标志其加速亚太市场布局与本地化。"
    },
    {
     "title": "Advancing content provenance for a safer, more transparent AI ecosystem",
     "url": "https://openai.com/index/advancing-content-provenance",
     "source": "OpenAI Blog",
     "date": "2026-05-19",
     "summary": "OpenAI advances AI content provenance with Content Credentials, SynthID, and a verification tool to help people identify and trust AI-generated media.",
     "is_new": false,
     "lang": "en",
     "interpretation": "强化内容溯源技术，为AI生成内容可信度提供关键保障。"
    },
    {
     "title": "独家解读丨Anthropic每赚100块，为何会被马斯克顺走50？",
     "url": "https://www.leiphone.com/category/industrynews/y43AcoPMgWtTOuzg.html",
     "source": "雷锋网 - AI",
     "date": "2026-05-25",
     "summary": "“SpaceX是除谷歌外，另一家有望冲进10万亿美金市值俱乐部的公司。”今年年初，一位硅谷AI公司CEO刘潇曾向雷峰网如此强调道。一位相识的特朗普幕僚团成员曾告诉他，在特朗普试图超越肯尼迪功绩的政治野心下，SpaceX正在从一家航天公司转变成一头“基建巨兽”。“你看各家现在还在比拼基模，就意味着它不是一个有多大壁垒的事，Lab与Lab之间的差距基本拉不开三个月，而它们的算力消耗还望不到头。这时候做基模的前途有多大，要好好想想了。”刘潇补充道。如今，这一预判的冰山一角正在被掀开。“眼下，AI公司确实在加速给算力厂商打工。”另一位二级市场分析师周强表示。在SpaceX昨日提交的招股书中，一个...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "揭示AI行业利润分配矛盾，凸显科技巨头间竞争与利益博弈。"
    },
    {
     "title": "昀冢科技：目前公司MLCC产品主要应用于消费电子领域，暂未应用于AI算力服务器",
     "url": "<![CDATA[https://36kr.com/newsflashes/3824461967986820?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-05-25",
     "summary": "36氪获悉，昀冢科技公告，公司股票于2026年5月21日、22日、25日连续三个交易日收盘价格涨幅偏离值累计达30%，属于股票交易异常波动。公司MLCC业务具有前期资金投入大、投资周期长等特点，尚处于亏损状态。如果未来行业竞争加剧、行业技术发展趋势发生难以预见的变化、下游行业需求发生重大变化，存在项目效益不及预期的风险。目前公司MLCC产品主要应用于消费电子领域，暂未应用于AI算力服务器。敬请广大投资者注意投资风险，理性决策，审慎投资。",
     "is_new": true,
     "lang": "zh",
     "interpretation": "说明MLCC产品尚未切入AI算力这一高增长赛道，市场预期需调整。"
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
     "interpretation": "网络安全与气候技术转向，反映科技应对全球挑战的新重点。"
    },
    {
     "title": "派早报：GitHub 在微软治下面临技术和人员流失困境",
     "url": "https://sspai.com/post/110130",
     "source": "少数派 - AI",
     "date": "2026-05-25",
     "summary": "GitHub 在微软治下面临技术和人员流失困境老虎、富途、长桥将被全面取缔境内业务谷歌搜索 AI 模式误将 disregard 等关键词当作指令「死了么」更名为「在么在么」用于老人居家安全公安部拟明确取证中获取密码等特殊程序 伦敦 iPhone 盗窃集团采用威胁手法解绑 Apple ID看看就行的小道消息少数派的近期动态你可能错过的好文章查看全文",
     "is_new": true,
     "lang": "zh",
     "interpretation": "微软管理下GitHub技术优势流失，开源生态面临人才与创新危机。"
    }
   ]
  },
  {
   "name": "其他AI资讯",
   "icon": "🔮",
   "color": "#6b7280",
   "count": 53,
   "cards": [
    {
     "title": "Everyone is navigating AI security in real time — even Google",
     "url": "https://techcrunch.com/2026/05/24/everyone-is-navigating-ai-security-in-real-time-even-google/",
     "source": "TechCrunch - AI",
     "date": "2026-05-24",
     "summary": "We're in the transition period -- all of us.",
     "is_new": true,
     "lang": "en",
     "interpretation": "谷歌也需实时应对AI安全挑战，凸显行业普遍焦虑。"
    },
    {
     "title": "I tried Amazon’s Bee wearable and am both intrigued and slightly creeped out",
     "url": "https://techcrunch.com/2026/05/24/i-tried-amazons-bee-wearable-and-am-both-intrigued-and-slightly-creeped-out/",
     "source": "TechCrunch - AI",
     "date": "2026-05-24",
     "summary": "Like other AI wearables, Amazon's Bee offers an odd combination of convenience and privacy anxiety.",
     "is_new": true,
     "lang": "en",
     "interpretation": "亚马逊Bee穿戴设备令人既好奇又不安，隐私边界引关注。"
    },
    {
     "title": "Whatever the mirror test tells us, beluga whales pass it",
     "url": "https://arstechnica.com/science/2026/05/belugas-may-pass-the-mirror-test-but-does-the-mirror-test-still-pass/",
     "source": "ArsTechnica - AI",
     "date": "2026-05-24",
     "summary": "The white whales join the short, contested list of animals that see themselves.",
     "is_new": true,
     "lang": "en",
     "interpretation": "白鲸通过镜像测试，挑战动物自我认知的传统标准。"
    },
    {
     "title": "Hackers are learning to exploit chatbot ‘personalities’",
     "url": "https://www.theverge.com/column/935545/hackers-ai-chatbots",
     "source": "The Verge - AI",
     "date": "2026-05-24",
     "summary": "This is The Stepback, a weekly newsletter breaking down one essential story from the tech world. For more on AI mischief, follow Robert Hart. The Stepback arrives in our subscribers' inboxes at 8AM ET. Opt in for The Stepback here. How it started Hacking the first generation of AI chatbots was a ...",
     "is_new": true,
     "lang": "en",
     "interpretation": "黑客利用聊天机器人“性格”漏洞，AI安全防线再受冲击。"
    },
    {
     "title": "datasette 1.0a30",
     "url": "https://simonwillison.net/2026/May/24/datasette/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-05-24",
     "summary": "Release: datasette 1.0a30 The big new feature in this alpha is a new customizable \"Jump to...\" menu, described in detail in The extensible \"Jump to\" menu in Datasette 1.0a30 on the Datasette blog. You can try it out by hitting / on latest.datasette.io - it looks like this: The new jump_items_sql(...",
     "is_new": true,
     "lang": "en",
     "interpretation": "开源工具datasette发布新版本，数据探索功能持续进化。"
    },
    {
     "title": "datasette-fixtures 0.1a0",
     "url": "https://simonwillison.net/2026/May/24/datasette-fixtures/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-05-24",
     "summary": "Release: datasette-fixtures 0.1a0 One of the smaller features in Datasette 1.0a30 is this: New documented datasette.fixtures.populate_fixture_database(conn) helper for creating the fixture database tables used by Datasette's own tests, intended for plugin test suites. This new plugin takes advant...",
     "is_new": true,
     "lang": "en",
     "interpretation": "datasette-fixtures测试数据工具发布，助力开发者高效调试。"
    },
    {
     "title": "Mad House — Usborne Creepy Computer Games",
     "url": "https://simonwillison.net/2026/May/24/usborne-mad-house/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-05-24",
     "summary": "Tool: Mad House — Usborne Creepy Computer Games Via Hacker News I learned that UK publisher Usborne published free PDFs of their 1980s Computer Books, some of which I remember working through on my Commodore 64 as a child. These were so great! Beautifully illustrated books with fun projects made ...",
     "is_new": true,
     "lang": "en",
     "interpretation": "《疯狂之屋》重印经典游戏书，怀旧与编程教育双重价值。"
    },
    {
     "title": "Ferrari is using IBM’s AI to create F1 superfans",
     "url": "https://techcrunch.com/2026/05/23/ferrari-is-using-ai-to-create-f1-superfans/",
     "source": "TechCrunch - AI",
     "date": "2026-05-23",
     "summary": "IBM and Scuderia Ferrari HP take TechCrunch inside how they are redefining the fan experience.",
     "is_new": false,
     "lang": "en",
     "interpretation": "法拉利用AI精准培养超级车迷，将品牌营销推向个性化新高度。"
    },
    {
     "title": "Elon Musk has given up on solar power (on Earth)",
     "url": "https://techcrunch.com/2026/05/23/elon-musk-has-given-up-on-solar-power-on-earth/",
     "source": "TechCrunch - AI",
     "date": "2026-05-23",
     "summary": "Elon Muks's xAI has gone all in on natural gas, while SpaceX is obsessed with orbital data centers. What happened to the \"solar-electric economy\" he promised?",
     "is_new": false,
     "lang": "en",
     "interpretation": "马斯克放弃地球太阳能布局，或预示其能源战略转向太空。"
    },
    {
     "title": "SpaceX's Starship V3—still a work in progress—mostly successful on first flight",
     "url": "https://arstechnica.com/space/2026/05/spacexs-starship-v3-still-a-work-in-progress-mostly-successful-on-first-flight/",
     "source": "ArsTechnica - AI",
     "date": "2026-05-23",
     "summary": "SpaceX has more to prove before flying Starship all the way to low-Earth orbit.",
     "is_new": false,
     "lang": "en",
     "interpretation": "星舰V3首飞虽不完美但基本成功，为重型火箭迭代积累关键数据。"
    },
    {
     "title": "Two space shuttle-era spacewalkers enter Astronaut Hall of Fame",
     "url": "https://arstechnica.com/space/2026/05/two-space-shuttle-era-spacewalkers-enter-astronaut-hall-of-fame/",
     "source": "ArsTechnica - AI",
     "date": "2026-05-23",
     "summary": "\"Two astronauts whose careers embody excellence, leadership, and service.\"",
     "is_new": false,
     "lang": "en",
     "interpretation": "航天飞机时代宇航员入选名人堂，致敬人类太空探索的黄金岁月。"
    },
    {
     "title": "China’s shark finning could lead to US seafood sanctions",
     "url": "https://arstechnica.com/tech-policy/2026/05/chinas-shark-finning-could-lead-to-us-seafood-sanctions/",
     "source": "ArsTechnica - AI",
     "date": "2026-05-23",
     "summary": "A formal petition to the US government calls for sanctions on Chinese seafood imports.",
     "is_new": false,
     "lang": "en",
     "interpretation": "中国鱼翅贸易或遭美国制裁，折射全球海洋保护与贸易博弈升级。"
    },
    {
     "title": "On the <dl>",
     "url": "https://simonwillison.net/2026/May/23/on-the-dl/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-05-23",
     "summary": "On the I learned a few new-to-me things about the element from this article by Ben Meyer: A can be followed by multiple You can optionally group the and elements in a for styling - but only a . You can label them using ARIA. They've been called \"description lists\", not \"definition lists\", since a...",
     "is_new": false,
     "lang": "en",
     "interpretation": "解读内容"
    },
    {
     "title": "Google goes for the glitter with disco-ball icons: ‘Are y’all sure you still want this?’",
     "url": "https://techcrunch.com/2026/05/22/google-goes-for-the-glitter-with-disco-ball-icons-are-yall-sure-you-still-want-this/",
     "source": "TechCrunch - AI",
     "date": "2026-05-22",
     "summary": "You can now disco ball-ify your entire Pixel home screen, says Google.",
     "is_new": false,
     "lang": "en",
     "interpretation": "谷歌用迪斯科球图标试探用户，反映其设计决策的随意与用户真实需求的错位。"
    },
    {
     "title": "You can no longer Google the word ‘disregard’",
     "url": "https://techcrunch.com/2026/05/22/you-can-no-longer-google-the-word-disregard/",
     "source": "TechCrunch - AI",
     "date": "2026-05-22",
     "summary": "After Google Search's AI update, the word \"disregard\" now effectively breaks the search interface.",
     "is_new": false,
     "lang": "en",
     "interpretation": "谷歌屏蔽“disregard”一词，暴露其搜索算法对敏感词的过度反应与审查争议。"
    },
    {
     "title": "Specialization Beats Scale: A Strategic Variable Most AI Procurement Decisions Overlook",
     "url": "https://huggingface.co/blog/Dharma-AI/specialization-beats-scale",
     "source": "Hugging Face Blog",
     "date": "2026-05-22",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "专业化优于规模化，点明AI采购中忽视垂直场景适配是多数失败项目的根源。"
    },
    {
     "title": "Four Russian satellites are now within striking distance of an ICEYE radarsat",
     "url": "https://arstechnica.com/space/2026/05/a-satellite-company-supporting-ukraine-appears-to-be-in-russias-crosshairs/",
     "source": "ArsTechnica - AI",
     "date": "2026-05-22",
     "summary": "\"This capability is not common for satellites conducting typical missions.\"",
     "is_new": false,
     "lang": "en",
     "interpretation": "俄卫星逼近ICEYE雷达星，标志太空军事化加剧，民用卫星安全面临直接威胁。"
    },
    {
     "title": "Ebola outbreak now third largest recorded and \"spreading rapidly\"",
     "url": "https://arstechnica.com/health/2026/05/ebola-outbreak-now-third-largest-recorded-and-spreading-rapidly/",
     "source": "ArsTechnica - AI",
     "date": "2026-05-22",
     "summary": "Ebola outbreak risk level increased as deaths reach 177 with nearly 750 cases.",
     "is_new": false,
     "lang": "en",
     "interpretation": "埃博拉疫情成第三大且快速蔓延，警示全球卫生系统对新兴疫情响应仍显迟缓。"
    },
    {
     "title": "First-generation Chromecast users stressed by devices suddenly failing",
     "url": "https://arstechnica.com/gadgets/2026/05/original-chromecast-lives-devices-back-on-after-mysteriously-breaking-this-week/",
     "source": "ArsTechnica - AI",
     "date": "2026-05-22",
     "summary": "Google tells Ars it fixed the first-gen Chromecast bug.",
     "is_new": false,
     "lang": "en",
     "interpretation": "初代Chromecast突然变砖，暴露谷歌硬件计划性报废问题，用户信任再受打击。"
    },
    {
     "title": "Trump FCC asks public to comment on whether ABC's The View is a news show",
     "url": "https://arstechnica.com/tech-policy/2026/05/trump-fcc-asks-public-to-comment-on-whether-abcs-the-view-is-a-news-show/",
     "source": "ArsTechnica - AI",
     "date": "2026-05-22",
     "summary": "FCC seeks opinions on whether ABC show's decisions are \"based on newsworthiness.\"",
     "is_new": false,
     "lang": "en",
     "interpretation": "质疑媒体定性，暴露监管机构对新闻定义权的干预意图。"
    },
    {
     "title": "The Boys is dead. Long live Vought Rising.",
     "url": "https://arstechnica.com/culture/2026/05/the-boys-is-dead-long-live-vought-rising/",
     "source": "ArsTechnica - AI",
     "date": "2026-05-22",
     "summary": "\"There's a brighter future. All we need to do is take it.\"",
     "is_new": false,
     "lang": "en",
     "interpretation": "剧集终结但IP扩张，衍生作品将延续暗黑超级英雄宇宙。"
    },
    {
     "title": "Police boast of hacking VPN where criminals \"believed themselves to be safe\"",
     "url": "https://arstechnica.com/tech-policy/2026/05/police-boast-of-hacking-vpn-where-criminals-believed-themselves-to-be-safe/",
     "source": "ArsTechnica - AI",
     "date": "2026-05-22",
     "summary": "Law enforcement intercepted VPN traffic, seized domains, and arrested its operator.",
     "is_new": false,
     "lang": "en",
     "interpretation": "警方技术突破打击犯罪，警示加密工具并非绝对安全。"
    },
    {
     "title": "Review: The Mandalorian and Grogu is ... fine",
     "url": "https://arstechnica.com/culture/2026/05/review-the-mandalorian-and-grogu-is-average-star-wars-no-more-no-less/",
     "source": "ArsTechnica - AI",
     "date": "2026-05-22",
     "summary": "The plot is predictable, the fight scenes are meh, but you can't beat the charm of that little green Grogu.",
     "is_new": false,
     "lang": "en",
     "interpretation": "续作表现平庸，经典IP的延续缺乏突破性创新。"
    },
    {
     "title": "Google’s AI search is so broken it can ‘disregard’ what you’re looking for",
     "url": "https://www.theverge.com/tech/936176/google-ai-overviews-search-disregard",
     "source": "The Verge - AI",
     "date": "2026-05-22",
     "summary": "Google's AI Overviews are running into an interesting problem right now. Earlier on Friday, if you searched for the term \"disregard,\" the AI Overview section would include a response like what you'd see from a more traditional AI chatbot instead of the typical AI summary, as spotted on X. As you ...",
     "is_new": false,
     "lang": "en",
     "interpretation": "AI搜索功能缺陷严重，用户需求被系统逻辑错误覆盖。"
    },
    {
     "title": "Elon, stop trying to make Grok happen",
     "url": "https://www.theverge.com/ai-artificial-intelligence/936219/elon-stop-trying-to-make-grok-happen",
     "source": "The Verge - AI",
     "date": "2026-05-22",
     "summary": "There is a harsh truth about Elon Musk's \"truth-seeking\" AI chatbot Grok: It's not very good, and not many people are using it. That's the takeaway of a new Reuters report, which found that Grok barely appears in federal records of how the US government used AI last year. It's not the only sign x...",
     "is_new": false,
     "lang": "en",
     "interpretation": "强行推广AI助手引发反感，产品体验与用户期待脱节。"
    },
    {
     "title": "The literary world isn’t prepared for AI",
     "url": "https://www.theverge.com/tech/936073/ai-writing-granta-commonwealth-prize",
     "source": "The Verge - AI",
     "date": "2026-05-22",
     "summary": "Since 2012, the British literary magazine Granta has published the regional winners of the annual Commonwealth Short Story Prize. This year, however, there was something off about one of the selections for the prestigious award: It appears to have been written by AI. Jamir Nazir's \"The Serpent in...",
     "is_new": false,
     "lang": "en",
     "interpretation": "文学创作面临AI冲击，传统写作模式与版权体系亟待变革。"
    },
    {
     "title": "Spotify says its AI remix tool is for superfans, but I’m not convinced",
     "url": "https://www.theverge.com/ai-artificial-intelligence/936072/spotify-umg-ai-music-remix-cover-superfan",
     "source": "The Verge - AI",
     "date": "2026-05-22",
     "summary": "AI covers and remixes of songs are already a blight on the internet. Spotify, YouTube, TikTok, and Instagram are awash in flat reggae versions of \"Smells Like Teen Spirit,\" dinky country renditions of The Weeknd, and monotonous Motown reimaginings of AC/DC. Now, a new tool from Spotify will make ...",
     "is_new": false,
     "lang": "en",
     "interpretation": "工具定位存疑，AI混音功能可能沦为小众噱头而非粉丝福利。"
    },
    {
     "title": "Samsung’s memory chip employees negotiated $340,000 bonuses this year",
     "url": "https://www.theverge.com/tech/936002/samsung-memory-chip-employees-deal-strike-bonus",
     "source": "The Verge - AI",
     "date": "2026-05-22",
     "summary": "Details have emerged about a tentative deal struck between Samsung and semiconductor employees who had threatened to strike. The deal reportedly makes some workers eligible for average annual bonuses of $340,000. The proposed 18-day strike had hinged on Samsung's bonus cap for employees in the se...",
     "is_new": false,
     "lang": "en",
     "interpretation": "芯片行业高额奖金折射人才争夺战，技术竞争推高人力成本。"
    },
    {
     "title": "How Virgin Atlantic ships faster with Codex",
     "url": "https://openai.com/index/virgin-atlantic",
     "source": "OpenAI Blog",
     "date": "2026-05-22",
     "summary": "How Virgin Atlantic used Codex to ship its revamped mobile app on a fixed holiday travel deadline, reaching near-total unit test coverage and zero P1 defects.",
     "is_new": false,
     "lang": "en",
     "interpretation": "航空业借AI优化运营，展示传统行业数字化转型新路径。"
    },
    {
     "title": "Even If You Hate AI, You Will Use Google AI Search",
     "url": "https://www.wired.com/story/even-if-you-hate-ai-you-will-use-google-ai-search/",
     "source": "Wired - AI",
     "date": "2026-05-22",
     "summary": "The search giant’s AI-crafted answers are so convenient, you’ll be sucked in—to the detriment of the web and the artists and thinkers behind it.",
     "is_new": false,
     "lang": "en",
     "interpretation": "谷歌AI搜索将成不可回避的工具，用户习惯面临强制改变。"
    },
    {
     "title": "The Gulf’s AI Boom Has an Undersea Cable Problem",
     "url": "https://www.wired.com/story/the-gulfs-ai-boom-has-an-undersea-cable-problem/",
     "source": "Wired - AI",
     "date": "2026-05-22",
     "summary": "Hyperscalers are pushing the Gulf to rethink internet infrastructure as AI raises the stakes of cable disruptions.",
     "is_new": false,
     "lang": "en",
     "interpretation": "海底电缆瓶颈制约中东AI扩张，基础设施短板凸显。"
    },
    {
     "title": "The memory shortage is causing a repricing of consumer electronics",
     "url": "https://simonwillison.net/2026/May/22/memory-shortage/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-05-22",
     "summary": "The memory shortage is causing a repricing of consumer electronics David Oks provides the clearest explanation I've seen yet of why consumer products that use memory are likely to get significantly more expensive over the next few years. The short version is that memory manufacturers - of which t...",
     "is_new": false,
     "lang": "en",
     "interpretation": "内存短缺推高电子产品成本，消费者将面临涨价潮。"
    },
    {
     "title": "Valid certificates, stolen accounts: how attackers broke npm's last trust signal",
     "url": "https://venturebeat.com/security/npm-sigstore-provenance-stolen-identity-audit-grid-2026",
     "source": "VentureBeat - AI",
     "date": "2026-05-22",
     "summary": "On May 19, 633 malicious npm package versions passed Sigstore provenance verification. They were cleared by the system because the attacker had generated valid signing certificates from a compromised maintainer account.Sigstore worked exactly as designed: it verified the package was built in a CI...",
     "is_new": false,
     "lang": "en",
     "interpretation": "软件供应链信任机制遭突破，npm生态安全漏洞敲响警钟。"
    },
    {
     "title": "This AI guitar pedal let me roll my own effects",
     "url": "https://www.theverge.com/ai-artificial-intelligence/935219/polyend-endless-ai-guitar-effects-pedal",
     "source": "The Verge - AI",
     "date": "2026-05-21",
     "summary": "I'm not sure anyone was really asking for an AI guitar pedal. But it was inevitable that someone would build one. One of the first to take the plunge is Polyend, a well-respected music gear maker with a reputation for building niche, idiosyncratic devices. The company has built grooveboxes around...",
     "is_new": false,
     "lang": "en",
     "interpretation": "这款AI吉他踏板让音乐人自定义音效，降低创作门槛。"
    },
    {
     "title": "Meta Is in Crisis, Google Search’s Makeover, and AI Gets Booed by Graduates",
     "url": "https://www.wired.com/story/uncanny-valley-podcast-meta-in-crisis-google-search-makeover-ai-booed-by-graduates/",
     "source": "Wired - AI",
     "date": "2026-05-21",
     "summary": "In this episode of Uncanny Valley, we unpack the mass layoffs at Meta, big announcements at Google I/O, and the latest backlash against AI.",
     "is_new": false,
     "lang": "en",
     "interpretation": "Meta陷入危机、谷歌搜索改版、AI遭毕业生嘘声，科技信任危机。"
    },
    {
     "title": "Scaling creativity in the age of AI",
     "url": "https://www.technologyreview.com/2026/05/21/1137613/scaling-creativity-in-the-age-of-ai/",
     "source": "MIT Technology Review - AI",
     "date": "2026-05-21",
     "summary": "Storytelling is core to humanity’s DNA, stemming from our impulse to express ideals, warnings, hopes, and experiences. Technology has always been woven through the medium and the distribution: from early humans’ innovation of natural pigments and charcoals for cave paintings to literal representa...",
     "is_new": false,
     "lang": "en",
     "interpretation": "在AI时代规模化创意，核心挑战是平衡机器生成效率与人类原创价值。"
    },
    {
     "title": "SpaceX Is Spending $2.8 Billion to Buy Gas Turbines for Its AI Data Centers",
     "url": "https://www.wired.com/story/elon-musk-spacex-spending-gas-turbines-grok/",
     "source": "Wired - AI",
     "date": "2026-05-20",
     "summary": "The investment comes as Elon Musk’s AI unit faces complaints about the carbon-emitting units and looks to become a big player in cloud computing.",
     "is_new": false,
     "lang": "en",
     "interpretation": "巨额投资燃气轮机，显示AI算力扩张对能源基础设施的依赖。"
    },
    {
     "title": "We’re announcing new community investments in Missouri.",
     "url": "https://blog.google/innovation-and-ai/infrastructure-and-cloud/global-network/missouri-programs/",
     "source": "Google AI Blog",
     "date": "2026-05-20",
     "summary": "We’re helping build the state’s next-generation workforce and investing in energy programs.",
     "is_new": false,
     "lang": "en",
     "interpretation": "社区投资落地，科技巨头正通过本地化项目巩固社会信任。"
    },
    {
     "title": "A new experiment brings better group meetings to Google Beam",
     "url": "https://blog.google/innovation-and-ai/models-and-research/google-research/google-beam-group-meetings/",
     "source": "Google AI Blog",
     "date": "2026-05-20",
     "summary": "See and hear your colleagues in true-to-life size and sound, making hybrid meetings feel more inclusive and connected.",
     "is_new": false,
     "lang": "en",
     "interpretation": "会议体验优化实验，远程协作工具向更自然的交互演进。"
    },
    {
     "title": "Introducing the Ettin Reranker Family",
     "url": "https://huggingface.co/blog/ettin-reranker",
     "source": "Hugging Face Blog",
     "date": "2026-05-19",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "新型重排序模型家族发布，有望提升信息检索精准度。"
    },
    {
     "title": "I/O 2026",
     "url": "https://blog.google/innovation-and-ai/technology/developers-tools/google-io-2026-collection/",
     "source": "Google AI Blog",
     "date": "2026-05-19",
     "summary": "At Google I/O 2026, we shared how we’re making AI more helpful for everyone. See everything we announced.",
     "is_new": false,
     "lang": "en",
     "interpretation": "Google I/O 2026召开，预示新一代AI生态与产品方向。"
    },
    {
     "title": "How AI Mode is changing the way people search in the U.S.",
     "url": "https://blog.google/products-and-platforms/products/search/ai-mode-us-insights/",
     "source": "Google AI Blog",
     "date": "2026-05-19",
     "summary": "One year after launch, see how AI Mode’s users are shifting from keywords to natural language queries.",
     "is_new": false,
     "lang": "en",
     "interpretation": "AI搜索模式改变美国用户习惯，搜索正从关键词转向意图理解。"
    },
    {
     "title": "Granite Embedding Multilingual R2: Open Apache 2.0 Multilingual Embeddings with 32K Context — Best Sub-100M Retrieval Quality",
     "url": "https://huggingface.co/blog/ibm-granite/granite-embedding-multilingual-r2",
     "source": "Hugging Face Blog",
     "date": "2026-05-14",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "开源多语言嵌入模型性能突破，小参数规模即可达到顶尖检索质量。"
    },
    {
     "title": "Unlocking asynchronicity in continuous batching",
     "url": "https://huggingface.co/blog/continuous_async",
     "source": "Hugging Face Blog",
     "date": "2026-05-14",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "连续批处理引入异步机制，有望大幅提升推理吞吐与资源利用率。"
    },
    {
     "title": "Adding Benchmaxxer Repellant to the Open ASR Leaderboard",
     "url": "https://huggingface.co/blog/open-asr-leaderboard-private-data",
     "source": "Hugging Face Blog",
     "date": "2026-05-06",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "开放语音识别榜单新增防刷机制，维护评测公平性与可信度。"
    },
    {
     "title": "用AI重构增长：新通教育集团的实践| 2026AI Partner·北京亦庄AI+产业大会",
     "url": "<![CDATA[https://36kr.com/p/3824164325412992?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-05-25",
     "summary": "新通教育创始人麻亚炜坦诚分享了过去五年的转型历程——从数字化基建到全员AI Must，从AI in All到AI Native新业务。她的实践证明：传统企业拥抱AI，最难的不是技术，而是让战略从董事会走到一线。 麻亚炜将AI转型划分为四个递进阶段： 第一阶段（2021-2022）：数字化基建 完成底层数据与系统架构的夯实，为AI应用奠定坚实基础。 第二阶段（2023-2024）：AI Must 战略落地 通过全员公开课普及认知、孵化标杆小组树立典范、赴哈佛与斯坦福验证产品，将AI从\"命令\"转化为\"共识\"。 第三阶段（2025）：AI in All 深度嵌入 将AI融入所有关键业务流程，构...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "展示传统教育机构借助AI实现业务升级的典型案例与路径。"
    },
    {
     "title": "搞定工业质检：AI视觉如何重构高端制造质量防线| 2026AI Partner·北京亦庄AI+产业大会",
     "url": "<![CDATA[https://36kr.com/p/3824158896312709?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-05-25",
     "summary": "半导体光罩上的纳米级缺陷、玻璃基板上几微米的钻孔。广州因特智能展示了AI视觉如何从实验室走进高端制造产线，用软硬结合的方式解决中国在半导体检测装备领域的卡脖子问题。 广州因特智能科技有限公司孵化于西安电子科技大学广州研究院，是校企合作落地的典型科技企业。我们拒绝“纸上算法”，坚持软硬一体，为半导体、光通信、新能源三大领域提供高端检测装备，已服务国内头部客户及全球企业。 以下为演讲内容，经36氪整理编辑： 刘金硕丨广州因特智能科技CEO 非常感谢36氪和亦庄的邀请，很荣幸在这里跟大家进行科技界的产品技术交流。与前几位嘉宾的分享角度不同，我们是一家扎根实体制造的科技公司，专注用AI视觉技术解...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "说明AI视觉技术正成为提升高端制造业质量管控的关键手段。"
    },
    {
     "title": "谷歌CEO承认Coding落后了",
     "url": "https://www.qbitai.com/2026/05/423390.html",
     "source": "量子位",
     "date": "2026-05-24",
     "summary": "搜索25年来最大改版，但谷歌还不敢一脚切到AI",
     "is_new": true,
     "lang": "zh",
     "interpretation": "反映谷歌在AI编程领域面临竞争压力，技术领先地位受挑战。"
    },
    {
     "title": "AI 做不出下一个《GTA》？母公司老板力挺 AI 的同时泼了盆冷水",
     "url": "https://cn.technode.com/post/2026-05-22/take-two-ceo-ai-gta6/",
     "source": "动点科技 - AI",
     "date": "2026-05-22",
     "summary": "Take-Two Interactive […]",
     "is_new": false,
     "lang": "zh",
     "interpretation": "指出AI在复杂创意内容生产上仍有局限，大型游戏开发门槛极高。"
    },
    {
     "title": "谷歌高管：AI 短期内不会导致大规模失业",
     "url": "https://cn.technode.com/post/2026-05-22/google-executive-ai-will-not-cause-mass-unemployment-in-the-short-term/",
     "source": "动点科技 - AI",
     "date": "2026-05-22",
     "summary": "谷歌高级副总裁詹姆斯·曼尼卡（James […]",
     "is_new": false,
     "lang": "zh",
     "interpretation": "释放官方安抚信号，但未否认结构性就业调整的长期趋势。"
    },
    {
     "title": "派早报：小米召开新品发布会、Photoshop 移除工具支持端侧 AI 模型等",
     "url": "https://sspai.com/post/110020",
     "source": "少数派 - AI",
     "date": "2026-05-22",
     "summary": "绿联推出 NAS 新品 DXP4800 GT、哈博森黑鹰 4 号无人机发布等。查看全文",
     "is_new": false,
     "lang": "zh",
     "interpretation": "端侧AI模型落地消费电子，标志本地化智能处理能力进入实用阶段。"
    },
    {
     "title": "AI 分身 24 小时冲浪，它交朋友怎么比我还好？",
     "url": "https://www.ifanr.com/1666415?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-05-21",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "AI社交分身能自主互动交友，或重塑人类对社交与陪伴的认知。"
    },
    {
     "title": "跨过800亿美元单季营收后，英伟达需要证明AI基建不是短期风口",
     "url": "https://cn.technode.com/post/2026-05-21/nvidia-fy2027-q1-revenue-816b-ai-infrastructure/",
     "source": "动点科技 - AI",
     "date": "2026-05-21",
     "summary": "AI工厂生意，开始进入验证期",
     "is_new": false,
     "lang": "zh",
     "interpretation": "英伟达营收破800亿后，市场紧盯其能否证明AI算力需求是长期趋势。"
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
   "stars": 42663,
   "forks": 7610,
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
   "stars": 26099,
   "forks": 5777,
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
   "stars": 18896,
   "forks": 1759,
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
   "stars": 17978,
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
   "stars": 15248,
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
   "stars": 11395,
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
   "forks": 1280,
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
   "forks": 967,
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
   "stars": 7533,
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
   "stars": 5602,
   "forks": 1383,
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