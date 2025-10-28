let numerosSorteados = [];
let numeroLimite = 10;
//let numeroAleatorio = 5;
let numeroAleatorio = numeroSecreto();
let tentativas = 1;
let elementoReiniciar = document.getElementById("reiniciar");
elementoReiniciar.disabled = true; // para que o botão novo jogo inicie desabilitado

textoInicial();
limparChute();

function verificarChute() {
    let chute = document.querySelector("input").value;
    if (chute == numeroAleatorio) {
        alterarTexto("h1", "Você acertou! 🎉");
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        alterarTexto("p", `Isso ai! Você descobriu o número secreto que é ${numeroAleatorio} com ${tentativas} ${palavraTentativa}.`);       
        alterarTexto("input", "");
        elementoReiniciar.disabled = false; // habilita o botão novo jogo ao acertar
        }
    else if (chute < numeroAleatorio) {
        alterarTexto("h1", "Tente Novamente");
        alterarTexto("p", "O número secreto é maior 😮");
        limparChute();
        tentativas++;
    }
    else {
        alterarTexto("h1", "Tente Novamente");
        alterarTexto("p", "O número secreto é menor 😮");
        limparChute();
        tentativas++;
    }
}

// Sessão de funções
function textoInicial() {
    alterarTexto("h1", "Jogo do número secreto");
    alterarTexto("p", "Escolha um número entre 1 e 10");
}
function alterarTexto(tag, textoElemento) {
    let elemento = document.querySelector(tag); // seleciona o elemento pela tag e atribui à variável
    elemento.innerHTML = textoElemento;
    if ('speechSynthesis' in window) { // Verifica se a API é suportada
        let utterance = new SpeechSynthesisUtterance(textoElemento); // Cria uma nova instância de fala
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.5; // Define a velocidade da fala
        window.speechSynthesis.speak(utterance); // Fala o texto
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }

}
function numeroSecreto() {
    let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1); // número aleatório entre 1 e 10
    let maxEscolhidos = numerosSorteados.length;
    if (maxEscolhidos == numeroLimite) {
        numerosSorteados = []; // reseta a lista se todos os números já foram sorteados
    }
    if (numerosSorteados.includes(numeroEscolhido)) {
        return numeroSecreto(); // chama a função novamente se o número já foi sorteado
    }
    else {
        numerosSorteados.push(numeroEscolhido); // adiciona o número sorteado à lista
        console.log(numerosSorteados); // exibe a lista de números sorteados no console
        return numeroEscolhido;
    }
}
function limparChute() {
    chute = document.querySelector("input"); // seleciona o valor do input
    chute.value = "";
}
function funcaoReiniciar() {
    numeroAleatorio = numeroSecreto();
    limparChute();
    tentativas = 1;
    textoInicial();
    elementoReiniciar.disabled = true;
}









