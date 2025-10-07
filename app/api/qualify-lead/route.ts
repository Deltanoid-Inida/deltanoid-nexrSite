import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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

       await resend.emails.send({
          from: "Deltanoid <no-reply@contact.deltanoid.in>",
          to: "admin@deltanoid.in",
          subject: `📧 New Submission from ${name}`,
          html: `
          <div style="
            font-family: 'Segoe UI', Arial, sans-serif;
            background-color: #f9fafb;
            padding: 30px;
          ">
            <div style="
              max-width: 600px;
              background-color: #ffffff;
              border-radius: 12px;
              margin: 0 auto;
              padding: 25px 35px;
              box-shadow: 0 4px 12px rgba(0,0,0,0.08);
            ">
              <div style="text-align: center; border-bottom: 2px solid #007BFF; padding-bottom: 10px; margin-bottom: 20px;">
                <h2 style="color: #007BFF; margin: 0;">New Call Schedule</h2>
                <p style="color: #555; margin: 5px 0 0;">You’ve received a new scheduling request</p>
              </div>

              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #333;"><strong>Name:</strong></td>
                  <td style="padding: 8px 0; color: #555;">${name}</td>
                </tr>
                <tr style="background-color: #f7f9fc;">
                  <td style="padding: 8px 0; color: #333;"><strong>Email:</strong></td>
                  <td style="padding: 8px 0; color: #555;">${email}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #333;"><strong>Company:</strong></td>
                  <td style="padding: 8px 0; color: #555;">${company || "N/A"}</td>
                </tr>
                <tr style="background-color: #f7f9fc;">
                  <td style="padding: 8px 0; color: #333;"><strong>Help With:</strong></td>
                  <td style="padding: 8px 0; color: #555;">${helpWith}</td>
                </tr>
                <tr>
                  <td colspan="2" style="padding: 15px 0;">
                    <strong style="color: #333;">Message:</strong>
                    <div style="
                      background-color: #f9f9f9;
                      border: 1px solid #e5e7eb;
                      padding: 10px 12px;
                      border-radius: 6px;
                      margin-top: 6px;
                      color: #444;
                      white-space: pre-wrap;
                    ">
                      ${message || "(no message)"}
                    </div>
                  </td>
                </tr>
              </table>

              <div style="text-align: center; margin-top: 25px; font-size: 13px; color: #888;">
                <p>— Deltanoid Team</p>
                <p style="margin: 0;">This is an automated email. Please do not reply directly.</p>
              </div>
            </div>
          </div>
          `,
        });

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
