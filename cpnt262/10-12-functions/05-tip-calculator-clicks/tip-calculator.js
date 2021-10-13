// Default values
let billSubTotal = 40

// Stretch
// Optional: process.argv is only available in Node
// let billSubTotal = parseFloat(process.argv[2]) || 0;

const ratioToPercentage = function(ratio){
  const percentage = ratio * 100 + '%';
  return percentage;
}

const calculatePortion = function(subTotal = 40, rate = 0.05) {
  const portion = subTotal * rate;
  return portion;
}

// Set tip and tax rates
const tipRate = .18;
const tipPercentage = ratioToPercentage(tipRate);

const taxRate = 0.05;
const taxPercentage = ratioToPercentage(taxRate);

const calculateTotal = function() {

  // Calculate tip and tax amounts
  const taxAmount = calculatePortion(billSubTotal, taxRate);
  const tipAmount = calculatePortion(billSubTotal, tipRate);

  const billTotal = billSubTotal + taxAmount;
  const paymentTotal = billSubTotal + taxAmount + tipAmount;

  // Output results
  // raw
  // console.log(tipAmount, taxAmount, paymentTotal);

  // ES5 - Output result with concatenation
  // console.log('Tip for ' + billSubTotal + ' at ' + tipPercentage + ' tip plus ' + taxPercentage + ' tax: ' + tipAmount.toFixed(2) + ' tip, plus ' + taxAmount.toFixed(2) + ' tax for a total payment of ' + paymentTotal.toFixed(2) + '.');

  // ES6 - Output result with template literals
  // console.log(`Tip for $${billSubTotal} at ${tipPercentage} tip plus ${taxPercentage} tax: $${tipAmount.toFixed(2)} tip, plus $${taxAmount.toFixed(2)} tax for a total payment of $${paymentTotal.toFixed(2)}.`);

  paragraph.textContent = `Tip for $${billSubTotal} at ${tipPercentage} tip plus ${taxPercentage} tax: $${tipAmount.toFixed(2)} tip, plus $${taxAmount.toFixed(2)} tax for a total payment of $${paymentTotal.toFixed(2)}.`;

}

// calculateTotal();

const button = document.querySelector('button');
const paragraph = document.querySelector('p');

button.addEventListener('click', calculateTotal);
