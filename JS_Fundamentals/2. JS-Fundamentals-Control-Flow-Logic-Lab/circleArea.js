function circleArea(radius) {
    let area = Math.PI * Math.pow(radius, 2)
    return `${area}\n${Math.round(area * 100) / 100}`
}

console.log(circleArea(5))