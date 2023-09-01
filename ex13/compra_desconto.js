// Exercício 13

// Compra com Desconto

//A Loja do Juninho está com uma super promoção. E na compra de qualquer 
//produto você ganha desconto conforme a forma de pagamento seguindo a 
//tabela seguinte.




const tipoDePagamento = "dinheiro";
const valorDoProduto = 10000;
let desconto;

if (tipoDePagamento === "crédito") {
    desconto = (valorDoProduto / 100) * 95 / 100;
} else if (tipoDePagamento === "cheque") {
    desconto = (valorDoProduto / 100) * 97 / 100;
} else {
    desconto = (valorDoProduto / 100) * 90 / 100;
}


console.log(`Valor a ser pago:R$${desconto.toFixed(2)} reais`);
