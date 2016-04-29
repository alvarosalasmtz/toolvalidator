module.exports = {
    name: 'dateIso',
    message: 'Invalid date.',
    rule: function (data, param) {
        return param ? /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test( data ) : true;
    }
}