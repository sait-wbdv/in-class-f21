// console.log(process.argv)

const args = process.argv.slice(2)

const name = args[0]
const lang = args[1]

function greet(name, lang = `en`) {

  if (!name) {

    console.log(`Please supply a name!`)

  } else if (lang === 'en') {

    console.log(`Hello, ${name}!`)

  } else if (lang === "es") {

    console.log(`Hola, ${name}!`)

  } else if (lang === "fr") {

    console.log(`Bonjour, ${name}!`)

  } else if (lang === "ch") {

    console.log(`Nihao, ${name}!`)

  } else if (lang === "ru") {

    console.log(`Zdravstvuyte, ${name}!`)

  } else if (lang === "pt") {

    console.log(`Olá, ${name}!`)

  } else if (lang === "de") {

    console.log(`Hallo, ${name}!`)

  } else {

    console.log('Language not defined.')

  }
}

greet(name, lang)