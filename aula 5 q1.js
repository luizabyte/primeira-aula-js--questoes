//1) Crie um objeto do tipo pessoa que possua o nome, a idade e a cidade onde mora. Mostre esse objeto no console do navegador. Posteriormente, mostre um menu de atualização de idade ou cidade. Após o usuário escolher qual dado deseja atualizar, leia a atualização desse dado, faça a alteração no objeto e imprima novamente o objeto no console.

const pessoa = {nome:"", idade:"",cidade:""  }


pessoa.nome= prompt("Digite seu nome")
pessoa.idade= prompt("Digite sua idade")
pessoa.cidade= prompt("Digite sua cidade")

console.log(pessoa)

var atualização= prompt("Digite 1 para atualizar sua idade\nDigite 2 para atualizar a cidade")


if (atualização==1){
    pessoa.idade= prompt("Digite sua idade")
}
else if(atualização==2){
    pessoa.cidade = prompt ("Digite sua cidade")
}

console.log(pessoa)

