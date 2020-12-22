var React = require('react');

var ListItem = React.createClass({       // each list item will have a heading in it (aka h4)
    render: function() {
        return(
            <li>
                <h4>{this.props.ingredients}</h4>
            </li>
        );
    }
})


module.exports = ListItem;          // node sytax