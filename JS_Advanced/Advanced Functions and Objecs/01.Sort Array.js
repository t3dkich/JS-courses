function sortArray(arr, criteria) {
    let sort = {
        asc: (a,b) => a - b,
        desc: (a,b) => b - a
    }
    return arr.sort(sort[criteria])
}

console.log(sortArray([14, 7, 17, 6, 8], 'desc'));

