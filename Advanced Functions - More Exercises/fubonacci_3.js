function getFibonacci(){
    let firstNum = 0;
    let secondNum = 1;
    return function(){
        let result = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = result;
        return firstNum;
    }
}