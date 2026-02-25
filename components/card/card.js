// funciona para generar una card con los datos pasados como parametros 
function generarCard( imgUrl, title, description){
    const template = `
        <div class="card-container">
            <div class="card">
                <img class="card__img"
                    src="${imgUrl}"
                    alt="">
                <h3 class="card__title">${title}</h3>
                <div class="text_container">
                    <p class="card__description">${description}</p>
                </div>
            </div>
        </div>
    `
    return template;
}