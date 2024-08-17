import React from 'react';
import MyContextConsumerChild3 from './MyContextConsumerChild3';

const MyContextConsumerChild2 = () => {
  return (
    <>
      <h4> In MyContextConsumerChild2 </h4>
      <MyContextConsumerChild3/>
    </>
  );
}

export default MyContextConsumerChild2;
