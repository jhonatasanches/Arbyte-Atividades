var rs = require ('readline-sync')



while(true){
   if(senha!=0){
    var senha = rs.questionInt ('Insira 0 para sair ou qualquer outra tecla para continuar ')
   } else{
       console.log('Programa encerrado')
       break
   }
}
