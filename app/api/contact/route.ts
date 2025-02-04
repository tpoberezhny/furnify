import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, company, email, phone, message } = await request.json();

  if (!name || !email || !message || !phone) {
    return NextResponse.json(
      { message: "Please fill in all required fields" },
      { status: 400 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER_USER,
      subject: `New Contact Form Submission from ${name}`,
      text: `
      Your have received a new contact form submission: 
      Name: ${name}
      Company: ${company || "N/A"}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "An error occurred while sending the message" },
      { status: 500 }
    );
  }
}
