var orm = require('../config/orm.js');

module.exports = {
    all: function(callback) {
        orm.selectAll('burgers', 'id', 'DESC', function(data) {
            callback(data);
        });
    },
    post: function(input, callback) {
        var columns = '(burger_name, devoured)';
        var values = '\'' + input + '\', false';

        orm.insertOne('burgers', columns, values, function(data) {
            callback(data);
        });
    },
    update: function(property, selector, callback) {
        var update = 'devoured = ' + property;
        var condition = 'id = ' + selector;

        orm.updateOne('burgers', update, condition, function(data) {
            callback(data);
        })
    }
};