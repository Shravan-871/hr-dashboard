'use client'

import { useState } from 'react'
import { mockOverview, mockProjects, mockFeedback } from '../lib/mockData'

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
        {activeTab === 'Overview' && (
          <div className="space-y-2">
            <p>{mockOverview[Math.floor(Math.random() * mockOverview.length)].paragraph}</p>
          </div>
        )}

        {activeTab === 'Projects' && (
          <ul className="list-disc pl-5 space-y-2">
            {mockProjects.slice(0, 3).map((proj, idx) => (
              <li key={idx}>
                <p><strong>{proj.name}</strong></p>
                <p>{proj.description}</p>
                <p><em>Status:</em> {proj.status}</p>
                <p><em>Impact:</em> {proj.impact}</p>
              </li>
            ))}
          </ul>
        )}

        {activeTab === 'Feedback' && (
          <ul className="list-disc pl-5 space-y-2">
            {mockFeedback.slice(0, 3).map((item, idx) => (
              <li key={idx}>
                <p><strong>{item.reviewer}:</strong> "{item.comment}"</p>
                <p>Rating: {item.rating}/5</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
