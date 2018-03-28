// Step 1. What element do we want to animate?
var counterEl = document.getElementById("countdown");
// Step 2. What function will change it each time?
// callBack function
var runCounter = function () {
    var currentTime = parseFloat(counterEl.textContent);
    if (currentTime > 0) {
        counterEl.textContent = currentTime - 1;
    } else {
        window.clearInterval(timer);
    }
}
// Step 3: Call that on an interval
var timer = setInterval(runCounter, 1000);