import { Character } from "./character";

class Zombie extends Character {
    constructor(name) {
        super(name, "Zombie", 40, 10);
    }
}

const person = new Zombie("Kuper");
console.log(person);
