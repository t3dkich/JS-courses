function solve(arr) {
    let front = 0
    let back = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (i === j) front += arr[i][j]
            if (i + j === arr.length - 1) back += arr[i][j]
        }
    }
    return `${front} ${back}`
}

console.log(solve([[3, 5, 17, 6],
                   [-1, 7, 14, 8],
                   [1, -8, 89, 56]]));