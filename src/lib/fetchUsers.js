export async function fetchUsersWithMockData() {
    const res = await fetch('https://dummyjson.com/users?limit=20')
    const data = await res.json()
  
    return data.users.map(user => ({
      ...user,
      department: getRandomDepartment(),
      rating: Math.floor(Math.random() * 5) + 1,
    }))
  }
  
  function getRandomDepartment() {
    const departments = ['Engineering', 'Sales', 'HR', 'Marketing', 'Finance']
    return departments[Math.floor(Math.random() * departments.length)]
  }
  