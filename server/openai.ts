import OpenAI from "openai";

// the newest OpenAI model is "gpt-5" which was released August 7, 2025. do not change this unless explicitly requested by the user
const openai = new OpenAI({ apiKey: `${process.env.OPENAI_API_KEY}` });

export interface LeadQualification {
  score: number;
  category: string;
  priority: string;
  suggestedResponse: string;
  insights: string[];
}

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export interface ChatResponse {
  response: string;
  relatedPages: string[];
}

export interface BlogPostIdea {
  title: string;
  excerpt: string;
  outline: string[];
  category: string;
}

export async function qualifyLead(
  name: string,
  email: string,
  company: string,
  helpWith: string,
  message: string
): Promise<LeadQualification> {
  try {
    const prompt = `You are an expert business consultant for Deltanoid, a growth consultancy that offers:
1. SaaS & App Development - Building products from MVP to scale
2. Performance Marketing - ROI-first campaigns on Google, Meta, etc.
3. Reputation & Content - Online reputation management and content strategy

Analyze this lead inquiry and provide a qualification assessment in JSON format:

Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}
Help Needed: ${helpWith}
Message: ${message || 'Not provided'}

Provide a JSON response with:
- score: 1-10 (lead quality score)
- category: Which service they need (SaaS Development, Performance Marketing, Reputation Management, or Multiple Services)
- priority: high, medium, or low
- suggestedResponse: A personalized, warm response acknowledging their needs (2-3 sentences, professional + chill tone)
- insights: Array of 2-3 key insights about this lead's needs

Response must be valid JSON.`;

    const response = await openai.chat.completions.create({
      model: "gpt-5",
      messages: [
        {
          role: "system",
          content: "You are a business consultant. Respond only with valid JSON."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      response_format: { type: "json_object" }
    });

    const result = JSON.parse(response.choices[0].message.content || "{}");
    
    return {
      score: Math.max(1, Math.min(10, result.score || 5)),
      category: result.category || "General Inquiry",
      priority: result.priority || "medium",
      suggestedResponse: result.suggestedResponse || "Thanks for reaching out! We'll be in touch soon.",
      insights: result.insights || []
    };
  } catch (error) {
    console.error("Error qualifying lead:", error);
    throw new Error("Failed to qualify lead");
  }
}

export async function chatWithAssistant(
  messages: ChatMessage[]
): Promise<ChatResponse> {
  try {
    const systemPrompt = `You are a helpful assistant for Deltanoid - Growth, Simplified. 
    
Deltanoid offers:
1. SaaS & App Development - We build products from MVP to 50K+ users. Clean UX, scalability, real adoption metrics.
2. Performance Marketing - ROI-first campaigns on Google, Meta, global platforms. Lower costs, higher conversions.
3. Reputation & Content - Online reputation management, SEO content, brand building.

Real clients: Adhira Spa (Bangalore), Nava, Nirantara Resort, DevTown, Modern Zen Spa, Sundown Pub.
Results: 40% booking increases, 3x ROI, 50K+ users in 6 months, 35% more bookings.
Geography: India (Bangalore, Gurgaon HQ), UAE (Dubai), Singapore, USA & Europe.
Stats: 25+ clients, 100+ projects, 10+ countries, 30%+ average ROI uplift.

Tone: Professional + chill + psychologically comfortable. Use phrases like "stress-free", "made simple", "handled".

Answer questions about services, pricing, process, case studies. Be helpful and warm. If asked about contact, direct to /lets-talk page.

Respond with JSON containing:
- response: Your helpful answer (2-4 sentences)
- relatedPages: Array of relevant page paths like ["/what-we-do", "/our-work", "/lets-talk"]`;

    const response = await openai.chat.completions.create({
      model: "gpt-5",
      messages: [
        { role: "system", content: systemPrompt },
        ...messages
      ],
      response_format: { type: "json_object" }
    });

    const result = JSON.parse(response.choices[0].message.content || "{}");
    
    return {
      response: result.response || "I'm here to help! Could you tell me more about what you're looking for?",
      relatedPages: result.relatedPages || []
    };
  } catch (error) {
    console.error("Error in chat:", error);
    throw new Error("Failed to process chat message");
  }
}

export async function generateBlogIdea(
  topic: string,
  category: string
): Promise<BlogPostIdea> {
  try {
    const prompt = `Generate a blog post idea for Deltanoid's Insights page about: ${topic}

Category: ${category} (SaaS Growth, Wellness & Lifestyle Marketing, or Reputation & Brand Building)

Deltanoid's audience: Business owners in wellness (spas, resorts), tech founders, SaaS builders.
Tone: Professional + chill, actionable insights, real examples.

Provide a JSON response with:
- title: Compelling blog title (60-80 chars)
- excerpt: 2-sentence preview that hooks readers
- outline: Array of 5-7 section headings
- category: The category name

Response must be valid JSON.`;

    const response = await openai.chat.completions.create({
      model: "gpt-5",
      messages: [
        {
          role: "system",
          content: "You are a content strategist. Respond only with valid JSON."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      response_format: { type: "json_object" }
    });

    const result = JSON.parse(response.choices[0].message.content || "{}");
    
    return {
      title: result.title || "Untitled Post",
      excerpt: result.excerpt || "",
      outline: result.outline || [],
      category: result.category || category
    };
  } catch (error) {
    console.error("Error generating blog idea:", error);
    throw new Error("Failed to generate blog idea");
  }
}
