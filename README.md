# HR Dashboard

A modern HR management dashboard built with [Next.js](https://nextjs.org), featuring employee analytics, bookmarks, and a clean, responsive UI. Bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

---

## 🚀 Features

- **Employee Directory**: Browse, search, and view detailed employee profiles.
- **Analytics**: Visualize employee data and key HR metrics.
- **Bookmarks**: Save and manage favorite employees for quick access.
- **Tabbed UI**: Organized employee details with a tabbed interface.
- **Theme Toggle**: Switch between light and dark modes.
- **Responsive Design**: Optimized for all devices.
- **Custom Hooks & State Management**: Built with React hooks and Zustand for efficient state handling.
- **Mock Data**: Easily extensible mock data for rapid prototyping.

---

## 🏗️ Project Structure

```
📦 hr-management/
├─ .gitignore                   # Git ignore rules
├─ README.md                    # Project documentation
├─ eslint.config.mjs            # ESLint configuration
├─ jsconfig.json                # JavaScript project config
├─ next.config.mjs              # Next.js configuration
├─ package-lock.json            # NPM lock file
├─ package.json                 # Project dependencies and scripts
├─ postcss.config.mjs           # PostCSS configuration
├─ public/
│  └─ tailwind.css              # Global Tailwind CSS
├─ src/
│  ├─ app/
│  │  ├─ analytics/             # Analytics dashboard
│  │  │  └─ page.js
│  │  ├─ bookmarks/             # Bookmarked employees
│  │  │  └─ page.js
│  │  ├─ employee/
│  │  │  └─ [id]/page.js        # Individual employee profile
│  │  ├─ home/page.js           # Home page with user list
│  │  ├─ layout.js              # Main layout
│  │  ├─ not-found.js           # Custom 404 page
│  │  └─ page.js                # Main entry page
│  ├─ components/
│  │  ├─ Navbar.js              # Top navigation bar
│  │  ├─ RatingStars.js         # Employee rating stars
│  │  ├─ TabbedUI.js            # Tabbed interface for details
│  │  ├─ ThemeToggle.js         # Light/dark mode toggle
│  │  └─ UserCard.js            # Employee card component
│  ├─ hooks/
│  │  └─ useBookmarks.js        # Custom hook for bookmarks
│  ├─ lib/
│  │  ├─ fetchUsers.js          # Fetch users from API/mock
│  │  └─ mockData.js            # Mock data for users
│  ├─ store/
│  │  └─ bookmarksStore.js      # Zustand store for bookmarks
│  └─ styles/
│     └─ tailwind.css           # Tailwind CSS styles
└─ tailwind.config.js           # Tailwind CSS config
```

---

## 🧑‍💻 Code Logic Overview

- **Pages & Routing**: Uses Next.js app directory for file-based routing. Each feature (analytics, bookmarks, employee details) has its own route and page component.
- **Components**: Modular React components for UI elements (Navbar, UserCard, TabbedUI, etc.), promoting reusability and separation of concerns.
- **State Management**: Bookmarks are managed globally using Zustand (`bookmarksStore.js`), while local UI state is handled with React hooks.
- **Data Layer**: Employee data is fetched via `fetchUsers.js` (from API or mock), with `mockData.js` providing sample users, occupations, departments, and ratings.
- **Custom Hooks**: `useBookmarks.js` encapsulates bookmark logic for easy integration across components.
- **Styling**: Tailwind CSS is used for rapid, utility-first styling. Theme switching is handled by `ThemeToggle.js`.
- **Error Handling**: Custom `not-found.js` page for 404 errors.

---

## 🏁 Getting Started

1. **Install dependencies:**
    ```bash
    npm install
    ```

2. **Run the development server:**
    ```bash
    npm run dev
    ```

3. **Open your browser:**
    Visit [http://localhost:3000](http://localhost:3000)

4. **Edit and extend:**
    - Main entry: `src/app/page.js`
    - Add features/components in `src/components/`
    - Update mock data in `src/lib/mockData.js`

---

## 📚 Learnings
- **Next.js App Directory**: Simplifies routing and layout management.
- **Zustand for State Management**: Lightweight and effective for global state.
- **Tailwind CSS**: Rapid styling with utility classes.
- **React Hooks**: Promotes functional components and reusable logic.
- **Modular Architecture**: Enhances maintainability and scalability.
