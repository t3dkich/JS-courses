function solve(arr) {
    let alphabet = []
    let map = new Map()
    for (let value of arr) {
        let [item, price] = value.split(' : ')
        map.set(item, price)
    }
    let sorted = Array.from(map.keys()).sort()
    for (let [k,v] of map) {
        alphabet.push(k[0])
    }
    alphabet = Array.from(new Set(alphabet)).sort()
     for (let symbol of alphabet) {
         console.log(symbol)
         for (let value of sorted) {
             for (let [k,v] of map) {
                 if (k === value && value[0] === symbol) {
                     console.log(` ${value}: ${v}`)
                 }

             }
         }
    }
}

solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
)