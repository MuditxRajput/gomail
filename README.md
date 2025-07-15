# 📧 GoMaily - Bulk Email Sender via Google Sheets

GoMaily is a powerful Google Sheets add-on that allows you to send up to **250 personalized emails** in **just one click** — all powered by **Google Apps Script**. Perfect for cold emailing, event invitations, newsletters, or team communications, all without leaving your Google Sheet.

> 🚀 No external tools. No subscriptions. Just your Gmail + Google Sheets.

## ✨ Features

- 🔁 Send **up to 250 emails/day** using Gmail quota
- 📝 Personalized email templates (e.g., `Hi {{name}}`)
- 📄 Data-driven from Google Sheets
- 📬 Track sent status directly in the sheet
- 🛠️ Built entirely using Google Apps Script
- 🔐 Safe and secure – runs in your own Google account

## 📌 Use Case Examples

- 🧑‍💼 Cold outreach for job applications or sales
- 🏫 Sending invitations or announcements to student lists
- 📢 Internal newsletters for teams
- 📊 Feedback collection follow-ups

## 📷 Screenshots

<img width="1901" height="863" alt="image" src="https://github.com/user-attachments/assets/d4b05f28-55ad-46b7-b198-efe250fc126d" />

## 🚀 How to Use

1. **Open Google Sheets**
2. Go to **Extensions → Apps Script**
3. Paste the `Code.gs` and supporting files (`index.html`, etc.)
4. Save and close Apps Script
5. Reload your Sheet → You'll see the **GoMaily** menu
6. Click "Send Emails" → Done!

## 🛠 Example Sheet Structure

| Name   | Email              | Company   |
|--------|--------------------|-----------|
| Alice  | alice@example.com  | Acme Inc  |
| Bob    | bob@example.com    | Beta Ltd  |

### Sample Email Template:

```html
Hi {{Name}},

Hope you're doing well. I wanted to reach out regarding {{Company}}...

Best,
GoMaily Team

