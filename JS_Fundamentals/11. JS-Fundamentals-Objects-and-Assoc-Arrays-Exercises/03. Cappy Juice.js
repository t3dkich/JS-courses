function solve(arr) {
    let map = new Map()
    let output = new Map()
    for (let value of arr) {
        let [drink, quantity] = value.split(' => ')
        if (!map.has(drink)) {
            map.set(drink, +quantity)
        } else {
            map.set(drink, map.get(drink) + +quantity)
        }
        if (map.get(drink) / 1000 >= 1) {
            if (!output.has(drink)) {
                output.set(drink, 0)
            }
        }
    }
    for (let [km,vm] of map) {
        for (let [ko, vo] of output) {
            if (km === ko) output.set(ko, vm)
        }
    }


    for (let [k,v] of output) {
        console.log(`${k} => ${Math.floor(v / 1000)}`)
    }

}
solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'])