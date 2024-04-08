import { Character } from "./character";

class Bowman extends Character {
    constructor(name) {
        super(name, "Bowman", 25, 25);
    }
}

const person = new Bowman("Ivan");
console.log(person);
