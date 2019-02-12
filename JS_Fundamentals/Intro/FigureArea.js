function area(w, h, W, H) {
    return w * h + W * H - Math.min(w, W) * Math.min(h, H)
}