var wordArray = ["JavaScript", "cascading", "html"]

function buildTable(table)
{
    var table = document.getElementById("crossword");
    // make the rows
    for (var i = 0; i < 10; i++)
    {
        // make a new row
        var row = document.createElement("tr");
        // make the columns
        for (var j = 0; j < 10; j++)
        {
            // make a new column
            var column = document.createElement("td");
            // add it to row
            row.appendChild(column);
        }
        // add row to table
        table.appendChild(row);
    }
}

function buildClues(wordIndex, direction, startingRow, startingColumn, table, showAnswer)
{
    // loop through letters and add them to the table
    for (var i = 0; i < wordArray[wordIndex].length; i++)
    {
        var tr;
        var td;
        var rowIndex = 0;
        var colIndex = 0;
        // if across, stays in same row and moves 1 column each loop
        if (direction == "across")
        {
            rowIndex = startingRow;
            colIndex = startingColumn + i;
        }
        else if (direction == "down")
        {
            rowIndex = startingRow + i;
            colIndex = startingColumn;
        }
        else 
        {
            console.log("Invalid direction for word: " + wordArray[wordIndex]);
        }
        tr = table.rows[rowIndex];
        td = tr.cells[colIndex];
        if (td.childElementCount == 0)
        {
            var input = document.createElement("input");
            input.setAttribute("maxLength", 1);
            if (showAnswer == true)
            {
            input.value = wordArray[wordIndex][i].toUpperCase();
            }
            td.appendChild(input);
        }
        else if (showAnswer)
        {
            // if the box already exists, find the box and add the letter
            var existingInput = td.getElementsByTagName("input")[0];
            existingInput.value = wordArray[wordIndex][i].toUpperCase();
        }
    }
}
function revealAnswer()
{
    buildClues(0, "across", 1, 0, document.getElementById("crossword"), true);
    buildClues(1, "down", 0, 1, document.getElementById("crossword"), true);
    buildClues(2, "down", 0, 9, document.getElementById("crossword"), true);
}