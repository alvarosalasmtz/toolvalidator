var chai = require('chai');
chai.should();
var assert = chai.assert

var validatorService = require('../../lib/services/ValidatorService');
var AdminRulesService = require('../../lib/services/AdminRulesService');
var adminRulesService = new AdminRulesService();

describe('ValidatorService', () => {

    it('evaluate data with rules', () => {
        adminRulesService.init();
        var data = {email: 'alvaro.salas@interware.com.mx'};
        var itemsRules = {
            email: {
                type: 'email',
                rules: {
                    email: {condition: true, message: ''}
                }
            }
        };
        var rules = adminRulesService.getListRules();
        var response = validatorService.evaluate(data, itemsRules, rules);
        console.log(response);
        assert(response[0].name == 'email');
        assert(response[0].errors.length == 0);
    });

    it('evaluate fail data with rules', () => {
        adminRulesService.init();
        var data = {email: 'alvaro.salasinterware.com.mx'};
        var itemsRules = {
            email: {
                rules: {
                    email: {condition: true, message: ''}
                }
            }
        };
        var rules = adminRulesService.getListRules();
        var response = validatorService.evaluate(data, itemsRules, rules);
        console.log(response);
        assert(response[0].name == 'email');
        assert(response[0].errors.length == 1);
        assert(response[0].errors[0] == 'Invalid email.');
    });

    it('evaluate fail data with rules and message custom', () => {
        adminRulesService.init();
        var data = {email: 'alvaro.salasinterware.com.mx'};
        var itemsRules = {
            email: {
                rules: {
                    email: {condition: true, message: 'custom'}
                }
            }
        };
        var rules = adminRulesService.getListRules();
        var response = validatorService.evaluate(data, itemsRules, rules);
        console.log(response);
        assert(response[0].name == 'email');
        assert(response[0].errors.length == 1);
        assert(response[0].errors[0] == 'custom');
    });

    it('evaluate data with rules with not rule', () => {
        adminRulesService.init();
        var data = {email: 'alvaro.salas@interware.com.mx'};
        var itemsRules = {
            email: {
                rules: {
                    required: {condition: true, message: 'data required'},
                    email: {condition: true, message: ''}
                }
            }
        };
        var rules = adminRulesService.getListRules();
        var response = validatorService.evaluate(data, itemsRules, rules);
        console.log(response);
        assert(response[0].name == 'email');
        assert(response[0].errors.length > 0);
    });
});