function sumRange(array, start, end){
    if(!Array.isArray(array)){
        return NaN;
    }
    if(start < 0){
        start = 0;
    }
    if (end >= array.length){
        end = array.length - 1;
    }

    let sum = 0;
    for(let i = start; i <= end; i++){
        sum += Number(array[i]);
    }
    return sum;
}