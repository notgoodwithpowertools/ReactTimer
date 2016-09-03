var React = require('react');

var Clock = require('./Clock.jsx');

var Countdown = React.createClass({
  render: function(){
    return (
      <div>
      <p>Countdown Component</p>
      <Clock totalSeconds={129}></Clock>
      </div>

    )
  }
});

module.exports = Countdown;
