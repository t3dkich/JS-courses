function solve(arr) {
    let [x, y, xMin, xMax, yMin, yMax] = arr
    return (x >= xMin && x <= xMax && y >= yMin && y <= yMax) ? 'inside' : 'outside'
}