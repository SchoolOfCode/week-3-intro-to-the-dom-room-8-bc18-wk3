// Ticket 1a: getElementById()
// Instructions:
// Use getElementById() to select the element with the id of "title".
// Log the selected element to the console.
// Expected Outcome:
// The console should display the <h1> element with the content "Intro to the DOM".

console.log(document.getElementById("title"));

//ticket 1b
/* Ticket 1b: `getElementsByClassName()`

- **Instructions**:
  - Use `getElementsByClassName()` to select elements with the class of "content".
  - Log the selected elements to the console.
- **Expected Outcome**:
  - The console should display a collection of two `<p>` elements. The first with the content "This is a paragraph with the class 'content'." and the second with "This is another paragraph with the class 'content' and 'highlight'." */
console.log(document.getElementsByClassName("content"));




//ticket 1c
/* #### Ticket 1c: `getElementsByTagName()`

- **Instructions**:
  - Use `getElementsByTagName()` to select all `<li>` elements on the page.
  - Log the selected elements to the console.
- **Expected Outcome**:
  - The console should display a collection of five `<li>` elements with the content "🍎 Apple", "🍌 Banana", "🍒 Cherry", "🍇 Date", and "🍈 Fig", respectively. */
console.log(document.getElementsByTagName("li"));