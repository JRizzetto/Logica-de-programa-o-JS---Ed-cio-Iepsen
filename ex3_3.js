/*
Elaborar um programa para uma empresa que leia o salário e o tempo que um funcionário trabalha na empresa. Sabendo que a cada 4 anos (quadriênio) o funcionário recebe um acréscimo de 1% no salário, calcule e informe o número de quadriênios a que o funcionário tem o direito e o salário final. 
*/

const prompt = require("prompt-sync")();

const tempoFuncionario = Number(prompt("Tempo de trbalho: "));
const salarioFuncionario = Number(prompt("Salário: "));

const quadrienios = Math.floor(tempoFuncionario / 4);
const aumento = salarioFuncionario*0.01;

const aumentoFinal = quadrienios*aumento;

const salarioFInal = aumentoFinal + salarioFuncionario;

console.log(`Quadriênios = ${quadrienios}`);
console.log(`O salário final é R$: ${salarioFInal}`);

