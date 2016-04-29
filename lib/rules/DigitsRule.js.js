module.exports = {
    name: 'digits',
    message: 'Invalid digit.',
    rule: function (data, param) {
        return param ? /^\d+$/.test( data ) : true;
    }
}