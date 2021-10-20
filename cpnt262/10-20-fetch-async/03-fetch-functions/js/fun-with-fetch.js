const displayDog = function(dog){
  const container = document.querySelector('.container');
    
  container.innerHTML = `
    <figure>
      <img src="${dog.url}" alt="Random Dog">
      <figcaption>${dog.fileSizeBytes} bytes of data.</figcaption>
    </figure>
  `;
}

const displayCat = function(cat) {
  const container = document.querySelector('.container');
    
  container.innerHTML = `
    <figure>
      <img src="${cat.url}" alt="Random Dog">
      <figcaption>Cat ID: ${cat.id}</figcaption>
    </figure>
  `;
}

const useFetchedData = function(endpoint, dataHandler){
  fetch(endpoint)
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
    dataHandler(data);
  })
  .catch(function(err){
    // An error or `reject` from any of the above `.then()` blocks will end up here.
    console.log(err);
  });
}

useFetchedData('http://api.disneyapi.dev/characters/308', function(character){
  const container = document.querySelector('.container');
    
  container.innerHTML = `
    <article>${character.name}</article>
  `;
});

