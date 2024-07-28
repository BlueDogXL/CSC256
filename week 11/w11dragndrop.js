function setUpEvents()
{
    imgDrag.addEventListener("dragstart", dragStart);
    box1.addEventListener("dragover", dragOver);
    box2.addEventListener("dragover", dragOver);
    box1.addEventListener("drop", drop);
    box2.addEventListener("drop", drop);
}


function dragStart(event)
{
    event.dataTransfer.setData("text", event.target.id);
}
function dragOver(event)
{
    event.preventDefault();
}
function drop(event)
{
    event.preventDefault();
    var elementId = event.dataTransfer.getData("text");
    var draggedElement =document.getElementById(elementId);
    event.target.appendChild(draggedElement);
}