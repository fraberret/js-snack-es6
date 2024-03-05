/*
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.

Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.
*/

const persone = [
  { nome: "Mario", cognome: "Rossi", eta: 17 },
  { nome: "Laura", cognome: "Bianchi", eta: 25 },
  { nome: "Luca", cognome: "Verdi", eta: 13 },
  { nome: "Giulia", cognome: "Neri", eta: 35 }
];

let canGuide= persone.map(persona=>{
  let frase= `${persona.nome} ${persona.cognome}`
  if (persona.eta>=18){
     frase += ' puo guidare'
  }else{
    frase += ' non puo guidare'
  }
  return frase
})

console.log(canGuide);
