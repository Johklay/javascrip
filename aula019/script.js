// VALOR PRIMITIVO
let a = 10;
let b = a;

console.log("Antes:");
console.log("a =", a); // 10
console.log("b =", b); // 10

b = 20;

console.log("Depois:");
console.log("a =", a); // 10
console.log("b =", b); // 20


//Mudar b não muda a.

// VALOR POR REFERÊNCIA
let x = [1, 2];
let y = x;

console.log("Antes:");
console.log("x =", x); // [1, 2]
console.log("y =", y); // [1, 2]

y.push(3);

console.log("Depois:");
console.log("x =", x); // [1, 2, 3]
console.log("y =", y); // [1, 2, 3]

//Mudar o conteúdo pelo y muda também o x.