// =========================
// EXERCÍCIO 17
// ==Ler a média de um aluno (entrada com ).
//• 	Verificar a média com condições:
//• 	Se for menor que 5 → imprimir .
//• 	Se for maior ou igual a 5 e menor que 7 → imprimir .
//• 	Se for maior ou igual a 7 → imprimir .
//• 	A saída deve ser exatamente essas siglas (REP, REC, APR), porque é isso que o avaliador da plataforma espera.=======================
//\\let media = 6.5; // valor fixo para teste

let media = 6;
if (media < 5) {
  console.log("REP");
} else if (media >= 5 && media < 7) {
  console.log("REC");
} else {
  console.log("APR");
}

// =========================
// EXERCÍCIO 18
// Verificar se idade de eleitor pode votar: menor de 16 não pode vota, 16 a 17 e 70 é opcional, e acima de 18 pode votar.

let idadeEleitor = 71;

if (idadeEleitor < 16) {
  console.log("Não pode Votar");
} else if ((idadeEleitor >= 16 && idadeEleitor < 18) || idadeEleitor > 70) {
  console.log("Voto Opcional");
} else {
  console.log("Voto Obrigatório");
}

// =========================
// EXERCÍCIO 19

//Desafio
//Faça um programa que receba N (quantidade de números) e seus respectivos valores.
//Imprima o maior número par e o menor número ímpar.
//🔎 Entrada
//• 	A primeira linha recebe um valor N, referente à quantidade de números que terão de entrada.
//• 	As linhas seguintes terão os valores numéricos maiores ou iguais a zero, podendo o número ser par ou ímpar.
//🔎 Saída
//• 	A saída deverá retornar:
// 	maior numero par
//• menor numero impar

const numeros = [3, 4, 1, 10, 8];
let maiorNumeroPar = -Infinity;
let menorNumeroImpar = Infinity;

for (let numero of numeros) {
  if (numero % 2 === 0) {
    if (numero > maiorNumeroPar) {
      maiorNumeroPar = numero;
    }
  } else {
    if (numero < menorNumeroImpar) {
      menorNumeroImpar = numero;
    }
  }
}

console.log("Maior número par:", maiorNumeroPar);
console.log("Menor número ímpar:", menorNumeroImpar);

// =========================
// EXERCÍCIO 20
// ============================
//Faça um programa que calcule e imprima o salário a ser transferido para um funcionário.
// Para realizar o calculo, primeiro receba o valor do salário bruto (valorSalario)
// e adicional dos benefícios (valorBeneficios). Por fim, o salário a ser transferido é calculado da seguinte maneira:
//(valorSalario - valorImpostos) + valorBeneficios
//Para calcular o valorImpostos, seguem as aliquotas (baseadas no valor do salário bruto):
//De R$ 0.00 a R$ 1100.00 = 5.00%
//De R$ 1100.01 a R$ 2500.00 = 10.00%
//Maior que R$ 2500.00 = 15.00%

let valorSalario = 10050;
let valorBenificio = 250;
let valorImpostos = 0;

if (valorSalario <= 1100) {
  valorImpostos = valorSalario * 0.05;
} else if (valorSalario > 1100 && valorSalario <= 2500) {
  valorImpostos = valorSalario * 0.1;
} else {
  valorImpostos = valorSalario * 0.15;
}

console.log(
  "Salário a ser transferido:",
  valorSalario - valorImpostos + valorBenificio,
);

// =========================
// EXERCÍCIO 21 ===DIO
// ============================
//Faça um programa para calcular o valor de uma viagem.

//Você terá 3 variáveis. Sendo elas:
// 1 - Preço do combustível;
// 2 - Gasto médio de combustível do carro por KM;
// 3 - Distância em KM da viagem;

//Imprima no console o valor que será gasto para realizar esta viagem.

const precoCombustivel = 5.79;
const gastoMedioPorKm = 10;
const distanciaKm = 200;

const litrosConsumidos = distanciaKm / gastoMedioPorKm;
const valorViagem = gastoMedioPorKm * precoCombustivel;

console.log("Valor da Viagem: R$", valorViagem.toFixed(2));

// =========================
// EXERCÍCIO 22 ===DIO===
// ============================
//Faça um programa para calcular o valor de uma viagem.

//Você terá 5 variáveis. Sendo elas:
// 1 - Preço do etanol;
//2 - Preço do gasolina;
//3 - O tipo de combustível que está no seu carro;
//4 - Gasto médio de combustível do carro por KM;
//5 - Distância em KM da viagem;

//Imprima no console o valor que será gasto para realizar esta viagem.

const precoEtanol = 4.89;
const precoGasolina = 5.99;
const tipoCombustivel = "Gasolina"; // ou "Etanol"
const gastoMedioporKm = 7;
const distanciaKm1 = 1510;

let valorViagem1 = 0;

if (tipoCombustivel === "Etanol") {
  valorViagem1 = (distanciaKm1 / gastoMedioporKm) * precoEtanol;
} else {
  valorViagem1 = (distanciaKm1 / gastoMedioporKm) * precoGasolina;
}

console.log("Valor da Viagem: R$", valorViagem1.toFixed(2));

//EXERCÍCIO 23 ===DIO===
//1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

//  Média = (nota 1 + nota 2 + nota 3) / 3;

// Classificação:
//  - Média menor que 5, reprovação;
//  - Média entre 5 e 7, recuperação;
// - Média acima de 7, passou de semestre;
//*/
//

let nota1 = 5;
let nota2 = 2;
let nota3 = 2;

let mediaAluno = (nota1 + nota2 + nota3) / 3;

if (mediaAluno < 5) {
  console.log("Reprovado");
} else if (mediaAluno >= 5 && mediaAluno <= 7) {
  console.log("Recuperação");
} else {
  console.log("Passou no semestre");
}

//   2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

//   Formula do IMC:
//   IMC = peso / (altura * altura)

//   Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

//   IMC em adultos Condição:
//  - Abaixo de 18.5 Abaixo do peso;
//  - Entre 18.5 e 25 Peso normal;
//  - Entre 25 e 30 Acima do peso;
//  - Entre 30 e 40 Obeso;
//  - Acima de 40 Obsesidade Grave;
//*/

/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento:
    - À vista Débito, recebe 10% de desconto;
    - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/
