export default function HowToUse() {
  const steps = [
    {
      number: '1',
      title: 'Visit the Generator',
      description: 'Simply load the page to see 10 pre-generated demon names.',
    },
    {
      number: '2',
      title: 'Generate New Names',
      description: 'Click the "Generate New Names" button to create 10 new unique demon names instantly.',
    },
    {
      number: '3',
      title: 'Choose Your Favorite',
      description: 'Browse through the generated names and pick the one that best suits your needs.',
    },
  ]

  return (
    <section id="how-to-use" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title">How to Use</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="card relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-4 pt-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
