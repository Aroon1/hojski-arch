var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <p>Boilerplate 3 Project</p>
  <Router history={hashHistory}>
    <Route path="/" component={index.html}>
    </Route>
  </Router>,
  document.getElementById('app')
);
