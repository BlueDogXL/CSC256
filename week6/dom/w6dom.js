document.addEventListener('DOMContentLoaded', function()
{
var header = document.getElementById("header");
var description = document.getElementById("description");
var changeText = document.getElementById("changeText");
var changeStyle = document.getElementById("changeStyle");
changeText.addEventListener("click", function(){
    header.textContent = "DOM time :)"
    description.textContent = "javascript is fun"
})

changeStyle.addEventListener("click", function(){
    header.style.color = "rebeccapurple";
    description.style.color = "blue";
})
});

var elementById = document.getElementById('myId');
// select elements by CSS class
    //var elementByClass = document.getElementsByClassName('');
// get first element that matches CSS selector
    //var elementBySelector = document.querySelector('');
// get all elements that match CSS selector
    //var allElementsBySelector = document.querySelectorAll('');
// add child element
var newElement = document.createElement('div');
newElement.textContent = "new element :)";
elementById.appendChild(newElement);
// remove child element
elementById.removeChild(newElement);
