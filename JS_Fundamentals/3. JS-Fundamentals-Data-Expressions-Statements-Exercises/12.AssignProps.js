function solve(arr) {
    let prop1 = arr[0], prop2 = arr[1], prop3 = arr[2], prop4 = arr[3], prop5 = arr[4], prop6 = arr[5];
    let obj = {}
    obj[prop1] = prop2
    obj[prop3] = prop4
    obj[prop5] = prop6
    return obj
}

console.log(solve(['name', 'Pesho', 'age', '23', 'gender', 'male']));