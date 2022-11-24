window.addEventListener("DOMContentLoaded", function(event){


    let sections=document.querySelectorAll("body > main > section");  
    for(let i=0; i<sections.length ;i++){            
        
        /*document.getElementById("myDIV").addEventListener("wheel", myFunction);

                function myFunction() {
                this.style.fontSize = "35px";
                sections[i].addEventListener("",  */
    }
    
    function getNextSection(current)
    {
        if (current.id ==="red")
        {
            return document.getElementById("orange");
        }
        if (current.id ==="orange"){
            return document.getElementById("yellow");
        }
        if (current.id ==="yellow"){
            return document.getElementById("green");
        }
        if (current.id ==="green"){
            return document.getElementById("blue");
        }
        if (current.id ==="blue"){
            return document.getElementById("purple");
        }
    }    
});