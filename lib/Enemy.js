const Character = require('./Character');
const Potion = require('./Potion');

class Enemy extends Character{
    constructor(name, weapon){
        // inherits properties from the parent Character constructor
        super(name);
        this.strength = this.strength -4;

        // defines its unique properties
        this.weapon = weapon;
        this.potion = new Potion();   
    }

    getDescription () {
        return `A ${this.name} holding a ${this.weapon} has appeared!`;
    };
}
module.exports = Enemy;