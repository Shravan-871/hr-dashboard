import { useBookmarksStore } from '../store/bookmarksStore'

export function useBookmarks() {
  const bookmarks = useBookmarksStore(state => state.bookmarks)
  const addBookmark = useBookmarksStore(state => state.addBookmark)
  const removeBookmark = useBookmarksStore(state => state.removeBookmark)

  return { bookmarks, addBookmark, removeBookmark }
}
