// Uma loja de jogos deseja criar um sistema simples para cadastrar e consultar jogos.
// O programa deverá apresentar repetidamente o seguinte menu:
// `1 - Cadastrar jogo`
// `2 - Listar jogos`
// `3 - Pesquisar jogo`
// `0 - Sair`
// Cada jogo deverá ser representado por um **objeto** contendo:
// - Nome.
// - Plataforma.
// Todos os jogos deverão ser armazenados em um **vetor**.
// Na opção `Cadastrar jogo`, solicite o nome e a plataforma e adicione o jogo ao vetor.
// Na opção `Listar jogos`, apresente todos os jogos cadastrados.
// Na opção `Pesquisar jogo`, solicite o nome de um jogo e procure no vetor.
// Caso encontre, apresente:
// - Nome do jogo
// - Plataforma.
// Caso não encontre, apresente:
// `Jogo não encontrado.`
// O menu deverá continuar sendo apresentado até que o usuário escolha a opção `0`.
import leia from "readline-sync"

var jogos = [];
var opcao = 1;

while(opcao != 0){
    console.log("");

    console.log("1 - Cadastro de jogos");
    console.log("2 - Listar jogos");
    console.log("3 - Pesquisa de jogos");
    console.log("0 - Sair");

    opcao = leia.questionInt("Escolha uma opcao: ");

    if(opcao == 1){

        var nome = leia.question("Qual o nome do jogo: ");

        var plataforma = leia.question("Qual a plataforma do jogo: ");

        var jogo = {
            titulos: nome,
            pataformas: plataforma
        };

        jogos.push(jogo);

        console.log("jogo cadastrado!");

    }else if(opcao == 2){

        for(var i = 0; i < jogos.length; i++){

            console.log("Titulo: " + jogos[i].titulos);
            console.log("plataforma: " + jogos[i].pataformas);
        }

    }else if(opcao == 3){

        var pesquisa = leia.question("Qual jogo deseja pesquisar: ");

        var achou = false;

        for(var i = 0; i < jogos.length; i++){

            if(jogos[i].titulos == pesquisa){

                console.log("Titulo: " + jogos[i].titulos);
                console.log("plataforma: " + jogos[i].pataformas);

                achou = true;
            }
        }

        if(achou == false){

            console.log("jogo nao encontrado.");
        }

    }else if(opcao == 0){

        console.log("Programa encerrado.");

    }else{

        console.log("Opcao invalida.");
    }
}
