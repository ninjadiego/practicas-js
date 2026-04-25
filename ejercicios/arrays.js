// Ejercicios básicos de Arrays en JavaScript
// Autor: ninjadiego

// 1. Crear un array con números del 1 al 10
const numeros = Array.from({ length: 10 }, (_, i) => i + 1);
console.log('Números:', numeros);

// 2. Filtrar números pares
const pares = numeros.filter(n => n % 2 === 0);
console.log('Pares:', pares);

// 3. Sumar todos los elementos
const suma = numeros.reduce((acc, n) => acc + n, 0);
console.log('Suma total:', suma);

// 4. Duplicar cada número usando map
const duplicados = numeros.map(n => n * 2);
console.log('Duplicados:', duplicados);

// 5. Encontrar el número máximo
const maximo = Math.max(...numeros);
console.log('Máximo:', maximo);
