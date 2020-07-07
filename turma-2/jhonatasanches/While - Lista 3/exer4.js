var rs = require ('readline-sync')

var insiraNum = rs.questionInt ('Coloca um numero ai: ')

var i = 0
while(i <= insiraNum){
    if(i%2==0){
        console.log(i)
    }
    i++
}
