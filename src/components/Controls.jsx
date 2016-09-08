var React =  require('react');

var Controls = React.createClass({

   propTypes: {
     countdownStatus: React.PropTypes.string.isRequired,
     onStatusChange: React.PropTypes.func.isRequired
   },

   componentWillReceiveProps: function(newProps){
     console.log("Component will receive props:", newProps.countdownStatus);
   },

   onStatusChange: function(newStatus){
     console.log("newStatus", newStatus);

     return () => {
       this.props.onStatusChange(newStatus)
     }
   },

   render: function(){
     var {countdownStatus} = this.props;
     console.log("Countdownstatus:", countdownStatus);


     var renderStartStopButton = () => {
      if (countdownStatus === 'started') {
        return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
      } else if (countdownStatus === 'paused') {
        return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
      }
     }


     return (
       <div className="controls">

       {renderStartStopButton()}
       <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>
         Clear
       </button>

       </div>
     )

   }

});


module.exports = Controls;
