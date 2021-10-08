console.log('Hello World!');

const message = 'hello world';

const age = 7;

const workingHard = false;
const hardlyWorking = true;

const caresInTheWorld = null;

const catBreeds = ['calico', 'rag doll', 'persian'];
const faveCatBreed = catBreeds[1];

const myObject = {
  message: 'Hi, right back!',
  age: 8,
  workingHard: true,
  hardlyWorking: false,
  caresInTheWorld: null,
  dogBreeds: ['hugapoo']
};

const greet = function() {
  return message;
};

if (true) {
  console.log('this is true');
}


console.log(message, workingHard, hardlyWorking, caresInTheWorld, catBreeds, faveCatBreed, myObject, greet());
console.log(age);
console.log(myObject.age);