module.exports = {
    name: 'minlength',
    message: 'Invalid minlength.',
    rule: function (data, param) {
        return data.length >= param;
    }
}