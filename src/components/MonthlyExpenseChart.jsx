import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

function MonthlyExpenseChart({ transactions }) {

  // 1. Process the data
  const processData = () => {
    const monthlyExpenses = transactions
      .filter(tx => tx.type === 'expense') // Only expenses
      .reduce((acc, tx) => {
        // Get month in "YYYY-MM" format
        const month = tx.date.substring(0, 7); // e.g., "2025-10"
        
        if (!acc[month]) {
          acc[month] = 0;
        }
        acc[month] += tx.amount; // Sum expenses for that month
        return acc;
      }, {});

    // 2. Format for the chart
    // Format "YYYY-MM" to "Mon YYYY" for better readability
    const formatMonth = (dateString) => {
      const date = new Date(dateString + '-02'); // Use 2nd day to avoid timezone issues
      return date.toLocaleString('en-US', { month: 'short', year: 'numeric' });
    };

    return Object.keys(monthlyExpenses)
      .map(month => ({
        name: formatMonth(month),
        Expense: monthlyExpenses[month],
      }))
      .sort((a, b) => new Date(a.name) - new Date(b.name)); // Sort by date
  };

  const chartData = processData();

  return (
    <div className="chart-container" style={{ marginTop: '30px' }}>
      <h2>Monthly Expense Trends</h2>
      {chartData.length > 0 ? (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={chartData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Expense" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <p>Not enough data for monthly trend chart.</p>
      )}
    </div>
  );
}

export default MonthlyExpenseChart;