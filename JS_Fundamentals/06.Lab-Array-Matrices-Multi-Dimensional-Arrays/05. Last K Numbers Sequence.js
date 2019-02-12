function solve(seqNum, takeNums) {
    let sequance = [1]
    for (let i = 1; i < seqNum; i++) {
        let temp = 0
        let num = takeNums
        for (let j = 0; j < takeNums; j++) {
            let count = i - num--
            if (count < 0) continue
            temp += sequance[count]
        }
        sequance[i] = temp

    }
    return sequance.join('\n')

}

console.log(solve(8, 2));