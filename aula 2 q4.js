/* 
4) faça um programa que receba os dados de altura, peso e idade de n pessoas. quando nao forem mais inseridos dados, mosre na tela
a altura da pessoa mais jovem, o peso da pessoa mais velha e a media de idades de todas as pessoas 
*/


let totalIdade = 0;
let contador = 0;
let alturaMaisJovem = 0;
let pesoMaisVelho = 0;

while (true) {
    const resposta = prompt("Deseja inserir os dados de uma nova pessoa? (sim/não)");

    if(resposta.toLowerCase() !== "sim"){ //toLowerCase converte strings em letras minusculas
        break; // finalizar o while se a resposta for não
    }

    const idade = Number(prompt("Digite a idade da pessoa:"));
    const altura = Number(prompt("Digite a altura da pessoa (em metros):"));
    const peso = Number(prompt("Digite o peso da pessoa (em kg):"));

    totalIdade = totalIdade + idade;

    if (contador === 1 || idade < alturaMaisJovem) {
        alturaMaisJovem = altura;
    }

    if (contador === 1 || idade > pesoMaisVelho) {
        pesoMaisVelho = peso;
    }
}

const mediaIdade = contador > 0 ? totalIdade / contador : 0;

alert(`Altura da pessoa mais jovem: ${alturaMaisJovem} m\nPeso da pessoa mais velha: ${pesoMaisVelho} kg\nMédia de idade: ${mediaIdade.toFixed(2)} anos.`);