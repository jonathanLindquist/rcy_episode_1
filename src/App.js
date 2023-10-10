import "./App.css";
import { useState } from "react";
import { Task } from "./Task";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTaskName, setNewTaskName] = useState("");

  const handleChange = (event) => {
    setNewTaskName(event.target.value);
  };

  const addTaskToList = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTaskName,
      completed: false,
    };
    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    const newList = todoList.filter((task) => {
      return task.id !== id;
    });
    setTodoList(newList);
  };

  const completeTask = (id) => {
    const newList = todoList.map((task) => {
      return task.id === id
        ? {
            ...task,
            completed: true,
          }
        : task;
    });
    setTodoList(newList);
  };

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange} />
        <button onClick={addTaskToList}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((item, key) => {
          return (
            <Task
              key={key}
              taskName={item.taskName}
              id={item.id}
              deleteTask={deleteTask}
              completeTask={completeTask}
              completed={item.completed}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
