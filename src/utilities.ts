// Generate a random single letter from
export function randomLetters(length: number): string {
  // return String.fromCharCode(65 + Math.floor(Math.random() * 26));
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  return Array(length)
    .fill('')
    .map(() => letters.charAt(Math.floor(Math.random() * letters.length)))
    .join('');
}

// Generate a random number of a certain length with leading zeros if necessary
export function generateRandomNumber(length: number) {
  const randomNumber = Math.floor(Math.random() * 10000);
  return randomNumber.toString().padStart(length, '0');
}

// Generate a random invoice number
export function generateRandomInvoiceId() {
  // Generate random letters

  const letters = `${randomLetters(1)}${randomLetters(1)}`;

  // Generate random 4-digit number
  const numbers = generateRandomNumber(4);

  // Combine letters and numbers
  return `${letters}${numbers}`;
}

export function formattedCurrency(amountInPence: number) {
  const amountInPounds = amountInPence / 100;

  // Create a NumberFormat object with options for GBP currency
  const currencyFormatter = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
  });

  // Format the number as currency in GBP
  return currencyFormatter.format(amountInPounds);
}
