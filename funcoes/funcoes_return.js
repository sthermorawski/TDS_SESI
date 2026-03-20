function calcularTotal (preco1, preco2){
    return preco1 + preco2;
}

let resultado = calcularTotal(30, 50); // somar

//imprimir concatenando e com templade string 

console.log("o total da compra e: " + resultado); //concatenando
console.log(`o total da compra e: ${resultado}`); // templade string
