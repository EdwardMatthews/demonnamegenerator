import Link from 'next/link'
import Image from 'next/image'
import Logo from './Logo'

export default function Header() {
  return (
    <header className="py-6 px-4 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Logo className="w-10 h-10 text-purple-500" />
          <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
            Demon Name Generator
          </span>
        </div>

        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="#features" className="text-gray-300 hover:text-purple-400 transition-colors">
                Features
              </Link>
            </li>
            <li>
              <Link href="#how-to-use" className="text-gray-300 hover:text-purple-400 transition-colors">
                How to Use
              </Link>
            </li>
            <li>
              <Link href="#faq" className="text-gray-300 hover:text-purple-400 transition-colors">
                FAQ
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
