import axios from 'axios';
import React, { Component } from 'react'
import './style.css'

export default class APIIntUsingAxios extends Component {

    constructor(props){
        super(props)

        this.state={
            users :[]
        }

    }

    componentDidMount(){
        console.log('Inside component did mount using axio');
        this.featchUserDetails();

    }

    featchUserDetails = async() =>{
            const userData = await axios.get('https://fakestoreapi.com/users');
            console.log(userData);

            this.setState({users : userData.data})
    }

  render() {
    return (
      <>
            <h2>API Integration Using Axios</h2>
            <table className="table table-striped table-container">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">EMAIL</th>
              <th scope="col">USERNAME</th>
              <th scope="col">PASSWORD</th>
            </tr>
          </thead>
          <tbody>
          {this.state.users.map((user) => ( 
          <tr key={user.id}>
              <th scope="row">{user.id}</th>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.password}</td>
            </tr>
            ))} 
          </tbody>
        </table>
      </>
    )
  }
}
