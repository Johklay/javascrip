//Funcional: INSTANCIA E THIS

function createPerson(name, lastName, age) {
    return {
        name,
        lastName,
        age,
        getFullName() {
            return `${this.name} ${this.lastName}`;
        }
    }
}

let person1 = createPerson('John', 'Klayverton', 23);
console.log(person1.getFullName());
