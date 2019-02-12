function solve(arr) {
    let output = [arr[0]]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= output[output.length - 1]) {
            output.push(arr[i])
        }
    }
    console.log(output.join('\n'))
}


solve([1,3,8,4,10,12,3,2,24])