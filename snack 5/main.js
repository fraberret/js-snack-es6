/*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal*/

let biciDaCorsa = [
  { nome: "Bianchi Oltre XR4", peso: 7.2 },
  { nome: "Specialized S-Works Tarmac SL7", peso: 6.7 },
  { nome: "Trek Madone SLR 9", peso: 7.1 },
  { nome: "Cannondale SuperSix EVO", peso: 7.0 },
  { nome: "Pinarello Dogma F12", peso: 6.8 }
];

let biciPiuLeggera=biciDaCorsa[0]

for (let i = 0; i < biciDaCorsa.length; i++) {
  
  
  let bici= biciDaCorsa[i]
  

  if (bici.peso<biciPiuLeggera.peso) {
    biciPiuLeggera=biciDaCorsa[i
    ]
  }
  
}
console.log(biciPiuLeggera);