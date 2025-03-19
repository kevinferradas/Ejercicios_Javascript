// 10) Este array incluye una operación de compra:
const compra = [
    ["Leche", 1.2, 2],
    ["Pan", 0.8, 3],
    ["Huevos", 2.5, 1],
    ["Café", 5.2, 0.5]
]
// Se muestra el nombre del artí­culo, su precio y la cantidad comprada.
// Debes obtener la cantidad de artículos comprados (no de cada tipo) y el importe total.
// Por ejemplo: "Has comprado 4 artículos y el importe total es de 12.7 euros"

// Después añade otro articulo al array anterior y muestra de nuevo el mensaje 
// informativo con los nuevos datos.

let importeTotal = 0
let cantidadArticulos = 0
for (listas of compra) {
    importeTotal += listas.at(-2)*listas.at(-1);
    cantidadArticulos += listas.at(-1);
}

console.log(`Has comprado ${cantidadArticulos} artículos y el importe total es de ${importeTotal} euros`);

