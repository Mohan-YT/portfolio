//  Side Navbar
var sidenav=document.querySelector(".side-navbar")

function showNavbar(){
    sidenav.style.left="0"
}
function closeNavbar(){
    sidenav.style.left="-50%"
}

//  Products 
var productcontainer=document.getElementById("products")
var search=document.getElementById("search")
var productlist=productcontainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredvalue=event.target.value.toUpperCase()
    for(a=0;a<productlist.length;a=a+1)
    {
        var productname=productlist[a].querySelector("p").textContent
        if(productname.toUpperCase().indexOf(enteredvalue)<0)
            {
                productlist[a].style.display="none"
            }
          else  {
                productlist[a].style.display="block"
            }

    }
})