const numerosGenerados = document.getElementById("numerosGenerados");


function generarNumero() {
    return Math.floor(Math.random() * 10000).toString().padStart(4, "0");
}


function generar40Numeros() {
    numerosGenerados.innerHTML = "";
    for (let i = 1; i <= 40; i++) {
        const numero = generarNumero();
        const numeroDiv = document.createElement("div");
        numeroDiv.textContent = `Número ${i}: ${numero}`;
        numerosGenerados.appendChild(numeroDiv);
    }
}

document.getElementById("generarNumeros").addEventListener("click", generar40Numeros);
