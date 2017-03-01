function startupHide()
{
    console.log("startupHide success");

    //wenn man registriert ist sollte man sich nicht mehr anmelden!
    console.log(firebase.auth().currentUser + " CURRENT USER");
    if(firebase.auth().currentUser == null)
    
    {
    $("#register").show();
    $("#nav").hide();
    $("#home").hide();
    $("#map").hide();
    $("header").hide();
    }
    else
    {
    $("#register").hide();
    $("#nav").show();
    $("#home").show();
    $("#map").hide();
    $("header").show();
    }

}



function navigate(src,dest)
{
    console.log("Navigate Success");

    var srcid = $("#"+src);
    var destid = $("#"+dest);

    srcid.hide();
    destid.show();
}

function registered()
{

}