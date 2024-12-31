import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 animate-float bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
          404
        </h1>
        <h2 className="text-2xl font-semibold mb-4 text-gray-300">
          Page Not Found
        </h2>
        <p className="text-gray-400 mb-8">
          The page you're looking for has been banished to the void.
        </p>
        <Link 
          href="/"
          className="btn-primary inline-block"
        >
          Return to Home
        </Link>
      </div>
    </div>
  )
}
