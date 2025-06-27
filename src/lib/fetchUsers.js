import { useEffect } from 'react'

export async function fetchUsers(count) {
    const res = await fetch(`https://randomuser.me/api/?results=${count}`)
    const data = await res.json()

    if (!res.ok) {
      throw new Error('Failed to fetch users') 
    }
    const enhanced = data.results.map((user, i) => ({
      id: i + 1,
      fullName: `${user.name.first} ${user.name.last}`,
      email: user.email,
      age: user.dob.age,
      image: user.picture.large,
      department: ['Engineering', 'Sales', 'HR', 'Marketing'][i % 4],
      rating: Math.floor(Math.random() * 5) + 1,
      phone: user.phone,
      address: `${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}, ${user.location.postcode}`,
    }))
    return enhanced
  }
