import React, { useState } from 'react'; // Import useState

// Helper function to get today's date in YYYY-MM-DD format
const getTodayDate = () => {
  const today = new Date();
  return today.toISOString().split('T')[0];
};

// Accept the onAddTransaction function as a prop
function AddTransaction({ onAddTransaction }) {
  // State for each form input
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('expense'); // Default to 'expense'
  // NEW: Add state for date, default to today
  const [date, setDate] = useState(getTodayDate()); 

  const handleSubmit = (e) => {
    e.preventDefault(); // Stop the page from reloading

    // Basic validation
    if (!description || !amount || !date) { // NEW: Check for date
      alert('Please fill in all fields.');
      return;
    }

    // Create the new transaction object
    const newTransaction = {
      id: Date.now(), // Simple unique ID
      description: description,
      amount: parseFloat(amount), // Convert amount string to a number
      type: type,
      date: date, // NEW: Include the date
    };

    // Call the function passed from App.jsx
    onAddTransaction(newTransaction);

    // Clear the form fields
    setDescription('');
    setAmount('');
    setType('expense');
    setDate(getTodayDate()); // Reset date to today
  };

  return (
    <div className="add-transaction">
      <h2>Add New Transaction</h2>
      {/* Use the handleSubmit function */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Description"
          value={description} // Bind value to state
          onChange={(e) => setDescription(e.target.value)} // Update state on change
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount} // Bind value to state
          onChange={(e) => setAmount(e.target.value)} // Update state on change
        />
        {/* NEW: Date Input */}
        <input 
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        
        <div className="radio-group">
          <input
            type="radio"
            id="income"
            name="type"
            value="income"
            checked={type === 'income'} // Bind checked to state
            onChange={(e) => setType(e.target.value)} // Update state on change
          />
          <label htmlFor="income">Income</label>
          
          <input
            type="radio"
            id="expense"
            name="type"
            value="expense"
            checked={type === 'expense'} // Bind checked to state
            onChange={(e) => setType(e.target.value)} // Update state on change
          />
          <label htmlFor="expense">Expense</label>
        </div>
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
}

export default AddTransaction;