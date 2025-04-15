//super keyword
// this = this object
//super = parent class

class Animal{

    //constructor in superclass is extended in subclasses
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    //methods from superclass is extended in subclasses
    move(speed){
        console.log(`The ${this.name} moves at a speed of ${speed} mph.`);
    }
}

class Rabbit extends Animal{
    constructor(name, age, runSpeed){
        super(name, age); //from parent
        this.runSpeed = runSpeed;
    }

    run(){
        console.log(`This ${this.name} can run.`);
        super.move(this.runSpeed);
    }

}

class Fish extends Animal{
    constructor(name, age, swimSpeed){
        super(name, age); //from parent
        this.swimSpeed = swimSpeed;
    }

    swim(){
        console.log(`This ${this.name} can swim.`);
        super.move(this.swimSpeed);
    }
}

class Hawk extends Animal{
    constructor(name, age, flySpeed){
        super(name, age); //from parent
        this.flySpeed = flySpeed;
    }

    fly(){
        console.log(`This ${this.name} can fly.`);
        super.move(this.flySpeed);
    }
}

const rabbit = new Rabbit("rabbit", 1, 25);
const fish = new Fish("fish", 2, 30);
const hawk = new Hawk("hawk", 5, 50);


console.log(`The ${rabbit.name} is ${rabbit.age} years old.`);
rabbit.run();
console.log(`The ${fish.name} is ${fish.age} years old.`);
fish.swim();
console.log(`The ${hawk.name} is ${hawk.age} years old.`);
hawk.fly();