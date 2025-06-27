import '../styles/tailwind.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem('theme');
                  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                }
              })();
            `,
          }}
        />
      </head>
      <body className="bg-background text-foreground">
        <main className="flex-1 p-0">
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