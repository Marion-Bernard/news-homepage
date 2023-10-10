const toggleMenu = document.querySelector(".toggle-menu")
const menu = document.querySelector(".menu")
// const menuBordure = document.querySelector(".menu-bordure")
// const menuComplet = document.querySelector(".menu-complet")

toggleMenu.addEventListener("click",function(){
    const open = JSON.parse(toggleMenu.getAttribute('aria-expanded')) /*Pour avoir la valeur et pas la string*/
    toggleMenu.setAttribute('aria-expanded',!open) /* si Aria expanded true -> false, et vice-versa*/
    menu.toggleAttribute("hidden");
    // menuBordure.toggleAttribute("hidden")
    // menuComplet.toggleAttribute("hidden")

 
    if (!menu.hidden) {
            menu.querySelector('a').focus();
          }
})
