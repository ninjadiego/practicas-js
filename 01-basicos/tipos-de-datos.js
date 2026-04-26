// =============================================================================
// Tipos de datos en JavaScript
// =============================================================================
// JavaScript es un lenguaje de tipado dinamico: las variables no tienen un tipo
// fijo, sino que el tipo depende del valor que contienen en cada momento.
// Existen 7 tipos primitivos y un tipo objeto.
// =============================================================================

// 1. String: cadenas de texto
const nombre = "Diego";
const saludo = `Hola, ${nombre}`; // template literals con interpolacion
console.log(typeof nombre); // "string"

// 2. Number: numeros enteros y decimales (no hay distincion como en otros lenguajes)
const edad = 25;
const altura = 1.75;
console.log(typeof edad); // "number"

// 3. BigInt: enteros de precision arbitraria (mas alla de Number.MAX_SAFE_INTEGER)
const numeroGrande = 9007199254740993n;
console.log(typeof numeroGrande); // "bigint"

// 4. Boolean: true o false
const esEstudiante = true;
console.log(typeof esEstudiante); // "boolean"

// 5. Undefined: variable declarada sin valor asignado
let sinAsignar;
console.log(typeof sinAsignar); // "undefined"

// 6. Null: ausencia intencional de valor
const vacio = null;
console.log(typeof vacio); // "object" (es una rareza historica del lenguaje)

// 7. Symbol: valores unicos e inmutables, usados como identificadores
const id = Symbol("id");
console.log(typeof id); // "symbol"

// 8. Object: estructuras de datos compuestas
const persona = {
  nombre: "Diego",
  edad: 25,
  hobbies: ["programar", "leer"],
};
console.log(typeof persona); // "object"

// =============================================================================
// Conversion de tipos (coercion)
// =============================================================================

// Conversion explicita
const numeroComoTexto = String(123);   // "123"
const textoComoNumero = Number("456"); // 456
const aBoolean = Boolean(0);           // false

// Conversion implicita (puede generar bugs sutiles)
console.log("5" + 3);  // "53"  -> el + concatena strings
console.log("5" - 3);  // 2     -> el - convierte a number
console.log(true + 1); // 2     -> true se convierte a 1

// =============================================================================
// Comparaciones: == vs ===
// =============================================================================
// == compara con coercion de tipos (NO recomendado en general)
// === compara estrictamente tipo y valor (recomendado)

console.log(0 == false);   // true  (con coercion)
console.log(0 === false);  // false (sin coercion)
console.log("" == 0);      // true  (con coercion)
console.log("" === 0);     // false (sin coercion)

// =============================================================================
// Buenas practicas
// =============================================================================
// - Usa siempre === y !== para evitar sorpresas con la coercion.
// - Prefiere const por defecto, let solo cuando necesites reasignar.
// - Evita var: tiene un scope confuso y comportamiento de hoisting peligroso.
// - Usa Number.isNaN() en lugar de isNaN() para chequeos seguros.
