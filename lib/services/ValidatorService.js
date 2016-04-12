var findService = require('./FindService');

var ValidatorService = function () {
    this.evaluate = function (data, dataConditions, listRules) {
        var listResponse = [];
        for (index in dataConditions) {
            var response = {name: index, errors: []}
            var itemData = data[index] ? data[index] : null;
            if (this.validateData(index, itemData) == null) {
                this.evaluateConditions(dataConditions[index], index, itemData, listRules, response);
            } else {
                response.errors.push(this.validateData(index, itemData));
            }
            listResponse.push(response)
        }
        return listResponse;
    };

    this.evaluateConditions = function (dataCondition, nameData, itemData, listRules, response) {
        for (var index in dataCondition.rules) {
            var rule = findService.findOneInList({name: index}, listRules);
            if (this.validateRule(index, rule) == null) {
                var message = this.evaluateRuleWithData(
                    dataCondition.rules[index], itemData, rule
                );
                if (message != null)
                    response.errors.push(message)
            } else {
                response.errors.push(this.validateRule(index, rule));
            }
        }
    };

    this.evaluateRuleWithData = function (condition, data, rule) {
        if (!rule.rule(data, condition.condition)) {
            return condition.message ? condition.message : rule.message;
        }
        return null;
    };

    this.validateData = function (name, data) {
        return !data ? (name + ' not exist in data') : null;
    };

    this.validateRule = function (name, rule) {
        return !rule ? (name + ' not exist in Rules') : null;
    };
};

module.exports = new ValidatorService();