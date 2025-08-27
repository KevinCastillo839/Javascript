/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea
//comentario en una linea

// 2. Escribe un comentario en varias líneas
/* esto es un comentario de varias lineas */
// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let myString = "Hola"
let myNumber = 42
let myBoolean = true
let myUndefined
// 4. Imprime por consola el valor de todas las variables
console.log(myString)
console.log(myNumber)
console.log(myBoolean)
console.log(myUndefined)
// 5. Imprime por consola el tipo de todas las variables
console.log(typeof myString)
console.log(typeof myNumber)
console.log(typeof myBoolean)
console.log(typeof myUndefined)
// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
myString = "Adiós"
myNumber = 100
myBoolean= false
myUndefined = undefined
// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
myString = 25
myNumber = "Cuarenta y dos"
myBoolean = "true"
myUndefined = null
// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const myConstString = "Hola"
const myConstNumber = 42
const myConstBoolean = true
const myConstUndefined = undefined    
// 9. A continuación, modifica los valores de las constantes
/*myConstString = "Adiós"
myConstNumber = 100
myConstBoolean= false
myConstUndefined = null*/
// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
// Las lineas 59 a 62 producen error al intentar modificar una constante