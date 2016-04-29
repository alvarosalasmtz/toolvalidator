module.exports = {
    name: 'number',
    message: 'Invalid number.',
    rule: function (data, param) {
        return param ? /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test( data ) : true;
    }
}