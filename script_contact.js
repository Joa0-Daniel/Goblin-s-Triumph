document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;

        if (name === "" || email === "" || message === "") {
            alert("Por favor, preencha todos os campos do formulário.");
            event.preventDefault(); // Impede o envio do formulário
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;

        if (name === "" || email === "" || message === "") {
            alert("Por favor, preencha todos os campos do formulário.");
            event.preventDefault(); // Impede o envio do formulário
        } else {
            alert("Mensagem enviada com sucesso!"); // Exibe uma mensagem de confirmação
        }
    });
});
