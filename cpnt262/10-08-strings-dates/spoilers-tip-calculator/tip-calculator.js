// Assign initial values
// Note: process.argv is only available in Node
let billSubTotal = parseFloat(process.argv[2]) || 0;

const tipRate = .18;
const taxRate = 0.05;

// Calculate tip
const taxPercentage = taxRate * 100 + '%';
const taxAmount = billSubTotal * taxRate;

const tipPercentage = tipRate * 100 + '%';
const tipAmount = billSubTotal * tipRate;

const billTotal = billSubTotal + taxAmount;

const paymentTotal = billSubTotal + taxAmount + tipAmount;

console.log(paymentTotal);
console.log(5);

// Output result with template literals (ES6)
console.log(`Tip for $${billSubTotal} at ${tipPercentage} tip plus ${taxPercentage} tax: $${tipAmount.toFixed(2)} tip, plus $${taxAmount.toFixed(2)} tax for a total payment of $${paymentTotal.toFixed(2)}.`);

// ES5 - concatenation
console.log('Tip for ' + billSubTotal + ' at ' + tipPercentage + ' tip plus ' + taxPercentage + ' tax: ' + tipAmount.toFixed(2) + ' tip, plus ' + taxAmount.toFixed(2) + ' tax for a total payment of ' + paymentTotal.toFixed(2) + '.');
