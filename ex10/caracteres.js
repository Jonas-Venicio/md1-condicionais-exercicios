//Exercício 10 Identificando caracteres

//Faça um programa que identifica caracteres. 
//Seu programa deverá classificar este único caractere, 
//que estará guardado numa variável, em uma das categorias abaixo:

//Seu programa deverá dizer qual a categoria do caractere. 
//Caso a categoria seja **Vogal**, seu programa deverá ainda informar 
//se a vogal é maiúscula ou minúscula.

const caractere = "9";
let mensagem = "";

if (
    caractere === "A" || caractere === "E" ||
    caractere === "I" || caractere === "O" || caractere === "U") {
    mensagem = "Vogal Maiúscula";
} else if (
    caractere === "a" || caractere === "e" || caractere === "i" ||
    caractere === "o" || caractere === "u") {

    mensagem = "Vogal Minuscula";

} else if (
    caractere === "1" || caractere === "2" ||
    caractere === "3" || caractere === "4" ||
    caractere === "5" || caractere === "6" ||
    caractere === "7" || caractere === "8" ||
    caractere === "9") {

    mensagem = "Número";

} else {
    mensagem = "É Consoante";
}

console.log(mensagem);