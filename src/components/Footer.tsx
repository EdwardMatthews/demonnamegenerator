export default function Footer() {
  const usefulLinks = [
    {
      title: 'Kingdom Name Generator',
      url: 'https://kingdomnamegenerator.pro/',
      description: 'Generate names for all your fantasy kingdoms'
    },
    {
      title: 'Harry Potter Name Generator',
      url: 'https://harrypotternamegenerator.pro/',
      description: 'Generate names for all your fantasy kingdoms'
    },
    {
      title: 'Wu Tang Name Generator',
      url: 'https://wutangnamegenerator.pro/',
      description: 'Generate names for all your fantasy kingdoms'
    },
    {
      title: 'Iframe Generator',
      url: 'https://www.iframegenerator.pro/',
      description: 'Generate responsive iframe embeds'
    },
    {
      title: 'DDS to PNG',
      url: 'https://www.ddstopng.pro/',
      description: 'Convert DDS textures to PNG format'
    },
    {
      title: 'WebP to PDF',
      url: 'https://webptopdf.com/',
      description: 'Convert WebP images to PDF format'
    },
    {
      title: 'PDF to Markdown',
      url: 'https://www.google.com/url?q=https%3A%2F%2Fpdftomarkdown.pro%2F',
      description: 'Convert PDF files to Markdown format'
    },
    {
      title: 'HackerNews',
      url: 'https://news.ycombinator.com/item?id=43527452',
      description: 'What are you working on?'
    },
    {
      title: 'Reddit',
      url: 'https://www.reddit.com/r/ObsidianMD/comments/1jkmdx9/tool_to_convert_pdf_to_markdown_and_keep_all_the/',
      description: 'Tool to convert PDF to Markdown and keep all the formatting'
    },
    {
      title: 'Zhihu',
      url: 'https://link.zhihu.com/?target=https%3A%2F%2Fpdftomarkdown.pro/',
      description: 'Tool to convert PDF to Markdown and keep all the formatting'
    },
    {
      title: 'Notion',
      url: 'https://dramatic-tulip-5f3.notion.site/Stop-Fighting-PDFs-Convert-to-Clean-Markdown-Effortlessly-Online-1c76e599062b80789ac5cd21ff9e4cf9',
      description: 'Tool to convert PDF to Markdown and keep all the formatting'
    },
    {
      title: 'Docs',
      url: 'https://matthewss-organization.gitbook.io/pdftomarkdown',
      description: 'Tool to convert PDF to Markdown and keep all the formatting'
    }
  ]

  return (
    <footer className="bg-gray-900/80 border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-purple-400">About Demon Name Generator</h3>
            <p className="text-gray-400">
              A powerful tool for creating unique and mysterious demon names. Perfect for writers,
              game masters, and creative minds seeking dark inspiration.
            </p>
          </div>

          {/* Useful Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-purple-400">Useful Tools</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {usefulLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300">
                    <h4 className="font-medium text-white group-hover:text-purple-400 transition-colors">
                      {link.title}
                    </h4>
                    <p className="text-sm text-gray-400 mt-1">
                      {link.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center pt-8 border-t border-gray-800">
          <p className="text-gray-400">
            {new Date().getFullYear()} Demon Name Generator. All rights reserved.
          </p>
          <p className="text-gray-500 mt-2 text-sm">
            Unleash your dark creativity with our demon name generator.
          </p>
        </div>
      </div>
    </footer>
  )
}
