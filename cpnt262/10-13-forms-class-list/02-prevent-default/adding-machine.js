// Create a variable for the form
const form = document.querySelector('form');

const handleSubmit = function(event) {
  // Stop form from submitting and refreshing the page
  event.preventDefault();

  // Calculate total
  const total = Number(form.first.value) + Number(form.second.value);

  // Print total to page
  form.total.value = total;
  // console.log(event);
}

form.addEventListener('submit', handleSubmit);
// console.log(form);