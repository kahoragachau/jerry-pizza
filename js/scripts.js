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

// Add objects to PizzaCrust Constructor
let stuffed = new PizzaCrust("Stuffed", 100);
let crispy = new PizzaCrust("Crispy", 150);
let glutten = new PizzaCrust("Glutten-free", 200);

// Add objects to PizzaTopping Constructor
let pepporoni = new PizzaTopping("Pepporoni", 50);
let mushroom = new PizzaTopping("Mushroom", 100);
let bacon = new PizzaTopping("Bacon", 150);

// The User Interface using jQuery
let orderNumber = 0;

$(document).ready(function(){
    $("#order-button").click(function(event){
        // Increment Order Number by one
        orderNumber += 1;
        // Get User Inputs
        let pizzaSize = $("#size option:selected").val();
        let pizzaCrust = $("#crusts option:selected").val();
        let pizzaTopping = $("#toppings option:selected").val();

        // Declare array to store variables
        let sizes = [small, medium, large];
        let crusts = [stuffed, crispy, glutten];
        let toppings = [pepporoni, mushroom, bacon];

        // Get sumarry of Each argument
        let sizeSummary = "";
        let crustSummary = "";
        let toppingSummarry = "";

        // Get total for each argument
        let sizeTotal = 0;
        let crustTotal = 0;
        let toppingTotal = 0;
        // Loop through sizes
        for (let i = 0; i < sizes.length; i++){
            if (pizzaSize === sizes[i].size){
                sizeTotal += sizes[i].price;
                sizeSummary = sizes[i].price;
            }
        }

        // Loop through crusts
        for (let i = 0; i < crusts.length; i++){
            if(pizzaCrust === crusts[i].crust){
                crustTotal += crusts[i].price;
                crustSummary = crusts[i].price;
            }
        }

        // Loop through toppings
        for (let i = 0; i < toppings.length; i++){
            if(pizzaTopping === toppings[i].topping){
                toppingTotal += toppings[i].price;
                toppingSummarry = toppings[i].price;
            }
        }

        let total = sizeTotal + crustTotal + toppingTotal;
        console.log(total);
        $(".display-summary").show();
        $(".order-now-button").hide();
        $("#pizSize").html($("#size option:selected").text() + " - " + sizeTotal);
        $("#pizCrust").html($("#crusts option:selected").text() + " - " + crustTotal);
        $("#pizTopping").html($("#toppings option:selected").text() + " - " + toppingTotal);
        $("#total").html(total);
        // let tableRow = '<tr><th scope="row">' + orderNumber + '</th><td id="pizSize">' + $("#size option:selected").text() + '---' + sizeSummary + '</td><td id="pizTopping">' + $("#toppings option:selected").text() + '---' + toppingSummarry + '</td><td id="pizCrust">' + $("#crusts option:selected").text() + '---' + crustSummary + '</td><td id="total">' + grandTotal + '</td></tr>';
        // $(".output").append(tableRow);
    })
    $("#add-another-order-button").click(function(event){
        // alert("Working");
        orderNumber += 1;
        // Get User Inputs
        let pizzaSize = $("#size option:selected").val();
        let pizzaCrust = $("#crusts option:selected").val();
        let pizzaTopping = $("#toppings option:selected").val();

        // Declare array to store variables
        let sizes = [small, medium, large];
        let crusts = [stuffed, crispy, glutten];
        let toppings = [pepporoni, mushroom, bacon];

        // Get sumarry of Each argument
        let sizeSummary = "";
        let crustSummary = "";
        let toppingSummarry = "";

        // Get total for each argument
        let sizeTotal = 0;
        let crustTotal = 0;
        let toppingTotal = 0;
        // Loop through sizes
        for (let i = 0; i < sizes.length; i++){
            if (pizzaSize === sizes[i].size){
                sizeTotal += sizes[i].price;
                sizeSummary = sizes[i].price;
            }
        }

        // Loop through crusts
        for (let i = 0; i < crusts.length; i++){
            if(pizzaCrust === crusts[i].crust){
                crustTotal += crusts[i].price;
                crustSummary = crusts[i].price;
            }
        }

        // Loop through toppings
        for (let i = 0; i < toppings.length; i++){
            if(pizzaTopping === toppings[i].topping){
                toppingTotal += toppings[i].price;
                toppingSummarry = toppings[i].price;
            }
        }

        let total = sizeTotal + crustTotal + toppingTotal;
        console.log(total);
        $(".display-summary").show();
        $(".order-now-button").hide();
        $("#pizSize").html($("#size option:selected").text() + " - " + sizeTotal);
        $("#pizCrust").html($("#crusts option:selected").text() + " - " + crustTotal);
        $("#pizTopping").html($("#toppings option:selected").text() + " - " + toppingTotal);
        $("#total").html(total);

        let tableRow = '<tr><th scope="row">' + orderNumber + '</th><td id="pizSize">' + $("#size option:selected").text() + '---' + sizeSummary + '</td><td id="pizTopping">' + $("#toppings option:selected").text() + '---' + toppingSummarry + '</td><td id="pizCrust">' + $("#crusts option:selected").text() + '---' + crustSummary + '</td><td id="total">' + total + '</td></tr>';
        $(".output").append(tableRow);
    })

    $("#checkout").click(function(event){
        let confirmation = confirm("Do you want your order to be delivered?\nNOTE:Delivery fee of 250ksh will be added to your order");
        let pizzaSize = $("#size option:selected").val();
        let pizzaCrust = $("#crusts option:selected").val();
        let pizzaTopping = $("#toppings option:selected").val();

        // Declare array to store variables
        let sizes = [small, medium, large];
        let crusts = [stuffed, crispy, glutten];
        let toppings = [pepporoni, mushroom, bacon];

        // Get total for each argument
        let sizeTotal = 0;
        let crustTotal = 0;
        let toppingTotal = 0;
        // Loop through sizes
        for (let i = 0; i < sizes.length; i++){
            if (pizzaSize === sizes[i].size){
                sizeTotal += sizes[i].price;
            }
        }

        // Loop through crusts
        for (let i = 0; i < crusts.length; i++){
            if(pizzaCrust === crusts[i].crust){
                crustTotal += crusts[i].price;
            }
        }

        // Loop through toppings
        for (let i = 0; i < toppings.length; i++){
            if(pizzaTopping === toppings[i].topping){
                toppingTotal += toppings[i].price;
            }
        }

        let total = sizeTotal + crustTotal + toppingTotal;
        let grandTotal = total * orderNumber;
        if (confirmation){
            $("#grandTotal").html("Your Grand Total is " + (grandTotal += 250) + " Enjoy Your Meal");
        }
        else {
            ("#grandTotal").html("Your Grand Total is " + (grandTotal) + " Enjoy Your Meal");
        }
        $(".add-another-order").hide();
    })
})