const calculateTotal = function(event) {
  // Stop the form from submitting
  event.preventDefault();

  const payment = document.querySelector(".payment");

  let billTotal; // User input from form
  let service; // service level: poor, adequate or amazing
  let tipPercentage; // Percentage between 0 and 100
  let tipRate; // ratio between 0 and 1
  let tipAmount; // Currency amount that we are tipping
  let paymentTotal; // bill total plus tipAmount
  let error = false; // true if service is not one of the accepted values
  let errorMessages = []; // true if service is not one of the accepted values

  // TODO: reset border when user selects an option in the menu
  form.total.classList.remove('error'); // reset red border
  form.service.classList.remove('error'); // reset red border

  // Assign form values
  billTotal = Number(form.total.value);
  if (!billTotal || billTotal < 0) {
    error = true;
    errorMessages[errorMessages.length] = `Please enter a bill total above $0!`
    form.total.classList.add('error');
  }

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
    errorMessages[errorMessages.length] = `Please select a service level!`;
    form.service.classList.add('error');

  }
  
  console.log(error, errorMessages);
  // Calculate tip and tax amounts
  if (!error) {
    tipAmount = billTotal * tipRate;
    paymentTotal = billTotal + tipAmount;

    // Output results
    // TODO: add tip amount to statement
    payment.innerHTML = `Tip for $${billTotal} at ${tipPercentage} for a total payment of $${paymentTotal.toFixed(2)}`;
  } else {
    payment.innerHTML = `<p>Errors</p><ul><li>${errorMessages.join('</li><li>')}</li></ul>`;
  }

}

const form = document.querySelector('form');

form.addEventListener('submit', calculateTotal);