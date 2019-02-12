function solve(arr) {
    return (arr[0] >= arr[1] ? arr[0] : arr[1]) >= arr[2] ? (arr[0] >= arr[1] ? arr[0] : arr[1]) : arr[2]
}

solve()