'use client'

import { useState } from 'react'

export default function FilterDropdown({ users, setFilteredUsers }) {
  const [selectedDept, setSelectedDept] = useState('')
  const [selectedRating, setSelectedRating] = useState('')

  const filter = () => {
    let filtered = [...users]
    if (selectedDept) {
      filtered = filtered.filter(u => u.department === selectedDept)
    }
    if (selectedRating) {
      filtered = filtered.filter(u => u.rating === parseInt(selectedRating))
    }
    setFilteredUsers(filtered)
  }

  return (
    <div className="flex gap-4">
      <select
        value={selectedDept}
        onChange={(e) => { setSelectedDept(e.target.value); filter() }}
        className="p-2 border rounded"
      >
        <option value="">All Departments</option>
        <option>Engineering</option>
        <option>Sales</option>
        <option>HR</option>
        <option>Marketing</option>
        <option>Finance</option>
      </select>

      <select
        value={selectedRating}
        onChange={(e) => { setSelectedRating(e.target.value); filter() }}
        className="p-2 border rounded"
      >
        <option value="">All Ratings</option>
        {[1, 2, 3, 4, 5].map(r => (
          <option key={r} value={r}>{r} Stars</option>
        ))}
      </select>
    </div>
  )
}
