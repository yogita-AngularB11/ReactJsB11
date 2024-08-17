import React, { Component } from 'react';
import myContext from './MyContext';

class MyContextConsumerChild3 extends Component {
  render() {
    return (
      <>
        <h4>In MyContextConsumerChild3</h4>
        <myContext.Consumer>
          {message => <p>{message}</p>}
        </myContext.Consumer>
      </>
    );
  }
}

export default MyContextConsumerChild3;
