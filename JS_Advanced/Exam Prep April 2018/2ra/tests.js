const expect = require('chai').expect
//const SubscriptionCard = require('./Card')

describe('tests', () => {
    let card
    beforeEach(() => {
        card = new SubscriptionCard('Pesho', 'Petrov', '00000000');
    })
    describe('can be instantiated correct with 3 parameters', () => {
        it('should be correct', function () {
            expect(card.firstName).to.be.equal('Pesho')
            expect(card.lastName).to.be.equal('Petrov')
            expect(card.SSN).to.be.equal('00000000')
        });
        it('should not be changed', ()=>{
            card.firstName = 'gosho'
            card.lastName = 'goshev'
            card.SSN = '11111111'
            expect(card.firstName).to.be.equal('Pesho')
            expect(card.lastName).to.be.equal('Petrov')
            expect(card.SSN).to.be.equal('00000000')
        })
    })
    describe('isBlocked func tests', () => {
        it('should be unblocked', function () {
            expect(card.isBlocked).to.be.false
        });
        it('should be blocked', function () {
            card._blocked = true
            expect(card.isBlocked).to.be.true
        });
    })
    describe('addSubscription func tests', () => {
        it('should have 1 subscription', function () {
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(card._subscriptions.length).to.be.equal(1)
            expect(card._subscriptions[0].line).to.be.equal('120')
            expect(card._subscriptions[0].startDate.toString())
                .to.be.equal(new Date('2018-04-22').toString())
            expect(card._subscriptions[0].endDate.toString())
                .to.be.equal(new Date('2018-05-21').toString())
        });
        it('should have 2 subscription', function () {
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            card.addSubscription('*', new Date('2018-05-25'), new Date('2018-06-24'));
            expect(card._subscriptions.length).to.be.equal(2)
            expect(card._subscriptions[0].line).to.be.equal('120')
            expect(card._subscriptions[0].startDate.toString())
                .to.be.equal(new Date('2018-04-22').toString())
            expect(card._subscriptions[0].endDate.toString())
                .to.be.equal(new Date('2018-05-21').toString())
            expect(card._subscriptions[1].line).to.be.equal('*')
            expect(card._subscriptions[1].startDate.toString())
                .to.be.equal(new Date('2018-05-25').toString())
            expect(card._subscriptions[1].endDate.toString())
                .to.be.equal(new Date('2018-06-24').toString())
        });
        it('should be object type elements in the array', ()=>{
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(typeof card._subscriptions[0]).to.be.equal('object')
        })
    })
    describe('isValid func tests', ()=>{
        it('should return false if blocked', function () {
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            card._blocked = true
            expect(card.isValid('120', new Date('2018-04-22'))).to.be.false
        });
        it('should test all dates', ()=>{
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(card.isValid('120', new Date('2018-04-21')))
                .to.be.false
            expect(card.isValid('120', new Date('2018-04-22')))
                .to.be.true
            expect(card.isValid('120', new Date('2018-05-22')))
                .to.be.false
            expect(card.isValid('120', new Date('2018-05-21')))
                .to.be.true
        })
        it('should test special subs', ()=>{
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            card.addSubscription('*', new Date('2018-03-22'), new Date('2018-06-24'));
            expect(card.isValid('120', new Date('2018-03-22')))
                .to.be.true
            expect(card.isValid('120', new Date('2018-06-24')))
                .to.be.true
            expect(card.isValid('120', new Date('2018-03-21')))
                .to.be.false
            expect(card.isValid('120', new Date('2018-06-25')))
                .to.be.false
        })
    })
    describe('block and unblock funcs', ()=>{
        it('should test funcs', function () {
            card.block()
            expect(card._blocked).to.be.true
            card.unblock()
            expect(card._blocked).to.be.false

        });
    })
})