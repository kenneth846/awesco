import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';


const TO_EMAIL = 'csr@awescoseptic.com';
const FROM_EMAIL = 'careers@awescoseptic.com'; // must be a verified Resend sender domain

export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY ?? 'placeholder');
    const formData = await req.formData();

    const firstName   = (formData.get('firstName')   as string ?? '').trim();
    const lastName    = (formData.get('lastName')    as string ?? '').trim();
    const email       = (formData.get('email')       as string ?? '').trim();
    const phone       = (formData.get('phone')       as string ?? '').trim();
    const position    = (formData.get('position')    as string ?? '').trim();
    const experience  = (formData.get('experience')  as string ?? '').trim();
    const message     = (formData.get('message')     as string ?? '').trim();
    const resumeFile  = formData.get('resume') as File | null;

    // Basic validation
    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    // Build attachments array if resume was uploaded
    const attachments: { filename: string; content: Buffer }[] = [];
    if (resumeFile && resumeFile.size > 0) {
      if (resumeFile.size > 5 * 1024 * 1024) {
        return NextResponse.json({ error: 'Resume file must be under 5MB.' }, { status: 400 });
      }
      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'text/plain',
      ];
      if (!allowedTypes.includes(resumeFile.type)) {
        return NextResponse.json(
          { error: 'Resume must be a PDF, Word document, or plain text file.' },
          { status: 400 }
        );
      }
      const arrayBuffer = await resumeFile.arrayBuffer();
      attachments.push({
        filename: resumeFile.name || 'resume.pdf',
        content: Buffer.from(arrayBuffer),
      });
    }

    const fullName = `${firstName} ${lastName}`;
    const subject  = `New Job Application — ${fullName}${position ? ` · ${position}` : ''}`;

    const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #1F2937; background: #f5f5f2; margin: 0; padding: 20px; }
    .card { background: #fff; max-width: 600px; margin: 0 auto; border-radius: 8px; overflow: hidden; border: 1px solid #e5e7eb; }
    .header { background: #1F2937; padding: 24px 32px; }
    .header h1 { color: #39FF14; font-size: 22px; margin: 0; letter-spacing: 0.05em; text-transform: uppercase; }
    .header p { color: #9ca3af; font-size: 13px; margin: 4px 0 0; }
    .body { padding: 32px; }
    .field { margin-bottom: 20px; }
    .field-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; color: #6b7280; margin-bottom: 4px; }
    .field-value { font-size: 16px; color: #111827; font-weight: 500; }
    .divider { border: none; border-top: 1px solid #f3f4f6; margin: 24px 0; }
    .message-box { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 6px; padding: 16px; font-size: 14px; line-height: 1.6; color: #374151; }
    .footer { background: #f9fafb; border-top: 1px solid #e5e7eb; padding: 16px 32px; font-size: 12px; color: #9ca3af; }
    .badge { display: inline-block; background: #39FF14; color: #1F2937; font-size: 11px; font-weight: 700; padding: 2px 8px; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.08em; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>New Job Application</h1>
      <p>Received from awescoseptic.com</p>
    </div>
    <div class="body">
      <div class="field">
        <div class="field-label">Applicant</div>
        <div class="field-value">${fullName}</div>
      </div>
      <div class="field">
        <div class="field-label">Email</div>
        <div class="field-value"><a href="mailto:${email}" style="color:#1F2937">${email}</a></div>
      </div>
      <div class="field">
        <div class="field-label">Phone</div>
        <div class="field-value"><a href="tel:${phone.replace(/\D/g, '')}" style="color:#1F2937">${phone}</a></div>
      </div>
      ${position ? `
      <div class="field">
        <div class="field-label">Position of Interest</div>
        <div class="field-value">${position}</div>
      </div>` : ''}
      ${experience ? `
      <div class="field">
        <div class="field-label">Years of Experience</div>
        <div class="field-value">${experience}</div>
      </div>` : ''}
      ${attachments.length > 0 ? `
      <div class="field">
        <div class="field-label">Resume</div>
        <div class="field-value"><span class="badge">📎 Attached — ${attachments[0].filename}</span></div>
      </div>` : `
      <div class="field">
        <div class="field-label">Resume</div>
        <div class="field-value" style="color:#9ca3af">No file attached</div>
      </div>`}
      ${message ? `
      <hr class="divider">
      <div class="field">
        <div class="field-label">Cover Letter / Message</div>
        <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
      </div>` : ''}
    </div>
    <div class="footer">
      Submitted via awescoseptic.com/join-our-team &nbsp;·&nbsp; Reply directly to this email to contact the applicant.
    </div>
  </div>
</body>
</html>
    `.trim();

    await resend.emails.send({
      from: `A Wesco Septic Careers <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      reply_to: email,
      subject,
      html: htmlBody,
      attachments,
    });

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error('Application submission error:', err);
    return NextResponse.json(
      { error: 'Failed to send application. Please email us directly at csr@awescoseptic.com.' },
      { status: 500 }
    );
  }
}
