const prompt = require("prompt-sync")();

// Leia os três números
const n1 = parseInt(prompt("Digite o número 1: "));
const n2 = parseInt(prompt("Digite o número 2: "));
const n3 = parseInt(prompt("Digite o número 3: "));
// Calcule a soma e a média

const soma = n1 + n2 + n3;
const media = soma/3

// Mostre na tela o valor da soma e média

console.log("A soma é: ",soma);
console.log("A média é: ",media);