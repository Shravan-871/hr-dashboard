'use client'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">💼 HR Dashboard</h1>
      <nav className="space-x-4 text-sm">
        <Link href="/" className="hover:text-blue-500">Home</Link>
        <Link href="/bookmarks" className="hover:text-blue-500">Bookmarks</Link>
        <Link href="/analytics" className="hover:text-blue-500">Analytics</Link>
        <Link href="/login" className="hover:text-blue-500">Login</Link>
      </nav>
      <ThemeToggle />
    </header>
  )
}
