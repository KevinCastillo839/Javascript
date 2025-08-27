/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// 1. Imprime los números del 1 al 20 (for clásico)
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

// 2. Suma todos los números del 1 al 100 (while)
let suma = 0;
let n = 1;
while (n <= 100) {
  suma += n;
  n++;
}
console.log("Suma del 1 al 100:", suma);

// 3. Imprime los números pares entre 1 y 50 (do...while)
let x = 1;
do {
  if (x % 2 === 0) console.log(x);
  x++;
} while (x <= 50);

// 4. Imprimir cada nombre de un array (for...of)
let nombres = ["Ana", "Luis", "Pedro", "María"];
for (let nombre of nombres) {
  console.log(nombre);
}

// 5. Contar el número de vocales en un string (for...in)
let texto = "Programacion en JavaScript";
let vocales = "aeiouAEIOU";
let contador = 0;
for (let i in texto) {
  if (vocales.includes(texto[i])) contador++;
}
console.log("Número de vocales:", contador);

// 6. Multiplicar todos los números de un array (forEach)
let numeros = [2, 3, 4, 5];
let producto = 1;
numeros.forEach(num => producto *= num);
console.log("Producto:", producto);

// 7. Imprimir la tabla del 5 (for clásico)
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

// 8. Invertir una cadena de texto (while)
let cadena = "Hola Mundo";
let invertida = "";
let idx = cadena.length - 1;
while (idx >= 0) {
  invertida += cadena[idx];
  idx--;
}
console.log("Invertida:", invertida);

// 9. Generar los primeros 10 números de Fibonacci (for)
let fib = [0, 1];
for (let i = 2; i < 10; i++) {
  fib.push(fib[i - 1] + fib[i - 2]);
}
console.log("Fibonacci (10 términos):", fib);

// 10. Crear un nuevo array con números > 10 (for...of)
let nums = [5, 12, 8, 20, 7, 15];
let mayores10 = [];
for (let num of nums) {
  if (num > 10) mayores10.push(num);
}
console.log("Números mayores a 10:", mayores10);
