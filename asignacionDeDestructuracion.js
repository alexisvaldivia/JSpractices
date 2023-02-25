const t = [1, 2, 3, 4, 5]

const [first, ...rest] = t

console.log(first)  // 1, 2 es impreso
console.log(rest)   // [3, 4 ,5] es impreso

const diasSemana = ["lunes", "martes", "miercoles","jueves", "viernes", "sabado", "domingo"];

let [dia1, ... restoDias] = diasSemana;

console.log(restoDias);