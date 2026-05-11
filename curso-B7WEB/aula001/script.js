// Programação orientada a objetos (POO)
//Programação Procedual
// Programação funcional (PF - FP(Funcional programming paradigm))


class Person {

    age = 0;
    steps = 0;

    constructor (name) {
        this.name = name;
    }

    takeAstep() {
        this.steps++;
    }

    setAge(newAge) {
        if(typeof newAge === 'number'){
            this.age = newAge;
        }else {
            console.log('Coloque apenas números')
        }
    }

}

let p1 = new Person("João", 20);
let p2 = new Person("Maria", 30);
let p3 = new Person("Pedro", 40);

p1.setAge(20)
p1.takeAstep();

console.log(`Passos de ${p1.name}: ${p1.steps}`)
console.log(`${p1.name} tem ${p1.age} anos`)
console.log(`Passos de ${p2.name}: ${p2.steps}`)