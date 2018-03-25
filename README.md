# DOM-API-practice

I am trying to manipulate the DOM using plane JavaScript, No library's used

## Concepts Learnt:

* DOM - Document Object Model
* DOM is the way that browsers let us as developers, manipulate the webpages with JavaScript
* Whenever browser loads a webpage it parses all the HTML CSS and converts the document into a DOM
* So, DOM is really a big JavaScript Object that contains everything we would ever want to know or   change anything about a page. Like Everysingle tag, and attribute and style for each tag
* To access the DOM on a webpage from javaScript we use the global variable called "document", then we can use properties and call functions that are attached to this object

* The general strategy to access DOM is two steps
  * First step: Find the DOM node using an access mothod - e.g If you want to access the body tag
    ```
    * document.body
    ```
  * Second Step: Now, manipulate the DOM node that we found. This can be done in various ways
    * e.g If we want to replace the content of the whole targeted body tag then
    ```
    * document.body.innerHTML = "Hello";
    ```
* The browser is watching for changes to the document object, as soon as it sees the changes to the innerHTML of the document.body it reflects it back in the actual document.
* Remember : document object isn't the actual webpage but the browser tries to make it reflect the current page as much as possible

