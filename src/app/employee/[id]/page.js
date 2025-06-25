'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import TabbedUI from '../../../components/TabbedUI'

export default function EmployeePage() {
  const { id } = useParams()
  const [user, setUser] = useState(null)

  useEffect(() => {
    async function fetchUser() {
      const res = await fetch(`https://dummyjson.com/users/${id}`)
      const data = await res.json()
      data.department = 'Engineering'
      data.rating = Math.floor(Math.random() * 5) + 1
      setUser(data)
    }
    fetchUser()
  }, [id])

  if (!user) return <p>Loading...</p>

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">{user.firstName} {user.lastName}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Department: {user.department}</p>
      <p>Bio: Passionate and detail-oriented team player.</p>
      <TabbedUI userId={id} />
    </div>
  )
}
