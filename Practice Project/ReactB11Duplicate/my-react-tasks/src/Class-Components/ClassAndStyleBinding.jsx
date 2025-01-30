import React, { Component } from 'react'

export default class ClassAndStyleBinding extends Component {
    constructor() {
        super();
        this.state = {
            UserName: '',
            Price: 0,
            Stock: false,
            Theme: 'bg-light'
        }
    }

    componentDidMount() {
        this.setState({
            UserName: 'Yogita',
            Price: 999,
            Stock: true,
            Theme: 'bg-danger text-white'
        })
    }
    render() {
        return (
            <div className='container-fluid'>
                <div className={`p-2 m-2  w-25 border border-2  ${this.state.Theme}`}>
                    <h2>Welcome...! {this.state.UserName}</h2>
                    <p>Price:{this.state.Price}</p>
                    <p>Stock:{(this.state.Stock === true) ? "Available" : "out of stock"}</p>
                </div>
            </div>
        )
    }
}
