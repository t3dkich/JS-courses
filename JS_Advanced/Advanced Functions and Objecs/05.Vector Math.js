function solve() {
    let solution = (function () {
        return {
            add: (v1, v2) => {
                return [v1[0] + v2[0], v1[1] + v2[1]]
            },
            multiply: (v1, sc) => {
                return [v1[0] * sc, v1[1] * sc]
            },
            length: (v1) => {
                return Math.sqrt(v1[0] ** 2 + v1[1] ** 2)
            },
            dot: (v1, v2) => {
                return v1[0] * v2[0] + v1[1] * v2[1]
            },
            cross: (v1, v2) => {
                return v1[0] * v2[1] - v1[1] * v2[0]
            }

        }
    })()
    console.log(solution.add([1, 1], [1, 0]))
    console.log(solution.multiply([3.5, -2], 2))
    console.log(solution.length([3, -4]));
    console.log(solution.dot([1, 0], [0, -1]));
    console.log(solution.cross([3, 7], [1, 0]));
}
solve()




