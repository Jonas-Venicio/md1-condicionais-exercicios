//Exercicio 07 Isenção de impostos

//Segundo a receita federal, algumas pessoas são isentas do pagamento de 
//imposto de renda (IR). Simplificamos aqui quem são essas pessoas:

//Pessoas portadores de alguma doença grave
//Pessoas que já estão aposentadas
//Para pessoa não esteja isenta, avalia-se seus rendimentos tributáveis ao longo do ano. 
//Na condição em que o total de rendimentos seja **superior** a R$ 28.559,70, a 
//pessoa deve pagar imposto de renda, caso contrário, não.

const aposentada = true;
const portadoraDeDoencas = false;
const totalDeRendimento = 4000000;//em centavos

if (aposentada || portadoraDeDoencas) {
    console.log("ISENTA");
} else if (totalDeRendimento >= 2855970) {
    console.log("PEGA LEAO");
} else {
    console.log("VAZA LEAO! JA TA DIFICIL SEM VOCE");
}