// alert('Hello!');
// https://www.geeksforgeeks.org/how-to-add-fade-in-effect-using-pure-javascript/#:~:text=The%20fade%20effect%20is%20described,as%20the%20fade%2Din%20effect.
var opacity = 0; 
var intervalID = 0; 
window.onload = fadeIn; 

function fadeIn() { 
    setInterval(show, 200); 
} 

function show() { 
    var body = document.getElementById("avatar"); 
    opacity = Number(window.getComputedStyle(body) 
                     .getPropertyValue("opacity")); 
    if (opacity < 1) { 
        opacity = opacity + 0.1; 
        body.style.opacity = opacity 
    } else { 
        clearInterval(intervalID); 
    } 
}

