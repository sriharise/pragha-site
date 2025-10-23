// FILE: src/app/api/contact/route.ts

import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;
const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;

const missingConfigResponse = (message: string) =>
  NextResponse.json({ message }, { status: 500 });

export async function POST(request: Request) {
  if (!resendApiKey) {
    console.error('RESEND_API_KEY is not set.');
    return missingConfigResponse('Email service is not configured. Please contact the site administrator.');
  }

  if (!recaptchaSecret) {
    console.error('RECAPTCHA_SECRET_KEY is not set.');
    return missingConfigResponse('reCAPTCHA verification is not configured. Please contact the site administrator.');
  }

  try {
    const body = await request.json();
    const { name, email, message, recaptchaToken } = body ?? {};

    if (!recaptchaToken) {
      return NextResponse.json({ message: 'reCAPTCHA token is missing.' }, { status: 400 });
    }

    const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${recaptchaSecret}&response=${recaptchaToken}`,
    });

    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success) {
      return NextResponse.json({ message: 'reCAPTCHA verification failed.' }, { status: 400 });
    }

    if (!name || !email || !message) {
      return NextResponse.json({ message: 'Missing required fields.' }, { status: 400 });
    }

    const resend = new Resend(resendApiKey);
    const { error } = await resend.emails.send({
      from: 'Pragha Organics Website <contact@emails.pragha.in>',
      to: 'praghaorganics@gmail.com',
      subject: `New Enquiry from ${name}`,
      replyTo: email,
      html: `
        <p>You have a new contact form submission:</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error('Resend API Error', error);
      return NextResponse.json({ message: error.message || 'Failed to send email.' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Contact API error', error);
    return NextResponse.json({ message: 'An unexpected error occurred.' }, { status: 500 });
  }
}

export function GET() {
  return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
}
