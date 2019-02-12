function solve(arr) {
    arr.sort((a,b) => {
        if (a.length > b.length) {
            return 1
        } else if (a.length < b.length) {
            return -1
        } else {
            if (a[0] > b[0]) {
                return 1
            } else if(a[0] < b[0]) {
                return -1
            } else {
                return 0
            }
        }
    })
    console.log(arr.join('\n'));
}
solve(['alpha', 'beta', 'gamma'])