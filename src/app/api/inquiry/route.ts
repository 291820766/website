import { NextResponse } from "next/server";

const requiredFields = ["name", "company", "email", "message"] as const;

export async function POST(request: Request) {
  const body = (await request.json()) as Record<string, string>;

  for (const field of requiredFields) {
    if (!body[field]?.trim()) {
      return NextResponse.json(
        { error: `Please complete the ${field} field.` },
        { status: 400 },
      );
    }
  }

  return NextResponse.json({
    message:
      "Inquiry received. This demo endpoint is Vercel-ready and can be connected to your CRM, email service, or database next.",
  });
}
