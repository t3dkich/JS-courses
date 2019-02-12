function solve(string) {
    let arr = string.split(' ')
    let output = []
    for (let arrKey of arr) {
        let temp = ''
        for (let i = 0; i < arrKey.length; i++) {
            if (i === 0) {
                temp += arrKey[i].toUpperCase()
            } else {
                temp += arrKey[i].toLowerCase()
            }
        }
        output.push(temp)
    }
    return output.join(' ')
}

console.log(solve('Was that Easy? tRY thIs onE for SiZe!'));