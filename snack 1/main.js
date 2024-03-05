/*
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array.
*/


const cars=[
    {
        marca:'Ford',
        modello:'Fiesta',
        alimentazione: 'gpl'
    },
    {
        marca:'Fiat',
        modello:'Fiorino',
        alimentazione: 'metano'
    },
    {
        marca:'Fiat',
        modello:'Panda',
        alimentazione: 'diesel'
    },
    {
        marca:'Toyota',
        modello:'Yaris',
        alimentazione: 'benzina'
    },
    {
        marca:'Tesla',
        modello:'Model Y',
        alimentazione: 'elettrico'
    },
    {
        marca:'Ferrari',
        modello:'488',
        alimentazione: 'benzina'
    }, {
        marca:'Fiat',
        modello:'Punto',
        alimentazione: 'diesel'
    }, {
        marca:'Nissan',
        modello:'GTR',
        alimentazione: 'benzina'
    }, {
        marca:'Nissan',
        modello:'Micra',
        alimentazione: 'diesel'
    }, {
        marca:'Volkswagen',
        modello:'Up',
        alimentazione: 'metano'
    }

    


]
console.log(cars);

let autoBenzina =[]
let autoDiesel =[]
let autoOther =[]

cars.forEach(function(auto){
    if (auto.alimentazione === 'benzina') {
        autoBenzina.push(auto)
    }else if (auto.alimentazione === "diesel") {
        autoDiesel.push(auto);
    } else {
        autoOther.push(auto);
    }
})

console.log(autoBenzina, autoDiesel, autoOther);

let benzinaCars= cars.filter(car => car.alimentazione == 'benzina')

let dieselCars= cars.filter(car => car.alimentazione == 'diesel')

let ecoCars= cars.filter(car => car.alimentazione !== 'benzina' && car.alimentazione !== 'diesel')

console.log(benzinaCars);
console.log(dieselCars);
console.log(ecoCars);
