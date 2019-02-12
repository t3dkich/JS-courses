function solve(num) {
    let html = '<ul>\n';
    for (let i = 1; i <= num; i++) {
        let color = i % 2 === 0 ? 'blue' : 'green';
        html += `<li><span style='color:${color}>${i}'</span></li>\n`
    }
    html += '<ul>';
    return html

}

console.log(solve(10));