const APP_DATA = {
 "today": "2026-06-23",
 "fetched_at": "2026-06-23T04:00:53",
 "total": 147,
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
   "count": 7,
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
   "count": 12,
   "color": "#f43f5e"
  },
  "动点科技 - AI": {
   "count": 1,
   "color": "#10b981"
  },
  "少数派 - AI": {
   "count": 2,
   "color": "#f97316"
  },
  "雷锋网 - AI": {
   "count": 11,
   "color": "#8b5cf6"
  },
  "36氪 - AI": {
   "count": 15,
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
   "count": 15
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
   "count": 2
  },
  {
   "name": "AI硬件与芯片",
   "icon": "💾",
   "color": "#0891b2",
   "count": 11
  },
  {
   "name": "开源与生态",
   "icon": "🌐",
   "color": "#2563eb",
   "count": 6
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
   "count": 1
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
   "count": 39,
   "cards": [
    {
     "title": "Daybreak: Tools for securing every organization in the world",
     "url": "https://openai.com/index/daybreak-securing-the-world",
     "source": "OpenAI Blog",
     "date": "2026-06-22",
     "summary": "OpenAI introduces new Daybreak tools, including Codex Security and GPT-5.5-Cyber, to help organizations find, validate, and patch vulnerabilities at scale.",
     "is_new": true,
     "lang": "en",
     "interpretation": "安全工具普惠化愿景，降低全球组织防护门槛的宏大目标。"
    },
    {
     "title": "Meta Exposed Data Internally From Its Controversial Employee-Tracking Program",
     "url": "https://www.wired.com/story/meta-accidentally-let-employees-access-each-others-keystroke-data/",
     "source": "Wired - AI",
     "date": "2026-06-22",
     "summary": "Employees had previously raised concerns about the initiative, which involves collecting workers’ keystroke data to train AI models.",
     "is_new": true,
     "lang": "en",
     "interpretation": "内部监控数据泄露，暴露科技巨头员工隐私管理的系统性漏洞。"
    },
    {
     "title": "OpenAI Launches Full-Scale Effort to Patch Open-Source Bugs as It Takes on Anthropic’s Mythos",
     "url": "https://www.wired.com/story/openai-launches-full-scale-effort-to-patch-open-source-bugs-as-it-takes-on-anthropics-mythos/",
     "source": "Wired - AI",
     "date": "2026-06-22",
     "summary": "Amid concerns about AI models’ cybersecurity capabilities, OpenAI revealed an improved version of GPT-5.5-Cyber and its “Patch the Planet” initiative to fix open-source software bugs.",
     "is_new": true,
     "lang": "en",
     "interpretation": "修复开源漏洞对抗竞品叙事，AI安全生态主导权争夺白热化。"
    },
    {
     "title": "Porting the Moebius 0.2B image inpainting model to run in the browser with Claude Code",
     "url": "https://simonwillison.net/2026/Jun/22/porting-moebius/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-22",
     "summary": "This morning on Hacker News I saw Moebius: 0.2B Lightweight Image Inpainting Framework with 10B-Level Performance, describing a small but effective inpainting model - a model where you can mark regions of an image to remove and the model imagines what should fill the space. The released model req...",
     "is_new": true,
     "lang": "en",
     "interpretation": "将小型图像修复模型移植到浏览器，降低AI应用门槛。"
    },
    {
     "title": "Alibaba's AI video model rises to No. 2 in global rankings, as OpenAI's Sora and ByteDance's Seedance fall away",
     "url": "https://venturebeat.com/technology/alibabas-ai-video-model-rises-to-no-2-in-global-rankings-as-openais-sora-and-bytedances-seedance-fall-away",
     "source": "VentureBeat - AI",
     "date": "2026-06-22",
     "summary": "Alibaba Cloud on Sunday released HappyHorse 1.1, a major upgrade to its AI video generation model that the company says delivers production-ready video synthesis across core content creation scenarios. The model is now live on Alibaba Cloud Model Studio with full API access for enterprise custome...",
     "is_new": true,
     "lang": "en",
     "interpretation": "阿里AI视频模型跃居全球第二，显示中国在视频生成领域快速追赶。"
    },
    {
     "title": "No Claude Fable 5? No problem: Sakana achieves frontier performance with new Fugu multi-model, auto synthesis system",
     "url": "https://venturebeat.com/orchestration/no-claude-fable-5-no-problem-sakana-achieves-frontier-performance-with-new-fugu-multi-model-auto-synthesis-system",
     "source": "VentureBeat - AI",
     "date": "2026-06-22",
     "summary": "Last night, the increasingly enterprise-focused AI startup Sakana launched Fugu, a multi-agent orchestration system that delivers frontier-level AI performance through a single, OpenAI-compatible API. Designed for developers, enterprises, and nations seeking resilience against vendor lock-in and ...",
     "is_new": true,
     "lang": "en",
     "interpretation": "无需大模型，新多模型自动合成系统以低成本实现前沿性能。"
    },
    {
     "title": "Researchers introduce Self-Harness, a framework that lets AI agents rewrite their own rules, boosting performance up to 60%",
     "url": "https://venturebeat.com/orchestration/researchers-introduce-self-harness-a-framework-that-lets-ai-agents-rewrite-their-own-rules-boosting-performance-up-to-60",
     "source": "VentureBeat - AI",
     "date": "2026-06-22",
     "summary": "Not every company can or should build their own frontier AI language model. However, the harness controlling the model is something that most enterprises can and should customize for their specific purposes.Of course, this is easier said than done. Agent harnesses are still largely tuned through ...",
     "is_new": true,
     "lang": "en",
     "interpretation": "让AI自主改写规则，性能提升60%，或引发自主系统安全新讨论。"
    },
    {
     "title": "Samsung Electronics brings ChatGPT and Codex to employees",
     "url": "https://openai.com/index/samsung-electronics-chatgpt-codex-deployment",
     "source": "OpenAI Blog",
     "date": "2026-06-21",
     "summary": "Samsung Electronics deploys ChatGPT Enterprise and Codex to employees worldwide, marking one of OpenAI’s largest enterprise AI rollouts.",
     "is_new": false,
     "lang": "en",
     "interpretation": "三星向员工开放ChatGPT和Codex，意在提升内部工作效率与创新。"
    },
    {
     "title": "28 Tips to Take Your ChatGPT Prompts to the Next Level",
     "url": "https://www.wired.com/story/28-tips-to-take-your-chatgpt-prompts-to-the-next-level/",
     "source": "Wired - AI",
     "date": "2026-06-21",
     "summary": "Sure, anyone can use OpenAI’s chatbot. But with smart engineering, you can get way more interesting results.",
     "is_new": false,
     "lang": "en",
     "interpretation": "掌握这些技巧能显著提升ChatGPT回答质量，节省时间与精力。"
    },
    {
     "title": "The Atlantic created a searchable database of the music used to train AI",
     "url": "https://www.theverge.com/ai-artificial-intelligence/953183/the-atlantic-searchable-database-music-ai-training-data",
     "source": "The Verge - AI",
     "date": "2026-06-20",
     "summary": "Atlantic reporter Alex Reisner recently uncovered four datasets of music being used to train AI models and made them fully searchable for the public. Two of the sets are absolutely enormous at 12 million and 9 million tracks. The other two are much smaller, but still represent a significant amoun...",
     "is_new": false,
     "lang": "en",
     "interpretation": "《大西洋月刊》公开AI训练音乐数据库，推动版权与透明度讨论。"
    },
    {
     "title": "Fine-tuning forgets. RAG leaks context. Hypernetworks build the model your agent needs on demand.",
     "url": "https://venturebeat.com/orchestration/fine-tuning-forgets-rag-leaks-context-hypernetworks-build-the-model-your-agent-needs-on-demand",
     "source": "VentureBeat - AI",
     "date": "2026-06-19",
     "summary": "Enterprise teams keep watching the same thing happen. An AI agent demos beautifully, goes to production, and stalls: it runs for a short stretch, then needs a human to top up its context and check its output, and the promised efficiency drains into supervision. The agent did the work; you did the...",
     "is_new": false,
     "lang": "en",
     "interpretation": "微调遗忘、RAG泄露上下文，超网络按需构建模型成新解决方案。"
    },
    {
     "title": "The Download: AI bottleneck debates, and BCI trials take off",
     "url": "https://www.technologyreview.com/2026/06/19/1139327/the-download-llms-bottleneck-breakthrough-bci-trials-take-off/",
     "source": "MIT Technology Review - AI",
     "date": "2026-06-19",
     "summary": "This is today’s edition of The Download, our weekday newsletter that provides a daily dose of what’s going on in the world of technology. A startup claims it broke through a bottleneck that’s holding back LLMs AI startup Subquadratic came out of stealth last month with a huge claim: it had solved...",
     "is_new": false,
     "lang": "en",
     "interpretation": "AI算力瓶颈争议与脑机接口试验加速，预示技术路线分化与突破。"
    },
    {
     "title": "A startup claims it broke through a bottleneck that’s holding back LLMs",
     "url": "https://www.technologyreview.com/2026/06/19/1139313/a-startup-claims-it-broke-through-a-bottleneck-thats-holding-back-llms/",
     "source": "MIT Technology Review - AI",
     "date": "2026-06-19",
     "summary": "The Miami-based AI startup Subquadratic came out of stealth mode last month with a huge claim. It announced that it had solved a mathematical bottleneck that had been holding back large language models for almost a decade. The details were thin, and many people were unconvinced. But Subquadratic ...",
     "is_new": false,
     "lang": "en",
     "interpretation": "初创公司声称突破LLM瓶颈，若属实将大幅降低大模型部署成本。"
    },
    {
     "title": "Is it agentic enough? Benchmarking open models on your own tooling",
     "url": "https://huggingface.co/blog/is-it-agentic-enough",
     "source": "Hugging Face Blog",
     "date": "2026-06-18",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "开源模型工具链评测标准缺失，企业选型缺乏可靠依据。"
    },
    {
     "title": "New usage analytics and updated spend controls for enterprises",
     "url": "https://openai.com/index/chatgpt-enterprise-spend-controls",
     "source": "OpenAI Blog",
     "date": "2026-06-18",
     "summary": "OpenAI introduces new spend controls and usage analytics for ChatGPT Enterprise, helping organizations manage costs and scale AI with confidence.",
     "is_new": false,
     "lang": "en",
     "interpretation": "企业AI支出管控升级，推动商业化部署更透明高效。"
    },
    {
     "title": "Improving health intelligence in ChatGPT",
     "url": "https://openai.com/index/improving-health-intelligence-in-chatgpt",
     "source": "OpenAI Blog",
     "date": "2026-06-18",
     "summary": "Learn how GPT-5.5 Instant improves ChatGPT’s health and wellness responses with stronger reasoning, better context, clearer communication, and physician-informed evaluations.",
     "is_new": false,
     "lang": "en",
     "interpretation": "ChatGPT医疗信息增强，可能改变公众健康咨询方式与准确性。"
    },
    {
     "title": "Using AI to help physicians diagnose rare genetic diseases affecting children",
     "url": "https://openai.com/index/diagnose-rare-childhood-diseases",
     "source": "OpenAI Blog",
     "date": "2026-06-18",
     "summary": "Researchers used an OpenAI reasoning model to help diagnose rare diseases, identifying 18 new diagnoses in previously unsolved cases.",
     "is_new": false,
     "lang": "en",
     "interpretation": "AI辅助罕见病诊断，有望缩短确诊周期并减轻医生负担。"
    },
    {
     "title": "The White House Is Making Up Its Rules for AI in Real Time",
     "url": "https://www.wired.com/story/anthropic-mythos-export-controls-ai-regulations/",
     "source": "Wired - AI",
     "date": "2026-06-18",
     "summary": "Anthropic still can’t distribute Claude Mythos or Fable 5 after running afoul of the Trump administration. But no one can say exactly what the company did wrong.",
     "is_new": false,
     "lang": "en",
     "interpretation": "白宫临时制定AI规则，凸显政策滞后于技术发展的现实困境。"
    },
    {
     "title": "A near-autonomous AI chemist improves a challenging reaction in medicinal chemistry",
     "url": "https://openai.com/index/ai-chemist-improves-reaction",
     "source": "OpenAI Blog",
     "date": "2026-06-17",
     "summary": "OpenAI and Molecule.one show how a near-autonomous AI chemist using GPT-5.4 improved a key drug-making reaction, advancing medicinal chemistry research.",
     "is_new": false,
     "lang": "en",
     "interpretation": "近乎自主的AI化学家优化药物合成，加速新药研发进程。"
    },
    {
     "title": "GLM-5.2 is probably the most powerful text-only open weights LLM",
     "url": "https://simonwillison.net/2026/Jun/17/glm-52/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-17",
     "summary": "Chinese AI lab Z.ai released GLM-5.2 to their coding plan subscribers on June 13th, and then yesterday (June 16th) released the full open weights under an MIT license. Similar in size to their previous GLM-5 and GLM-5.1 releases this is a 753B parameter, 1.51TB monster - with 40 active parameters...",
     "is_new": false,
     "lang": "en",
     "interpretation": "开源最强文本模型诞生，推动AI民主化与竞争格局变化。"
    },
    {
     "title": "How we used Gemini to build Google I/O 2026",
     "url": "https://blog.google/innovation-and-ai/technology/ai/io-2026-google-ai/",
     "source": "Google AI Blog",
     "date": "2026-06-01",
     "summary": "Learn how Googlers used AI to produce Google I/O 2026.",
     "is_new": false,
     "lang": "en",
     "interpretation": "揭秘谷歌如何用Gemini打造年度开发者大会，展示AI赋能活动全流程。"
    },
    {
     "title": "9 demos of Gemini Omni and Gemini 3.5 in action",
     "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-omni-3-5-videos/",
     "source": "Google AI Blog",
     "date": "2026-05-29",
     "summary": "Watch 9 videos showing the capabilities of Gemini Omni and Gemini 3.5, announced at Google I/O 2026.",
     "is_new": false,
     "lang": "en",
     "interpretation": "九大演示直观展示Gemini Omni与3.5模型的实际能力，技术落地更清晰。"
    },
    {
     "title": "8点1氪丨SpaceX跌破IPO首日收盘价，市值蒸发4000亿美元；英国首相斯塔默宣布辞职；SK海力士市值首超三星电子",
     "url": "<![CDATA[https://36kr.com/p/3865001641006081?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-06-23",
     "summary": "今日热点导览 三星电子向韩国所有员工开放ChatGPT和Codex 港股智谱暴涨，总市值突破1万亿港元 何小鹏、曾顺福、白重恩出任蚂蚁集团独立董事 杨子卸任巨力集团职务 供应链公司：已向苹果首款折叠屏iPhone小批量供货 TOP3大新闻 纳指收跌1.3%，SpaceX下挫16%并跌破IPO首日收盘价 美股三大指数收盘涨跌不一，道指涨0.29%，纳指跌1.32%，标普500指数跌0.37%。SpaceX股价大跌16%，市值蒸发4000亿美元并跌破首日收盘价。 谷歌收跌5%，此前AI负责人Jumper离职。亚马逊下跌4.8%，为2月初以来的最大单日跌幅。芯片股涨跌不一，美光科技涨超6%，英...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "SpaceX市值蒸发、英首相辞职、SK海力士超越三星，标志科技与政治格局双重震荡。"
    },
    {
     "title": "豆包大模型的日均tokens调用量达到180万亿",
     "url": "<![CDATA[https://36kr.com/newsflashes/3865137028928774?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-06-23",
     "summary": "在2026火山引擎force原动力大会上，火山引擎总裁谭待表示，截至2026年6月，豆包大模型日均tokens调用量达180万亿，较发布时增长超1500倍，过去一年增长超10倍。（财联社）",
     "is_new": true,
     "lang": "zh",
     "interpretation": "豆包大模型调用量激增，反映国内AI应用需求爆发式增长。"
    },
    {
     "title": "DeepSeek缺Agent人才缺疯了！负责人各种贴广告",
     "url": "https://www.qbitai.com/2026/06/437249.html",
     "source": "量子位",
     "date": "2026-06-22",
     "summary": "DeepSeek正在全力押注",
     "is_new": true,
     "lang": "zh",
     "interpretation": "DeepSeek疯狂招Agent人才，凸显智能体研发成为行业竞争焦点。"
    },
    {
     "title": "入选ECCV 2026！清华开源空间模型打败Gemini：真正的空间智能是在世界变化中持续学习",
     "url": "https://www.qbitai.com/2026/06/437235.html",
     "source": "量子位",
     "date": "2026-06-22",
     "summary": "120分钟长视频一边看一边记",
     "is_new": true,
     "lang": "zh",
     "interpretation": "清华开源空间模型超越Gemini，中国在空间智能领域实现技术突破。"
    },
    {
     "title": "Fable 5 刚被封杀，OpenRouter 用「多模型协作」搞出了「平替天团」",
     "url": "https://www.leiphone.com/category/yanxishe/9TGZvtD8CvNeaEKw.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-22",
     "summary": "最强 AI 突遭封杀下架，多模型协作能否填补空白？ 作者丨高允毅 编辑丨马晓宁 当世界上最聪明的 AI 被强制拔掉网线，我们能否有另一套方案，用上同样聪明的智力？2026年6月14日，全球最大的大模型 API 聚合平台OpenRouter，在 X 上发布一条推文，短短几天，吸引近600万人围观。该平台宣布推出了世界上最聪明的“复合模型”Fusion API ，能用模型组合的方式，复刻 Claude Fable 5 的智力水平。 所谓“复合模型”，不是靠一个 AI 自己埋头苦干，而是让好多 AI 模型一块儿配合，做出一份最好的答案，再交给用户，对外统一用一个API 入口。Fusion AP...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "Fable 5被封后，OpenRouter用多模型协作证明“去中心化”可绕过单一封杀。"
    },
    {
     "title": "超越 SONIC ！人形机器人通用小脑迎来 GPT 时刻",
     "url": "https://www.leiphone.com/category/ai/lzqSU7xisToFg45M.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-22",
     "summary": "AstraBrain-WBC 0.5 论文深度解读 作者丨齐铖湧 编辑丨林觉民 全球首个人形通用小脑GPT基座大模型来了。在美国科罗拉多州丹佛会议中心举行的CVPR 2026现场，银河通用联合研究团队提出的AstraBrain-WBC 0.5，用一组数字直接刷新了行业认知：▎引入\"20亿帧最大人类行为数据规模\"▎真机实测效果，显著优于SONIC▎零样本泛化成功率92.58%史上最大规模、整整20亿帧人类动作数据，80.4M参数，零样本泛化成功率92.58%，把传统三层MLP的76.89%远远甩在身后，在MPJPE、MPJVE等多项指标上全面超越SONIC、TWIST、Any2Track等...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "人形机器人通用小脑技术突破，意味着运动控制从专用走向通用化。"
    },
    {
     "title": "AI黑客越来越凶？奇安信推出AI时代的全栈式产品矩阵",
     "url": "https://www.leiphone.com/category/industrynews/Qf46ogEyAl3ohR5s.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-22",
     "summary": "6月22日，国内网安龙头奇安信宣布启动\"AI时代，攻防先行\"系列新品发布周。面对黑客开始用AI批量发起攻击的新现实，奇安信率先打出一套AI防御\"组合拳\"——多款聚焦\"安全智能\"与\"智能安全\"的产品相继亮相，宣告网络安全正式进入\"AI智能体对抗\"时代。奇安信集团董事长齐向东表示，近期美国人工智能公司Anthropic的两款新模型发布仅72小时即被黑客突破，AI武器化风险持续扩散，再次印证了“再顶尖的大模型自身也存在安全缺陷”以及“网络攻击已告别'手工作坊'进入'工业化'时代”两个不争的事实。他强调，政企机构应该从“追着漏洞跑”变成“带着漏洞防”，建设“三位一体”的内生安全纵深防御体系，是A...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "奇安信推出全栈AI安全产品，反映AI攻击已从概念走向规模化实战。"
    },
    {
     "title": "LiblibAI 母公司完成近 3 亿美元融资：AI 应用层开始进入「收入说话」的阶段",
     "url": "https://www.leiphone.com/category/ai/M6tymyAI0col1cpj.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-22",
     "summary": "演语科技，正在成为这一轮变化中最值得观察的中国样本之一。 作者丨郑佳美 编辑丨马晓宁 AI 应用公司的竞争，正在发生变化。过去两年，行业最关心的是谁能率先做出令人眼前一亮的产品，谁能更快抓住大模型带来的流量红利。但到了 2026 年，问题开始变得更现实：用户会不会持续使用？客户愿不愿意付费？一家公司能不能从单个产品，长成一个真正有收入、有生态、有复利的业务体系？演语科技（Evoken）最近完成的这轮融资，正好提供了一个观察窗口。近日，演语科技正式对外披露近 3 亿美元 B+ 轮融资。该轮融资实际已于今年上半年早些时候完成，投后估值超过 20 亿美元。本轮融资由 Granite Asia、...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "LiblibAI融资近3亿美元，表明AI应用层投资逻辑已从用户增长转向收入验证。"
    },
    {
     "title": "Claude Code 修了几个小 bug，却揭开了 Agent 落地的大麻烦",
     "url": "https://www.leiphone.com/category/ai/Fkjtf266Ai0l43XB.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-22",
     "summary": "工具状态、权限边界和后台任务，正在成为 AI 编程产品的新考验。 作者丨郑佳美 编辑丨马晓宁 刚刚，Anthropic 给 Claude Code 发了一次看起来并不起眼的更新。没有新模型，没有新的 benchmark，也没有代码能力提升多少的宣传。Claude Code 2.1.179 的 changelog 里，主要是一些细碎的 bug fix：连接中断后保留 partial response，工具执行的 spinner 不再卡住，Linux sandbox 里的 denyRead / allowRead glob 不再把 Bash tool description 撑到巨大，远程 ...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "Claude Code修小bug暴露Agent落地难题：真实环境中的边缘案例难以穷尽。"
    },
    {
     "title": "AI 太烧钱！微软选择「倒戈」DeepSeek",
     "url": "https://www.leiphone.com/category/ai/66F6EZoPUvuBgKtF.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-22",
     "summary": "Claude、GPT 不再独占 Copilot。 作者丨樊天骄、郑佳美 编辑丨郑佳美 这两天，微软连续释放了两条重磅消息。第一条来自产品层面。微软宣布 Copilot Cowork 在全球正式上线。这款能够跨 Outlook、Teams、Excel 等应用自主执行任务的 AI Agent 系统将正式商用。据微软披露，超过一半的《财富》500 强企业已经在预览期进行了部署。第二条则来自商业模式层面。Copilot Cowork 将不再完全沿用每月 30 美元的固定订阅模式，而是开始引入按使用量计费机制。几乎在同一时间，Axios 又披露了一则消息：微软正评估将 DeepSeek V4 引入...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "微软倒戈DeepSeek，揭示大模型军备竞赛中成本压力倒逼技术路线转向。"
    },
    {
     "title": "从代码到产线：恩和发布 BPL 协议语言，定义生物制造的“工业级编译器”",
     "url": "https://www.leiphone.com/category/industrynews/YWWglepflccEwGzS.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-22",
     "summary": "雷峰网讯。近日，恩和科技在《bioRxiv》发布Biology Protocol Language（BPL）及其生成管线BPL-COGEN，首次为生物实验协议建立了一套形式化的语言体系，打通了Physical AI进入物理世界的标准接口。BPL是专为生物实验协议设计的可编译、可验证的形式化语言。BPL-COGEN把自然语言协议自动翻译为BPL程序，由一个300亿参数微调大语言模型与确定性编译器构成“生成—验证—修复”闭环。在基于300篇《Nature Protocols》论文的基准测试中，BPL-COGEN实现95.1%的首轮一致性，通过2轮编译-仿真闭环将正确率推进至98.6%。目前，...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "恩和发布BPL协议语言，相当于为生物制造提供可编程的“工业级编译器”。"
    },
    {
     "title": "氪星晚报｜赢创计划全球裁员3200人；台积电28nm较年初减产25%；三星电子向韩国所有员工开放ChatGPT和Codex",
     "url": "<![CDATA[https://36kr.com/p/3864065855706120?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-06-22",
     "summary": "大公司： 赢创计划全球裁员3200人 赢创近日宣布，将延长“赢创定制”增效计划，涉及赢创全球所有业务及职能部门，拟裁减约3200个岗位，其中德国本土约占2150个。相关措施计划于2027年启动，持续至2029年底。6月22日，赢创确认，德国以外地区将削减1050个职位，中国区包含在内，但具体裁员数量尚未明确。“赢创定制”计划于2023年10月推出，原定目标为2026年底前累计削减约2800个岗位。今年5月，赢创曾表示该计划进展顺利并将实现既定降本目标。 韩国考虑对三星和SK海力士杠杆ETF采取单独措施 韩国金融监督院院长Lee Chan-jin表示，由于散户投资者对高风险产品的需求没有降...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "化工巨头裁员与芯片减产，折射全球制造业需求疲软与科技行业分化加剧。"
    },
    {
     "title": "2026年，1800个DeepSeek跟我一起守护艾泽拉斯",
     "url": "https://www.qbitai.com/2026/06/437141.html",
     "source": "量子位",
     "date": "2026-06-21",
     "summary": "一个月只要340块",
     "is_new": false,
     "lang": "zh",
     "interpretation": "游戏行业AI应用从辅助工具转向大规模NPC部署，或重塑玩家互动体验。"
    },
    {
     "title": "早报｜追觅组织调整，取消未落地业务/DeepSeek识图模式上线/《GTA6》预购时间官宣",
     "url": "https://www.ifanr.com/1669442?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-19",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "追觅砍业务、DeepSeek加功能、《GTA6》定档，反映企业收缩与行业热点并存。"
    },
    {
     "title": "Momenta港股IPO证监会备案通过，将成“物理AI第一股”",
     "url": "https://www.leiphone.com/category/industrynews/mOyyJ7O75GDwbwTc.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-18",
     "summary": "2026年6月18日，全球领先的物理AI公司Momenta取得中国证监会境外发行上市备案通知书。据文件，Momenta拟发行不超过43,754,060股境外上市普通股，并在香港联合交易所上市。备案获批，标志着Momenta的资本化进程迈出关键一步，将成“物理AI第一股”。以世界模型为基座，激发物理AI的“GPT时刻” 当下，数字AI正在加速向物理AI跃迁，物理AI的“GPT时刻”即将来临。世界模型作为物理AI的核心基座模型，被认为是激发物理AI“GPT时刻”的关键突破口。 Momenta CEO曹旭东指出，物理AI的核心是数据scaling和商业scaling，且二者形成正向反馈，而目前...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "Momenta通过备案将上市，意味着自动驾驶公司终于迎来资本化里程碑，物理AI概念受关注。"
    },
    {
     "title": "实测 GLM-5.2 ：Claude 5 关停后，它真能稳稳接住这波用户",
     "url": "https://www.ifanr.com/1669127?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-17",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "GLM-5.2在Claude 5关停后接住用户，说明国产大模型已具备替代国际顶尖产品的实力。"
    },
    {
     "title": "早报｜曝苹果明年推出带摄像头AirPods/DeepSeek完成500亿融资/曝微信支付「AI专属卡」最快本周上线",
     "url": "https://www.ifanr.com/1669123?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-17",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "苹果布局带摄像头耳机、DeepSeek巨额融资、微信推AI卡，AI硬件与支付创新加速落地。"
    }
   ]
  },
  {
   "name": "AI Agent与智能体",
   "icon": "🤯",
   "color": "#d97706",
   "count": 15,
   "cards": [
    {
     "title": "The AI world is getting ‘loopy’",
     "url": "https://techcrunch.com/2026/06/22/the-ai-world-is-getting-loopy/",
     "source": "TechCrunch - AI",
     "date": "2026-06-22",
     "summary": "The loop takes agentic AI a step further by authorizing a swarm of agents to work continuously in the background, endlessly.",
     "is_new": true,
     "lang": "en",
     "interpretation": "AI领域陷入“循环怪圈”，暗示技术突破放缓或同质化竞争加剧。"
    },
    {
     "title": "Why agentic enterprises need to become learning systems",
     "url": "https://venturebeat.com/orchestration/why-agentic-enterprises-need-to-become-learning-systems",
     "source": "VentureBeat - AI",
     "date": "2026-06-22",
     "summary": "Presented by SplunkEvery day, organizations learn things their AI systems never get to use.A security analyst corrects an AI-generated investigation. A network engineer identifies the root cause of a recurring outage. An observability team discovers that a pattern of latency, logs and infrastruct...",
     "is_new": true,
     "lang": "en",
     "interpretation": "企业需将AI代理转化为持续学习系统，才能适应动态商业环境。"
    },
    {
     "title": "AI hit the memory wall — now it needs a new context tier",
     "url": "https://venturebeat.com/orchestration/ai-hit-the-memory-wall-now-it-needs-a-new-context-tier",
     "source": "VentureBeat - AI",
     "date": "2026-06-22",
     "summary": "Presented by SolidigmAs inference workloads evolve from discrete question-and-answer exchanges into persistent, multi-step agentic systems, GPU availability is no longer the most critical AI bottleneck. Instead, the bottleneck has migrated from compute to context, says Jeff Harthorn, AI applied r...",
     "is_new": true,
     "lang": "en",
     "interpretation": "内存瓶颈倒逼AI架构革新，上下文分层存储成为关键突破方向。"
    },
    {
     "title": "Temporary Cloudflare Accounts for AI agents",
     "url": "https://simonwillison.net/2026/Jun/21/temporary-cloudflare-accounts/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-21",
     "summary": "Temporary Cloudflare Accounts for AI agents The announcement says this is \"for AI agents\" but (as is pretty common these days) the AI hook isn't really necessary, this is an interesting feature for everyone else as well. Short version: you can now create a Cloudflare Workers project and run this,...",
     "is_new": false,
     "lang": "en",
     "interpretation": "临时Cloudflare账户专为AI代理设计，简化自动化任务部署。"
    },
    {
     "title": "Quoting Sean Lynch",
     "url": "https://simonwillison.net/2026/Jun/19/sean-lynch/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-19",
     "summary": "The real valuable capability MCP offers over skills/CLI is isolating the auth flow outside of the agent’s context window, and potentially out of the harness completely. [...] Maybe the idealized form of MCP is just an auth gateway for the API and nothing else. That’d still be a win. — Sean Lynch,...",
     "is_new": false,
     "lang": "en",
     "interpretation": "引用肖恩·林奇观点，或为行业关键判断提供权威佐证。"
    },
    {
     "title": "7,000 Langflow servers are under attack. LangGraph and LangChain have the same holes",
     "url": "https://venturebeat.com/security/7000-langflow-servers-under-attack-langgraph-langchain-same-holes",
     "source": "VentureBeat - AI",
     "date": "2026-06-19",
     "summary": "Your AI agent did exactly what it was designed to do. The framework underneath it just handed an attacker a shell on the box that holds your OpenAI key, your database credentials, and your CRM tokens.That is not a hypothetical. In a few months, three of the most widely deployed AI agent framework...",
     "is_new": false,
     "lang": "en",
     "interpretation": "七千台Langflow服务器遭攻击，暴露LangChain生态普遍安全漏洞。"
    },
    {
     "title": "MosaicLeaks: Can your research agent keep a secret?",
     "url": "https://huggingface.co/blog/ServiceNow/mosaicleaks",
     "source": "Hugging Face Blog",
     "date": "2026-06-18",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "研究智能体能否保密？MosaicLeaks事件警示AI数据泄露风险。"
    },
    {
     "title": "From the Hugging Face Hub to robot hardware with Strands Agents and LeRobot",
     "url": "https://huggingface.co/blog/amazon/strands-lerobot-hub-to-hardware",
     "source": "Hugging Face Blog",
     "date": "2026-06-17",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "打通AI模型与实体机器人，加速开源机器人应用落地。"
    },
    {
     "title": "Agentic Resource Discovery: Let agents search",
     "url": "https://huggingface.co/blog/agentic-resource-discovery-launch",
     "source": "Hugging Face Blog",
     "date": "2026-06-17",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "赋予AI自主搜索资源能力，迈向更智能的自动化系统。"
    },
    {
     "title": "How an Agent Built a 3D Paris Gallery by Chaining Two Hugging Face Spaces",
     "url": "https://huggingface.co/blog/mishig/spaces-agents-md",
     "source": "Hugging Face Blog",
     "date": "2026-06-09",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "AI智能体串联工具构建3D场景，展示多模型协作的创造力。"
    },
    {
     "title": "The Open Source Community is backing OpenEnv for Agentic RL",
     "url": "https://huggingface.co/blog/openenv-agentic-rl",
     "source": "Hugging Face Blog",
     "date": "2026-06-08",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "开源社区力挺OpenEnv，将加速智能体强化学习的普及与创新。"
    },
    {
     "title": "从用户决策到Agent参与，值得买科技分享AI时代品牌经营新课题",
     "url": "<![CDATA[https://36kr.com/p/3865177262101513?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-06-23",
     "summary": "6月16日-17日，36氪WAVES 2026新浪潮大会在广州举行。17日，值得买科技营销FDE（Forward Deployed Engineer，即前沿部署工程师）朱越受邀出席并发表主题演讲，结合公司在AI消费服务与品牌营销场景中的一线实践，分享了Agent时代消费决策链路的变化，以及品牌在此环境下如何更精准地被AI看见、理解和选择。 作为36氪旗下年度重要科技创新活动，WAVES新浪潮大会汇聚创业者、投资机构及产业代表，围绕AI、机器人、新消费、出海等前沿议题展开交流。作为值得买科技营销FDE，朱越长期参与AI产品在品牌营销、消费决策及Agent生态场景中的落地实践，持续推动消费服...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "AI正从辅助决策转向主动参与，品牌需重新思考用户交互与营销逻辑。"
    },
    {
     "title": "首个高考志愿AI测评发布：千问在稳定性、精确性、结构化表达上表现突出",
     "url": "<![CDATA[https://36kr.com/newsflashes/3865234019505161?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-06-23",
     "summary": "6月23日，国内首个针对高考志愿填报场景的AI能力测评报告《高考志愿AI测评基准》发布。该报告由友松实验室独立完成，以千问高考志愿填报Agent作为测评对象。结果显示，千问多项表现已达到人类志愿咨询师水平，在稳定性、精确性、结构化表达与效率层面更具优势。",
     "is_new": true,
     "lang": "zh",
     "interpretation": "千问在高考志愿测评中表现优异，AI在教育决策场景的实用性与可靠性获验证。"
    },
    {
     "title": "AI 工作流实践：100% Vibe Coding 完成 Game Jam 游戏开发",
     "url": "https://sspai.com/post/110972",
     "source": "少数派 - AI",
     "date": "2026-06-21",
     "summary": "Agent 和人一样离不开闭环。查看全文",
     "is_new": false,
     "lang": "zh",
     "interpretation": "纯AI编程完成游戏开发，验证了“无代码”创作模式的可行性与效率突破。"
    },
    {
     "title": "玩了一天AI支付宝，张嘴就能点麦当劳、收能量，超级App开始卷Agent OS了",
     "url": "https://www.ifanr.com/1669294?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-18",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "支付宝整合AI语音点单，标志超级App正将AI能力深度嵌入生活服务场景。"
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
     "title": "GM installs robots at flagship EV factory after laying off 1,300 workers",
     "url": "https://arstechnica.com/ai/2026/06/gm-installs-robots-at-flagship-ev-factory-after-laying-off-1300-workers/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-22",
     "summary": "US autoworkers union warns of robot automation as dark factory future looms.",
     "is_new": true,
     "lang": "en",
     "interpretation": "通用裁员后引入机器人，凸显制造业自动化替代人工的残酷趋势。"
    },
    {
     "title": "刚注册就成独角兽，具身创企昆仑行90天融资数十亿元｜36氪独家",
     "url": "<![CDATA[https://36kr.com/p/3865188719121668?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-06-23",
     "summary": "离开阿里云一年多以后，前阿里集团副总裁、阿里云中国区总裁任庚，以昆仑行创始人的身份，再次切入AI的战场。这次他锚定的领域，是AI的落地终端——机器人。 36氪获悉，昆仑行机器人注册不到90天，已接连完成了3轮融资，累计融资规模为数十亿元。3轮融资后，公司估值已超十亿美元，成为具身行业独角兽。这样的节奏显然刷新了具身智能行业的独角兽速度。 公司此前发布的信息显示，昆仑行机器人“对标特斯拉人形机器人这一行业标杆”，“坚持‘本体+大脑’双轮驱动战略”。前理想辅助驾驶一号位郎咸朋，是昆仑行的联合创始人。 一家接触过昆仑行的头部资本判断，任庚的重心，会更多地落在战略方向，组织体系搭建，商业运作、企...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "具身智能赛道资本热度飙升，90天从注册到独角兽，反映行业风口与融资效率。"
    },
    {
     "title": "36氪首发 | 龚虹嘉、陆奇、海外资本下注，北大团队用肌电腕带做新一代数采终端",
     "url": "<![CDATA[https://36kr.com/p/3865125383443463?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-06-23",
     "summary": "作者 | 乔钰杰 编辑 | 袁斯来 硬氪获悉，雪梦未来（SnowOrigin）团队获得龚虹嘉、陆奇及海外机构投资。这支北大背景团队以sEMG（表面肌电）运动神经信号解码技术为切入点，通过神经腕带、第一视角采集设备以及自研NMH（Neural Math Hybrid）AI解码模型，构建新一代面向具身智能的人类操控数据采集方案。 目前，随着具身智能和Physical AI快速发展，行业对于高质量人类操控数据的需求日益增长。然而主流的数据采集方式，无论是第一视角视频、动作捕捉还是遥操作系统，大多只能记录动作结果或空间轨迹，对于发力过程、操控意图以及细微调整等关键信息覆盖不足。 雪梦未来的神经腕...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "北大团队用肌电腕带做数据终端，获顶级资本押注，预示人机交互新方向。"
    },
    {
     "title": "“正行创新”完成近亿美元天使轮融资",
     "url": "<![CDATA[https://36kr.com/newsflashes/3865134271599874?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-06-23",
     "summary": "36氪获悉，6月23日，“正行创新”（Striding AI）已完成近亿美元天使轮系列融资。投资方包括正大集团、华勤技术、九安医疗等多家上市企业，多位国内外知名企业家，以及多家一线投资机构。本轮募集的资金将主要投入三大方向：一是持续引进全球顶尖算法、工程与商业化人才，完善全链条人才梯队布局；二是加大世界动作模型、强化学习等核心技术的迭代与应用，夯实具身智能基础设施能力；三是加速零售、工业等场景的落地验证与产品化落地。",
     "is_new": true,
     "lang": "zh",
     "interpretation": "“正行创新”获近亿美元天使轮，显示资本对AI创新赛道高度追捧。"
    },
    {
     "title": "Robotaxi匍匐前进十年：烧掉千亿后，终于要赚钱了？",
     "url": "https://www.leiphone.com/category/transportation/pb4PRACFvXFd32lY.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-22",
     "summary": "过去几年，Robotaxi一度是自动驾驶行业最尴尬的赛道。它长期站在资本聚光灯下，也曾被视为无人驾驶商业化的终极答案，但高成本和难以规模复制的商业模型，始终没有被真正解决。随着资本热度退潮，Robotaxi也一度进入寒潮期。但到了2025年，这个被反复质疑的赛道又重新热了起来。小马智行宣布广州、深圳实现单城盈利，并计划2030年将车队扩张至10万辆；新玩家哈啰提出万辆级车队目标；Momenta、小鹏汽车、元戎启行等玩家陆续回到Robotaxi赛道。资本市场同样回暖，仅中国市场公开披露的三起Robotaxi融资事件，累计金额便超过57亿元。然而仅仅两年前，L4级自动驾驶一度被行业认为是伪命...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "Robotaxi烧钱十年后盈利曙光初现，验证自动驾驶商业闭环的可能性。"
    },
    {
     "title": "具身赛道现状素描：脑子灵，模型好，不是百亿，就是独角",
     "url": "https://www.qbitai.com/2026/06/437198.html",
     "source": "量子位",
     "date": "2026-06-21",
     "summary": "2026年还没过半，具身智能的融资就快要超过去年全年了，超过一半的钱都流入了机器人的“大脑”。",
     "is_new": false,
     "lang": "zh",
     "interpretation": "具身智能赛道资本高度集中，头部企业垄断资源，中小玩家生存空间收窄。"
    },
    {
     "title": "英伟达开始搞机器人自己研究机器人那套了…",
     "url": "https://www.qbitai.com/2026/06/437041.html",
     "source": "量子位",
     "date": "2026-06-20",
     "summary": "为了让你烧token，英伟达已经卷到机器人身上了",
     "is_new": false,
     "lang": "zh",
     "interpretation": "英伟达从硬件供应商转向机器人研发，可能颠覆行业技术路径与竞争格局。"
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
     "title": "Polymarket's viral videos showed people winning big, but the bets were fake",
     "url": "https://arstechnica.com/tech-policy/2026/06/polymarkets-viral-videos-showed-people-winning-big-but-the-bets-were-fake/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-22",
     "summary": "\"Winning\" bets were made on cloned website and would have lost money, WSJ finds.",
     "is_new": true,
     "lang": "en",
     "interpretation": "Polymarket造假视频曝光，暴露赌博平台利用虚假宣传诱导用户。"
    },
    {
     "title": "Amazon employees say they’re facing termination for backing data center limits",
     "url": "https://www.theverge.com/ai-artificial-intelligence/952180/amazon-seattle-data-center-moratorium-aecj-disciplinary-action",
     "source": "The Verge - AI",
     "date": "2026-06-18",
     "summary": "When three Amazon software engineers testified earlier this month at Seattle City Council hearings about data centers, they started their testimony by citing a city law barring employment discrimination over political speech. Now, they're accusing their employer of breaking that law by retaliatin...",
     "is_new": false,
     "lang": "en",
     "interpretation": "员工因支持环保遭解雇，暴露科技巨头利益与员工价值观冲突。"
    }
   ]
  },
  {
   "name": "AI硬件与芯片",
   "icon": "💾",
   "color": "#0891b2",
   "count": 11,
   "cards": [
    {
     "title": "AI chipmaker Groq confirms $650M raise, re-staffs after Nvidia’s $20B not-acqui-hire deal",
     "url": "https://techcrunch.com/2026/06/22/ai-chipmaker-groq-confirms-650m-raise-re-staffs-after-nvidias-20b-not-acqui-hire-deal/",
     "source": "TechCrunch - AI",
     "date": "2026-06-22",
     "summary": "What does an AI company do after one of those not-acqui-hire deals? Groq raised money, is leaning into its neocloud business, and is hiring new execs.",
     "is_new": true,
     "lang": "en",
     "interpretation": "Groq融资后重组团队，反映AI芯片初创在巨头阴影下的生存博弈。"
    },
    {
     "title": "Nvidia wants to cut data center water use, but that’s not the same as fixing AI’s water problem",
     "url": "https://techcrunch.com/2026/06/22/nvidia-wants-to-cut-data-center-water-use-but-thats-not-the-same-as-fixing-ais-water-problem/",
     "source": "TechCrunch - AI",
     "date": "2026-06-22",
     "summary": "Nvidia announced a new cooling system that cuts water use inside the data center. But it does nothing to address AI's biggest water use — fossil fuel power plants.",
     "is_new": true,
     "lang": "en",
     "interpretation": "英伟达节水承诺未触及AI耗水核心，暴露行业环保责任短板。"
    },
    {
     "title": "SpaceX inks compute deal with Reflection AI, an open source AI lab",
     "url": "https://techcrunch.com/2026/06/22/spacex-inks-compute-deal-with-reflection-ai-an-open-source-ai-lab/",
     "source": "TechCrunch - AI",
     "date": "2026-06-22",
     "summary": "Reflection AI will pay $150 million a month beginning July 1, 2026 through 2029 for immediate access to Nvidia's latest GB300 AI chips and supporting hardware across SpaceX's Colossus 2 data center near Memphis, Tennessee.",
     "is_new": true,
     "lang": "en",
     "interpretation": "SpaceX与开源AI实验室合作，显示航天巨头跨界布局算力生态。"
    },
    {
     "title": "Following user outcry, AMD reinstates memory encryption in consumer CPUs",
     "url": "https://arstechnica.com/security/2026/06/following-user-outcry-amd-reinstates-memory-encryption-in-consumer-cpus/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-22",
     "summary": "Critics saw the move as an underhanded way to steer them toward more costly chips.",
     "is_new": true,
     "lang": "en",
     "interpretation": "AMD因用户抗议恢复内存加密，反映消费者隐私诉求对厂商决策的影响力。"
    },
    {
     "title": "Nvidia says its AI data center design runs hotter to use a lot less water",
     "url": "https://www.theverge.com/tech/954139/nvidia-data-centers-rubin-liquid-cooling",
     "source": "The Verge - AI",
     "date": "2026-06-22",
     "summary": "Public pushback against data centers has emphasized their water and energy consumption, and now Nvidia is highlighting its claim that the Rubin generation reference design for a fully liquid-cooled data center has \"eliminated massive amounts of power usage and pretty much all water usage.\" Still,...",
     "is_new": true,
     "lang": "en",
     "interpretation": "高温运行设计降低水耗，平衡算力需求与环保责任的关键突破。"
    },
    {
     "title": "早报｜豆包联合曹操出行推出打车功能/淘宝闪购灰测高端外卖「家宴」/日本卫浴厂商TOTO计划投800亿日元做1nm芯片",
     "url": "https://www.ifanr.com/1669656?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-23",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": true,
     "lang": "zh",
     "interpretation": "豆包联合曹操出行、淘宝试水高端外卖、TOTO跨界造芯片，跨界竞争加剧。"
    },
    {
     "title": "硬氪首发 | 快手系AI芯片公司再融资数亿，销量近十万颗，视频压缩性能超英伟达",
     "url": "<![CDATA[https://36kr.com/p/3865136165344516?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-06-23",
     "summary": "作者 | 林晴晴 编辑 | 袁斯来 硬氪获悉，人工智能芯片公司「凌川科技」近日完成数亿元A+轮融资，本轮由啟赋资本领投，产业投资方新国都、知名投资机构金浦投资、朝晖资本、BV百度风投、水木投资集团、亦庄科创二期基金（北京科创亦庄直投基金），以及全球知名家办等参与投资，老股东顺禧基金、九智资本持续追加投资。项目落地北京亦庄，获亦庄国投重点支持，本轮融资将主要用于下一代芯片研发、现有产品SL200的量产扩产及海外市场拓展。 「凌川科技」成立于2024年3月，由北京市人工智能基金与快手集团共同发起设立，前身为快手集团的异构计算与芯片事业部，是一家以硬件为基础的软件公司，专注于智能视频与生成式视...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "国产AI芯片在视频压缩领域超越英伟达，显示细分赛道技术突破与市场认可。"
    },
    {
     "title": "晓程科技：加纳炸药厂目前仍在建，暂未投产、未实现销售收入",
     "url": "<![CDATA[https://36kr.com/newsflashes/3865221516645640?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-06-23",
     "summary": "36氪获悉，晓程科技在互动平台表示，加纳炸药厂目前仍在建，暂未投产、未实现销售收入；雷管芯片现阶段以内部自用为主。",
     "is_new": true,
     "lang": "zh",
     "interpretation": "加纳炸药厂未投产无收入，提示海外项目落地周期长、风险需持续关注。"
    },
    {
     "title": "创业板指跌超2%",
     "url": "<![CDATA[https://36kr.com/newsflashes/3865104827684097?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-06-23",
     "summary": "36氪获悉，创业板指跌超2%，深成指跌1.74%，沪指跌0.33%。CPO、存储芯片、PET铜箔板块跌幅居前。",
     "is_new": true,
     "lang": "zh",
     "interpretation": "创业板指跌超2%，市场情绪低迷或受宏观与科技股调整影响。"
    },
    {
     "title": "派早报：英特尔将为苹果代工芯片",
     "url": "https://sspai.com/post/111343",
     "source": "少数派 - AI",
     "date": "2026-06-22",
     "summary": "英特尔将为苹果代工芯片库克称 iPhone 涨价不可避免美国科技公司政策转向，限制员工 AI 成本Modos 推出开源 13.3 寸彩色墨水屏Manus 原投资人计划将其原价购回CMF 已取消今年发布计划看看就行的简讯少数派的近期动态你可能错过的好文章查看全文",
     "is_new": true,
     "lang": "zh",
     "interpretation": "英特尔代工苹果芯片，标志其从IDM向纯代工模式转型的关键一步。"
    },
    {
     "title": "最先自研芯片的朱江明，有什么理由劝大家“别造了”？",
     "url": "https://www.leiphone.com/category/transportation/8YqmG5gzTCDsi2cQ.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-18",
     "summary": "月销站上8万辆，零跑C系列凭什么穿越新车死亡谷？作者 | 严利婷编辑 | 王瑞昊车圈淘汰赛打到 2026 年，已经没有一家车企活得轻松自在。以去年勇夺造车新势力销量冠军的零跑为例，今年依然维持着强劲增长态势，最新月销量已经站上 8 万辆大关，但也依然处在连大气都不敢喘的紧绷状态。继3月和4月A系列、D系列的产品扩充之后，零跑汽车又开始马不停蹄地筹备B系列、C系列的产品更新。6月16日，零跑汽车迎来C系列3款核心SUV车型的年度改款上市。其中，新款C10、C11、C16分别对应年轻刚需、品质运动、多人口家庭人群的出行场景，但均延续了“增配不增价”的升级逻辑，并采取了纯电和增程的双动力布局，...",
     "is_new": false,
     "lang": "zh",
     "interpretation": "朱江明作为自研芯片先行者却劝退造车，反映行业竞争惨烈，理性回归比盲目入场更重要。"
    }
   ]
  },
  {
   "name": "开源与生态",
   "icon": "🌐",
   "color": "#2563eb",
   "count": 6,
   "cards": [
    {
     "title": "OpenAI launches new initiative to help find and patch open-source bugs",
     "url": "https://techcrunch.com/2026/06/22/openai-launches-new-initiative-to-help-find-and-patch-open-source-bugs/",
     "source": "TechCrunch - AI",
     "date": "2026-06-23",
     "summary": "OpenAI is attempting to tackle the security issues of the open source software community.",
     "is_new": true,
     "lang": "en",
     "interpretation": "OpenAI主动修复开源漏洞，意在巩固生态安全与开发者信任。"
    },
    {
     "title": "PP-OCRv6 on Hugging Face: 50-Language OCR from 1.5M to 34.5M Parameters",
     "url": "https://huggingface.co/blog/PaddlePaddle/pp-ocrv6",
     "source": "Hugging Face Blog",
     "date": "2026-06-22",
     "summary": "",
     "is_new": true,
     "lang": "en",
     "interpretation": "PP-OCRv6参数灵活适配多语言，推动轻量化OCR技术全球普及。"
    },
    {
     "title": "Patch the Planet: a Daybreak initiative to support open source maintainers",
     "url": "https://openai.com/index/patch-the-planet",
     "source": "OpenAI Blog",
     "date": "2026-06-22",
     "summary": "OpenAI introduces Patch the Planet, a Daybreak initiative helping open-source maintainers find, validate, and fix vulnerabilities with AI and expert review.",
     "is_new": true,
     "lang": "en",
     "interpretation": "企业资助开源维护者，缓解社区长期资源短缺的可持续尝试。"
    },
    {
     "title": "Beyond LoRA: Can you beat the most popular fine-tuning technique?",
     "url": "https://huggingface.co/blog/peft-beyond-lora",
     "source": "Hugging Face Blog",
     "date": "2026-06-18",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "微调技术新突破或动摇LoRA主流地位，影响模型定制效率与成本。"
    },
    {
     "title": "Profiling in PyTorch (Part 2): From nn.Linear to a Fused MLP",
     "url": "https://huggingface.co/blog/torch-mlp-fusion",
     "source": "Hugging Face Blog",
     "date": "2026-06-11",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "PyTorch性能优化进阶，助力开发者提升模型训练效率。"
    },
    {
     "title": "Migrating Your GitHub CI to Hugging Face Jobs",
     "url": "https://huggingface.co/blog/github-ci-hf-jobs",
     "source": "Hugging Face Blog",
     "date": "2026-06-09",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "CI迁移至Hugging Face，简化ML工作流，降低基础设施成本。"
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
     "title": "How Anthropic may have talked itself into an AI export ban",
     "url": "https://arstechnica.com/ai/2026/06/how-anthropic-may-have-talked-itself-into-an-ai-export-ban/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-22",
     "summary": "The company warned about dangers of advanced AI far more than rival OpenAI.",
     "is_new": true,
     "lang": "en",
     "interpretation": "自身安全主张反成出口限制依据，凸显AI治理的自我悖论。"
    },
    {
     "title": "Three things to watch amid Anthropic’s latest feud with the government",
     "url": "https://www.technologyreview.com/2026/06/22/1139424/three-things-to-watch-amid-anthropics-latest-feud-with-the-government/",
     "source": "MIT Technology Review - AI",
     "date": "2026-06-22",
     "summary": "This story originally appeared in The Algorithm, our weekly newsletter on AI. To get stories like this in your inbox first, sign up here. For those of you enjoying your summer unaware of Anthropic’s latest feud with the US government, here’s a recap: In April the company said it had built an AI m...",
     "is_new": true,
     "lang": "en",
     "interpretation": "政府与AI公司矛盾升级，监管博弈将影响行业创新节奏。"
    },
    {
     "title": "When the Trump administration cracks down on Anthropic, who benefits?",
     "url": "https://techcrunch.com/2026/06/21/when-the-trump-administration-cracks-down-on-anthropic-who-benefits/",
     "source": "TechCrunch - AI",
     "date": "2026-06-21",
     "summary": "On the new episode of Equity, we discussed what actually prompted the administration's latest moves against Anthropic, and what this might mean for the AI ecosystem.",
     "is_new": false,
     "lang": "en",
     "interpretation": "特朗普政府对Anthropic的打击，可能为其他AI公司创造市场机会。"
    },
    {
     "title": "The film about Sam Altman has been dropped by Amazon MGM",
     "url": "https://www.theverge.com/ai-artificial-intelligence/952906/sam-altman-film-artificial-openai-amazon-mgm-dropped",
     "source": "The Verge - AI",
     "date": "2026-06-19",
     "summary": "Luca Guadagnino's film about OpenAI CEO Sam Altman, Artificial, has reportedly been dropped by Amazon MGM. The film, which stars Andrew Garfield and covers the rollercoaster five days in 2023 spanning Altman's termination and reinstatement as CEO, had been in the works for about a year. The cast ...",
     "is_new": false,
     "lang": "en",
     "interpretation": "亚马逊放弃奥特曼传记片，反映科技巨头对AI争议人物的态度转变。"
    },
    {
     "title": "Barret Zoph is out at OpenAI again after just five months",
     "url": "https://www.theverge.com/ai-artificial-intelligence/952837/barret-zoph-openai-thinking-machines-lab",
     "source": "The Verge - AI",
     "date": "2026-06-19",
     "summary": "Five months after returning to OpenAI, Barret Zoph - the company's head of enterprise AI sales - has departed, The Verge has learned. Zoph returned to OpenAI in mid-January after a stint as cofounder and CTO of Thinking Machines Lab, the competing AI company founded by former OpenAI CTO Mira Mura...",
     "is_new": false,
     "lang": "en",
     "interpretation": "巴雷特·佐夫五个月后再次离开OpenAI，凸显核心人才流动与内部动荡。"
    },
    {
     "title": "Who decides when AI is too dangerous?",
     "url": "https://www.theverge.com/podcast/951542/anthropic-claude-fable-5-mythos-ban-pentagon-ai-regulation-trump",
     "source": "The Verge - AI",
     "date": "2026-06-18",
     "summary": "On today’s episode of Decoder, my guest is Hayden Field, senior AI reporter for The Verge. Often when Hayden comes on the show, it’s because something has gone wrong in the world of AI. Last weekend, that something was a pretty intense mix of Anthropic, the Trump administration, and Anthropic’s n...",
     "is_new": false,
     "lang": "en",
     "interpretation": "AI安全决策权归属争议，关乎技术监管伦理与全球治理格局。"
    },
    {
     "title": "独家解读丨SpaceX今晚IPO，华尔街为何却吵翻了天？",
     "url": "https://www.leiphone.com/category/industrynews/qCw7a9DKFNHJFgSe.html",
     "source": "雷锋网 - AI",
     "date": "2026-06-23",
     "summary": "“美股历史上一场充满撕裂的豪赌就要来了，从没见过分歧和争议这么大的。”深圳一家私募基金合伙人周明对雷峰网兴奋道。美东 6 月 12 日 09:30（北京时间今晚 21:30），SpaceX 将正式登陆纳斯达克，发行价为每股 135 美元，计划募资 750 亿美元。1.75 万多亿美元的起步估值，让它在未上市前就一举超越了老牌巨头 Meta，直逼亚马逊。这场IPO之所以备受瞩目且充满争议，除了估值创新高、马斯克自带话题光环外，还因为这家原本的航天公司，在“翻新”了自己的故事后，“改头换面”竟成了一家AI基建巨头。周明告诉雷峰网，现在不论科技圈还是资本市场，大家已经吵翻天了。对于如何定义、定...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "SpaceX今晚IPO引发华尔街激烈争论，折射市场对太空经济前景的分歧。"
    },
    {
     "title": "WAVES 2026：今年盛夏，在创投浪潮里，做迎风而立的少数人！",
     "url": "<![CDATA[https://36kr.com/p/3865226824389892?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-06-23",
     "summary": "盛夏赴约WAVES 2026！一群迎风的少数人，掀起中国新一代创新力量的风口。 2026年，创投圈的浪潮再次翻涌：AI从技术概念走进产业深水区，硬科技创业从“小众赛道”变成“主流共识”，年轻的创业者们正在重新定义中国创新的未来坐标。 每一年，由36氪主办的WAVES大会，都是中国创投圈的年度风向标。今年的WAVES2026以“今年盛夏”为主题，落地广州番禺良仓新造创意园，在两天的时间里，我们汇聚了顶级投资人、产业领袖、新锐创业者，通过深度圆桌、独立演讲、名册发布等诸多精彩环节，充分拆解AI、硬科技、出海、医疗等核心赛道的底层逻辑，见证那些“少数人”的坚持，如何汇聚成改变行业的浪潮。 大会...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "WAVES 2026创投峰会号召在浪潮中做少数派，强调逆势而行的投资智慧。"
    },
    {
     "title": "瓷瓷乐玩 ：当传统文化遇上新消费浪潮 | 36氪WAVES2026新浪潮",
     "url": "<![CDATA[https://36kr.com/p/3865208157738247?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-06-23",
     "summary": "“2026年，创投圈的浪潮再次翻涌：AI从技术概念走进产业深水区，硬科技创业从“小众赛道” 变成“主流共识”，年轻的创业者们正在用代码和双手，重新定义中国创新的未来坐标。 每一年，由36氪 · 暗涌主办的WAVES大会，都是中国创投圈的年度风向标。今年的 WAVES 2026以“今年盛夏”为主题，落地广州番禺良仓新造创意园，在两天的时间里，我们汇聚了顶级投资人、产业领袖、新锐创业者，用14场深度圆桌、数十场独立演讲，拆解 AI、硬科技、出海、医疗等核心赛道的底层逻辑，见证那些“少数人” 的坚持，如何汇聚成改变行业的浪潮。” 曹光洋 | 瓷瓷乐玩创始人 以下为对话内容，经36氪整理编辑： ...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "传统文化借新消费浪潮焕新，体现国潮经济与年轻群体文化自信的深度融合。"
    },
    {
     "title": "秋声 | 四川生物科技公司上市首日大跌31%，中信证券保荐",
     "url": "<![CDATA[https://36kr.com/p/3865070004212994?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-06-23",
     "summary": "本文约3000字，建议阅读6分钟 作者 | 彭孝秋 编者按：AI 大爆发之际，越来越多公司走向资本市场。每一份招股书翻动的声音里，都藏着一家公司想说与未曾明说的全部。 鉴于此，硬氪特推出「秋声」专栏。秋声取自欧阳修《秋声赋》，借“听秋声”之意，观产业冷暖，辨公司成色，记录企业冲刺 IPO 途中那些被写下与被隐藏的真实。这是我们第一期，华健未来。 今日9点30分，四川生物科技公司华健未来（06132.HK）正式在港交所敲钟上市，但开盘即大跌。截至发稿时，华健未来已大跌31%，报56港元，市值41亿港元。 值得一提的是，6月22日下午，距离正式挂牌还有不到一天，华健未来（06132.HK）在...",
     "is_new": true,
     "lang": "zh",
     "interpretation": "生物科技公司上市首日暴跌，暴露新股定价与市场预期严重错位，保荐机构受质疑。"
    },
    {
     "title": "小米旗下瀚星创投等入股破壳时刻",
     "url": "<![CDATA[https://36kr.com/newsflashes/3865214724134145?f=rss]]>",
     "source": "36氪 - AI",
     "date": "2026-06-23",
     "summary": "36氪获悉，天眼查App显示，近日，破壳时刻（上海）智能科技有限责任公司发生工商变更，新增小米旗下瀚星创业投资有限公司、星海图（北京）人工智能科技股份有限公司等为股东，同时，注册资本由100万人民币增至约118.7万人民币。",
     "is_new": true,
     "lang": "zh",
     "interpretation": "小米旗下基金入股破壳时刻，显示科技巨头加速布局新兴消费或内容生态。"
    },
    {
     "title": "诺奖得主转投Anthropic，谷歌48小时连失两大牛，内部信仰崩塌？",
     "url": "https://www.ifanr.com/1669460?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-20",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "顶级科学家接连离开谷歌，暴露其AI研究环境或面临人才与创新文化危机。"
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
     "title": "The search for dark matter has been blown wide open",
     "url": "https://www.technologyreview.com/2026/06/18/1138755/search-for-dark-matter-blown-wide-open/",
     "source": "MIT Technology Review - AI",
     "date": "2026-06-18",
     "summary": "Underneath an Apennine massif, below the Jinping Mountains of Sichuan, and at the bottom of a South Dakota mine, there is a cosmic hunt afoot. Isolated deep beneath these rocky shields, massive detectors filled with liquid xenon aim to make the first direct detections of dark matter, the long-sou...",
     "is_new": false,
     "lang": "en",
     "interpretation": "暗物质研究取得突破，可能改写物理学基础认知。"
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
     "title": "The running list: major tech layoffs in 2026 where employers cited AI",
     "url": "https://techcrunch.com/2026/06/22/the-running-list-major-tech-layoffs-in-2026-where-employers-cited-ai/",
     "source": "TechCrunch - AI",
     "date": "2026-06-23",
     "summary": "A running look — in reverse chronological order — at the bigger tech companies that have announced significant layoffs this year with AI as a stated factor.",
     "is_new": true,
     "lang": "en",
     "interpretation": "企业以AI为由裁员，揭示技术替代岗位的加速趋势与就业结构冲击。"
    },
    {
     "title": "Google DeepMind bets $75M on AI’s future in Hollywood with A24 deal",
     "url": "https://techcrunch.com/2026/06/22/google-deepmind-bets-75m-on-ais-future-in-hollywood-with-a24-deal/",
     "source": "TechCrunch - AI",
     "date": "2026-06-22",
     "summary": "Google DeepMind and A24 are teaming up to build AI filmmaking tools.",
     "is_new": true,
     "lang": "en",
     "interpretation": "DeepMind投资好莱坞，预示AI将深度重塑影视创作与内容生产模式。"
    },
    {
     "title": "Amazon is testing Alexa+ in India with Hindi support",
     "url": "https://techcrunch.com/2026/06/22/amazon-is-testing-alexa-in-india-with-hindi-support/",
     "source": "TechCrunch - AI",
     "date": "2026-06-22",
     "summary": "Amazon is planning to increase the footprint of its new conversational AI assistant Alexa+ to India and is inviting users in the country to test out a Hindi-language version.",
     "is_new": true,
     "lang": "en",
     "interpretation": "亚马逊在印测试印地语Alexa+，瞄准新兴市场语音交互本地化需求。"
    },
    {
     "title": "The founder conference built for growth: TechCrunch Founder Summit pass rates increase June 26",
     "url": "https://techcrunch.com/2026/06/22/the-founder-conference-built-for-growth-techcrunch-founder-summit-pass-rates-increase-june-26/",
     "source": "TechCrunch - AI",
     "date": "2026-06-22",
     "summary": "Save up to $190 on your pass to TechCrunch Founder Summit 2026 by June 26, 11:59 p.m. PT. Designed for founders first on November 4 in Boston. Register today.",
     "is_new": true,
     "lang": "en",
     "interpretation": "TechCrunch峰会涨价，凸显创始人社群对高价值商业资源的需求旺盛。"
    },
    {
     "title": "Report: Kennedy Space Center not ready for era of super heavy rockets",
     "url": "https://arstechnica.com/space/2026/06/report-kennedy-space-center-not-ready-for-era-of-super-heavy-rockets/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-22",
     "summary": "SpaceX has told NASA it plans to launch Starship every eight days from Kennedy.",
     "is_new": true,
     "lang": "en",
     "interpretation": "肯尼迪航天中心设施落后，将制约美国重型火箭发射能力。"
    },
    {
     "title": "Man used massage gun on his tired eyeballs. It went as well as you'd expect.",
     "url": "https://arstechnica.com/health/2026/06/man-used-massage-gun-on-his-tired-eyeballs-it-went-as-well-as-youd-expect/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-22",
     "summary": "He had retinal tears and bruises from squishing his eyeballs with the gun.",
     "is_new": true,
     "lang": "en",
     "interpretation": "用筋膜枪按摩眼球致伤，警示网红疗法可能带来严重健康风险。"
    },
    {
     "title": "Valve's Steam Machine ships June 29 for $1,049, but you probably won't be able to buy one yet",
     "url": "https://arstechnica.com/gaming/2026/06/valves-steam-machine-ships-june-29-for-1049-but-you-probably-wont-be-able-to-buy-one-yet/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-22",
     "summary": "Valve says it's using a randomized purchase queue to make the experience \"less frustrating and more fair.\"",
     "is_new": true,
     "lang": "en",
     "interpretation": "Steam Machine高价限量发售，显示Valve对客厅游戏市场仍持谨慎试探态度。"
    },
    {
     "title": "NHTSA investigating alleged Tesla Autopilot crash that killed woman in her home",
     "url": "https://arstechnica.com/tech-policy/2026/06/woman-killed-when-tesla-driver-using-autopilot-crashed-into-her-home/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-22",
     "summary": "Tesla touts Autopilot as lifesaving a day after grandmother died in crash.",
     "is_new": true,
     "lang": "en",
     "interpretation": "NHTSA调查特斯拉致死事故，自动驾驶安全监管压力持续升级。"
    },
    {
     "title": "Lucid lays off 1,500 workers in second big cut of the year",
     "url": "https://arstechnica.com/cars/2026/06/lucid-lays-off-1500-workers-in-second-big-cut-of-the-year/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-22",
     "summary": "The cuts and redundancies are part of a plan to \"simplify the company,\" the CEO says.",
     "is_new": true,
     "lang": "en",
     "interpretation": "Lucid年内二次大裁员，折射美国电动车行业产能过剩与需求疲软困境。"
    },
    {
     "title": "A US military exercise in space got underway with barely anyone noticing",
     "url": "https://arstechnica.com/space/2026/06/a-us-military-exercise-in-space-got-underway-with-barely-anyone-noticing/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-22",
     "summary": "The Space Force wants to cut the time to field new satellites from years to weeks, days, or hours.",
     "is_new": true,
     "lang": "en",
     "interpretation": "美军太空演习低调进行，暗示太空军事化正从概念走向常态化部署。"
    },
    {
     "title": "1,250 hp hybrid Corvette shatters the Pikes Peak production record",
     "url": "https://arstechnica.com/cars/2026/06/pikes-peak-2026-was-a-battle-of-propulsion-with-an-ev-and-a-hybrid-winning-out/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-22",
     "summary": "The high-altitude race is a unique test of car and driver.",
     "is_new": true,
     "lang": "en",
     "interpretation": "混动科尔维特破纪录，证明电动化技术可大幅提升传统燃油车性能极限。"
    },
    {
     "title": "This former hacker saw the light—and now wants to collect all of it",
     "url": "https://arstechnica.com/features/2026/06/this-former-hacker-saw-the-light-and-now-wants-to-collect-all-of-it/",
     "source": "ArsTechnica - AI",
     "date": "2026-06-22",
     "summary": "\"I don’t know of a bigger question we can answer as humans.\"",
     "is_new": true,
     "lang": "en",
     "interpretation": "前黑客转型为数据收集者，揭示网络安全与隐私的永恒博弈。"
    },
    {
     "title": "AI is cursing renters with the promise of impossible homes",
     "url": "https://www.theverge.com/report/953888/ai-virtual-staging-real-estate-apartment-listings",
     "source": "The Verge - AI",
     "date": "2026-06-22",
     "summary": "Joyce, a native New Yorker, didn't think finding her first solo apartment in the city would be easy. But she also didn't think it'd be \"hell.\" After looking at a lot of tiny, overpriced places she described as \"shitholes,\" Joyce found her dream apartment: a reasonably priced studio in Manhattan. ...",
     "is_new": true,
     "lang": "en",
     "interpretation": "AI生成虚假房源加剧租房困境，技术便利反成新型欺诈工具。"
    },
    {
     "title": "Read this before you vibe-code another app",
     "url": "https://www.theverge.com/ai-artificial-intelligence/950844/vibe-coding-security-risks-apps",
     "source": "The Verge - AI",
     "date": "2026-06-22",
     "summary": "Bob Starr was delighted with his vibe-coded website. \"Boomberg\" showed how much US tax money is going to tech companies, and Starr launched it online immediately after making it. It wasn't until months after the site went live that he realized there was a problem: a hidden SQL injection risk. It ...",
     "is_new": true,
     "lang": "en",
     "interpretation": "警惕无脑编程热潮，代码质量与安全风险需被重新审视。"
    },
    {
     "title": "Codex-maxxing for long-running work",
     "url": "https://openai.com/index/codex-maxxing-long-running-work",
     "source": "OpenAI Blog",
     "date": "2026-06-22",
     "summary": "Learn how Jason Liu uses Codex to preserve context, manage complex projects, and help work continue beyond a single prompt.",
     "is_new": true,
     "lang": "en",
     "interpretation": "长期任务中优化代码生成，AI编程效率与稳定性需协同提升。"
    },
    {
     "title": "World Cup Scams Are Getting Harder to Spot",
     "url": "https://www.wired.com/story/world-cup-scams-are-getting-harder-to-spot/",
     "source": "Wired - AI",
     "date": "2026-06-22",
     "summary": "From fake tickets to cloned websites, AI is magnifying World Cup scams. Can fans distinguish between what’s real and what’s not?",
     "is_new": true,
     "lang": "en",
     "interpretation": "世界杯骗局日益逼真，球迷购票需警惕新型钓鱼手段。"
    },
    {
     "title": "Prompt Injection as Role Confusion",
     "url": "https://simonwillison.net/2026/Jun/22/prompt-injection-as-role-confusion/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-22",
     "summary": "Prompt Injection as Role Confusion First, I absolutely love this: This is a blog-style writeup of the paper. I wish every paper would come with one of these. Academic writing is pretty dry - the impact of a paper can be so much higher if you publish a readable version to accompany the formal one....",
     "is_new": true,
     "lang": "en",
     "interpretation": "提示注入攻击利用角色混淆，暴露AI安全防护新漏洞。"
    },
    {
     "title": "The Download: record-breaking subsea tunnels and flexible data centers",
     "url": "https://www.technologyreview.com/2026/06/22/1139385/the-download-rogfast-subsea-tunnel-flexible-data-centers/",
     "source": "MIT Technology Review - AI",
     "date": "2026-06-22",
     "summary": "This is today’s edition of The Download, our weekday newsletter that provides a daily dose of what’s going on in the world of technology. Inside the world’s deepest and longest subsea road tunnel —Niall Firth I’m currently around 1,000 feet beneath the North Sea, in a dark, dank cave. It smells w...",
     "is_new": true,
     "lang": "en",
     "interpretation": "海底隧道与灵活数据中心突破，预示基础设施正走向极端环境与弹性设计。"
    },
    {
     "title": "Beyond Siri: Here are the practical AI features coming to your iPhone in iOS 27",
     "url": "https://techcrunch.com/2026/06/21/beyond-siri-here-are-the-practical-ai-features-coming-to-your-iphone-in-ios-27/",
     "source": "TechCrunch - AI",
     "date": "2026-06-21",
     "summary": "Siri’s AI overhaul may have grabbed the headlines at WWDC, but some of Apple’s most useful AI features are arriving elsewhere in iOS 27.",
     "is_new": false,
     "lang": "en",
     "interpretation": "iOS 27将带来超越Siri的实用AI功能，提升用户日常体验。"
    },
    {
     "title": "sqlite-utils 4.0rc1 adds migrations and nested transactions",
     "url": "https://simonwillison.net/2026/Jun/21/sqlite-utils-40rc1/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-21",
     "summary": "sqlite-utils is my combined Python library and CLI tool for working with SQLite databases. It provides an extensive set of higher-level operations on top of Python's default sqlite3 package, including support for complex table transformations, automatic table creation from JSON data and a whole l...",
     "is_new": false,
     "lang": "en",
     "interpretation": "新版本支持迁移与嵌套事务，让数据库操作更灵活可靠。"
    },
    {
     "title": "sqlite-utils 4.0rc1",
     "url": "https://simonwillison.net/2026/Jun/21/sqlite-utils/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-21",
     "summary": "Release: sqlite-utils 4.0rc1 See sqlite-utils 4.0rc1 adds migrations and nested transactions. Tags: sqlite-utils",
     "is_new": false,
     "lang": "en",
     "interpretation": "该版本引入关键功能，为开发者提供更强大的数据处理工具。"
    },
    {
     "title": "Signal’s Meredith Whittaker wants you to remember that AI chatbots ‘are not your friends’",
     "url": "https://techcrunch.com/2026/06/20/signals-meredith-whittaker-wants-you-to-remember-that-ai-chatbots-are-not-your-friends/",
     "source": "TechCrunch - AI",
     "date": "2026-06-20",
     "summary": "\"These are not your friends. These are not conscious beings. These are not sentient interlocutors.”",
     "is_new": false,
     "lang": "en",
     "interpretation": "Signal负责人提醒用户，AI聊天机器人本质是工具，不应过度依赖。"
    },
    {
     "title": "Siri AI Hands On: A Smart, Helpful Assistant",
     "url": "https://www.wired.com/story/siri-ai-hands-on-iphone/",
     "source": "Wired - AI",
     "date": "2026-06-20",
     "summary": "The new Siri AI is conversational, omnipresent, and actually helpful.",
     "is_new": false,
     "lang": "en",
     "interpretation": "Siri AI上手体验显示，它变得更聪明、更主动，实用性大增。"
    },
    {
     "title": "The inevitable weakness of metrics",
     "url": "https://www.technologyreview.com/2026/06/19/1138778/inevitable-weakness-metrics-quantified-life-book-review/",
     "source": "MIT Technology Review - AI",
     "date": "2026-06-19",
     "summary": "There are plenty of useful things a metric can reveal. There are even more it can obscure or corrupt. It took me well over a decade of tracking my own life in ever greater detail to fully appreciate this duality, which probably reveals something about both me and the nature of measurement. Like a...",
     "is_new": false,
     "lang": "en",
     "interpretation": "指标必然存在弱点，提醒过度依赖量化评估可能误导决策。"
    },
    {
     "title": "Brain-computer interface trials are taking off",
     "url": "https://www.technologyreview.com/2026/06/19/1139270/brain-computer-interface-trials-are-taking-off/",
     "source": "MIT Technology Review - AI",
     "date": "2026-06-19",
     "summary": "This week, I covered the story of Casey Harrell—a man with ALS who is “the first power user” of a brain implant, according to the researchers who worked with him. Harrell is paralyzed and unable to speak coherently without the device. He has now spent almost three years using a brain-computer int...",
     "is_new": false,
     "lang": "en",
     "interpretation": "脑机接口临床试验加速，人类与机器融合进入实质性验证阶段。"
    },
    {
     "title": "Photoshop and Premiere now have AI assistants",
     "url": "https://www.theverge.com/tech/952099/adobe-ai-assistants-photoshop-premiere-illustrator-beta-launch",
     "source": "The Verge - AI",
     "date": "2026-06-18",
     "summary": "Adobe's plan to stick AI assistants into all of its Creative Cloud suite is now fully underway, with new chatbots now rolling out to its biggest editing and design apps. As part of a public beta launching today, Photoshop, Premiere, Illustrator, InDesign, and Frame.io now each have a bespoke AI A...",
     "is_new": false,
     "lang": "en",
     "interpretation": "创意工具AI化加速，降低专业门槛但引发原创性焦虑。"
    },
    {
     "title": "Adobe’s redesigned AI studio remembers what your creations look like",
     "url": "https://www.theverge.com/tech/952104/adobe-firefly-ai-agent-elements-projects-update",
     "source": "The Verge - AI",
     "date": "2026-06-18",
     "summary": "Adobe is introducing some new capabilities for its Firefly AI assistant, alongside a \"reimagined\" AI studio that lets you edit and generate new designs from a single interface. The new Firefly experience launching today in private beta is designed to give you \"persistent context, reusable assets,...",
     "is_new": false,
     "lang": "en",
     "interpretation": "Adobe记忆创作历史，AI设计连贯性提升但隐私风险加剧。"
    },
    {
     "title": "Meta’s AI Workers Are Revolting, Peter Thiel’s Secret Society, and SBF’s Plea to Trump",
     "url": "https://www.wired.com/story/uncanny-valley-podcast-meta-ai-workers-revolting-peter-thiel-secret-society-sbf-plea-to-trump/",
     "source": "Wired - AI",
     "date": "2026-06-18",
     "summary": "On today’s Uncanny Valley, we dive into the dysfunction in Meta’s newly formed AI unit and why it’s been driving already-low employee morale even further into the ground.",
     "is_new": false,
     "lang": "en",
     "interpretation": "科技巨头内部矛盾激化，反映AI行业伦理与权力斗争白热化。"
    },
    {
     "title": "Datasette Apps: Host custom HTML applications inside Datasette",
     "url": "https://simonwillison.net/2026/Jun/18/datasette-apps/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-18",
     "summary": "Today we launched a new plugin for Datasette, datasette-apps, with this launch announcement post on the Datasette project blog. That post has the what, but I'm going to expand on that a little bit here to provide the why. The TL;DR Datasette Apps are self-contained HTML+JavaScript applications th...",
     "is_new": false,
     "lang": "en",
     "interpretation": "为开发者提供在数据管理平台内直接部署网页应用的新方式。"
    },
    {
     "title": "datasette-acl 0.6a0",
     "url": "https://simonwillison.net/2026/Jun/18/datasette-acl/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-18",
     "summary": "Release: datasette-acl 0.6a0 This release expands datasette-acl from table-only permissions toward a general resource-sharing system. Alex Garcia did most of the work for this release - we're fleshing out the plugin that will allow multi-user Datasette instances finely grained control over who ca...",
     "is_new": false,
     "lang": "en",
     "interpretation": "开源工具更新，强化数据访问控制，提升协作安全性。"
    },
    {
     "title": "The Download: a new hunt for dark matter and Kenya’s case for going solar",
     "url": "https://www.technologyreview.com/2026/06/18/1139261/the-download-dark-matter-hunt-kenya-solar-power/",
     "source": "MIT Technology Review - AI",
     "date": "2026-06-18",
     "summary": "This is today’s edition of The Download, our weekday newsletter that provides a daily dose of what’s going on in the world of technology. The search for dark matter has been blown wide open For decades, physicists have hunted for weakly interacting massive particles (WIMPs), a leading candidate f...",
     "is_new": false,
     "lang": "en",
     "interpretation": "暗物质探索与非洲能源转型并行，展现科学与发展的全球视野。"
    },
    {
     "title": "MolmoMotion: Language-guided 3D motion forecasting",
     "url": "https://huggingface.co/blog/allenai/molmomotion",
     "source": "Hugging Face Blog",
     "date": "2026-06-17",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "结合语言指令预测三维运动，推动人机交互与机器人技术。"
    },
    {
     "title": "GLM-5.2: Built for Long-Horizon Tasks",
     "url": "https://huggingface.co/blog/zai-org/glm-52-blog",
     "source": "Hugging Face Blog",
     "date": "2026-06-17",
     "summary": "",
     "is_new": false,
     "lang": "en",
     "interpretation": "专为长期复杂任务设计，提升AI自主规划与执行能力。"
    },
    {
     "title": "Quoting Charity Majors",
     "url": "https://simonwillison.net/2026/Jun/17/charity-majors/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-17",
     "summary": "What happened in 2025 was this: the economics of code production were turned upside down. Instead of being very hard, time-consuming, and expensive to generate code, it became effectively free and instant. Lines of code went from being treasured, reused, cared for and carefully curated, to being ...",
     "is_new": false,
     "lang": "en",
     "interpretation": "引用行业专家观点，可能涉及技术趋势或行业批评。"
    },
    {
     "title": "<click-to-play> — a still that plays",
     "url": "https://simonwillison.net/2026/Jun/17/click-to-play-component/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-17",
     "summary": "Tool: — a still that plays A progressive enchantment Web Component that turns this markup: Into a still frame with a click to play button which loads the GIF on demand. For when you don't want big GIFs to be loaded unless people want to play them. Here's an example that demonstrates the new row e...",
     "is_new": false,
     "lang": "en",
     "interpretation": "静态图像可点击播放，革新交互式内容展示方式。"
    },
    {
     "title": "NetNewsWire Status",
     "url": "https://simonwillison.net/2026/Jun/17/netnewswire-status/#atom-everything",
     "source": "Simon Willison's Blog",
     "date": "2026-06-17",
     "summary": "NetNewsWire Status I find this inspiring. Brent Simmons retired a year ago, and his retirement project is making one piece of software really, really good - free from any commercial pressure. The software is NetNewsWire - \"it's like podcasts, but for reading\" - first released in 2002 and made ope...",
     "is_new": false,
     "lang": "en",
     "interpretation": "知名RSS阅读器更新状态，影响信息获取工具的用户体验。"
    },
    {
     "title": "New research shows how AMIE, our medical AI, could help manage health conditions.",
     "url": "https://blog.google/innovation-and-ai/models-and-research/google-research/amie-for-disease-management-in-nature/",
     "source": "Google AI Blog",
     "date": "2026-06-17",
     "summary": "Research in “Nature” shows our conversational AI system matches primary care physicians in complex disease management.",
     "is_new": false,
     "lang": "en",
     "interpretation": "医疗AI新研究，展示AI在慢性病管理中的实际应用潜力。"
    },
    {
     "title": "We’re strengthening our presence in Alabama through new investments and community support.",
     "url": "https://blog.google/innovation-and-ai/infrastructure-and-cloud/global-network/alabama-investment-june-2026/",
     "source": "Google AI Blog",
     "date": "2026-06-15",
     "summary": "Google has announced a $1.5 billion investment for 2026 and 2027 to expand its data center campus in Jackson County, Alabama. Operating since 2019 on a repurposed former…",
     "is_new": false,
     "lang": "en",
     "interpretation": "企业投资阿拉巴马，带动当地就业与经济，体现区域战略布局。"
    },
    {
     "title": "Our new community investments in Virginia support local jobs and expand energy affordability.",
     "url": "https://blog.google/innovation-and-ai/infrastructure-and-cloud/global-network/virginia-community-investments/",
     "source": "Google AI Blog",
     "date": "2026-06-11",
     "summary": "We’re helping build the state’s next-generation workforce and investing in energy programs.",
     "is_new": false,
     "lang": "en",
     "interpretation": "弗吉尼亚社区投资，兼顾就业与能源成本，体现企业社会责任。"
    },
    {
     "title": "The latest AI news we announced in May 2026",
     "url": "https://blog.google/innovation-and-ai/technology/ai/google-ai-updates-may-2026/",
     "source": "Google AI Blog",
     "date": "2026-06-05",
     "summary": "Here are Google’s latest AI updates from May 2026",
     "is_new": false,
     "lang": "en",
     "interpretation": "2026年5月AI新闻汇总，揭示行业最新技术突破与产品动态。"
    },
    {
     "title": "5 ways Google Search can level up your thrift and vintage shopping",
     "url": "https://blog.google/products-and-platforms/products/search/thrifting-tips/",
     "source": "Google AI Blog",
     "date": "2026-06-03",
     "summary": "Uncover second-hand scores with AI tools in Google Search and Shopping.",
     "is_new": false,
     "lang": "en",
     "interpretation": "谷歌搜索新功能助力二手购物，让省钱与环保消费更高效。"
    },
    {
     "title": "Take our I/O 2026 quiz, vibe coded in Google AI Studio.",
     "url": "https://blog.google/innovation-and-ai/technology/ai/io-2026-vibe-coded-quiz/",
     "source": "Google AI Blog",
     "date": "2026-05-29",
     "summary": "We used Google AI Studio to vibe code a quiz about our top I/O 2026 announcements.",
     "is_new": false,
     "lang": "en",
     "interpretation": "谷歌I/O 2026趣味测验，体验AI Studio的“氛围编程”新玩法。"
    },
    {
     "title": "小扎「蒸馏员工」计划紧急喊停！私聊数据都泄露了…",
     "url": "https://www.qbitai.com/2026/06/437330.html",
     "source": "量子位",
     "date": "2026-06-23",
     "summary": "Meta这团乱麻，几顿零食是搞不定了",
     "is_new": true,
     "lang": "zh",
     "interpretation": "扎克伯格“蒸馏员工”计划因隐私泄露叫停，暴露企业内部数据管理漏洞。"
    },
    {
     "title": "阿里发布视频生成模型HappyHorse 1.1：五大维度全面升级",
     "url": "https://www.qbitai.com/2026/06/437317.html",
     "source": "量子位",
     "date": "2026-06-22",
     "summary": "",
     "is_new": true,
     "lang": "zh",
     "interpretation": "阿里视频生成模型升级，推动AI视频创作能力迈入新阶段。"
    },
    {
     "title": "AI硬件席卷618，钉钉A1包揽天猫、抖音、京东销量冠军",
     "url": "https://www.qbitai.com/2026/06/437308.html",
     "source": "量子位",
     "date": "2026-06-22",
     "summary": "同时拿下天猫、抖音、京东三大平台 AI 录音设备销量第一",
     "is_new": true,
     "lang": "zh",
     "interpretation": "钉钉A1霸榜618，AI硬件消费化趋势加速，办公场景成主战场。"
    },
    {
     "title": "华为和 Google 都在抢！手机小组件，为什么是 AI 必争之地？｜AI 器物志",
     "url": "https://www.ifanr.com/1669508?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-22",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": true,
     "lang": "zh",
     "interpretation": "手机小组件成AI必争之地，巨头争夺用户交互入口新阵地。"
    },
    {
     "title": "微信终于要给 AI 手机开门了｜AI 器物志",
     "url": "https://www.ifanr.com/1669522?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-22",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": true,
     "lang": "zh",
     "interpretation": "微信开放AI手机入口，超级App与终端生态融合迈出关键一步。"
    },
    {
     "title": "早报｜曝苹果新CEO重建设计团队/微信原生AI助手「小微」灰度上线/马斯克拿下7800亿天价薪酬",
     "url": "https://www.ifanr.com/1669504?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-22",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": true,
     "lang": "zh",
     "interpretation": "苹果新CEO或重塑设计，微信AI助手灰度上线，马斯克天价薪酬引关注。"
    },
    {
     "title": "索尼谈未来游戏开发：让 AI 负责打杂，设计师才能专心搞创意",
     "url": "https://cn.technode.com/post/2026-06-22/sony-deletes-mention-of-pc-from-annual-strategy-report-in-favour-of-a-gushing-about-ai/",
     "source": "动点科技 - AI",
     "date": "2026-06-22",
     "summary": "如今的游戏行业，几乎每三款新游戏里就有一 […]",
     "is_new": true,
     "lang": "zh",
     "interpretation": "索尼试图用AI解放设计师，本质是探索人机协作的创作效率边界。"
    },
    {
     "title": "陶哲轩12年前的预言，现在AI帮他兑现了",
     "url": "https://www.qbitai.com/2026/06/437023.html",
     "source": "量子位",
     "date": "2026-06-20",
     "summary": "全球最聪明的人之一，成了AI最狂热的布道者",
     "is_new": false,
     "lang": "zh",
     "interpretation": "陶哲轩早年数学猜想被AI验证，标志AI在理论科学领域从工具走向合作者。"
    },
    {
     "title": "撸猫撸出SOTA！3个00后2个月，造出史上最快流式音视频社交模型",
     "url": "https://www.qbitai.com/2026/06/436996.html",
     "source": "量子位",
     "date": "2026-06-20",
     "summary": "速度快7倍，成本只有Veo 3的1/2000",
     "is_new": false,
     "lang": "zh",
     "interpretation": "年轻团队用低成本实现音视频模型突破，挑战大厂技术壁垒与资源垄断。"
    },
    {
     "title": "刚刚，Codex 大更新，你在电脑的操作正在成为 AI 经验包",
     "url": "https://www.ifanr.com/1669204?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-19",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "Codex通过记录用户操作训练AI，意味着人机协作模式从指令驱动转向行为学习。"
    },
    {
     "title": "营收涨了 30 倍，ARR 3 亿美金，这家 AI 公司已经在赚钱了",
     "url": "https://www.ifanr.com/1669210?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-18",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "这家AI公司实现高增长与盈利，证明AI商业化路径已跑通，行业信心大增。"
    },
    {
     "title": "早报｜曝第二代iPhone Air明年春季推出/特斯拉「车顶维权」名誉权案再审被驳回/微信支付推出AI专属卡",
     "url": "https://www.ifanr.com/1669281?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=",
     "source": "APPSO",
     "date": "2026-06-18",
     "summary": "#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。]]>",
     "is_new": false,
     "lang": "zh",
     "interpretation": "苹果产品线调整、特斯拉维权案再审被驳、微信支付推AI卡，科技与法律热点交织。"
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
   "stars": 42975,
   "forks": 7714,
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
   "stars": 26689,
   "forks": 5890,
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
   "stars": 18156,
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
   "stars": 15533,
   "forks": 2370,
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
   "stars": 11722,
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
   "stars": 11666,
   "forks": 937,
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
   "stars": 10141,
   "forks": 1299,
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
   "stars": 8681,
   "forks": 977,
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
   "stars": 7631,
   "forks": 868,
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
   "stars": 6802,
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
   "stars": 5732,
   "forks": 1404,
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
   "stars": 5454,
   "forks": 627,
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
   "stars": 4887,
   "forks": 403,
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
   "stars": 4480,
   "forks": 515,
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