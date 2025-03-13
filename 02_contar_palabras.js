/* Vamos a tener una frase. Por ejemplo:
Mañana será viernes y aunque va a llover será un día maravilloso.
Hay que mostrar cuántas palabras contienen una letra determinada*/

let frase="Mañana será viernes y aunque va a llover será un día maravilloso"
let letra = "a"

frase= frase.toLocaleLowerCase()

frase = frase.replaceAll("á","a")
frase = frase.replaceAll("é","e")
frase = frase.replaceAll("í","i")
frase = frase.replaceAll("ó","o")
frase = frase.replaceAll("ú","u")


frase = frase
let lista_palabras = frase.split(" ")
let contador = 0 
for (palabra of lista_palabras){
    for (caracter of palabra){
        if (letra == caracter) {
            contador +=1
            break
        }

    }
}

if (contador==0) console.log(`No hay palabras que contengan la letra ${letra}`);
else if (contador==1) console.log(`${contador} palabra contiene la letra ${letra}`);
else console.log(`${contador} palabras contienen la letra ${letra}`);

//OTRA SOLUCION

// for (palabra of )