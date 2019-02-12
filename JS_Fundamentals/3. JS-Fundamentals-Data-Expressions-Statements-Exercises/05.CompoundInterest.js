function sove(arr) {
    return (arr[0] * ((1 + arr[1] / 100 / (12 / arr[2])) ** ((12 / arr[2]) * arr[3]))).toFixed(2)
}

console.log(sove([1500, 4.3, 3, 6]));