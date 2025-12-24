# 🚀 GitHub Pages Deployment Guide (Using gh-pages Branch)

## Overview
Deploy your Next.js website to GitHub Pages using the `gh-pages` branch instead of `main`.

## Step 1: Install GitHub Pages Package

```bash
npm install --save-dev gh-pages
```

## Step 2: Update package.json

Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "export": "next build && next export",
    "deploy": "npm run export && gh-pages -d out -b gh-pages"
  }
}
```

## Step 3: Update next.config.js

Replace your `next.config.js` with:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '',
}

module.exports = nextConfig
```

**Important**: Replace `your-repo-name` with your actual GitHub repository name!

## Step 4: Create .nojekyll File

Create a file named `.nojekyll` in the `public` folder (empty file, no content needed).

This tells GitHub Pages not to process your site with Jekyll.

## Step 5: Push to GitHub

### 5.1 Initialize Git
```bash
git init
```

### 5.2 Add all files
```bash
git add .
```

### 5.3 Commit
```bash
git commit -m "Initial commit: Ready for GitHub Pages deployment"
```

### 5.4 Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `pinnacle-nepal` (or your choice)
3. Choose **Public**
4. Click **Create repository**

### 5.5 Connect and Push
```bash
# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/pinnacle-nepal.git

# Push to main branch
git branch -M main
git push -u origin main
```

## Step 6: Deploy to gh-pages Branch

```bash
npm run deploy
```

This will:
- Build your Next.js app
- Export static files to `out` folder
- Create `gh-pages` branch
- Push built files to `gh-pages` branch

## Step 7: Enable GitHub Pages

1. Go to your GitHub repository
2. Click **Settings**
3. Scroll to **Pages** (left sidebar)
4. Under **Source**:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. Click **Save**

## Step 8: Wait for Deployment

- GitHub will build and deploy (2-3 minutes)
- You'll see a green checkmark when ready
- Your site URL will be shown:
  ```
  https://YOUR_USERNAME.github.io/pinnacle-nepal/
  ```

## Step 9: Share with Friends

Your live website URL:
```
https://YOUR_USERNAME.github.io/pinnacle-nepal/
```

## 🔄 Future Updates

When you make changes:

```bash
# Make your changes
# Then:

git add .
git commit -m "Updated content"
git push origin main

# Deploy to GitHub Pages
npm run deploy
```

## ⚠️ Important Notes

### Environment Variables
GitHub Pages is static hosting, so environment variables work differently:

1. **Option 1**: Hardcode values in code (not recommended for sensitive data)
2. **Option 2**: Use Vercel/Netlify instead (they support environment variables)
3. **Option 3**: Use client-side only features

### Forms & Google Sheets
✅ Will work! The forms submit directly to Google Sheets from the browser.

### WhatsApp Button
✅ Will work! It's client-side JavaScript.

### Images
✅ Will work! Make sure all images are in `public/images/`

## 🐛 Troubleshooting

### 404 Error on Page Refresh?
This is normal for GitHub Pages with Next.js. Use hash routing or deploy to Vercel instead.

### Images Not Loading?
- Check `basePath` in `next.config.js` matches your repo name
- Verify images are in `public/images/`

### CSS Not Loading?
- Make sure `assetPrefix` is set correctly
- Clear browser cache

## 📊 Repository Structure

After deployment, you'll have two branches:

```
main branch (your source code)
├── app/
├── components/
├── lib/
├── public/
└── ...

gh-pages branch (built static files)
├── _next/
├── images/
├── index.html
└── ...
```

## ✅ Verification Checklist

- [ ] Repository created on GitHub
- [ ] Code pushed to `main` branch
- [ ] `gh-pages` package installed
- [ ] `package.json` scripts updated
- [ ] `next.config.js` updated with repo name
- [ ] `.nojekyll` file created in `public/`
- [ ] `npm run deploy` executed successfully
- [ ] GitHub Pages enabled in repository settings
- [ ] Website accessible at GitHub Pages URL

## 🎉 Success!

Your website is now live on GitHub Pages!

**Main Branch**: Your source code
**gh-pages Branch**: Your deployed website

Share this URL with friends:
```
https://YOUR_USERNAME.github.io/pinnacle-nepal/
```

---

**Need Help?**
- GitHub Pages Docs: https://pages.github.com
- Next.js Static Export: https://nextjs.org/docs/app/building-your-application/deploying/static-exports
