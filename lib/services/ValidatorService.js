

var ValidatorService = function () {
    this.evaluate = function (data, itemsRules, listRules) {
        for(var item in itemsRules) {
            for(var ruleToValidate in item.rules) {
                for(var rule in listRules) {
                    if(rule) {
                        
                    }
                }
            }
        }
    };
};

module.exports = ValidatorService;