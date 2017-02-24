

function navigate(dest)
{
    console.log("Navigate Success");
    var div = document.getElementsByTagName("div");
    var destid = $("#dest");

    for(var i =0;i < div.length;i++)
    {
        div[i].hide();
    }
    destid.show();
}