var chai = require('chai');
chai.should();

var emailRule = require('../../lib/rules/EmailRule');

describe('EmailRule', () => {
    describe('#rule', () => {

        it('returns name', () => {
            emailRule.name.should.equal('email');
        });

        it('returns message', () => {
            emailRule.message.should.equal('Invalid email.');
        });

        it('returns invalid email', () => {
            emailRule.rule('alvarosalas.com', true).should.equal(false);
        });

        it('returns valid email', () => {
            emailRule.rule('alvarosalasmtz@gmail.com', true).should.equal(true);
        });
    });
});