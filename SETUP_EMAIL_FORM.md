# How to Activate the Contact Form

Currently, the contact form is in **"Fallback Mode"**. This means when you click "Send", it tries to open your email app (like Outlook or Gmail) because it doesn't have the secret keys to send the email automatically in the background.

To make it send emails **silently and automatically**, follow these steps:

## Step 1: Get Your Free Keys
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/) and sign up for a free account.
2. **Add a Service**:
   - Click "Email Services" on the left.
   - Click "Add New Service".
   - Select "Gmail".
   - Connect your account (`cabdimustafe708@gmail.com`).
   - Copy the **Service ID** (e.g., `service_xxxxx`).

3. **Create a Template**:
   - Click "Email Templates" on the left.
   - Click "Create New Template".
   - Use these settings for the email body:
     - `{{from_name}}`
     - `{{from_email}}`
     - `{{message}}`
   - Save it.
   - Copy the **Template ID** (e.g., `template_xxxxx`).

4. **Get Your Public Key**:
   - Click your name in the top right corner -> "Account".
   - Copy the **Public Key** (e.g., `user_xxxxx` or a random string).

## Step 2: Update the Code
1. Open the file: `c:\Users\HP\Pictures\portifolio\src\components\Contact.jsx`
2. Scroll to **line 44**.
3. Replace the placeholder text with your real keys:

```javascript
emailjs.send(
    'service_xxxxx',     // <--- Paste your Service ID here
    'template_xxxxx',    // <--- Paste your Template ID here
    { ... },
    'your_public_key'    // <--- Paste your Public Key here
)
```

Once you do this, the "Fallback" message will disappear, and emails will send directly!
