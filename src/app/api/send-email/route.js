import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { firstName, lastName, email, phone, service, budget, message } = await request.json();

  try {
    // Create a transport using the Gmail service
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: "infolatchltd@gmail.com",
        pass: "owverqxwpdfovoyg",  // Gmail app password
      },
      logger: true,  // Enable logging
      debug: true,   // Enable debug mode for more verbose logs
    });

    // Define email options
    const mailOptions = {
      from: '"Infolatch Contact" <infolatchltd@gmail.com>',  // Sender email
      to: "infolatchltd@gmail.com",                          // Receiving email
      subject: "New Contact Form Submission",
      text: `Hello,

You have received a new message from your contact form:

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Service: ${service}
Budget: ${budget}
Message: ${message}

Best regards,
Infolatch Contact Form`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to send email!" }, { status: 500 });
  }
};
