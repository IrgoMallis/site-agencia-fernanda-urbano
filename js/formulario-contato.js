document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-contato");
    const mensagemSucesso = document.getElementById("mensagem-sucesso");
    if (!form || !mensagemSucesso) return;

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        mensagemSucesso.style.display = "block";
        form.reset();
        mensagemSucesso.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
});
