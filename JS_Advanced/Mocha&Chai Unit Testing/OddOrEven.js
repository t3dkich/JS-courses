const expect = require('chai').expect

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

describe('isOddOrEven', function () {
    it('should return undefined, non string parameter', function () {
        //Arrange
        let parameter = 5
        //Act
        let result = isOddOrEven(parameter)
        //Assert
        expect(result).to.equal(undefined, 'should be undefined')
    })
    it('should return odd, string is "aaa"', function () {
        let parameter = 'aaa'
        let result = isOddOrEven(parameter)
        expect(result).to.equal('odd', 'should be odd')
    })
    it('should return even, string is "aaaa"', function () {
        let parameter = 'aaaa'
        let result = isOddOrEven(parameter)
        expect(result).to.equal('even', 'should be even')
    })
})


