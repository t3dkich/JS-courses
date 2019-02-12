function solveCone(r, h) {
    let volume = (Math.PI * Math.pow(r, 2) * h) * (1 / 3)
    let baseSurface = Math.PI * r * (r + Math.sqrt(Math.pow(r, 2) + Math.pow(h, 2)))
    return `volume = ${Math.round(volume * 1000) / 1000}\n${Math.round(baseSurface * 10000) / 10000}`
}