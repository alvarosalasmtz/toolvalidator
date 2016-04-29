module.exports = {
    name: 'equalTo',
    message: 'Not equalTo.',
    rule: function (data, param) {
        return data === param;
    }
}