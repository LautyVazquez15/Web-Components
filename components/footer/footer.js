// Funcion para agregar un footer a un contenedor
function agregarFooter(cascaronVacio) {

    const template = `
            <footer class="footer">
            <div class="links">
                <div class="navegacion">      
                    <a class="icon__text" href="index.html">
                        <span>Home</span>
                    </a>
                    <span>|</span>
                    <a class="icon__text" href="pages/services/indexServices.html">
                        <span>Servicios</span>
                    </a>
                    <span>|</span>
                    <a class="icon__text" href="pages/contact/indexContact.html">
                        <span>Contacto</span>   
                    </a>        
                </div>
            </div>
            <div class="redes">
                <img class="redes__img" src="assets/gitHub.png" alt="">
                <img class="redes__img" src="assets/twitter.png" alt="">
                <img class="redes__img" src="assets/linkedin.png" alt="">
            </div>
        </footer> 
    `
    cascaronVacio.innerHTML = template;

}