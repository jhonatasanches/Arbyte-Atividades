
var rs = require ('readline-sync')

var digitaSenha = rs.question('Digite a senha: ')

senha = 1234

if (digitaSenha != senha){
    console.log('ACESSO NEGADO')
}else{
    console.log('ACESSO PERMITIDO')
}
