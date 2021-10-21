let output = '';
const gallery = document.querySelector('.gallery');

fetch('http://api.disneyapi.dev/characters')
  .then(function(response){
    // JSON that is returned from the server must be converted to a JS object asynchronously.
    if (!response.ok) {
      throw new Error('Not 200 OK');
    }
    return response.json();
  })
  .then(function(data){
    // Any code that depends on the `data` must go in this block
    
    let shortList = data.data.slice(0,25);
    
    console.log(shortList);
    
    shortList.forEach(function(character){
      // console.log(character);
      let films = '';

      character.films.forEach(function(film){
        films += `<li>${film}</li>`;
      });

      output += `
      <li><a href="item.html?character=${character._id}">${character.name}</a>
        <ul>${films}</ul>
      </li>`;
    })

    gallery.innerHTML = `<ol>${output}</ol>`;

  })
  .catch(function(err){
    // An error or `reject` from any of the above `.then()` blocks will end up here.
    console.log(err);
  });
console.log('Output', output)