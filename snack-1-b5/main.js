/*
Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.*/

let zucchine = [
    { varietà: "Zucchino nero di Milano", peso: 15, lunghezza: 15 },
    { varietà: "Zucchino romanesco", peso: 12, lunghezza: 12 },
    { varietà: "Zucchino siciliano", peso: 18, lunghezza: 18 },
    { varietà: "Zucchina bianca triestina", peso: 20, lunghezza: 20 },
    { varietà: "Zucchino tondo di Piacenza", peso: 10, lunghezza: 10 },
    { varietà: "Zucchina striata di Napoli", peso: 16, lunghezza: 16 },
    { varietà: "Zucchina lunga fiorentina", peso: 19, lunghezza: 19 },
    { varietà: "Zucchino siciliano", peso: 17, lunghezza: 17 },
    { varietà: "Zucchina trombetta di Albenga", peso: 22, lunghezza: 22 },
    { varietà: "Zucchino tondo di Nizza", peso: 13, lunghezza: 13 }
];

let sum=0

zucchine.forEach(zucchina=>{

sum+=zucchina.peso
})
console.log(`Il peso totale delle zucchine è di: ${sum} grammi`);