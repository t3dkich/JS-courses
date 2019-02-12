let expect = require('chai').expect

class Calculator {
    constructor() {
        this.expenses = [];
    }

    add(data) {
        this.expenses.push(data);
    }

    divideNums() {
        let divide;
        for (let i = 0; i < this.expenses.length; i++) {
            if (typeof (this.expenses[i]) === 'number') {
                if (i === 0 || divide===undefined) {
                    divide = this.expenses[i];
                } else {
                    if (this.expenses[i] === 0) {
                        return 'Cannot divide by zero';
                    }
                    divide /= this.expenses[i];
                }
            }
        }
        if (divide !== undefined) {
            this.expenses = [divide];
            return divide;
        } else {
            throw new Error('There are no numbers in the array!')
        }
    }

    toString() {
        if (this.expenses.length > 0)
            return this.expenses.join(" -> ");
        else return 'empty array';
    }

    orderBy() {
        if (this.expenses.length > 0) {
            let isNumber = true;
            for (let data of this.expenses) {
                if (typeof data !== 'number')
                    isNumber = false;
            }
            if (isNumber) {
                return this.expenses.sort((a, b) => a - b).join(', ');
            }
            else {
                return this.expenses.sort().join(', ');
            }
        }
        else return 'empty';
    }
}


describe('tests', ()=>{
    let output
    beforeEach(()=>{
        output = new Calculator();
    })
    it('should empty array expenses', function () {
        expect(output.expenses.length).to.be.equal(0, '')
    });
    describe('test add func', ()=>{
        it('should add properly everything',()=>{
            output.add(10)
            expect(output.expenses[0]).to.be.equal(10,'')
            output.add(-10)
            expect(output.expenses[1]).to.be.equal(-10,'')
            output.add('Pesho')
            expect(output.expenses[2]).to.be.equal('Pesho','')
            output.add({value:5})
            expect(output.expenses[3]).to.be.eql({value:5})
            output.add((a,b)=>a+b)
            expect(typeof output.expenses[4]).to.be.eql('function')
            output.add([])
            expect(Array.isArray(output.expenses[5])).to.be.true
            output.add(10.5)
            expect(output.expenses[6]).to.be.equal(10.5,'')
            output.add(10.567)
            expect(output.expenses[7]).to.be.equal(10.567,'')
        })
    })
    describe('divide func throw error', ()=>{
        it('should test', function () {
            expect(() => output.divideNums()).to.throw
        });
        it('should divide only number', function () {
            output.add(5)
            output.add(5)
            output.add('pesho')
            output.add([1,2,3])
            expect(output.divideNums()).to.be.equal(1, '')
        });
        it('should divide only number decimal and negative', function () {
            output.add(-5)
            output.add(5.56)
            output.add('pesho')
            output.add([1,2,3])
            expect(+output.divideNums().toFixed(2)).to.be.equal(-0.90, '')
        });
        it('should divide only number decimal and negative', function () {
            output.add(-5)
            output.add(5.56)
            output.add('pesho')
            output.add([1,2,3])
            expect(output.divideNums()).to.be.equal(-0.8992805755395684, '')
        });
        it('should not divide 0', function () {
            output.add(1)
            output.add(0)
            expect(output.divideNums()).to.be.equal('Cannot divide by zero', '')
        });it('should not divide 0', function () {
            output.add(0)
            expect(output.divideNums()).to.be.equal(0, '')
        });
    })

    describe('toString func tests', ()=>{
        it('should empty array', function () {
            expect(output.toString()).to.be.equal('empty array')
        });
        it('should 1 element', function () {
            output.add(5)
            expect(output.toString()).to.be.equal('5')
        });
        it('should not empty', function () {
            output.add(5)
            output.add(-5)
            output.add(5.4)
            output.add('pesho')
            output.add((a,b)=>a+b)
            output.add({})
            expect(output.toString()).to.be.equal('5 -> -5 -> 5.4 -> pesho -> (a,b)=>a+b -> [object Object]')
        });
    })
    describe('orderBy func', ()=>{
        it('should only numbers sorting', function () {
            output.add(5)
            output.add(-5)
            output.add(5.45)
            output.add(-5.56)
            output.add(0)
            expect(output.orderBy()).to.be.equal('-5.56, -5, 0, 5, 5.45')
        });
        it('should sort everything', function () {
            output.add(5)
            output.add(-5)
            output.add('pesho')
            output.add(5.45)
            output.add([])
            output.add({key:5})
            output.add(-5.56)
            output.add(0)
            expect(output.orderBy()).to.be.equal(', -5, -5.56, 0, 5, 5.45, [object Object], pesho')
        });
    })
})