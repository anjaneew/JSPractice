// setters - filters that make a property  writable & validates
// getters - grabs the validated input from getter
//          that make a property readable

//Example 1 - What if there are no getters or setters

class Rectangle{

    constructor(width, height){
        this.width = width;
        this.height = height;
    }
}

const rectangle1 = new Rectangle(-150, "Booruwa");
//this is garbage values. so need to validate

console.log(`The rectangle's width is ${rectangle1.width} 
            and its height is ${rectangle1.height}.`);



//Example 2 - Square

class Square{

    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if (newWidth > 0){
            this._width = newWidth;
        }
        else{
            console.error("Width must be a positive number");
        }
    }

    set height(newHeight){
        if (newHeight > 0){
            this._height = newHeight;
        }
        else{
            console.error("Width must be a positive number");
        }
    }

    get width(){
        // return this._width;
        return `${this._width.toFixed(1)}cm`;
    }

    get height(){
        // return this._height;
        return `${this._height.toFixed(1)}cm`;
    }

    get area(){
        return `${(this._width * this._height).toFixed(1)}cm^2`;
    }

}

// const square1 = new Square("MY", -250); // garbage values
const square2 = new Square(52, 52);//valid

// console.log(`The square's width is ${square1.width}  and its height is ${square1.height}.`);
console.log(`The square's width is ${square2.width} and its height is ${square2.height}.`);
console.log(`The square's area is ${square2.area}.`);


//Example 3  - person

class Person{

    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName){
        if (typeof newFirstName === "string" && newFirstName.length > 0){
            this._firstName = newFirstName;
        }
        else{
            console.error("It must be a non-empty string");
        }
    }

    set lastName(newLastName){
        if (typeof newLastName === "string" && newLastName.length > 0){
            this._lastName = newLastName;
        }
        else{
            console.error("It must be a non-empty string");
        }
    }

    set age(newAge){
        if (typeof newAge === "number" && newAge > 0){
            this._age = newAge;
        }
        else{
            console.error("It must be a non-negative number");
        }
    }

    get firstName(){
        return this._firstName;
    }

    get lastName(){
        return this._lastName;
    }

    get age(){
        return this._age;
    }

    //newProperty using getter
    get fullName(){
        return this._firstName + " " + this._lastName;
    }
}

// const person1 = new Person (420, 69, "pizza");
// console.log(`The person is ${person1.firstName} ${person1.lastName}
//             and he/she is ${person1.age} years old`);

const person2 = new Person ("Robin", "Hood", 24);
console.log(`The person is ${person2.firstName} ${person2.lastName} 
            and he/she is ${person2.age} years old`);
console.log(person2.fullName);