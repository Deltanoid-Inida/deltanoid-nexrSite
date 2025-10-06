import { NextResponse } from "next/server";
import { generateBlogIdea } from "@/server/openai";

export async function POST(req: Request) {
  try {
    const { topic, category } = await req.json();
    
    if (!topic) {
      return NextResponse.json(
        { message: "Topic is required" },
        { status: 400 }
      );
    }

    const blogIdea = await generateBlogIdea(
      topic, 
      category || "SaaS Growth"
    );
    
    return NextResponse.json({
      success: true,
      blogIdea
    });
  } catch (error: any) {
    console.error("Error generating blog idea:", error);
    
    if (error.status === 429 || error.code === 'insufficient_quota') {
      return NextResponse.json(
        { 
          message: "AI content generator temporarily unavailable",
          code: "SERVICE_UNAVAILABLE"
        },
        { status: 503 }
      );
    }
    
    return NextResponse.json(
      { 
        message: "Failed to generate blog idea",
        error: error.message 
      },
      { status: 500 }
    );
  }
}
