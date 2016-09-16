var React = require('react');

var Clock = require('./Clock.jsx');
//var CountdownForm = require('./TimerForm');
var Controls = require('./Controls');


var Timer = React.createClass({

  getInitialState: function(){
    return {
      count: 0,
      timerStatus: 'stopped'
    };

  },

  componentDidUpdate: function(prevProps, prevState){
    if (this.state.timerStatus !== prevState.timerStatus) {
      switch (this.state.timerStatus) {
        case 'started' :
          this.handleStart();
          break;
        case 'stopped' :
          this.setState({count: 0})
        case 'paused' :
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },

  handleStart: function() {
    this.timer = setInterval( () => {
      this.setState({
        count: this.state.count + 1
      });
    }, 1000);
  },

  componentWillUpdate: function(nextProps, nextState){
    //console.log("Countdown WILL UPDATE");

  },

  componentWillMount: function(argument){
    //No Access to refs or DOM
    console.log("Timer component WILL MOUNT");

  },

  componentDidMount: function(argument){
    //Access to refs or DOM
    console.log("Timer component DID MOUNT");

  },

  componentWillUnmount: function(argument){
    console.log("Timer component WILL UNmount");
    clearInterval(this.timer);
    this.timer=undefined;

  },

  /*
  startTimer: function(){
    this.timer = setInterval( ()=> {
      this.setState({
        count: this.state.count + 1
      });

    }, 1000)
  },
  */

  handleSetTimer: function(seconds){
    this.setState({
      count: seconds,
      timerStatus: 'started'
    });
  },

  handleStatusChange: function(newTimerStatus){
    console.log("Timer Status:", newTimerStatus);
    this.setState({timerStatus: newTimerStatus})
  },

  render: function(){

    var {count, timerStatus} = this.state;

    /*
    var renderControlArea = () => {
      if (timerStatus !== 'stopped') {
        return <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
      }
      else {
        return <TimerForm onSetTimer={this.handleSetTimer}/>
      }
    };
    */

    return (
      <div>
      <h1 className="page-title">Timer App</h1>
      <Clock totalSeconds={count}></Clock>
      <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
      </div>

    )
  }
});

module.exports = Timer;
