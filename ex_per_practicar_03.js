// Dado este array:
let arrayMixto = [ "Marie", 24, "Pol", 18, "Judith", 22, "Eva", 28 ]

// 9) Debes obtener otro array llamado arrayBidimensional que sea así­:
// [ ["Marie", 24 ], ["Pol", 18], ["Judith", 22 ], [ "Eva", 28] ]

let lista_temporal = [];

let arrayBidimensional = [];

for (elementos of arrayMixto) {
    
    while (lista_temporal.length<2){
        lista_temporal.push(elementos)
        if (lista_temporal.length==2){
            arrayBidimensional.push(lista_temporal)
            lista_temporal=[]
        }
        break
    }
   
}


 
lista_temporal
arrayBidimensional