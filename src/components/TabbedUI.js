'use client'

import { useState } from 'react'

export default function TabbedUI({ userId }) {
  const [activeTab, setActiveTab] = useState('Overview')

  return (
    <div className="mt-4">
      <div className="flex space-x-4 border-b">
        {['Overview', 'Projects', 'Feedback'].map(tab => (
          <button
            key={tab}
            className={`px-4 py-2 ${activeTab === tab ? 'border-b-2 border-blue-500 font-semibold' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-4">
        {activeTab === 'Overview' && <p>Employee overview with performance rating and stats.</p>}
        {activeTab === 'Projects' && <p>List of past and current projects (mocked).</p>}
        {activeTab === 'Feedback' && <p>Employee feedback form or history (mocked).</p>}
      </div>
    </div>
  )
}
