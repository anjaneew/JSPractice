// Project 18 Shopping Cart

const cartContainer = document.getElementById("cart-container");
const productsContainer = document.getElementById("products-container");
const dessertCards = document.getElementById("dessert-card-container");
const cartBtn = document.getElementById("cart-btn");
const clearCartBtn = document.getElementById("clear-cart-btn");
const totalNumberOfItems = document.getElementById("total-items");
const cartSubTotal = document.getElementById("subtotal");
const cartTaxes = document.getElementById("taxes");
const cartTotal = document.getElementById("total");
const showHideCartSpan = document.getElementById("show-hide-cart");
let isCartShowing = false;

const products = [
    {id: 1, name: "Vanilla Cupcakes (6 Pack)", price: 12.99, category: "Cupcake"},
    {id: 2, name: "French Macaron", price: 3.99, category: "Macaron"},
    {id: 3, name: "Pumpkin Cupcake", price: 3.99, category: "Cupcake"},
    {id: 4, name: "Chocolate Cupcake", price: 5.99, category: "Cupcake"},
    {id: 5, name: "Chocolate Pretzels (4 Pack)", price: 10.99, category: "Pretzel"},
    {id: 6, name: "Strawberry Ice Cream", price: 2.99, category: "Ice Cream"},
    {id: 7, name: "Chocolate Macarons (4 Pack)", price: 9.99, category: "Macaron"},
    {id: 8, name: "Strawberry Pretzel", price: 4.99, category: "Pretzel"},
    {id: 9, name: "Butter Pecan Ice Cream", price: 2.99, category: "Ice Cream"},
    {id: 10, name: "Rocky Road Ice Cream", price: 2.99, category: "Ice Cream"},
    {id: 11, name: "Vanilla Macarons (5 Pack)", price: 11.99, category: "Macaron"},
    {id: 12, name: "Lemon Cupcakes (4 Pack)", price: 12.99, category: "Cupcake"},
    // {id: , name: "", price: , category: },
];



products.forEach(
    (
        {name, id, price, category} 
    )=>{
        dessertCards.innerHTML += `
            <div class="dessert-card">
                <h2>${name}</h2>
                <p class="dessert-price">$${price}</p>
                <p class="product-category">Category: ${category}</p>
                <button id="${id}" class="btn add-to-cart-btn">Add to cart</button>
            </div>
        `;
});



class ShoppingCart {
   constructor() {
     this.items = [];
     this.total = 0;
     this.taxRate = 8.25;
   }

   addItem(id, products){
        const product = products.find((item) => item.id === id);

        
        const {name, price} = product;
        this.items.push(product);
        this.items.forEach((dessert)=> {});
        const totalCountPerProduct = {};
        this.items.forEach((dessert) => {
        totalCountPerProduct[dessert.id] = (totalCountPerProduct[dessert.id] || 0) + 1;
        });
        const currentProductCount = totalCountPerProduct[product.id];
        const currentProductCountSpan = document.getElementById(`product-count-for-id${id}`);
        
        currentProductCount > 1 
            ? currentProductCountSpan.textContent = `${currentProductCount}x`
            : productsContainer.innerHTML += `
            <div class="product" id="dessert${id}"> 
            <p>
            <span class="product-count" id="product-count-for-id${id}">${name}</span>
            </p> 
            <p>${price}</p>
            </div>`;
   }

   getCounts(){
     return this.items.length;
   }

   calculateTotal(){
    const subTotal = this.items.reduce((total, item) => total + item.price, 0);
    const tax = this.calculateTaxes(subTotal);
    this.total = subTotal + tax;
    cartSubTotal.textContent = `$${subTotal.toFixed(2)}`;
    cartTaxes.textContent = `$${tax.toFixed(2)}`;
    cartTotal.textContent = `$${this.total.toFixed(2)}`;
    return this.total;
    };
    
    calculateTaxes(amount){
       return parseFloat(((this.taxRate / 100) * amount).toFixed(2));
    }

    clearCart(){
        if(!this.items.length){
            alert("Your shopping cart is already empty");
            return;
        }

        const isCartCleared = confirm("Are you sure you want to clear all items from your shopping cart?");

        if(isCartCleared){
            this.items = [];
            this.total = 0;
            productsContainer.innerHTML = "";
            totalNumberOfItems.textContent = 0;
            cartSubTotal.textContent = 0;
            cartTaxes.textContent = 0;
            cartTotal.textContent = 0;
        }


    }

};

const cart = new ShoppingCart();
const addToCartBtns = document.getElementsByClassName("add-to-cart-btn");

/**You need to iterate through the buttons in your addToCartBtns variable. 
 * However, .getElementsByClassName() returns a Collection, which does not have a 
 * forEach method.
 * Use the spread operator on the addToCartBtns variable to convert it into an array. 
 * Then, use the forEach method to iterate through the array. Do not pass a 
 * callback function yet. */

[...addToCartBtns].forEach((btn)=> {
    btn.addEventListener("click",(event)=>{
        cart.addItem(Number(event.target.id), products);
        totalNumberOfItems.textContent = cart.getCounts();
        cart.calculateTotal();
    })
});

cartBtn.addEventListener("click",()=>{
    isCartShowing = !isCartShowing;
    showHideCartSpan.textContent = isCartShowing ? 
        "Hide" : "Show";
    cartContainer.style.display = isCartShowing ? "block" : "none";
});


clearCartBtn.addEventListener("click", cart.clearCart.bind(cart));

/**bind 
 * 
 * Your final step is to make your clear button functional. Add a click event listener 
 * to the clearCartBtn. For the callback, you can pass in cart.clearCart directly.
 * However, doing so will not work, because the context of this will be the clearCartBtn
 *  element. You need to bind the clearCart method to the cart object.
 * You can do this by passing cart.clearCart.bind(cart) as the callback.
*/

/***confirm() 
 * Browsers have a built-in confirm() function which displays a confirmation prompt to the
 *  user. confirm() accepts a string, which is the message displayed to the user. It returns
 *  true if the user confirms, and false if the user cancelss. 
 * 
 * Declare a variable isCartCleared and assign it the value of calling confirm() with the
 *  string "Are you sure you want to clear all items from your shopping cart?".
 * 
 * Ex: 
 *    const isCartCleared = confirm("Are you sure?");
 * 
 * 
*/

/**Destructuring
        extract values and assign to variables
            [] - array
            {} - object
 * 
 * 
 * destructuring to extract multiple values from an array or object in a single statement
 * destructure the name, id, price, and category properties from the object passed in
 * ex: ({name, id, price, category}) => {}
*/

/***class 
 * In JavaScript, a class is like a blueprint for creating objects. It allows you to
 *  define a set of properties and methods, and instantiate (or create) new objects 
 * with those properties and methods.
 * The class keyword is used to declare a class. Here is an example of declaring a Computer class:

        Example Code
            class Computer {};

constructor

Classes have a special constructor method, which is called when a new instance of the class is created. The constructor method is a great place to initialize properties of the class. Here is an example of a class with a constructor method:

        Example Code
            class Computer {
                constructor() {
                }
            }

this keyword

The this keyword in JavaScript is used to refer to the current object. Depending on where this is used, what it references changes. In the case of a class, it refers to the instance of the object being constructed. You can use the this keyword to set the properties of the object being instantiated. Here is an example:

        Example Code
            class Computer {
                constructor() {
                    this.ram = 16;
                }
            }


    method
    
    Creating a method might look like this:

    Example Code
        class Computer {
        constructor() {
            this.ram = 16;
        }

        addRam(amount) {
            this.ram += amount;
        }
        }
    
    default value to avoid undefined 

    When you try to access an object property that doesn’t exist, JavaScript returns undefined. If you then attempt to perform arithmetic operations on undefined, it can lead to unexpected results, such as NaN.

    To prevent this, you can use the || (logical OR) operator to provide a default value.

    Example Code
        let scores = {}; 
        let players = ["Alice", "Bob", "Charlie"];

        players.forEach(player => {
            scores[player] = scores[player] || 0;
        });

*/