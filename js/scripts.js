$(document).ready(function(){
    $("#order-button").click(function(event){
        let pizzaSize = $("#size option:selected").val();
        let pizzaCrust = $("#crusts option:selected").val();
        let pizzaTopping = $("#toppings option:selected").val();
    });
})