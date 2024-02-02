function negativePositiveNumbers(array){
    const result = [];

    for (let num of array){
    if (num < 0){
        result.unshift(num);
    }
    else {
        result.push(num);
    }
}
for (let num of result){
    console.log(num);
}
}