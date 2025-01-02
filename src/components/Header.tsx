import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 relative">
              <Image
                src="/demon-logo.svg"
                alt="Demon Name Generator Logo"
                width={40}
                height={40}
                className="w-full h-full"
                priority
              />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
              Demon Name Generator
            </span>
          </Link>
          <div className="flex gap-6">
            <Link href="#features" className="text-gray-300 hover:text-white transition-colors">Features</Link>
            <Link href="#how-to-use" className="text-gray-300 hover:text-white transition-colors">How to Use</Link>
            <Link href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
