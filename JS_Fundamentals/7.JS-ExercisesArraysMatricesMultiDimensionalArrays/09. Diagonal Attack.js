function solve(arr) {
    let matrix = []
    for (let i = 0; i < arr.length; i++) {
        matrix.push([])
        for (let j = 0; j < arr.length; j++) {
            matrix[i].push(0)
        }
    }

    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i].split(' ')
        for (let j = 0; j < temp.length; j++) {
            matrix[i][j] = temp[j]
        }
    }

    let front = 0
    let back = 0
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (i === j) front += Number( matrix[i][j])
            if (i + j === matrix.length - 1) back += Number( matrix[i][j])
        }
    }

    if (front === back) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (i !== j && j + i !== matrix.length - 1) {
                    matrix[i][j] = front
                }
            }
        }
    }

    console.log(matrix.map(x => x.join(' ')).join('\n'))


}

solve(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'])