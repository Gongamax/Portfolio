# EmailJS Setup Guide

## 🚀 Quick Setup

1. **Create EmailJS Account**

   - Go to [EmailJS.com](https://www.emailjs.com/)
   - Sign up for a free account

2. **Set up Email Service**

   - Go to "Email Services" tab
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the setup instructions

3. **Create Email Template**
   - Go to "Email Templates" tab
   - Click "Create New Template"
   - **Template Name**: "Portfolio Contact Form"
   - **Subject Line**: `New message from {{from_name}} - {{subject}}`
   - **Content** (copy this exactly):

```
Hi Gonçalo,

You have a new contact form submission from your portfolio website:

👤 Name: {{from_name}}
📧 Email: {{from_email}}
📋 Subject: {{subject}}

💬 Message:
{{message}}

---
This message was sent from your portfolio contact form.
Reply directly to {{from_email}} to respond.
```

- Click "Save"

4. **Get Your Credentials**

   - Service ID: From "Email Services" tab
   - Template ID: From "Email Templates" tab
   - Public Key: From "Account" > "General" tab

5. **Add Environment Variables**
   - Copy `.env.example` to `.env`
   - Fill in your actual EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
```

6. **Deploy**
   - Add the same environment variables to your Vercel deployment
   - Go to Vercel Dashboard > Your Project > Settings > Environment Variables

## 🎯 Features Added

- ✅ **Form Validation** - Required fields, email format validation
- ✅ **Loading States** - Spinner while sending
- ✅ **Success Messages** - Confirmation when email sent
- ✅ **Error Handling** - User-friendly error messages
- ✅ **Disabled States** - Prevents multiple submissions
- ✅ **Responsive Design** - Works on all screen sizes

## 🔧 Testing

1. Fill out the contact form on your website
2. Check your email inbox for the message
3. If it doesn't work, check the browser console for errors

Your contact form is now fully functional! 🎉
