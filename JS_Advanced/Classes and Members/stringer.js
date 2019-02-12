class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString
        this.innerLength = innerLength
    }
    get innerLength(){
        return this._innerLength
    }
    set innerLength(value) {
        if (value > 0) {
            return this._innerLength = value
        }
        this._innerLength = 0
    }
    increase(value) {
        this.innerLength += value
    }
    decrease(value){
        this.innerLength -= value
    }
    toString(){
        if(this.innerLength < this.innerString.length) {
            let str = this.innerString.substring(0,this.innerLength)
            return str + '...'
        }
        return this.innerString
    }
}
let test = new Stringer('Test', 1);
console.log(test.toString()); //Test
test.increase(1);
console.log(test.toString()); //Te...
test.decrease(1);
console.log(test.toString()); //...
test.increase(4);
console.log(test.toString()); //Test