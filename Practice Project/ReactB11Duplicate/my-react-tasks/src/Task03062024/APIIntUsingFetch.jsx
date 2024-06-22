import React, { Component } from 'react';
import './style.css'

export default class APIIntUsingFetch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    console.log('Inside component did mount');
    this.fetchUserDetails();
  }

  fetchUserDetails = async () => {
    console.log('Inside FetchUser details');
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    console.log(data);
    this.setState({ products: data });
  }

  render() {
    return (
      <>
        <h2 style={{textAlign:'center'}}>Calling API using fetch Method</h2>
        <div className="card-container">
          {this.state.products.map((product) => (
            <div className="card" style={{ width: "18rem" }} key={product.id}>
              <img src={product.image} className="card-img-top" alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">${product.price}</p>
                {/* <p className="card-text">{product.description}</p> */}
                <a href="/" className="btn btn-primary me-2">Buy Now</a>
                <a href="/" className="btn btn-secondary">Add To Cart</a>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}
