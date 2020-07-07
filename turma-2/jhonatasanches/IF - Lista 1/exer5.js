
var rs = require('readline-sync')

var digitaNumero1 = rs.question('Digite um numero ai ')
var digitaNumero2 = rs.question('Digite um numero ai ')
var digitaNumero3 = rs.question('Digite um numero ai ')

if ((digitaNumero1 > digitaNumero2) && (digitaNumero1 > digitaNumero3)) {
    var maior = digitaNumero1
    if (digitaNumero2 > digitaNumero3) {
        var medio = digitaNumero2
        var menor = digitaNumero3
        // if (digitaNumero3 > digitaNumero2) {
        //     var medio = digitaNumero3
        //     var menor = digitaNumero2
            
        // }
    }
    console.log(maior, medio, menor)
}
if ((digitaNumero2 > digitaNumero1) && (digitaNumero2 > digitaNumero3)) {
    var maior = digitaNumero2
    if (digitaNumero1 > digitaNumero3) {
        var medio = digitaNumero1
        var menor = digitaNumero3
        // if (digitaNumero3 > digitaNumero1) {
        //     var medio = digitaNumero3
        //     var menor = digitaNumero1
        // }
    }
    console.log(maior, medio, menor)
}

if ((digitaNumero3 > digitaNumero1) && (digitaNumero3 > digitaNumero2)) {
    var maior = digitaNumero3
    if (digitaNumero1 > digitaNumero2) {
        var medio = digitaNumero1
        var menor = digitaNumero2
        // if (digitaNumero2 > digitaNumero1) {
        //     var medio = digitaNumero2
        //     var menor = digitaNumero1
            
        // }
    }
    console.log(maior, medio, menor)
}