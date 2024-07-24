import React, { Component } from 'react';

class ClassGreeting extends Component {
  render() {
    const { name, message } = this.props;
    return (
      <div>
        <h1>{message}</h1>
        <p>Hello, {name}!</p>
      </div>
    );
  }
}

export default ClassGreeting;