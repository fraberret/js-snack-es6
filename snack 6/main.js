/*
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

let squadreDiCalcio = [
  { nome: "Juventus", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Milan", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Inter", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Roma", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Napoli", puntiFatti: 0, falliSubiti: 0 }
];
  
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let changeProperties= squadreDiCalcio.map(squadra=>{
  
  

squadra.puntiFatti += getRndInteger(1,10)
squadra.falliSubiti += getRndInteger(1,10)
return squadra
})

console.log(changeProperties);


let newArray= []
changeProperties.forEach(squadra => {
  let {nome, puntiFatti, falliSubiti}= squadra
newArray.push(nome , falliSubiti)

});

console.log(newArray);
document.querySelector('body').innerHTML+=newArray