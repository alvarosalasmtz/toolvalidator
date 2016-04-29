module.exports = {
    name: 'date',
    message: 'Invalid date.',
    rule: function (data, param) {
        return param ? !/Invalid|NaN/.test( new Date( data ).toString()) : true;
    }
}