var chai = require('chai');
chai.should();
var assert = chai.assert

var findService = require('../../lib/services/FindService');

describe('FindService', () => {

    it('find one item in list', () => {
        var list = [{id:'a', desc:'text'},{id:'b', desc:'text'},{id:'1', desc:'number'},{id:'2', desc:'number'}];
        var find = findService.findOneInList({id:'a'}, list);
        assert(find.id == 'a');
        assert(find.desc == 'text');
    });
});