// Classes

class Product {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product : ${this.name}`);
        console.log(`Price : ${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax) ;
    }
}

const salesTax = 0.05;

const product1 = new Product("blouse", 19.99);
const product2 = new Product("pants", 22.50);
const product3 = new Product("underwear", 100.00);

product1.displayProduct();
product1.calculateTotal();
let total = product1.calculateTotal(salesTax);
console.log(`Total : $${total.toFixed(2)}`);

product2.displayProduct();
product2.calculateTotal();
total = product2.calculateTotal(salesTax);
console.log(`Total : $${total}`);

product3.displayProduct();
product3.calculateTotal();
total = product3.calculateTotal(salesTax);
console.log(`Total : $${total}`);

