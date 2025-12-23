# Cloudflare R2 & API Token Setup Guide

## 1. Create R2 Bucket (Storage)
1. Go to your **Cloudflare Dashboard**.
2. Click **R2** (in the sidebar) -> **Overview**.
3. Click **Create bucket**.
4. **Bucket name**: `pinnacle-assets` (or similar).
5. Click **Create Bucket**.
6. **IMPORTANT:** Enable Public Access:
   - Go to the **Settings** tab of your new bucket.
   - Scroll down to **Public Access**.
   - Click **Allow Access** under "R2.dev subdomain".
   - **Copy the "Public R2.dev Bucket URL"**. (It looks like `https://pub-xyz...r2.dev`).
   - *Result*: You will user this URL to display images.

## 2. Generate API Token (The Key)
We need a token that allows Drizzle to talk to D1 and R2.
1. Go to **Cloudflare Dashboard** -> **My Profile** -> **API Tokens**.
2. Click **Create Token**.
3. Scroll down to "Custom Token" and click **Get started**.
4. **Token Name**: `Pinnacle D1 Access`.
5. **Permissions**:
   - `Account` -> `Cloudflare D1` -> `Edit`
   - `Account` -> `Workers R2 Storage` -> `Edit`
   - `User` -> `User Details` -> `Read`
6. Click **Continue to summary** -> **Create Token**.
7. **COPY THE TOKEN IMMEDIATELY**. You won't see it again.

## 3. Connect to Project
1. Create a file named `.env.local` (or edit the existing one) in your project folder.
2. Add this line:
   ```env
   CLOUDFLARE_API_TOKEN=your_token_from_step_2_here
   ```
3. Restart your development server.
