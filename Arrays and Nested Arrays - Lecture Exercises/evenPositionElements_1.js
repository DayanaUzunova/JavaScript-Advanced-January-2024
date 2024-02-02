function evenPositionElements(array) {
    let result = '';
    //1 for(let i = 0; i < array.length; i++){
    //     if (i % 2 == 0){
    //         console.log(array[i]);
    //     }
     // }
    //2
     for (let i = 0; i < array.length; i += 2){
        result += array[i];
        result += ' ';
     }
     console.log(result);
}
