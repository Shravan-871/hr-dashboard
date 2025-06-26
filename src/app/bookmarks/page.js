'use client'

import { useBookmarks } from '../../hooks/useBookmarks'
import UserCard from '../../components/UserCard'
import '../../../public/tailwind.css'  

export default function BookmarksPage() {
  const { bookmarks, removeBookmark } = useBookmarks()

  return (
    <div className="p-4">
            {/* <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script> */}
      <h2 className="text-2xl font-bold mb-4">Bookmarked Employees</h2>
      {bookmarks.length === 0 ? (
        <p>No bookmarks yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {bookmarks.map(user => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  )
}
