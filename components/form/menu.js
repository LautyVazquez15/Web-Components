function envioMail() {
    // Funcion que manda por mail el mensaje del form
    const form = document.querySelector(".contactform")
    form.addEventListener("submit", evento => {
        evento.preventDefault();
        const formData = evento.target;
        const email = formData.email.value
        const message = formData.message.value;
        console.log(email)
        console.log(message)
        /*SEGUIMOS DENTRO DEL EVENTO SUBMIT*/
        // Agregamos un obj con los valores del form que luego usaremos
        const data = {
            to: "lautarovazquez1522@gmail.com",
            message: email + ": " +  message
        }

        fetch("https://apx.school/api/utils/email-to-student", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            //esto devuelve una promesa que capturamos con .then
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error en la solicitud");
                }
                return response.json();
            })
            .then(data => {
                console.log("Éxito:", data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    })
}

envioMail();
