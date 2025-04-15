//static Keyword

//Example 1
class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius * 2;
    }

    static getCircumference(radius){
        return 2 * this.PI * radius;
    }

    static getArea(radius){
        return this.PI * radius * radius;
    }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10));
console.log(MathUtil.getArea(10));

//Example 2

class User{

    //static variable - belongs to class - not objects
    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++;
    }

    //static method - belongs to class - not objects
    static getUserCount(){
        console.log(`There are ${User.userCount} users online.`)
    }
    sayHello(){
        console.log(`Hello, my username is ${this.username}.`);
    }
}

//userCount is counting the total ignoring individual resets.
const user1 = new User("RobinHood");
console.log(User.userCount, user1.username);
user1.sayHello();
const user2 = new User("Marion");
console.log(User.userCount, user2.username);
user2.sayHello();
const user3 = new User("March");
console.log(User.userCount, user3.username);
user3.sayHello();
//static method needs no object to call it, just the class name.
User.getUserCount();


