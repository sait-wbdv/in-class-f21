const form = document.querySelector('form');

const handleSubmit = function(event) {
  event.preventDefault();

  const total = Number(form.first.value) + Number(form.second.value);

  form.total.value = total;
  // console.log(event);
}

form.addEventListener('submit', handleSubmit);
// console.log(form);