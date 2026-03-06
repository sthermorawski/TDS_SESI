let temDinheiro = true;
let estaChovendo = false;
let carroEstaNaGaragem = false;


let resultadoAND = "#AND voce vai ao shopping? ";
resultadoAND += temDinheiro && estaChovendo;
console.log(resultadoAND);

let resultadoOR = "#OR voce vai ao shopping? ";
resultadoOR += temDinheiro || carroEstaNaGaragem;
console.log(resultadoOR); 