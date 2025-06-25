'use client'

import { useState } from 'react'

export default function SearchBar({ users, setFilteredUsers }) {
  const [query, setQuery] = useState('')

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase()
    setQuery(value)

    const filtered = users.filter(user =>
      user.firstName.toLowerCase().includes(value) ||
      user.lastName.toLowerCase().includes(value) ||
      user.email.toLowerCase().includes(value) ||
      user.department.toLowerCase().includes(value)
    )
    setFilteredUsers(filtered)
  }

  return (
    <input
      type="text"
      placeholder="Search by name, email, or department..."
      value={query}
      onChange={handleSearch}
      className="w-full p-2 border border-gray-300 rounded"
    />
  )
}
