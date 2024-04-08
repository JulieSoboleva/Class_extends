import { Character } from "./character";

class Swordsman extends Character {
    constructor(name) {
        super(name, "Swordsman", 40, 10);
    }
}

const person = new Swordsman("John");
console.log(person);
