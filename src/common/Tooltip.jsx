'use strict';

var React = require('react');

module.exports = React.createClass({displayName: "exports",

  propTypes: {
    x:   React.PropTypes.number,
    y:   React.PropTypes.number,
    child: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
      React.PropTypes.element
    ]),
    show: React.PropTypes.bool
  },

  render: function() {

    var props = this.props;
    var display = this.props.show ? 'inherit' : 'none';
    var containerStyles = { position: 'fixed', top: props.y, left: props.x, display: display, opacity: 0.8}

    var tooltipStyles = {
      width: '116px',
      position: 'absolute',
      backgroundColor: 'white',
      border: '2px solid',
      borderColor: '#ddd',
      borderRadius: '2px',
      padding: '10px 14px',
      marginLeft: '10px',
      marginRight: '10px',
      marginTop: '-15px',
      color: '#3C4144',
      fontWeight: '400'
    };

    var subTitleStyle = {
      textTransform: 'uppercase'
    };

    var costStyle = {
      fontWeight: '600',
      color: '#3C4144'
    };

    var date,
    subtitle,
    cost;

    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "December"
    ];

    function formatDate(date) {
        var year = date.slice(0,4);
        var month = months[(date.slice(5,7))-1];
        var day = date.slice(8, 10);
        return month + " " + day + ", " + year;
    }

    if (!!props.values[props.child.xValue-1]) {
      subtitle = props.values[props.child.xValue-1].subtitle;
      cost = props.values[props.child.xValue-1].cost;
      date = formatDate(props.values[props.child.xValue-1].date);
    }

    return (
      React.createElement("div", {style: containerStyles},
        React.createElement("div", {style: tooltipStyles},
          date,
          React.createElement('div', {style: subTitleStyle}, subtitle),
          React.createElement('div', {style: costStyle}, cost)
        )
      )
    );
  }
});
