// Set prices
const beerCost = 6.25;
const burgerCost = 4.75;
const popCost = 3.00;

// Define and output account balance
const initialBalance = 100;
let accountBalance = initialBalance;

const outputBalance = document.querySelector('.balance');
outputBalance.textContent = accountBalance.toFixed(2);

const resetBalance = function() {
  accountBalance = initialBalance;
  outputBalance.textContent = accountBalance.toFixed(2);
}

const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', resetBalance)

// Drink beer
const drinkBeer = function(){
  accountBalance = accountBalance - beerCost;
  outputBalance.textContent = accountBalance.toFixed(2);
}
const beerButton = document.querySelector('.drink-beer');
beerButton.addEventListener('click', drinkBeer);

// Eat burger
const eatBurger = function() {
  accountBalance = accountBalance - burgerCost;
  outputBalance.textContent = accountBalance.toFixed(2);
}
const burgerButton = document.querySelector('.eat-burger');
burgerButton.addEventListener('click', eatBurger);

// Drink pop
const drinkPop = function(){
  accountBalance = accountBalance - popCost;
  outputBalance.textContent = accountBalance.toFixed(2);
}
const popButton = document.querySelector('.drink-pop');
popButton.addEventListener('click', drinkPop);