function solve(matrix) {
    let summ = 0
    let sum = 0
    for (let i = 0; i < matrix.length; i++) {
        let tempColSum = 0
        let tempRowSum = 0
        for (let col = 0; col < matrix.length; col++) {
            tempColSum += Number(matrix[i][col])
        }
        for (let row = 0; row < matrix.length; row++) {
            tempRowSum += Number(matrix[row][i])
        }
        if (tempRowSum !== tempColSum) return false
        sum = tempColSum
        if (i === 0) {
            summ = sum
        } else {
            if (sum !== summ) return false
        }
    }
    return true
}

console.log(solve([[10, 233434343434343, 6],
    [6, 24, 4],
    [5, 5, 5]]));