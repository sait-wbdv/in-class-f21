const calculateTotal = function(event) {
  // Stop the form from submitting
  event.preventDefault();

  let billTotal; // User input from form
  let service; // service level: poor, adequate or amazing
  let tipPercentage; // Percentage between 0 and 100
  let tipRate; // ratio between 0 and 1
  let tipAmount; // Currency amount that we are tipping
  let paymentTotal; // bill total plus tipAmount
  let error = false; // true if service is not one of the accepted values

  // TODO: reset border when user selects an option in the menu
  form.service.classList.remove('error'); // reset red border

  // Assign form values
  billTotal = Number(form.total.value);

  service = form.service.value;

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
    // 2. Set `error` to true
    error = true;
  }
  
  // Calculate tip and tax amounts
  if (!error) {
    tipAmount = billTotal * tipRate;
    paymentTotal = billTotal + tipAmount;

    // Output results
    // TODO: add tip amount to statement
    form.payment.value = `Tip for $${billTotal} at ${tipPercentage} for a total payment of $${paymentTotal.toFixed(2)}`;
  } else {

    form.payment.value = 'Error - please select a service level!';
    // Set border to red
    form.service.classList.add('error');

  }

}

const form = document.querySelector('form');

form.addEventListener('submit', calculateTotal);