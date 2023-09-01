// Exercicio 08 Montanha Russa Muito Assustadora

//Num parque de diversões existe uma **Montanha Russa Muito Assustadora**. 
//Por isso, nesta montanha russa não são permitidas pessoas:

//Menores de 12 anos
//Maiores de 65 anos
//Que possuam qualquer patologia cardíaca
//Menores de 150cm de altura.

const idade = 15;
const possuePatologia = false;
const altura = 149;//em centimetros
const ehEstudante = true

if (idade < 12 || idade > 65) {
    console.log("ACESSO NEGADO");

}
else if (possuePatologia || altura < 150) {
    console.log("ACESSO NEGADO");
}
else if (ehEstudante || idade < 18) {
    console.log("10 reais")
}
else {
    console.log("20 reais")
}





//else if (ehEstudante) {
   // console.log("10 reais");
//}
/*else if (altura <= 150 || possuePatologia) {
    console.log("ACESSO NEGADO");
}
else if (idade < 12 && idade > 65) {
    console.log("ACESSO NEGADO")
}*/









/*(idade < = 12 || idade >= 65) {
    console.log("")
}*/