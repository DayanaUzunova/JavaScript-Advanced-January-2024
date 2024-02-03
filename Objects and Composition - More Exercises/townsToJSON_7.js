function townsToJSON(array = []) {
    class Town {
        constructor(name, latitude, longitude) {
            this.name = name;
            this.latitude = latitude;
            this.longitude = longitude;
        }
    }
 
    let result = [];
 
    for (let i = 1; i < array.length; i++) {
        let arr = array[i].split("|");
        let name = arr[1].trim();
        let latitude = (+arr[2].trim()).toFixed(2);
        let longitude = (+arr[3].trim()).toFixed(2);
      
        let town = new Town(name, latitude, longitude);
 
        let townForJSON = {};
 
        townForJSON["Town"] = town.name;
        townForJSON["Latitude"] = town.latitude;
        townForJSON["Longitude"] = town.longitude;
 
        let objectToJSON = JSON.stringify(townForJSON, function (key, value) {
            if (key == "Latitude") {
                return Number(value);
            } else if (key == "Longitude") {
                return Number(value);
            } else {
                return value;
            }
        });
 
        result.push(objectToJSON);      
    }
 
    console.log("[" + result.join(",") + "]");
}
console.log(townsToJSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
));