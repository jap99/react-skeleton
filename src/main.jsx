
var React = require('react');

var ReactDOM = require('react-dom');
// ReactDOM's needed since we're now ready to show something on the screen; it'll render it to the screen

var List = require('./components/List.jsx');


// let's render to the screen
// saying to grab the DOM, insert a list here & put it in the ID & our HTML code called ingredients:
ReactDOM.render(<List />, document.getElementById('ingredients')); 


 



// main.jsx is the entry point for the app & is where we call the components that are needed
// this is where everything gets started & inserted into your DOM