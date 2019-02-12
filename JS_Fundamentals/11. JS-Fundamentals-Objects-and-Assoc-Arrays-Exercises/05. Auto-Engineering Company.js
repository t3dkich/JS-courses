function solve(arr) {
    let mainMap = new Map()
    for (let val of arr) {
        let [car, model, price] = val.split(' | ')
        if (!mainMap.get(car)) {
            mainMap.set(car, new Map())
            mainMap.get(car).set(model, +price)
        } else {
            if (!mainMap.get(car).get(model)) {
                mainMap.get(car).set(model, +price)
            } else {
                let tempPrice = mainMap.get(car).get(model)
                mainMap.get(car).set(model, tempPrice + +price)
            }
        }
    }
    for (let [k,v] of mainMap) {
        console.log(k)
        for (let [key, value] of v) {
            console.log(`###${key} -> ${value}`)
        }
    }
}

solve(['Mercedes-Benz | 50PS | 123',
    'Mini | Clubman | 20000',
    'Mini | Convertible | 1000',
    'Mercedes-Benz | 60PS | 3000',
    'Hyunday | Elantra GT | 20000',
    'Mini | Countryman | 100',
    'Mercedes-Benz | W210 | 100',
    'Mini | Clubman | 1000',
    'Mercedes-Benz | W163 | 200'])