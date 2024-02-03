function catalogue(arr) {
    let obj = {};
 
    for (let line of arr) {
        let [productName, price] = line.split(' : ');
        obj[productName] = price;
    }
 
    let sortedItem = Object.entries(obj)
        .sort((a, b) => a[0].localeCompare(b[0]));
 
    let result = '';
    let currentName = '';
    for (let line of sortedItem) {
        let name = line[0];
        let price = line[1];
        let firstChar = name.charAt(0);
 
        if (firstChar !== currentName[0]) {
            result += `${firstChar}\n`;
        }
        currentName = name;
        result += `  ${name}: ${price}\n`;
    }
    return result;
}