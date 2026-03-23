import { NextRequest, NextResponse } from "next/server";
import { sendEnquiryEmail, sendApplicationEmail, sendCVEmail } from "@/lib/email/resend";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { type, ...data } = body;

    if (!type) {
      return NextResponse.json({ error: "Missing form type" }, { status: 400 });
    }

    if (type === "employer_enquiry") {
      if (!data.name || !data.email || !data.company || !data.message) {
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
      }
      await sendEnquiryEmail(data);
    } else if (type === "application") {
      if (!data.name || !data.email || !data.jobTitle || !data.jobSlug) {
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
      }
      await sendApplicationEmail(data);
    } else if (type === "cv_registration") {
      if (!data.name || !data.email) {
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
      }
      await sendCVEmail(data);
    } else {
      return NextResponse.json({ error: "Unknown form type" }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Enquiry API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
