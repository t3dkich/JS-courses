function solve(num) {
    let output = "<table border=\"1\">\n";
    let count = 1;
    for (let i = 0; i <= num; i++) {
        if (i === 0) {
            output += ' <tr><th>x</th>'
            for (let j = 1; j <= num; j++) {
                output += `<th>${j}</th>`
            }
            output += '</tr>\n'
        } else {

            output += ` <tr><th>${i}</th>`
            let count = i;
            for (let j = 1; j <= num; j++) {
                if (i === 1) {
                    output += `<td>${j}</td>`
                } else {
                    output += `<td>${count}</td>`
                    count += i
                }
            }
            output += '</tr>\n'
        }
    }
    output += '</table>'
    return output


}

console.log(solve(5));