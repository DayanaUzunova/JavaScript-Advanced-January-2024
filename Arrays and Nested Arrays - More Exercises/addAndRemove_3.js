//1
// function addOrRemove(commands){
//     let n = 1;
//     let result = [];

//     for (let i = 0; i < commands.length; i++){
//         switch(commands[i]){
//             case "add":
//                 result.push(n);
//                 n++;
//                 break;
//             case "remove":
//                 result.pop();
//                 n++;
//                 break;
//         }
//     }
//     return result.length ? result.join("\n") : "Empty";
// }

//2
 function addOrRemove(commands){
    let n = 1;
    let result = [];

    commands.forEach(x => {
        x === "add" ? result.push(n) : result.pop();
        return n++;
    });
    return result.length ? result.join("\n") : "Empty";
 }