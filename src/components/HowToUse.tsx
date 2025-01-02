const steps = [
  {
    number: "1",
    title: "Choose Gender for Your Demon Name",
    description: "Start using our Demon Name Generator by selecting your preferred gender option. Choose between male demon names for powerful, commanding characters, or female demon names for elegant yet deadly beings.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  {
    number: "2",
    title: "Generate Your Demon Names",
    description: "Click the 'Generate Names' button and watch as our Demon Name Generator instantly creates multiple unique and powerful demon names. Each generated name is carefully crafted to embody supernatural power and dark mystique.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    number: "3",
    title: "Customize Your Selection",
    description: "Browse through the generated demon names from our Demon Name Generator. Each name comes with unique characteristics perfect for various uses - from gaming characters to story protagonists. Generate new sets as many times as you want.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    )
  },
  {
    number: "4",
    title: "Use Your Demon Names",
    description: "Take your generated demon names and use them freely in your creative projects. Our Demon Name Generator creates unique names perfect for fantasy writing, RPG characters, game development, or any creative endeavor requiring powerful supernatural names.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    )
  }
]

export default function HowToUse() {
  return (
    <section className="py-16 px-4 bg-gray-900/50" id="how-to-use">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
          How to Use Our Demon Name Generator
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center text-purple-400">
                  <span className="text-xl font-bold">{step.number}</span>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-6 h-6 text-purple-400">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-purple-400">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-300 max-w-3xl mx-auto">
            Start creating powerful demon names now with our free Demon Name Generator. Perfect for writers, gamers, and creative minds looking to add supernatural characters to their stories.
          </p>
        </div>
      </div>
    </section>
  )
}
