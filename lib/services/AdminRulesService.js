var requireAll = require('require-dir');
var rulesDir = requireAll('../rules')

var AdminRulesService = function () {

    this.listRules = [];

    this.add = function (name, rule, message) {
        rule.message = message ? message : rule.message;
        this.listRules.push(rule);
    };

    this.getListRules = function () {
        return this.listRules;
    };

    this.init = function () {
        for(var ruleFile in rulesDir) {
            var rule = require('../rules/' + ruleFile);
            this.add(rule.name, rule.rule, rule.message);
        }
    }
};

module.exports = AdminRulesService;