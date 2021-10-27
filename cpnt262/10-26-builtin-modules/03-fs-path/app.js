console.log('Hello World!')
// console.log(require("module").builtinModules)

// path module

const path = require('path')

const notes = 'users/joe/notes.txt'

console.log(path.dirname(notes))    // /users/joe
console.log(path.basename(notes))   // notes.txt
console.log(path.extname(notes))    // .txt

console.log(path.isAbsolute(notes))    // .txt


// fs module
const fs = require('fs')

// Asynchronous
fs.readFile('./file-1.txt', 'utf-8', function(error, data){
  if (error) {
    return console.log(error);
  }
  console.log(data);
});

console.log("Done: File #1")


// Synchronous
let data;

try {
  // Synchronous file access is not recommended.
  data = fs.readFileSync('./file-2.txt', 'utf-8');
} catch (error) {
  data = error;
}

console.log(data); 

console.log("Done: File #2")

// Reading dir contents
fs.readdir(__dirname, function(err, files) {
  if (err)
    console.log(err);
  else {
    console.log("Current directory filenames:");
    files.forEach(function(file) {
      console.log(file);
    })
  }
})
console.log('Done Reading dir contents');
