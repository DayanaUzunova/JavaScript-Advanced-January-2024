function pie(pies, startPie, endPie){
    const start = pies.indexOf(startPie);
    const end = pies.indexOf(endPie);

    return(pies.slice(start, end + 1));
}