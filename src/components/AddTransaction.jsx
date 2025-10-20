import React from 'react';

function AddTransaction() {
  return (
    <div className="add-transaction">
      <h2>Add New Transaction</h2>
      <form>
        <input type="text" placeholder="Description" />
        <input type="number" placeholder="Amount" />
        <div>
          <input type="radio" id="income" name="type" value="income" />
          <label htmlFor="income">Income</label>
          <input type="radio" id="expense" name="type" value="expense" />
          <label htmlFor="expense">Expense</label>
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddTransaction;