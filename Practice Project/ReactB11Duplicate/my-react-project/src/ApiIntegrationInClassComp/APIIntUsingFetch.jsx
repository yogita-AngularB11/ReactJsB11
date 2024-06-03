import React, { Component } from 'react'

export default class APIIntUsingFetch extends Component {

  constructor(props) {
    super(props)

    this.state = {
      users: []
    }

  }

  componentDidMount() {
    console.log('Inside component did mount');
    this.fetchUserDetails();
  }

  fetchUserDetails = async () => {
    console.log('Inside FetchUser details')
    const userData = await fetch('https://fakestoreapi.com/users');
    const data = await userData.json();
    console.log(data);
    this.setState({ users: data })
  }

  render() {
    return (
      <>
        <h2> Calling API using fetch Method</h2>
        <table className="table table-striped">
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
