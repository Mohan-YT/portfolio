var sidenav=document.querySelector(".side-navbar")

function showNavbar(){
    sidenav.style.left="0"
}
function closeNavbar(){
    sidenav.style.left="-50%"
}
// button
var button=document.querySelector(".contact-container button")
button.addEventListener("click",function(){
    button.style.backgroundColor="green"
    
})