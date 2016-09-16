var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('../../src/components/Timer.jsx');

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();

  });

  it('should start timer on started status', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer/>);
    timer.handleStatusChange('started');

    expect(timer.state.count).toBe(0);
    setTimeout(() => {
      expect(timer.state.timerStatus).toBe('started');
      expect(timer.state.count).toBe(1);
      done();

    }, 1001);

  });

  it('should pause timer on paused status', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer/>);
    timer.setState({count: 10});
    timer.handleStatusChange('started');
    timer.handleStatusChange('paused');

    setTimeout(() => {
      expect(timer.state.timerStatus).toBe('paused');
      expect(timer.state.count).toBe(10);
      done();

    }, 1001);

  });

  it('should clear count on stopped status', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer/>);
    timer.setState({count: 10});
    timer.handleStatusChange('started');
    timer.handleStatusChange('stopped');

    setTimeout(() => {
      expect(timer.state.timerStatus).toBe('stopped');
      expect(timer.state.count).toBe(0);
      done();

    }, 1001);

  });


/*
  describe('render', () => {

    it('should render clock to output', () => {
      var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
      var $element = $(ReactDOM.findDOMNode(clock));
      var actualText = $element.find('.clock-text').text();

      expect(actualText).toBe('01:02');
    });

  });

  describe('formatSeconds', () => {
    it('should format seconds', () => {
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var seconds = 615;
      var expected = '10:15';
      var actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });
    it('should format seconds when min/sec < 10', () => {
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var seconds = 61;
      var expected = '01:01';
      var actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });

  });
*/
});
