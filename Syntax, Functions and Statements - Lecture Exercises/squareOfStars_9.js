function squareOfStars(num){
    let star = "* ".repeat(num).split('');
    for (let rows = 1; rows <= num; rows++){
        console.log(star.join(''));
    }
    
    //// for (let i = 1; i <= num; i++){
    //     console.log('* '.repeat(num));
    // }
}
squareOfStars(4
    )