function solve(arr) {
    let p1 = {
        x:arr[0],
        y:arr[1],
        z:arr[2]
    }
    let p2 = {
        x:arr[3],
        y:arr[4],
        z:arr[5]
    }
    return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2 + (p1.z - p2.z) ** 2)
}

console.log(solve([1, 1, 0, 5, 4, 0]));
