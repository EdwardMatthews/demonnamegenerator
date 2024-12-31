import { Metadata } from 'next'

const baseUrl = 'https://demonnamegenerator.pro'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Demon Name Generator - Create Mysterious Dark Names',
  description: 'Generate unique and mysterious demon names with our powerful name generator. Perfect for creative writing, gaming characters, or dark fantasy storytelling.',
  keywords: ['demon names', 'name generator', 'dark fantasy names', 'evil names', 'mysterious names', 'character names', 'fantasy names'],
  authors: [{ name: 'Demon Name Generator' }],
  creator: 'Demon Name Generator',
  publisher: 'Demon Name Generator',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    title: 'Demon Name Generator',
    description: 'Generate unique and mysterious demon names instantly',
    siteName: 'Demon Name Generator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Demon Name Generator',
    description: 'Generate unique and mysterious demon names instantly',
  },
  alternates: {
    canonical: `${baseUrl}/`,
  },
}
