'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import TabbedUI from '../../../components/TabbedUI'
import ThemeToggle from '../../../components/ThemeToggle'

export default function EmployeePage() {
  const { id } = useParams()
  const [user, setUser] = useState(null)

  useEffect(() => {
    async function fetchUser() {
      const stored = localStorage.getItem('data')
      if (stored) {
        console.log('Using localStorage data')
        const users = JSON.parse(stored)
        const foundUser = users.find(user => user.id === parseInt(id))
        setUser(foundUser)
      } else {
        console.log('Fetching data from API')
        // Fallback if localStorage is empty
        const response = filteredUsers.find(user => user.id === parseInt(id))
        if (response) {
          setUser(response)
        }
      }
    }
    fetchUser()
  }, [id])

  if (!user) return <p>Loading...</p>

  return (

    <div className="min-h-screen ">
      <button className="flex justify-end p-4">
        {/* ThemeToggle should be implemented separately */}
        <button
          onClick={() => window.history.back()}
          className="px-3 py-1 ml-4 mr-10 text-1xl rounded border  transition-colors duration-300
                      bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200
                     hover:bg-gray-300 dark:hover:bg-gray-600">Back</button>
        <ThemeToggle class="px-3 py-1 ml-4 " />
      </button>
      <div className="flex justify-center gap-8 mt-8 px-6 pb-16">
        {/* Left container */}
        <div className="w-1/2 rounded-2xl shadow-2xl p-8 backdrop-blur-md transition-all duration-700 bg-white/90 dark:bg-gray-900/80">
          <div className="flex flex-col items-center text-center">
            <div className="relative">
              <img
                className="w-32 h-32 mb-4 rounded-full shadow-lg object-cover border-4 border-white dark:border-gray-700 transition-all duration-500"
                src={user.image}
                alt={user.fullName}
              />
              <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
            </div>
            <h2 className="text-2xl font-extrabold text-gray-800 dark:text-gray-100 mb-1 transition-colors duration-500">{user.fullName}</h2>
            <p className="text-gray-500 dark:text-gray-300 mb-2">{user.department}</p>
            <div className="flex flex-col items-center gap-1 mb-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-medium">Email:</span> {user.email}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-medium">Phone:</span> {user.phone}
              </p>
            </div>
            <p className="italic text-gray-700 dark:text-gray-300 mb-6 text-center">
              Bio: Enthusiastic and results-driven professional with a passion for technology and innovation. Committed to continuous learning and team collaboration to achieve organizational goals.
            </p>
          </div>
        </div>

        {/* Right container */}
        <div className="w-1/2 rounded-2xl shadow-2xl p-8 backdrop-blur-md transition-all duration-700 bg-white/90 dark:bg-gray-900/80">
          <div className="mt-6">
            <TabbedUI userId={id} />
          </div>
        </div>
      </div>
    </div>
  )
}
