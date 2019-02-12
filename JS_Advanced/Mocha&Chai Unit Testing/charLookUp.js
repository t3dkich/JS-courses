const expect = require('chai').expect

function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

describe('lookup Char tests', () => {
    it('should return undefined with non string for string parameter or ' +
        'non integer for integer parameter', () =>  {
        let [string, index] = [5,5]
        let [string1, index1] = ['neshtoSi', 5.35]
        let [result, result1] = [lookupChar(string, index),
        lookupChar(string1, index1)]
        expect(result).to.be.equal(undefined, 'should be undefined')
        expect(result1).to.be.equal(undefined, 'should be undefined')
    })
    it('should return "Incorrect Index" with parameter `index` bigger index value' +
        'than the parameter `string` length', () =>  {
        let [string, index] = ['neshtoSi',-1]
        let [string1, index1] = ['neshtoSi', 35]
        let [result, result1] = [lookupChar(string, index),
        lookupChar(string1, index1)]
        expect(result).to.be.equal('Incorrect index', 'should be Incorrect Index')
        expect(result1).to.be.equal('Incorrect index', 'should be Incorrect Index')
    })
    it('should return charecter `e`', function () {
        let string = 'neshtoSi'
        let index = 1
        let result = lookupChar(string, index)
        expect(result).to.be.equal('e', 'wrong character')
    });


})