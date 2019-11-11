import React from 'react';
import ReactDOM from 'react-dom';
import Button from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
    console.log(div)
    ReactDOM.unmountComponentAtNode(div);
  });