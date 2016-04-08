var Rule = function () {
    this.constructor = function (name, rule, message) {
        this.rule = rule;
        this.message = message;
        this.name = name;
    };

    this.validate = function (data, param) {
        return this.rule(data, param) ? {
            name: this.name,
            isValid: true,
            message: 'ok'
        } : {
            name: this.name,
            isValid: false,
            message: this.message
        };
    };
};

module.exports = Rule;