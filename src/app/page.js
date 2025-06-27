// app/page.js
'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {fetchUsers} from '../lib/fetchUsers'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const router = useRouter()
  
  const handleLogin = async () => {
    if (email === 'admin' && pass === 'admin') {
      const users = await fetchUsers(100)
      // Assign IDs if needed (e.g., if they don't already have one)
      const usersWithId = users.map((user, index) => ({ id: index + 1, ...user }))
  
      localStorage.setItem('auth', 'true')
      localStorage.setItem('data', JSON.stringify(usersWithId))
  
      router.push('/home')
    } else {
      alert('Invalid credentials')
      setEmail('')
      setPass('')
    }
  }
  // Handle Enter key press for login
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleLogin();
    }
  };
  

  return (
    <div onKeyDown={handleKeyDown} className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-gray-400 p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-4xl text-black font-bold mb-6 text-center">Admin Login</h2>
        <input
          placeholder="Username = admin"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="mb-4 w-full p-2 border rounded text-black bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
        />
        <input
          type="password"
          placeholder="Password = admin"
          value={pass}
          onChange={e => setPass(e.target.value)}
          className="mb-4 w-full p-2 border rounded text-black bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </div>
    </div>
  )
}
