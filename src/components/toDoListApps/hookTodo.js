import React, { useState } from "react";
import data from "./data.json";

export default function ToDoListHookComponent() {
  const initialListState = [];
  const [input, updateInput] = useState("");
  const [taskList, setTaskList] = useState([...data]);
  const [completedList, setCompletedList] = useState([]);

  const handleSubmit = (event, userInput) => {
    event.preventDefault();
    if (userInput === "") {
      alert("Cannot add blank space as a task.");
    } else {
      setTaskList((taskList) => [...taskList, input]);
      updateInput("");
    }
  };

  const deleteItem = (completedItem) => {
    const done = taskList.filter((item) => item === completedItem);
    const current = taskList.filter((item) => item !== completedItem);
    setTaskList(current);
    setCompletedList((completedList) => [...completedList, ...done]);
  };

  const clearTable = () => {
    setCompletedList(initialListState);
  };

  return (
    <>
      <h1>To-Do List built w/ useState Hook</h1>
      <div className="ListHook">
        <table className="table">
          <thead>
            <tr>
              <td className="table">
                <h3>To-Do Items</h3>
              </td>
              <td className="table">
                <h3>Completed Items</h3>
                <button className="clear-button" onClick={() => clearTable()}>
                  Clear
                </button>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="table">
                <form onSubmit={handleSubmit}>
                  <input
                    placeholder="Add tasks here..."
                    value={input}
                    type="text"
                    onChange={(e) => updateInput(e.target.value)}
                  />
                </form>
                <ol className="toDoList">
                  {taskList.map((todo, index) => (
                    <li key={index.toString()}>
                      {todo}{" "}
                      {
                        <button onClick={() => deleteItem(todo)}>
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
                  {completedList.map((item, index) => (
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
