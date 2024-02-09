"use client"

import React, { useState } from 'react';

const Button = () => {
  const [count, setCount] = useState(5);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <button onClick={handleClick}>
      {count}
    </button>
  );
};

export default Button;