// CONCAT

const ejemploPush = [1, 2, 3, 4];

console.log(ejemploPush);

ejemploPush.push(5);

console.log(ejemploPush);

// En React usualmente se utilizan tecnicas de programacion funcional
// Una característica del paradigma de programación funcional es el uso de estructuras de datos inmutables.
// En el código de React, es preferible usar el método concat, que no agrega el elemento al array, pero crea un nuevo array

const numerosSuerte = [3, 5, 10, 25];

const numerosSuerteActualizados = numerosSuerte.concat(9);

console.log(numerosSuerte);
console.log(numerosSuerteActualizados);