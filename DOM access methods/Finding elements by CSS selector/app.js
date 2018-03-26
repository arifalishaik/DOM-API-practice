var headingEl = document.getElementById("heading");
headingEl.innerHTML = "All about cats";

/* 
    CSS Equivalent
    p .animal{
        
    }  
*/

// A NodeList of all p tags with class animal
var nameEls = document.querySelectorAll("p .animal");
// console.log( nameEls );
// NodeList[0]
// console.log( nameEls[0] );

for ( var i = 0; i < nameEls.length; ++i ) {
    nameEls[i].innerHTML = "cat";
}