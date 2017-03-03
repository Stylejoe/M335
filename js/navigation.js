//Navigation im Menü
function navigate(src,dest)
{
    console.log("Navigate Success");

    noneDisplayElementWithId(src);
    displayElementWithId(dest);
}

//Funktionen um Container anzuzeigen/verschwinden lassen
    function displayElementWithId(id)
    {
        var element = document.getElementById(id);
        element.style.display = "block";

    }

    function noneDisplayElementWithId(id)
    {
        var element = document.getElementById(id);
        element.style.display = "none";
    }

    function HideAllElements()
    {
        document.getElementById("register").style.display = "none";
        document.getElementById("nav").style.display = "none";
        document.getElementById("map").style.display = "none";
        document.getElementById("home").style.display = "none";
        document.getElementById("login").style.display = "none";
         document.getElementById("registerEmail").style.display = "none";

    }

    function showStartScreen(){
        document.getElementById("register").style.display = "none";
        document.getElementById("nav").style.display = "block";
        document.getElementById("map").style.display = "none";
        document.getElementById("home").style.display = "block";
        document.getElementById("login").style.display = "none";
         document.getElementById("registerEmail").style.display = "none";
    }