var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var Controls = require('../../src/components/Controls.jsx');

describe('Controls', () => {
  it('should exist', () => {
    expect(Controls).toExist();

  });

  describe('render', () => {

    it('should render pause controls to output when started', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>);
      var $element = $(ReactDOM.findDOMNode(controls));

      var $pauseButton = $element.find('button:contains(Pause)');
      //length = number of matching buttons found
      expect($pauseButton.length).toBe(1);
    });

    it('should render start control to output when paused', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused"/>);
      var $element = $(ReactDOM.findDOMNode(controls));

      var $pauseButton = $element.find('button:contains(Start)');
      //length = number of matching buttons found
      expect($pauseButton.length).toBe(1);
    });

    /*
    it('should be called with paused after pause button clicked', () => {
      var spy = expect.createSpy();
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started" onStatusChange={spy}/>);

      var pauseButton = controls.refs.pauseButton;
      TestUtils.Simulate.click(pauseButton);
      //expect(spy).toHaveBeenCalledWith('paused');
      expect(controls.state.countdownStatus).toBe('paused');

    });
    */

    it('should return a function provided by parent', () => {

      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused" />);

      var result = controls.onStatusChange('paused');

      expect(result).toBeA('function');

    });

  });

/*
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
