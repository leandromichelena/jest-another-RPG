// Constructor for the potion object. Name is the property to be defined when creating such object.
function Potion(name) {
    this.types = ['strength', 'agility', 'health'];
    this.name = name || this.types[Math.floor(Math.random() * this.types.length)];


    if (this.name === 'health') {
        // when creating a health potion, it's value should be a random number between 30 and 40
        this.value = Math.floor(Math.random() * 10 + 30);
    } else {
        // when creating any other potion, it's value should be a random number between 7 and 12
        this.value = Math.floor(Math.random() * 5 + 7);
    }
}

module.exports = Potion;