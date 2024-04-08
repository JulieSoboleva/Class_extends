import { Character } from "./character";

class Undead extends Character {
    constructor(name) {
        super(name, "Undead", 25, 25);
    }
}

const person = new Undead("Ralf");
console.log(person);
