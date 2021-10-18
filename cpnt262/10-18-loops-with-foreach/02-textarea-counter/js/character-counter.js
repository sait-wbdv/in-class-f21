// 1. Create `textarea` variable
const textarea = document.querySelector('textarea');

// 2. Create `counter` variable
const counter = document.querySelector('.counter');

// 3. Create character `limit` variable
const limit = textarea.getAttribute('maxlength');
counter.textContent = `${textarea.value.length} / ${limit}`;

// 4. Create event listener to update `counter`
textarea.addEventListener('input', function(){
  counter.textContent = `${textarea.value.length} / ${limit}`;
});