function solve(arr) {
    let objA = arr[0] / 3.6 * arr[2]
    let objB = arr[1] / 3.6 * arr[2]
    return Math.abs(objA - objB)

}

console.log(solve([11, 10, 120]));