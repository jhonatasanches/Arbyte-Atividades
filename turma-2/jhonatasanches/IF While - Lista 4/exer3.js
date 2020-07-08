var rs = require('readline-sync')

var digitaNum1 = rs.questionInt('Digita um numero ai: ')

var i = 0 
var asterisco = ' * ' 
var variosAsterisco = ''

while (i <= digitaNum1){
   var variosAsterisco = variosAsterisco + asterisco
   console.log (variosAsterisco) 
   i++
} 
