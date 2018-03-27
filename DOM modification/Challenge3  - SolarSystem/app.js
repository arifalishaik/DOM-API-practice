//  </div> 1
var planetEl = document.createElement('div');
planetEl.style.backgroundColor = "orange";
planetEl.className = "planet";
document.body.appendChild(planetEl);

// <div> 2
var moonEl = document.createElement('div');
moonEl.className = "moon";
planetEl.appendChild(moonEl);