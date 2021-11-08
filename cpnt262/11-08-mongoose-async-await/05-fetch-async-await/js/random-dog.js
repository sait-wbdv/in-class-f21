/*******************************/
/* fetch with .then and .catch */
/*******************************/

fetch('https://random.dog/woof.json')

  // Waiting for awhile...

  .then(function(response){
    // JSON that is returned from the server must be converted to a JS object asynchronously.
    if (!response.ok) {
      throw new Error('Not 200 OK');
    }
    return response.json();
  })

  // Waiting for awhile again...

  .then(function(data){
    // Any code that depends on the `data` must go in this block
    console.log('Dog 1');
    dogElement.innerHTML = `
      <figure>
        <img src="${data.url}" alt="Random Dog">
        <figcaption>${data.fileSizeBytes} bytes of data.</figcaption>
      </figure>
    `;
  })

  // Uh oh, something went wrong while we were waiting...

  .catch(function(err){
    // An error or `reject` from any of the above `.then()` blocks will end up here.
    console.log(err);
  });

console.log('Container 1')
const dogElement = document.querySelector('.dog');

/**************************/
/* fetch with async/await */
/**************************/

const myFetch = async () => {

  const response = await fetch('https://random.dog/woof.json');

  const data = await response.json();
  
  console.log('Dog 2');

  dogAwaitElement.innerHTML = `
    <figure>
      <img src="${data.url}" alt="Random Dog">
      <figcaption>${data.fileSizeBytes} bytes of data.</figcaption>
    </figure>
  `;
}

myFetch();

console.log('Container 2')
const dogAwaitElement = document.querySelector('.dog-async-await');

/**************************/
/* fetch with async/click */
/**************************/

console.log('Container 3')
const dogAsyncClick = document.querySelector('.dog-async-click');
const button = document.querySelector('button');

button.addEventListener('click', async () => {
  try {
    const response = await fetch('https://random.dog/woof.json');

    if (!response.ok) {
      throw new Error('Not 200 OK');
    }

    const data = await response.json();
    
    console.log('Dog 3');
  
    dogAsyncClick.innerHTML = `
      <figure>
        <img src="${data.url}" alt="Random Dog">
        <figcaption>${data.fileSizeBytes} bytes of data.</figcaption>
      </figure>
    `;
  } catch(error) {
    console.log('Caught an error!', error);
  }
})