import React from 'react';
import { ItemNumber } from './constant';
import Counter from './Counter';

type ButtonProps = {
  size: 'small' | 'large';
};
const Button: React.FC<ButtonProps> = ({ size }) => {
  if (size === 'large') {
    return (
      <button>
        App2 Large Button {ItemNumber}
        <Counter />
      </button>
    );
  }
  return <button>App 2 Small Button</button>;
};

export default Button;
