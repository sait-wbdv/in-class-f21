# Tip Calculator
## Overview
Beginner activities based on a simple Tip Calculator.

## Topics covered
Javascript features used in this script:
- [`const` declaration keyword](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/)
- [Arithmetic operators](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math)
- [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

## Activities
In no particular order, refactor this script to add/improve features:
1. For some reason, you don't like the `*` arithmetic operator being passed as a `console.log()` argument. 
    - Declare a new `tipPercentage` variable that outputs `18%` (or similar) and log that new variable in the `console.log()`, instead.
2. You realize it might be useful to know the total payment to the server.
    - Declare a new `paymentTotal` variable and set its value to the `billTotal` plus `tip`.
3. Last time you checked, there's no coin for `$0.00001`.
    - Use the [`Number.prototype.toFixed()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) method to round the `tip` to a suitable display currency.
4. You realize you've been tipping on the tax portion of the bill!
    - Refactor the script so that it calculates the tip based on the sub total _before_ tax.
5. Stretch: This app is great, but `billTotal` is fixed. 
    - If you're running this code using Node:
        1. Using the [`process.argv`](https://www.google.com/search?client=firefox-b-d&q=process.argv) array in Node, refactor this script so that it accepts a `billTotal` value from the command line when you run the script.

## Running this code
### Browser
To run `tip-calculator.js` from the browser:
1. Download or clone this Gist into your workspace;
2. In this new directory, create a valid `index.html` file;
3. In the `<head>` of `index.html`, link to `tip-calculator.js` with a `<script>` tag:
    
    ```js
    <script src="tip-calculator.js">
    ```
4. Run `index.html` in the browser of your choice;
5. Open the [Web Console](https://developer.mozilla.org/en-US/docs/Tools/Web_Console) to view the output.

### Node
Alternatively, if you have Node installed, `tip-calculator.js` can be run from the command line:
1. Download or clone this Gist into your workspace;
2. Navigate to this directory from the command line;
3. Run the file using Node: 
    `$ node tip-calculator.js`
