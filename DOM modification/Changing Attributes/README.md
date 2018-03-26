## Finding multiple DOM elements by tag or class name 

I have been trying to manipulate DOM using plane JavaScript through out this project <br />

## Concepts Learnt:

* Learnt about how we can also target an attribute of a HTML element and manipulate it from the DOM


```js
var imgTags = document.getElementsByTagName("img");
// console.log(imgTags); for debugging purposes
for (var i = 0; i < imgTags.length; ++i) {
    imgTags[i].src = "https://www.kasandbox.org/programming-images/animals/cat.png";
}

var linkEls = document.querySelectorAll('a[href*="Dog"]');
for (var i = 0; i < linkEls.length; ++i) {
    linkEls[i].href = "http://en.wikipedia.org/wiki/Cat";
}
```

Below are two pictures before and after adding JavaScript to our WebPage

### Before Adding JS

<p align="center">
  <img src="img/before_JS_Loads.png" alt="Size Limit example" >
</p>

#### TIP : Here Java Script is manipulating the DOM

### After Adding JS

<p align="center">
  <img src="img/after_JS_Loads.png" alt="Size Limit example" >
</p> 


#### In the second image the DOM has been manipulated