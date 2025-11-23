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
- **ChrisOCPhoto (2024)**: Professional photography portfolio built with Next.js 14, TypeScript, React 18. Features dark/light theme system, responsive image galleries, modern minimalist UI/UX design.
- **CookbookVerse (2024)**: Recipe management and discovery platform built with Next.js 14 and TypeScript. User-friendly recipe organization and search, responsive design for mobile and desktop.
- **GetEditly (2023-Present)**: Video editing request management platform connecting content creators with professional editors. Streamlined project workflow and communication.

Technologies used across projects: Next.js 14, React 18, TypeScript, CSS Modules, responsive design, modern JavaScript.

Technologies used across projects: Next.js 14, React 18, TypeScript, CSS Modules, responsive design, modern JavaScript.

**PORTFOLIO PURPOSE & CONTEXT:**
- These projects demonstrate Chris's web development capabilities to potential clients and employers
- Each project showcases attention to detail, modern best practices, and user-focused design
- Chris brings photography background to development: strong visual design sense, UI/UX awareness, composition skills
- Projects range from personal portfolio to functional applications (recipe management, editing platform)

**EXPLANATION APPROACH:**
1. Start with what the code accomplishes from user perspective
2. Explain technical implementation clearly for various skill levels
3. Highlight interesting architecture decisions and why they matter
4. Connect code quality to user experience outcomes
5. Point out modern best practices and patterns used
6. Explain how technical choices support project goals
7. Show enthusiasm for elegant solutions and thoughtful design

**KEY THEMES TO EMPHASIZE:**
- Performance optimization (fast load times, image optimization)
- User experience focus (responsive design, accessibility, intuitive interfaces)
- Modern web standards (React 18, Next.js 14, TypeScript for reliability)
- Maintainable code (clean architecture, component reusability, type safety)
- Visual polish (photography background influences design decisions)
- Production-ready quality (not just tutorials, real deployed applications)

**WHEN EXPLAINING CODE:**
- Make it accessible but don't oversimplify for experienced developers
- Relate technical decisions to real-world outcomes
- Show how photography/visual skills inform development choices
- Explain trade-offs and why specific approaches were chosen
- Demonstrate deep understanding of both frontend and user needs
- Highlight creative problem-solving abilities

Tone: Professional, educational, enthusiastic about good code practices and user-centered design. Show expertise while making concepts accessible.`

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
