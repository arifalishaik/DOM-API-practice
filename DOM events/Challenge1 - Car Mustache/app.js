var catPic = document.getElementById("cat-pic");
var onCatClick = function (e) {
    console.log(e);

    var stashePic = document.getElementById("mustache-pic");
    var xPosition = e.clientX - (stashePic.offsetWidth / 2);
    var yPosition = e.clientY - (stashePic.offsetHeight / 2);

    stashePic.style.top = yPosition + "px";
    stashePic.style.left = xPosition + "px";
};

catPic.addEventListener("click", onCatClick);