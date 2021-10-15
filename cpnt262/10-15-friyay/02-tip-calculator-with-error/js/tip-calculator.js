const calculateTotal = function(event) {
  // Stop the form from submitting
  event.preventDefault();

  let billTotal; // User input from form
  let service; // service level: poor, adequate or amazing
  let tipPercentage; // Percentage between 0 and 100
  let tipRate; // ratio between 0 and 1
  let tipAmount; // Currency amount that we are tipping
  let paymentTotal; // bill total plus tipAmount
  // 1. Declare a default error variable that is false

  // Assign form values
  billTotal = Number(form.total.value);

  // 2a. Create `service` variable to accept value from select menu

  service = form.service.value;
  // 2b. Refactor `tipPercentage` and `tipRate` based on `service` using conditional statements (if/else/etc)
  // Bad service -> 12%/0.12
  // Adequate service -> 18%/0.18
  // Amazing service -> 23%/0.23

  if (service === 'poor') {
    // tipRate 0.12
    // TODO: Create ratioToPercentage() function to calculate tipPercentage
    tipRate = 0.12;
    tipPercentage = '12%';
  } else if (service === 'adequate') {
    // tipRate 0.18
    // TODO: Use ratioToPercentage()
    tipRate = 0.18;
    tipPercentage = '18%';
  } else if (service === 'amazing') {
    // tipRate 0.23
    // TODO: Use ratioToPercentage()
    tipRate = 0.23;
    tipPercentage = '23%';
  } else {
    // error!!!
    // TODO: Add proper error handling to tell the user to select a service
    // tipRate = 0;
    // tipPercentage = '0%';
    // 2. Set `error` to true

  }
  
  // Calculate tip and tax amounts
  // 3. Only make the calculation if `error` is false
  tipAmount = billTotal * tipRate;
  paymentTotal = billTotal + tipAmount;
  
  // console.log(billTotal, tipPercentage, tipRate, paymentTotal);

  // Output results
  // TODO: add tip amount to statement
  // 4. If error is true, set red border and instruct user to select a service
  form.payment.value = `Tip for $${billTotal} at ${tipPercentage} for a total payment of $${paymentTotal.toFixed(2)}`;

}

const form = document.querySelector('form');

form.addEventListener('submit', calculateTotal);