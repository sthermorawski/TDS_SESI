let estoque = ["Placa mãe", "Placa de video", "SSD 1TB", "RTX 4060", "cooler"];
estoque.push ("Meoria Ram");
console.log(estoque);
let clienteNome = "ayla bitencorth"
let clienteIdade = 27;
let possuiCupom = true;
let valorTotal = 700;

function processarVenda(valorTotal, cupomAtivo){
    var verificar = valorTotal >= 700 || cupomAtivo == true? valorTotal * 0.85 : valorTotal
    return (verificar);
}
if (clienteIdade > 16){
    console.log(`Venda autorizada para ${clienteNome}`);
    }
else if (clienteIdade < 16){
    console.log(`Venda bloqueada:idade insuficiente ${clienteNome}`)
    }
for(let i = 0; i < 6; i++){
    console.log(`Despachando item: ${estoque[i]}...OK!`);
}

console.log(`Relatorio da loja:
cliente ${clienteNome} processou um pedido de R${processarVenda(valorTotal, possuiCupom)}
Itens restantes no estoque: ${estoque}`);

