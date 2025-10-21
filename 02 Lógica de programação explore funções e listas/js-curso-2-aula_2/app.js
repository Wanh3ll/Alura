let escolha = prompt("Defina o número máximo para o jogo:");
let numeroAleatorio = numeroSecreto();
function alterarTexto(tag, textoElemento) {
  let elemento = document.querySelector(tag);
  elemento.innerHTML = textoElemento;
}
console.log(`O numero secreto é ${numeroAleatorio}`);
alterarTexto("h1", "Jogo do número secreto");
alterarTexto("p", `Escolha um número entre 1 e ${escolha}`);
function verificarChute() {
  let chute = document.querySelector("input").value;
  let resultado = (chute == numeroAleatorio);
  if (resultado != true) {
    alert("Você errou!");
  }
  else {
    alert("Você acertou!");
  }  
}

function numeroSecreto() {
  return parseInt(Math.random() * escolha + 1);
}