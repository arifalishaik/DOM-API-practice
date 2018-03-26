var headingEl = document.getElementById("heading");
headingEl.innerHTML = "All about cats";
/* 
    The problem with the below approach is it brings all the span tags in the entire page and saves it in the variable animalEls
    as a HTMLCollection. So we may also get unwanted span tags 
*/
// storing all the span elements as HTMLCollection
var spanEls = document.getElementsByTagName("span");
// console.log( spanEls ); for Debugging purpose

for (var i = 0; i < spanEls.length; ++i) {
    spanEls[i].innerHTML = "cat";
}

// So, let use below approach
// storing all the elements with class animal as a HTMLCollection
var animalEls = document.getElementsByClassName("animal");
// console.log( animalEls );  // for debugging purpose

for (var i = 0; i < animalEls.length; ++i) {
    animalEls[i].innerHTML = "cat";
}