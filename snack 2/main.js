/*
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]
*/

let words=['pippo', 'PLUTO', 'paPerino']

let formattedWords=words.map(function(word){
    return word[0].toUpperCase() + word.slice(1).toLowerCase()
})
    
console.log(formattedWords);