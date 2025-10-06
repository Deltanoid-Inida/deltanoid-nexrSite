import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, company, helpWith, message } = await req.json();
  
    if (!name || !email || !helpWith) {
      return NextResponse.json(
        { message: "Name, email, and help needed are required" },
        { status: 400 }
      );
    }

    try {
      return NextResponse.json({
        success: true,
        saved: true,
      });
    } catch (aiError: any) {
      console.error("AI qualification failed, but submission was saved:", aiError);
      
      return NextResponse.json({
        success: true,
        saved: true,
        aiUnavailable: true,
        message: "Your inquiry was saved successfully. We'll respond within 24 hours."
      });
    }
  } catch (error: any) {
    console.error("Error processing contact submission:", error);
    return NextResponse.json(
      { 
        message: "Failed to save your inquiry. Please try again or contact us directly.",
        error: error.message 
      },
      { status: 500 }
    );
  }
}
