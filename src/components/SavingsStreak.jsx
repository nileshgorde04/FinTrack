import React from 'react';

// Helper to get date string in YYYY-MM-DD format
const getISODate = (date) => {
  return date.toISOString().split('T')[0];
};

// Helper function to calculate the streak
const calculateStreak = (transactions) => {
  const netByDate = new Map();

  // 1. Calculate net income/expense for each day
  transactions.forEach(tx => {
    const date = tx.date;
    const amount = tx.type === 'income' ? tx.amount : -tx.amount;
    netByDate.set(date, (netByDate.get(date) || 0) + amount);
  });

  let streak = 0;
  let currentDate = new Date();

  // 2. Loop backwards from today
  while (true) {
    const dateString = getISODate(currentDate);
    const netAmount = netByDate.get(dateString);

    // If netAmount is undefined (no transactions) or >= 0 (profit or broke even)
    if (netAmount === undefined || netAmount >= 0) {
      streak++;
    } else {
      // Day was a net loss, break the streak
      break;
    }

    // Go to the previous day
    currentDate.setDate(currentDate.getDate() - 1);

    // (Optional) Stop checking after 365 days to prevent infinite loops on old data
    if (streak > 365) break;
  }
  
  // If your streak is 0 or 1 today, but yesterday was a good day,
  // the logic above only counts today. Let's adjust.
  // We'll calculate the streak *ending yesterday* if today you had a net loss.
  
  const todayString = getISODate(new Date());
  if (netByDate.get(todayString) < 0) {
    // You broke your streak today. Let's show you what your streak *was* yesterday.
    
    // Quick recalculation, starting from yesterday
    let pastStreak = 0;
    let yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    while (true) {
      const dateString = getISODate(yesterday);
      const netAmount = netByDate.get(dateString);
      if (netAmount === undefined || netAmount >= 0) {
        pastStreak++;
      } else {
        break;
      }
      yesterday.setDate(yesterday.getDate() - 1);
      if (pastStreak > 365) break;
    }
    return pastStreak; // Return yesterday's streak
  }
  
  return streak; // Return today's streak
};


function SavingsStreak({ transactions }) {
  const streak = calculateStreak(transactions);

  return (
    <div className="card savings-streak-card">
      <h3>Savings Streak</h3>
      <div className="streak-display">
        <span className="streak-icon">🔥</span>
        <span className="streak-number">{streak}</span>
        <span className="streak-label">Day{streak !== 1 ? 's' : ''}</span>
      </div>
    </div>
  );
}

export default SavingsStreak;