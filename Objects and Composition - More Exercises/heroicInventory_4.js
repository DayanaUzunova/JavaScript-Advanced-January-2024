function heroicInventory(input){
    let result = [];

    for (const iterator of input){
        let [name, level, items] = iterator.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];

        result.push({name, level, items});
    }
    console.log(JSON.stringify(result));
}