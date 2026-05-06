# Stitch AI News Aggregator

A bilingual (Chinese/English) AI news aggregator with a masonry waterfall layout, auto-deployed to GitHub Pages.

**Live site:** [jacobatxa.github.io/codespaces-blank](https://jacobatxa.github.io/codespaces-blank)

---

## Features

- **🧠 AI-Focused News** — Fetches from 19 RSS sources covering the latest in AI/ML/LLM
- **🌐 Bilingual (~50/50)** — Balanced mix of Chinese and English sources
- **📊 Category classification** — 8 AI-specific categories (大模型, Agent, Robotics, AIGC, etc.)
- **🔥 GitHub Trending** — Top 15 AI/ML repos fetched from GitHub API
- **⭐ Star & Read tracking** — LocalStorage-based bookmarking and read status
- **🔍 Search** — Full-text search across titles and summaries
- **🌙 Dark mode** — Auto-adapts to system theme
- **📱 Responsive** — Masonry layout (4→3→2→1 columns)
- **🔄 Daily auto-update** — Data regenerated via scheduled job

## RSS Sources

| Source | Language | Type |
|--------|----------|------|
| TechCrunch - AI | EN | Media |
| Hugging Face Blog | EN | Official |
| ArsTechnica - AI | EN | Media |
| The Verge - AI | EN | Media |
| OpenAI Blog | EN | Official |
| Wired - AI | EN | Media |
| Simon Willison's Blog | EN | Independent |
| VentureBeat - AI | EN | Media |
| Google AI Blog | EN | Official |
| MIT Technology Review - AI | EN | Media |
| 量子位 | ZH | Media |
| APPSO | ZH | Media |
| 动点科技 - AI | ZH | Media |
| 少数派 - AI | ZH | Media |
| 雷锋网 - AI | ZH | Media |
| 品玩 - AI | ZH | Media |
| 虎嗅 - AI | ZH | Media |
| 机器之心 | ZH | Media |
| 36氪 - AI | ZH | Media |

## Project Structure

```
├── generate_data.py    # Data fetcher & generator (Python, stdlib only)
├── index.html          # Single-page waterfall layout (no build step)
├── data.js             # Auto-generated data (const APP_DATA = {...})
└── README.md           # This file
```

## How It Works

1. `generate_data.py` runs daily (via cron/GitHub Actions)
2. Fetches RSS feeds from 19 sources + GitHub API for trending repos
3. Parses, deduplicates, classifies, and balances EN/ZH articles
4. Outputs `data.js` with `const APP_DATA = {...}`
5. `index.html` reads `APP_DATA` and renders the waterfall layout

## Running Locally

```bash
python3 generate_data.py
```

This regenerates `data.js`. Open `index.html` in a browser to view.

No dependencies required — uses only Python stdlib (`urllib`, `re`, `json`, `html`, `xml.parsers.expat`, `datetime`).

## Data Format

The `data.js` file exports `APP_DATA` with this structure:

```js
{
  "today": "2026-05-06",
  "fetched_at": "2026-05-06T10:23:17",
  "total": 200,
  "sources": {
    "TechCrunch - AI": { "count": 12, "color": "#dc2626" },
    ...
  },
  "tabs": [
    { "name": "大模型与基础架构", "icon": "🧠", "color": "#7c3aed", "count": 39 },
    ...
  ],
  "sections": [
    {
      "name": "大模型与基础架构",
      "icon": "🧠",
      "color": "#7c3aed",
      "count": 39,
      "cards": [
        {
          "title": "...",
          "url": "...",
          "source": "TechCrunch - AI",
          "date": "2026-05-05",
          "summary": "...",
          "is_new": true,
          "lang": "en"
        }
      ]
    }
  ],
  "trending": [
    {
      "name": "openai/openai-cookbook",
      "url": "https://github.com/openai/openai-cookbook",
      "description": "...",
      "stars": 123456,
      "forks": 12345,
      "language": "Python",
      "topics": ["ai", "ml"]
    }
  ]
}
```

## Deployment

The site is deployed on **GitHub Pages** at [jacobatxa.github.io/codespaces-blank](https://jacobatxa.github.io/codespaces-blank).

The `data.js` is regenerated periodically to keep content fresh.

---

*Built with ❤️ by Jacob — Stitch Design System*
