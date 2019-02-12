(() => {
    let id = 0
    return class Extensible {
        constructor() {
            this.id = id++
        }

        extend(template) {
            for (let key in template) {
                if (typeof template[key] !== "function") {
                    this[key] = template[key]
                } else {
                    Extensible.prototype[key] = template[key]
                }
            }
        }
    }
})()

