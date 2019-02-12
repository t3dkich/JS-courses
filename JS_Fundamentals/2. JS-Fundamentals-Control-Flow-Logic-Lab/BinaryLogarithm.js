function solve(arr) {
    let output = '';
    for (let i = 0; i < arr.length; i++) {
        output += `${Math.log2(arr[i])}\n`
    }
    return output
}