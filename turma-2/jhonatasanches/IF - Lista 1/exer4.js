
var rs = require ('readline-sync')

var quantidadeMaca = rs.question('Quer comprar quantas macas? ')


if (quantidadeMaca >= 12){
    console.log(`Por comprar acima de 11 o valor unitario eh de RS 0,25 ficando o total da compra de ${quantidadeMaca*0.25}`)
}else{
    console.log(`Por comprar abaixo de 11 o valor unitario eh de RS 0,30 ficando o total da compra de RS ${quantidadeMaca*0.3}`)
}
