//Nested Objects
console.log("____________________");
//Example 1
console.log("Example 1");
const person = {
    fullName : "Spongebob Squarepants",
    age: 30,
    isStudent: true,
    hobbies: ["karate", "jellyfishing", "cooking"],
    address:{
        street: "124 Conch St.",
        city: "Bikini Bottom",
        country: "Int. Waters"
    }
}

console.log(person); //all details
console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log("____________________");

//array
console.log(person.hobbies); //['karate', 'jellyfishing', 'cooking']
console.log(person.hobbies[0]);//karate
console.log("____________________");

//nested object
console.log(person.address);//{street: '124 Conch St.', city: 'Bikini Bottom', country: 'Int. Waters'}
console.log(person.address.street);//124 Conch St.

console.log("____________________");
//loop through
for(const property in person.address){
    console.log(person.address[property]);
}
console.log("____________________");



console.log("____________________");
//Example 2
console.log("Example 2");
console.log("passing the nested object using a constructor");

class Person{

    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }

}

class Address{

    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person2 = new Person("Robin Hood", 30, "No 123",
                                                                  "Sherwood Forest",
                                                                   "England");
console.log("____________________");
console.log(person2);//full details
console.log("____________________");
console.log(person2.name);//Robin Hood
console.log(person2.age);//30
console.log("____________________");
console.log(person2.address);//Address {street: 'No 123', city: 'Sherwood Forest', country: 'England'}
console.log("____________________");
console.log(person2.address.street);//No 123
console.log("____________________");
