# FinTrack 💰

FinTrack is a modern personal finance and group expense visualizer. It helps you track your income, expenses, and savings with interactive dashboards, and now includes a powerful group-splitting feature for managing shared expenses with roommates or friends.

---

## Features

This project is built with a clean, component-based React structure and includes a wide range of features:

### 1. Core Dashboard
* **Dynamic Summary:** See your total income, total expenses, and current balance calculated in real-time.
* **Budget Tracking:** A dedicated card shows your spending progress against a set monthly budget, with a visual progress bar.
* **Gamification:** A "Savings Streak" card 🔥 motivates you by tracking consecutive days of positive or zero net spending.

### 2. Transaction Management
* **Add Transactions:** Easily add new income or expenses with a description, amount, and date.
* **Delete Transactions:** Remove any transaction from your list with a single click.
* **Full History:** The dashboard displays your complete transaction history, which updates instantly.

### 3. Data Visualization
* **Expense Pie Chart:** A pie chart from `Recharts` shows a visual breakdown of your expenses by description.
* **Monthly Trends Bar Chart:** A bar chart tracks your total spending month-by-month to help you identify trends.

### 4. Group Expense Splitting
* **Create Groups:** A dedicated "Groups" page lets you create new groups (e.g., "Roommates," "Goa Trip") and add members.
* **Group-Specific Dashboard:** Each group has its own detail page.
* **Add Group Expenses:** Log expenses for the group, specifying who paid (e.g., "Pizza, ₹800, paid by Nilesh").
* **"Who Owes Whom" Summary:** A dynamic summary card calculates each member's balance, showing who is owed money and who needs to pay.

### 5. Customization & UI
* **Light/Dark Mode:** Toggle between light and dark themes with a click. The entire app (including charts) responds.
* **Multi-Currency Support:** A "Settings" page allows you to change your display currency (e.g., INR, USD, EUR). All monetary values across the app are instantly converted and displayed.

---

## Tech Stack

* **Framework:** React 19 (using Hooks)
* **Bundler:** Vite
* **Routing:** React Router v7
* **Charts:** Recharts
* **Styling:** Plain CSS with CSS Variables (for theming)

---

## Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/nileshgorde04/FinTrack.git
    cd fintrack
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The app will be available at `http://localhost:5173`.

## Available Scripts

* `npm run dev`: Starts the app in development mode.
* `npm run build`: Bundles the app for production.
* `npm run lint`: Lints the project files.
* `npm run preview`: Serves the production build locally.
