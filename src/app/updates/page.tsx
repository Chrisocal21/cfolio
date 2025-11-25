'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import styles from './updates.module.css'

interface GitHubActivity {
  id: string
  type: string
  repo: { name: string }
  created_at: string
  payload: any
}

interface GitHubStats {
  public_repos: number
  total_private_repos: number
  followers: number
  following: number
}

interface GitHubRepo {
  id: number
  name: string
  description: string
  html_url: string
  language: string
  stargazers_count: number
  updated_at: string
  private: boolean
}

export default function UpdatesPage() {
  const [githubActivity, setGithubActivity] = useState<GitHubActivity[]>([])
  const [githubStats, setGithubStats] = useState<GitHubStats | null>(null)
  const [recentRepos, setRecentRepos] = useState<GitHubRepo[]>([])
  const [allRepos, setAllRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<string>('all')
  const [displayCount, setDisplayCount] = useState(10)
  const [showRepoModal, setShowRepoModal] = useState(false)
  const [modalRepoType, setModalRepoType] = useState<'public' | 'private' | null>(null)

  useEffect(() => {
    // Fetch GitHub user stats
    fetch('https://api.github.com/users/Chrisocal21')
      .then(res => res.json())
      .then(data => {
        setGithubStats({
          public_repos: data.public_repos,
          total_private_repos: data.total_private_repos || 0,
          followers: data.followers,
          following: data.following
        })
      })
      .catch(err => console.error('Failed to fetch GitHub stats:', err))

    // Fetch recent repositories
    fetch('https://api.github.com/users/Chrisocal21/repos?sort=updated&per_page=3')
      .then(res => res.json())
      .then(data => setRecentRepos(data))
      .catch(err => console.error('Failed to fetch repos:', err))

    // Fetch all repositories for modal
    fetch('https://api.github.com/users/Chrisocal21/repos?per_page=100')
      .then(res => res.json())
      .then(data => setAllRepos(data))
      .catch(err => console.error('Failed to fetch all repos:', err))

    // Fetch GitHub activity
    fetch('https://api.github.com/users/Chrisocal21/events/public?per_page=30')
      .then(res => res.json())
      .then(data => {
        setGithubActivity(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Failed to fetch GitHub activity:', err)
        setLoading(false)
      })
  }, [])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  }

  const getTimeAgo = (dateString: string) => {
    const now = new Date()
    const date = new Date(dateString)
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000)
    
    if (seconds < 60) return 'just now'
    const minutes = Math.floor(seconds / 60)
    if (minutes < 60) return `${minutes}m ago`
    const hours = Math.floor(minutes / 60)
    if (hours < 24) return `${hours}h ago`
    const days = Math.floor(hours / 24)
    if (days < 7) return `${days}d ago`
    const weeks = Math.floor(days / 7)
    if (weeks < 4) return `${weeks}w ago`
    const months = Math.floor(days / 30)
    if (months < 12) return `${months}mo ago`
    const years = Math.floor(days / 365)
    return `${years}y ago`
  }

  const getActivityMessage = (activity: GitHubActivity) => {
    const repo = activity.repo.name.split('/')[1]
    switch (activity.type) {
      case 'PushEvent':
        const commits = activity.payload.commits?.length || 1
        return `Pushed ${commits} commit${commits > 1 ? 's' : ''} to <strong>${repo}</strong>`
      case 'CreateEvent':
        return `Created ${activity.payload.ref_type} in <strong>${repo}</strong>`
      case 'PullRequestEvent':
        return `${activity.payload.action} pull request in <strong>${repo}</strong>`
      case 'IssuesEvent':
        return `${activity.payload.action} issue in <strong>${repo}</strong>`
      case 'WatchEvent':
        return `Starred <strong>${repo}</strong>`
      case 'ForkEvent':
        return `Forked <strong>${repo}</strong>`
      default:
        return `Activity in <strong>${repo}</strong>`
    }
  }

  const getActivityDetail = (activity: GitHubActivity) => {
    switch (activity.type) {
      case 'PushEvent':
        if (activity.payload.commits && activity.payload.commits.length > 0) {
          const firstCommit = activity.payload.commits[0]
          return firstCommit.message
        }
        return null
      case 'PullRequestEvent':
        return activity.payload.pull_request?.title || null
      case 'IssuesEvent':
        return activity.payload.issue?.title || null
      default:
        return null
    }
  }

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'PushEvent':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 16 16 12 12 8"/>
            <line x1="8" y1="12" x2="16" y2="12"/>
          </svg>
        )
      case 'WatchEvent':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
        )
      case 'CreateEvent':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="5" x2="12" y2="19"/>
            <line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
        )
      case 'ForkEvent':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="18" r="3"/>
            <circle cx="6" cy="6" r="3"/>
            <circle cx="18" cy="6" r="3"/>
            <path d="M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9"/>
            <path d="M12 12v3"/>
          </svg>
        )
      default:
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        )
    }
  }

  return (
    <>
      <Navigation />
      <div className={styles.page}>
        <div className={styles.container}>
          <div className={styles.pageHeader}>
            <h1>Updates</h1>
            <p>Latest posts, projects, and activity</p>
          </div>

          {/* GitHub Contribution Graph */}
          <section className={styles.contributionSection}>
            <h2>GitHub Activity</h2>
            <p className={styles.sectionDescription}>My coding activity over the past year</p>
            <div className={styles.contributionGraph}>
              <img 
                src="https://ghchart.rshah.org/6366f1/Chrisocal21" 
                alt="GitHub Contribution Graph"
                style={{ width: '100%', maxWidth: '100%' }}
              />
              <a 
                href="https://github.com/Chrisocal21" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.githubLink}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View GitHub Profile
              </a>
            </div>
          </section>

          {/* GitHub Stats Cards */}
          {githubStats && (
            <div className={styles.statsGrid}>
              <button 
                className={styles.statCard}
                onClick={() => {
                  setModalRepoType('public')
                  setShowRepoModal(true)
                }}
              >
                <div className={styles.statIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                  </svg>
                </div>
                <div className={styles.statContent}>
                  <div className={styles.statValue}>{githubStats.public_repos}</div>
                  <div className={styles.statLabel}>Public Repos</div>
                </div>
              </button>
              <div className={styles.statCard}>
                <div className={styles.statIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                  </svg>
                </div>
                <div className={styles.statContent}>
                  <div className={styles.statValue}>
                    {githubActivity.filter((activity, index, self) => 
                      self.findIndex(a => 
                        new Date(a.created_at).toDateString() === new Date(activity.created_at).toDateString()
                      ) === index
                    ).length}
                  </div>
                  <div className={styles.statLabel}>Days Active</div>
                </div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="16 18 22 12 16 6"/>
                    <polyline points="8 6 2 12 8 18"/>
                  </svg>
                </div>
                <div className={styles.statContent}>
                  <div className={styles.statValue}>{githubActivity.length}</div>
                  <div className={styles.statLabel}>Recent Events</div>
                </div>
              </div>
            </div>
          )}

          {/* Recent Repositories */}
          {recentRepos.length > 0 && (
            <section className={styles.recentRepos}>
              <h2>Recent Repositories</h2>
              <div className={styles.reposGrid}>
                {recentRepos.map(repo => (
                  <a 
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.repoCard}
                  >
                    <div className={styles.repoHeader}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                      </svg>
                      <h3>{repo.name}</h3>
                    </div>
                    <div className={styles.repoMeta}>
                      {repo.language && (
                        <span className={styles.repoLanguage}>
                          <span className={styles.languageDot}></span>
                          {repo.language}
                        </span>
                      )}
                      {repo.stargazers_count > 0 && (
                        <span className={styles.repoStars}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                          </svg>
                          {repo.stargazers_count}
                        </span>
                      )}
                      <span className={styles.repoUpdated}>Updated {getTimeAgo(repo.updated_at)}</span>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          )}

          <div className={styles.contentGrid}>
            {/* Activity Feed Section */}
            <section className={styles.activitySection}>
              <div className={styles.sectionHeader}>
                <h2>Recent Activity</h2>
                <div className={styles.filterButtons}>
                  <button 
                    className={filter === 'all' ? styles.filterActive : ''}
                    onClick={() => setFilter('all')}
                  >
                    All
                  </button>
                  <button 
                    className={filter === 'PushEvent' ? styles.filterActive : ''}
                    onClick={() => setFilter('PushEvent')}
                  >
                    Pushes
                  </button>
                  <button 
                    className={filter === 'WatchEvent' ? styles.filterActive : ''}
                    onClick={() => setFilter('WatchEvent')}
                  >
                    Stars
                  </button>
                  <button 
                    className={filter === 'CreateEvent' ? styles.filterActive : ''}
                    onClick={() => setFilter('CreateEvent')}
                  >
                    Created
                  </button>
                </div>
              </div>
              {loading ? (
                <div className={styles.skeletonFeed}>
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className={styles.skeletonItem}>
                      <div className={styles.skeletonIcon}></div>
                      <div className={styles.skeletonContent}>
                        <div className={styles.skeletonText}></div>
                        <div className={styles.skeletonTextShort}></div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : githubActivity.length > 0 ? (
                <>
                <div className={styles.activityFeed}>
                  {githubActivity
                    .filter(activity => filter === 'all' || activity.type === filter)
                    .slice(0, displayCount).map(activity => {
                    const detail = getActivityDetail(activity)
                    return (
                      <div key={activity.id} className={styles.activityItem}>
                        <div className={styles.activityIcon}>
                          {getActivityIcon(activity.type)}
                        </div>
                        <div className={styles.activityContent}>
                          <p 
                            className={styles.activityMessage}
                            dangerouslySetInnerHTML={{ __html: getActivityMessage(activity) }}
                          />
                          {detail && (
                            <p className={styles.activityDetail}>{detail}</p>
                          )}
                          <div className={styles.activityMeta}>
                            <span className={styles.activityTime}>{getTimeAgo(activity.created_at)}</span>
                            <span className={styles.activityDot}>•</span>
                            <span className={styles.activityDate}>{formatDate(activity.created_at)}</span>
                            <span className={styles.activityDot}>•</span>
                            <a 
                              href={`https://github.com/${activity.repo.name}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={styles.repoLink}
                            >
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                                <polyline points="15 3 21 3 21 9"/>
                                <line x1="10" y1="14" x2="21" y2="3"/>
                              </svg>
                              View repo
                            </a>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
                {githubActivity.filter(activity => filter === 'all' || activity.type === filter).length > displayCount && (
                  <button 
                    className={styles.loadMoreButton}
                    onClick={() => setDisplayCount(displayCount + 10)}
                  >
                    Load More Activity
                  </button>
                )}
                </>
              ) : (
                <div className={styles.emptyState}>
                  <p>No recent activity found.</p>
                </div>
              )}
            </section>
          </div>
        </div>
      </div>

      {/* Repository Modal */}
      {showRepoModal && (
        <div className={styles.modalOverlay} onClick={() => setShowRepoModal(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2>
                Public Repositories ({githubStats?.public_repos})
              </h2>
              <button 
                className={styles.modalClose}
                onClick={() => setShowRepoModal(false)}
                aria-label="Close modal"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>
            <div className={styles.modalBody}>
              {allRepos
                .filter(repo => !repo.private)
                .length > 0 ? (
                <div className={styles.repoList}>
                  {allRepos
                    .filter(repo => !repo.private)
                    .map(repo => {
                      const commitCount = githubActivity.filter(
                        activity => activity.type === 'PushEvent' && 
                        activity.repo.name === `Chrisocal21/${repo.name}`
                      ).reduce((sum, activity) => sum + (activity.payload.commits?.length || 0), 0)
                      
                      return (
                        <div key={repo.id} className={styles.modalRepoItem}>
                          <div className={styles.modalRepoHeader}>
                            <a 
                              href={repo.html_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={styles.modalRepoName}
                            >
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                              </svg>
                              {repo.name}
                            </a>
                            {commitCount > 0 && (
                              <span className={styles.commitBadge}>
                                {commitCount} commit{commitCount !== 1 ? 's' : ''}
                              </span>
                            )}
                          </div>
                          {repo.description && (
                            <p className={styles.modalRepoDesc}>{repo.description}</p>
                          )}
                          <div className={styles.modalRepoMeta}>
                            {repo.language && (
                              <span className={styles.repoLanguage}>
                                <span className={styles.languageDot}></span>
                                {repo.language}
                              </span>
                            )}
                            {repo.stargazers_count > 0 && (
                              <span className={styles.repoStars}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                                </svg>
                                {repo.stargazers_count}
                              </span>
                            )}
                            <span className={styles.repoUpdated}>Updated {getTimeAgo(repo.updated_at)}</span>
                          </div>
                        </div>
                      )
                    })}
                </div>
              ) : (
                <div className={styles.emptyState}>
                  <p>No public repositories found.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  )
}
