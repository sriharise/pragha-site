import type { Handler, HandlerEvent } from "@netlify/functions";
import { Resend } from 'resend';

const handler: Handler = async (event: HandlerEvent) => {
  // Get API keys from environment variables
  const resend = new Resend(process.env.RESEND_API_KEY);
  const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ message: 'Method Not Allowed' }) };
  }

  try {
    const body = JSON.parse(event.body || '{}');
    const { name, email, message, recaptchaToken } = body;

    // --- reCAPTCHA Verification ---
    if (!recaptchaToken) {
      return { statusCode: 400, body: JSON.stringify({ message: 'reCAPTCHA token is missing.' }) };
    }

    const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${recaptchaSecret}&response=${recaptchaToken}`,
    });
    
    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success) {
      return { statusCode: 400, body: JSON.stringify({ message: 'reCAPTCHA verification failed.' }) };
    }
    // --- End of reCAPTCHA Verification ---

    if (!name || !email || !message) {
      return { statusCode: 400, body: JSON.stringify({ message: 'Missing required fields' }) };
    }

    // --- Send the email using Resend with better error handling ---
    const { data, error } = await resend.emails.send({
      from: 'Pragha Organics Website <contact@emails.pragha.in>',
      to: 'cseguru19@gmail.com', // <-- IMPORTANT: Replace with your actual email address
      subject: `New Enquiry from ${name}`,
      replyTo: email, // Set the user's email as the reply-to address
      html: `
        <p>You have a new contact form submission:</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // If Resend returned an error, log it and return a 500 status
    if (error) {
      console.error({ message: "Resend API Error", error });
      return { statusCode: 500, body: JSON.stringify({ message: 'Failed to send email.' }) };
    }

    // If successful, log the success data
    console.log({ message: "Email sent successfully via Resend", data });

    return { statusCode: 200, body: JSON.stringify({ message: 'Message sent successfully!' }) };

  } catch (error) {
    console.error("General function error:", error);
    return { statusCode: 500, body: JSON.stringify({ message: 'An unexpected error occurred.' }) };
  }
};

export { handler };

// --- END OF FILE: netlify/functions/send-email.ts ---