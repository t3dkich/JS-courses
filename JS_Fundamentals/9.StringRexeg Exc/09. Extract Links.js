function solve(arr) {
    let pattern = /www\.[A-Za-z0-9-]+(\.[a-z]+)+/g
    let sites = []
    arr.forEach(e => {
        if (e.match(pattern)){
            sites.push(pattern.exec(e))
        }
    })
    console.log(sites.map(e => e.filter((e,i) => i % 2 === 0)).join('\n'));
}

solve(['Join WebStars now for free, at www.web-stars.com',
'You can also support our partners:',
    'Internet - www.internet.com',
'WebSpiders - www.webspiders101.com',
'Sentinel - www.sentinel.-ko'] )