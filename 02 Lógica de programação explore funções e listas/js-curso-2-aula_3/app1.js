let nota1 = 7;
let nota2 = 6;
let nota3 = 3;
let nota4 = 5;
let media = calcularMedia(nota1, nota2, nota3, nota4);
function calcularMedia(nota1, nota2, nota3, nota4) {
    let media = (nota1 + nota2 + nota3 + nota4) / 4;
    return media;
}
console.log(media);
function verificarAprovacao() {
    return media >= 5 ? "Aprovado" : "Reprovado";
}
console.log(verificarAprovacao());