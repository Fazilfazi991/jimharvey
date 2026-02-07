import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, company, email, phone, industry, message, terms } = body;

        // Basic validation
        if (!name || !email || !terms) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Create a transporter using SMTP
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Email content
        const mailOptions = {
            from: process.env.SMTP_FROM || process.env.SMTP_USER,
            to: 'info@jhaccounting.ae',
            subject: `New Lead: ${name} from ${company || 'Unknown Company'}`,
            text: `
                New Lead Submission

                Name: ${name}
                Company: ${company || 'N/A'}
                Email: ${email}
                Phone: ${phone || 'N/A'}
                Industry: ${industry || 'N/A'}
                
                Message:
                ${message || 'N/A'}
            `,
            html: `
                <h2>New Lead Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Company:</strong> ${company || 'N/A'}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
                <p><strong>Industry:</strong> ${industry || 'N/A'}</p>
                <h3>Message:</h3>
                <p>${message ? message.replace(/\n/g, '<br>') : 'N/A'}</p>
            `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}
