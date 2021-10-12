# JS Activity: Strings and Dates in HTML
## Overview
This activity focuses on outputting/manipulating strings and dates as content of HTML elements.

## Topics covered
- The [Date Global Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [document.querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector)
- [Node.textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)

## Instructions
1. Download or fork/clone this Gist to your workspace.
2. Using the `Date` methods provided below, [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) and [common string methods](https://gist.github.com/acidtone/4f1bd6ffff85fc8f4fed359b619fe76b) refactor the printed date to create a sentence with the following structure (but using the current date and time): 

    > You last accessed this page on Oct 8 at 8:45pm
3. Using the `paraElement` variable and your knowledge of [strings](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings) and [string methods](https://gist.github.com/acidtone/4f1bd6ffff85fc8f4fed359b619fe76b) to:
    - Count the number of characters in the paragraph;
    - Count the number of words in the paragraph;
    - Count the number of times "wizard" is mentioned in the paragraph.
4. Output each of the above counts in the `span` elements provided under "Paragraph Stats".

## Stretch Activity
After completing Step 2, you may have found the `Date` object difficult to work with. You're not alone! Many libraries have been written to improve the experience of working with dates.

Try installing one or more of the following date libraries and repeat Step 2 above:
- [Luxon](https://moment.github.io/luxon/#/)
- [date-fns](https://date-fns.org/)
- [DayJS](https://day.js.org/)

## Attributions
- [Wikipedia - Harry Potter](https://en.wikipedia.org/wiki/Harry_Potter)