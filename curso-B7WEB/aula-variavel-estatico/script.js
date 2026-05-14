//Variavel/metodo estatico

class Person {

    static hands = 2;
    age = 0;

    constructor(name) {
        this.name = name;
    }

    static sayHi() {
        console.log(`Oi ${this.name}`)
    }

    // sayHi(){
    //     console.log(`Oi, eu sou ${this.name} e tenho ${Person.hands} maõs`)
    // }
}

let p1 = new Person('John')

// console.log(`Oi, eu sou ${p1.name} e tenho ${Person.hands} maõs`)

Person.sayHi();