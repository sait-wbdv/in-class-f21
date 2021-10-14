
const calculateTotal = function(event) {
  // Stop the form from submitting
  event.preventDefault();

  // Assign form values
  const billTotal = Number(form.total.value);
  const tipPercentage = Number(form.rate.value);
  const tipRate = tipPercentage / 100;

  // Calculate tip and tax amounts
  const tipAmount = billTotal * tipRate;
  const paymentTotal = billTotal + tipAmount;
  
  // console.log(billTotal, tipPercentage, tipRate, paymentTotal);

  // Output results  
  form.payment.value = `Tip for $${billTotal} at ${tipPercentage}% tip for a total payment of $${paymentTotal.toFixed(2)}`;

}

const form = document.querySelector('form');

form.addEventListener('submit', calculateTotal);