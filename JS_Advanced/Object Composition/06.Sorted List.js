function solve() {
    return (() => {
        let arr = []
        let size = 0
        let sort = (arr) => arr.sort((a,b) => a - b)
        function add(e) {
            arr.push(e)
            this.size++
            return sort(arr)
        }
        function remove(index) {
            if (index < 0 || index > arr.length - 1) return sort(arr)
            this.size--
            arr = arr.filter((e,i) => i !== index)
            return sort(arr)
        }
        function get(index) {
            if (index < 0 || index > arr.length - 1) return ''
            return arr.filter((e,i) => i === index)[0]
        }

        return {add, remove, get, size}
    })()


}
let obj = solve()
console.log(obj.remove(9));
console.log(obj.remove(5));
console.log(obj.size);

let dssa=5

