# 🚀 GitHub & Vercel Deployment Guide

## Step 1: Prepare Your Project

### 1.1 Check .gitignore
Make sure your `.gitignore` file includes:
```
.env.local
node_modules/
.next/
out/
.DS_Store
*.log
.vercel
```

### 1.2 Create .env.example (for others to reference)
Create a file `.env.example` with:
```env
NEXT_PUBLIC_GOOGLE_SHEETS_URL=your_google_sheets_url_here
NEXT_PUBLIC_WHATSAPP_NUMBER=9779800000000
ADMIN_EMAIL=your-email@gmail.com
```

## Step 2: Push to GitHub

### 2.1 Initialize Git (if not done)
```bash
git init
```

### 2.2 Add all files
```bash
git add .
```

### 2.3 Commit
```bash
git commit -m "Initial commit: Pinnacle Nepal Educational Consultancy Platform"
```

### 2.4 Create GitHub Repository
1. Go to https://github.com
2. Click **"New repository"** (green button)
3. Repository name: `pinnacle-nepal` (or your choice)
4. Description: "Educational Consultancy Platform"
5. Choose **Public** (so friends can see it)
6. **DO NOT** check "Initialize with README" (you already have one)
7. Click **"Create repository"**

### 2.5 Connect to GitHub
```bash
# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/pinnacle-nepal.git

# Push to main branch
git branch -M main
git push -u origin main
```

### 2.6 Push to Different Branch (Optional)
If you want to use a different branch instead of main:
```bash
# Create and switch to new branch
git checkout -b production

# Push to production branch
git push -u origin production
```

## Step 3: Deploy to Vercel (Free Hosting)

### 3.1 Sign Up for Vercel
1. Go to https://vercel.com
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub

### 3.2 Import Your Project
1. Click **"Add New Project"**
2. Find your repository: `pinnacle-nepal`
3. Click **"Import"**

### 3.3 Configure Project
1. **Framework Preset**: Next.js (auto-detected)
2. **Root Directory**: `./` (leave as is)
3. **Build Command**: `npm run build` (auto-filled)
4. **Output Directory**: `.next` (auto-filled)

### 3.4 Add Environment Variables
Click **"Environment Variables"** and add:

| Name | Value |
|------|-------|
| `NEXT_PUBLIC_GOOGLE_SHEETS_URL` | Your Google Sheets URL |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Your WhatsApp number |
| `ADMIN_EMAIL` | Your email |

**Important**: Copy exact values from your `.env.local` file!

### 3.5 Deploy
1. Click **"Deploy"**
2. Wait 2-3 minutes for build to complete
3. You'll get a URL like: `https://pinnacle-nepal.vercel.app`

## Step 4: Share with Friends

### Your Live Website URL
```
https://pinnacle-nepal.vercel.app
```
(or custom domain if you set one up)

### Share Options:
1. **Direct Link**: Send the Vercel URL
2. **QR Code**: Generate QR code from the URL
3. **GitHub**: Share GitHub repo link
4. **Custom Domain**: (Optional) Add your own domain

## Step 5: Custom Domain (Optional)

### 5.1 Buy a Domain
- Namecheap.com
- GoDaddy.com
- Domain.com

### 5.2 Add to Vercel
1. Go to Vercel Dashboard
2. Select your project
3. Click **"Settings"** → **"Domains"**
4. Add your domain (e.g., `pinnacle-nepal.com`)
5. Follow DNS configuration instructions

## Step 6: Future Updates

### When you make changes:
```bash
# Make your changes
# Then:

git add .
git commit -m "Description of changes"
git push origin main
```

**Vercel will automatically redeploy!** ✨

## Step 7: Branch-Based Deployment

### Deploy from specific branch:
1. In Vercel Dashboard → Project Settings
2. Go to **"Git"** section
3. Change **"Production Branch"** from `main` to your branch name
4. Save

Now deployments will happen from that branch!

## 📱 Testing Your Live Site

### Checklist:
- ✅ Website loads correctly
- ✅ All pages work (Home, Destinations, Services, etc.)
- ✅ Forms submit to Google Sheets
- ✅ Email notifications work
- ✅ WhatsApp button opens correctly
- ✅ Images load properly
- ✅ Mobile responsive

## 🔧 Troubleshooting

### Build Failed?
- Check build logs in Vercel
- Verify all dependencies in `package.json`
- Make sure environment variables are set

### Forms Not Working?
- Verify environment variables in Vercel
- Check Google Sheets URL is correct
- Test with `test-google-sheets.html`

### Images Not Loading?
- Check images are in `public/images/`
- Verify paths are correct
- Check Next.js image optimization settings

## 🎉 Success!

Your website is now live! Share this URL with your friends:
```
https://your-project-name.vercel.app
```

## 📊 Monitoring

### Vercel Analytics (Free)
- View visitor stats
- See page performance
- Monitor errors

### Google Sheets
- All form submissions automatically saved
- Check anytime for new leads

---

**Need Help?**
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- GitHub Docs: https://docs.github.com
