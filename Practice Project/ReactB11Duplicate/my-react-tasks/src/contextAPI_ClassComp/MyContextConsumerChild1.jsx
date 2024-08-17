import React from 'react';
import MyContextConsumerChild2 from './MyContextConsumerChild2';

const MyContextConsumerChild1 = () => {
  return (
    <>
      <h4>In MyContextConsumerChild1 </h4>
      <MyContextConsumerChild2/>
    </>
  );
}

export default MyContextConsumerChild1;
