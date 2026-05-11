// Programação orientada a objetos (POO)
//Programação Procedual
// Programação funcional (PF - FP(Funcional programming paradigm))

class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
}

let p1 = new Person("João", 20);
let p2 = new Person("Maria", 30);
let p3 = new Person("Pedro", 40);

console.log(`${p1.name} tem ${p1.age} anos`);
console.log(`${p2.name} tem ${p2.age} anos`);
console.log(`${p3.name} tem ${p3.age} anos`);