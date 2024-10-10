//array -> estrutura de dados homogeneas que possui um conj de variáveis consecutivas na memória que compartilham o mesmo rotulo 

//leia o nome e a nota de 5 alunos, calcule a media e imprima no console o nome dos alunos que estão abaixo da média 

let controle
let notas = []
let nomes = []
let mediaTemp=0
let media 

for(controle=1;controle<=5;controle++){ 
    var nome= prompt("Digite o nome do aluno")
    nomes.push(nome)
    var nota= parseFloat(prompt("Digite a nota"))  
    notas.push(nota)
    mediaTemp += nota
}
media=mediaTemp/5

for (let n=0; n<5;n++) {
    if(notas[n]<media){
        console.log(nomes[n]+"está abaixo da média")
    }

}



