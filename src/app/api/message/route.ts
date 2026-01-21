import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  try {
    const message = await request.json();

    const resend = new Resend(process.env.RESEND_API);

    const response = await resend.emails.send({
      from: 'jainabhishekworks@gmail.com',
      to: ["jainabhisekarham@gmail.com"],
      subject: "Message",
      html: `<p>${message.text}</p>`,
    });

    console.log(response)

    return NextResponse.json(
      { success: true, data: response },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
