/* 4) A final de valorant será disputada na cidade de Patrocínio. Os organizadores fizeram uma pesquisa prévia e descobriram que:
 Os custos de locação e organização do evento será de 1000 reais. Pela pesquisa, foi constatada que a cada 10 reais de diminuição no preço do ingresso, o público aumenta em 50 pessoas. Assumindo que o preço não deve ultrapassar 150 reais, encontre o melhor preço para venda de ingressos (o que gere maior lucro). 

 publico+50

preço inicial= 1000 reais 
-10 reais ---- +50 pessoas 

preço limite = 150 reais 
ou seja, enquanto o preço for maior que 150, o codigo nao para 

condição preço<=150 
melhor preço é aquele que gere maior lucro 

*/

let preço = 1000;
let melhorPreco = 0;
let maiorLucro = 0;

for (let valorIngresso = 150; valorIngresso >= 10; valorIngresso -= 10) {
    let maiorPublico = ((150 - valorIngresso) / 10) * 50;
    let totalPublico = 100 + maiorPublico;
    let calculo = valorIngresso * totalPublico;
    let lucro = calculo - preço;

    if (lucro > maiorLucro) {
        maiorLucro = lucro;
        melhorPreco = valorIngresso;
    }
}

console.log(`O melhor preço é R$ ${melhorPreco}, e o lucro: R$ ${maiorLucro}`);
