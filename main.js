window.addEventListener("DOMContentLoaded", function(event){

});
let sections=document.querySelectorAll("body > main > section")

function getNextSection(current)
{
    if (current.id ==="red")
    {
        return document.getElementById("orange");
    }
}