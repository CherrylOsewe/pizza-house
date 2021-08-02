//business logic



//user interface
$(document).ready(function () {
  $(".clickable-delivery").click(function () {
    $(".address-showing").toggle();
  });
  $("form").submit(function (event) {
    event.preventDefault();

    var pizzaSize = document.querySelector('input[name=pizzaSize]:checked');
    var pizzaCrust = document.querySelector('input[name=pizzaCrust]:checked');
    var toppings = document.querySelector('input[name=toppings]:checked');
    var pizzaDel = document.querySelector('input[name=pizzaDel]:checked');
    let address = document.getElementById("address-input").value;
    var pizzaNumber = document.getElementById("pizzaNumber").value;

    
    if (delivery.checked == true ) {
      alert("Your pizza will be delivered to " + address)
    }
    else {
      console.log("no delivery")
    }

    var pizzaSizeCalc = parseInt(pizzaSize.value);
    console.log(pizzaSizeCalc);
    var pizzaCrustCalc = parseInt(pizzaCrust.value);
    console.log(pizzaCrustCalc);
    var toppingsCalc = parseInt(toppings.value);
    console.log(toppingsCalc);
    var pizzaDelCalc = parseInt(pizzaDel.value);
    console.log(pizzaDelCalc);
    var pizzaNumberCalc = parseInt(pizzaNumber);
    console.log(pizzaNumberCalc);

    let totalAmount = ((pizzaSizeCalc + pizzaCrustCalc + toppingsCalc + pizzaDelCalc) * pizzaNumberCalc);
    console.log(totalAmount);

    $("button").click(function () {
      $("form").toggle();
      $(".output").toggle();
    });

    document.getElementById("output1").innerHTML = "Your order of " + pizzaSize.id + " pizza, " + pizzaCrust.id + " crust, "
      + " with " + toppings.id + " will be ready in 15 minutes. Thank you for buying from us"
    document.getElementById("output2").innerHTML = "Your total is ksh. " + totalAmount

  });
});