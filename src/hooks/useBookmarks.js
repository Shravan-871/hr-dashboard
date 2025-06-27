import { useBookmarksStore } from '../store/bookmarksStore'

export function useBookmarks() {
  // State
  const bookmarks = useBookmarksStore(state => state.bookmarks)

  // Actions
  const addBookmark = useBookmarksStore(state => state.addBookmark)
  const removeBookmark = useBookmarksStore(state => state.removeBookmark)
  const showAlert = useBookmarksStore(state => state.showAlert)

  // Custom Handlers
  const handleAddBookmark = (user) => {
    addBookmark(user)
    showAlert?.(`${user.firstName} ${user.lastName} has been bookmarked.`)
  }

  const handleRemoveBookmark = (userId) => {
    removeBookmark(userId)
    showAlert?.(`User with ID ${userId} has been removed from bookmarks.`)
  }

  return {
    bookmarks,
    addBookmark,
    removeBookmark,
    showAlert,
    handleAddBookmark,
    handleRemoveBookmark,
  }
}
