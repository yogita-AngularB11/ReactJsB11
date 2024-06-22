import React, { Component } from 'react'
import ChildContext3 from './ChildContext3'

export default class ChildContext2 extends Component {
  render() {
    return (
      <>
      <h3>ChildContext 2 Component</h3>
        <ChildContext3 />
      </>
    )
  }
}
