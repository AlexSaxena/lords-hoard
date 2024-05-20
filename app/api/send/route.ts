import { NextResponse } from "next/server";
import { EmailTemplate } from "../../_components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const response = await req.json();
  console.log("Response Route", response);
  try {
    const { data, error } = await resend.emails.send({
      from: "lordshoard@resend.dev",
      to: ["saxenaalex@gmail.com"],
      subject: "Treasure Here",
      react: EmailTemplate({ firstName: "Berg" }),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
