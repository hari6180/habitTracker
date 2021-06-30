import React, { Component } from "react";
import "./app.css";
import Habits from "./habits";

class App extends Component {
  render() {
    return (
      <>
        <div>
          <i className="fas fa-leaf"></i>
          <h1>Habit Tracker</h1>
        </div>
        <div>
          <input className="search"></input>
          <button className="add">Add</button>
        </div>
        <Habits />
        <button>Reset All</button>
      </>
    );
  }
}

export default App;
