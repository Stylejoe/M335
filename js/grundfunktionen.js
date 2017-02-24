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

