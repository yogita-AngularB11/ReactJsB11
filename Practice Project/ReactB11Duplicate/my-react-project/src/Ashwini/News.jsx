import React, { Component } from "react";
import NewsItem from "./NewsItem"; // Assuming you might use it later

export class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            art: []
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4e75b9f31da04cd7a2a0502e3dde3448");
        const apiData = await response.json();
        console.log(apiData);
        this.setState({ art: apiData });
    };

    render() {
        return (
            <div className="container my-3">
                <h2>News Monkey Headlines</h2>
                <div className="row">
                    {this.state.art.map((element) => (
                        <div className="col-md-4" key={element.id}>
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={element.image} className="card-img-top" alt={element.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{element.status}</h5>
                                    <p className="card-text">${element.articles}</p>
                                    <a href="/" className="btn btn-primary me-2">Buy Now</a>
                                    <a href="/" className="btn btn-secondary">Add To Cart</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default News;
