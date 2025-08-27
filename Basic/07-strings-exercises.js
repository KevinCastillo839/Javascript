/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/
// 1. Concatena dos cadenas de texto
let str1 = "Hola";
let str2 = "Mundo";
let concatenado = str1 + " " + str2; // "Hola Mundo"
console.log(concatenado);

// 2. Muestra la longitud de una cadena de texto
let texto = "JavaScript";
console.log(texto.length); // 10

// 3. Muestra el primer y último carácter de un string
let palabra = "Programación";
console.log("Primero:", palabra[0]); // "P"
console.log("Último:", palabra[palabra.length - 1]); // "n"

// 4. Convierte a mayúsculas y minúsculas un string
let mensaje = "Hola Mundo";
console.log(mensaje.toUpperCase()); // "HOLA MUNDO"
console.log(mensaje.toLowerCase()); // "hola mundo"

// 5. Crea una cadena de texto en varias líneas
let multilinea = `Esta es la primera línea
y esta es la segunda
y esta es la tercera`;
console.log(multilinea);

// 6. Interpola el valor de una variable en un string
let nombre = "Kevin";
let saludo = `Hola, mi nombre es ${nombre}`;
console.log(saludo);

// 7. Reemplaza todos los espacios en blanco de un string por guiones
let frase = "Esto es un ejemplo";
let fraseGuiones = frase.replaceAll(" ", "-");
console.log(fraseGuiones); // "Esto-es-un-ejemplo"

// 8. Comprueba si una cadena de texto contiene una palabra concreta
let oracion = "Estoy aprendiendo JavaScript";
console.log(oracion.includes("JavaScript")); // true
console.log(oracion.includes("Python")); // false

// 9. Comprueba si dos strings son iguales
let a = "Hola";
let b = "hola";
console.log(a === b); // false (sensible a mayúsculas/minúsculas)

// 10. Comprueba si dos strings tienen la misma longitud
let cadena1 = "Sol";
let cadena2 = "Luz";
console.log(cadena1.length === cadena2.length); // true
