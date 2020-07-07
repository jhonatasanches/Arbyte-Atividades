

var rs = require ('readline-sync')

var anoNascimento = rs.question('Qual ano voce nasceu?')

anoAtual = 2020
idade = anoAtual - anoNascimento

if (idade < 16){
    console.log('Nao pode votar ainda, volte quando tiver 16 anos')
}else if (idade >= 16 && idade < 18){
    console.log('Pode votar, mas nao e obrigatorio')
}else if (idade >= 65){
    console.log('Pode votar, mas nao e obrigatorio')
}else {
    console.log ('Voto eh obrigatorio')
}
