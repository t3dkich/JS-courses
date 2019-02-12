function solve(arr) {
    let rotations = arr.pop()
    for (let i = 0; i < (rotations % arr.length); i++) {
        let temp = arr.pop()
        arr.unshift(temp)
    }
    console.log(arr.join(' '))
}

solve([1,2,3,4,2])