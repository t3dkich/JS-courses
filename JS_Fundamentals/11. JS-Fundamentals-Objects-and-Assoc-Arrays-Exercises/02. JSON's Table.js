function solve(arr) {
    let output = '<table>\n'
    for (let arrKey of arr) {
        output += '    <tr>\n'
        let obj = JSON.parse(arrKey)
        output += `        <td>${obj.name}</td>\n`
        output += `        <td>${obj.position}</td>\n`
        output += `        <td>${obj.salary}</td>\n`
        output += '    <tr>\n'
    }
    output += '</table>'
    console.log(output)
}

solve(['{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}'])