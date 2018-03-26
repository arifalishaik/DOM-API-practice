var headingEl = document.querySelector("#heading");
headingEl.innerHTML = "All about cats";

var nameEls = document.querySelectorAll("p .animal");
for (var i = 0; i < nameEls.length; ++i) {
    nameEls[i].innerHTML = "cat";
}

var imgTags = document.getElementsByTagName("img");
// console.log(imgTags); for debugging purposes
for (var i = 0; i < imgTags.length; ++i) {
    imgTags[i].src = "https://www.kasandbox.org/programming-images/animals/cat.png";
}

var linkEls = document.querySelectorAll('a[href*="Dog"]');
for (var i = 0; i < linkEls.length; ++i) {
    linkEls[i].href = "http://en.wikipedia.org/wiki/Cat";
}