function roadRadar(speed,area){

    let info = '';
    let speedLimit = 0;
    let difference = 0;
    let status = '';

    if(area === 'city'){
        speedLimit = 50;
    }else if(area === 'residential'){
        speedLimit = 20;
    }else if(area === 'interstate'){
        speedLimit = 90;
    }else if(area === 'motorway'){
        speedLimit = 130;
    }

    if(speed <= speedLimit && speed > 0){
            info = `Driving ${speed} km/h in a ${speedLimit} zone`
    }else{
            difference = speed - speedLimit;
            if(difference<=20){
                status = 'speeding';
            }else if(difference>20 && difference<=40){
                status = 'excessive speeding';
            }else{
                status = 'reckless driving';
            }
            info = `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
    }
    console.log(info);
}
roadRadar(40, 'city')