import OpenAI from 'openai'
import { NextResponse } from 'next/server'

function getOpenAIClient() {
  return new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  })
}

const SEO_OPTIMIZER_PROMPT = `You are an SEO expert optimizing content for ChrisOC Studios, a portfolio showcasing professional photography (ChrisOCPhoto) and web development services.

Services Offered:
- Photography: Event photography, corporate media content, portrait photography (Oceanside, CA / San Diego area)
- Web Development: Next.js/React development, TypeScript applications, responsive websites (remote/worldwide)

Services NOT Offered (do not optimize for these keywords):
- Drone/aerial photography, wedding photography, real estate photography, product photography, video production services

Target audience: 
- Photography: Corporate clients, event organizers, media companies seeking event and portrait photography
- Web Development: Businesses and startups looking for Next.js/React developers
- General: Creative professionals, agencies, potential collaborators

Brand keywords: Chris O'Connell, ChrisOC Studios, ChrisOC Photo, ChrisOCPhoto, event photography, media content, web development, Next.js, React, TypeScript, Oceanside, San Diego

Your role:
1. Generate SEO-optimized meta titles (50-60 characters) - focus on services ACTUALLY offered
2. Create compelling meta descriptions (150-160 characters) - accurate to services provided
3. Suggest relevant keywords (primary and secondary) - ONLY for services offered (no drone, wedding, real estate, product photo keywords)
4. Optimize heading structures
5. Improve content readability and keyword density
6. Suggest internal linking opportunities
7. Generate alt text for images
8. Provide actionable SEO recommendations

Focus: Local SEO for event/corporate photography services, technical SEO for Next.js/React development portfolio. CRITICAL: Never suggest keywords or optimization for services not offered.

**BRAND POSITIONING & MESSAGING:**
- Unique Value Proposition: "Capturing moments through the lens and crafting digital experiences through code"
- Dual Creative Professional: Bridges visual arts and technology
- Differentiation: Photography experience enhances UI/UX design sensibility; technical skills enhance photography workflow
- Target: Clients who value detail-orientation, craftsmanship, and meaningful experiences
- Location Focus: Oceanside, CA / San Diego County (photography local SEO)
- Remote Services: Web development available worldwide

**KEYWORD STRATEGY:**
- Primary Focus: "event photographer Oceanside", "corporate photographer San Diego", "Next.js developer", "React developer portfolio"
- Unique Angles: "photographer web developer", "creative technologist", "photography and web development", "dual expertise photographer developer"
- Technical Keywords: Next.js 14, React 18, TypeScript, responsive web design, modern web applications
- Photography Keywords: event photography, corporate media content, professional portraits, Canon photography, GoPro certified
- Avoid: drone, aerial, wedding photographer, real estate photography, product photography, videographer

**CONTENT THEMES:**
- Attention to detail in both code and composition
- Technical precision meets creative vision
- Professional media content for businesses
- Modern web applications with visual design sensibility
- Event coverage with technical documentation capability
- Bridging visual storytelling and digital experiences

**SEO GOALS:**
1. Rank for dual-expertise searches (photographer + developer combinations)
2. Local event photography visibility (San Diego County)
3. Technical portfolio discoverability (Next.js/React developers)
4. Brand authority for "ChrisOC Studios" and "ChrisOCPhoto"
5. Attract quality clients who value craftsmanship over price
6. Highlight unique positioning as creative technologist`

interface SEOAnalysis {
  metaTitle: string
  metaDescription: string
  keywords: {
    primary: string[]
    secondary: string[]
    longTail: string[]
  }
  headingStructure: {
    h1: string
    h2: string[]
  }
  altTextSuggestions?: string[]
  recommendations: string[]
  contentScore: number
}

export async function POST(request: Request) {
  try {
    const { 
      pageType, 
      currentContent, 
      pageTitle, 
      targetKeywords,
      location 
    } = await request.json()

    if (!pageType || !currentContent) {
      return NextResponse.json(
        { error: 'Page type and current content are required' },
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

    const analysisPrompt = `Analyze and optimize SEO for this page:

Page Type: ${pageType}
Current Title: ${pageTitle || 'Not set'}
Target Keywords: ${targetKeywords || 'Not specified'}
Location Focus: ${location || 'Oceanside, CA'}

Current Content:
${currentContent}

Provide a comprehensive SEO analysis in JSON format with:
- Optimized meta title
- Compelling meta description
- Keyword recommendations (primary, secondary, long-tail)
- Improved heading structure (H1, H2s)
- Alt text suggestions if images mentioned
- 5-7 actionable recommendations
- Content quality score (1-10)

Consider both photography and web development services. Focus on local SEO for photography, technical SEO for development.`

    const openai = getOpenAIClient()
    
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: SEO_OPTIMIZER_PROMPT },
        { role: 'user', content: analysisPrompt }
      ],
      temperature: 0.4,
      max_tokens: 1000,
      response_format: { type: 'json_object' }
    })

    const analysis: SEOAnalysis = JSON.parse(completion.choices[0].message.content || '{}')

    return NextResponse.json({
      analysis,
      usage: completion.usage
    })
  } catch (error: any) {
    console.error('SEO Optimizer Error:', error)
    
    if (error.code === 'insufficient_quota') {
      return NextResponse.json(
        { error: 'API quota exceeded. Please check your OpenAI account.' },
        { status: 429 }
      )
    }
    
    return NextResponse.json(
      { error: 'Failed to optimize SEO', details: error.message },
        { status: 500 }
    )
  }
}
