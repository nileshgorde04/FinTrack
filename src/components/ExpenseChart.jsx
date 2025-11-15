import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// NEW: Import our formatter
import { formatCurrency } from '../utils/currencyFormatter';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF1919'];

// NEW: Accept currency prop
function ExpenseChart({ transactions, currency }) {
  // ... (data processing logic is unchanged)
  const expenseData = transactions
    .filter(tx => tx.type === 'expense')
    .reduce((acc, tx) => {
      const key = tx.description; 
      if (!acc[key]) {
        acc[key] = 0;
      }
      acc[key] += tx.amount;
      return acc;
    }, {});
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
            {/* NEW: Add formatter to the tooltip */}
            <Tooltip formatter={(value) => formatCurrency(value, currency)} />
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