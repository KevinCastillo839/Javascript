/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// 1. Imprime por consola tu nombre si una variable toma su valor
let nombre = "Kevin";
if (nombre === "Kevin") {
  console.log("Mi nombre es Kevin");
}

// 2. Imprime un mensaje si el usuario y contraseña coinciden con unos establecidos
let usuario = "admin";
let password = "1234";

if (usuario === "admin" && password === "1234") {
  console.log("Acceso concedido");
} else {
  console.log("Usuario o contraseña incorrectos");
}

// 3. Verifica si un número es positivo, negativo o cero
let numero = -5;
if (numero > 0) {
  console.log("El número es positivo");
} else if (numero < 0) {
  console.log("El número es negativo");
} else {
  console.log("El número es cero");
}

// 4. Verifica si una persona puede votar o no
let edad = 16;
if (edad >= 18) {
  console.log("Puedes votar");
} else {
  console.log(`No puedes votar, te faltan ${18 - edad} años`);
}

// 5. Operador ternario para "adulto" o "menor"
let categoria = edad >= 18 ? "adulto" : "menor";
console.log("Categoría:", categoria);

// 6. Muestra la estación del año según el mes
let mes = 3; // Marzo
if (mes === 12 || mes === 1 || mes === 2) {
  console.log("Invierno");
} else if (mes >= 3 && mes <= 5) {
  console.log("Primavera");
} else if (mes >= 6 && mes <= 8) {
  console.log("Verano");
} else if (mes >= 9 && mes <= 11) {
  console.log("Otoño");
} else {
  console.log("Mes inválido");
}

// 7. Muestra el número de días de un mes
if (mes === 2) {
  console.log("Febrero tiene 28 o 29 días");
} else if ([4, 6, 9, 11].includes(mes)) {
  console.log("Este mes tiene 30 días");
} else if ([1, 3, 5, 7, 8, 10, 12].includes(mes)) {
  console.log("Este mes tiene 31 días");
} else {
  console.log("Mes inválido");
}

// -------------------- SWITCH --------------------

// 8. Mensaje de saludo diferente dependiendo del idioma
let idioma = "es";
switch (idioma) {
  case "es":
    console.log("Hola");
    break;
  case "en":
    console.log("Hello");
    break;
  case "fr":
    console.log("Bonjour");
    break;
  case "de":
    console.log("Hallo");
    break;
  default:
    console.log("Idioma no soportado");
}

// 9. Switch para estación del año (ejercicio 6)
switch (mes) {
  case 12:
  case 1:
  case 2:
    console.log("Invierno");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Primavera");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Verano");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Otoño");
    break;
  default:
    console.log("Mes inválido");
}

// 10. Switch para días del mes (ejercicio 7)
switch (mes) {
  case 2:
    console.log("Febrero tiene 28 o 29 días");
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log("Este mes tiene 30 días");
    break;
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log("Este mes tiene 31 días");
    break;
  default:
    console.log("Mes inválido");
}
