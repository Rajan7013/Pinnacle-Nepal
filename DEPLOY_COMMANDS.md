# 🚀 Quick GitHub Pages Deployment Commands

## ⚠️ IMPORTANT: Update Repository Name First!

Before deploying, open `next.config.ts` and replace `/pinnacle-nepal` with your actual repository name on lines 24-25:

```typescript
basePath: process.env.NODE_ENV === 'production' ? '/YOUR-REPO-NAME' : '',
assetPrefix: process.env.NODE_ENV === 'production' ? '/YOUR-REPO-NAME/' : '',
```

## 📝 Step-by-Step Commands

### 1. Initialize Git and Commit
```bash
git init
git add .
git commit -m "Initial commit: Pinnacle Nepal Platform"
```

### 2. Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `pinnacle-nepal` (or your choice)
3. Choose **Public**
4. Click **Create repository**

### 3. Connect to GitHub
```bash
# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/pinnacle-nepal.git
git branch -M main
git push -u origin main
```

### 4. Deploy to gh-pages Branch
```bash
npm run deploy
```

This command will:
- Build your Next.js app
- Export static files
- Create `gh-pages` branch
- Push to GitHub

### 5. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings**
3. Click **Pages** (left sidebar)
4. Under **Source**:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. Click **Save**

### 6. Wait and Access
- Wait 2-3 minutes for deployment
- Your site will be live at:
  ```
  https://YOUR_USERNAME.github.io/pinnacle-nepal/
  ```

## 🔄 Future Updates

When you make changes:

```bash
# Make your changes
git add .
git commit -m "Description of changes"
git push origin main

# Deploy to GitHub Pages
npm run deploy
```

## ✅ What You'll Have

**Two Branches:**
- `main` - Your source code
- `gh-pages` - Your deployed website (auto-created)

**Live URL:**
```
https://YOUR_USERNAME.github.io/pinnacle-nepal/
```

## 🎉 Share with Friends

Send them this URL:
```
https://YOUR_USERNAME.github.io/pinnacle-nepal/
```

---

**Need detailed help?** See `GITHUB_PAGES_DEPLOYMENT.md`
