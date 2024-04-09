import Character from "./character";

export default class Magician extends Character {
    constructor(name) {
        super(name, "Magician");
        this.attack = 40;
        this.defence = 10;
    }
}
