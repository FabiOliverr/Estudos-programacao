let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1
console.log(!!isAtivo); /* para voce fazer um valor string ou literal number virar um booleano precisa de um passoa a passo.

*Usar ! para afirmar uma negação.
* usar 2 !! para negar 1 negação e assim conseguir um true.
*/

isAtivo = 1

console.log(!true);

console.log('os verdadeiros...');
console.log(!!3);
console.log(!!-1);
console.log(!!'teste');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log('os falos....');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo=false));

console.log('pra finalizar...');
console.log(!!(''|| null || 0 || ' '));

let nome = ''

console.log(nome || 'Desconhecido');