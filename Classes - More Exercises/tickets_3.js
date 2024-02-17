function ticketsStatic (array, sortCriteria){
    let result = [];
    class Ticket{
        constructor(destination, price, status){
            this.destination = destination,
            this.price = Number(price),
            this.status = status
        }
    }
    for (let el of array){
        let [destination, price, status] = el.split("|");
        let myTicket = new Ticket(destination, price, status);
        result.push(myTicket);
    }
    return sortTicket(result, sortCriteria);

    function sortTicket(ticketArr, criteria){
        return ticketArr.sort((a, b) => {
            return criteria === "price" ?
            a[criteria] - b[criteria] :
            a[criteria].localeCompare(b[criteria])}
            );
    }
}