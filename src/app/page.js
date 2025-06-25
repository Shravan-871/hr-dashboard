'use client'
import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import UserCard from '../components/UserCard'

export default function Home() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=12')
      .then(res => res.json())
      .then(data => {
        const enhanced = data.results.map((user, i) => ({
          id: i + 1,
          fullName: `${user.name.first} ${user.name.last}`,
          email: user.email,
          age: user.dob.age,
          image: user.picture.medium,
          department: ['Engineering', 'Sales', 'HR', 'Marketing'][i % 4],
          rating: Math.floor(Math.random() * 5) + 1,
        }))
        setUsers(enhanced)
      })
  }, [])

  return (
    <div>
      <Navbar />
      <div className="p-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {users.map(user => (
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
