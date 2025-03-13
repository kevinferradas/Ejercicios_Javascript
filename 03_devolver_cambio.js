/* Vamos a trabajar para un comercio que vende toda 
clase de artículos, desde los más caros,
hasta los más baratos. El cambio se va a devolver
en metálico según esta condición:
--- Será usando la mínima cantidad de billetes
    y monedas posible  */

// let cambio = 101
// let parte_entera = parseInt(cambio)
// let parte_decimal = cambio - parte_entera
// let devolucion= []

// let monedas_o_billetes = { 500 : 0, 200:0, 100:0, 50:0, 20:0, 10: 0, 5 : 0, 2 :0, 1 : 0, 0.5 : 0, 0.2 : 0, 0.1 : 0, 0.05 : 0, 0.02 : 0, 0.01 : 0}

// for (cantidad in monedas_o_billetes) {
//     if ( cambio >= cantidad) {
//         let division = parseInt(cambio / cantidad)
//         monedas_o_billetes[cantidad] += division
//         cambio -= cantidad*division
//     }

// }
// console.log(monedas_o_billetes);


// SOLUCION FERRAN

let cambio = 457.27

const money = [500, 200, 100, 50, 20, 10, 5, 2, 1, .5, .2, .1, .05, .02, .01]

let objetoCambio={} //ej: 200:2,.. 

for (tipoMoney of money){
    if (cambio !=0.01){
    let cantidadMoney = parseInt(cambio /tipoMoney)
    
    if (cantidadMoney == 0) continue
    
    else{
        objetoCambio [tipoMoney]=cantidadMoney
        cambio -= cantidadMoney * tipoMoney
        console.log(cantidadMoney);
        console.log(cambio);
    }}
    else{
        objetoCambio[tipoMoney]=1
    }



}


objetoCambio
 
