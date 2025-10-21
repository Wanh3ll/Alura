let numeroAleatorio = numeroSecreto();

function alterarTexto(tag, textoElemento) {
    let elemento = document.querySelector(tag);
    elemento.innerHTML = textoElemento;
}

alterarTexto("h1", "Jogo do número secreto");
alterarTexto("p", "Escolha um número entre 1 e 10");

function verificarChute() {
    let chute = document.querySelector("input").value;
    if (chute == numeroAleatorio) {
        alterarTexto("h1", "Você acertou! 🎉");
        alterarTexto("p", "Parabéns por acertar o número secreto.");
    }
    else if (chute < numeroAleatorio) {
        alterarTexto("h1", "Tente Novamente");
        alterarTexto("p", "O número secreto é maior 😮");
    }
    else {
        alterarTexto("h1", "Tente Novamente");
        alterarTexto("p", "O número secreto é menor 😮");
    }
}
function numeroSecreto() {
    return parseInt(Math.random() * 10 + 1);
}












