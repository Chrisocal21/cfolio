'use client'

import { useState } from 'react'
import styles from './CodeExplainer.module.css'

interface CodeExplainerProps {
  projectName: string
}

export default function CodeExplainer({ projectName }: CodeExplainerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [question, setQuestion] = useState('')
  const [explanation, setExplanation] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!question.trim() || isLoading) return

    setIsLoading(true)
    try {
      const response = await fetch('/api/explain-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          projectName,
          question: question.trim(),
          language: 'TypeScript/JavaScript'
        })
      })

      if (!response.ok) throw new Error('Failed to get explanation')

      const data = await response.json()
      if (data.error) throw new Error(data.error)

      setExplanation(data.explanation)
    } catch (error: any) {
      console.error('Code explainer error:', error)
      setExplanation('Sorry, I encountered an error explaining this code. Please try again or contact Chris directly.')
    } finally {
      setIsLoading(false)
    }
  }

  const suggestedQuestions = [
    'What technologies power this project?',
    'How was this built?',
    'What makes this project unique?',
    'Tell me about the architecture'
  ]

  return (
    <>
      <button
        className={styles.explainerButton}
        onClick={() => setIsOpen(true)}
        aria-label="Ask about this project"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
          <line x1="12" y1="17" x2="12.01" y2="17"/>
        </svg>
        Ask AI about this code
      </button>

      {isOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsOpen(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3>💬 Ask About {projectName}</h3>
              <button
                className={styles.closeButton}
                onClick={() => setIsOpen(false)}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className={styles.modalBody}>
              {!explanation ? (
                <>
                  <p className={styles.intro}>
                    Ask AI anything about how this project was built, the technologies used, or the architecture decisions.
                  </p>

                  <div className={styles.suggestedQuestions}>
                    <p className={styles.suggestedTitle}>Suggested questions:</p>
                    {suggestedQuestions.map((q, idx) => (
                      <button
                        key={idx}
                        className={styles.suggestionChip}
                        onClick={() => setQuestion(q)}
                      >
                        {q}
                      </button>
                    ))}
                  </div>

                  <form onSubmit={handleAsk} className={styles.questionForm}>
                    <textarea
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      placeholder="Type your question here..."
                      rows={3}
                      disabled={isLoading}
                      className={styles.questionInput}
                    />
                    <button
                      type="submit"
                      disabled={isLoading || !question.trim()}
                      className={styles.askButton}
                    >
                      {isLoading ? (
                        <>
                          <span className={styles.loader}></span>
                          Thinking...
                        </>
                      ) : (
                        'Get Explanation'
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <div className={styles.explanationSection}>
                  <div className={styles.questionAsked}>
                    <strong>Your Question:</strong>
                    <p>{question}</p>
                  </div>
                  <div className={styles.explanation}>
                    <strong>AI Explanation:</strong>
                    <div className={styles.explanationContent}>
                      {explanation}
                    </div>
                  </div>
                  <button
                    className={styles.askAnotherButton}
                    onClick={() => {
                      setExplanation('')
                      setQuestion('')
                    }}
                  >
                    Ask Another Question
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
