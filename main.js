checkpass = "";


function confirm()
{
    checkpass = document.getElementById("input_password").value;

    if(checkpass == "HMSPass_ebnet")
    {
        document.getElementById("false_pass").innerHTML = "Correct!"
        window.location = "mainpage.html";
    } 
    else
    {
        document.getElementById("false_pass").innerHTML = "Incorrect Password, Try Again.";
        document.getElementById("input_password").value = ""
    }
}

function cafe()
{
    window.location = "cafeteria.html";
}

function backmain()
{
    window.location = "index.html";
}

function backcaf()
{
    window.location = "mainpage.html";
}

function backmedia()
{
    window.location = "mainpage.html";
}

function backnurse()
{
    window.location = "mainpage.html";
}

function backstudent()
{
    window.location = "mainpage.html";
}

function backclasses()
{
    window.location = "mainpage.html";
}

function media()
{
    window.location = "mediacenter.html";
}

function gym()
{
    window.location = "gym.html";
}

function nurse()
{
    window.location = "nurse.html";
}

function student()
{
    window.location = "studentservices.html";
}

function classes()
{
    window.location = "yourclasses.html";
}

function mapcaf()
{
    window.location = "cafeteriamap.html"
}