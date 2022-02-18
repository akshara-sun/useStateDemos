import React, { Component } from "react";

class CounterClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initialCount: 0,
      count: 0,
      textColor: "white"
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
      textColor: "blue"
    });
  };

  decrementCount = () => {
    this.setState({
      count: this.state.count - 1,
      textColor: "yellow"
    });
  };

  resetCount = () => {
    this.setState({
      count: this.state.initialCount,
      textColor: "white"
    });
  };

  render() {
    return (
      <>
        <div className="CounterClass">
          <p>Counter class Component</p>
          <h3 style={{ color: this.state.textColor }}>{this.state.count}</h3>
          <button onClick={this.decrementCount}>-</button>
          <button onClick={this.resetCount}>Reset</button>
          <button onClick={this.incrementCount}>+</button>
        </div>
      </>
    );
  }
}

export default CounterClass;

/* 
Notes:
- lines 4-12: sets the initial state of counter and of text color
- lines 14-19: setState() used to update state of counter and text color when "+" button is clicked 
- lines 21-26: setState() used to update state of counter and text color when "-" button is clicked
- lines 28-33: setState() used to update state of counter and text color when "reset" button is clicked
- lines 35-47: rendering the component
*/
