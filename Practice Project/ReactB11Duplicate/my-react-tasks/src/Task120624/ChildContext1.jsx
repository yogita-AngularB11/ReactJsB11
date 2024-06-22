import React, { Component } from 'react'
import ChildContext2 from './ChildContext2'

export default class ChildContext1 extends Component {
  render() {
    return (
      <div>
        <h2>ChildContext1 Component</h2>
        <ChildContext2 />
      </div>
    )
  }
}
