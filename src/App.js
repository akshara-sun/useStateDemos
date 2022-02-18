import CounterHook from "../src/components/hookCounter";
import CounterClass from "../src/components/classCounter";
import "./styles.css";
import TodoListClass from "./components/toDoListApps/classTodo";
import ToDoListHookComponent from "./components/toDoListApps/hookTodo";

export default function App() {
  return (
    <>
      <div className="App">
        <h1>useState Hook</h1>
        <CounterClass />
        <CounterHook />
        <TodoListClass />
        <ToDoListHookComponent />
      </div>
    </>
  );
}
