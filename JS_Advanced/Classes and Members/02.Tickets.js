function solve(arr, str) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination
            this.price = price
            this.status = status
        }
    }

    let ticketArr = []
    arr.forEach(e => {
        let [destination, price, status] = e.split('|')
        let ticket = new Ticket(destination, +price, status)
        ticketArr.push(ticket)
    })
    
    return ticketArr.sort((a,b) => a[str] > b[str])
    
}

console.log(solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'));