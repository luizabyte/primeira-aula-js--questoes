/*2) Faça um programa que leia os dados de um livro. Nome, autor, ano de publicação. Posteriormente, armazene esses dados em um objeto LIVRO. Posteriormente, crie outro livro (livro2) com seus dados de entrada também feitos pelo usuário.
Após ler os dados sobre esses dois livros, faça:
-- Imprima no console os dados do livro mais antigo.
-- Verifique e imprima na tela se existe algum livro com o nome "estudando programação", a resposta deve ser SIM ou Não no console do navegador.
-- Verifique e imprima na tela se os dois livros são ou não do mesmo autor. Além disso, imprima o nome do autor de cada livro.
*/

const livro= {nome: "", autor: "", ano_de_publicação:""}

livro.nome= prompt("Qual o nome do livro?")
livro.autor= prompt("Qual é o autor do livro?")
livro.ano_de_publicação= prompt("Qual o ano de publicação?")

const livro2= {nome: "", autor: "", ano_de_publicação:""}
livro2.nome= prompt("Qual o nome do 2° livro?")
livro2.autor= prompt("Qual é o autor do 2° livro?")
livro2.ano_de_publicação= prompt("Qual o ano de publicação?")


if(livro.ano_de_publicação>livro2.ano_de_publicação){
    console.log(livro2)
} 
else{ 
    console.log(livro)
}

if(livro.nome== 'estudando programação'||livro2.nome=='estudando programação'){

    console.log("Sim")

}
else{
    console.log("Não")
}

if(livro.autor==livro2.autor){
    console.log("Os autores dos livros são iguais")
    console.log(livro.autor, livro2.autor)

} 
else{
    console.log("Os autores dos livros são diferentes")
    console.log("os autores são", livro.autor ,"e", livro2.autor)
}