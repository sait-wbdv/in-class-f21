const randomItem = array => {
  const length = array.length
  const randNumber = Math.random()
  const arrayRatio = randNumber * length
  const lowInteger = Math.floor(arrayRatio)
  const item = array[lowInteger]

  console.log(randNumber, arrayRatio, lowInteger)
  return item
}

module.exports = randomItem