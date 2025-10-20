function alterarTexto(tag, textoElemento) {
  let elemento = document.querySelector(tag);
  elemento.innerHTML = textoElemento;
}

alterarTexto("h1", "*** Jogo do número secreto ***");
alterarTexto("p", "Escolha um número entre 1 e 10");

function verificarChute() {
  console.log('O botão foi clicado!');
}
