var Rule = require('../commands/Rule');
var requireAll = require('require-dir');
var rulesDir = requireAll('../rules')

var AdminRulesService = function () {

    this.listRules = new Set();

    this.add = function (name, rule, message) {
        this.listRules.add(new Rule(name, rule, message));
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