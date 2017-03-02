   //round function for writeData
   function round(zahl, nachkommastelle)
    {
        wert = parseFloat(zahl);
        if(!wert){
            return 0;
        }

        var umrechnungsnachstelle = Math.pow(10, nachkommastelle);

        wert = (Math.round(wert * umrechnungsnachstelle) / umrechnungsnachstelle);
        return wert;
    }

    //How to show things
    function displayElementWithId(id)
    {
        var element = document.getElementById(id);
        element.style.display = "inline-block";
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

    }





