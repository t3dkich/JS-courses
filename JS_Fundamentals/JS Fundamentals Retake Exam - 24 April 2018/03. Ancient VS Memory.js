function solve(arr) {

    let tempArr = arr.join(' ').split(' ')
    for (let i = 0; i < tempArr.length; i++) {
        if (tempArr[i] === '32656' && tempArr[i + 1] === '19759' && tempArr[i + 2] === '32763') {
            let seqCount = +tempArr[i + 4]
            let seq = []
            for (let j = 0; j < seqCount; j++) {
                if (tempArr[i + j + 6] !== tempArr.length) seq.push(tempArr[i + 6 + j])

            }
            if (+seqCount === seqCount) {
                console.log(seq.map(e => String.fromCharCode(+e)).join(''));
            }
        }
    }


}

solve(['0 5 0 80 101 115 104 111 0 0 0 0 0 0 0 0 0 0 0 0 32656 19759',
    '0 32656 19759 32763 0 7 0 83 111 102 116 117 110 105 0 0 0 0 0 0 0 0'])