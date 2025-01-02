var sidenavbar=document.querySelector(".side-navbar-content");
var menuicon=document.querySelector(".navbar-menu");
function showNavbar(){
    if(sidenavbar.style.display=="none"){
    sidenavbar.style.display ="block";
    }
    else{
        sidenavbar.style.display ="none";
    }
}
showNavbar();

