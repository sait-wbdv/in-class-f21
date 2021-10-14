// Create a variable for the form
const form = document.querySelector('form');

const handleSubmit = function(event) {
  // Stop form from submitting and refreshing the page
  event.preventDefault();

  // Declare result variable
  let result;

  // Assign menu selection to variable `operation`
  const operation = form.operation.value;

  // Assign operands
  const num1 = Number(form.first.value);
  const num2 = Number(form.second.value);

  // if / else block for `add`, `subtract`, `multiply` `divide`
  if (operation === 'add') {

    // if `add`
    result = num1 + num2;

  } else if (operation === 'subtract') {

    // else if `subtract`
    result = num1 - num2;

  } else if (operation === 'multiply') {

    // else if `multiply`
    result = num1 * num2;

  } else if (operation === 'divide') {

    // else if `divide`
    result = num1 / num2;

  } else {
    
    // else 'error'
    result = "Please select an operation."

  }

  // Print calculation to page
  // Change `total` to `calculation`
  form.calculation.value = result;
  console.log(result);

}

form.addEventListener('submit', handleSubmit);