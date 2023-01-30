function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
    
var p1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
var p3 = pizzaOven("thin", "marinara", ["mozzarella"], ["mushrooms", "olives"]);
var p4 = pizzaOven("thin", "traditional", ["mozzarella"], ["olives", "onions"]);

function pizzaRandom() {
    var pizza=Math.floor(Math.random*pizzaOven.length);
    return pizzaOven[pizza];
}

