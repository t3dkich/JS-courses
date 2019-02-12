function solve(arrM, arr) {
    let matrix = []
    for (let value of arrM) {
       matrix.push(value.split(' ').map(Number))
    }
    for (let value of arr) {
        let [force, index] = value.split(' ')
        switch (force) {
            case 'breeze':
                for (let row = 0; row < 5; row++) {
                    if (row === +index) {
                        for (let col = 0; col < 5; col++) {
                            matrix[row][col] -= +15
                            if (matrix[row][col] < 0) matrix[row][col] = 0
                        }
                    }
                }
                break
            case 'gale':
                for (let row = 0; row < 5; row++) {
                    for (let col = 0; col < 5; col++) {
                        if (col === +index) {
                            matrix[row][col] -= +20
                            if (matrix[row][col] < 0) matrix[row][col] = 0
                        }
                    }
                }
                break
            case 'smog':
                for (let row = 0; row < 5; row++) {
                    for (let col = 0; col < 5; col++) {
                        matrix[row][col] += +index
                    }
                }
                break

        }
    }

    let output = []
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (matrix[i][j] >= 50) {
                output.push(`[${i}-${j}]`)
            }
        }
    }

    if (output.length === 0) {
        console.log('No polluted areas')
    } else {
        console.log(`Polluted areas: ${output.join(', ')}`)
    }
}

solve([
        "5 7 3 -1000000000000000000000 32",
        "41 12 49 30 33",
        "3 16 20 42 12",
        "2 20 10 39 14",
        "7 34 4 27 24",
    ],
    [
        "smog 11", "gale 3",
        "breeze 1", "smog 2"
    ])