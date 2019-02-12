let manager = (() => {
    let elements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }
    return function (string) {
        let prepOutput

        function errorPrint(str) {
            prepOutput = `Error: not enough ${str} in stock`
        }

        function prepare(q, protein, carb, fat, flavour) {
            if (protein > 0) {
                if (protein * q > elements.protein) return errorPrint('protein')
                protein *= q
            }
            if (carb > 0) {
                if (carb * q > elements.carbohydrate) return errorPrint('carbohydrate')
                carb *= q
            }
            if (fat > 0) {
                if (fat * q > elements.fat) return errorPrint('fat')
                fat *= q
            }
            if (flavour > 0) {
                if (flavour * q > elements.flavour) return errorPrint('flavour')
                flavour *= q
            }
            elements.protein -= protein
            elements.carbohydrate -= carb
            elements.fat -= fat
            elements.flavour -= flavour
            prepOutput = 'Success'
        }

        let recipes = {
            apple: (q) => prepare(q, 0, 1, 0, 2),
            coke: (q) => prepare(q, 0, 10, 0, 20),
            burger: (q) => prepare(q, 0, 5, 7, 3),
            omelet: (q) => prepare(q, 5, 0, 1, 1),
            cheverme: (q) => prepare(q, 10, 10, 10, 10)
        }
        let cmdArr = string.split(' ')
        if (cmdArr.length === 1) {
            return `protein=${elements.protein} carbohydrate=${elements.carbohydrate} ` +
                `fat=${elements.fat} flavour=${elements.flavour}`
        } else {
            let cmd = cmdArr[0]
            let quantity = cmdArr[2]
            switch (cmd) {
                case 'restock':
                    let element = cmdArr[1]
                    elements[element] += +quantity
                    return 'Success'
                case 'prepare':
                    let recipe = cmdArr[1]
                    recipes[recipe](quantity)
                    return prepOutput
            }
        }
    }
})()
console.log(('restock carbohydrate 10'));
console.log(manager('restock flavour 10'));
console.log(manager('prepare apple 1'));
console.log(manager('restock fat 10'));
console.log(manager('prepare burger 1'));
console.log(manager('report'));




