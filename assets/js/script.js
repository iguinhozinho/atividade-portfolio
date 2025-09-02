document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Mensagem enviada!"); //mostra um alerta falso dizendo que foi enviado
      form.reset();
    });
  }
});
