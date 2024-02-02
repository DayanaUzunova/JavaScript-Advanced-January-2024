//1
// function extract(data){
//     let result = [];

//     let biggestOne = data.shift();

//     result.push(biggestOne);
//     data.forEach(x => {
//         if(biggestOne <= x){
//             biggestOne = x;
//             result.push(biggestOne);
//         }
//     })
//     return result;
// }

//2
// function extract (data){
//     let biggestOne = data[0];

//     return data.filter(x => {
//         if(x >= biggestOne){
//             biggestOne = x;
//             return true;
//         }
//         return false;
//     })
// }

//3 REDUCE
function extract(data){
    let biggestOne = Number.MIN_SAFE_INTEGER;

    return data.reduce((acc, el) => {
        if(el >= biggestOne){
            biggestOne = el;
            acc.push(biggestOne);
        }
        return acc
    }, [])
}