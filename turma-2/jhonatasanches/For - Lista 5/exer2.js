var rs = require('readline-sync')

var inicioContador = rs.questionInt('Digite um numero para iniciar o contador ')
var fimContador = rs.questionInt('Digite um numero para finalizar o contador ')

while (inicioContador >= fimContador){
    var fimContador = rs.questionInt('Digite um numero para finalizar o contador (maior que o numero para iniciar) ')
}

for (var i = inicioContador; i <= fimContador; i++){
    console.log(i)
}