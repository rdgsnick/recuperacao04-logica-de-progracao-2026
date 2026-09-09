// Uma academia deseja registrar o desempenho de três alunos em uma avaliação física.
// Para cada aluno, solicite:
// - aluno.
// - Quantidade de pontos obtidos.
// Cada aluno deverá ser representado por um **objeto** contendo o nome e a pontuação.
// Todos os alunos deverão ser armazenados em um **vetor**.
// Ao final, o programa deverá apresentar:
// - aluno e pontuação de todos os alunos.
// - Quantidade de alunos com pontuação maior ou igual a `60`.
// - Quantidade de alunos com pontuação menor que `60`.
// Considere pontuações válidas entre `0` e `100`.
// Caso seja informada uma pontuação inválida, solicite o valor novamente.
import leia from "readline-sync"

var alunos = [{
    nomes:null,
    pontos:0,
},
{
    nomes:null,
    pontos:0,
},
{
    nomes:null,
    pontos:0,
},
];

var menor60 = 0;
var acima60 = 0;

for(var i = 0; i < 3; i++){
    var nome = leia.question("qual o nome do aluno: ")
         alunos[i].nomes = nome;

    var ponto = leia.questionInt("quantos pontos o aluno tem: ")
        if(ponto >= 60){
            acima60++
        }else if(ponto <= 60){
            menor60 ++
        }else if (ponto > 100){
            console.log('pontuacao invalida')
        }
            alunos[i].pontos = ponto;

}

for(var i = 0; i < 3; i++){
    console.log("aluno " + (i+ 1) + ": " + alunos[i].nomes)
    console.log("pontos: " + alunos[i].pontos)
}


console.log("menores que 60: " + menor60)
console.log("maiores ou igual a 60: " + acima60)