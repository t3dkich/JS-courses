function solve(carObj) {
    return {
        model: carObj.model,
        engine: (() => {
            let power = carObj.power
            if (power <= 105) {
                return returnObjFunc(90, 1800)
            } else if (+power + 15 > 105 && power <= 140) {
                return returnObjFunc(120, 2400)
            } else {
                return returnObjFunc(200, 3500)
            }

            function returnObjFunc(power, volume) {
                return {
                    power: power,
                    volume: volume
                }
            }
        })(),
        carriage: {
            type: carObj.carriage,
            color: carObj.color
        },
        wheels: (() => {
            let size = Math.floor(carObj.wheelsize % 2) === 1 ? Math.floor(carObj.wheelsize) :
                Math.floor(carObj.wheelsize) - 1
            return [size,size,size,size]
        })()
    }
}

console.log(solve({
    model: 'Opel Vectra',
    power: 90,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 14
}));