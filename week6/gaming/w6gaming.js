function updateStats()
{
    event.preventDefault();
    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;
    var input3 = document.getElementById("input3").value;
    var input4 = document.getElementById("input4").value;

    var output ="Input 1: " + input1 + "\n\n";
    output += "Input 2: " + input2 + "\n\n";
    output += "Input 3: " + input3 + "\n\n";
    output += "Input 4: " + input4;

    document.getElementById("output").value = output;
}