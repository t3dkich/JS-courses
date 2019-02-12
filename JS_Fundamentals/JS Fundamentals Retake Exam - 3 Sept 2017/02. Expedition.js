function solve(mainMatrix, secMatrix, overlaps, startPos) {
    for (let i = 0; i < overlaps.length; i++) {
        let [xOver, yOver] = overlaps[i]
        for (let x = 0; x < secMatrix.length; x++) {
            for (let y = 0; y < secMatrix[0].length; y++) {
                if (mainMatrix[xOver] !== undefined && mainMatrix[xOver][yOver] !== undefined) {
                    if (secMatrix[x][y] === 1) {
                        mainMatrix[xOver][yOver] = mainMatrix[xOver][yOver] === 1 ? 0 : 1
                    }
                }
                yOver++
            }
            xOver++
            yOver -= secMatrix[0].length
        }
    }

    let [row, col] = startPos;
    let previousMove = "";
    let moves = 1;
    while (true) {
        if (row + 1 < mainMatrix.length && mainMatrix[row + 1][col] === 0 && previousMove !== "up") {
            row = row + 1;
            previousMove = "down";
        } else if (col + 1 < mainMatrix[row].length && mainMatrix[row][col + 1] === 0 && previousMove !== "left") {
            col = col + 1;
            previousMove = "right";
        } else if (row - 1 >= 0 && mainMatrix[row - 1][col] === 0 && previousMove !== "down") {
            row = row - 1;
            previousMove = "up";
        } else if (col - 1 >= 0 && mainMatrix[row][col - 1] === 0 && previousMove !== "right") {
            col = col - 1;
            previousMove = "left";
        } else {
            break;
        }
        moves++;
    }

    console.log(moves);

    if (row === mainMatrix.length - 1) {
        console.log("Bottom")
    } else if (row === 0) {
        console.log("Top")
    } else if (col === 0) {
        console.log("Left")
    } else if (col === mainMatrix[row].length - 1) {
        console.log("Right")
    } else if (row < mainMatrix.length / 2 && col >= mainMatrix[row].length / 2) {
        console.log("Dead end 1");
    } else if (row < mainMatrix.length / 2 && col < mainMatrix[row].length / 2) {
        console.log("Dead end 2");
    } else if (row >= mainMatrix.length / 2 && col < mainMatrix[row].length / 2) {
        console.log("Dead end 3");
    } else if (row >= mainMatrix.length / 2 && col >= mainMatrix[row].length / 2) {
        console.log("Dead end 4");
    }

}

solve([[0, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 1, 1, 1, 1],
        [1, 1, 1, 0, 1, 1, 1, 1],
        [1, 0, 1, 0, 0, 0, 1, 1],
        [1, 1, 1, 1, 1, 0, 1, 1],
        [1, 1, 1, 1, 1, 0, 0, 0]],
    [[0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]],
    [[1, 1],
        [2, 3],
        [5, 3]],
    [0, 0])