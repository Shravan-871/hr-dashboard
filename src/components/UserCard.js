'use client'
import { FaStar } from 'react-icons/fa'
import Button from './Button'

export default function UserCard({ user, onBookmark, onPromote }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded p-4 flex flex-col items-start gap-2 transition hover:shadow-lg">
      <div className="flex items-center gap-4">
        <img src={user.image} alt={user.fullName} className="w-16 h-16 rounded-full border" />
        <div>
          <h2 className="text-lg font-semibold">{user.fullName}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">{user.email}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Age: {user.age} | Dept: {user.department}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={`h-4 w-4 ${i < user.rating ? 'text-yellow-400' : 'text-gray-300'}`}
          />
        ))}
      </div>

      <div className="flex gap-2 mt-2">
        <Button onClick={() => window.location.href = `/employee/${user.id}`}>View</Button>
        <Button onClick={() => onBookmark(user)}>Bookmark</Button>
        <Button onClick={() => onPromote(user)}>Promote</Button>
      </div>
    </div>
  )
}

