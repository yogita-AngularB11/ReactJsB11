import React, { Component } from "react";

class ArrayInClassComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: ["Item 1", "Item 2", "Item 3"]
        };
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    addItem() {
        // Adding a new item to the array
        this.setState(prevState => ({
            items: [...prevState.items, `Item ${prevState.items.length + 1}`]
        }));
    }

    removeItem(index) {
        // Removing an item at the given index
        this.setState(prevState => ({
            items: prevState.items.filter((_, i) => i !== index)
        }));
    }

    render() {
        return (
            <>
                <h1>Array in Class Component</h1>
                <ul>
                    {this.state.items.map((item, index) => (
                        <li key={index}>
                            {item} <button onClick={() => this.removeItem(index)}>Remove</button>
                        </li>
                    ))}
                </ul>
                <button onClick={this.addItem}>Add Item</button>
            </>
        );
    }
}

export default ArrayInClassComp;
