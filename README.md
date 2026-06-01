
# Balsamiq 轉 HTML/CSS 編譯器

### 在前端開發生態系統中具有關鍵的橋樑價值，主要體現在以下四個維度：                      
											
**1. 加速設計至程式碼的自動化流轉（Design-to-Code）**
- 傳統上，將低保真原型（Balsamiq Mockup）轉譯為 HTML 網頁需要工程師進行大量重複且繁瑣的切圖與排版工作。
- 本工具能直接解析  .bmpr 數據庫，實現自動化秒級轉譯，將 UI 原型開發效率提升數倍。                                      

**2. 引導生成具備「維護性」的結構化代碼**
- 多數自動代碼生成工具僅輸出無法維護的絕對定位（Absolute Layout）代碼。
- 本專案透過先進的坐標聚類算法，將絕對定位逆向工程為響應式的 Bootstrap Row/Col 網格與嵌套容器結構，並將行內樣式徹底抽離至外置樣式表。
- 這提供了真正符合現代前端工程規範、可二次開發的高質量代碼。

**3. 優化敏捷開發與原型驗證流程**
- 產品經理（PM）與 UI/UX 設計師在 Balsamiq 上完成的調整，可直接一鍵生成高保真網頁原型。
- 這大幅縮短了與利害關係人的確認週期，使團隊能以極低成本快速進行用戶測試與功能驗證。

**4. 採用模組化渲染器結構**
- 與組件化前端生態接軌編譯器採用模組化渲染器結構（如  Button.js 、 FieldSet.js等），完美契合現代前端組件化（React/Vue/Angular）的思維。
- 生成的乾淨 HTML 與標準 class 樣式，可被開發者輕鬆抽離並封裝進生產環境的組件庫中。 

---

# Balsamiq Compiler

- 將 `.bmpr` 專案直接轉成 HTML 頁面。
- 將 `.bmpr` 專案匯出為單一 JSON 頁面，此檔案後續可以提交給「Balsamiq 原型多工轉換器」轉成多個 HTML 頁面。


## 架構：Balsamiq 專案所有mockups編譯為獨立的 HTML 頁面

```text
BMPR (SQLite)
  ↓
SQLite Parser (compiler.js)
  ↓
Renderer Engine (renderers/)
  ↓
HTML (./dist/)
```
## 架構：Balsamiq 專案匯出包括所有mockups的單一 JSON 頁面 

```text
BMPR (SQLite)
  ↓
SQLite Parser (exporter.js)
  ↓
Renderer Engine (renderers/)
  ↓
HTML (./allpage.json)
```

## 安裝

```bash
npm install
```

## 執行：將 Balsamiq 專案編譯為 HTML 頁面

1. 將 Balsamiq 專案的 `.bmpr` 檔案複製到專案根目錄，並重新命名為 `project.bmpr`。
2. 執行編譯指令：

```bash
npm run start
```

## 輸出

```text
./dist
  首頁儀錶板.html
  login.html
  ...
```

## 支援的 Controls

- **Label**: 標籤文字
- **Title**: 大標題
- **Button**: 按鈕
- **BrowserWindow**: 瀏覽器外框
- **Icon**: 圖示 (FontAwesome 6)

## 執行：將 Balsamiq 專案匯出包括所有mockups的單一 JSON 頁面 

1. 將 Balsamiq 專案的 `.bmpr` 檔案複製到專案根目錄，並重新命名為 `project.bmpr`。
2. 執行匯出指令：

```bash
npm run export
```

## 輸出

```text
./allpage.json
```

---

## agy cli 的創建過程會話棧存區：
C:\Users\\[用戶名稱]\\.gemini\antigravity-cli\brain\\[session字串]

