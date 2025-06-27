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


// 'use client'

// import { useState } from 'react'

// export default function TabbedUI({ userId }) {
//   const [activeTab, setActiveTab] = useState('Overview')

//   // Simple mock data
//   const employeeOverview = {
//     name: 'Ananya Patel',
//     role: 'Frontend Developer',
//     rating: 4.6,
//     stats: {
//       projectsCompleted: 12,
//       yearsAtCompany: 2,
//       attendance: '96%',
//     },
//   }

//   const employeeProjects = [
//     { id: 1, name: 'Company Website Revamp', status: 'Completed', duration: '3 months' },
//     { id: 2, name: 'Internal Tool Migration', status: 'Ongoing', duration: '2 months' },
//     { id: 3, name: 'Accessibility Audit', status: 'Planned', duration: '1 month' },
//   ]

//   const feedbackHistory = [
//     { id: 1, date: '2024-10-12', feedback: 'Consistently meets deadlines and writes clean code.' },
//     { id: 2, date: '2025-01-20', feedback: 'Great team collaboration, proactive with UI suggestions.' },
//     { id: 3, date: '2025-05-02', feedback: 'Needs improvement in cross-browser testing.' },
//   ]

//   return (
//     <div className="mt-4 p-4 bg-white shadow rounded-md max-w-2xl mx-auto">
//       <div className="flex space-x-4 border-b mb-4">
//         {['Overview', 'Projects', 'Feedback'].map(tab => (
//           <button
//             key={tab}
//             className={`px-4 py-2 transition ${
//               activeTab === tab ? 'border-b-2 border-blue-500 font-semibold' : 'text-gray-500'
//             }`}
//             onClick={() => setActiveTab(tab)}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       <div className="mt-4">
//         {activeTab === 'Overview' && (
//           <div>
//             <p className="text-lg font-medium">Name: {employeeOverview.name}</p>
//             <p>Role: {employeeOverview.role}</p>
//             <p>Performance Rating: {employeeOverview.rating} / 5</p>
//             <div className="mt-2 space-y-1">
//               <p>Projects Completed: {employeeOverview.stats.projectsCompleted}</p>
//               <p>Years at Company: {employeeOverview.stats.yearsAtCompany}</p>
//               <p>Attendance Rate: {employeeOverview.stats.attendance}</p>
//             </div>
//           </div>
//         )}

//         {activeTab === 'Projects' && (
//           <ul className="space-y-2">
//             {employeeProjects.map(project => (
//               <li key={project.id} className="border p-2 rounded">
//                 <p className="font-semibold">{project.name}</p>
//                 <p>Status: {project.status}</p>
//                 <p>Duration: {project.duration}</p>
//               </li>
//             ))}
//           </ul>
//         )}

//         {activeTab === 'Feedback' && (
//           <ul className="space-y-3">
//             {feedbackHistory.map(entry => (
//               <li key={entry.id} className="border-l-4 border-blue-400 pl-3">
//                 <p className="text-sm text-gray-600">{entry.date}</p>
//                 <p>{entry.feedback}</p>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   )
// }
