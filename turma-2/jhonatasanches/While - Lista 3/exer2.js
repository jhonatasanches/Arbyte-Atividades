var rs = require ('readline-sync')

var escreveNum1 = rs.questionInt('Escreve um numero MAIOR que zero: ')
var escreveNum2 = rs.questionInt('Escreve um numero MAIOR que zero: ')

var multiplica = 0
var i = 0
while(i < escreveNum1){
    multiplica = escreveNum2 + multiplica
    escreveNum1--
}

console.log (multiplica)