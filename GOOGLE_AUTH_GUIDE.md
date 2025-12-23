# Google Authentication Setup Guide

To enable "Login with Google", you need to link **Google Cloud** with **Supabase**. This is a one-time setup.

## 1. Google Cloud Console (The "Keys")
**Cost:** Free.
1. Go to [console.cloud.google.com](https://console.cloud.google.com/).
2. Create a **New Project** (Name it "Pinnacle Nepal").
3. Go to **APIs & Services** > **OAuth consent screen**.
   - Select **External**.
   - Fill in App Name ("Pinnacle Nepal"), User Support Email, and Developer Email.
   - Click "Save and Continue" (You can skip Scopes/Test Users for now).
4. Go to **Credentials** > **Create Credentials** > **OAuth client ID**.
   - Application Type: **Web application**.
   - **Authorized redirect URIs**: You need your Supabase URL for this.
     - Go to your Supabase Dashboard -> Settings -> API.
     - Copy the `URL` (e.g., `https://xyz.supabase.co`).
     - Add `/auth/v1/callback` to the end.
     - **Final URI to paste in Google**: `https://YOUR-PROJECT-REF.supabase.co/auth/v1/callback`
5. Click **Create**.
6. **COPY THESE TWO VALUES:**
   - **Client ID**
   - **Client Secret**

## 2. Supabase Dashboard (The "Link")
1. Go to your **Supabase Dashboard**.
2. Click **Authentication** (left sidebar) -> **Providers**.
3. Click **Google**.
4. **Enable** Google Sign-in.
5. Paste the **Client ID** and **Client Secret** you got from Google.
6. Click **Save**.

## 3. The Code (I am doing this)
I will now update your platform to use this connection:
1.  **Login Page**: I will replace the username/password form with a big "Continue with Google" button.
2.  **Callback Route**: I will create a special backend route (`app/auth/callback/route.ts`) that handles the secure handshake when Google sends the user back to us.

## 4. Launching (Verification)
- Everything will work immediately for you.
- When you are ready to go public (launch to thousands of students), you will go back to the Google Cloud Console and submit the "OAuth Verification Form". This just proves you own the app. It is free.
