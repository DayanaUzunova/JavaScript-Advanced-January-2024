function solve(areaFn, volumeFn, input){
    const data = JSON.parse(input);
    let result = [];

    for (let figure of data){
        result.push({
            area: areaFn.call(figure),
            volume: volumeFn.call(figure)
        });
    }
    return result;
}