import React from 'react';
// Import PieChart components from recharts
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Define some colors for the chart segments
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF1919'];

function ExpenseChart({ transactions }) {
  // 1. Process the data
  const expenseData = transactions
    .filter(tx => tx.type === 'expense')
    .reduce((acc, tx) => {
      // Group by description (or category, later)
      const key = tx.description; 
      if (!acc[key]) {
        acc[key] = 0;
      }
      acc[key] += tx.amount;
      return acc;
    }, {});

  // 2. Format it for the pie chart
  const pieChartData = Object.keys(expenseData).map((key) => ({
    name: key,
    value: expenseData[key],
  }));

  return (
    <div className="chart-container">
      <h2>Expense Breakdown</h2>
      {pieChartData.length > 0 ? (
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieChartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {pieChartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      ) : (
        <p>No expense data to display.</p>
      )}
    </div>
  );
}
export default ExpenseChart;
