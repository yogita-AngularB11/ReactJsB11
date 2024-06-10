import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4e75b9f31da04cd7a2a0502e3dde3448");
    const apiData = await response.json();
    this.setState({ articles: apiData.articles });
  };

  render() {
    return (
      <div className="container my-3">
        <h2>News Monkey Headlines</h2>
        <div className="row">
          {this.state.articles.map((element, index) => (
            <div className="col-md-4" key={index}>
              <NewsItem title={element.title} description={element.description} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default News;
