const prompt = require('prompt-sync')();
const nome = prompt("Digite seu nome: ");
const salarioBruto = parseFloat(prompt("Digite seu salário bruto: "));


const IR = 0.1 * salarioBruto;
const salarioLiquido = salarioBruto - IR;

console.log("O salário líquido de", nome, "é igual a R$", salarioLiquido)
