var piecesArray = [
    [null, 'b', null, 'b', null, 'b', null, 'b'],
    ['b', null, 'b', null, 'b', null, 'b', null],
    [null, 'b', null, 'b', null, 'b', null, 'b'],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    ['g', null, 'g', null, 'g', null, 'g', null],
    [null, 'g', null, 'g', null, 'g', null, 'g'],
    ['g', null, 'g', null, 'g', null, 'g', null]
]

function buildCheckerboard()
{
    var checkerboard = document.getElementById("checkerboard");
    for (var i = 0; i < 8; i++)
    {
        for (var j = 0; j < 8; j++)
        {
            var checkerSquare = document.createElement("div");
            checkerSquare.className = "checkerSquare";
            checkerSquare.setAttribute("id", "div" + i + j);
            if ((i + j) % 2 == 1)
            {
                // black
                checkerSquare.style.backgroundColor = "black";
                checkerSquare.addEventListener("click", movePiece);
            }
            else 
            {
                // white
            }
            checkerboard.appendChild(checkerSquare);

            if (piecesArray[i][j] != null)
            {
                createPiece("piece" + i + j, "checkerPiece-" + piecesArray[i][j], checkerSquare);
            }
        }
    }
}

function createPiece(id, pieceClass, pieceSquare)
{
    // make the thing
    var newPiece = document.createElement("div");
    // name it
    newPiece.setAttribute("id", id);
    // regular piece class
    newPiece.classList.add("checkerPiece");
    // change color
    newPiece.classList.add(pieceClass);

    newPiece.addEventListener("click", savePieceID);
    // add it to the board
    pieceSquare.appendChild(newPiece);
}

function movePiece(event)
{
    var selectedSquare = document.getElementById("selectedSquare");
    console.log("movePiece called!");
    var newSquareID = event.target.id;
    newSquareID = newSquareID.replace("piece", "").replace("div", "");
    var selectedPieceID = selectedSquare.textContent;
    if (selectedPieceID != newSquareID)
    {
        var oldSquare = document.getElementById("div" + selectedPieceID);
        var oldPiece = document.getElementById("piece" + selectedPieceID);
        var oldPieceColorClass = oldPiece.classList[1];
        oldSquare.removeChild(oldPiece);
        var newSquare = document.getElementById("div" + newSquareID);
        createPiece("piece" + newSquare, oldPieceColorClass, newSquare);
        selectedSquare.textContent = "";
    }
}

function savePieceID(event)
{
    var selectedSquare = document.getElementById("selectedSquare");
    var selectedPieceID = event.target.id;
    // removes the word 'piece' from the id so we just have the number
    selectedPieceID = selectedPieceID.replace("piece", "");
    // keep the ID in the selectedSquare span; it doesn't display on the page so we can do whatever we want here
    selectedSquare.textContent = selectedPieceID;
    console.log("selected piece: " + selectedPieceID);
}