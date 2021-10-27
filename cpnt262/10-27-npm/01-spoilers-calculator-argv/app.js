// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
const args = process.argv.slice(2)

// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
const num1 = Number(args[0])
const operation = args[1]
const num2 = Number(args[2])

// See: 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
if (isNaN(num1) || isNaN(num2)) {

  console.log('Please enter valid command.')

} else {

  if (operation === 'plus') {
  
    console.log(num1 + num2)
  
  } else if (operation === 'minus') {
  
    console.log(num1 - num2)
  
  } else if (operation === 'times') {
  
    console.log(num1 * num2)
  
  } else if (operation === 'div') {
  
    console.log(num1 / num2)
  
  } else {

    // Error!
    console.log('Please use a valid operation.')
  
  }
}

