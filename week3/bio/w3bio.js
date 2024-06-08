var pageTitle = "Alex's info";
var major = "Game Programming";
var email = "alecaraw@uat.edu";
var gradDate = "Expected graduation date: May 2025";
function setPageInfo()
{
    document.getElementById("h1PageTitle").textContent = pageTitle;
    document.getElementById("divMajor").textContent = major
    document.getElementById("divEmail").textContent = email;
    document.getElementById("divGradDate").textContent = gradDate;
}