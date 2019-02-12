function solve(size) {
    let cycles = size[0] + size[1] - 3
    let matrix = [[]]
    let num = 1
    let row = 0
    let col = 0
    let prevRow = 0
    let prevCol = 0
    let count = 0
    for (let i = 0; i < size[0]; i++) {
        matrix.push([])
        for (let j = 0; j < size[1]; j++) {
            matrix[i].push(0)
        }
    }

    for (let i = 0; i < cycles ; i++) {
        if (i % 4 === 0) {
            if (i === 0) {
                for (let j = 0; j < size[1]; j++) {
                    matrix[row][col++] = num++
                }
            } else {
                col++
                row++
                for (let j = 0; j < size[1] - 2; j++) {
                    matrix[row][col++] = num++
                }
            }
            row++
         } else if (i % 4 === 1) {
            col -= 1
            prevRow = row
            prevCol = col
            for (let j = 0; j < size[0] - 2 - count; j++) {
                matrix[row++][col] = num++
            }
            row -= prevRow
            col = --prevCol
        } else if (i % 4 === 2) {
            if (i === 2) {
                row++
                col++
                for (let j = 0; j < size[1]; j++) {
                    matrix[row][col--] = num++
                }
            } else {
                row++
                for (let j = 0; j < size[1] - 2 - count; j++) {
                    matrix[row][col--] = num++
                }
            }
        } else {
            row--
            col++
            for (let j = 0; j < size[0] - 2 - count; j++) {
                matrix[row--][col] = num++
            }
        }
        if (i % 4 === 3) count++
        if (i === cycles - 1) {
            row--
            col++
            for (let j = 0; j < size[0] - 2 - count; j++) {
                matrix[row][col++] = num++
            }
        }
    }

    console.log(matrix.map(x => x.join(' ')).join('\n'))
}

solve([5, 5])