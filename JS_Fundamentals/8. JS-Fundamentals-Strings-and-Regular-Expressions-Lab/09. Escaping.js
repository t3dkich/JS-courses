function solve(arr) {
    let htmlStr = '<ul>\n'
    for (let arrKey of arr) {
        let tempStr = arrKey.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
        htmlStr += `  <li>${tempStr}</li>\n`
    }
    htmlStr += '</li>'
    console.log(htmlStr)
}

solve(['<b>unescaped text</b>', 'normal text']
)