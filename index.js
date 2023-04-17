// Your code goes here

document.addEventListener("DOMContentLoaded", function() {
  console.log("The DOM has loaded");
  const para = document.getElementById("text");
  para.textContent = "This is really cool!";

});

/* It is important to note that the DOMContentLoaded event fires once 
the initial HTML document finishes loading, but does not wait for CSS stylesheets or images to load.
 In situations where you need everything to completely load, use the load event instead. */

 //Nothing will happen it has no images 
document.addEventListener("load", function() {
    console.log("page is fully loaded");
});

console.log("This console.log() fires when index.js loads - before DOMContentLoaded is triggered");