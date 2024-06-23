// empty array that holds the movies
var moviesArray = [];

function addMovie(event)
{
    event.preventDefault();
    var textMovieInput = document.getElementById("textMovie");
    var movieTitle = textMovieInput.value.trim();
    if (movieTitle)
    {
        moviesArray.push(movieTitle);
        moviesArray.sort();
        // clear text from the input textbox
        textMovieInput.value = "";
    }
    updateMovieList();
}

function updateMovieList()
{
    var moviesArrayFormatted = [];
    var divMovies = document.getElementById("divMovieList");
    for (i = 0; i < moviesArray.length; i++)
    {
        moviesArrayFormatted.push("<div>" + moviesArray[i] + "</div>");
    }
    divMovies.innerHTML = moviesArrayFormatted.join('');
}

function clearList()
{
    moviesArray = [];
    updateMovieList();
}