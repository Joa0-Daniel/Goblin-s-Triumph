document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
            alert("Por favor, preencha todos os campos.");
        } else {
            // 
            alert("Formulário enviado com sucesso!");
            contactForm.reset();
        }
    });
});
