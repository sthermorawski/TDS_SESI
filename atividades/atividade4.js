var celular = 3000;
var tenis = 500;
var crocs = 290;
var ValorInicial = celular + tenis + crocs;
var valorDesconto = ValorInicial * 0.1;
var ValorTotal = ValorInicial - valorDesconto;
let mensagem  = ValorTotal > 100 ? "voce tem 10% de desconto " + valorDesconto : "o valor da sua compra e " + ValorInicial;
console.log(mensagem);