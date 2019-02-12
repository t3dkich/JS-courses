function solve(num) {
    let html = '<div class="chessboard">\n';
    for (let i = 1; i <= num; i++) {
        html += '  <div>\n'
        for (let j = 1; j <= num; j++) {
            if (i % 2 !== 0) {
                html += j % 2 !== 0 ? '    <span class="black"></span>\n' : '    <span class="white"></span>\n'
            } else {
                html += j % 2 === 0 ? '    <span class="black"></span>\n' : '    <span class="white"></span>\n'
            }
        }
        html += '  </div>\n'
    }
    html += '</div>'
    return html
}

console.log(solve(4));