import React, { Component } from "react";
import Comments from "./components/Comments/comments";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>🔥 Flame Wars 🔥</h1>
        <Comments />
      </div>
    );
  }
}

export default App;
