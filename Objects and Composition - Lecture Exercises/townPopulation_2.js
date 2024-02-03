//1
// function townPopulation(input){
//     //create a result collection
//     const result = {};
//     //for every line of input
//     for (let line of input){
//         //parse input
//         const tokens = line.split(' <-> ');
//         const name = tokens[0];
//         const population = Number(tokens[1]);
    
//     //if city exists add population otherwise create new
//     if (result.hasOwnProperty(name)){
//         result[name] += population;
//     }
//     else {
//         result[name] = population;
//     }
// }
//     //print
//     for (let name in result){
//         console.log(name, ':', result[name]);
//     }
// }

//2
function townPopulation(input){
    //create a result collection
    const result = {};
    //for every line of input
    for (let line of input){
        //parse input
        //destruction 
        const [name, population] = line.split(' <-> ');
    
    //if city exists add population otherwise create new
    if (result.hasOwnProperty(name)){
        result[name] += Number(population);
    }
    else {
        result[name] = Number(population);
    }
}
    //print
    for (let name in result){
        console.log(name, ':', result[name]);
    }
}