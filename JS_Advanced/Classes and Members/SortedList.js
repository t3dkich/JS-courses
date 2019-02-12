class SortedList {
    constructor() {
        this.size = 0
        this.arr = []
        this.sort = (arr) => arr.sort((a, b) => a - b)
    }

    add(e) {
        this.arr.push(e)
        this.size++
        return this.sort(this.arr)
    }

    remove(index) {
        if (index < 0 || index > this.arr.length - 1) return this.sort(this.arr)
        this.size--
        this.arr = this.arr.filter((e, i) => i !== index)
        return this.sort(this.arr)
    }

    get(index) {
        if (index < 0 || index > this.arr.length - 1) return ''
        return this.arr.filter((e, i) => i === index)[0]
    }


}