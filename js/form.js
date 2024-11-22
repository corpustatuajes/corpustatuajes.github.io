document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.querySelector('.cta-button');
    const modal = document.querySelector('.contact-form-modal');
    const form = document.getElementById('contactForm');
    const closeButton = document.querySelector('.close-button');

    ctaButton.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        emailjs.sendForm('service_pvzp9pl', 'template_wrk5iq8', form, 'aBZ2qXXXYT52_fSkN')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('¡Mensaje enviado con éxito!');
                form.reset();
                modal.style.display = 'none';
            })
            .catch((error) => {
                console.error('FAILED...', error);
                alert('Error específico: ' + error.text);
            });
    });

    window.onclick = (e) => {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    };
});