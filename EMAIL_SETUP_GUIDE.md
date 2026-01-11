# Email Automation Setup Guide

Complete guide to set up automated email notifications for Pinnacle Nepal contact forms.

---

## 📋 Prerequisites

- ✅ Google Workspace account with business emails:
  - `ceo@pinnaclenepal.org`
  - `contact@pinnaclenepal.org`
- ✅ Google Sheet receiving form submissions
- ✅ Admin access to Google Apps Script

---

## 🚀 Setup Instructions

### Step 1: Prepare Your Google Sheet

1. **Open your Google Sheet** that receives form submissions
2. **Note your Sheet ID** from the URL:
   ```
   https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID_HERE/edit
   ```
3. **Verify column order** (should match):
   - Column A: Timestamp
   - Column B: Name
   - Column C: Email
   - Column D: Phone
   - Column E: Message

---

### Step 2: Install Google Apps Script

1. **Open your Google Sheet**
2. Click **Extensions** → **Apps Script**
3. **Delete** any existing code in the editor
4. **Copy** the entire code from `google-apps-script/email-automation.gs`
5. **Paste** it into the Apps Script editor

---

### Step 3: Configure Settings

In the script, update the `CONFIG` object:

```javascript
const CONFIG = {
  // Your team emails (comma-separated)
  TEAM_EMAILS: 'ceo@pinnaclenepal.org,contact@pinnaclenepal.org',
  
  // Sender email (must be your Google Workspace email)
  SENDER_EMAIL: 'contact@pinnaclenepal.org',
  SENDER_NAME: 'Pinnacle Nepal',
  
  // Your Google Sheet ID (from Step 1)
  SHEET_ID: 'PASTE_YOUR_SHEET_ID_HERE',
  
  // Follow-up delay (24 hours recommended)
  FOLLOWUP_DELAY_HOURS: 24,
  
  // Your website URL
  WEBSITE_URL: 'https://pinnaclenepal.org'
};
```

---

### Step 4: Test the Script

1. **Click** the **Save** icon (💾) in Apps Script
2. **Select** the function `testEmails` from the dropdown
3. **Click** **Run** (▶️)
4. **Authorize** the script when prompted:
   - Click "Review Permissions"
   - Choose your Google Workspace account
   - Click "Advanced" → "Go to [Project Name] (unsafe)"
   - Click "Allow"
5. **Check your inbox** for test emails

---

### Step 5: Set Up Form Submit Trigger

1. In Apps Script, click **Triggers** (⏰ icon on left sidebar)
2. Click **+ Add Trigger** (bottom right)
3. Configure trigger:
   - **Choose function:** `onFormSubmit`
   - **Event source:** From spreadsheet
   - **Event type:** On form submit
4. Click **Save**

---

### Step 6: Verify Everything Works

1. **Submit a test form** on your website
2. **Check Google Sheet** - new row should appear
3. **Check team emails** - notification should arrive
4. **Check test user email** - welcome email should arrive

---

## 📧 Email Templates

### Welcome Email
- **Sent to:** User who submitted form
- **From:** contact@pinnaclenepal.org
- **Subject:** "Welcome to Pinnacle Nepal - Your Study Abroad Journey Begins! 🎓"
- **Template:** `email-templates/welcome-email.html`

### Team Notification
- **Sent to:** ceo@pinnaclenepal.org, contact@pinnaclenepal.org
- **From:** Automated system
- **Subject:** "🔔 New Form Submission - [User Name]"
- **Template:** `email-templates/notification-email.html`

### Follow-up Email
- **Sent to:** User (24 hours after submission)
- **From:** contact@pinnaclenepal.org
- **Subject:** "Ready to Start Your Journey? 🚀"
- **Template:** `email-templates/followup-email.html`

---

## 🎨 Customizing Email Templates

### To customize emails:

1. **Open** the script in Apps Script editor
2. **Find** the email function you want to customize:
   - `sendWelcomeEmail()` - Welcome email
   - `sendTeamNotification()` - Team notification
   - `sendFollowUpEmail()` - Follow-up email
3. **Edit** the HTML in the `htmlBody` variable
4. **Save** and test

### Available placeholders:
- `${userData.name}` - User's name
- `${userData.email}` - User's email
- `${userData.phone}` - User's phone
- `${userData.message}` - User's message
- `${formattedTime}` - Submission timestamp

---

## 🔧 Troubleshooting

### Emails not sending?

**Check authorization:**
1. Go to Apps Script → Run → Run function `testEmails`
2. Authorize the script if prompted

**Check trigger:**
1. Apps Script → Triggers (⏰)
2. Verify `onFormSubmit` trigger exists
3. Check "Executions" tab for errors

### Emails going to spam?

**Solution:**
- Emails from your Google Workspace domain (@pinnaclenepal.org) should NOT go to spam
- If they do, ask recipients to mark as "Not Spam"
- Ensure `SENDER_EMAIL` matches your Google Workspace email

### Wrong data in emails?

**Check column mapping:**
1. Verify your Google Sheet columns match:
   - A: Timestamp
   - B: Name
   - C: Email
   - D: Phone
   - E: Message
2. Update `extractFormData()` function if columns are different

---

## 📊 Monitoring

### View execution logs:
1. Apps Script → **Executions** tab
2. See all script runs and any errors

### View email quota:
- Google Workspace: **2,000 emails/day**
- Check usage: Apps Script → **Quotas**

---

## 🔐 Security Best Practices

1. ✅ **Never share** your Apps Script code publicly
2. ✅ **Use environment variables** for sensitive data
3. ✅ **Regularly review** script permissions
4. ✅ **Monitor** execution logs for suspicious activity

---

## 📞 Support

If you encounter issues:

1. **Check logs:** Apps Script → Executions tab
2. **Test manually:** Run `testEmails()` function
3. **Verify config:** Double-check all CONFIG values
4. **Review permissions:** Ensure script has necessary access

---

## ✅ Success Checklist

- [ ] Google Apps Script installed
- [ ] CONFIG variables updated
- [ ] Test emails sent successfully
- [ ] Form submit trigger created
- [ ] Live form submission tested
- [ ] All emails received correctly
- [ ] Email templates customized (optional)

---

**🎉 Congratulations!** Your email automation is now live!

Users will automatically receive:
1. ✅ Instant welcome email
2. ✅ Your team gets notified
3. ✅ Follow-up email after 24 hours

**No monthly costs, completely free using Google Workspace!** 🚀
