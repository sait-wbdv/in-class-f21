// Default values
let billSubTotal = 40

// Stretch
// Optional: process.argv is only available in Node
// let billSubTotal = parseFloat(process.argv[2]) || 0;

// Set tip and tax rates
const tipRate = .18;
const tipPercentage = tipRate * 100 + '%';

const taxRate = 0.05;
const taxPercentage = taxRate * 100 + '%';

const calculateTotal = function() {
  // Calculate tip and tax amounts
  const taxAmount = billSubTotal * taxRate;
  const tipAmount = billSubTotal * tipRate;

  const billTotal = billSubTotal + taxAmount;
  const paymentTotal = billSubTotal + taxAmount + tipAmount;

  // Output results
  // raw
  console.log(tipAmount, taxAmount, paymentTotal);

  // ES6 - Output result with template literals
  console.log(`Tip for $${billSubTotal} at ${tipPercentage} tip plus ${taxPercentage} tax: $${tipAmount.toFixed(2)} tip, plus $${taxAmount.toFixed(2)} tax for a total payment of $${paymentTotal.toFixed(2)}.`);

  // ES5 - Output result with concatenation
  console.log('Tip for ' + billSubTotal + ' at ' + tipPercentage + ' tip plus ' + taxPercentage + ' tax: ' + tipAmount.toFixed(2) + ' tip, plus ' + taxAmount.toFixed(2) + ' tax for a total payment of ' + paymentTotal.toFixed(2) + '.');
}

calculateTotal();