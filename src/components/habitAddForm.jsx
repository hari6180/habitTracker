import React, { PureComponent } from "react";

class HabitAddForm extends PureComponent {
  inputRef = React.createRef(); // input 태그에 ref 연결하면 값 읽어옴
  onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.inputRef.current.value = "";
  };
  render() {
    console.log("habitAddForm");
    return (
      <form className="add-form" onSubmit={this.onSubmit}>
        <input ref={this.inputRef} type="text" className="add-bar" placeholder="Habit"></input>
        <button className="add">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
