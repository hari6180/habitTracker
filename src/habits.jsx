import React, { Component } from "react";
import Habit from "./components/habit";

class Habits extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "coding", count: 0 },
    ],
  };
  handleIncrement = (habit) => {
    console.log(`handleIncrement ${habit.name} ${habit.count}`);
    const habits = [...this.state.habits]; // 직접 수정하는건 안좋기 때문에 spread로 복사
    const index = habits.indexOf(habit);
    habits[index].count++; // 이것도 좋지는 않음
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    console.log(`handleDecrement ${habit.name} ${habit.count}`);
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    // if (habit.count > 0) {
    //   habits[index].count--;
    // }
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    console.log(`handleDelete ${habit.name} ${habit.count}`);
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // if (index != 0) {
    //   habits.pop(habits[index]);
    // }
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };
  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
