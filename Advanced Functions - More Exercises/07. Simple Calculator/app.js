function calculator() {
    let num1Ref = document.getElementById('num1');
    let num2Ref = document.getElementById('num2');
    let res = document.getElementById('result');
    let objCalc = {
      init(selector1, selector2, result) {
        selector1 = Number(num1Ref.value);
        selector2 = Number(num2Ref.value);
        result = Number(result);
      },
      add() {
        res.value = Number(num1Ref.value) + Number(num2Ref.value);
      },
      subtract() {
        res.value = Number(num1Ref.value) - Number(num2Ref.value);
      },
    };
    return objCalc;
  }




