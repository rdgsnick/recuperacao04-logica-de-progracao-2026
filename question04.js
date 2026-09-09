
// Uma escola deseja organizar os dados de seus professores.

// Inicialmente, solicite ao usuário a 3
//  de professores que serão cadastrados.

// Para cada professor, solicite:

// - Nome.
// - Tempo de trabalho na escola em anos.

// Cada professor deverá ser representado por um **objeto** e armazenado em um **vetor**.

// Ao final, apresente:

// - Nome e tempo de trabalho de todos os professores.
// - Quantidade de professores com `5 anos ou mais` de trabalho na escola.
// - Quantidade de professores com menos de `5 anos` de trabalho.
// - Nome do professor com maior tempo de trabalho.

// ---
import leia from 'readline-sync'
var quantidade = leia.questionInt('quantos professores deseja cadastrar')

var professor = [{
    nomes:null,
    tempo :0,
},
{
    nomes:null,
    tempo :0,
},
{
    nomes:null,
    tempo :0,
},
]
var menor5 = 0;
var acima5 = 0;

for(var i = 0; i < 3
    ; i++){
    var nome = leia.question("qual o nome do professor: ")
         professor[i].nomes = nome;

    var tempo = leia.questionInt("quanto tempo o professor tem: ")
        if(tempo >= 5){
            acima5++
        }else if(tempo <= 5){
            menor5 ++
        }
            professor[i].tempo = tempo;

}

for(var i = 0; i < 3
    ; i++){
    console.log("professor " + (i+ 1) + ": " + professor[i].nomes)
    console.log("tempo: " + professor[i].tempo)
}

console.log("menores que 5 anos : " + menor5)
console.log("maiores ou igual a 5 anos : " + acima5)
console.log(`o professor com mais tempo na escola é ${professor.filter( professor => professor.tempo >=5).length}`)

//nao tive nenhuma ideia pra escrever o nome do cabra