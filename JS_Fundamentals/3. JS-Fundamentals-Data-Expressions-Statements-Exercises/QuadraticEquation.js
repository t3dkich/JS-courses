function solve(a, b , c) {

    let d = (b ** 2) - 4 * a * c
    if (d < 0) return 'No'
    if (d === 0) return -b / (2 * a)
    let x1 = ((- (b) + Math.sqrt(d)) / (2 * a))
    let x2 = ((- (b) - Math.sqrt(d)) / (2 * a))
    let smallerX = x1 >= x2 ? x2 : x1
    let biggerX = x1 < x2 ? x2 : x1
    return `${smallerX}\n${biggerX}`
}

console.log(solve(6, 11, -35));