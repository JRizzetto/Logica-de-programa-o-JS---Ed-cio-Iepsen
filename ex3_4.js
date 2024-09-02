/*
Elaborar um programa para uma veterinária, que leia o peso de uma ração em kg e o quanto um gato consome por dia da ração, em gramas. Informe quantos dias irá durar a ração e o quanto sobra da ração (em gramas)
*/

const prompt = require("prompt-sync")();

const pesoRacao = Number(prompt("Peso total(kg): "));
const consumoDia = Number(prompt("Consumo por dia(g): "));

const duracao = Math.floor((pesoRacao*1000)/consumoDia);
const sobra = (pesoRacao*1000) % consumoDia;
 
console.log(`Irá durar ${duracao} dias(s).`)
console.log(`sobra: ${sobra} gramas`)