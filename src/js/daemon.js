import { Character } from "./character";

class Daemon extends Character {
    constructor(name) {
        super(name, "Daemon", 10, 40);
    }
}

const person = new Daemon("Max");
console.log(person);
