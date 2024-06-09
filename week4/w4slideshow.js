// add event listener to fire this function when the page is loaded
document.addEventListener('DOMContentLoaded', initLinks);

var picturesArray = ["andersonerickson.png", "kimi.png", "ace.png", "G-1558.png", "G-1557.png"];
var currentImage = 0;

function initLinks()
{
    // add event listener to call a function when the Prev link is clicked
    document.getElementById("aPrevLink").addEventListener('click', processPrevious)
    // add event listener to call a function when the Next link is clicked
    document.getElementById("aNextLink").addEventListener('click', processNext)
}

function processPrevious(event)
{
    // prevent default navigation action of link
    event.preventDefault();
    currentImage = currentImage - 1;
    // if we go past the first one, loop around to the last one
    if (currentImage < 0)
    {
        currentImage = picturesArray.length - 1;
    }
    updateImage();
}

function processNext(event)
{
    event.preventDefault();
    currentImage = currentImage + 1;
    if (currentImage > picturesArray.length - 1)
    {
        currentImage = 0;
    }
    updateImage();
}

function updateImage()
{
    document.getElementById("imgPicture").src = picturesArray[currentImage];
}