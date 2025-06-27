# 中原童軍團歌本 - 《逸》閱讀器網站

本專案為「中原童軍團歌本-《逸》」的線上閱讀器網站，使用純前端技術呈現歌本圖片，支援桌面與行動裝置瀏覽，並提供左右翻頁、頁碼跳轉及橫向瀏覽建議等功能。

專案使用 Tailwind CSS 進行樣式設計，並配合簡易的 JavaScript 控制翻頁與互動效果。

---

## Demo 網站

[https://songbook-yi.goblinapp.com/](https://songbook-yi.goblinapp.com/)

---

## 專案架構

- `index.html` — 主頁面，包含結構與基本 UI 元素  
- `script.js` — 主要 JavaScript 控制邏輯  
- `style.css` — 自訂樣式  
- `dist.css` — Tailwind CLI 編譯生成的靜態 CSS  
- `images/` — 存放歌本圖片資源  

---

## 部署到 Cloudflare Pages

1. 登入 [Cloudflare Pages](https://pages.cloudflare.com/)  
2. 建立新專案並連結你的 GitHub 倉庫 `zhongyuan-scout-songbook-yi`  
3. 設定建置命令（Build command）為空，因為這是純靜態網站，不需建置  
4. 設定發佈目錄（Build output directory）為根目錄 `/`  
5. 部署完成後，即可取得網站 URL  

> 本專案為靜態網站，不使用任何後端技術，部署流程簡單快速。

---

## 使用 Tailwind CLI 建立靜態 CSS

本專案使用 Tailwind CLI 生成 `dist.css`，以下為建立步驟參考：

1. **安裝 Node.js**（若尚未安裝）  
   可從 [Node.js 官方網站](https://nodejs.org/) 下載安裝  

2. **安裝 Tailwind CSS CLI**  
```bash
   npm install -D tailwindcss
   npx tailwindcss init
```　
會生成 tailwind.config.js 設定檔
3.	編寫 Tailwind 輸入 CSS
在專案根目錄新增 input.css，內容包含 Tailwind 指令：
```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```

4.	執行 Tailwind CLI 編譯
```bash
npx tailwindcss -i ./input.css -o ./dist.css --minify
```
此命令會將 Tailwind 的樣式輸出至 dist.css，並自動壓縮檔案

5.	在 index.html 中引入 dist.css
```html
<link rel="stylesheet" href="./dist.css">
```
更多詳細教學請參考：JerryZheli 部落格教學

⸻

開發者提示
- 可使用瀏覽器開發者工具調整樣式或 JavaScript
- 若需新增歌本圖片，請放置於 images/ 資料夾並更新 script.js 中 imageFiles 陣列
- 本專案強調輕量與簡潔，適合快速部署展示靜態內容

⸻

授權

MIT License

⸻

感謝使用，歡迎回報問題或提出改進建議！

