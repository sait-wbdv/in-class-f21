
const calculateTotal = function() {
  // Assign initial values
  const billTotal = 40;
  const tipRate = .18;
  
  // Calculate tip
  const tipAmount = billTotal * tipRate;
  
  // Output result with template literals
  console.log(`Tip for $${billTotal} at ${tipRate * 100}%: $${tipAmount}.`);
};

console.log('Hello World!');
calculateTotal();