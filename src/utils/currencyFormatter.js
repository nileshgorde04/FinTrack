/**
 * Formats a number (assumed to be in INR) into the target currency.
 * @param {number} amountInr - The amount in INR (base currency).
 * @param {object} currency - The currency object { code, rate }.
 * @returns {string} - A formatted currency string (e.g., "$12.00").
 */
export const formatCurrency = (amountInr, currency) => {
  // 1. Convert the amount from INR to the target currency
  const convertedAmount = amountInr * currency.rate;

  // 2. Use the built-in Intl.NumberFormat to handle formatting,
  // symbols, and decimal places perfectly.
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency.code, // e.g., 'USD', 'INR', 'EUR'
  }).format(convertedAmount);
};