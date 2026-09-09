
// Uma locadora deseja cadastrar alguns filmes para consulta.
// Inicialmente, solicite ao usuário a quantidade de filmes que serão cadastrados.
// Para cada filme, solicite:
// - Título.
// - Ano de lançamento
// Cada filme deverá ser representado por um **objeto** e armazenado em um **vetor**.
// Após realizar todos os cadastros, solicite ao usuário o título de um filme para pesquisa.
// O programa deverá percorrer o vetor procurando pelo filme informado.
// Caso encontre, apresente:
// - Título do filme.
// - Ano de lançamento.
// Caso não encontre, apresente:
// `Filme não encontrado.`
import leia from "readline-sync"
var quantidade = leia.questionInt( "quantos filmes deseja cadastrar ")
var filmes = [];
var opcao = 1;

while(quantidade >= 0){
    console.log("");

    console.log("1 - Cadastro de filmes");
    console.log("2 - Listar filmes");
    console.log("3 - Pesquisa de filmes");
   

    opcao = leia.questionInt("Escolha uma opcao: ");

    if(opcao == 1){

        var titulo = leia.question("Qual o titulo do filme: ");

        var anolancamento = leia.questionInt("Qual o ano de lancamento do filme: ");

        var filme = {
            titulos: titulo,
            ano: anolancamento
        };

        filmes.push(filme);

        console.log("filme cadastrado!");
quantidade--
    }else if(opcao == 2){

        for(var i = 0; i < filmes.length; i++){

            console.log("Titulo: " + filmes[i].titulos);
            console.log("ano de lançamento: " + filmes[i].ano);
        }

    }else if(opcao == 3){

        var pesquisa = leia.question("Qual filme deseja pesquisar: ");

        var achou = false;

        for(var i = 0; i < filmes.length; i++){

            if(filmes[i].titulos == pesquisa){

                console.log("Titulo: " + filmes[i].titulos);
                console.log("ano de lancamento: " + filmes[i].ano);

                achou = true;
            }
        }

        if(achou == false){

            console.log("filme nao encontrado.");
        }

    }

      

    else{

        console.log("Opcao invalida.");
    }
}
