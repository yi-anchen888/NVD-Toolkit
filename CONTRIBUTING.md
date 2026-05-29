# NVD-Toolkit 協作指南

謝謝你協助測試與微調 NVD 自生活。請使用 Pull Request 流程，不要直接修改 `main`。

## 可修改範圍

可以修改：

- `index.html`
- `styles.css`
- `script.js`
- `assets/`

請先討論再修改：

- `.github/workflows/`
- `.gitignore`
- 安全性設定
- 下載連結與 SHA-256

不要上傳：

- API key、token、密碼
- 個資
- 未授權素材
- 工具安裝包或大型壓縮檔

## 建議流程

1. 從 `main` 建立新 branch。
2. 一次只改一個主題，例如文案、排版、圖片或工具資料。
3. 修改完成後開 Pull Request。
4. PR 說明請寫清楚改了什麼、為什麼改。
5. 等審核通過後才會合併上線。

## 分支命名範例

- `update-tool-copy`
- `fix-mobile-layout`
- `add-test-feedback-link`
- `improve-dark-mode`

## 本機檢查

修改 `script.js` 後，請執行：

```powershell
node --check script.js
```

確認沒有語法錯誤後再送 PR。
