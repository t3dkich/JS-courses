function solve(arr) {
    let xmlFile = '<?xml version="1.0" encoding="UTF-8"?>\n<quiz>\n'
    for (let i = 0; i < arr.length; i += 2) {
        let question = arr[i], answer = arr[i + 1]
        xmlFile += `  <question>\n    ${question}\n  </question>\n`
        xmlFile += `  <answer>\n    ${answer}\n  </answer>\n`
    }
    xmlFile += '</quiz>'
    return xmlFile
}

console.log(solve(["Who was the forty-second president of the U.S.A.?",
    "William Jefferson Clinton"]
));