const y = Math.floor(Math.random() * 100);

function verificar() {
    let x = Number(document.getElementById("numero").value);

    console.log("Digitado:", x);
    console.log("Secreto:", y);

    let resposta = document.getElementById("mensagem");

    if (x < y) {
        resposta.innerHTML = "Número pequeno! Tente um maior.";
    } else if (x > y) {
        resposta.innerHTML = "Número grande! Tente um menor.";
    } else {
        resposta.innerHTML = "Número igual! 🎉 Você acertou!";
    }
}