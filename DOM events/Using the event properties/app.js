// 1. Find and store the element we want to listen to events on.
    var imgEl = document.getElementById("face");

    // 2. Define the function that will respond to the event.
    var onMouseMove = function(e){
        // console.log(e);
        // <div>
        var divEl = document.createElement("div");
        divEl.className = "beard";
        document.body.appendChild( divEl );
        divEl.style.top = e.clientY + "px";
        divEl.style.left = e.clientX + "px";
    }

    // 3. Add the event listener for the element and function
    imgEl.addEventListener( "mousemove", onMouseMove );