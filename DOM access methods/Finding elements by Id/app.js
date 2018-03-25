/* 
     1. Find the DOM node using an access method.
     2. Manipulate the DOM node by changing its attributes, styles, inner HTML, or appending new nodes to it.
*/
// document.body
var headingEl = document.getElementById("heading");
// console.log(headingEl);  // for debugging checking output in console.log
headingEl.innerHTML = "All About Cats";