const intro = 'This is my intro';
const nickname = "Grimey";

console.log(intro);

const greet = function() {
  // const lang = 'en';
  let lang = setLang();
  console.log(lang);
}

const setLang = function() {
  let lang = 'en';
  return lang;
}

greet();

const form = document.querySelector('form');
console.log(form.nickname);
console.log(nickname);