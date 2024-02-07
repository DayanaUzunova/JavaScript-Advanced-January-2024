function subtract() {
    let numberOne = document.getElementById("firstNumber").value;
    let numberTwo = document.getElementById("secondNumber").value;

    let result = Number(numberOne) - Number(numberTwo);
    document.getElementById("result").textContent = result;
}