import { generateMultipleDemonNames } from '@/lib/nameGenerator'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Features from '@/components/Features'
import HowToUse from '@/components/HowToUse'
import FAQ from '@/components/FAQ'
import GeneratorSection from '@/components/GeneratorSection'

export default function Home() {
  // Generate initial names on the server
  const initialNames = generateMultipleDemonNames({ count: 10 })
  
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Main content with padding for fixed header */}
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center bg-[url('/images/dark-pattern.png')] bg-cover bg-center">
          <h1 className="text-5xl font-bold mb-6 animate-float bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
            Demon Name Generator
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
            Unleash your dark creativity with our mystical name generator.
            Create unique and powerful demon names for your characters, stories, or games.
          </p>
        </section>

        {/* Generator Section */}
        <GeneratorSection initialNames={initialNames} />

        {/* Features Section */}
        <Features />

        {/* How to Use Section */}
        <HowToUse />

        {/* FAQ Section */}
        <FAQ />
      </div>

      <Footer />
    </main>
  )
}
