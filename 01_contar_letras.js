// Vamos a tener una palabra y una letra.
// Hay que mostrar un mensaje indicando cuántas veces aparece esa letra.
// Por ejemplo:
// La letra "a" aparece 2 veces en la palabra "Marta".
// La letra "r" aparece 1 vez en la palabra "Marta"
// La letra "z" no está en la palabra

// SOLUCIÓN KEVIN

/*
let palabra_u = "Marta"
let letra_u= "a"

palabra_u=palabra_u.toLocaleLowerCase()
letra_u = letra_u.toLocaleLowerCase()
lista_letra=[]

for (letra of palabra_u){
    if (letra == letra_u){
        lista_letra.push(letra)
    }
}

console.log(lista_letra);
let cantidad=lista_letra.length
console.log(cantidad);

if (cantidad >1){
console.log(`La letra ${letra_u} aparece ${cantidad} veces en la palabra ${palabra_u}`);
}
else if (cantidad ==1){
    console.log(`La letra ${letra_u} aparece ${cantidad} vez en la palabra ${palabra_u}`);
} 
else {
    console.log(`La letra ${letra_u} no aparece en la palabra ${palabra_u}`)
} */


//SOLUCION FERRAN

const palabra= "Marta"
const letra="a"

let contador = 0
for (caracter of palabra){
    caracter = caracter.toLowerCase()
    console.log(caracter);
    if (caracter == letra) {
        contador +=1 // contador = contador + 1 // contador ++
    }
}

// Generar el mensaje de salida

if (contador == 0) console.log(`La letra ${letra} no está en la palabra ${palabra}`);
else if (contador == 1) console.log(`La letra ${letra} aparece ${contador} vez en la palabra ${palabra}`);
else console.log(`La letra ${letra} aparece ${contador} veces en la palabra ${palabra}`);

