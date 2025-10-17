let mensagemDeBoasVindas = 'Boas vindas ao App';
alert(mensagemDeBoasVindas);
let numeroSecreto = parseInt(Math.random() * 3);
//let numeroSecreto = 5; 
console.log(numeroSecreto);   
let numeroEscolhido = prompt("Digite um número entre 1 e 100");
let contador = 1;

while(numeroEscolhido != numeroSecreto){
        if (numeroEscolhido == numeroSecreto) {
            break;        
        }
        else if (numeroEscolhido < numeroSecreto) {
        alert("O número secreto é maior que " + numeroEscolhido);
            numeroEscolhido = prompt("Tente novamente!");
            if ( numeroEscolhido == numeroSecreto) {
                console.log(`Acertou o número secreto que era ${numeroSecreto}`);
            }
            else if (numeroEscolhido != numeroSecreto) {
                alert("Que pena, não foi dessa vez!\nErrou novamente.");            
            }   
        }
        else if (numeroEscolhido > numeroSecreto) {
        alert("O número secreto é menor que " + numeroEscolhido);
        numeroEscolhido = prompt("Tente novamente!");
            if ( numeroEscolhido == numeroSecreto) {
                console.log(`Acertou o número secreto que era ${numeroSecreto}`);
            }
            else if (numeroEscolhido != numeroSecreto) {
                alert("Que pena, não foi dessa vez!\nErrou novamente. ");
            }    
        }
        else {
        alert("Número inválido");
        }
        contador++;
        }
let tentativas = contador > 1 ? 'tentativas' : 'tentativa'; // operador ternário
alert(`Você acertou o número secreto que era ${numeroSecreto} em ${contador} ${tentativas}!`);

