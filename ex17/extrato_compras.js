// Exercício 17

//Extrato de Compra Online

//Dado o valor de um produto, a quantidade de parcelas escolhida e 
//quanto já foi pago, Faça um programa que ajude a Fernanda a saber o 
//valor restante para pagamento e quantas parcelas faltam pagar.



const valorDoProduto = 300000;
const quantidadeDeParcelas = 9;
const valorPago = 500;

const parcelasEmReais = (valorDoProduto / quantidadeDeParcelas) / 100;
const parcelasPagas = valorPago / parcelasEmReais;

console.log(`Restam ${quantidadeDeParcelas - parcelasPagas} Valor das parcelas ${parcelasEmReais.toFixed(2)} reais`)

//Cola:
//Dado o valor de um produto, a quantidade de parcelas escolhida e quanto
//já foi pago, Faça um programa que ajude a Fernanda a saber o valor 
 //restante para pagamento e quantas parcelas faltam pagar.
