# JS Activity: `Array.forEach()` - Create a comma-separated list of nouns
In this activity, you will generate a comma-separated list of nouns and display it on a web page.

For example, this array:

```js
const nouns = [`one`, `two`, `three`];
```

Should be display on the page as a sentence in the following format:

```html
One, Two and Three.
```

## Instructions
1. Create a function `handleItem()` that accepts the (JS-created) array `item` (the noun) as a parameter.
2. Inside `handleItem()`, use `.innerHTML` and the addition assignment operator (`+=`) (or another method of your choice) to create a comma-separated of nouns so that:
    - the first character of each noun is capitalized;
    - each noun is separated by a comma;
    - the last noun is separated by the word `and`.
3. Finally, using `Array.forEach()`: invoke `handleItem()` for each item in the noun array to create your comma-separated list.