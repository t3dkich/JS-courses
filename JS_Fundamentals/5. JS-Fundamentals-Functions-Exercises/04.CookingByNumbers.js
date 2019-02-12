function solve(arr) {
    let num = Number(arr[0])
    let output = ''
    for (let i = 1; i < arr.length; i++) {
        let operation = arr[i]
        num = getOperation(operation, num)
        output += `${num}\n`
        function getOperation(operation, number) {
            switch (operation) {
                case 'chop':
                    return number /= 2
                case 'dice':
                    return number = Math.sqrt(number)
                case 'spice':
                    return number += 1
                case 'bake':
                    return number *= 3
                case 'fillet':
                    return number -= (number * 0.2)
            }
        }
    }
    return output
}

console.log(solve([9, 'dice', 'spice', 'chop', 'bake', 'fillet']));