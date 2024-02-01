// function solve(number){
//     let isSame = true;
//     let sum = 0;
    
//     let numAsStr = number.toString();
//     sum += Number(numAsStr[0]);

//     for (let i = 1; i < numAsStr.length; i++){
//         if (numAsStr[i] !== numAsStr[i - 1]){
//             isSame = false;
//         }
//         sum += Number(numAsStr[i]);
//     }
//     console.log(isSame);
//     console.log(sum);
// }

function solve(num){
    let isSame = true;
    let sum = 0;

    num.toString()
        .split("")
        .map((x, i, self) => {
            if (x !== self[0]){
                isSame = false;
            }
            return sum += Number(x);
        })

        console.log(isSame);
        console.log(sum);
}