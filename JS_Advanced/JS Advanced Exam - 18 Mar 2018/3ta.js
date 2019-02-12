class PaymentProcessor {
    constructor(obj) {
        this._options = {
            types: ['service', 'product', 'other'],
            precision: 2
        }
        if (obj !== undefined) this.isObj(obj)
        this.collection = []
    }

    isObj(obj){
        if (typeof obj !== "object") {
            throw new Error('not an object')
        }
        for (let key in obj) {
            if (key === 'types') {
                this._options.types = obj.types
            } else if (key === 'precision') {
                this._options.precision = obj.precision
            }
        }
    }

    toString() {
        return `Summary:
- Payments: ${this.collection.length}
- Balance: ${this.collection
            .map(e => e.value)
            .reduce((a, b) => a + b)
            .toFixed(this._options.precision)}
`
    }

    get(id) {
        if (id === '' || typeof id !== 'string'){
            throw new Error('invalid ID')
        }
        let isThere = false
        let result
        this.collection.forEach(e => {
            if (e.id === id) {
                isThere = true
                result = `Details about payment ID: ${id}
- Name: ${e.name}
- Type: ${e.type}
- Value: ${e.value.toFixed(this._options.precision)}`
            }
        })
        if (!isThere) throw new Error('id not there')
        return result
    }

    deletePayment(id) {
        if (id === '' || typeof id !== 'string'){
            throw new Error('invalid ID')
        }
        let isThere = false
        this.collection.forEach(e => {
            if (e.id === id) {
                isThere = true
                this.collection = this.collection.filter(e => e.id !== id)
            }
        })
        if (!isThere) throw new Error('id not there')
    }

    registerPayment(id, name, type, value) {
        if (id === '' || typeof id !== 'string'
            || name === '' || typeof name !== 'string'
            || typeof value !== 'number' ||
            !this._options.types.includes(type)) {
            throw new Error('invalid parameters')
        }
        if (this.collection.length > 0) {
            this.collection.forEach(e=>{
                if(e.id===id) throw new Error('id exists')
            })
        }
        this.collection.push({id, name, type, value})

    }

    setOptions(options) {
        if (options === undefined) {
            this._options = {
                types: ['service', 'product', 'other'],
                precision: 2
            }
            return
        }
        for (let key in options) {
            if (key === 'types') {
                this._options.types = options.types
            } else if (key === 'precision'){
                this._options.precision = options.precision
            }
        }
    }
}

let generalPayments = new PaymentProcessor()
generalPayments.registerPayment('0001', 'Microchips', 'product', 15000);
generalPayments.registerPayment('01A3', 'Biopolymer', 'product', 23000);
generalPayments.registerPayment('01A3', 'Biopolymer', 'product', 23000);
console.log(generalPayments.toString());
//
 generalPayments.setOptions();
// generalPayments.registerPayment('E028', 'Rare-earth elements', 'material', 8000);
// console.log(generalPayments.get('E028'));
// generalPayments.registerPayment('CF15', 'Enzymes', 'material', 55000);
// generalPayments.deletePayment('E028');
// console.log(generalPayments.toString());

const servicePyaments = new PaymentProcessor({types: ['service']});
servicePyaments.registerPayment('01', 'HR Consultation', 'service', 3000);
servicePyaments.registerPayment('02', 'Discount', 'service', -1500);
console.log(servicePyaments.toString());

const transactionLog = new PaymentProcessor({precision: 5});
transactionLog.registerPayment('b5af2d02-327e-4cbf', 'Interest', 'other', 0.00153);
console.log(transactionLog.toString());
