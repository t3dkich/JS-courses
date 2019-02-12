function solve(arr) {
    arr[1] = arr[1] > 15 ? 15 : arr[1]
    return parseFloat(arr[0].toFixed(arr[1]))
}

console.log(solve([10.5, 3]));