import React, { Component } from 'react'

export default class CounterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
        // Bind the event handler to the class instance
        this.incrementCounter = this.incrementCounter.bind(this);
    }
    incrementCounter() {
        console.log("Inside increment counter");
        this.setState({counter: this.state.counter + 1},() => {
                    console.log(this.state.counter);
                })
        this.setState({counter: this.state.counter + 1},() => {
                    console.log(this.state.counter);
                })
        this.setState({counter: this.state.counter + 1},() => {
                    console.log(this.state.counter);
                })

        // this.setState(
        //     {counter: this.state.counter + 1},
        //     () => {
        //         console.log(this.state.counter);
        //     }
        // );
    }
    render() {
        return (
            <div>
                <h1>State In Class Component</h1>
                <h3>Current Count: {this.state.counter}</h3>
                
                <button onClick={this.incrementCounter}>Count++</button>
            </div>
        )
    }
}
