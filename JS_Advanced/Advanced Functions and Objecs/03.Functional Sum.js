let add = (function () {
    let sum = 0
    return function summ(num) {
        sum += num
        summ.toString = () => sum
       return summ
    }
})()

console.log(add(1)(2)(3));


