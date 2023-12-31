//# Exercício 11

//Valor da parcela do Sucesso Compartilhado

//Na Cubos Academy alguns estudantes podem fazer o Curso de Desenvolvimento de Software e só começar 
//a pagar após finalizado o curso quando (e se) tiverem obtido renda acima de R$ 2.000,00. Nesse caso o 
//valor da parcela a ser paga é de 18% do valor da renda mensal da pessoa.

//Após 60 meses, independente de ter quitado ou não o valor total do curso (de R$ 18.000,00) a pessoa
//não deve nada, ou seja, o valor da parcela é zero.

//(a) Faça um programa que calcula o valor da parcela a ser paga pelo aluno. Imprima uma mensagem bonita na tela,
//com o valor em reais.


const rendaMensalemCentavos = 400000;
const mesesDecorridos = 54;
const totalJaPagoPeloAluno = 1800000;

if (mesesDecorridos > 60) {
    console.log('Você não deve nada para cubos');
} else if (totalJaPagoPeloAluno >= 1800000) {
    console.log('Você já quitou todas as parcelas');
} else if (rendaMensalemCentavos < 200000) {
    console.log('O valor da parcela desse mês é 0 reais');
} else {
    const valorParcela = (rendaMensalemCentavos / 100) * 18 / 100
    console.log(`O valor da parcela desse mês é R$ ${valorParcela}`);
}

