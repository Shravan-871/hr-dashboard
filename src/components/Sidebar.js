'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/', label: 'Dashboard' },
  { href: '/bookmarks', label: 'Bookmarks' },
  { href: '/analytics', label: 'Analytics' },
  { href: '/login', label: 'Login' }
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="min-h-screen w-64 bg-gray-100 dark:bg-gray-900 p-4">
      <h1 className="text-2xl font-bold mb-6">HR Dashboard</h1>
      <nav className="space-y-2">
        {navItems.map(({ href, label }) => (
          <Link key={href} href={href}>
            <div
              className={`p-2 rounded hover:bg-blue-100 dark:hover:bg-blue-800 cursor-pointer ${
                pathname === href ? 'bg-blue-200 dark:bg-blue-700 font-semibold' : ''
              }`}
            >
              {label}
            </div>
          </Link>
        ))}
      </nav>
    </aside>
  )
}
