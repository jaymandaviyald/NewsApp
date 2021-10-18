import React, { Component } from "react";

export default class Spinner extends Component {
  render() {
    return (
      <div>
        <div
          className="spinner-border text-warning"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        ></div>
      </div>
    );
  }
}
