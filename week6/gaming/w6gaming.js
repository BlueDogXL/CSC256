function updateStats()
{
    event.preventDefault();
    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;
    var input3 = document.getElementById("input3").value;
    var input4 = document.getElementById("input4").value;

    var output ="HP: " + input1 + "\n\n";
    output += "ATK: " + input2 + "\n\n";
    output += "MAG: " + input3 + "\n\n";
    output += "DEF: " + input4;

    document.getElementById("output").value = output;
}