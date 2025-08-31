# EmailJS Integration Setup

## Steps to Configure EmailJS

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

### 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Submission from {{from_name}}

Hello {{to_name}},

You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Phone: {{phone}}
Service Interested In: {{service}}
Budget: {{budget}}

Message:
{{message}}

---
This message was sent from your website contact form.
```

4. Save the template and note down your **Template ID**

### 4. Get Public Key
1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** in the API Keys section

### 5. Configure Environment Variables
Create a `.env` file in your project root with:

```
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### 6. Test the Integration
1. Start your development server: `npm run dev`
2. Fill out the contact form
3. Submit the form
4. Check your email for the message

## Template Variables Used
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{company}}` - Company name
- `{{phone}}` - Phone number
- `{{service}}` - Service interested in
- `{{budget}}` - Project budget
- `{{message}}` - Project details
- `{{to_name}}` - Recipient name (set to "Anorvisoft Team")

## Troubleshooting
- Make sure all environment variables are set correctly
- Check the browser console for any error messages
- Verify your EmailJS service is properly configured
- Ensure your email template uses the correct variable names
