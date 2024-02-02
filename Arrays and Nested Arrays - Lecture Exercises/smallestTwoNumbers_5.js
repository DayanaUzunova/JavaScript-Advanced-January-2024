function smallestNumbers(array){
    let sorted = array.sort((a, b) => a - b);
    let smallest = sorted.slice(0, 2);
    console.log(smallest.join(' ').toString());
}
smallestNumbers([3, 0, 10, 4, 7, 3])
smallestNumbers([30, 15, 50, 5])