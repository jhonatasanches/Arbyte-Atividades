const read = require('readline-sync');
var option = '';
option = read.question('Digita alguma coisa aa parca:  ');
var palavra = option.split(''); // declarou palavra e falou para o split quebrar ela

for (let i = 0; i < option.length; i++) {   // loop que vai até a ultima posição da palavra, começa no zero e vai somando mais um
    if (option.charAt(i) === 'a') { // verificando se a nossa palavra tem o a minusculo
        //maca = ['m', 'a', 'c', 'a']
        palavra[i] = option.charAt(i).toUpperCase(); // pegando a letra "a" na palavra e deixando "A"
    }
}
console.log(palavra.join(''));

//Não consegui passar para todas as vogais