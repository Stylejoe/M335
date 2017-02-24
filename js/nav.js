
function startupHide()
{
    $("#home").show();
    $("#map").hide();
}

function navigate(src,dest)
{
    console.log("Navigate Success");
    var srcid = $(src);
    var destid = $(dest);

    srcid.hide();
    destid.show();
}