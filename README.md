# Balsamiq Compiler

將 `.bmpr` 專案直接轉成 HTML 頁面。

## 架構

```text
BMPR (SQLite)
  ↓
SQLite Parser (compiler.js)
  ↓
Renderer Engine (renderers/)
  ↓
HTML (dist/)
```

## 安裝

```bash
npm install
```

## 執行

1. 將 Balsamiq 專案的 `.bmpr` 檔案複製到專案根目錄，並重新命名為 `project.bmpr`。
2. 執行編譯指令：

```bash
npm start
```

## 輸出

```text
/dist
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


---

## agy cli 的創建過程會話棧存區：
C:\Users\user\.gemini\antigravity-cli\brain\ca31269c-6307-47ef-98d6-f962341abf21

