'use client'

import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function AnalyticsPage() {
  const data = {
    labels: ['Engineering', 'Sales', 'HR', 'Marketing', 'Finance'],
    datasets: [
      {
        label: 'Avg Rating',
        data: [4.2, 3.8, 4.0, 3.5, 4.5],
        backgroundColor: 'rgba(59, 130, 246, 0.6)'
      }
    ]
  }

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Department-wise Performance' }
    }
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Analytics</h2>
      <Bar data={data} options={options} />
    </div>
  )
}
