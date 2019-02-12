function solve(arr) {
    let [x1, y1, x2, y2, x3, y3] = arr
    let dist = []
    for (let i = 0; i <= 4; i += 2) {
        let distance = 0;
        if (i === 4) {
            let x = arr[i] - arr[i - i]
            let y = arr[i + 1] - arr[i - 3]
            distance = Math.sqrt(x**2 + y**2)
        } else {
            let x = arr[i] - arr[i + 2]
            let y = arr[i + 1] - arr[i + 3]
            distance = Math.sqrt(x**2 + y**2)
    }
        dist.push(distance)
    }

    let ab = dist[0], bc = dist[1], ac = dist[2]


    let output = ''
    if (ab <= ac && ac >= bc) {
        output = '1->2->3: '
    } else if (ab <= bc && ac <= bc) {
        output = '2->3->1: '
    } else {
        output = '1->3->2: '
    }
    dist = dist.sort((a, b) => a > b)
     output += dist[0] + dist[1]
    console.log(output)




}
solve([0, 0, 2, 0, 4, 0])
solve([5, 1, 1, 1, 5, 4])

solve([-1, -2, 3.5, 0, 0, 2])