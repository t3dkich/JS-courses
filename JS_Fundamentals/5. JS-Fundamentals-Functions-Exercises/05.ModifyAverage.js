function solve(num) {
    let numStr = num.toString()
    let sum = 0;
    for (let i = 0; i < numStr.length; i++) {
        sum += Number(numStr[i])
        if (numStr.length - 1 === i) {
            if (sum / numStr.length <= 5) {
                numStr += '9'
                sum = 0
                i = -1
            } else {
               return numStr
            }
        }
    }

}

console.log(solve(1010101));
console.log(solve(5835));