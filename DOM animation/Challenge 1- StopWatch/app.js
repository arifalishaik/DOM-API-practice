// Make it count up on a timer, calling this function
var seconds = document.getElementById("seconds");

var countUp = function () {
    var currentTime = parseFloat(seconds.textContent);
    seconds.textContent = currentTime + 1;
};

var incrementor = window.setInterval( countUp, 1000 );

// stopping the stopWatch
var stopButton = document.getElementById("stop-button");

// How can you make it stop counting?
var stopCountUp = function () {
    window.clearInterval(incrementor);
};

stopButton.addEventListener( "click", stopCountUp );