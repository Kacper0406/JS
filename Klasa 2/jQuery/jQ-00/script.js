coins = 0;
click = 1;
price = 10;

function update(){
    $("h1").html("Coins: " + coins)
    $("h3").html("Per click: " + click)
    $("#upgrade").html(`Coins per click ${click + 1.5} </br> price: ${price} coins`)
}

$(document).ready(function(){
   update()
    $("h2").click(function (){
        $("#shop").toggle(500)
    })
    $("#clicker").click(function(){
        coins += click
        update()
    });
    $("#upgrade").click(function (){
        if(coins >= price){
            coins -= price
            click = click + 1.5
            price += Math.floor(price/2)
            update()
        } else {
            console.log("No coins")
        }
    })
});