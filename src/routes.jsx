var React = require('react');
var ReactRouter = require('react-router');

//var Router = ReactRouter.Router;
//var Route = ReactRouter.Route;

var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('./components/Main.jsx');
var Countdown = require('./components/Countdown.jsx')
var Timer = require('./components/Timer.jsx')


var Routes = (
  <Router history={hashHistory}>
     <Route path="/" component={Main}>
       <Route path="countdown" component={Countdown}></Route>
       <IndexRoute component={Timer}></IndexRoute>
       
     </Route>
  </Router>
);

module.exports = Routes;
