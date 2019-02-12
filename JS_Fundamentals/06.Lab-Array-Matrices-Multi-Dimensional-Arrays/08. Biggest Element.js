function solve(arr) {
    let min = Number.NEGATIVE_INFINITY
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            let num = arr[i][j]
            if (min < num) min = num
        }
    }
    return min
}

console.log(solve([[20, 50, 10],
    [8, 33, 145]]));