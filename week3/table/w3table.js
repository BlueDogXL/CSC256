var data = 
        [
            ['Alex', 2, 'Game Programmer'],
            ['Second McGuy', 22, 'Yes Man'],
            ['Third Person', 3, 'Perspective'],
            ['Hitchhikers', 42, 'Guide to the Galaxy']
        ];

        function buildTable(theData)
        {
            var tableContainer = document.getElementById("divTableContainer");
            var table = document.getElementById("tableData");

            for (var i = 0; i < theData.length; i++)
            {
                var item = theData[i];
                var row = document.createElement("tr");

                for (var j = 0; j < item.length; j++)
                {
                    var column = document.createElement("td");
                    if (item[j] = 42)
                    {
                        column.style.color = green;
                    }
                    column.textContent = item[j];
                    row.appendChild(column);
                }
                table.appendChild(row);
            }
        }