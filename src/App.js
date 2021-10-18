import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 24;
  constructor() {
    super();
    this.state = {
      progress: 0,
    };
  }
  setProgress = (progress) => {
    this.setState({
      progress: progress,
    });
  };
  render() {
    return (
      <div>
        <Router>
          <LoadingBar
            color="#fd7e14"
            progress={this.state.progress}
            height={4}
          />
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
              <News
                key="homepage"
                pageSize={this.pageSize}
                country="in"
                category="general"
                setProgress={this.setProgress}
              ></News>
            </Route>
            <Route exact path="/general">
              <News
                key="general"
                pageSize={this.pageSize}
                country="in"
                category="general"
                setProgress={this.setProgress}
              ></News>
            </Route>
            <Route exact path="/business">
              <News
                key="business"
                pageSize={this.pageSize}
                country="in"
                category="business"
                setProgress={this.setProgress}
              ></News>
            </Route>
            <Route exact path="/entertainment">
              <News
                key="entertainment"
                pageSize={this.pageSize}
                country="in"
                category="entertainment"
                setProgress={this.setProgress}
              ></News>
            </Route>
            <Route exact path="/health">general
              <News
                key="health"
                pageSize={this.pageSize}
                country="in"
                category="health"
                setProgress={this.setProgress}
              ></News>
            </Route>
            <Route exact path="/science">
              <News
                key="science"
                pageSize={this.pageSize}
                country="in"
                category="science"
                setProgress={this.setProgress}
              ></News>
            </Route>
            <Route exact path="/sports">
              <News
                key="sports"
                pageSize={this.pageSize}
                country="in"
                category="sports"
                setProgress={this.setProgress}
              ></News>
            </Route>
            <Route exact path="/technology">
              <News
                key="technology"
                pageSize={this.pageSize}
                country="in"
                category="technology"
                setProgress={this.setProgress}
              ></News>
            </Route>
            <Route path="*">
              <div className="container text-center" style={{marginTop:"80px"}}>
                <h2>404, Page not found</h2>
              </div>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
