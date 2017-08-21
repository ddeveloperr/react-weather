var React = require('react');
var ReactDOM = require('react-dom');

// Add some es6 experiments, install babel preset 0 to enable it

var objOne = {
    name: 'Kemal',
    location: 'Sarajevo'
};

var objTwo = {
    age: 35,
    ...objOne
};

console.log(objTwo);

ReactDOM.render(
             <h1>React Boilerplate app</h1>,
             document.getElementById('app')
             );