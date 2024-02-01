function solve(a, b){
    let greatest = a % b;

    while (greatest !== 0){
        a = b;
        b = greatest;

        greatest = a % b;
    }
    console.log(b);
}