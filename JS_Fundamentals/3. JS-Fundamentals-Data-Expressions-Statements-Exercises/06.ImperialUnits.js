function solve(inches) {
    return `${Math.floor(inches / 12)}'-${inches % 12}"`
}

console.log(solve(55));