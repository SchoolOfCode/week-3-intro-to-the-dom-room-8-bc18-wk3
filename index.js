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

// - **Instructions**:
//   - Use `querySelector()` to select the first element with the class "highlight".
//   - Log the selected element to the console.
// - **Expected Outcome**:
//   - The console should display a single `<p>` element with the content "This is another paragraph with the class 'content'
// and 'highlight'."

console.log(document.querySelector(".highlight"));

// - Use `querySelectorAll()` to select all elements with the class "highlight".
// - Log the selected elements to the console.
// - **Expected Outcome**:
// - The console should display a collection of three elements: a `<p>` element with the content
// "This is another paragraph with the class 'content' and 'highlight'" and two `<li>` elements with the content "🍒 Cherry" and "🍈 Fig".

console.log(document.querySelectorAll(".highlight"));

// #### Ticket 2a: Parent Node

// - **Instructions**:
//   - Select the first `<li>` element inside the `<ul>` with the id of "itemList".
//   - Use the `parentNode` property to access its parent.
//   - Log the parent element to the console.
// - **Expected Outcome**:
//   - The console should display the entire `<ul>` element with the `id` of "itemList" and all of its `<li>` children.

const listItem = document.querySelector(".list-item");
console.log(listItem);
console.log(listItem.parentNode);

// Instructions:
// Select the <ul> element with the id of "itemList".
// Use the childNodes property to get all its child nodes.
// Log the child nodes to the console.
// Expected Outcome:
// The console should display a collection (NodeList) of child nodes of the <ul> element, which includes the <li> elements as well as any whitespace or line breaks.

const unorderedList = document.getElementById("itemList");

console.log(unorderedList.childNodes);

// Instructions:
// Select the <ul> element with the id of "itemList".
// Use the children property to get all its element children.
// Log the element children to the console.
// Expected Outcome:
// The console should display a HTMLCollection of five <li> elements.

console.log(unorderedList.children);


/* Ticket 2d: First and Last Child
Instructions:
Select the <ul> element with the id of "itemList".
Use the firstChild and lastChild properties to get the first and last child nodes.
Log both child nodes to the console.
Expected Outcome:
The console should display two nodes. Depending on the formatting of your HTML, the first may be a text node (whitespace or line break). The last should be the <li> element with the content "🍈 Fig". */

console.log(unorderedList.firstChild);

console.log(unorderedList.lastChild);


/* Ticket 3a: Styling Elements
Instructions:
Select the <h1> element with the id of "title".
Change its text color to "red" and font size to "30px" using JavaScript.
Expected Outcome:
The heading "Intro to the DOM" should appear in red and its font size should be 30px. */

const getTitle = document.getElementById("title");

getTitle.style.color = "red";
getTitle.style.fontSize = "30px";

// - **Instructions**:
//   - Create a new `<p>` element.
//   - Set its text content to "This is a dynamically added paragraph.".
//   - Append it to the end of the body using JavaScript.
// - **Expected Outcome**:
//   - A new paragraph with the text "This is a dynamically added paragraph." should appear at the bottom of the page.

const newElement = document.createElement("p");
newElement.innerText = "This is a dynamically added paragraph.";
document.body.appendChild(newElement);

// - **Instructions**:
//   - Select the first `<p>` element with the class "content".
//   - Change its text content to "This paragraph has been updated." using JavaScript.
// - **Expected Outcome**:
//   - The text of the first paragraph with class "content" should now read "This paragraph has been updated."


