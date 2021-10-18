/* 20 String Methods */
/* Source: Free Code Camp
https://youtu.be/VRz0nbax0uI */ 

let stringOne = "freeCodeCamp is the best place to learn"
let stringTwo = "frontend and backend development"

// charAt()
console.log('charAt -> ', stringOne.charAt(1))

// charCodeAt()
console.log('charCodeAt -> ', stringOne.charCodeAt(1))

// concat()
console.log('concat -> ', stringOne.concat(stringTwo))

// endsWith()
console.log('endsWith -> ', stringOne.endsWith("to"))

// fromCharCode()
console.log('fromCharCode -> ', String.fromCharCode(114))

// includes()
console.log('includes -> ', stringTwo.includes("end"))

// indexOf()
console.log('indexOf -> ', stringTwo.indexOf("end"))

// lastIndexOf()
console.log('lastIndexOf -> ', stringTwo.lastIndexOf("end"))

// match()
console.log('match -> ', stringTwo.match(/end/g))

// repeat()
console.log('repeat -> ', stringOne.repeat(3))


// replace()
console.log('replace -> ', stringTwo.replace(/end/g, "END"))

// search()
console.log('search -> ', stringTwo.search("end"))

// slice()
console.log('charAt -> ', stringTwo.slice(2, 4))

// split()
console.log('split -> ', stringOne.split(" "))

// startsWith()
console.log('startsWith -> ', stringOne.startsWith("free"))

// substr()
console.log('substr -> ', stringTwo.substr(2, 4))

// substring()
console.log('substring -> ', stringTwo.substring(2, 4))

// toLowerCase()
console.log('toLowerCase -> ', stringOne.toLowerCase())

// toUpperCase()
console.log('toUpperCase -> ', stringOne.toUpperCase())

// trim()
let stringThree = "     Subscribe now!      ";
console.log('trim -> ', stringThree.trim())