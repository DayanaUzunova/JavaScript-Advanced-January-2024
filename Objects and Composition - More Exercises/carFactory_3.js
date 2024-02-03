function carFactory(order){
    let result = {
        model: order.model,
        engine: undefined,
        carriage: undefined,
        wheels: undefined
    };

    if(order.power <= 90){
        result.engine = { power: 90, volume: 1800 };
    }
    else if(order.power <= 120){
        result.engine = { power: 120, volume: 2400 };
    }
    else {
        result.engine = { power: 200, volume: 3500 };
    }

    if(order.carriage === "hatchback"){
        result.carriage = { type: 'hatchback', color: order.color };
    }
    else {
        result.carriage = { type: 'coupe', color: order.color };
    }

    let wheelSize = order.wheelsize % 2 === 0 ? order.wheelsize - 1 : order.wheelsize;

    result.wheels = new Array(4).fill(wheelSize);
    return result;
}
console.log(carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
));