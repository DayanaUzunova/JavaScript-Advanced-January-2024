function solve(array){
    let numbersArray = array.map(Number);
 
    let sum = numbersArray.reduce((a, b) => a + b);
    let inverseValuesSum = numbersArray.reduce((a, b) => a + 1 / b, 0);    
    let stringConcat = numbersArray.join('');
 
    console.log(sum);
    console.log(inverseValuesSum);
    console.log(stringConcat);
}