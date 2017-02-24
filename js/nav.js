
function startupHide()
{
    console.log("startupHide success");

    //wenn man registriert ist sollte man sich nicht mehr anmelden!
    if(true)
    {
    $("#register").hide();
    $("#nav").show();
    $("#home").show();
    $("#map").hide();
    

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