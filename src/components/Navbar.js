'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import { useRouter } from 'next/navigation'

export default function Navbar({ users, onSearchChange, query, handleUserRefresh, department, onDepartmentChange }) {
  const router = useRouter()

  const doLogout = () => {
    localStorage.removeItem('auth')
    router.push('/')
  }

  return (
    <header className="bg-gradient-to-r bg-white/60 shadow-lg p-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        
        {/* Logo */}
        <div className="flex justify-between items-center">
          <button
            onClick={() => window.location.href = '/home'}
            className="text-3xl font-bold text-blue-700 dark:text-blue-300 bg-white/80 dark:bg-gray-900 rounded-lg px-4 py-2 shadow hover:bg-blue-100 hover:text-blue-900 transition"
          >
            💼 HR Dashboard
          </button>
        </div>

        {/* Search bar */}
        <div className="w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search by name, email, or department...."
            value={query}
            onChange={e => onSearchChange(e.target.value)}
            className="w-5/6 px-3 py-2 border rounded text-black bg-white/80 dark:text-white dark:bg-gray-800 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          />
          <select
            onChange={e => onDepartmentChange(e.target.value)}
            className="w-1/6 px-3 py-2 border rounded text-black bg-white/80 dark:text-white dark:bg-gray-800 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          >
            <option value="">All Departments</option>
            {[...new Set(users.map(user => user.department))]  // Unique departments
              .filter(Boolean)  // Avoid empty departments
              .map(dept => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
          </select>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-end gap-2 md:gap-4 text-sm">
          <Link
            href="/home" 
            onClick={() => setTimeout(location.reload.bind(location), 500)}
            className=" bg-white/80 dark:bg-gray-800 rounded-lg px-4 py-2 font-semibold text-blue-700 dark:text-blue-300 shadow hover:bg-blue-100 hover:text-blue-900 transition"
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
          <ThemeToggle />
          <button
            onClick={doLogout}
            className="bg-white/80 dark:bg-gray-800 rounded-lg px-4 py-2 font-semibold text-gray-700 dark:text-gray-300 shadow hover:bg-gray-100 hover:text-gray-900 transition"
          >
            Logout
          </button>
          <button onClick={handleUserRefresh} className="bg-white/80 dark:bg-gray-800 rounded-lg px-4 py-2 font-semibold text-gray-700 dark:text-gray-300 shadow hover:bg-gray-100 hover:text-gray-900 transition">
            User Refresh {users.length}
        </button>
        </nav>
      </div>
    </header>
  )
}
