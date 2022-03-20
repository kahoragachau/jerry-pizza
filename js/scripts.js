$(document).ready(function(){
    $("#order-button").click(function(event){
        let pizzaSize = $("#size option:selected").val();
        let pizzaCrust = $("#crusts option:selected").val();
        let pizzaTopping = $("#toppings option:selected").val();
        if (pizzaSize === small.size){
            console.log(small.price);
        }
        if (pizzaTopping === pepporoni.topping){
            console.log(pepporoni.price)
        }
        if (pizzaCrust === stuffed.crust){
            console.log(stuffed.price);
        }
    });
})