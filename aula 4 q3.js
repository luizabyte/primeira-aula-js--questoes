
//Leia 5 valores e armazene em um vetor A. Sorteie 5 números e armazene-os em um vetor B. Faça o produto de cada índice do vetor A e vetor B e armazene-os no vetor C. Ao final, imprima no console o vetor C.



let valoresA = [];
let valoresB = [];
let valoresC = [];
let i = 0;

for(i = 0; i < 5; i++){
    valoresA[i] = parseInt(prompt("Digite um valor: ")); 
    valoresB[i] = Math.floor(Math.random()* 10 );
    valoresC[i] = valoresA[i] * valoresB[i];
}

alert('Números digitados pelo usuário: ' + valoresA.join(", "));
alert('Números sorteados: ' + valoresB.join(", "));
alert('Produto dos números: ' + valoresC.join(", "));







