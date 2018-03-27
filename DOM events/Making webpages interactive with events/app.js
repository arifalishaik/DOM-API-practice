// 1. Find and store the element we want to listen to events on.
var buttonEl = document.getElementById("clicker");
// 2. Define the function that will respond to the event.
var onButtonClick = function(){
    buttonEl.innerHTML = "Yay! You clicked me";
}
// 3. Add the event listener for the element and function
buttonEl.addEventListener("click", onButtonClick );