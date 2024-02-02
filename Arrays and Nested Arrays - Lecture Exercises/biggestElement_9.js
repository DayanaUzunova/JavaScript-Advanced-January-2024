function biggestElement(array){
    let max = Number.NEGATIVE_INFINITY;

    for (const element of array){
        for(const number of element){
            if (number > max){
                max = number;
            }
        }
    }
    console.log(max);
}