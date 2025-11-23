'use client'

import { useState, useRef, useEffect } from 'react'
import styles from './ChatWidget.module.css'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  
  // Fun project teasers that rotate
  const projectTeasers = [
    'Hi! I\'m here to help you learn about Chris\'s work in photography and web development. What would you like to know?',
    'Hey there! Did you know Chris combines photography expertise with web development? Ask me anything about his projects!',
    'Welcome! Chris has built some cool projects like CookbookVerse (recipes) and GetEditly (video editing). Want to know more?',
    'Hi! Fun fact: This portfolio uses Next.js 14 and TypeScript, the same tech stack as Chris\'s other projects. What can I help you with?'
  ]
  
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: projectTeasers[Math.floor(Math.random() * projectTeasers.length)]
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [apiConnected, setApiConnected] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput('')
    
    // Add user message
    const newMessages = [...messages, { role: 'user' as const, content: userMessage }]
    setMessages(newMessages)
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: newMessages
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to get response')
      }

      const data = await response.json()
      
      if (data.error) {
        throw new Error(data.error)
      }

      setMessages([...newMessages, {
        role: 'assistant',
        content: data.message
      }])
      setApiConnected(true)
    } catch (error: any) {
      console.error('Chat error:', error)
      setApiConnected(false)
      setMessages([...newMessages, {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again or contact Chris directly at hello@chrisocstudios.com.'
      }])
    } finally {
      setIsLoading(false)
    }
  }

  const suggestedQuestions = [
    'What projects have you worked on?',
    'Tell me about your photography services',
    'What web development technologies do you use?',
    'Are you available for new projects?',
    '🎨 Show me something cool',
    '📸 Surprise me with a photo'
  ]

  const handleSuggestedQuestion = (question: string) => {
    setInput(question)
  }

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          className={styles.floatingButton}
          onClick={() => setIsOpen(true)}
          aria-label="Open AI chat"
          title="Ask AI about this portfolio"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            <circle cx="9" cy="10" r="0.5" fill="currentColor" stroke="none"/>
            <circle cx="12" cy="10" r="0.5" fill="currentColor" stroke="none"/>
            <circle cx="15" cy="10" r="0.5" fill="currentColor" stroke="none"/>
          </svg>
        </button>
      )}

      {/* Chat Modal */}
      {isOpen && (
        <div className={styles.chatContainer}>
          <div className={styles.chatHeader}>
            <div className={styles.headerInfo}>
              <div className={styles.avatar}>🤖</div>
              <div>
                <h3>ChrisOC Studios AI</h3>
                <p className={styles.status}>
                  <span className={styles.statusDot} />
                  Online
                </p>
              </div>
            </div>
            <button
              className={styles.closeButton}
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          <div className={styles.chatMessages}>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`${styles.message} ${
                  message.role === 'user' ? styles.userMessage : styles.assistantMessage
                }`}
              >
                <div className={styles.messageContent}>
                  {message.content}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className={`${styles.message} ${styles.assistantMessage}`}>
                <div className={styles.messageContent}>
                  <div className={styles.typingIndicator}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {messages.length === 1 && (
            <div className={styles.suggestedQuestions}>
              <p className={styles.suggestedTitle}>Try asking:</p>
              <div className={styles.questionButtons}>
                {suggestedQuestions.map((question, index) => (
                  <button
                    key={index}
                    className={styles.suggestionButton}
                    onClick={() => handleSuggestedQuestion(question)}
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          <form className={styles.chatInput} onSubmit={sendMessage}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about projects, skills, availability..."
              disabled={isLoading}
              className={styles.input}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className={styles.sendButton}
              aria-label="Send message"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 21L23 12L2 3V10L17 12L2 14V21Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </form>

          <div className={styles.chatFooter}>
            <p>
              <span className={styles.statusIndicator}>
                <span className={`${styles.statusLight} ${apiConnected ? styles.connected : styles.disconnected}`} />
                {apiConnected ? 'AI Connected' : 'AI Offline'}
              </span>
              {' • '}
              <a href="/contact">Contact directly</a>
            </p>
          </div>
        </div>
      )}
    </>
  )
}
