function biggerHalf(array){
    array.sort((a, b) => a - b);
    const mid = Math.floor(array.length / 2);

    return array.slice(mid);
}