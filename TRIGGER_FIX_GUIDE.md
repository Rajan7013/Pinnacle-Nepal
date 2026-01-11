# ⚠️ IMPORTANT: Trigger Setup Fix

## Error Explanation

You got this error:
```
Cannot read properties of undefined (reading 'values')
```

**This means:** The trigger is NOT set up correctly!

---

## ❌ WRONG Trigger Setup

You probably created a trigger with:
- Event type: **"On edit"** or **"On change"** ❌

---

## ✅ CORRECT Trigger Setup

You MUST use:
- Event type: **"On form submit"** ✅

---

## 🔧 How to Fix

### Step 1: Delete Wrong Trigger

1. **In Apps Script**, click **Triggers** (⏰ icon)
2. **Find your trigger** in the list
3. **Click the 3 dots** (⋮) on the right
4. **Click "Delete trigger"**
5. **Confirm deletion**

### Step 2: Create Correct Trigger

1. **Click "+ Add Trigger"** (bottom right)
2. **Configure EXACTLY like this:**

   **Choose which function to run:**
   - Select: `onFormSubmit`

   **Choose which deployment should run:**
   - Leave as: `Head`

   **Select event source:**
   - Select: `From spreadsheet` ✅

   **Select event type:**
   - Select: **`On form submit`** ✅ ← IMPORTANT!

   **Failure notification settings:**
   - Select: `Notify me daily`

3. **Click "Save"**

---

## 🧪 How to Test Properly

### DON'T Test Like This: ❌
- Running `onFormSubmit` manually
- Editing cells in Google Sheet
- Using "On edit" or "On change" trigger

### DO Test Like This: ✅
1. **Use `testEmails` function** for manual testing
2. **Submit actual form** on your website
3. **Trigger will fire automatically** when form is submitted

---

## ✅ Correct Testing Steps

### For Manual Testing:
1. **Select function:** `testEmails`
2. **Click Run** ▶️
3. **Check emails**

### For Real Testing:
1. **Go to your website**
2. **Fill out contact form**
3. **Submit form**
4. **Check Google Sheet** - new row appears
5. **Check emails** - all 4 team emails + user email

---

## 🎯 Summary

**Problem:** Wrong trigger type
**Solution:** Delete trigger and create new one with "On form submit"

**The script code is correct!** You just need the right trigger.

---

## 📝 Trigger Checklist

- [ ] Deleted old/wrong trigger
- [ ] Created new trigger
- [ ] Function: `onFormSubmit`
- [ ] Event source: `From spreadsheet`
- [ ] Event type: **`On form submit`** ← CRITICAL!
- [ ] Saved trigger
- [ ] Tested with real form submission

---

**Once you fix the trigger, it will work perfectly!** 🚀
