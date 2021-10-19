const picsumIds = [
  237,
  433,
  577,
  582,
  593,
  659,
  718,
  783,
  790,
  837,
  1024,
  1025,
  1074,
  1084
];

// 1. Create empty output variable that will contain the gallery images
let output = '';

// 2. Using Array.forEach(): loop through each Picsum image id, invoking an anonymous for each item.
// 3. Create an anonymous function that accepts the array `item` (the Picsum image id) as a parameter
picsumIds.forEach(function(imageId){
  // 4. In this new function, take the Picsum image id and create a valid img element that's 300px x 300px
  // <img src="https://picsum.photos/id/[imageId]/300/300" alt="Lorem Picsum Image">
  
    output += `<img src="https://picsum.photos/id/${imageId}/300/300" alt="Lorem Picsum Image">`;

});

// 5. Using a method of your choice, output the image to `index.html` so that a gallery of all images is displayed on the page
document.querySelector('.gallery').innerHTML = output;