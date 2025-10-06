import { NextResponse } from "next/server";
import { chatWithAssistant } from "@/server/openai";

export async function POST(req: Request) {
  try {
    const { message, history } = await req.json();
    
    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { message: "Message is required" },
        { status: 400 }
      );
    }

    const messages = [
      ...(Array.isArray(history) ? history : []),
      { role: 'user', content: message }
    ];

    const chatResponse = await chatWithAssistant(messages);
    
    return NextResponse.json({
      success: true,
      ...chatResponse
    });
  } catch (error: any) {
    console.error("Error in chat:", error);
    
    if (error.status === 429 || error.code === 'insufficient_quota') {
      return NextResponse.json(
        { 
          message: "AI service temporarily unavailable",
          code: "SERVICE_UNAVAILABLE"
        },
        { status: 503 }
      );
    }
    
    return NextResponse.json(
      { 
        message: "Failed to process chat",
        error: error.message 
      },
      { status: 500 }
    );
  }
}
