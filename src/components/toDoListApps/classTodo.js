import React, { Component } from "react";
import data from "./data.json";

class TodoListClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [...data],
      input: "",
      completedList: []
    };
  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value
    });
  };

  handleSubmit = (event, val) => {
    event.preventDefault();
    val = this.state.input;
    if (val === "") {
      alert("Cannot add blank space as a task.");
    } else {
      this.setState((prevState) => ({
        list: [...prevState.list, val],
        input: ""
      }));
    }
  };

  deleteItem = (completedItem) => {
    const done = this.state.list.filter((item) => item === completedItem);
    const current = this.state.list.filter((item) => item !== completedItem);
    this.setState((oldList) => ({
      list: current,
      completedList: [...oldList.completedList, done]
    }));
  };

  clearTable = () => {
    this.setState({
      completedList: []
    });
  };

  render() {
    return (
      <>
        <h1>To-Do List built w/ class components</h1>
        <div className="ListClass">
          <table className="table">
            <thead>
              <tr>
                <td className="table">
                  <h3>To-Do Items</h3>
                </td>
                <td className="table">
                  <h3>Completed Items</h3>
                  <button className="clear-button" onClick={this.clearTable}>
                    Clear
                  </button>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="table">
                  <form onSubmit={this.handleSubmit}>
                    <input
                      placeholder="Add tasks here..."
                      value={this.state.input}
                      type="text"
                      onChange={this.handleChange}
                    />
                  </form>
                  <ol className="toDoList">
                    {this.state.list.map((todo, index) => (
                      <li key={index.toString()}>
                        {todo}{" "}
                        {
                          <button onClick={() => this.deleteItem(todo)}>
                            {" "}
                            Complete{" "}
                          </button>
                        }
                      </li>
                    ))}
                  </ol>
                </td>
                <td className="table">
                  <ol className="CompletedList">
                    {this.state.completedList.map((item, index) => (
                      <li key={index.toString()}>{item}</li>
                    ))}
                  </ol>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default TodoListClass;
