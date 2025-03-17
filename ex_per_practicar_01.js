// Se te proponen una serie de ejercicios para practicar
// los arrays y el bucle for.

// Para resolver NO hay que utilizar ninguna funciónn matemática
// Crea el código necesario para resolver los requerimientos

// Dado este array:
let arrayNumeros1 = [4, 5, 3, 8, 2, 7, 1, 6]
let arrayNumeros2 = [4, 2, 7, 1, 6]
// o cualquier otro array solo con números

// 1) Mostrar por consola la suma de todos los valores

// PRIMERA FORMA
// Declarem la variable suma1 (inicialment zero)

let suma1 = 0

// Treballem amb l' arrayNumeros1
for (numero of arrayNumeros1){
    suma1 += numero;
}
console.log(suma1);

// SEGONA FORMA

// Declarem la variable suma2 (inicialment zero)
let suma2 = 0

// Treballem amb l' arrayNumeros2

for (let i=0 ; i<arrayNumeros2.length;i++ ){
    suma2 +=arrayNumeros2[i]
}

console.log(suma2);



// 2) Mostrar por consola el promedio

// Treballem amb l' arrayNumeros1

// Para calular el promedio, debemos dividir la suma entre la cantidad de elementos (length)

let promedio = suma1/arrayNumeros1.length
console.log(promedio);




// 3) Encontrar los valores máximo y mí­nimo

arrayNumeros1_ordenado = arrayNumeros1.toSorted()
console.log(arrayNumeros1_ordenado);

const valor_maximo = arrayNumeros1_ordenado.at(-1)
console.log(valor_maximo);

const valor_minimo = arrayNumeros1_ordenado[0]
console.log(valor_minimo);

// 4) Sumar los valores con indice par y restar los impares

//Declaramos una variable suma_par
let sumar_par = 0
for (i=0;i<arrayNumeros1.length;i +=2){
    sumar_par +=arrayNumeros1 [i]
}

console.log(sumar_par);

//Declaramos una variable suma_impar
let sumar_impar = 0
for (i=1;i<arrayNumeros1.length;i +=2){
    sumar_impar +=arrayNumeros1 [i]
}

console.log(sumar_impar);

// Hay que mostrar por consola cada resultado
