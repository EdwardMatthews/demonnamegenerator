import type { Metadata } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://demonnamegenerator.pro'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Demon Name Generator | Create Unique Evil & Mythical Names',
  description: 'Free Demon Name Generator for creating powerful, mythical names. Generate male & female demon names inspired by ancient mythology, folklore, and dark fantasy. Perfect for writers, gamers, and storytellers seeking unique character names with supernatural flair.',
  keywords: [
    'demon name generator',
    'demon names',
    'evil names',
    'mythical names',
    'fantasy character names',
    'supernatural names',
    'dark fantasy names',
    'male demon names',
    'female demon names',
    'mythology names',
    'character generator',
    'name creator'
  ],
  authors: [{ name: 'Demon Name Generator' }],
  creator: 'Demon Name Generator',
  publisher: 'Demon Name Generator',
  openGraph: {
    type: 'website',
    title: 'Demon Name Generator | Create Unique Evil & Mythical Names',
    description: 'Generate powerful demon names inspired by mythology and dark fantasy. Free tool with male & female options for your characters, stories, and games.',
    url: baseUrl,
    siteName: 'Demon Name Generator',
    images: [
      {
        url: `${baseUrl}/demon-logo.svg`,
        width: 512,
        height: 512,
        alt: 'Demon Name Generator Logo'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Demon Name Generator | Create Evil & Mythical Names',
    description: 'Generate powerful demon names inspired by mythology and dark fantasy. Free tool with male & female options.',
    images: [`${baseUrl}/demon-logo.svg`]
  },
  alternates: {
    canonical: `${baseUrl}/`, // Set the canonical URL to the baseUrl
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  icons: {
    icon: '/favicon.ico',
  }
}
