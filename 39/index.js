// this keyword

//example 1

const person1 ={
    name: "SpongeBob",
    favFood: "hamburgers",
    sayHello: function(){console.log(`Hi! I am ${this.name}.`)},
    eat: function(){console.log(`I am eating a ${this.favFood}.`)}
}

const person2 ={
    name: "Patric",
    favFood: "Crabby Patties",
    sayHello: function(){console.log(`Hi! I am ${this.name}.`)},
    eat: function(){console.log(`I am eating a ${this.favFood}.`)}
}

person1.sayHello();
person1.eat();

person2.sayHello();
person2.eat();