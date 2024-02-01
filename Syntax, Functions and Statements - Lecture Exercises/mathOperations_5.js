function mathOperations(num1, num2, operation){
    let result = 0;
    let number1 = Number(num1);
    let number2 = Number(num2);

    switch(operation){
        case "+":
            result = number1 + number2;
            break;
        case "-":
            result = number1 - number2;
            break;
        case "*":
            result = number1 * number2;
            break;
        case "/":
            result = number1 / number2;
            break;
        case "%":
            result = number1 % number2;
            break;
        case "**":
            result = number1 ** number2;
            break;
    }
    console.log(result);
}
mathOperations(5, 6, '+')