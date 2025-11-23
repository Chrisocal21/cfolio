'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import styles from './seo-admin.module.css'

export default function SEOAdminPage() {
  const [pageType, setPageType] = useState('home')
  const [currentContent, setCurrentContent] = useState('')
  const [targetKeywords, setTargetKeywords] = useState('')
  const [analysis, setAnalysis] = useState<any>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!currentContent.trim()) return

    setIsAnalyzing(true)
    try {
      const response = await fetch('/api/seo-optimize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pageType,
          currentContent: currentContent.trim(),
          pageTitle: '',
          targetKeywords: targetKeywords.trim() || undefined,
          location: 'Oceanside, CA'
        })
      })

      if (!response.ok) throw new Error('Failed to analyze SEO')

      const data = await response.json()
      if (data.error) throw new Error(data.error)

      setAnalysis(data.analysis)
    } catch (error: any) {
      console.error('SEO analysis error:', error)
      alert('Failed to analyze SEO. Please check your API key configuration.')
    } finally {
      setIsAnalyzing(false)
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    alert('Copied to clipboard!')
  }

  return (
    <>
      <Navigation />
      <div className={styles.page}>
        <div className={styles.container}>
          <div className={styles.pageHeader}>
            <h1>🔍 SEO Content Optimizer</h1>
            <p>AI-powered SEO analysis and optimization for your portfolio pages</p>
          </div>

          <div className={styles.content}>
            <div className={styles.inputSection}>
              <form onSubmit={handleAnalyze} className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="pageType">Page Type</label>
                  <select
                    id="pageType"
                    value={pageType}
                    onChange={(e) => setPageType(e.target.value)}
                    className={styles.select}
                  >
                    <option value="home">Home Page</option>
                    <option value="about">About Page</option>
                    <option value="projects">Projects Page</option>
                    <option value="photography">Photography Gallery</option>
                    <option value="contact">Contact Page</option>
                    <option value="blog">Blog Post</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="targetKeywords">Target Keywords (optional)</label>
                  <input
                    type="text"
                    id="targetKeywords"
                    value={targetKeywords}
                    onChange={(e) => setTargetKeywords(e.target.value)}
                    placeholder="photography, web development, next.js..."
                    className={styles.input}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="currentContent">Current Page Content</label>
                  <textarea
                    id="currentContent"
                    value={currentContent}
                    onChange={(e) => setCurrentContent(e.target.value)}
                    placeholder="Paste your current page content here for AI analysis..."
                    rows={10}
                    required
                    className={styles.textarea}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isAnalyzing || !currentContent.trim()}
                  className={styles.analyzeButton}
                >
                  {isAnalyzing ? (
                    <>
                      <span className={styles.loader}></span>
                      Analyzing...
                    </>
                  ) : (
                    '🚀 Analyze SEO'
                  )}
                </button>
              </form>
            </div>

            {analysis && (
              <div className={styles.resultsSection}>
                <h2>📊 SEO Analysis Results</h2>
                
                <div className={styles.scoreCard}>
                  <div className={styles.scoreCircle}>
                    <span className={styles.scoreNumber}>{analysis.contentScore}</span>
                    <span className={styles.scoreLabel}>/10</span>
                  </div>
                  <p>Content Quality Score</p>
                </div>

                <div className={styles.resultCard}>
                  <div className={styles.cardHeader}>
                    <h3>🎯 Meta Title</h3>
                    <button onClick={() => copyToClipboard(analysis.metaTitle)} className={styles.copyButton}>
                      Copy
                    </button>
                  </div>
                  <p className={styles.metaText}>{analysis.metaTitle}</p>
                  <span className={styles.charCount}>{analysis.metaTitle.length} characters</span>
                </div>

                <div className={styles.resultCard}>
                  <div className={styles.cardHeader}>
                    <h3>📝 Meta Description</h3>
                    <button onClick={() => copyToClipboard(analysis.metaDescription)} className={styles.copyButton}>
                      Copy
                    </button>
                  </div>
                  <p className={styles.metaText}>{analysis.metaDescription}</p>
                  <span className={styles.charCount}>{analysis.metaDescription.length} characters</span>
                </div>

                {analysis.keywords && (
                  <div className={styles.resultCard}>
                    <h3>🔑 Keyword Recommendations</h3>
                    <div className={styles.keywordSection}>
                      <div>
                        <strong>Primary:</strong>
                        <div className={styles.keywordTags}>
                          {analysis.keywords.primary?.map((keyword: string, idx: number) => (
                            <span key={idx} className={styles.keywordTag}>{keyword}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <strong>Secondary:</strong>
                        <div className={styles.keywordTags}>
                          {analysis.keywords.secondary?.map((keyword: string, idx: number) => (
                            <span key={idx} className={styles.keywordTagSecondary}>{keyword}</span>
                          ))}
                        </div>
                      </div>
                      {analysis.keywords.longTail && analysis.keywords.longTail.length > 0 && (
                        <div>
                          <strong>Long-tail:</strong>
                          <div className={styles.keywordTags}>
                            {analysis.keywords.longTail.map((keyword: string, idx: number) => (
                              <span key={idx} className={styles.keywordTagLongTail}>{keyword}</span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {analysis.headingStructure && (
                  <div className={styles.resultCard}>
                    <h3>📐 Heading Structure</h3>
                    <div className={styles.headingStructure}>
                      <div className={styles.headingItem}>
                        <span className={styles.headingTag}>H1</span>
                        <span>{analysis.headingStructure.h1}</span>
                      </div>
                      {analysis.headingStructure.h2?.map((h2: string, idx: number) => (
                        <div key={idx} className={styles.headingItem}>
                          <span className={styles.headingTag}>H2</span>
                          <span>{h2}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {analysis.recommendations && (
                  <div className={styles.resultCard}>
                    <h3>💡 Recommendations</h3>
                    <ul className={styles.recommendationList}>
                      {analysis.recommendations.map((rec: string, idx: number) => (
                        <li key={idx}>{rec}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
