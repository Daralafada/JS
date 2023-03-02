let number = prompt ("Combien d'étages veux-tu ?")

for(var i = 0; i <= number; i++){
    console.log(' '.repeat(number-i)+'#'.repeat(i));
}