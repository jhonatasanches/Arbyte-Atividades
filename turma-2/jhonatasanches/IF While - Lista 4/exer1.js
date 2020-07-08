var rs = require('readline-sync')

var digitaNum1 = rs.questionInt('Digita um numero entre 1 e 100 ai: ')
var digitaNum2 = rs.questionInt('Digita um numero entre 1 e 100 ai: ')

while (digitaNum1 > 1 && digitaNum1 < 100){
    if((digitaNum1%7==0) && (digitaNum1%5==0)){
        console.log ('PING PONG')
    } else if (digitaNum1%7==0){
        console.log ('PING')
    } else if (digitaNum1%5==0) {
        console.log ('PONG')
    }
    break
} 

while (digitaNum2 > 1 && digitaNum2 < 100){
    if((digitaNum2%7==0) && (digitaNum2%5==0)){
        console.log ('PING PONG')
    } else if (digitaNum2%7==0){
        console.log ('PING')
    } else if (digitaNum2%5==0) {
        console.log ('PONG')
    }
    break
} 