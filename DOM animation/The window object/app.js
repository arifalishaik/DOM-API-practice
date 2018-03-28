var infoDiv = document.getElementById("info");
infoDiv.innerHTML += "<strong>URL of this page is</strong> " + window.location;

var agentDiv = document.getElementById("agent");
agentDiv.innerHTML += "<strong> User Agent is </strong>  " + window.navigator.userAgent;

var dimensionDiv = document.getElementById("dimension");
dimensionDiv.innerHTML += "<strong>The height of this page is:</strong>  " + window.outerHeight + "  <strong>The Width of this page is:</strong>  " + window.outerWidth;