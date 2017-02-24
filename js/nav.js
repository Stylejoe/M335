function startupHide()
{
    console.log("startupHide success");

    //wenn man registriert ist sollte man sich nicht mehr anmelden!
    if(firebase.auth().currentUser == null)
    {
    $("#register").hide();
    $("#nav").show();
    $("#home").show();
    $("#map").hide();
<<<<<<< HEAD
    $("header").hide();
    }
    else
    {
    $("#register").hide();
    $("#home").show();
    $("#map").hide();
    $("header").show();
=======
    

>>>>>>> 97f36b1ccd9c45b310bbf081af2d5b00db5892e1
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