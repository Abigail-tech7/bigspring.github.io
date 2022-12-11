const menuIcon = document.querySelector('.menu-containner');
const showMenu = document.querySelector('.main-menuContainer');
const subMenuLink = document.querySelector('.menuLinks-container');

const sliderContainer = document.querySelector('.silder-container');
const slider = document.querySelector('.slider');


menuIcon.addEventListener('click',function(){
    // console.log('clicked');
    
        showMenu.classList.toggle('show-menu');

    
    
})

subMenuLink.addEventListener('click',function(evt){
    // document.width();
    const link =evt.target.closest('.menuLink');
    const subMenu = evt.target.closest('.menuLink').querySelector('.subMenuLinks');
   if(window.innerWidth <1000){
    if(link){
        if(subMenu) subMenu.classList.toggle('hidden');
        }
   }
    
});





