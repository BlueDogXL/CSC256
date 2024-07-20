function buildChessboard()
{
    var chessboard = document.getElementById("chessboard");
    for (var i = 0; i < 8; i++)
    {
        for (var j = 0; j < 8; j++)
        {
            var chessSquare = document.createElement("div");
            chessSquare.className = "chessSquare";
            if ((i + j) % 2 == 1)
            {
                // black
                chessSquare.style.backgroundColor = "black";
            }
            else 
            {
                // white
            }
            chessboard.appendChild(chessSquare);
        }
    }
}