import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';
// NEW: Import our formatter
import { formatCurrency } from '../utils/currencyFormatter';

// NEW: Accept currency prop
function MonthlyExpenseChart({ transactions, currency }) {

  // ... (processData logic is unchanged)
  const processData = () => {
    const monthlyExpenses = transactions
      .filter(tx => tx.type === 'expense')
      .reduce((acc, tx) => {
        const month = tx.date.substring(0, 7);
        if (!acc[month]) {
          acc[month] = 0;
        }
        acc[month] += tx.amount;
        return acc;
      }, {});

    const formatMonth = (dateString) => {
      const date = new Date(dateString + '-02');
      return date.toLocaleString('en-US', { month: 'short', year: 'numeric' });
    };

    return Object.keys(monthlyExpenses)
      .map(month => ({
        name: formatMonth(month),
        Expense: monthlyExpenses[month],
      }))
      .sort((a, b) => new Date(a.name) - new Date(b.name));
  };
  const chartData = processData();

  // NEW: A simple formatter for the Y-Axis
  const yAxisFormatter = (value) => {
    const convertedValue = value * currency.rate;
    if (convertedValue >= 1000000) {
      return `${currency.symbol}${(convertedValue / 1000000).toFixed(0)}M`;
    }
    if (convertedValue >= 1000) {
      return `${currency.symbol}${(convertedValue / 1000).toFixed(0)}k`;
    }
    return `${currency.symbol}${convertedValue.toFixed(0)}`;
  };

  return (
    <div className="chart-container" style={{ marginTop: '30px' }}>
      <h2>Monthly Expense Trends</h2>
      {chartData.length > 0 ? (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5, }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            {/* NEW: Use the Y-axis formatter */}
            <YAxis tickFormatter={yAxisFormatter} />
            {/* NEW: Use the currency formatter for the tooltip */}
            <Tooltip formatter={(value) => formatCurrency(value, currency)} />
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