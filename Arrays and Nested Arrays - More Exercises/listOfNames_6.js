function listOfNames(array){
    array.sort((a, b) => a.localeCompare(b))
    .forEach((value, i) => {
        console.log(`${i + 1}.${value}`);
    })
}