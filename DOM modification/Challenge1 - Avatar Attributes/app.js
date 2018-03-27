var avatarEls = document.getElementsByTagName("img");
// console.log( avatarEls ); // for debugging purposes
for (var i = 0; i < avatarEls.length; ++i) {
    avatarEls[i].height = 170;
    avatarEls[i].title = avatarEls[i].alt;
}