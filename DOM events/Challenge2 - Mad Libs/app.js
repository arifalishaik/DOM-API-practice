var libButton = document.getElementById('lib-button');

var libIt = function () {
    var noun = document.getElementById("noun").value;
    var adjective = document.getElementById("adjective").value;
    var person = document.getElementById("person").value;

    var storyDiv = document.getElementById("story");
    storyDiv.innerHTML = person + " is a name of " + adjective + noun;
};

libButton.addEventListener('click', libIt);