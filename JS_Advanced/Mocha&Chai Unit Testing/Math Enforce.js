const expect = require('chai').expect

let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};
describe('Math enforcer functions tests', function () {
    describe('addFive', function () {
        it('should return undefined on addFive func with non number parameter', function () {
            expect(mathEnforcer.addFive('five'))
                .to.be.equal(undefined, 'not undefined')
        });
    })
    describe('addFive', function () {
        it('should return `6` on addFive func with `1` as parameter', function () {
            expect(mathEnforcer.addFive(1))
                .to.be.equal(6, 'its not 6')
            expect(mathEnforcer.addFive(1.56))
                .to.be.equal(6.5600000000000005, 'its not 6.5600000000000005')
            expect(mathEnforcer.addFive(-6))
                .to.be.equal(-1, 'its not -1')
            expect(mathEnforcer.addFive(-6.55))
                .to.be.equal(-1.5499999999999998, 'its not -1.5499999999999998')
        });

    })
    describe('subtractTen', function () {
        it('should return undefined on subtractTen func with non number parameter', function () {
            expect(mathEnforcer.subtractTen('five'))
                .to.be.equal(undefined, 'not undefined')
        });
        it('should return correct answer', function () {
            expect(mathEnforcer.subtractTen(11))
                .to.be.equal(1, 'its not 1')
            expect(mathEnforcer.subtractTen(11.10))
                .to.be.equal(1.0999999999999996, 'its not 1.0999999999999996')
            expect(mathEnforcer.subtractTen(-11))
                .to.be.equal(-21, 'its not -21')
            expect(mathEnforcer.subtractTen(-11.05))
                .to.be.equal(-21.05, 'its not -21.05')
        });
    })
    describe('sum', function () {
        it('should return undefined on sum func if one of parameters is non number', function () {
            expect(mathEnforcer.sum('five', 5))
                .to.be.equal(undefined, 'not undefined')
            expect(mathEnforcer.sum(5, 'five'))
                .to.be.equal(undefined, 'not undefined')

        });
        it('should return correct answer', function () {
            expect(mathEnforcer.sum(5,5)).to.be.equal(10, 'its not 10')
            expect(mathEnforcer.sum(2,-3)).to.be.equal(-1, 'its not -1')
            expect(mathEnforcer.sum(5.5,5.6))
                .to.be.equal(11.1, 'its not 11.1')
            expect(mathEnforcer.sum(-55.5,-5.6))
                .to.be.equal(-61.1, 'its not -61.1')


        });

    })
})