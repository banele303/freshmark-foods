'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const financialData = [
  { year: 2022, revenue: 7.946, netIncome: 0.492 },
  { year: 2021, revenue: 6.894, netIncome: 0.427 },
  { year: 2020, revenue: 5.987, netIncome: 0.348 },
  { year: 2019, revenue: 6.209, netIncome: 0.413 },
]

const InvestorRelations = () => {
  const [selectedYear, setSelectedYear] = useState(null)

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Investor Relations</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-3 px-4 text-left">Year</th>
                <th className="py-3 px-4 text-left">Revenue (Billion USD)</th>
                <th className="py-3 px-4 text-left">Net Income (Billion USD)</th>
              </tr>
            </thead>
            <tbody>
              {financialData.map((data, index) => (
                <motion.tr
                  key={data.year}
                  className="cursor-pointer"
                  whileHover={{ backgroundColor: '#f0f0f0' }}
                  onClick={() => setSelectedYear(selectedYear === index ? null : index)}
                >
                  <td className="py-3 px-4">{data.year}</td>
                  <td className="py-3 px-4">${data.revenue.toFixed(3)}</td>
                  <td className="py-3 px-4">${data.netIncome.toFixed(3)}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        {selectedYear !== null && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 p-6 bg-white rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-4">
              {financialData[selectedYear].year} Financial Highlights
            </h3>
            <p className="text-gray-600 mb-2">
              Revenue: ${financialData[selectedYear].revenue.toFixed(3)} Billion
            </p>
            <p className="text-gray-600 mb-4">
              Net Income: ${financialData[selectedYear].netIncome.toFixed(3)} Billion
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
              Download Annual Report
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default InvestorRelations

