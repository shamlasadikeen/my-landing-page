import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json(); // ✅ VERY IMPORTANT

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.BOOKING_RECEIVER_EMAIL,
      subject: "🚗 New Car Booking",
      html: `
        <h2>New Booking Received</h2>
        <p><b>Name:</b> ${data.name}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Phone:</b> ${data.phone}</p>
        <p><b>Car:</b> ${data.car}</p>
        <p><b>Date:</b> ${data.date}</p>
        <p><b>Message:</b> ${data.message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });

} catch (error) {
  console.error("EMAIL ERROR:", error);

  return NextResponse.json(
    {
      success: false,
      message:
        error instanceof Error ? error.message : "Server error",
    },
    { status: 500 }
  );
}}