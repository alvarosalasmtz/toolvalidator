var chai = require('chai');
chai.should();
var assert = chai.assert

var AdminRulesService = require('../../lib/services/AdminRulesService');

describe('AdminRulesService', () => {

    var adminRulesService = new AdminRulesService();

    it('returns add Rule and validate list', () => {
        adminRulesService.add('test', function () {
        }, 'message');
        adminRulesService.getListRules().size.should.equal(1);
    });

    it('returns listRules', () => {
        adminRulesService.init();
        assert(adminRulesService.getListRules().size > 0);
    });
});