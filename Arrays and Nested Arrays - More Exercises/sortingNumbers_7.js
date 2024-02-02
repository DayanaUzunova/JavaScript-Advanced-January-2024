function sortingNums(data){
    let result = [];
    data.sort((a, b) => a - b);

    let length = data.length;

    for(let i = 0; i < Math.floor(length/2); i++){
        result.push(data[i]);
        result.push(data[length - (i + 1)]);
        if (length % 2 !== 0 && i + 1 === Math.floor(length / 2)){
            result.push(data[length - (i + 2)]);
        }
    }
    return result;
}