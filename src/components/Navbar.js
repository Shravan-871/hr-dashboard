'use client'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  return (
    <header className="bg-gradient-to-r bg-white/60 shadow-lg p-4 flex justify-between items-center">
      <button onClick={() => window.location.href = '/'} className="flex items-center space-x-2">
      <h1 className="text-xl font-boldbg-white/80 dark:bg-gray-800 rounded-lg px-4 py-2 font-semibold text-blue-700 dark:text-blue-300 shadow hover:bg-blue-100 hover:text-blue-900 transition">💼 HR Dashboard</h1>
      </button>
      <nav className="flex space-x-4 text-sm">
        <Link
          href="/"
          className="bg-white/80 dark:bg-gray-800 rounded-lg px-4 py-2 font-semibold text-blue-700 dark:text-blue-300 shadow hover:bg-blue-100 hover:text-blue-900 transition"
        >
          Home
        </Link>
        <Link
          href="/bookmarks"
          className="bg-white/80 dark:bg-gray-800 rounded-lg px-4 py-2 font-semibold text-purple-700 dark:text-purple-300 shadow hover:bg-purple-100 hover:text-purple-900 transition"
        >
          Bookmarks
        </Link>
        <Link
          href="/analytics"
          className="bg-white/80 dark:bg-gray-800 rounded-lg px-4 py-2 font-semibold text-pink-700 dark:text-pink-300 shadow hover:bg-pink-100 hover:text-pink-900 transition"
        >
          Analytics
        </Link>
        <Link
          href="/login"
          className="bg-white/80 dark:bg-gray-800 rounded-lg px-4 py-2 font-semibold text-gray-700 dark:text-gray-300 shadow hover:bg-gray-100 hover:text-gray-900 transition"
        >
          Login
        </Link>
      </nav>
      <ThemeToggle />
    </header>
  )
}
