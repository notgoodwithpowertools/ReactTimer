var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');

var CountdownForm = require('../../src/components/CountdownForm');

describe('CountdownForm', () => {
  it('should exist', () => {
    expect(CountdownForm).toExist();
  });

  it('should call onSetCountdown if valid seconds entered', () => {
    var spy = expect.createSpy();
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    var $element = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.seconds.value = '109';
    TestUtils.Simulate.submit($element.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(109);

  });

  it('should NOT call onSetCountdown if invalid seconds entered', () => {
    var spy = expect.createSpy();
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    var $element = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.seconds.value = '109ABC';
    TestUtils.Simulate.submit($element.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();

  });

});
