import React, { Component } from 'react'

export default class DataBindingClassComp extends Component {
    constructor(props) {
        super();
    }
   
    UserName="Yogita"
    render() {
        return (
            <div className='container-fluid'>
                <p>Hello...! {this.UserName}</p>
                <p>This is not recommended to store data in property.We recommend to store data in state</p>
                <p>Git check</p>
            </div>
        )
    }
}
