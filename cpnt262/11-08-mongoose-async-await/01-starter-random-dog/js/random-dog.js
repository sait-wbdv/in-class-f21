fetch('https://random.dog/woof.json')
  .then(function(response){
    // JSON that is returned from the server must be converted to a JS object asynchronously.
    console.log(response);
    if (!response.ok) {
      throw new Error('Not 200 OK');
    }
    return response.json();
  })
  .then(function(data){
    // Any code that depends on the `data` must go in this block
    console.log(data);
  })
  .catch(function(err){
    // An error or `reject` from any of the above `.then()` blocks will end up here.
    console.log(err);
  });

const dogElement = document.querySelector('.dog');

dogElement.innerHTML = `
  <figure>
    <img src="${data.url}" alt="Random Dog">
    <figcaption>${data.fileSizeBytes} bytes of data.</figcaption>
  </figure>
`;