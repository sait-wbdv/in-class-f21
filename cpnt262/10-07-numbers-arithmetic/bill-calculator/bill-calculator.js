// Declare variables: billSubTotal, taxRate, taxAmount, billTotal
let billSubTotal = 30;
let billTotal;

const taxRate = 0.05;
let taxAmount;

// Multiply billSubTotal by taxRate and assign value to taxAmount
taxAmount = billSubTotal * taxRate;

// Add billSubTotal to taxAmount and assign value to billTotal
billTotal = billSubTotal + taxAmount;

// Log the billTotal
console.log(`$${billTotal.toFixed(2)}`);
