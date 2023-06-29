// par nome/valor.

const saudacao = 'Opa' // conteto léxico 1

function exec() {
    const saudacao = 'Falaa' // contexto léxico 2
    return saudacao 
}

// Objetos são grupos aninhados de pares nomes/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereço:{
        logradouro: 'Rua muito Legal',
        numero: 123
    }
}
console.log(saudacao);
console.log(exec());
console.log(cliente);