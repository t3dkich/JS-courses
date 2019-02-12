function solve(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr.splice(0, 0, arr[i])
            arr.splice(i + 1, 1)
        }
    }
    return arr.join('\n')
}

console.log(solve([3, -2, 0, -1]));