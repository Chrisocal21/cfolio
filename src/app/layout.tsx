import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ChatWidget from '@/components/ChatWidget'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ChrisOC Digital | Photography & Development',
  description: 'A modern portfolio showcasing photography and tech projects. Built with Next.js, TypeScript, and React.',
  keywords: ['portfolio', 'photography', 'web development', 'next.js', 'react', 'typescript'],
  authors: [{ name: 'ChrisOC Digital' }],
  creator: 'ChrisOC Digital',
  publisher: 'ChrisOC Digital',
  openGraph: {
    title: 'ChrisOC Digital | Photography & Development',
    description: 'A modern portfolio showcasing photography and tech projects.',
    type: 'website',
    locale: 'en_US',
    siteName: 'ChrisOC Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ChrisOC Digital | Photography & Development',
    description: 'A modern portfolio showcasing photography and tech projects.',
    creator: '@yourusername',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={inter.className}>
        {children}
        <ChatWidget />
      </body>
    </html>
  )
}
