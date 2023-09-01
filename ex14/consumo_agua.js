//Exercício 14

// Controle de Consumo de Água Ingerida

//A Cubos Academy, preocupada com a saúde de seus alunos, precisa de um programa
//que identifique se eles estão bebendo a quantidade suficiente de água diariamente.


const quantidadeDeAguaIngerida = 4;

if (quantidadeDeAguaIngerida < 1.5) {
    console.log('Risco Alto - Você está ingerindo pouquissima água, beba mais água!')
} else if (quantidadeDeAguaIngerida >= 1.5 && quantidadeDeAguaIngerida <= 3) {
    console.log('Risco Moderado - Você está ingerindo pouca água, beba mais! ')
} else {
    console.log('Risco Baixo - Você está ingerindo uma boa quantidade de água, parabéns!')
}