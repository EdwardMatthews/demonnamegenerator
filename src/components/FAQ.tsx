export default function FAQ() {
  const faqs = [
    {
      question: 'Are the generated names unique?',
      answer: 'Yes, each set of generated names is unique. While there might be similar elements, the combination ensures uniqueness.',
    },
    {
      question: 'Can I use these names in my creative work?',
      answer: 'Absolutely! The generated names are free to use in any creative work, whether it\'s for writing, gaming, or other creative purposes.',
    },
    {
      question: 'How are the demon names created?',
      answer: 'Names are generated using a combination of carefully selected prefixes, roots, and suffixes inspired by dark fantasy and demonic lore.',
    },
    {
      question: 'Can I generate more than 10 names?',
      answer: 'Currently, the generator provides 10 names at a time. You can click the generate button multiple times to get more options.',
    },
  ]

  return (
    <section id="faq" className="py-16 px-4 bg-gray-900/50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-title">Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="card">
              <h3 className="text-xl font-semibold mb-2 text-purple-400">{faq.question}</h3>
              <p className="text-gray-400">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
