'use client'

import { useState } from 'react'
import { generateMultipleDemonNames } from '@/lib/nameGenerator'

export default function GeneratorSection({ initialNames }: { initialNames: string[] }) {
  const [names, setNames] = useState(initialNames)
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerate = () => {
    setIsGenerating(true)
    // Add a small delay to show the animation
    setTimeout(() => {
      setNames(generateMultipleDemonNames(10))
      setIsGenerating(false)
    }, 500)
  }

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="card">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {names.map((name, index) => (
              <div
                key={index}
                className="p-4 bg-gray-800 rounded-lg border border-gray-700 
                         transform transition-all duration-300 hover:scale-105
                         hover:border-purple-500/50"
              >
                <p className="text-xl font-semibold text-center bg-gradient-to-r 
                          from-red-500 to-purple-600 bg-clip-text text-transparent">
                  {name}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGenerating ? (
                <span className="inline-flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Generating...
                </span>
              ) : (
                'Generate New Names'
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
