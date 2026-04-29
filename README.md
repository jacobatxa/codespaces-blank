# 使用说明：将瀑布流页面部署到 GitHub Pages

## 方案一：直接保存本地查看（不需要 GitHub）
1. 聊天里复制下方链接，在浏览器打开服务器上的文件
   目前文件在: ssh到服务器后执行
   ```
   cp ~/.cache/ai_news_cache/masonry/index.html ~/Downloads/ai-news.html
   ```
   然后用浏览器打开 ~/Downloads/ai-news.html

## 方案二：部署到 GitHub Pages（推荐，永久在线链接）
需要你告诉我你的 GitHub 用户名，我来操作：
1. 创建一个 repo 叫 ai-news
2. 把 index.html 推到 gh-pages 分支
3. 自动生成 URL: https://你的用户名.github.io/ai-news/
4. 每天定时任务自动更新

## 方案三：用 Cloudflare Pages / Vercel / Netlify（免费）
如果你有这些平台的账号，把 HTML 文件拖进去就自动生成 URL 了。

---

## 页面功能说明
✅ 小红书风格瀑布流（4列→3列→2列→1列响应式）
✅ 黏性头部导航 + 毛玻璃效果
✅ 全部/中文/English 标签切换
✅ 信源彩色标签（每个信源不同颜色）
✅ 深色模式自动适配
✅ 卡片悬停效果
✅ 点击卡片跳转原文
✅ 每日自动更新内容
