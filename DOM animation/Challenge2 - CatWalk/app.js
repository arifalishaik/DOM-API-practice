var catEl = document.getElementById("cat");
var startTime = new Date().getTime();

var walkTheCat = function () {
    var currTime = new Date().getTime();
    var secondsElapsed = ( ((currTime - startTime) / 1000 ) * 30 );

    catEl.style.left = secondsElapsed + "px";
    catEl.style.top = secondsElapsed + "px";
    window.requestAnimationFrame( walkTheCat );
};

walkTheCat();