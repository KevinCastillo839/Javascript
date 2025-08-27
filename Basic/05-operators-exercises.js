/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
let suma = 5 + 3;
let resta = 10 - 4;
let multiplicacion = 6 * 7;
let division = 20 / 5;
let modulo = 10 % 3;
let exponente = 2 ** 3;
// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

suma += 2; // suma = suma + 2
resta -= 1; // resta = resta - 1
multiplicacion *= 2; // multiplicacion = multiplicacion * 2
division /= 2; // division = division / 2
modulo %= 2; // modulo = modulo % 2
exponente **= 2; // exponente = exponente ** 2

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(5 > 3); // true
console.log(4 < 6); // true 
console.log(7 >= 7); // true
console.log(8 <= 10); // true
console.log(5 === 5); // true

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(3 > 5); // false
console.log(6 < 4); // false    
console.log(7 >= 8); // false
console.log(10 <= 9); // false
console.log(5 === 6); // false
// 5. Utiliza el operador lógico and
console.log(5 > 3 && 4 < 6); // true
console.log(5 > 3 && 4 > 6); // false
console.log(3 > 5 && 4 < 6); // false
console.log(3 > 5 && 4 > 6); // false
// 6. Utiliza el operador lógico or
console.log(5 > 3 || 4 < 6); // true
console.log(5 > 3 || 4 > 6); // true
console.log(3 > 5 || 4 < 6); // true
console.log(3 > 5 || 4 > 6); // false
// 7. Combina ambos operadores lógicos
console.log((5 > 3 && 4 < 6) || (3 > 5 && 4 > 6)); // true
console.log((5 > 3 && 4 > 6) || (3 > 5 && 4 > 6)); // false
console.log((5 > 3 || 4 < 6) && (3 > 5 || 4 > 6)); // true
// 8. Añade alguna negación
console.log(!(5 > 3)); // false
console.log(!(3 > 5)); // true
console.log(!(5 > 3 && 4 < 6)); // false
console.log(!(5 > 3 && 4 > 6)); // true
// 9. Utiliza el operador ternario
console.log(5 > 3 ? "Cinco es mayor que tres" : "Cinco no es mayor que tres");
console.log(3 > 5 ? "Tres es mayor que cinco" : "Tres no es mayor que cinco");
console.log(5 === 5 ? "Cinco es igual a cinco" : "Cinco no es igual a cinco");
console.log(5 === 6 ? "Cinco es igual a seis" : "Cinco no es igual a seis");
// 10. Combina operadores aritméticos, de comparáción y lógicas
console.log((5 + 3) > (10 - 4) && (6 * 7) === (20 / 5)); // false
console.log((5 + 5) > (10 - 4) || (6 *  7) === (42)); // true
console.log(((5 + 3) * 2) >= (10 - 4) && ((6 * 7) / 2) < (20 / 5)); // true
console.log(((5 + 3) * 2) < (10 - 4) || ((6 * 7) / 2) > (20 / 5)); // false