// Business Logic
function PizzaSize(size, price){
    this.size = size;
    this.price = price;
}

function PizzaCrust(crust, price){
    this.crust = crust;
    this.price = price;
}

function PizzaTopping(topping, price){
    this.topping = topping;
    this.price = price;
}

// Add objects to PizzaSize Constructor
let small = new PizzaSize("Small", 400);
let medium = new PizzaSize("Medium", 800);
let large = new PizzaSize("Large", 1200);

let orderBtn = document.getElementById("order-button");
orderBtn.addEventListener('click', displayOrderSummary);

function displayOrderSummary(){
    alert("Working!!")
}