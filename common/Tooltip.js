'use strict';

var React = require('react');

module.exports = React.createClass({displayName: "exports",

  propTypes: {
    x:   React.PropTypes.number,
    y:   React.PropTypes.number,
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

    var date,
    subtitle,
    cost;

    if (!!props.values[props.child.xValue-1]) {
      subtitle = props.values[props.child.xValue-1].subtitle;
      cost = props.values[props.child.xValue-1].cost;
      date = new Date(props.values[props.child.xValue-1].date);
      date = months[date.getMonth()] + " " + (date.getDate()+1) +", "+ date.getFullYear();

      var x = props.child.xValue;
      if (x >= props.values.length-3) {
        containerStyles.left -= 132;
      }
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
