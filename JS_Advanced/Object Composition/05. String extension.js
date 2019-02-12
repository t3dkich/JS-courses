function solve() {

    (() => {
        String.prototype.ensureStart = function (str) {
            if (this.indexOf(str) !== 0) {
                return str + this
            }
            return this.toString()
        }
        String.prototype.ensureEnd = function (str) {
            if (this.indexOf(str) !== this.length - str.length) {
                return this + str
            }
            return this.toString()
        }
        String.prototype.isEmpty = function () {
            return this.toString() === ''
        }
        String.prototype.truncate = function (n) {
            if(n <= 3){
                return ".".repeat(n);
            }
            if(this.toString().length <= n){
                return this.toString();
            } else {
                let lastIndex = this.toString().substr(0, n - 2).lastIndexOf(" ");
                if(lastIndex !== -1){
                    return this.toString().substr(0, lastIndex) + "...";
                } else {
                    return this.toString().substr(0, n-3) + "...";
                }
            }
        }
        String.format = function (string, ...params) {
            let lastIndex = 0
            for (let i = 0; i < params.length; i++) {
                let replacement = params[i]
                let index = string.indexOf(`{${i}}`, lastIndex)
                if (index !== -1) {
                    lastIndex = index
                    string = string.replace(`{${i}}`, replacement)
                }
            }
            return string
        }


    })()
    let str = 'my string'
    str = String.format('the {0} {1} fox', 'quick')
    console.log(str);
//str = str.ensureStart('my')
//console.log(str);
//str = str.ensureStart('hello ')
//console.log(str);
//str = str.truncate(16)
//console.log(str);
//str = str.truncate(14)
//console.log(str);
//str = str.truncate(8)
// console.log(str);
//str = str.truncate(4)
// console.log(str);
//str = str.truncate(2)
// console.log(str);

}


