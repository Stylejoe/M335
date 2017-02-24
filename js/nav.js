
function startupHide()
{
    console.log("startupHide success");
    $("#home").show();
    $("#mappage").hide();
}

function navigate(src,dest)
{
    console.log("Navigate Success");
    var srcid = $("#"+src);
    var destid = $("#"+dest);

    srcid.hide();
    destid.show();
}