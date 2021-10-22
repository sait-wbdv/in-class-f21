// 1. Create an empty output variable
let output = '';
const container = document.querySelector('.container');

// 2. Retrieve the character ID from the URL
const url = new URL(window.location);
// console.log(url);
const params = new URLSearchParams(url.search);
// console.log(params.get('character'));

// 5. Create generic list display function
const displayArray = function(array){
  let output = '';
  if (array.length > 0) {
    array.forEach(function(item){
      output += `<li>${item}</li>`;
    });
    output = `<ul>${output}</ul>`;
  } else {
    output = `<p>none</p>`;
  }

  return output;
}

// 3. fetch() the character data
fetch(`http://api.disneyapi.dev/characters/${params.get('character')}`)
  .then(function(response){
    // JSON that is returned from the server must be converted to a JS object asynchronously.
    if (!response.ok) {
      throw new Error('Not 200 OK');
    }
    return response.json();
  })
  .then(function(data){
    // Any code that depends on the `data` must go in this block
    console.log(data);

    output += `
      <article>
        <h1>${data.name}</h1>
        <h2>Films</h2>
        ${displayArray(data.films)}
        <h2>Short Films</h2>
        ${displayArray(data.shortFilms)}
        <h2>TV Shows</h2>
        ${displayArray(data.tvShows)}
        <h2>Attractions</h2>
        ${displayArray(data.parkAttractions)}
        <h2>Enemies</h2>
        ${displayArray(data.enemies)}
        <h2>Allies</h2>
        ${displayArray(data.allies)}
      </article>
    `
    // 4. In the last .then(), display the character
    container.innerHTML = output;
  })
  .catch(function(err){
    // An error or `reject` from any of the above `.then()` blocks will end up here.
    console.log(err);
  });