function days(month, year){
    return new Date(year, month, 0).getDate();
}
console.log(days(2, 2021)); 