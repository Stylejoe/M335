function startupHide()
{
    console.log("startupHide success");

    //wenn man registriert ist sollte man sich nicht mehr anmelden!
    if(firebase.auth().currentUser == null)
    {
    $("#register").show();
    $("#home").hide();
    $("#map").hide();
    $("header").hide();
    }
    else
    {
    $("#register").hide();
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