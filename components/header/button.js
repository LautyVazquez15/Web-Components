// funcion para el dinamismo del boton menu
const buttom = document.querySelector(".menu__button");
const menu = document.querySelector(".header__menu");
const container = document.querySelector(".main__conteiner")
const buttom2 = menu.firstElementChild;

buttom.addEventListener("click", () => {
    console.log("Boton presionado")
    menu.style.display = "flex"
    // desabilitamos el resto de los componentes
    container.style.display = "none"
})
buttom2.addEventListener("click", () => {
    console.log("Boton presionado")
    menu.style.display = "none"
    // habilitamos nuevamente los componentes del body
    container.style.display = "initial"
})