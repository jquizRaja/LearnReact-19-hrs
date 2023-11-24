import React from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import AppName from './components/AppName';
import TodoItems from './components/TodoItems';

const App = () => {
  const todoItems = [
    {
    name: "Buy-Milk",
    dueDate: "11/11/2023",
    },
    {
    name: "Go to College",
    dueDate: "11/11/2023",
    },
    {
    name: "Like this Video",
    dueDate: "right now",
    },
  ]
  return (
    <>
      <center className="todo-conatiner">
        <AppName/>
        <AddTodo />
        <TodoItems todoItems={todoItems} />
      </center>
    </>
  );
};

export default App;