// funcion que toma un contenedor del dom y le agrega un nuevo contenedor con las cards de servicios
function generarServicios(cascaronVacio) {
    // Fetch a Contentful de los servicios
    fetch("https://cdn.contentful.com/spaces/mrecivxiff7k/environments/master/entries?access_token=tU1bnxqC3l5kjvEjyy3J6pXQLqLGpuYmj5ukSKPTtbU&content_type=service")
        .then(response => response.json())
        .then(data => {
            // console.log("//////////// Services ////////////");
            // console.log(data)
            let entries = [];
            data.items.map(dato => {
                entries.push(dato.fields)
            });
            // console.log(entries)

            // console.log(entries.length)
            entries.forEach((element) => {
                // title
                const title = element.tituloService;
                // descripcion
                const description = element.descriptionService;
                // console.log(title)
                // console.log(description)

                // Obtenemos el id de la img de cada elemento
                const imgID = element.imagenService.sys["id"];
                fetch(`https://cdn.contentful.com/spaces/mrecivxiff7k/environments/master/assets/${imgID}?access_token=tU1bnxqC3l5kjvEjyy3J6pXQLqLGpuYmj5ukSKPTtbU&content_type=work`)
                    .then(respose => respose.json())
                    .then((imagen) => {
                        // URL de imagen
                        const imgUrl = imagen.fields.file["url"];

                        // Generamos los templates
                        const newCard = generarCard(imgUrl, title, description); 

                        cascaronVacio.innerHTML += newCard;

                    })
                    /*------------------Agregar-----------------------
                    funcion en el js de services al home
                    arreglar contenedor con el titulo
                    */
                    
                })
        })

}