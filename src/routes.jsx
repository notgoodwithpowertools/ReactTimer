var React = require('react');
var ReactRouter = require('react-router');
//var Router = ReactRouter.Router;
//var Route = ReactRouter.Route;

var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('./components/Main.jsx');

var Routes = (
  <Router history={hashHistory}>
     <Route path="/" component={Main}>
       
     </Route>
  </Router>
);

module.exports = Routes;
