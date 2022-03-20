// Business Logic
function PizzaSize(size, price){
    this.size = size;
    this.price = price
}


let orderBtn = document.getElementById("order-button");
orderBtn.addEventListener('click', displayOrderSummary);

function displayOrderSummary(){
    alert("Working!!")
}