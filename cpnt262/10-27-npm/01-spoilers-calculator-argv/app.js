const args = process.argv.slice(2)

const num1 = Number(args[0])
const operation = args[1]
const num2 = Number(args[2])

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

