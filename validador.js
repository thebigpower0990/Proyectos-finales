const formularioValidador = document.getElementById("formularioValidador");
const resultado = document.getElementById("resultado");
const numerosGenerados = [
   
];


function validarNumero() {
    const indice = parseInt(document.getElementById("numero").value) - 1;
    const numeroIntroducido = document.getElementById("numeroIntroducido").value;

    if (numerosGenerados[indice] === numeroIntroducido) {
        resultado.textContent = "El número es válido!";
    } else {
        resultado.textContent = "El número es inválido!";
    }
}

formularioValidador.addEventListener("submit", function(event) {
    event.preventDefault();
    validarNumero();
});
