Já havia upado no github, mas resolvi incrementar o repositório com todas as atividades do curso inteiro. Por esse motivo, a data não será igual a conclusão dos cursos iniciais.
As aulas iniciais não eram tão importantes pois se tratavam de conhecimentos primários e comparações com outras linguigens.
Com isso em vista, não achei necessário a descrição aqui.

*** A partir desse ponto, será incluído na descrição as aulas ***

Explore funções e listas (js-curso-2-aula_3)

v2.0 - Verificando o chute (correçaõ)
v2.1 - Contando tentativas
v2.2 - Botão Reiniciar
    Nessa aula, encontrei um pequeno problema: após o botão Novo Jogo era habilitado, ao reiniciar a página para iniciar uma
    nova tentativa, o botão continuava habilitado. Resolvi isso inserindo no código, nas linha 8 e 9 o seguinte:
        let elementoReiniciar = document.getElementById("reiniciar");
        elementoReiniciar.disabled = true;
    Já na linha 21, dentro da função verificarChute() o código:
        elementoReiniciar.disabled = false;
    que habilita o botão novo jogo.
    Dessa forma, sempre que a página for atualizada, mesmo que já esteja aberta, o botão Novo Jogo sempre estará desabilitado.

v2.3 - Reiniciando o jogo
    O conteúdo da aula poderia ter sido reduzido com a adição da função: 
        function funcaoReiniciar() {
        window.location.reload(true); 
        }
    atrelada ao botão Novo jogo no HTML. Essa função simplesmente recarrega a página e lê novamente o código, não precisando
    adicionar mais variáveis e funções, deixando mais leve a execução.

    OBS: A atividade em que foi pedido para resolver a média de um aluno, beaseando-se em quatro notas (nota1, nota2, nota3, nota4) está no arquivo "app1.js". No index.html, especificamente na linha 39, foi adicionado o código "<script src="app1.js" defer></script>" para que os calculos da média fosse exibidos no console, retornando "aprovado" ou "reprovado" caso a média for >=5, que sabemos ser 5,25, portanto, aprovado.

v3.0 - Documentação sobre listas
v3.1 - Implementando a lista
v3.2 - Limitando os números sorteados
    Adição das variáveis numerosSorteados, numeroLimite e a inclusão de um if:
        if (maxEscolhidos == numeroLimite) {
        numerosSorteados = [];
        }
    condição que reset a lista quando o número de sorteados chegar a 10 (numeorLimite).