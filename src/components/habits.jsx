import React, { Component } from "react";
import Habit from "./habit.jsx";
import HabitAddForm from "./habitAddForm.jsx";

class Habits extends Component {
  handleIncrement = (habit) => {
    this.props.onIncrement(habit);
  };

  handleDecrement = (habit) => {
    this.props.onDecrement(habit);
  };

  handleDelete = (habit) => {
    this.props.onDelete(habit);
  };

  handleAdd = (name) => {
    this.props.onAdd(name);
  };

  render() {
    console.log("habits");
    return (
      <>
        <HabitAddForm onAdd={this.handleAdd} />
        <section>
          <ul>
            {this.props.habits.map((habit) => (
              <Habit
                key={habit.id}
                habit={habit}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
              />
            ))}
          </ul>
        </section>
      </>
    );
  }
}

export default Habits;
