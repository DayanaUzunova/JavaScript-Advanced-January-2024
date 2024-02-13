function arguments(...data){
    let result = {};

    for (let el of data){
        let type = typeof(el);
        console.log(`${type}: ${el}`);
        if(!result.hasOwnProperty(type)){
            result[type] = 0;
        }
        result[type] += 1;
    }
    let sortedResult = Object.entries(result).sort((a, b) => b[1] - a[1]);
    for(let [key, value] of sortedResult){
        console.log(`${key} = ${value}`);
    }
}