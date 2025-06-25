import ThemeToggle from '../components/ThemeToggle'
import Sidebar from '../components/Sidebar'
import '../styles/globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="flex justify-end mb-4">
            <ThemeToggle />
          </div>
          {children}
        </main>
      </body>
    </html>
  )
}
export const metadata = {
  title: 'HR Dashboard',
  description: 'A simple HR dashboard with employee management features',
}