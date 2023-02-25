// MAP: El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos

const t = [2, 4, 6, 8];

const txm = t.map(valor => valor * 2);

console.log('array sin map' + t);
console.log('array anterior mult por 2: ' + txm);

const numbers = [1, 5, 10, 15];

const doubles = numbers.map(function(num) {
   return num * 2;
});

console.log(numbers);
console.log(doubles);

const t2 = [1, 2, 3]

const m2 = t2.map(value => '<li>' + value + '</li>')
console.log(m2)
// [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ] es impreso