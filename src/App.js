import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Typography } from "@material-ui/core";
import Add from "./Components/Add";
import Todo from "./Components/Todo";

const App = () => {
  const [todoList, setTodoList] = useState([
    { id: 0, content: "premier todo", isOver: false },
    { id: 1, content: "deuxieme todo", isOver: false }
  ]);
  const add = content => {
    const index = [...todoList].sort((a, b) => b.id - a.id)[0].id + 1;
    const todo = { id: index, content, isOver: false };
    setTodoList([...todoList, todo]);
    console.log(todoList);
  };
  const edit = todo => {
    const todoListUpdated = [...todoList];
    const index = todoListUpdated.findIndex(t => t.id === todo.id);
    todoListUpdated[index] = todo;
    setTodoList(todoListUpdated);
  };
  const handleDelete = id => {
    const todoListUpdated = todoList.filter(todo => todo.id !== id);
    setTodoList(todoListUpdated);
  };
  const checkOver = todo => {
    const index = todoList.findIndex(t => t.id === todo.id);
    const list = [...todoList];
    list[index].isOver = !list[index].isOver;
    setTodoList(list);
  };
  console.log(todoList);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Typography variant="h3">Bienvenue sur la todo-app hooks</Typography>
      </header>
      <div style={{ width: 400, margin: "auto" }}>
        {todoList.map(todo => {
          return (
            <Todo
              key={todo.id}
              edit={edit}
              todo={todo}
              onDelete={handleDelete}
              checkOver={checkOver}
            />
          );
        })}
      </div>
      <Add add={add} />
    </div>
  );
};

export default App;
