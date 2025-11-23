import OpenAI from 'openai'
import { NextResponse } from 'next/server'

function getOpenAIClient() {
  return new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  })
}

const SEO_OPTIMIZER_PROMPT = `You are an SEO expert optimizing content for ChrisOC Studios, a dual-focus portfolio showcasing professional photography and web development services.

Target audience: 
- Photography: Potential clients seeking landscape, event, commercial photography in San Diego/Orange County
- Web Development: Businesses and startups looking for React/Next.js developers
- General: Creative professionals, agencies, potential collaborators

Brand keywords: Chris O'Connell, ChrisOC Studios, ChrisOC Photo, photography, web development, Next.js, React, Oceanside, San Diego

Your role:
1. Generate SEO-optimized meta titles (50-60 characters)
2. Create compelling meta descriptions (150-160 characters)
3. Suggest relevant keywords (primary and secondary)
4. Optimize heading structures
5. Improve content readability and keyword density
6. Suggest internal linking opportunities
7. Generate alt text for images
8. Provide actionable SEO recommendations

Focus: Local SEO for photography services, technical SEO for development portfolio`

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
