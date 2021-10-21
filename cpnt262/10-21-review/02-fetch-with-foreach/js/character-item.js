// 1. Create an empty output variable
let output = '';
const container = document.querySelector('.container');

// 2. Retrieve the character ID from the URL
const url = new URL(window.location);
// console.log(url);
const params = new URLSearchParams(url.search);
// console.log(params.get('character'));

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

    let films = '';
    if (data.films.length > 0) {
      data.films.forEach(function(film){
        films += `<li>${film}</li>`;
      });
      films = `<ul>${films}</ul>`;
    } else {
      films = `<p>none</p>`;
    }

    let allies = '';
    if (data.allies.length > 0) {
      data.allies.forEach(function(ally){
      allies += `<li>${ally}</li>`;
      });
      allies = `<ul>${allies}</ul>`;
    } else {
      allies = `<p>none</p>`;
    }

    let enemies = '';
    if (data.enemies.length > 0) {
      data.enemies.forEach(function(enemy){
      enemies += `<li>${enemy}</li>`;
      });
      enemies = `<ul>${enemies}</ul>`;
    } else {
      enemies = `<p>none</p>`;
    }

    let attractions = '';
    if (data.parkAttractions.length > 0) {
      data.parkAttractions.forEach(function(attraction){
      attractions += `<li>${attraction}</li>`;
      });
      attractions = `<ul>${attractions}</ul>`;
    } else {
      attractions = `<p>none</p>`;
    }

    let shortFilms = '';
    if (data.shortFilms.length > 0) {
      data.shortFilms.forEach(function(film){
      shortFilms += `<li>${film}</li>`;
      });
      shortFilms = `<ul>${shortFilms}</ul>`;
    } else {
      shortFilms = `<p>none</p>`;
    }

    let tvShows = '';
    if (data.tvShows.length > 0) {
      data.tvShows.forEach(function(show){
      tvShows += `<li>${show}</li>`;
      });
      tvShows = `<ul>${tvShows}</ul>`;
    } else {
      tvShows = `<p>none</p>`;
    }

    output += `
      <article>
        <h1>${data.name}</h1>
        <h2>Films</h2>
        ${films}
        <h2>Short Films</h2>
        ${shortFilms}
        <h2>TV Shows</h2>
        ${tvShows}
        <h2>Attractions</h2>
        ${attractions}
        <h2>Enemies</h2>
        ${enemies}
        <h2>Allies</h2>
        ${allies}
      </article>
    `
    container.innerHTML = output;
  })
  .catch(function(err){
    // An error or `reject` from any of the above `.then()` blocks will end up here.
    console.log(err);
  });
// 4. In the last .then(), display the character