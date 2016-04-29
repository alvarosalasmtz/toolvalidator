module.exports = {
    name: 'maxlength',
    message: 'Invalid maxlength.',
    rule: function (data, param) {
        return data.length <= param;
    }
}