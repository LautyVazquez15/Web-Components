// Funcion para agregar un form a un contenedor
function agregarForm(cascaronVacio){
    
    const template = `
                <form class="contactform">
                    <div class="contactform__title-container">
                        <h2 class="contactform__title">Escribeme</h2>
                    </div>
                <div class="contactform__content">
                <div class="inputs-container">
                    <label class="label">
                        <p class="label__text">Nombre</p>
                        <input class="contactform__inputs" type="text" placeholder="Tu nombre" name="name">
                    </label>
                    <label class="label">
                        <p class="label__text">Mail</p>
                        <input class="contactform__inputs" type="text" placeholder="tu@mail.com" name="email">
                    </label>
                </div>     
                <label class="label">
                    <p class="label__text">Mensaje</p>
                    <textarea class="contactform__inputs contactform__textarea" name="message"></textarea>
                </label>
                <button class="contactform__button">Enviar</button>
            </div>
        </form>
    `
    cascaronVacio.innerHTML = template;

}
