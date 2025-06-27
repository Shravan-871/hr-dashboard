'use client'
import { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import UserCard from '../../components/UserCard'
import { fetchUsers } from '../../lib/fetchUsers'

export default function Home() {
  const [users, setUsers] = useState([])
  const [filteredUsers, setFilteredUsers] = useState([])
  const [query, setQuery] = useState('')

  useEffect(() => {
    const stored = localStorage.getItem('data')
    if (stored) {
      const parsed = JSON.parse(stored)
      setUsers(parsed)
      setFilteredUsers(parsed)
    } else {
      fetchUsers(100).then(fetched => {
        const withId = fetched.map((user, index) => ({ id: index + 1, ...user }))
        setUsers(withId)
        setFilteredUsers(withId)
        localStorage.removeItem('data')
        localStorage.setItem('data', JSON.stringify(withId))
      })
    }
  }, [])

  const handleSearch = (value) => {
    setQuery(value)
    const lower = value.toLowerCase()
    const filtered = users.filter(user =>
      user.firstName?.toLowerCase().includes(lower) ||
      user.lastName?.toLowerCase().includes(lower) ||
      user.email?.toLowerCase().includes(lower) ||
      user.department?.toLowerCase().includes(lower)
    )
    setFilteredUsers(filtered)
  }

  // if User wants differ user data, they can click the button to refresh
  const handleUserRefresh = () => {
    fetchUsers(100).then(fetched => {
      const withId = fetched.map((user, index) => ({ id: index + 1, ...user }))
      setUsers(withId)
      setFilteredUsers(withId)
      localStorage.removeItem('data')
      localStorage.setItem('data', JSON.stringify(withId))
    })
  }

  return (
    <div>
      <Navbar users={users} query={query} onSearchChange={handleSearch} onUserChange={handleUserRefresh} />
      <div className="flex justify-end">

      </div>

      <div className="p-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredUsers.map(user => (
          <UserCard
            key={user.id}
            user={user}
            onBookmark={() => console.log('Bookmark', user)}
            onPromote={() => console.log('Promote', user)}
          />
        ))}
      </div>
    </div>
  )
}