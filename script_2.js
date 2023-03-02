// Un prompt s'affiche avec la question suivante

let number = prompt ('"De quel nombre veux-tu calculer la factorielle ?"')
var countArray = []

for(let count = number; count >=1; count--){
  countArray.push(count)
}

console.log(countArray)


console.log(`Le résultat est : ${countArray.reduce((a,b) => a*b)}`)