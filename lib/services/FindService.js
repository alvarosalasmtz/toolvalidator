var filter = require('array.filter');

var FindService = function () {
    this.findOneInList = function (query, list) {
        var filter = filter(query, list);
        console.log(query);
        return filter;
    };
};

module.exports = new FindService();