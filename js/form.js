document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('contactModal');
    const btn = document.querySelector('.cta-button');
    const span = document.querySelector('.close-button');

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        let templateParams = {
            from_name: this.nombre.value,
            email_id: this.email.value,
            phone: this.telefono.value,
            message: this.mensaje.value
        };

        emailjs.send('service_pvzp9pl', 'template_x1sf37c', templateParams, 'TU_EoMYF81iKI_1Eel_1')
            .then(function() {
                alert('¡Mensaje enviado exitosamente!');
                modal.style.display = "none";
                document.getElementById('contactForm').reset();
            })
            .catch(function(error) {
                alert('Error al enviar el mensaje: ' + error);
            });
    });
});
