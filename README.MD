Já havia upado no github, mas resolvi incrementar o repositório com todas as atividades do curso inteiro. Por esse motivo, a data não será igual a conclusão dos cursos iniciais.
As aulas iniciais não eram tão importantes pois se tratavam de conhecimentos primários e comparações com outras linguigens.
Com isso em vista, não achei necessário a descrição aqui.

*** A partir desse ponto, será incluído na descrição as aulas ***

Explore funções e listas

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