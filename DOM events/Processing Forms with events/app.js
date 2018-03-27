// Step 1: Find the element we want the event on
var buttonEl = document.getElementById("button");
// Step 2: Define the event listener function
var onButtonClick = function () {
    var nameEl = document.getElementById("name").value;
    // console.log( nameEl ); for debugging
    var langEl = document.getElementById("lang").value;
    var greeting = "";
    if ( langEl == "es" ) {
        greeting = "Hola, " + nameEl;
    } else if ( lang == "plt" ) {
        greeting = "Ello-hay, " + nameEl;
    } else {
        greeting = "Heyaz, " + nameEl;
    }

    document.getElementById("message").textContent += greeting;
}




// Step 3: Attach event listener to element
buttonEl.addEventListener("click", onButtonClick);
