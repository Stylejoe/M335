
function startupHide()
{
    console.log("startupHide success");

    //wenn man registriert ist sollte man sich nicht mehr anmelden!
    if(true)
    {
    $("#register").show();
    $("#home").hide();
    $("#map").hide();
    $("header").hide();

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