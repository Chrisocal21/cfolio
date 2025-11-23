import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ChrisOC Studios | Photography & Development',
  description: 'A modern portfolio showcasing photography and tech projects. Built with Next.js, TypeScript, and React.',
  keywords: ['portfolio', 'photography', 'web development', 'next.js', 'react', 'typescript'],
  authors: [{ name: 'ChrisOC Studios' }],
  openGraph: {
    title: 'ChrisOC Studios | Photography & Development',
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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
