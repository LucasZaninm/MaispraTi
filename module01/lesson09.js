//1. soma dos elementos de um array

// const PromptSync = require("prompt-sync")

// let sum = 0
// let array = [10,20,30,40,50]
// console.log(array.length)

// for(let i = 0; i < array.length; i++){
// sum += array[i]
// }
// console.log(sum)

// //encontre o Maior numero de um array

// let max = array[0]
// for(let j = 0; j < array.length; j++){
//     if(array[j] > max){
//         max = array[j]
//     }
// }
// console.log(max)


// //reverter um array
// let reversed = []
// for(let k = array.length - 1; k >= 0; k--){
//     reversed.push(array[k])
// }

// console.log(reversed)

// //crie um novo array contendo apenas os numeros pares.

// let evens = []

// for(let m = 0; m < array.length; m++){
//     if(array[m] % 2 ===0){
//         evens.push(array[m])
//     }
// }
// console.log(evens)

// // contar occorencias de um valor

// let vet = [10,30,15,8,20, 10]
// let value = 10
// let count= 0
// for (let n = 0; n < vet.length; n++){
//     if(vet[n] === value){
//         count++
//     }
// }
// console.log(`o valor ${value} ocorre ${count} vezes no vetor.`)

//arrays/vetores multidimensionais
let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]  

// for(let i = 0; i < matriz.length; i++){
//     for(let j = 0; j <matriz[i].length; j ++)
//     console.log(`Elemento na posição [${i}][${j}]: ${matriz[i][j]}`)
// }

let matriz2 = [
    [9,8,7],
    [6,5,4],
    [3,2,1]
]

let resultado = []

if(matriz.length !== matriz2.length || matriz[0].length !== matriz2[0].length){
    throw new console.error("os arrays devem ter o mesmo tamanho")
}
for(let i =0;  i < matriz.length; i++){
    let somaLinha = []
    for(let j = 0; j < matriz[i].length; j++){
        somaLinha.push(matriz[i][j] + matriz2[i][j])
    }
    resultado.push(somaLinha)
}
console.table(resultado)

// ABAIXO OS CODIGOS DA AULA COMENTADOS PELO PROFESSOR

// 1. Soma dos Elementos de um Array
let soma = 0;
let arr = [10, 20, 40, 30];

for(let i = 0; i < arr.length; i++){
    soma += arr[i]; // Acumula a soma dos elementos do array
}

console.log(soma); // Imprime a soma total dos elementos

// 2. Encontre o Maior Número em um Array
let maximo = arr[0]; // Assume que o primeiro elemento é o maior

for(let j = 0; j < arr.length; j++){
    if(arr[j] > maximo){
        maximo = arr[j]; // Atualiza o valor máximo se encontrar um maior
    }
}

console.log(maximo); // Imprime o maior valor encontrado no array

// 3. Reverter um Array            
let reverso = [];

for(let k = arr.length - 1; k >= 0; k--){
    reverso.push(arr[k]); // Adiciona os elementos na ordem inversa
}

console.log(reverso); // Imprime o array revertido

// 4. Criem um novo array contendo apenas os números pares
let pares = [];

for(let m = 0; m < arr.length; m++){
    if(arr[m] % 2 === 0){
        pares.push(arr[m]); // Adiciona o número ao novo array se for par
    }
}

console.log(pares); // Imprime o array contendo apenas os números pares

// 5. Contar Ocorrências de um Valor
const prompt = require('prompt-sync')();
let vet = [10, 10, 7, 5, 10];
let valor = Number(prompt('Insira o valor a ser pesquisado: '));
let contador = 0;

for(let l = 0; l < vet.length; l++){
    if(vet[l] === valor){
        contador++; // Incrementa o contador se o valor for encontrado
    }
}

console.log(`O valor ${valor} ocorre ${contador} vezes no vetor.`); // Imprime o número de ocorrências

// Arrays/Vetores Multidimensionais
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.table(matriz); // Exibe a matriz em formato de tabela

console.log(matriz[1][1]); // Acessa o elemento na segunda linha, segunda coluna (valor 5)

for(let i = 0; i < matriz.length; i++){
    for(let j = 0; j < matriz[i].length; j++){
        console.log(`Elemento na posição [${i}][${j}]: ${matriz[i][j]}`); // Imprime cada elemento da matriz
    }
}

// Soma de Arrays Multidimensionais
let arr1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let arr2 = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
];

let resultado = [];

if(arr1.length !== arr2.length || arr1[0].length !== arr2[0].length){
    throw new Error("Os arrays devem ter o mesmo tamanho."); // Verifica se as dimensões dos arrays são iguais
}

for(let i = 0; i < arr1.length; i++){
    let somaLinha = [];
    for(let j = 0; j < arr1[i].length; j++){
        somaLinha.push(arr1[i][j] + arr2[i][j]); // Soma os elementos correspondentes dos dois arrays
    }

    resultado.push(somaLinha); // Adiciona a linha resultante ao array de resultado
}

console.table(resultado); // Exibe a matriz resultante em formato de tabela