i = 1
while (i <= 1000){
    if (i%3==0){
        var somaTres= i + i   
    } else if (i%5==0){
        var somaCinco= i + i
    }
    i++
}
console.log(somaTres,'soma de todos numeros multiplos de 3')
console.log(somaCinco,'soma de todos numeros multiplos de 5')