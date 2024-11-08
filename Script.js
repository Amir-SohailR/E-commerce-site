
var sideNavMenu = document.getElementById("side-navbar-activate")
var sidenavbar = document.querySelector(".side-navbar-menu")
sideNavMenu.addEventListener("click ", function() {
    sidenavbar.style.marginLeft="0px"    
})
    document.getElementById('side-navbar-close').addEventListener("click", function(){
    document.querySelector('side-navbar-menu').style.marginLeft = "-60%"
})
     


/*sliders ----Imagesss*/
const sliderLeftNavs=document.getElementById("slider-left-activate")
const sliderRightNavs=document.getElementById("slider-right-activate")
const sliderimage = document.querySelector(".slider-image-container")    
var slidermargin= 0
console.log(sliderimage)
sliderLeftNavs.addEventListener("click",


    function(){
        slidermargin=slidermargin+100
    
        if(slidermargin>200)
        {
            slidermargin=0
            sliderimage.style.marginLeft=0;
        }
        else{
            sliderimage.style.marginLeft="-"+slidermargin+"vw";
        }
    })
    sliderRightNavs.addEventListener("click",
        function(){
            if(slidermargin==0)
            {
                slidermargin=100
                sliderimage.style.marginLeft="-"+slidermargin+"vw";
            }
            else{
                slidermargin=slidermargin+100
                sliderimage.style.marginLeft="-"+slidermargin+"vw";
            }
        })