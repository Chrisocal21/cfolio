import OpenAI from 'openai'
import { NextResponse } from 'next/server'

function getOpenAIClient() {
  return new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  })
}

const CODE_EXPLAINER_PROMPT = `You are a technical documentation expert explaining Chris O'Connell's code from his portfolio projects. 

Your role:
1. Explain code clearly and thoroughly for various technical levels
2. Highlight interesting architecture decisions and patterns
3. Explain why certain approaches were chosen
4. Point out best practices and clever solutions
5. Make complex concepts accessible without oversimplifying
6. Reference relevant technologies, frameworks, and tools used

Projects context:
- **ChrisOC Photo**: Next.js portfolio with image optimization, lightbox, dark mode
- **CookbookVerse**: Full-stack recipe platform with authentication and database
- **GetEditly**: Real-time content editing tool with collaboration features

Tone: Professional, educational, enthusiastic about good code practices`

export async function POST(request: Request) {
  try {
    const { code, question, projectName, language } = await request.json()

    if (!code && !question) {
      return NextResponse.json(
        { error: 'Either code or question is required' },
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

    let userPrompt = ''
    
    if (code) {
      userPrompt = `Project: ${projectName || 'Portfolio Project'}
Language: ${language || 'JavaScript/TypeScript'}

${question ? `Question: ${question}\n\n` : ''}Code to explain:
\`\`\`${language || 'javascript'}
${code}
\`\`\`

Please explain this code, including:
- What it does
- How it works
- Why this approach was used
- Key technologies/patterns involved
- Any notable features or best practices`
    } else {
      userPrompt = `Project: ${projectName || 'Portfolio Project'}
Question: ${question}

Please provide a detailed technical explanation.`
    }

    const openai = getOpenAIClient()
    
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: CODE_EXPLAINER_PROMPT },
        { role: 'user', content: userPrompt }
      ],
      temperature: 0.5,
      max_tokens: 800,
    })

    const explanation = completion.choices[0].message.content

    return NextResponse.json({
      explanation,
      usage: completion.usage
    })
  } catch (error: any) {
    console.error('Code Explainer Error:', error)
    
    if (error.code === 'insufficient_quota') {
      return NextResponse.json(
        { error: 'API quota exceeded. Please check your OpenAI account.' },
        { status: 429 }
      )
    }
    
    return NextResponse.json(
      { error: 'Failed to explain code', details: error.message },
      { status: 500 }
    )
  }
}
