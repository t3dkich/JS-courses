function solve(arr) {
    return new Date(arr[2], arr[1] - 1, 0).getDate()
}

console.log(solve([17, 3, 2002]));