import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MY_PORTFOLIO | Photography & Development',
  description: 'A modern portfolio showcasing photography and tech projects. Built with Next.js, TypeScript, and React.',
  keywords: ['portfolio', 'photography', 'web development', 'next.js', 'react', 'typescript'],
  authors: [{ name: 'MY_PORTFOLIO' }],
  openGraph: {
    title: 'MY_PORTFOLIO | Photography & Development',
    description: 'A modern portfolio showcasing photography and tech projects.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
