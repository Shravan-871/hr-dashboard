export default function Button({ children, onClick }) {
    return (
      <button
        onClick={onClick}
        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
      >
        {children}
      </button>
    )
  }
  