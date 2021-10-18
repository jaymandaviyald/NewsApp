import React, { Component } from "react";
import NewsImage from "./newsimg.jpg";
export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, auther, publishedAt, source } =
      this.props;
    return (
      <div>
        <div className="card my-3">
          <img
            src={imageUrl ? imageUrl : NewsImage}
            className="card-img-top"
            alt="This file not available"
            height="200px"
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a
              href={newsUrl}
              className="btn btn-sm btn-warning"
              target="_blank"
              rel="noreferrer"
            >
              Read More
            </a>
            <p className="card-text mt-3">
              <small className="text-muted">
                By {!auther ? "Unknown" : auther} on{" "}
                {new Date(publishedAt).toGMTString()}
              </small>
            </p>
            <p className="card-text">
              <small className="text-muted">Source : {source}</small>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
