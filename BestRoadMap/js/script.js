var links = document.getElementById("menuLinks");
var dropdown = document.getElementById("dropdown");



function mobileNav() {
    if (links.style.visibility === "visible") {
        links.style.visibility = "hidden";
        links.style.opacity = 0;
        links.style.height = 0;
        links.style.overflow = "hidden";
        dropdown.style.transform = "rotate(0deg) translateY(4px)";

    } else {
        links.style.visibility = "visible";
        links.style.height = "auto"; 
        links.style.overflow = "hidden";
        links.style.opacity = 1;
        dropdown.style.transform = "rotate(-180deg) translateY(-4px)";
      
    }
}

function closeNav() {  
    links.style.visibility = "hidden";
    links.style.opacity = 0;
    links.style.height = 0;
    links.style.overflow = "hidden";
}