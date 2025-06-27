'use client'
import { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import UserCard from '../../components/UserCard'
import { fetchUsers } from '../../lib/fetchUsers'
import { useBookmarks } from '../../hooks/useBookmarks'

export default function Home() {
  const [users, setUsers] = useState([])
  const [filteredUsers, setFilteredUsers] = useState([])
  const [query, setQuery] = useState('')
  const [department, setDepartment] = useState('')
  const { handleAddBookmark } = useBookmarks()

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
    filterUsers(value, department)
  }

  const handleDepartmentChange = (value) => {
    setDepartment(value)
    filterUsers(query, value)
  }

  // Search and filter by department
  const filterUsers = (searchQuery, dept) => {
    const lowerQuery = searchQuery.toLowerCase()
    const filtered = users.filter(user => {
      const matchesSearch =
        user.firstName?.toLowerCase().includes(lowerQuery) ||
        user.lastName?.toLowerCase().includes(lowerQuery) ||
        user.email?.toLowerCase().includes(lowerQuery) ||
        user.department?.toLowerCase().includes(lowerQuery)
      const matchesDepartment = dept ? user.department === dept : true

      return matchesSearch && matchesDepartment
    })
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
      <Navbar
        users={users}
        query={query}
        onSearchChange={handleSearch}
        department={department}
        onDepartmentChange={handleDepartmentChange}
        handleUserRefresh={handleUserRefresh}
      />
      <div className="flex justify-end">

      </div>

      <div className="p-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredUsers.map(user => (
          <UserCard
            key={user.id}
            user={user}
            onBookmark={() => handleAddBookmark(user)}
            onPromote={() => console.log('Promote', user)}
          />
        ))}
      </div>
    </div>
  )
}