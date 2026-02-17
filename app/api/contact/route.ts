import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { verifyRecaptchaToken } from '@/src/lib/recaptcha';

export async function POST(request: NextRequest) {
  try {
    // Check for API key at runtime
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service is not configured' },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const body = await request.json();
    const { name, email, phone, interest, message, recaptchaToken } = body;

    // Validate required fields
    if (!name || !email || !interest) {
      return NextResponse.json(
        { error: 'Name, email, and interest are required' },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA token if provided
    if (recaptchaToken) {
      const recaptchaResult = await verifyRecaptchaToken(recaptchaToken, 'submit_contact_form');
      if (!recaptchaResult.success) {
        console.warn('reCAPTCHA verification failed:', recaptchaResult.error);
        return NextResponse.json(
          { error: recaptchaResult.error || 'Security verification failed. Please try again.' },
          { status: 403 }
        );
      }
      console.log(`reCAPTCHA verified successfully (score: ${recaptchaResult.score})`);
    }

    // Map interest values to readable labels
    const interestLabels: Record<string, string> = {
      'professional-coach-certification': 'Professional Coach Certification',
      'general-consultation': 'General Consultation',
      'more-information': 'More Information',
    };

    const interestLabel = interestLabels[interest] || interest;

    // Send email to Karen
    // Using onboarding@resend.dev until tabularasacoaching.com domain is verified in Resend
    const { data, error } = await resend.emails.send({
      from: 'Tabula Rasa Coaching <onboarding@resend.dev>',
      to: ['karen@tabularasacoaching.com'],
      replyTo: email,
      subject: `New Contact Form Submission: ${interestLabel}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Interest:</strong> ${interestLabel}</p>
        <h3>Message:</h3>
        <p>${message || 'No message provided'}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">
          This message was sent from the contact form on tabularasacoaching.com
        </p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    // Send confirmation email to customer
    const customerEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <div style="background: linear-gradient(135deg, #2d3748, #4a5568); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">Tabula Rasa Coaching</h1>
        </div>
        <div style="padding: 30px; background: #ffffff;">
          <h2 style="color: #2d3748;">Thank You, ${name}!</h2>
          <p>We have received your inquiry regarding <strong>${interestLabel}</strong> and appreciate your interest in Tabula Rasa Coaching.</p>
          <p>Karen will personally review your message and get back to you <strong>within 24 hours</strong>.</p>
          <div style="background: #f7fafc; border-left: 4px solid #d69e2e; padding: 15px; margin: 20px 0; border-radius: 4px;">
            <p style="margin: 0; font-weight: bold; color: #2d3748;">In the meantime, feel free to reach out directly:</p>
            <p style="margin: 8px 0 0 0;">Email: karen@tabularasacoaching.com<br>Phone: (610) 228-4145</p>
          </div>
          <p>We look forward to connecting with you!</p>
          <p style="margin-top: 20px;">Warm regards,<br><strong>Karen | Tabula Rasa Coaching</strong></p>
        </div>
        <div style="background: #f7fafc; padding: 15px; text-align: center; font-size: 12px; color: #718096;">
          <p style="margin: 0;">Tabula Rasa Coaching | tabularasacoaching.com</p>
        </div>
      </div>
    `;

    const customerConfirmation = await resend.emails.send({
      from: 'Tabula Rasa Coaching <onboarding@resend.dev>',
      to: [email],
      subject: 'Thank You for Contacting Tabula Rasa Coaching',
      html: customerEmailHtml,
    });

    if (customerConfirmation.error) {
      console.warn('Customer confirmation email failed:', customerConfirmation.error);
    }

    return NextResponse.json(
      { message: 'Email sent successfully', id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
