'use client'

import { useState, useEffect } from 'react'

export default function ThemeToggle() {
  // Track theme state just for UI button text
  const [theme, setTheme] = useState('dark')

  // On mount, sync theme state with document.documentElement
  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark')
    setTheme(isDark ? 'dark' : 'light')
  }, [])

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle('dark')
    setTheme(isDark ? 'dark' : 'light')
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }

  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-1 rounded border text-sm transition-colors duration-300
                 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200
                 hover:bg-gray-300 dark:hover:bg-gray-600"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? '🌞 Light Mode' : '🌙 Dark Mode'}
    </button>
  )
}
