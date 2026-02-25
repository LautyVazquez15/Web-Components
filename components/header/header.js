// funcion para generar el header en un contenedor
function agregarHeader(cascaronVacio){
    
    const template = `
        <header class="header">
                <a href="index.html">
                <img class="header__img"
                    src="../../assets/logo.png"
                    alt="logo">
                </a>
                <nav class="header__nav">
                    <ul class="nav__ul">
                        <li class="nav__ul__li"><a href="pages/portfolio/indexPortfolio.html">Portfolio</a></li>
                        <li class="nav__ul__li"><a href="pages/services/indexServices.html">Servicios</a></li>
                        <li class="nav__ul__li"><a href="pages/contact/indexContact.html">Contacto</a></li>
                    </ul>
                </nav>
        
                <button class="menu__button">
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                </button>
            
        
                <div class="header__menu">
                    <button class="menu__button">
                        <div class="bar"></div>
                        <div class="bar"></div>
                        <div class="bar"></div>
                    </button>
                    <ul class="menu__ul">
                            <li class="menu__li"> <a class="menu__link" href="pages/portfolio/indexPortfolio.html">Portfolio</a> </li>
                            <li class="menu__li"> <a class="menu__link" href="pages/services/indexServices.html">Servicios</a> </li>
                            <li class="menu__li"> <a class="menu__link" href="pages/contact/indexContact.html">Contactos</a> </li>
                    </ul>
                </div>
        </header>
    `
    cascaronVacio.innerHTML = template;

}


