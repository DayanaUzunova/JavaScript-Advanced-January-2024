function print(array, n){
    let result = [];

    for (let i = 0; i < array.length; i += n){
        result.push(array[i]);
    }
    return result;
}