import React from 'react';

const FunctionalGreeting = ({ name, message }) => {
  return (
    <div>
      <h1>{message}</h1>
      <p>Hello, {name}!</p>
    </div>
  );
};

export default FunctionalGreeting;