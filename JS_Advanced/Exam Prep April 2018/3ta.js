class LineManager {
    constructor(stops) {
        this.stops = stops
        this.currentStop = 0
        this.durationMinutes = 0
    }

    get atDepot() {
        return this.currentStop === this.stops.length - 1;
    }

    get nextStopName(){
        if (this.currentStop === this.stops.length - 1) {
            return 'At depot.'
        }
        return this.stops[this.currentStop+1].name
    }

    get currentDelay(){
        let expectedDelay = 0
        for (let i = 0; i < this.currentStop; i++) {
            expectedDelay += this.stops[i].timeToNext
        }
        return this.durationMinutes - expectedDelay
    }

    arriveAtStop(minutes){
        if (+minutes < 0 || typeof minutes !== 'number') {
            throw new Error('Invalid minutes')
        }
        if (this.currentStop === this.stops.length - 1) {
            throw new Error('We are at the last stop')
        }
        this.currentStop++
        this.durationMinutes += +minutes
        return !this.atDepot
    }

    toString(){
        let final = this.currentStop === this.stops.length - 1 ?
            '- Course completed' :
            `- Next stop: ${this.stops[this.currentStop+1].name}`
        return `Line summary\n` +
        `${final}\n` +
        `- Stops covered: ${this.currentStop}\n` +
        `- Time on course: ${this.durationMinutes} minutes\n` +
        `- Delay: ${this.currentDelay} minutes`
    }

    get stops(){
        return this._stops
    }

    set stops(stops) {
        if (stops === undefined || typeof stops !== 'object' ) {
            throw new Error('invalid array')
        }
        if (!Array.isArray(stops)) {
            throw new Error('no array')
        }
        if (stops.length === 0) throw new Error('empty array')
        for (let stop of stops) {
            for (let key in stop) {
                if (key === 'name' || key === 'timeToNext') {
                    continue
                }
                throw new Error('Unotorizer key')
            }
            if (stop.name === '' || typeof stop.name !== 'string') {
                throw new Error('Incorrect stop name')
            }
            if (stop.timeToNext < 0 || typeof stop.timeToNext !== 'number') {
                throw new Error('Incorrect time format')
            }
        }
        this._stops = stops
    }
}

// Initialize a line manager with correct values
const man = new LineManager([
    {name: 'Depot', timeToNext: 4},
    {name: 'Romanian Embassy', timeToNext: 2},
    {name: 'TV Tower', timeToNext: 3},
    {name: 'Interpred', timeToNext: 4},
    {name: 'Dianabad', timeToNext: 2.5},
    {name: 'Depot', timeToNext: 0},
]);
// Travel through all the stops until the bus is at depot
while(man.atDepot === false) {
    console.log(man.toString());
    man.arriveAtStop('s');
}
console.log(man.nextStopName);
console.log(man.atDepot);
console.log(man.currentDelay);
//
//  console.log(man.toString());
//
// // Should throw an Error (minutes cannot be negative)
//man.arriveAtStop(-4);
// // Should throw an Error (last stop reached)
 //man.arriveAtStop(4);

// Should throw an Error at initialization
// const wrong = new LineManager([
//     { name: 'Stop', timeToNext: { wrong: 'Should be a number'} }
// ]);
