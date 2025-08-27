/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/
// 1. Crea un array que almacene cinco animales
let animales = ["Perro", "Gato", "León", "Tigre", "Elefante"];
console.log(animales);

// 2. Añade dos más. Uno al principio y otro al final
animales.unshift("Caballo"); // al principio
animales.push("Lobo");       // al final
console.log(animales);

// 3. Elimina el que se encuentra en tercera posición (índice 2)
animales.splice(2, 1);
console.log(animales);

// 4. Crea un set que almacene cinco libros
let libros = new Set(["Don Quijote", "Cien Años de Soledad", "1984", "Hamlet", "La Odisea"]);
console.log(libros);

// 5. Añade dos más. Uno de ellos repetido
libros.add("El Principito");
libros.add("1984"); // repetido, Set no lo guarda de nuevo
console.log(libros);

// 6. Elimina uno concreto a tu elección
libros.delete("Hamlet");
console.log(libros);

// 7. Crea un mapa que asocie el número del mes a su nombre
let meses = new Map([
  [1, "Enero"],
  [2, "Febrero"],
  [3, "Marzo"],
  [4, "Abril"],
  [5, "Mayo"],
  [6, "Junio"],
  [7, "Julio"],
  [8, "Agosto"],
  [9, "Septiembre"],
  [10, "Octubre"],
  [11, "Noviembre"],
  [12, "Diciembre"]
]);
console.log(meses);

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
if (meses.has(5)) {
  console.log("El mes 5 es:", meses.get(5));
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano
meses.set("verano", ["Junio", "Julio", "Agosto"]);
console.log(meses.get("verano"));

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let numeros = [1, 2, 3, 3, 4, 5];
let numerosSet = new Set(numeros);
let numerosMap = new Map([["numerosUnicos", numerosSet]]);
console.log(numerosMap);
console.log(numerosMap.get("numerosUnicos"));