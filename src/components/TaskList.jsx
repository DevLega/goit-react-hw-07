import React, { Component } from "react";
import Task from "./Task";

export default class TaskList extends Component {
  state = {
    tasks: [
      {
        id: 0,
        text: "test",
      },
    ],
    inputValue: "",
  };

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  addTask = () => {
    const { inputValue, tasks } = this.state;
    if (!inputValue.trim()) return;

    const newTask = {
      id: Date.now(),
      text: inputValue,
    };

    this.setState({
      tasks: [...tasks, newTask],
      inputValue: "",
    });
  };

  deleteTask = (id) => {
    this.setState((prev) => ({
      tasks: prev.tasks.filter((task) => task.id !== id),
    }));
  };

  render() {
    return (
      <div>
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: 'center',
            justifyContent: 'center',
            gap: "10px"
        }}>
          <input
            type="text"
            placeholder="Task"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
          <button onClick={this.addTask}>Додати завдання</button>
        </div>

        <ul style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px"
        }}>
          {this.state.tasks.map((task) => {
            return <Task 
            key={task.id} 
            task={task} 
            onDelete={this.deleteTask} 
            />;
          })}
        </ul>
      </div>
    );
  }
}
