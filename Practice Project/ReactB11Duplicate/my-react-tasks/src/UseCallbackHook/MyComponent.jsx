import React, { useCallback, useState } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  // handleClick is created once and never recreated
  const handleClick = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  console.log('handleClick recreated');

  return (
    <>
      <h4>Count: {count}</h4>
      <button onClick={handleClick}>Increment</button>
    </>
  );
}

export default MyComponent;
