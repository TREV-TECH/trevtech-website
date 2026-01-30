# TrevTech Backend Setup Guide

This guide covers setting up email notifications for the contact form and newsletter.

## Quick Start (Recommended: Resend)

Resend is a modern email API that's easy to set up and has a generous free tier (100 emails/day).

### 1. Install Resend

```bash
cd trevtech-nextjs
npm install resend
```

### 2. Get API Key

1. Sign up at [resend.com](https://resend.com)
2. Go to API Keys → Create API Key
3. Copy the key

### 3. Add Environment Variables

Create `.env.local` in the project root:

```env
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_EMAIL=info@trevtech.co.ke
```

### 4. Update Contact API Route

Replace `src/app/api/contact/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, service, budget, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Send notification email to TrevTech
    await resend.emails.send({
      from: 'TrevTech Website <onboarding@resend.dev>', // Use your domain after verification
      to: [process.env.CONTACT_EMAIL!],
      subject: `New Inquiry: ${service || 'General'}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse: collapse; width: 100%;">
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Name</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${name}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Email</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${email}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Phone</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${phone || 'Not provided'}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Service</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${service || 'Not specified'}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Budget</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${budget || 'Not specified'}</td></tr>
        </table>
        <h3>Message:</h3>
        <p style="background: #f5f5f5; padding: 15px; border-radius: 5px;">${message}</p>
      `
    });

    // Send confirmation email to user
    await resend.emails.send({
      from: 'TrevTech Solutions <onboarding@resend.dev>',
      to: [email],
      subject: 'We received your message!',
      html: `
        <h2>Thank you for contacting TrevTech Solutions!</h2>
        <p>Hi ${name},</p>
        <p>We've received your inquiry and will get back to you within 24-48 hours.</p>
        <p>Best regards,<br>TrevTech Team</p>
      `
    });

    return NextResponse.json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
```

### 5. Update Newsletter API Route

Replace `src/app/api/newsletter/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 });
    }

    // Add to Resend Audience (built-in contact management)
    // First, create an audience in Resend dashboard, then use its ID
    /*
    await resend.contacts.create({
      email,
      audienceId: process.env.RESEND_AUDIENCE_ID!,
    });
    */

    // Send welcome email
    await resend.emails.send({
      from: 'TrevTech Solutions <onboarding@resend.dev>',
      to: [email],
      subject: 'Welcome to TrevTech Newsletter!',
      html: `
        <h2>Thanks for subscribing!</h2>
        <p>You'll now receive updates on:</p>
        <ul>
          <li>Latest tech trends and insights</li>
          <li>New services and offerings</li>
          <li>Industry news and tips</li>
        </ul>
        <p>Best regards,<br>TrevTech Team</p>
      `
    });

    return NextResponse.json({ success: true, message: 'Successfully subscribed!' });
  } catch (error) {
    console.error('Newsletter error:', error);
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 });
  }
}
```

---

## Domain Verification (For Production)

To send from `@trevtech.co.ke`:

1. Go to Resend Dashboard → Domains
2. Add `trevtech.co.ke`
3. Add the DNS records they provide (MX, TXT, DKIM)
4. Wait for verification (usually 5-10 mins)
5. Update the `from` field in your API routes

---

## Alternative: Store Submissions in Database

If you want to keep a record of all submissions, add Supabase:

### 1. Setup Supabase

```bash
npm install @supabase/supabase-js
```

### 2. Add to `.env.local`

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_SERVICE_KEY=eyJxxxx
```

### 3. Create Tables in Supabase

```sql
-- Contact submissions
CREATE TABLE contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  service TEXT,
  budget TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Newsletter subscribers
CREATE TABLE newsletter_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  is_active BOOLEAN DEFAULT TRUE
);
```

### 4. Add to API Routes

```typescript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

// In your POST handler, add:
await supabase.from('contact_submissions').insert({
  name, email, phone, service, budget, message
});
```

---

## Deployment Checklist

- [ ] Add environment variables to Vercel/hosting platform
- [ ] Verify domain in Resend
- [ ] Test contact form
- [ ] Test newsletter signup
- [ ] Set up Supabase (optional)

---

## Cost Breakdown

| Service | Free Tier | Paid |
|---------|-----------|------|
| Resend | 100 emails/day | $20/mo for 50k |
| Supabase | 500MB, 50k requests | $25/mo |
| Vercel | Unlimited for hobby | $20/mo for pro |

For a company website, the free tiers should be plenty to start.
