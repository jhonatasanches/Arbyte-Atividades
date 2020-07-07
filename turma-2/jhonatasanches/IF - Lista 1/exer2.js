
var rs = require ('readline-sync')

var digitaNumero = rs.question('Coloca um numero: ')

if (digitaNumero % 2 == 0){
    console.log('Esse numero eh PAR')
}else{
    console.log('Esse numero eh IMPAR')
}
