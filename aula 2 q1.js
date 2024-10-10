/* 
1)faça um programa que mostre a tabuada para todos os numeros de 1 a 9


var n= 1
var mult= 1
let r

while(mult<=10){
    while(n<10){
        r= n*mult;
        console.log(+n + "x" +mult + "=" + r)
    n++;
}
mult++;
n=1;
}

*/

var n= prompt("Digite um numero para saber sua tabuada de multiplicação")

var v=0

while(v<=10){
    console.log( +n + "x" +v + "=" + v*n )
    v++;
}

