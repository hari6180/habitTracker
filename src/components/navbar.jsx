import React, { PureComponent } from "react";

class Navbar extends PureComponent {
  render() {
    return (
      <>
        <nav>
          <i className="fas fa-leaf"></i>
          <span className="title">Habit Tracker</span>
          <span className="total-count">{this.props.totalCount}</span>
        </nav>
      </>
    );
  }
}

export default Navbar;
