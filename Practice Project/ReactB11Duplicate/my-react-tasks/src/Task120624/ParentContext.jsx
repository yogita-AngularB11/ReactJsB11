import React, { Component } from 'react'
import myContext from './MyContext';
import ChildContext1 from './ChildContext1';

export default class ParentContext extends Component {

    
    constructor(props) {
        super(props);
        this.state = {
            greetings: "Hello from Parent"
        }

    }

    render() {
        return (
            <>
            <h1>Parent Component</h1>
                <myContext.Provider value={this.state.greetings}>
                    <ChildContext1 />
                </myContext.Provider>
            </>
        )
    }
}
