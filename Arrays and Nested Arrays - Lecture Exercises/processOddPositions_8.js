function proccessing(array){
    // const filtered = array.filter((c, i) => i % 2);
    // const doubled = filtered.map(e => e * 2);
    // const reversed = doubled.reverse();

    // const result = reversed.join(' ');

    // console.log(result);
    return array.filter((c, i) => i % 2).map(e => e * 2).reverse();
}