import React, { Component } from 'react';
import myContext from './MyContext';
import MyContextConsumerChild1 from './MyContextConsumerChild1';

class MyContextProviderParent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      welcomeMsg: 'Welcome to CodeMind Technology!!!'
    };
  }

  render() {
    return (
      <>
        <h1> Parent of Context API</h1>  
        <myContext.Provider value={this.state.welcomeMsg}>
            <MyContextConsumerChild1/>
        </myContext.Provider>
      </>
    );
  }
}

export default MyContextProviderParent;
