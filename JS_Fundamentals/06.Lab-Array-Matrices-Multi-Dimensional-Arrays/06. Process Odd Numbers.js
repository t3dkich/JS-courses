function solve(arr) {
    return arr.filter((e, i) => i % 2 !== 0).map(n => n * 2).reverse().join(' ')
}

console.log(solve([3, 0, 10, 4, 7, 3]));