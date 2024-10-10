/* Crie um programa que pergunte ao usuario quantos elefantes tem no ambiente. Em seguida, imprima a saída com a letra correta */
/* for (atribuição; condição; incremento/decremento*/
/* 1 elefante incomoda muita gente, 2 elefantes incomodam muito mais */ 
/* 2 elefantes incomodam muita gente, 3 elefantes incomodam muito mais */ 

var elefante= prompt("Quantos elefantes há no ambiente?")
let i

for(i=1; i<elefante; i++ ){
    if(i==1){
    console.log(`${i} elefante incomoda muita gente, ${i+1} elefantes incomodam muito mais`)
}
    else{
    console.log(`${i} elefantes incomodam muita gente, ${i+1} elefantes incomodam muito mais`)
    }
}


