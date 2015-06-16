var React = require('react');
var Note = require('./note');
var MuiCom= require('./muiCom');

var App = React.createClass({
        render: function() {
                return <div><div> <Note /></div><div><MuiCom /></div></div>;
        }
});

module.exports = App;
