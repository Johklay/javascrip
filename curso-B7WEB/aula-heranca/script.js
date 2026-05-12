//HERANÇA

class Person {
    
    age = 0;

    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(`${this.name} diz OI`)
    }
}

class Student extends Person {

    
    constructor(name, id) {
        super(name);
        this.id = id;
    }

    sayHello() {
        super.sayHi
    }
}

let p1 = new Student('Bonieyk', 1)
p1.age = 20;
p1.sayHi();
p1.sayHello();

let p2 = new Student('Pedro', 2)

console.log(`${p1.name} tem ${p1.age} anos e seu número  matrícula é #${p1.id}`)
console.log(`${p2.name} tem ${p2.age} anos e seu número  matrícula é #${p2.id}`)