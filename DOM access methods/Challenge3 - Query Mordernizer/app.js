// Step 1: Store all doth that are inside lis in dothEls
var dothEls = document.querySelectorAll("ul .doth");
// Step 2: Iterate through them and change doth to does
for (var i = 0; i < dothEls.length; ++i) {
    dothEls[i].innerHTML = "does";
}