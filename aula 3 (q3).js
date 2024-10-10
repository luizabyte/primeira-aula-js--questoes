/*
3) Crie um programa que pergunte ao usuário quantas cartas ele deseja virar de um baralho. Assuma que esse baralho possui cartas infinitas de 4 naipes e que variam de 1 a 10 em sua numeração. Imprima no console todas as N cartas sorteadas pelo sistema. 
 Ex: 1 - 3 de coração
 https://www.alura.com.br/artigos/funcao-math-random-javascript-numeros-pseudoaleatorios?utm_term=&utm_campaign=%5BSearch%5D+%5BPerformance%5D+-+Dynamic+Search+Ads+-+Artigos+e+Conte%C3%BAdos&utm_source=adwords&utm_medium=ppc&hsa_acc=7964138385&hsa_cam=11384329873&hsa_grp=164068847699&hsa_ad=703853156311&hsa_src=g&hsa_tgt=dsa-2273097816642&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=EAIaIQobChMIo_fk-5TciAMV5ZxaBR3WgjqsEAAYASAAEgL_fPD_BwE
*/ 

var cartas= prompt("Quantas cartas do baralho você deseja virar?")
let ouro 
let copas 
let espadas
let paus
let i

for(i=1; i<=cartas; i++){

    numero=(Math.floor(Math.random() * 10))+1

    naipe=(Math.floor(Math.random() * 3))+1

    if(naipe==0){
        console.log(`carta ${i}-${numero} de ouro`)
    }

    else if(naipe==1){
        console.log(`carta ${i}-${numero} de copas`)

    }
    else if(naipe==2){
        console.log(`carta ${i}-${numero} de de espadas`)

    }
    else if(naipe==3){
        console.log(`carta ${i}-${numero} de paus`)

    }
}



