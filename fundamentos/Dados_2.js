let preco = 19.90;
let desconto = 0.4;// -> O numero " 0.4" simboliza um numero de casas decimais ! 
let precoComDesconto = preco * (1 - desconto);

console.log(19.9 * 0.6);
console.log(preco * (1 - desconto));// -> o numero 1 simboliza um numero " literal"
console.log(precoComDesconto);

let nome = "Caderno" // String -> Sequencia de simbolos.
let categoria = "Papelaria";
console.log("produto:" + nome
    + ", Categoria:" + categoria
    + ", Preço:" + preco
    + ",Descontos:" + desconto);// concatenação de codigo//

