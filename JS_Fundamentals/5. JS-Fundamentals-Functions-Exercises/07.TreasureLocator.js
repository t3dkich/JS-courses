function solve(arr) {
    let tuvaluObj = {
        x1: 1, y1: 1, x2: 3, y2: 3
    }
    let tongaObj = {
        x1: 0, y1: 6, x2: 3, y2: 8
    }
    let cookObj = {
        x1: 4, y1: 7, x2: 9, y2: 8
    }
    let samoaObj = {
        x1: 5, y1: 3, x2: 7, y2: 6
    }
    let tokelauObj = {
        x1: 8, y1: 0, x2: 9, y2: 1
    }

    function isInside(x, y, x1, y1, x2, y2) {
        return x >= x1 && x <= x2 && y >= y1 && y <= y2
    }

    let output = ''

    for (let i = 0; i < arr.length; i += 2) {
        let x = arr[i], y = arr[i + 1]
        if (isInside(x, y, tuvaluObj.x1, tuvaluObj.y1, tuvaluObj.x2, tuvaluObj.y2)) {
            output += 'Tuvalu\n'
        } else if (isInside(x, y, tongaObj.x1, tongaObj.y1, tongaObj.x2, tongaObj.y2)) {
            output += 'Tonga\n'
        } else if (isInside(x, y, cookObj.x1, cookObj.y1, cookObj.x2, cookObj.y2)) {
            output += 'Cook\n'
        } else if (isInside(x, y, samoaObj.x1, samoaObj.y1, samoaObj.x2, samoaObj.y2)) {
            output += 'Samoa\n'
        } else if (isInside(x, y, tokelauObj.x1, tokelauObj.y1, tokelauObj.x2, tokelauObj.y2)) {
            output += 'Tokelau\n'
        } else {
            output += 'On the bottom of the ocean\n'
        }
    }
    return output
}

console.log(solve([4, 2, 1.5, 6.5, 1, 3]));