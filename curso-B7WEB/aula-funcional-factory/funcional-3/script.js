//FUNCIONAL: CONSTRUCTOR

let person = {
        name: 'John',
        lastName: 'Klayverton',
        age: 23,
        getFullName() {
            return `${this.name} ${this.lastName}`;
        },
        start() {
            console.log('Deu start na pessoa')
        }
}

person.start();
console.log(person.getFullName());
