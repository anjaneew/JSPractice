//Inheritance

class Animal{
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating.`)
    }

    sleep(){
        console.log(`This ${this.name} is sleeping.`)
    }


    //
}

class Rabbit extends Animal{
    name = "rabbit";

    run(){
        console.log(`This ${this.name} is running`);
    }
}

class Fish extends Animal{
    name = "fish";

    swim(){
        console.log(`This ${this.name} is swimming`);
    }
}

class Hawk extends Animal{
    name = "hawk";

    fly(){
        console.log(`This ${this.name} is flying`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(`The ${rabbit.name} is alive: ${rabbit.alive}`);
rabbit.alive = false;
console.log(`The ${rabbit.name} is alive: ${rabbit.alive}`);
rabbit.eat();
rabbit.sleep();
rabbit.run();
console.log("----------------------------")

console.log(`The ${fish.name} is alive: ${fish.alive}`);
fish.eat();
fish.sleep();
fish.swim();
console.log("----------------------------")

console.log(`The ${hawk.name} is alive: ${hawk.alive}`);
hawk.eat();
hawk.sleep();
hawk.fly();
console.log("----------------------------")