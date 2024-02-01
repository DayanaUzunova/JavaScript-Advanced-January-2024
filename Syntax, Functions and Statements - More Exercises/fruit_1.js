function fruit(type, weight, price){
    let weightInKg = weight / 1000;
    let money = weightInKg * price;

    console.log(`I need $${money.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${type}.`);
}
fruit('orange', 2500, 1.80)