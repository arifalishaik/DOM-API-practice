var imageEls = document.getElementsByTagName("img");
for (var i = 0; i < imageEls.length; i++) {
    imageEls[i].src = "https://www.kasandbox.org/programming-images/animals/cat.png";
}

var linkEls = document.querySelectorAll("a[href*=\"Dog\"]");
for (var i = 0; i < linkEls.length; i++) {
    linkEls[i].href = "http://en.wikipedia.org/wiki/Cat";
}

var headingEl = document.querySelector("#heading");
headingEl.className = "catcolors";
headingEl.style.textAlign = "center";
headingEl.textContent = "All about cats";


var nameEls = document.querySelectorAll("p .animal");
for ( var i = 0; i < nameEls.length; i++ ) {
    // <strong>
    var strongEl = document.createElement("strong");
    // "cat"
    var strongText = document.createTextNode("cat");
    // <strong> cat <strong>
    strongEl.appendChild( strongText );
    nameEls[i].innerHTML = "";
    nameEls[i].appendChild( strongEl );

    nameEls[i].className += " catcolors";
    nameEls[i].style.fontSize = 20+"px";
}

// <img src="https://www.kasandbox.org/programming-images/animals/cat.png" alt="Photo of Cat">
var catEl = document.createElement("img");
catEl.src = "https://www.kasandbox.org/programming-images/animals/cat.png";
catEl.alt = "Photo of Cute Cat";

var imagesEl = document.getElementsByClassName("images");
// console.log( imagesEl );
for ( var i = 0; i < imagesEl.length; ++i ){
    imagesEl[i].appendChild( catEl );
}