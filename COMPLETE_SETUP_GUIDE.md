# 📧 Email Automation - Complete Setup Guide

## ✅ CONFIGURATION COMPLETE!

Your script is now **100% configured** with your actual data:

### 📋 Your Configuration

```javascript
TEAM_EMAILS: 'ceo@pinnaclenepal.org,contact@pinnaclenepal.org,vivek@pinnaclenepal.org,rajanprasaila@gmail.com'
SENDER_EMAIL: 'contact@pinnaclenepal.org'
SHEET_ID: '1BFfpu7UoKnlcPrqAwYNFoL6NS7NzRiFdFelvMn9fVSM'
```

### 📊 Your Google Sheet Columns

✅ Timestamp
✅ Name
✅ Email
✅ Phone
✅ Country
✅ Course
✅ Message
✅ Form Type (Popup or Contact Page)

---

## 🚀 STEP-BY-STEP SETUP PROCESS

### STEP 1: Sign in with Admin Email

1. **Open Google** in your browser
2. **Sign in** with: **vivek@pinnaclenepal.org** (your admin workspace email)
3. Make sure you're signed in (check top-right corner)

---

### STEP 2: Open Your Google Sheet

1. **Go to this URL:**
   ```
   https://docs.google.com/spreadsheets/d/1BFfpu7UoKnlcPrqAwYNFoL6NS7NzRiFdFelvMn9fVSM/edit
   ```
2. **Or** go to Google Drive → Find "Contact Form Responses"
3. **Open the sheet**

---

### STEP 3: Open Apps Script Editor

1. **In your Google Sheet**, click **Extensions** (top menu)
2. Click **Apps Script**
3. **A new tab will open** with the Apps Script editor

---

### STEP 4: Paste the Code

1. **If there's any code** in the editor, select all (Ctrl+A) and delete it
2. **Open this file** on your computer:
   ```
   c:\Users\rajan\.gemini\antigravity\scratch\consultancy-platform\google-apps-script\email-automation.gs
   ```
3. **Select all the code** (Ctrl+A)
4. **Copy it** (Ctrl+C)
5. **Go back to Apps Script tab**
6. **Paste the code** (Ctrl+V)

---

### STEP 5: Save the Project

1. **Click the Save icon** (💾) or press Ctrl+S
2. **Name your project:** Type `Pinnacle Nepal Email Automation`
3. **Click OK**

**✅ The code is now saved!**

---

### STEP 6: Test & Authorize

1. **At the top**, find the dropdown that says "Select function"
2. **Click it** and select **`testEmails`**
3. **Click the Run button** (▶️ Play icon)

**Authorization popup will appear:**

4. **Click "Review Permissions"**
5. **Choose** vivek@pinnaclenepal.org
6. You'll see "Google hasn't verified this app" - **This is normal!**
7. **Click "Advanced"** (bottom left)
8. **Click "Go to Pinnacle Nepal Email Automation (unsafe)"**
9. **Click "Allow"**

**Wait 5-10 seconds...**

---

### STEP 7: Check Test Emails

**Check these 4 inboxes:**
- ✅ ceo@pinnaclenepal.org
- ✅ contact@pinnaclenepal.org
- ✅ vivek@pinnaclenepal.org
- ✅ rajanprasaila@gmail.com

**You should receive 2 emails in EACH inbox:**
1. Welcome email (as if you were a user)
2. Team notification email

**✅ If you got all emails - SUCCESS!**

---

### STEP 8: Create Automatic Trigger

This makes it run automatically when forms are submitted.

1. **In Apps Script**, click **Triggers** icon (⏰ on left sidebar)
2. **Click "+ Add Trigger"** (bottom right)

**Configure the trigger:**

3. **Choose which function to run:** Select `onFormSubmit`
4. **Choose which deployment:** Leave as `Head`
5. **Select event source:** Select `From spreadsheet`
6. **Select event type:** Select `On form submit`
7. **Failure notification:** Select `Notify me daily`

8. **Click "Save"**

**✅ Trigger created!**

---

### STEP 9: Test with Real Form

1. **Go to your website:** pinnaclenepal.org
2. **Fill out a contact form** (use your personal email so you can check)
3. **Submit the form**

**Within 1-2 minutes, check:**

✅ **Google Sheet** - New row appears
✅ **Your personal email** - Welcome email arrives
✅ **All 4 team emails** - Notification email arrives

**If all 3 happened - YOU'RE DONE! 🎉**

---

## 📝 IMPORTANT NOTES TO SAVE

### Your Sheet ID:
```
1BFfpu7UoKnlcPrqAwYNFoL6NS7NzRiFdFelvMn9fVSM
```

### Your Sheet URL:
```
https://docs.google.com/spreadsheets/d/1BFfpu7UoKnlcPrqAwYNFoL6NS7NzRiFdFelvMn9fVSM/edit
```

### Team Emails (All 4 receive notifications):
```
ceo@pinnaclenepal.org
contact@pinnaclenepal.org
vivek@pinnaclenepal.org
rajanprasaila@gmail.com
```

### Apps Script Project Name:
```
Pinnacle Nepal Email Automation
```

---

## 🎯 WHAT HAPPENS WHEN FORMS ARE SUBMITTED

### Popup Form OR Contact Page Form:

```
User fills form
    ↓
Data → Google Sheet (Row added)
    ↓
Script runs automatically
    ↓
┌───────────┴───────────┐
↓                       ↓
Welcome Email      Notification Email
    ↓                       ↓
  User              ALL 4 EMAILS:
                    - ceo@pinnaclenepal.org
                    - contact@pinnaclenepal.org
                    - vivek@pinnaclenepal.org
                    - rajanprasaila@gmail.com
    ↓
24 hours later
    ↓
Follow-up Email
    ↓
  User
```

---

## 📧 EMAIL DETAILS

### Welcome Email (to User):
- **Subject:** "Welcome to Pinnacle Nepal - Your Study Abroad Journey Begins! 🎓"
- **From:** contact@pinnaclenepal.org
- **Contains:** Welcome message, next steps, contact info

### Team Notification (to all 4 emails):
- **Subject:** "🔔 New Form Submission - [User Name]"
- **From:** Automated system
- **Contains:**
  - Name
  - Email (clickable)
  - Phone (clickable)
  - Country
  - Course
  - Message
  - Form Type (Popup or Contact Page)
  - Timestamp
  - Quick action buttons

### Follow-up Email (to User):
- **Subject:** "Ready to Start Your Journey? 🚀"
- **From:** contact@pinnaclenepal.org
- **Sent:** 24 hours after initial submission
- **Contains:** Re-engagement message, success stories, CTA

---

## 🔧 MONITORING & MAINTENANCE

### View Execution Logs:
1. Apps Script → **Executions** tab (📊 icon)
2. See all script runs and any errors

### Check Email Quota:
- **Google Workspace limit:** 2,000 emails/day
- Apps Script → **Project Settings** → Quotas

### Update Settings:
1. Open Apps Script
2. Edit the CONFIG section (lines 22-38)
3. Save (Ctrl+S)
4. Changes take effect immediately

---

## ✅ FINAL CHECKLIST

- [ ] Signed in with vivek@pinnaclenepal.org
- [ ] Opened Google Sheet (ID: 1BFfpu7UoKnlcPrqAwYNFoL6NS7NzRiFdFelvMn9fVSM)
- [ ] Opened Apps Script editor
- [ ] Pasted email automation code
- [ ] Saved project as "Pinnacle Nepal Email Automation"
- [ ] Ran testEmails function
- [ ] Authorized script
- [ ] Received test emails in all 4 inboxes
- [ ] Created "On form submit" trigger
- [ ] Tested with real form submission
- [ ] Verified Google Sheet updated
- [ ] Verified user received welcome email
- [ ] Verified all 4 team emails received notification

---

## 🎉 YOU'RE DONE!

**Your email automation is now LIVE!**

Every form submission will automatically:
1. ✅ Save to Google Sheet
2. ✅ Send welcome email to user
3. ✅ Send notification to all 4 team emails
4. ✅ Schedule follow-up email (24 hours)

**Completely FREE using Google Workspace!** 🚀

---

## 📞 TROUBLESHOOTING

**Emails not sending?**
- Check Apps Script → Executions for errors
- Verify you're signed in with vivek@pinnaclenepal.org
- Re-run authorization (Step 6)

**Trigger not working?**
- Delete trigger and create again
- Make sure event type is "On form submit"
- Check function name is `onFormSubmit`

**Wrong data in emails?**
- Verify Google Sheet columns match
- Check extractFormData function (line 75)

---

**Need help? Check the execution logs in Apps Script!**
