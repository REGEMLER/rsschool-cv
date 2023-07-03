const burger = document.getElementById(`burger`);
const menu = document.getElementById(`header-menu`);
let isMenuOpen = false;

function showMenu(){
    menu.classList.add("header__menu__active");
    burger.classList.add("burger__active"); 
    document.body.style.overflowY = "hidden";
    isMenuOpen = true;
 }
 
 
function hideMenu(){
    menu.classList.remove("header__menu__active");
    burger.classList.remove("burger__active"); 
    document.body.style.overflowY = "";
    isMenuOpen = false;
}

function moveMenuWithBurger(event){
    event.stopPropagation();
     if(menu.classList.contains("header__menu__active")){
        menu.classList.add("header__menu__transition-slow");
        hideMenu(); 
        setTimeout(() => {
          menu.classList.remove("header__menu__transition-slow");
        },1100)
     } else {
         showMenu();
     }
}
 
function hideMenuWithBody(){
     if(!isMenuOpen){
         return; 
     }   
     menu.classList.add("header__menu__transition-slow");
     hideMenu(); 
     setTimeout(() => {
       menu.classList.remove("header__menu__transition-slow");
     },1100)
}
 
burger.addEventListener("click", moveMenuWithBurger); 
document.body.addEventListener("click", hideMenuWithBody);