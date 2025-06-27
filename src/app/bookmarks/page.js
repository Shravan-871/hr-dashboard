'use client'

import { useBookmarks } from '../../hooks/useBookmarks'
import UserCard from '../../components/UserCard'

export default function BookmarksPage() {
  const { bookmarks,  handleRemoveBookmark } = useBookmarks()

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Bookmarked Employees</h2>
      {bookmarks.length === 0 ? (
        <p>No bookmarks yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {bookmarks.map(user => (
            <UserCard
              key={user.id}
              user={user}
              onBookmark={() => handleRemoveBookmark(user.id)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
