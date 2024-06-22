import React, { Component } from 'react'
import myContext from './MyContext'

export default class ChildContext3 extends Component {
    static contextType = myContext
  render() {
    const greetings=this.context;
    return (
      <>
        <h4>ChildContext 3 Component </h4>
        <p>{greetings}</p>
      </>
    )
  }
}
