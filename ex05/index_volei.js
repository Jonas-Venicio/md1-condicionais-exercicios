//Peneira de Vôlei exercício 05

//Numa "peneira" (processo seletivo para novos jogadores) de vôlei, em alguns clubes, 
//o primeiro filtro é ver se um determinado candidato tem a altura mínima necessária de 180cm. 
//Faça um programa que, dada a altura de um determinado candidato, 
//diga se ele está aprovado ou reprovado nessa primeira fase do processo.

//Imprima na tela **APROVADO** caso o jogador tenha 180cm de altura ou mais
//Imprima na tela **REPROVADO** caso o jogador tenha menos de 180cm

const altura = 174;
const alturaEmCm = altura / 100;
const alturaLimite = 180 / 100

if (alturaEmCm < alturaLimite) {
    console.log(`REPROVADO ${alturaEmCm} de Altura`);
} else if (alturaEmCm >= alturaLimite) {
    console.log(`APROVADO ${alturaEmCm} de Altura`);
}



/*if (alturaEmCm >= 180) {
    console.log("APROVADO");
    if (alturaEmCm == 180 || alturaEmCm <= 185) {
        console.log("LÍBERO");
    } else if (alturaEmCm == 186 || alturaEmCm <= 195) {
        console.log("PONTEIRO");
    } else if (alturaEmCm == 196 || alturaEmCm <= 205) {
        console.log("OPOSTO");
    } else if (alturaEmCm > 205) {
        console.log("CENTRAL")
    }
} else {
    console.log("REPROVADO")
}*/
