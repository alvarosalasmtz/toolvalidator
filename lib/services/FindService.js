var FindService = function () {
    this.findOneInList = function (query, list) {
        for(var i in list) {
            for(property in query) {
                if (list[i][property] == query[property]) {
                    return list[i];
                }
            }
        }
        return null;
    };
};

module.exports = new FindService();