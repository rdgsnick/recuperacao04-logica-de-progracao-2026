// Uma cafeteria deseja analisar os valores de cinco pedidos realizados durante um período.
// Desenvolva um algoritmo que solicite ao usuário o valor de **5 pedidos**.
// Todos os valores deverão ser armazenados em um **vetor**.
// Após realizar os cadastros, o programa deverá apresentar:
// - Todos os valores cadastrados.
// - O valor total dos pedidos.
// - A média dos valores.
// - O menor valor registrado.
import leia from "readline-sync"

var pedidos = [];
var soma = 0;
var valormenor;


for(var i = 0; i < 5; i++){
   
    var valor = leia.questionInt(`Qual o valor do seu ${i+1} pedido : `)

    pedidos.push(valor)
    valormenor = pedidos[0]

    soma += valor

}


for(var i = 0; i < 5; i++){
 if(pedidos[i] <= valormenor){
        valormenor = pedidos[i];
    }
}


var media = soma / 5


console.log("Valores: " + pedidos)
console.log("Valor total dos pedidos: " + soma)
console.log("Media dos valores: " + media)
console.log("Menor valor: " + valormenor)