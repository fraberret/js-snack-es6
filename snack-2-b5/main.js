/*
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine.*/

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

let moreThen15Weight=0
let lessThen15Weight=0

let moreThen15= zucchine.filter(zucchina=>{
    if (zucchina.lunghezza>15) {
        moreThen15Weight+=zucchina.peso
       return zucchina
    }
})

let lessThen15= zucchine.filter(zucchina=>{
    if (zucchina.lunghezza<15) {
       lessThen15Weight+=zucchina.peso
        return zucchina
    }
})

console.log(moreThen15, lessThen15);
console.log(`Le zucchine piu grandi di 15 cm pesano: ${moreThen15Weight} grammi` , `Le zucchine piu piccole di 15 cm pesano: ${lessThen15Weight} grammi`);