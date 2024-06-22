import React from "react";
class CounterInterview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }

    incrementCounter() {
        // Multiple setState calls are batched into a single update
        this.setState({ counter: this.state.counter + 1 });
        this.setState({ counter: this.state.counter + 1 });
        this.setState({ counter: this.state.counter + 1 });
    }

    render() {
        return (
            <div>
                <h1>Counter: {this.state.counter}</h1>
                <button onClick={() => this.incrementCounter()}>Increment</button>
            </div>
        );
    }
}
export default CounterInterview;