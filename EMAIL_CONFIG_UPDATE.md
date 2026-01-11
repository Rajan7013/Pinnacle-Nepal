# Email Configuration Update

## Updated Team Emails

The email automation system now sends notifications to **4 email addresses**:

### Business Workspace Emails (3):
1. ✅ **ceo@pinnaclenepal.org** - CEO email
2. ✅ **contact@pinnaclenepal.org** - Contact email
3. ✅ **vivek@pinnaclenepal.org** - Admin workspace email (NEW)

### Personal Email (1):
4. ✅ **rajanprasaila@gmail.com** - Personal email (NEW)

---

## How It Works

### When User Submits Form:

```
User fills form (Contact Page or Popup)
         ↓
Data saved to Google Sheet
         ↓
Script triggers automatically
         ↓
    ┌────────┴────────┐
    ↓                 ↓
Welcome Email    Team Notification
    ↓                 ↓
  User          ALL 4 EMAILS:
                - ceo@pinnaclenepal.org
                - contact@pinnaclenepal.org
                - vivek@pinnaclenepal.org
                - rajanprasaila@gmail.com
    ↓
24-48 hours later
    ↓
Follow-up Email
    ↓
  User
```

---

## What Each Email Receives

### Team Notification Email Contains:
- 📋 User's full details (Name, Email, Phone)
- 💬 Message content
- 📅 Submission timestamp
- 📝 Form type (Contact Form or Popup)
- 🔗 Quick action buttons (View in Sheets, Reply to User)

### All 4 emails get the SAME notification instantly!

---

## Setup Instructions

### Important: Use Admin Email (vivek@pinnaclenepal.org)

**You should set up the Google Apps Script using vivek@pinnaclenepal.org** because:
- ✅ It's your admin workspace email
- ✅ Better control and management
- ✅ Can send emails on behalf of contact@pinnaclenepal.org
- ✅ Centralized administration

### Steps:

1. **Sign in to Google** with **vivek@pinnaclenepal.org**
2. **Open your Google Sheet** with form responses
3. **Go to Extensions → Apps Script**
4. **Paste the updated code** from `google-apps-script/email-automation.gs`
5. **The TEAM_EMAILS is already updated** with all 4 emails
6. **Update SHEET_ID** with your Google Sheet ID
7. **Save and authorize** the script
8. **Create trigger** for "On form submit"

---

## Testing

After setup, test by submitting a form:

**You should receive emails at:**
- ✅ ceo@pinnaclenepal.org
- ✅ contact@pinnaclenepal.org
- ✅ vivek@pinnaclenepal.org
- ✅ rajanprasaila@gmail.com

**User should receive:**
- ✅ Welcome email (immediately)
- ✅ Follow-up email (24-48 hours later)

---

## Updated Configuration

```javascript
const CONFIG = {
  TEAM_EMAILS: 'ceo@pinnaclenepal.org,contact@pinnaclenepal.org,vivek@pinnaclenepal.org,rajanprasaila@gmail.com',
  SENDER_EMAIL: 'contact@pinnaclenepal.org',
  SENDER_NAME: 'Pinnacle Nepal',
  SHEET_ID: 'YOUR_SHEET_ID_HERE', // Update this!
  FOLLOWUP_DELAY_HOURS: 24,
  WEBSITE_URL: 'https://pinnaclenepal.org'
};
```

---

## Next Steps

1. ✅ Code is updated with all 4 emails
2. ⏳ Sign in with **vivek@pinnaclenepal.org**
3. ⏳ Follow setup guide to deploy
4. ⏳ Test with form submission
5. ⏳ Verify all 4 emails receive notifications

**Ready to set up!** 🚀
