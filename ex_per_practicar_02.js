// Para este array:
let arrayNombres2 = ["Clint", "Robert", "James", "Anne", "Ingrid", "John", "Patricia", "Marie","Camilola","alberti"]

// 5) Programa el código para encontrar el elemento con el texto más largo
// y guardarlo en la variable varTextoMasLargo
// Si hay más de un valor, guardarlos en el array arrayTextosMasLargos.

// 1ERA FORMA

// Generamos una lista con las longitudes de cada nombre
let arraylengths = []
for (nombres of arrayNombres2) {
    arraylengths.push(nombres.length)
}

// Almacenamos el nombre (o nombres) más largos en una lista
TextosMasLargos = []
for (nombre of arrayNombres2) {
    if (nombre.length == arraylengths.at(-1))  TextosMasLargos.push (nombre)
}

// Si la cantidad de elementos del array es 1, imprimimos la variable TextoMasLargo
// cuyo valor será el nombre más largo
// Si la cantidad de elementos del array es mayor a 1, imprimimos el array
// TextosMasLargos

var TextoMasLargo = ""
if (TextosMasLargos.length ==1) {
    TextoMasLargo += TextosMasLargos[0]
    console.log(TextoMasLargo);
}
else console.log(TextosMasLargos);

// 6) Lo mismo para el texto más corto.

// Almacenamos el nombre (o nombres) más cortos en una lista
TextosMasCortos = []
for (nombre of arrayNombres2) {
    if (nombre.length == arraylengths.at(0))  TextosMasCortos.push (nombre)
}

// Si la cantidad de elementos del array es 1, imprimimos la variable TextoMasCorto
// cuyo valor será el nombre más corto
// Si la cantidad de elementos del array es mayor a 1, imprimimos el array
// TextosMasCortos

var TextoMasCorto = ""
if (TextosMasCortos.length ==1) {
    TextoMasCorto += TextosMasCortos[0]
    console.log(TextoMasCorto);
}
else console.log(TextosMasCortos);

// 7) Obtén un array llamado longitudNombres que tenga como elementos las longitudes 
// de los textos incluidos en cualquiera de los arrays anteriores.
//  Por tanto debes mostrar : [ 5, 6, 5, etc.

//Para el array arrayNombres2 --> arraylengths




// 8) Crea un array llamado arrayNombresConI que incluya solo los nombres que contengan 
// la letra i

let arrayNombresConI = []
let letra = "i"
for (nombre of arrayNombres2) {
    for (caracter of nombre) {
        if (caracter == letra) {
            arrayNombresConI.push (nombre)
            break
    }
}
}

arrayNombresConI






// 2ERA FORMA

// let objeto_nombres = {}
// for (let i=0;i<arrayNombres2.length;i++) {
//     objeto_nombres[arrayNombres2[i]] = arrayNombres2[i].length
// }

// // console.log(objeto_nombres);

// let arraylengths=[]
// for (nombres in objeto_nombres){
//     arraylengths.push(objeto_nombres[nombres]);
// }
// arraylengths.sort()
// arraylengths.reverse()

// let arrayTextosMasLargos = []

// for (nombre in objeto_nombres) {
//     if (objeto_nombres[nombre]==arraylengths[0]) arrayTextosMasLargos.push(nombre)
// }

// var TextoMasLargo =""
// if (arrayTextosMasLargos.length ==1) {
//      TextoMasLargo += arrayTextosMasLargos[0]
//      console.log(TextoMasLargo);
// } 
// else console.log(arrayTextosMasLargos);







