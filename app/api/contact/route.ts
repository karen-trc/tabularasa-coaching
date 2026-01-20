import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, interest, message } = body;

    // Validate required fields
    if (!name || !email || !interest) {
      return NextResponse.json(
        { error: 'Name, email, and interest are required' },
        { status: 400 }
      );
    }

    // Map interest values to readable labels
    const interestLabels: Record<string, string> = {
      'professional-coach-certification': 'Professional Coach Certification',
      'general-consultation': 'General Consultation',
      'more-information': 'More Information',
    };

    const interestLabel = interestLabels[interest] || interest;

    // Send email to Karen
    const { data, error } = await resend.emails.send({
      from: 'Tabula Rasa Coaching <noreply@tabularasacoaching.com>',
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
