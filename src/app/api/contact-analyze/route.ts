import OpenAI from 'openai'
import { NextResponse } from 'next/server'

function getOpenAIClient() {
  return new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  })
}

const ANALYSIS_PROMPT = `You are an AI assistant analyzing contact form inquiries for ChrisOC Studios. 

ChrisOC Studios Services:
- Photography: Event photography, corporate media content, portrait photography (ChrisOCPhoto division)
- Web Development: Next.js/React applications, responsive websites, TypeScript projects
- NOT offered: Drone/aerial photography, wedding photography, real estate photography, product photography, video production

Analyze the inquiry and provide:

1. **Category**: Classify as "Photography", "Web Development", "Both", or "Other"
2. **Urgency**: Rate as "High" (ASAP/urgent), "Medium" (1-2 weeks), or "Low" (flexible)
3. **Project Type**: Identify specific service - ONLY suggest services actually offered (e.g., "Event Photography", "Web Application", "Corporate Media Content", "Portrait Session", "Next.js Website")
4. **Budget Indicator**: Extract budget range if mentioned, or note "Not specified"
5. **Key Requirements**: List 2-3 main requirements or goals
6. **Recommended Response**: Suggest which portfolio pieces or services to highlight - ONLY mention services actually offered
7. **Priority Score**: Rate 1-10 based on urgency, budget, and project fit (reduce score if inquiry is for services not offered)

If inquiry asks for services NOT offered (drone, weddings, real estate, product photography, video production), note this in recommendedResponse and suggest alternative services or polite decline.

**PORTFOLIO GOALS TO CONSIDER:**
- Chris bridges visual arts and technology - look for inquiries that value this dual expertise
- Prioritize clients seeking quality, attention to detail, and meaningful experiences
- Higher priority for inquiries mentioning both photography AND web development
- Look for understanding that Chris brings creative vision to technical work
- Value clients interested in event photography, corporate content, or modern web applications
- Recognize inquiries that appreciate the "capturing moments + crafting digital experiences" approach

**QUALITY INDICATORS IN INQUIRIES:**
- Specific project details and clear requirements (higher priority)
- References to portfolio work or specific projects (shows genuine interest)
- Understanding of services offered (researched the portfolio)
- Professional tone with clear timeline and budget awareness
- Interest in ongoing relationship vs. one-off project
- Values quality and craftsmanship over just price
- Mentions seeing the portfolio or specific work examples

**RED FLAGS (lower priority):**
- Requesting services not offered without reading portfolio
- No budget indication or "what's your cheapest option"
- Extremely urgent with no planning ("need this tomorrow")
- Generic inquiry that could be sent to anyone
- Unclear project scope or requirements
- Focus only on price rather than quality

Respond in JSON format only.`

interface AnalysisResult {
  category: 'Photography' | 'Web Development' | 'Both' | 'Other'
  urgency: 'High' | 'Medium' | 'Low'
  projectType: string
  budgetIndicator: string
  keyRequirements: string[]
  recommendedResponse: string
  priorityScore: number
  quickReply?: string
}

export async function POST(request: Request) {
  try {
    const { name, email, projectType, message, budget, timeline } = await request.json()

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    // Check if API key is configured
    if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY === 'your_openai_api_key_here') {
      return NextResponse.json(
        { 
          error: 'OpenAI API key not configured',
          message: 'Please add your OpenAI API key to .env.local'
        },
        { status: 500 }
      )
    }

    const inquiryContext = `
Name: ${name || 'Not provided'}
Email: ${email || 'Not provided'}
Project Type: ${projectType || 'Not specified'}
Budget: ${budget || 'Not specified'}
Timeline: ${timeline || 'Not specified'}
Message: ${message}
`

    const openai = getOpenAIClient()
    
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: ANALYSIS_PROMPT },
        { role: 'user', content: inquiryContext }
      ],
      temperature: 0.3,
      max_tokens: 400,
      response_format: { type: 'json_object' }
    })

    const analysis: AnalysisResult = JSON.parse(completion.choices[0].message.content || '{}')

    // Generate a quick auto-reply suggestion
    const replyPrompt = `Based on this analysis, write a brief, professional auto-reply message (2-3 sentences) acknowledging the inquiry and setting expectations. Mention relevant services from ChrisOC Studios.

Analysis: ${JSON.stringify(analysis)}
Context: ${inquiryContext}`

    const replyCompletion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are writing professional, friendly auto-reply emails for ChrisOC Studios.' },
        { role: 'user', content: replyPrompt }
      ],
      temperature: 0.7,
      max_tokens: 150
    })

    analysis.quickReply = replyCompletion.choices[0].message.content || undefined

    return NextResponse.json({
      analysis,
      usage: {
        analysis: completion.usage,
        reply: replyCompletion.usage
      }
    })
  } catch (error: any) {
    console.error('Contact Analysis Error:', error)
    
    if (error.code === 'insufficient_quota') {
      return NextResponse.json(
        { error: 'API quota exceeded. Please check your OpenAI account.' },
        { status: 429 }
      )
    }
    
    return NextResponse.json(
      { error: 'Failed to analyze inquiry', details: error.message },
      { status: 500 }
    )
  }
}
