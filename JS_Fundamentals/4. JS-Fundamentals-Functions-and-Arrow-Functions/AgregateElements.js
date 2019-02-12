function solve(arr) {
    let sum = 0;
    let sumOfInverseValues = 0;
    let concatElements = '';

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    for (let i = 0; i < arr.length; i++) {
        sumOfInverseValues += 1 / arr[i]
    }
    for (let i = 0; i < arr.length; i++) {
        concatElements = concatElements.concat(arr[i])
    }

    return `${sum}\n${sumOfInverseValues}\n${concatElements}`
}

console.log(solve([1, 2, 3]));