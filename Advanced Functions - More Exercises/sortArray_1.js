function sort(array, operation){
    return operation === "asc" ? array.sort((a, b) => a - b) :
    array.sort((a, b) => b - a);
}