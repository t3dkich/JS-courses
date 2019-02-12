function solve(arr) {
    let index = arr[0]
    let first = ''
    let second = ''
    for (let i = 1; i < arr.length; i++) {
        if (i <= index) {
            first += `${arr[i]} `
        }
        if (i > arr.length - 1 - index){
            second += `${arr[i]} `
        }
    }

    return `${first}\n${second}`
}

console.log(solve([2,
    7, 8, 9]));