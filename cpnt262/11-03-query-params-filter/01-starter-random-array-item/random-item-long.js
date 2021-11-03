const myArray = ['one', 'two', 'three'];

const length = myArray.length;
const randNumber = Math.random();
const arrayRatio = randNumber * length;
const lowInteger = Math.floor(arrayRatio);
const myItem = myArray[lowInteger];

console.log(myItem);