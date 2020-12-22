// our List creates a ListItem for each ingredient & that's what goes into the List

var React = require('react'); 
var ListItem = require('./ListItem.jsx');       // we add the .JSX because it's how we import non-NPM modules that aren't JS

// make a list of objects / ingredients  ---- React likes unique IDs for lists

var ingredients = [                       
    {        
        "id": 1,
        "text": "ham"
    },
    {
        "id": 2,
        "text": "cheese"
    },
    {
        "id": 3,
        "text": "potato"
    }
]

var List = React.createClass({
    render: function() {
                                // .map is a JS function used a lot when working w/ list in React    
        var listItems = ingredients.map(function(item) {    // passed in item
            // return a list item where the key is equal to item.id & we'll pass in item.text
            // for each item passed into the fcn it returns a ListItem
            return <ListItem key={item.id} ingredient={item.text} />
        });

        // now we need the HTML & more JSX in it (i think...)
        return (<ul>
            {   // braces not required but help show where things start & end
                listItems       // we're trying a whole list of list items
            }
        </ul>)
    }
});


module.exports = List; 





// at this point we've created many list items; 1 for each ingredient & that's now part of our list



