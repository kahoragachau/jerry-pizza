$(document).ready(function(){
    $("#order-button").click(function(event){
        let pizzaSize = $("#size option:selected");
        console.log(pizzaSize)
    });
})