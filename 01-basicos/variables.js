/**
 * Ejercicio 1: Variables y tipos de datos en JavaScript
 *
 * Objetivo: Aprender a declarar variables con let, const y conocer
 * los tipos de datos primitivos.
 */

// === Declaracion de variables ===

// const: para valores que NO van a cambiar
const nombre = 'Diego';
const anioNacimiento = 2000;

// let: para valores que SI pueden cambiar
let edad = 25;
let estaAprendiendo = true;

// === Tipos de datos primitivos ===

const texto = 'Esto es un string';        // String
const numero = 42;                         // Number
const decimal = 3.14;                      // Number (no hay distincion)
const verdadero = true;                    // Boolean
const nada = null;                         // Null
let sinDefinir;                            // Undefined

// === Mostrar resultados ===

console.log('--- Datos del usuario ---');
console.log(`Nombre: ${nombre}`);
console.log(`Edad: ${edad}`);
console.log(`Esta aprendiendo: ${estaAprendiendo}`);

console.log('--- Tipos de datos ---');
console.log(`typeof texto: ${typeof texto}`);
console.log(`typeof numero: ${typeof numero}`);
console.log(`typeof verdadero: ${typeof verdadero}`);
console.log(`typeof nada: ${typeof nada}`);
console.log(`typeof sinDefinir: ${typeof sinDefinir}`);

// === Reto ===
// 1. Declara una constante con tu color favorito
// 2. Declara una variable let con tu hobby favorito
// 3. Cambia el valor de tu hobby y muestralo en consola
