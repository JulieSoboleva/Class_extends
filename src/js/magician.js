import { Character } from "./character";

class Magician extends Character {
    constructor(name) {
        super(name, "Magician", 40, 10);
    }
}

const person = new Magician("Bob");
console.log(person);
