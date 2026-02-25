function generarPortfolio(cascaronVacio) {
    fetch("https://cdn.contentful.com/spaces/mrecivxiff7k/environments/master/entries?access_token=tU1bnxqC3l5kjvEjyy3J6pXQLqLGpuYmj5ukSKPTtbU&content_type=work")
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            let entries = [];
            data.items.map(dato => {
                entries.push(dato.fields)
            });
            // console.log(entries)

            entries.forEach((element) => {
                // title
                const title = element.tituloWork;
                // descripcion
                const description = element.descriptionWork;

                // Obtenemos el id de la img de cada elemento
                const imgID = element.imagenWork.sys["id"];
                fetch(`https://cdn.contentful.com/spaces/mrecivxiff7k/environments/master/assets/${imgID}?access_token=tU1bnxqC3l5kjvEjyy3J6pXQLqLGpuYmj5ukSKPTtbU&content_type=work`)
                    .then(respose => respose.json())
                    .then((imagen) => {
                        // URL de imagen
                        const imgUrl = imagen.fields.file["url"];

                        // Generamos los templates
                        const newCard = generarCard(imgUrl, title, description); 

                        cascaronVacio.innerHTML += newCard;


                    })

            })

        })
}
