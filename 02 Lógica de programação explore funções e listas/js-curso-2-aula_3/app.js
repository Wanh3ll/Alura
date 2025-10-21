let numeroAleatorio = 5;
//let numeroAleatorio = numeroSecreto();
let tentativas = 1;
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
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        alterarTexto("p", `Isso ai! Você descobriu o número secreto que é ${numeroAleatorio} com ${tentativas} ${palavraTentativa}.`);       
        }
    else if (chute < numeroAleatorio) {
        alterarTexto("h1", "Tente Novamente");
        alterarTexto("p", "O número secreto é maior 😮");
        tentativas++;
    }
    else {
        alterarTexto("h1", "Tente Novamente");
        alterarTexto("p", "O número secreto é menor 😮");
        tentativas++;
    }
}
function numeroSecreto() {
    return parseInt(Math.random() * 10 + 1);
}










