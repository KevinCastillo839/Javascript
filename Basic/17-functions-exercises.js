/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Función que recibe dos números y devuelve su suma
function sumar(a, b) {
  return a + b;
}
console.log("Suma:", sumar(5, 7)); // 12

// 2. Función que recibe un array de números y devuelve el mayor
function numeroMayor(array) {
  let mayor = array[0];
  for (let num of array) {
    if (num > mayor) {
      mayor = num;
    }
  }
  return mayor;
}
console.log("Mayor:", numeroMayor([10, 25, 7, 99, 42])); // 99


// 3. Función que recibe un string y devuelve el número de vocales que contiene
function contarVocales(texto) {
  let vocales = "aeiouAEIOU";
  let contador = 0;
  for (let letra of texto) {
    if (vocales.includes(letra)) {
      contador++;
    }
  }
  return contador;
}
console.log("Número de vocales:", contarVocales("Programación en JavaScript")); // 9


// 4. Función que recibe un array de strings y devuelve un nuevo array con las strings en mayúsculas
function convertirMayusculas(array) {
  let nuevoArray = [];
  for (let palabra of array) {
    nuevoArray.push(palabra.toUpperCase());
  }
  return nuevoArray;
}
console.log("En mayúsculas:", convertirMayusculas(["hola", "mundo", "javascript"])); 
// ["HOLA", "MUNDO", "JAVASCRIPT"]
// 5. Función que verifica si un número es primo
function esPrimo(num) {
  if (num <= 1) return false; 
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log("¿7 es primo?:", esPrimo(7));   // true
console.log("¿12 es primo?:", esPrimo(12)); // false


// 6. Función que devuelve elementos comunes entre dos arrays
function elementosComunes(arr1, arr2) {
  return arr1.filter(e => arr2.includes(e));
}
console.log("Comunes:", elementosComunes([1,2,3,4], [3,4,5,6])); // [3, 4]


// 7. Función que suma los números pares de un array
function sumaPares(array) {
  let suma = 0;
  for (let num of array) {
    if (num % 2 === 0) suma += num;
  }
  return suma;
}
console.log("Suma de pares:", sumaPares([1,2,3,4,5,6])); // 12


// 8. Función que devuelve un array con los números elevados al cuadrado
function cuadrados(array) {
  return array.map(num => num ** 2);
}
console.log("Cuadrados:", cuadrados([2, 4, 6])); // [4, 16, 36]


// 9. Función que invierte el orden de las palabras de un string
function invertirPalabras(cadena) {
  return cadena.split(" ").reverse().join(" ");
}
console.log("Invertido:", invertirPalabras("Hola mundo desde JavaScript"));
// "JavaScript desde mundo Hola"


// 10. Función que calcula el factorial de un número
function factorial(n) {
  if (n < 0) return undefined; // No definido para negativos
  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}
console.log("Factorial de 5:", factorial(5)); // 120
