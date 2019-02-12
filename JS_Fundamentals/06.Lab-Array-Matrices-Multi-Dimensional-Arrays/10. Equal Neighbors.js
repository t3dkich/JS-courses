function solve(matrix) {
    let count = 0
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === matrix[i][j + 1]){
                count++
            }
            if (i !== matrix.length - 1) {
                if (matrix[i][j] === matrix[i + 1][j]){
                    count++
                }
            }
        }
    }
    return count
}

console.log(solve([['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]));
