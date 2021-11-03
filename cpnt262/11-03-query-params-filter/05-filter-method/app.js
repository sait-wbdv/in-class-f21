const animals = require('./animals')

const filteredAnimals = animals.filter(function(item){
  return item.title.includes(' ')
})

console.log(filteredAnimals)