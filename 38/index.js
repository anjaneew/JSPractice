//Object

const person1 = {
    firstName: "Robin",
    lastName: "Hood",
    age: 25,
    isEmployed: true,
    sayHello: function(){console.log("I'm Robin of sherwood!")},
    attack: function(){console.log("Robin just attacked you using the sword Albian")}
};

const person2 = {
    firstName: "Little",
    lastName: "John",
    age: 30,
    isEmployed: true,
    sayHello: function(){console.log("I'm Little John!")},
    attack: function(){console.log("Little John just attacked you using the stick!")}
};

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
person1.sayHello();
person1.attack();

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
person2.sayHello();
person2.attack();

